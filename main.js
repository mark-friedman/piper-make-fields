//import * as Blockly from 'blockly';
//window.Blockly = require("blockly");
//require("./utils.js")

// Your existing JavaScript code here
// ...

// Blockly-specific code
// ...

// Add all of the styles and overrides in here first.
const piperMakeTheme = Blockly.Theme.defineTheme('piper-make-theme', {
    "base": Blockly.Themes.Classic,
      "blockStyles": {
        "chip_blocks": {
            "hat": "cap",
            "colourPrimary": "#006400",
          "colourSecondary": "#59AD59",
          "colourTertiary": "#003300"
        },
        "logic_blocks": {
          "colourPrimary": "#BC75F8",
          "colourSecondary": "#DFA6FF",
          "colourTertiary": "#8C4FAB"
        },
        "math_blocks": {
          "colourPrimary": "#BC75F8",
          "colourSecondary": "#DFA6FF",
          "colourTertiary": "#8C4FAB"
        },
        "loop_blocks": {
          "colourPrimary": "#CD00FF",
          "colourSecondary": "#F36EFF",
          "colourTertiary": "#9200B6"
        },
        "variable_blocks": {
          "colourPrimary": "#88B500",
          "colourSecondary": "#A8D800",
          "colourTertiary": "#668000"
        },
        "variable_dynamic_blocks": {
          "colourPrimary": "#88B500",
          "colourSecondary": "#A8D800",
          "colourTertiary": "#668000"
        },
        "value_blocks": {
          "colourPrimary": "#BDA600",
          "colourSecondary": "#FFD836",
          "colourTertiary": "#9C7D00"
        },
        "text_blocks": {
          "colourPrimary": "#BDA600",
          "colourSecondary": "#FFD836",
          "colourTertiary": "#9C7D00"
        },
        "list_blocks": {
          "colourPrimary": "#FF6C37",
          "colourSecondary": "#FFA366",
          "colourTertiary": "#C63500"
        },
        "sound_blocks": {
          "colourPrimary": "#90A9FF",
          "colourSecondary": "#D6E2FF",
          "colourTertiary": "#6881D6"
        },
        "procedure_blocks": {
          "colourPrimary": "#CE3905",
          "colourSecondary": "#FF724D",
          "colourTertiary": "#801F00"
        },
        "input_blocks": {
          "colourPrimary": "#2CB1F8",
          "colourSecondary": "#A6DAFF",
          "colourTertiary": "#007BBA"
        },
        "output_blocks": {
          "colourPrimary": "#005CB9",
          "colourSecondary": "#66A3FF",
          "colourTertiary": "#003F80"
        }
    }
  });
  


getJsonData('./pageData.json', setupBlockly);


function setupBlockly(data) {
    window.pageData = data;

    const blocklyDiv = document.getElementById("blocklyDiv");
    window.workspace = Blockly.inject(blocklyDiv, {
        toolbox: mapToolbox(),
        theme: piperMakeTheme,
        grid: {
            spacing: 30,
            length: 5,
            colour: '#ddd',
            snap: false
        },
        trashcan: true,
        zoom: {
            controls: true,
            wheel: false,
            startScale: 0.7,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.1  // this is a multiplier, so it should be larger than 1
        },
        //media: 'assets/media/',
        move: {
            scrollbars: true,
            drag: true,
            wheel: false
        },
        renderer: 'zelos',
        scrollbars: false
    });

    window.addEventListener("resize", resizeBlocklyContainer, false);
    resizeBlocklyContainer();
}



function resizeBlocklyContainer() {
    const blocklyArea = document.getElementById("blocklyArea");

    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + "px";
    blocklyDiv.style.top = y + "px";
    blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
    blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
    Blockly.svgResize(workspace);
};



/**
 * @description Generates the XML needed to populate the toolbox from the pageData.toolboxObject object.
 */
function mapToolbox() {
    let toolBoxTree = '<xml id="toolbox">';

    for (let i = 0; i < pageData.toolboxObject.categories.length; i++) {
        let category = pageData.toolboxObject.categories[i];
        toolBoxTree += `<category name="${category.name}" ${(category.custom ? 'custom="' + category.custom + '"' : '')}>`;
        if (category.blocks && !category.custom) {
            for (let j = 0; j < category.blocks.length; j++) {
                if (category.blocks[j].visible) {
                    toolBoxTree += `<block type="${category.blocks[j].type}">${category.blocks[j].inner || ''}</block>`;
                }
            }
        }
        toolBoxTree += '</category>';
    }
    return toolBoxTree + '</xml>';
}

/** 
 * @returns {String} XML (minus the <xml></xml> tags) string of the blocks currently on the workspace
 */
function getXml() {
    code = '';
    if (Blockly && Blockly.Xml && workspace) {
        var xmlDoc = Blockly.Xml.workspaceToDom(workspace);
        var code = Blockly.Xml.domToText(xmlDoc)
            .replace(/<\/?xml.*?>/g, '')
            .replace(/ id=".*?"/g, '');
    }
    return code;
}

/**
 * @description set the workspace to a block program defined by a string of XML.
 * @param {string} xmlString string representation of the XML of a blockly program.
 */
function setXml(xmlString) {
    if (xmlString.indexOf('<xml') === -1) {
        xmlString = '<xml>' + xmlString + '</xml>';
    }
    Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xmlString), workspace);
}

/**
 * Modifies the blocks shown in the toolbox
 * @param {String} action one of 'clear', 'reset', 'add', or 'remove'
 * @param {Array} blockList Array of strings representing the blocks to be added or removed from the toolbox
 */
function filterToolbox(action, blockList) {
    if (window.Blockly && window.pageData.toolboxObject) {
        for (let i = 0; i < pageData.toolboxObject.categories.length; i++) {

            let category = pageData.toolboxObject.categories[i];
            if (category.blocks) {
                for (let j = 0; j < category.blocks.length; j++) {
                    if (action === 'clear' || action === 'reset') {
                        category.blocks[j].visible = (action === 'clear' ? false : true);
                    } else {
                        if (blockList.indexOf(category.blocks[j].type) > -1) {
                            category.blocks[j].visible = (action === 'remove' ? false : true);
                        }
                    }
                }
            }
        }

        workspace.updateToolbox(mapToolbox());

        for (let k = 0; k < pageData.toolboxObject.categories.length; k++) {
            let showCategory = false;
            let category = pageData.toolboxObject.categories[k];
            for (let l = 0; l < category.blocks.length; l++) {
                if (category.blocks[l].visible) {
                    showCategory = true;
                }
            }
            let selector = `div[aria-level="1"]:nth-child(${k + 1})`;
            if (k === 0) {
                selector = 'div[aria-level="1"]:first-child';
            }
            $(selector).style.display = (showCategory ? 'block' : 'none');
        }
    }
}