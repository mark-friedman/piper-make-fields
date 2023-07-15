/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview A field used to customize a colorGrid.
 * @author matt.m.matz@gmail.com (Matthew Matz)
 * Based on framework for custom fields by
 * @author bekawestberg@gmail.com (Beka Westberg)
 */


// Generally field's values should be optional, and have logical defaults.
// If this is not possible (for example image fields can't have logical
// defaults) the field should throw a clear error when a value is not provided.
// Editable fields also generally accept validators, so we will accept a
// validator.

Blockly.FieldColorGrid = class extends Blockly.Field {
    constructor(paintbrush_field_name, opt_colorGrid, opt_validator) {

        // The colorGrid field contains an object as its value, so we need to compile
        // the parameters into an object.
        super((opt_colorGrid || '000000,000000'), opt_validator);

        // populate the displayValue array with the current value
        this.sanitizeValue_(opt_colorGrid || '000000,000000');

        // this field requires a color input from another field on the source block.
        //this.paintbrush = () => this.getSourceBlock().getFieldValue(paintbrush_field_name);
        this.paintbrush = () => this.getSourceBlock().currentColor;

        /**
         * The size of the area rendered by the field.
         * @type {Blockly.utils.Size}
         * @protected
         * @override
         */
        this.size_ = new Blockly.utils.Size(0, 0);

        /**
         * Click event data.
         * @type {?Blockly.EventData}
         * @private
         */
        this.clickWrapper_ = null;

        /**
         * Move event data.
         * @type {?Blockly.EventData}
         * @private
         */
        this.moveWrapper_ = null;

        // Since this field is editable we must also define serializable as true
        // (for backwards compatibility reasons serializable is false by default).
        this.SERIALIZABLE = true;

        // The cursor property defines what the mouse will look like when the user
        // hovers over the field. By default the cursor will be whatever
        // .blocklyDraggable's cursor is defined as (vis. grab). Most fields define
        // this property as 'default'.
        this.CURSOR = 'pointer';

        // Used to keep track of our editor event listeners, so they can be
        // properly disposed of when the field closes. You can keep track of your
        // listeners however you want, just be sure to dispose of them!
        this.editorListeners_ = [];
    }



    /**
     * Construct a FieldPitch from a JSON arg object.
     * @param {!Object} options A JSON object with options (pitch).
     * @return {!FieldPitch} The new field instance.
     * @package
     * @nocollapse
     */
    static fromJson = function (options) {
        // In this case we simply pass the JSON options along to the constructor,
        // but you can also use this to get message references, and other such things.
        return new Blockly.FieldColorGrid(
            options['colorGrid']);
    };

    // Used to create the DOM of our field.
    initView = function () {
        // Because we want to have both a borderRect_ (background) and a
        // textElement_ (text) we can call the super-function. If we only wanted
        // one or the other, we could call their individual createX functions.
        Blockly.Field.prototype.initView.call(this);

        // Note that the field group is created by the abstract field's init_
        // function. This means that *all elements* should be children of the
        // fieldGroup_.
        this.createView_();
    };

    // Updates how the field looks depending on if it is editable or not.
    updateEditable = function () {
        if (!this.fieldGroup_) {
            // Not initialized yet.
            return;
        }
        // The default functionality just makes it so the borderRect_ does not
        // highlight when hovered.
        Blockly.Field.prototype.updateEditable.call(this);
        // Things like this are best applied to the clickTarget_. By default the
        // click target is the same as getSvgRoot, which by default is the
        // fieldGroup_.
        var group = this.getClickTarget_();
        if (!this.isCurrentlyEditable()) {
            group.style.cursor = 'not-allowed';
        } else {
            group.style.cursor = this.CURSOR;
        }
    };

    // Gets the text to display when the block is collapsed
    getText = function () {
        return 'color grid';
    };

    // Makes sure new field values (given to setValue) are valid, meaning
    // something this field can legally "hold". Class validators can either change
    // the input value, or return null if the input value is invalid. Called by
    // the setValue() function.
    doClassValidation_ = function (newValue) {
        // updating sanitizes the value, so no need to validate.
        return newValue;
    };

    // Saves the new field value. Called by the setValue function.
    doValueUpdate_ = function (newValue) {
        // The default function sets this field's this.value_ property to the
        // newValue, and its this.isDirty_ property to true. The isDirty_ property
        // tells the setValue function whether the field needs to be re-rendered.

        // Update the displayed values and sanitize the actual value if necessary.
        newValue = this.sanitizeValue_(newValue);
        this.isDirty_ = true;

        Blockly.Field.prototype.doValueUpdate_.call(this, newValue);
    };

    // Notifies that the field that the new value was invalid. Called by
    // setValue function. Can either be triggered by the class validator, or the
    // local validator.
    doValueInvalid_ = function (invalidValue) {
        // noOp
    };

    sanitizeValue_ = function (newValue) {
        // Update the displayed values and sanitize the actual value if necessary.
        this.displayValue_ = newValue.split(',');
        var needsSanitize = false;
        for (let x = 0; x < 64; x++) {
            if (!this.displayValue_[x]) {
                this.displayValue_[x] = '000000';
                needsSanitize = true;
            } else if (this.displayValue_) {
                this.displayValue_[x] = this.displayValue_[x].replace(/[^0-9A-Fa-f]+/g,'');
                if (this.displayValue_[x].length < 6) {
                    this.displayValue_[x] = '000000';
                    needsSanitize = true;
                }
            }
        }
        if (needsSanitize) {
            newValue = this.displayValue_.join(',');
        }
        return newValue;
    };

    // Updates the field's on-block display based on the current display value.
    render_ = function () {

        this.borderRect_.style.fill = '#fff';
        this.borderRect_.style.fillOpacity = 0.6;

        var bbox = this.movableGroup_.getBBox();
        var width = bbox.width;
        var height = bbox.height;
        if (this.borderRect_) {
            width += this.constants_.FIELD_BORDER_RECT_X_PADDING * 2;
            height += this.constants_.FIELD_BORDER_RECT_X_PADDING * 2;
            this.borderRect_.setAttribute('width', width);
            this.borderRect_.setAttribute('height', height);
        }
        // Note how both the width and the height can be dynamic.
        this.size_.width = width;
        this.size_.height = height;
    };

    // Called when the field is clicked. It is usually used to show an editor,
    // but it can also be used for other things e.g. the checkbox field uses
    // this function to check/uncheck itself.
    showEditor_ = function () {
        if (this.getSourceBlock().onchange) {
            this.getSourceBlock().onchange('showPaintbrush');
        }
        this.editor_ = this.dropdownCreate_();
        Blockly.DropDownDiv.getContentDiv().appendChild(this.editor_);

        // These allow us to have the editor match the block's colour.  // Not doing this to keep the editor area white.
        //var fillColour = this.sourceBlock_.getColour();
        //Blockly.DropDownDiv.setColour(fillColour,
            //this.sourceBlock_.style.colourTertiary);

        // Always pass the dropdown div a dispose function so that you can clean
        // up event listeners when the editor closes.
        Blockly.DropDownDiv.showPositionedByField(
            this, this.dropdownDispose_.bind(this));
    };

    // Creates the UI of the editor, and adds event listeners to it.
    dropdownCreate_ = function () {
        var gridRow = [];
        var gridCell = [[],[],[],[],[],[],[],[]];
        var widget = document.createElement('div');
        widget.className = 'BlocklyColorGridWidget blocklyNonSelectable';

        var table = document.createElement('table');
        table.className = 'colorGridTable';
        widget.appendChild(table);

        for (let y = 0; y < 8; y++) {
            gridRow.push(document.createElement('tr'));
            table.appendChild(gridRow[y]);

            for (let x = 0; x < 8; x++) {
                gridCell[y].push(document.createElement('td'));
                gridCell[y][x].className = `colorGridCell-${x}-${y}`;
                let pos_ = y * 8 + x;
                gridCell[y][x].style.backgroundColor = (this.displayValue_[pos_][0] === '#' ? '' : '#') + this.displayValue_[pos_];
                gridRow[y].appendChild(gridCell[y][x]);

                this.editorListeners_.push(Blockly.browserEvents.bind(gridCell[y][x], 'mouseup', this,
                    function () {
                        let newColor = this.paintbrush();
                        gridCell[y][x].style.backgroundColor = (newColor[0] === '#' ? '' : '#') + newColor;
                        this.displayValue_[y * 8 + x] = newColor.replace(/[^0-9A-Fa-f]+/g,'');
                        this.setValue(this.displayValue_.join(','));
                        this.createView_();
                    }
                ));
            }
        }

        return widget;
    };

    // Cleans up any event listeners that were attached to the now hidden editor.
    dropdownDispose_ = function () {
        for (var i = this.editorListeners_.length, listener; listener = this.editorListeners_[i]; i--) {
            Blockly.browserEvents.unbind(listener);
            this.editorListeners_.pop();
        }
    };

    // Called by initView to create all of the SVGs. This is just used to keep
    // the code more organized.
    createView_ = function () {
        this.movableGroup_ = null;

        window.cheese = this.fieldGroup_;

        this.gridSquare = [[],[],[],[],[],[],[],[]];
        this.movableGroup_ = Blockly.utils.dom.createSvgElement('g', {
            'transform': 'translate(8,8)',
            'class': 'color-grid-small'
        }, this.fieldGroup_);
        this.colorGridGroup_ = Blockly.utils.dom.createSvgElement('g', {
            // Makes the smaller colorGrid graphic align with the hats.
            'class': 'colorGridBody'
        }, this.movableGroup_);
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                this.gridSquare[x].push(Blockly.utils.dom.createSvgElement('path', {
                    'id': `pixel-${x}-${y}`,
                    'd': `M${x * 8},${y * 8} l8,0 l0,8 l-8,0z`,
                    'fill': (this.displayValue_[x * 8 + y] ? ('#' + this.displayValue_[y * 8 + x]) : 'white')
                }, this.colorGridGroup_));       
            }
        }

        // clean-up old grid elements
        setTimeout(() => {
            while (this.fieldGroup_.getElementsByClassName('color-grid-small').length > 1) {
                this.fieldGroup_.removeChild(this.fieldGroup_.getElementsByClassName('color-grid-small')[0]);
            }
        }, 500);
    };
}



// Blockly needs to know the JSON name of this field. Usually this is
// registered at the bottom of the field class.
Blockly.fieldRegistry.register('field_colorGrid', Blockly.FieldColorGrid);