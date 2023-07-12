/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Music pitch input field. Borrowed from Blockly Games.
 * @author fraser@google.com (Neil Fraser)
 * @author samelh@google.com (Sam El-Husseini)
 * @author matt.m.matz@gmail.com (Matthew Matz) - Modified origial example
 */


var Blockly = require("blockly");


FieldPitch = class extends Blockly.FieldTextInput {
    constructor(text) {
        super(text);

        /**
         * The frequencies of all notes available for the picker.  This is
         * the value output by the field.
         */
        this.TONES = [
            51.915, 55, 65.41, 69.3, 73.42, 77.78, 82.41, 87.31, 92.5, 98, 103.83,
            110, 116.54, 123.47, 130.82, 138.6, 146.84, 155.56, 164.82, 174.62, 185, 196, 207.66,
            220, 233.08, 246.94, 261.64, 277.2, 293.68, 311.12, 329.64, 349.24, 370, 392, 415.32,
            440, 466.16, 493.88, 523.28, 554.4, 587.36, 622.24, 659.28, 698.48, 740, 784, 830.64,
            880, 932.32, 987.76, 1046.56, 1108.8, 1174.72, 1244.48, 1318.56, 1396.96, 1480, 1568, 1661.28,
            1760, 1864.64, 1975.52
        ];
        
        /**
         * Pretty-text representation of all notes available for the picker.
         */
        this.NOTES = [
            'B\u{266d}1', '  B1  ',
            '  C2  ', 'D\u{266d}2', '  D2  ', 'E\u{266d}2', '  E2  ', '  F2  ', 'G\u{266d}2', '  G2  ', 'A\u{266d}2', '  A2  ', 'B\u{266d}2', '  B2  ',
            '  C3  ', 'D\u{266d}3', '  D3  ', 'E\u{266d}3', '  E3  ', '  F3  ', 'G\u{266d}3', '  G3  ', 'A\u{266d}3', '  A3  ', 'B\u{266d}3', '  B3  ',
            '  C4  ', 'D\u{266d}4', '  D4  ', 'E\u{266d}4', '  E4  ', '  F4  ', 'G\u{266d}4', '  G4  ', 'A\u{266d}4', '  A4  ', 'B\u{266d}4', '  B4  ',
            '  C5  ', 'D\u{266d}5', '  D5  ', 'E\u{266d}5', '  E5  ', '  F5  ', 'G\u{266d}5', '  G5  ', 'A\u{266d}5', '  A5  ', 'B\u{266d}5', '  B5  ',
            '  C6  ', 'D\u{266d}6', '  D6  ', 'E\u{266d}6', '  E6  ', '  F6  ', 'G\u{266d}6', '  G6  ', 'A\u{266d}6', '  A6  '
        ];

        /**
         * A searchable string containing normalized names for each note.  
         * Dividing .indexOf() by 6 and removing the decimal correlates
         * to the indicies of TONES and NOTES
         */
        this.SEARCH_STRING = 'Bb1As1B1----C2----Db2Cs2D2----Eb2Ds2E2----F2----Gb2Fs2G2----Ab2Gs2A2----Bb2As2B2----C3----Db3Cs3D3----Eb3Ds3E3----F3----Gb3Fs3G3----Ab3Gs3A3----Bb3As3B3----C4----Db4Cs4D4----Eb4Ds4E4----F4----Gb4Fs4G4----Ab4Gs4A4----Bb4As4B4----C5----Db5Cs5D5----Eb5Ds5E5----F5----Gb5Fs5G5----Ab5Gs5A5----Bb5As5B5----C6----Db6Cs6D6----Eb6Ds6E6----F6----Gb6Fs6G6----Ab6Gs6A6----Bb6As6B6----';

        // Disable spellcheck.
        this.setSpellcheck(false);

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

        //this.SERIALIZABLE = true;
    }

    /**
     * Construct a FieldPitch from a JSON arg object.
     * @param {!Object} options A JSON object with options (pitch).
     * @return {!FieldPitch} The new field instance.
     * @package
     * @nocollapse
     */
    static fromJson = function (options) {
        return new FieldPitch(options['pitch']);
    };

    /**
     * Show the inline free-text editor on top of the text and the note picker.
     * @protected
     */
    showEditor_ = function () {
        Blockly.FieldTextInput.prototype.showEditor_.call(this);
        //super.showEditor_();

        const div = Blockly.WidgetDiv.DIV;
        if (!div.firstChild) {
            // Mobile interface uses Blockly.prompt.
            return;
        }
        // Build the DOM.
        const editor = this.dropdownCreate_();
        Blockly.DropDownDiv.getContentDiv().appendChild(editor);

        Blockly.DropDownDiv.setColour(
            this.sourceBlock_.style.colourPrimary,
            this.sourceBlock_.style.colourTertiary
        );

        Blockly.DropDownDiv.showPositionedByField(
            this, this.dropdownDispose_.bind(this)
        );

        // The note picker is different from other fields in that it updates on
        // mousemove even if it's not in the middle of a drag.  In future we may
        // change this behaviour.  For now, using bindEvent_ instead of
        // bindEventWithChecks_ allows it to work without a mousedown/touchstart.
        this.clickWrapper_ = Blockly.bindEvent_(this.containerElement_, "click", this, this.hide_);
        this.moveWrapper_ = Blockly.bindEvent_(this.containerElement_, "mousemove", this, this.onMouseMove);

        this.updateGraph_();
    };

    /**
     * Create the pitch editor.
     * @return {!Element} The newly created pitch picker.
     * @private
     */
    dropdownCreate_ = function () {
        this.containerElement_ = document.createElement("div");
        this.containerElement_.className = "musicScales";
        this.imageElement_ = document.createElement("div");
        this.imageElement_.className = "notePicker";

        this.containerElement_.appendChild(this.imageElement_);

        return this.containerElement_;
    };

    /**
     * Dispose of events belonging to the pitch editor.
     * @private
     */
    dropdownDispose_ = function () {
        if (this.clickWrapper_) {
            Blockly.browserEvents.unbind(this.clickWrapper_);
            this.clickWrapper_ = null;
        }
        if (this.moveWrapper_) {
            Blockly.browserEvents.unbind(this.moveWrapper_);
            this.moveWrapper_ = null;
        }
        this.imageElement_ = null;
        this.containerElement_ = null;
    };

    /**
     * Hide the editor.
     * @private
     */
    hide_ = function () {
        Blockly.WidgetDiv.hide();
        Blockly.DropDownDiv.hideWithoutAnimation();
    };

    /**
     * Set the note to match the mouse's position.
     * @param {!Event} e Mouse move event.
     */
    onMouseMove = function (e) {
        const i = this.getValue();
        const bBox = this.imageElement_.getBoundingClientRect();
        const dy = e.clientY - bBox.top;
        const note = Blockly.utils.math.clamp(Math.round(58 - (dy - 26) / 4.4), 0, 59);
        this.imageElement_.style.backgroundPosition = Math.floor((-note * 17700) / 571) + "px 0px";
        const j = this.TONES[note];
        this.setEditorValue_(j);
        if (i !== j && playSound) {
            playSound("instrument|piano|0.1|" + j);
        }
    };

    /**
     * Convert the machine-readable value (0-12) to human-readable text (C3-A4).
     * @param {number|string} value The provided value.
     * @return {string|undefined} The respective note, or undefined if invalid.
     */
    valueToNote = function (value) {
        const i = this.TONES.findClosestIndex(Number(value));
        return this.NOTES[i];
    };

    /**
     * Convert the human-readable text (C3-A4) to machine-readable value (0-12).
     * @param {string} text The provided note.
     * @return {number|undefined} The respective value, or undefined if invalid.
     */
    noteToValue = function (text) {            
        const normalizedText = text.trim().toLowerCase().replace(/ /g, "").replace(/#/g, "s").split("");
        if (normalizedText[0]) {
            normalizedText[0] = normalizedText[0].toUpperCase();
        } else {
            normalizedText[0] = "";
        }
        const i = this.SEARCH_STRING.indexOf(normalizedText.join(""));
        if (i < 0) {
            return undefined;
        } else {
            i = Math.floor(i / 6);
            return this.TONES[i];
        }
    };

    /**
     * Get the text to be displayed on the field node.
     * @return {?string} The HTML value if we're editing, otherwise null. Null means
     *   the super class will handle it, likely a string cast of value.
     * @protected
     */
    getText_ = function () {
        if (this.isBeingEdited_) {
            return Blockly.FieldTextInput.prototype.getText_.call(this);
            //return super.getText_();
        }
        return this.valueToNote(this.getValue()) || null;
    };

    /**
     * Transform the provided value into a text to show in the HTML input.
     * @param {*} value The value stored in this field.
     * @return {string} The text to show on the HTML input.
     */
    getEditorText_ = function (value) {
        return this.valueToNote(value);
    };

    /**
     * Transform the text received from the HTML input (note) into a value
     * to store in this field.
     * @param {string} text Text received from the HTML input.
     * @return {*} The value to store.
     */
    getValueFromEditorText_ = function (text) {
        return this.noteToValue(text);
    };

    /**
     * Updates the graph when the field rerenders.
     * @private
     * @override
     */
    render_ = function () {
        Blockly.FieldTextInput.prototype.render_.call(this);
        //super.render_();
        this.updateGraph_();
    };

    /**
     * Redraw the note picker with the current note.
     * @private
     */
    updateGraph_ = function () {
        if (!this.imageElement_) {
            return;
        }
        const i = this.TONES.findClosestIndex(this.getValue());
        this.imageElement_.style.backgroundPosition = (-i * 17700) / 571 + "px 0";
    };

    /**
     * Ensure that only a valid value may be entered.
     * @param {*} opt_newValue The input value.
     * @return {*} A valid value, or null if invalid.
     */
    doClassValidation_ = function (opt_newValue) {
        if (opt_newValue === null || opt_newValue === undefined) {
            return null;
        }
        var note = this.valueToNote(opt_newValue);
        if (note) {
            return opt_newValue;
        }
        return null;
    };
}



Blockly.fieldRegistry.register('field_pitch', FieldPitch);

module.exports = FieldPitch;
