// TODO: This was missing from blockly_compressed?
//Blockly.Procedures.DEFAULT_ARG = 'x';
//window.Blockly = require("blockly");


if (!Blockly.Media) {
    Blockly.Media = {};
}

if (!Blockly.Lists) {
    Blockly.Lists = {};
}

Blockly.Lists.KeyboardKeys = [
    ['a A', 'A'],
    ['b B', 'B'],
    ['c C', 'C'],
    ['d D', 'D'],
    ['e E', 'E'],
    ['f F', 'F'],
    ['g G', 'G'],
    ['h H', 'H'],
    ['i I', 'I'],
    ['j J', 'J'],
    ['k K', 'K'],
    ['l L', 'L'],
    ['m M', 'M'],
    ['n N', 'N'],
    ['o O', 'O'],
    ['p P', 'P'],
    ['q Q', 'Q'],
    ['r R', 'R'],
    ['s S', 'S'],
    ['t T', 'T'],
    ['u U', 'U'],
    ['v V', 'V'],
    ['w W', 'W'],
    ['x X', 'X'],
    ['y Y', 'Y'],
    ['z Z', 'Z'],
    ['0 )', 'ZERO'],
    ['1 !', 'ONE'],
    ['2 @', 'TWO'],
    ['3 #', 'THREE'],
    ['4 $', 'FOUR'],
    ['5 %', 'FIVE'],
    ['6 ^', 'SIX'],
    ['7 &', 'SEVEN'],
    ['8 *', 'EIGHT'],
    ['9 (', 'NINE'],
    ['- _', 'MINUS'],
    [', <', 'COMMA'],
    ['; :', 'SEMICOLON'],
    ['. >', 'PERIOD'],
    ['\' "', 'QUOTE'],
    ['[ {', 'LEFT_BRACKET'],
    ['] }', 'RIGHT_BRACKET'],
    ['/ ?', 'FORWARD_SLASH'],
    ['\\ |', 'BACKSLASH'],
    ['` ~', 'GRAVE_ACCENT'],
    ['= +', 'EQUALS'],
    ['⇦ (Left Arrow)', 'LEFT_ARROW'],
    ['⇧ (Up Arrow)', 'UP_ARROW'],
    ['⇨ (Right Arrow)', 'RIGHT_ARROW'],
    ['⇩ (Down Arrow)', 'DOWN_ARROW'],
    ['⌘/⊞ (Command/Windows)', 'WINDOWS'],
    ['Alt (Left) Option', 'OPTION'],
    ['Alt (Right)', 'RIGHT_ALT'],
    ['Application', 'APPLICATION'],
    ['Backspace', 'BACKSPACE'],
    ['Caps Lock', 'CAPS_LOCK'],
    ['Control (Left)', 'LEFT_CONTROL'],
    ['Control (Right)', 'RIGHT_CONTROL'],
    ['Delete', 'DELETE'],
    ['End', 'END'],
    ['Escape', 'ESCAPE'],
    ['GUI (Right)', 'RIGHT_GUI'],
    ['Home', 'HOME'],
    ['Insert', 'INSERT'],
    ['Page Down', 'PAGE_DOWN'],
    ['Page Up', 'PAGE_UP'],
    ['Pause', 'PAUSE'],
    ['Power', 'POWER'],
    ['Print Screen', 'PRINT_SCREEN'],
    ['Return/Enter', 'RETURN'],
    ['Scroll Lock', 'SCROLL_LOCK'],
    ['Shift (Left)', 'SHIFT'],
    ['Shift (Right)', 'RIGHT_SHIFT'],
    ['Space Bar', 'SPACEBAR'],
    ['Tab', 'TAB'],
    ['F1', 'F1'],
    ['F2', 'F2'],
    ['F3', 'F3'],
    ['F4', 'F4'],
    ['F5', 'F5'],
    ['F6', 'F6'],
    ['F7', 'F7'],
    ['F8', 'F8'],
    ['F9', 'F9'],
    ['F10', 'F10'],
    ['F11', 'F11'],
    ['F12', 'F12'],
    ['F13', 'F13'],
    ['F14', 'F14'],
    ['F15', 'F15'],
    ['F16', 'F16'],
    ['F17', 'F17'],
    ['F18', 'F18'],
    ['F19', 'F19']
];

Blockly.Lists.Sounds = {
    "animals": [
        {name: "BeeBuzzing",   start: 0.000,  end: 5.948},
        {name: "Canary",       start: 5.948,  end: 11.398},
        {name: "CatMeow",      start: 11.398, end: 13.027},
        {name: "Chickens",     start: 13.027, end: 14.996},
        {name: "Cow",          start: 14.996, end: 17.571},
        {name: "Crow",         start: 17.571, end: 17.907},
        {name: "Dolphin",      start: 17.907, end: 19.792},
        {name: "Duck",         start: 19.792, end: 24.716},
        {name: "Elephant",     start: 24.716, end: 27.824},
        {name: "HorseWhinny",  start: 27.824, end: 29.243},
        {name: "Humpback",     start: 29.243, end: 38.521},
        {name: "Rooster",      start: 38.521, end: 40.479},
        {name: "Seal",         start: 40.479, end: 41.821},
        {name: "Sheep",        start: 41.821, end: 42.906},
        {name: "Whipperwhill", start: 42.906, end: 46.856},
    ],
    "drumkit": [
        {name: "Clap1",  start: 0.000, end: 0.277},
        {name: "Clap2",  start: 0.277, end: 0.621},
        {name: "Hat1",   start: 0.621, end: 0.966},
        {name: "Hat2",   start: 0.966, end: 1.300},
        {name: "Kick1",  start: 1.300, end: 1.541},
        {name: "Kick2",  start: 1.541, end: 1.895},
        {name: "Snare1", start: 1.895, end: 2.249},
        {name: "Snare2", start: 2.249, end: 2.441},
    ],
    "electro": [
        {name: "Flight-A",    start: 0.000,  end: 2.182},
        {name: "Flight-C",    start: 2.182,  end: 4.364},
        {name: "Flight-E",    start: 4.364,  end: 6.546},
        {name: "Neon-A",      start: 6.546,  end: 8.546},
        {name: "Neon-C",      start: 10.546, end: 12.546},
        {name: "Neon-E",      start: 12.546, end: 14.546},
        {name: "NightRoll-A", start: 14.546, end: 16.946},
        {name: "NightRoll-C", start: 16.346, end: 19.346},
        {name: "NightRoll-E", start: 19.346, end: 21.746},
        {name: "Toast-A",     start: 21.746, end: 23.928},
        {name: "Toast-C",     start: 23.928, end: 26.110},
        {name: "Toast-E",     start: 26.110, end: 28.291},
    ],
    "japanese_drum": [
        {name: "daibyoshi-A1", start: 0.000, end: 0.725},
        {name: "daibyoshi-A2", start: 0.725, end: 1.398},
        {name: "hirado-A1",    start: 1.398, end: 3.212},
        {name: "hirado-A2",    start: 3.212, end: 4.972},
        {name: "miyadaiko-A1", start: 4.972, end: 5.997},
        {name: "miyadaiko-A2", start: 5.997, end: 6.909},
        {name: "mokugyo-A1",   start: 6.909, end: 7.001},
        {name: "mokugyo-A2",   start: 7.001, end: 7.140},
        {name: "mokusho-A1",   start: 7.140, end: 7.255},
        {name: "mokusho-A2",   start: 7.255, end: 7.379},
        {name: "okedo-A1",     start: 7.379, end: 9.273},
        {name: "okedo-A2",     start: 9.273, end: 11.130},
    ],
    "winloose": [
        {name: "go1",        start: 4.079,  end: 6.578},
        {name: "go2",        start: 6.578,  end: 8.924},
        {name: "go3",        start: 8.924,  end: 9.883},
        {name: "go4",        start: 9.883,  end: 10.480},
        {name: "player1_go", start: 10.480, end: 11.448},
        {name: "player2_go", start: 11.448, end: 12.561},
        {name: "win1",       start: 13.082, end: 14.238},
        {name: "win2",       start: 14.238, end: 15.305},
        {name: "win3",       start: 15.305, end: 15.857},
        {name: "win4",       start: 15.857, end: 19.409},
        {name: "buzzer1",    start: 0.000,  end: 1.150},
        {name: "buzzer2",    start: 1.150,  end: 2.223},
        {name: "buzzer3",    start: 2.223,  end: 2.856},
        {name: "buzzer4",    start: 2.856,  end: 4.079},
        {name: "wee",        start: 12.561, end: 13.082},
        {name: "woo",        start: 19.409, end: 19.922},
    ]
};


/*
Create the array the fills the pin menu dropdowns for the blocks
*/
if (!Blockly.Lists.Pins) {
    Blockly.Lists.Pins = {};
}

Blockly.Lists.Pins.Digital = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', '10', '11', '12', '13', '14', '15',
    // '16', '17', '18', '19', '20', '21', // Reserved for SPI and I2C
    '22'
].map(function (value) {
    return [value, 'GP' + value];
});
Blockly.Lists.Pins.Digital.push(['25 (LED)', 'GP25']);

Blockly.Lists.Pins.Analog = [
    ['A0','GP26'], 
    ['A1','GP27'], 
    ['A2','GP28']
]

Blockly.Lists.ColorPickerList = [
    "#FFFFFF", "#DFDFDF", "#BFBFBF", "#9F9F9F", "#7F7F7F", "#5F5F5F", "#3F3F3F", "#1F1F1F", "#000000",
    "#FFCCCC", "#FF9999", "#FF6666", "#FF3333", "#FF0000", "#CC0000", "#990000", "#660000", "#330000",
    "#FFE5CC", "#FFCB99", "#FFB166", "#FF9733", "#FF7D00", "#CC6400", "#994B00", "#663200", "#331900",
    "#FFFFCC", "#FFFF99", "#FFFF66", "#FFFF33", "#FFFF00", "#CCCC00", "#999900", "#666600", "#333300",
    "#E5FFCC", "#CBFF99", "#B1FF66", "#97FF33", "#7DFF00", "#64CC00", "#4B9900", "#326600", "#193300",
    "#CCFFCC", "#99FF99", "#66FF66", "#33FF33", "#00FF00", "#00CC00", "#009900", "#006600", "#003300",
    "#CCFFE5", "#99FFCB", "#66FFB1", "#33FF97", "#00FF7D", "#00CC64", "#00994B", "#006632", "#003319",
    "#CCFFFF", "#99FFFF", "#66FFFF", "#33FFFF", "#00FFFF", "#00CCCC", "#009999", "#006666", "#003333",
    "#CCE5FF", "#99CBFF", "#66B1FF", "#3397FF", "#007DFF", "#0064CC", "#004B99", "#003266", "#001933",
    "#CCCCFF", "#9999FF", "#6666FF", "#3333FF", "#0000FF", "#0000CC", "#000099", "#000066", "#000033",
    "#E5CCFF", "#CB99FF", "#B166FF", "#9733FF", "#7D00FF", "#6400CC", "#4B0099", "#320066", "#190033",
    "#FFCCFF", "#FF99FF", "#FF66FF", "#FF33FF", "#FF00FF", "#CC00CC", "#990099", "#660066", "#330033",
    "#FFCCE5", "#FF99CB", "#FF66B1", "#FF3397", "#FF007D", "#CC0064", "#99004B", "#660032", "#330019"
];

Blockly.Lists.ControllerButtonMap = [
    ['up button', 'BUTTON_2'],
    ['down button', 'BUTTON_4'],
    ['left button', 'BUTTON_1'],
    ['right button', 'BUTTON_3'],
    ['button 5', 'BUTTON_5'],
    ['button 6', 'BUTTON_6'],
    ['button 7', 'BUTTON_7'],
    ['button 8', 'BUTTON_8'],
    ['button 9', 'BUTTON_9'],
    ['button 10', 'BUTTON_10'],
    ['button 11', 'BUTTON_11'],
    ['button 12', 'BUTTON_12'],
    ['button 13', 'BUTTON_13'],
    ['button 14', 'BUTTON_14'],
    ['any button', 'ANY_BUTTON'],
];

if (!Blockly.Constants) {
    Blockly.Constants = {};
}

Blockly.Constants.BOOLEAN = 'Boolean';
Blockly.Constants.NUMBER = 'Number';
Blockly.Constants.COLOR = 'Color';
Blockly.Constants.STRING = 'String';
Blockly.Constants.SOUND = 'Sound';
Blockly.Constants.LIST = 'Array';
Blockly.Constants.PIXELGRID = 'PixelGrid';

/*
Block definitions and generators
*/
Blockly.Blocks['on_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('start');
        this.setPreviousStatement(false, null);
        this.setNextStatement(true, null);
        this.setStyle('chip_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

/*
Block definitions and generators
*/
Blockly.Blocks['pin_on_off'] = {
    init: function () {
        var thisBlock = this;
        this.appendDummyInput()
            .appendField('turn pin')
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField(new Blockly.FieldDropdown([
                ['ON', "1"],
                ['OFF', "0"],
                //['to', "-1"],
            ], 
            //function(value) {thisBlock.updateType_(value)}
            ), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    /*
    updateType_: function(newMode) {
        var mode = this.getFieldValue('NAME');
        if (mode != newMode) {
            if (newMode === '-1') {
                this.appendValueInput('PWM_VALUE')
                    .setCheck(Blockly.Constants.NUMBER);
                this.appendDummyInput('PWM_LABEL')
                    .appendField('volts');
            } else {
                this.removeInput('PWM_VALUE');
                this.removeInput('PWM_LABEL');
            }
        }
    },
    */
};

Blockly.Blocks['pin_check'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('is pin')
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField(new Blockly.FieldDropdown([
                ['LOW when pulled UP', '0,UP'],
                ['HIGH when pulled UP', '1,UP'],
                ['LOW', '0,FLOAT'],
                ['HIGH', '1,FLOAT'],
                ['LOW when pulled DOWN', '0,DOWN'],
                ['HIGH when pulled DOWN', '1,DOWN']
            ]), "CHECKFOR");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.BOOLEAN);
        this.setStyle('chip_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['pin_analog_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('read voltage from pin')
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Analog), "GPIO");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('chip_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['dotstar_rgb_led'] = {
    init: function () {
        this.appendValueInput('COLOR')
            .setCheck(Blockly.Constants.COLOR)
            .appendField('dotstar set')
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('chip_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['wait'] = {
    init: function () {
        this.appendValueInput("time")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField('wait');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('seconds');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['wait_condition'] = {
    init: function () {
        this.appendValueInput("CONDITION")
            .setCheck(Blockly.Constants.BOOLEAN)
            .appendField('wait')
            .appendField(new Blockly.FieldDropdown([
                ['until', 'until'],
                ['while', 'while']
            ]), "ACTION");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['chip_clock'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('chip clock');
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['console_input'] = {
    init: function () {
        this.appendValueInput("QUESTION")
            .setCheck(Blockly.Constants.STRING)
            .appendField('ask');
        this.setOutput(true, Blockly.Constants.STRING);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['console_clear'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('console clear');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['console_cursor_position'] = {
    init: function () {
        this.appendValueInput('CURSOR_X')
            .setCheck(Blockly.Constants.NUMBER)
            .appendField('console set cursor position to x');
        this.appendValueInput('CURSOR_Y')
            .setCheck(Blockly.Constants.NUMBER)
            .appendField(' y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('chip_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['repeat_forever'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('repeat forever');
        this.appendStatementInput("DO")
            .appendField('do');
        this.appendValueInput('DELAY')
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Constants.NUMBER)
            .appendField('wait');
        this.appendDummyInput()
            .appendField('seconds');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('loop_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

for (let set in Blockly.Lists.Sounds) {
    if (Blockly.Lists.Sounds.hasOwnProperty(set)) {
        Blockly.Blocks['sounds_' + set] = {
            init: function () {
                this.appendDummyInput()
                    .appendField(set.replace(/[-_]/g, ' '))
                    .appendField(new Blockly.FieldDropdown(
                        Blockly.Lists.Sounds[set].map(soundGroup => {
                            return [(soundGroup.name.replace(/[-_]/g, ' ')), (set + '-' + soundGroup.name)];
                        }),
                        // Load the sound samples if they haven't been loaded already
                        function (soundName) {
                            loadSounds(soundName.split('-')[0]);
                        }
                    ), "path");
                this.setOutput(true, Blockly.Constants.SOUND);
                this.setStyle("sound_blocks");
                this.setTooltip("");
                this.setHelpUrl("");
            },
                };
    }
}

Blockly.Blocks['sounds_instrument'] = {
    init: function () {
        // Load synths if they aren't already loaded:
        //setupSynths();  // TODO: turn this back on!
        this.appendDummyInput()
            .appendField('instrument')
            .appendField(new Blockly.FieldDropdown([
                ['bloop', 'bloop'],
                ['metallic', 'metallic'],
                ['plucky', 'plucky'],
                ['chiptune', 'chiptune'],
                ['synth', 'synth'],
                ['violin', 'violin'],
                ['organ', 'organ'],
                ['horn', 'horn'],
                ['xylophone', 'xylo'],
                ['piano', 'piano'],
            ]), 'instrument');
        this.appendValueInput('NOTE')
            .appendField('pitch')
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('DURATION')
            .appendField('length')
            .setCheck(Blockly.Constants.NUMBER);
        this.setOutput(true, Blockly.Constants.SOUND);
        this.setStyle("sound_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sound_note_value'] = {
    init: function () {
        // Load synths if they aren't already loaded:
        //setupSynths();  // TODO: turn this back on!
        this.appendDummyInput()
            .appendField('note')
            .appendField(new Blockly.FieldPitch('440'), 'PITCH');
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle("value_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['sound_note_duration'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('duration')
            .appendField(new Blockly.FieldDropdown([
                ['sixteenth \ue980', '0.0625'],
                ['eighth \ue981', '0.125'],
                ['quarter \ue982', '0.25'],
                ['half \ue983', '0.5'],
                ['whole \ue984', '1']
            ]), "DURATION");
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle("value_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};


// Sound inline
Blockly.Blocks['playsound'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(Blockly.Constants.SOUND)
            .appendField("play sound");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("sound_blocks");
        this.setHelpUrl("");
    },
};

// Shout inline
Blockly.Blocks['shout'] = {
    init: function () {
        this.appendValueInput("COLOR")
            .appendField("shout")
            .setCheck(Blockly.Constants.COLOR);
        this.appendValueInput("NAME")
            .appendField("value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("chip_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['color_sensor'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("color sensor");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.COLOR);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
}

Blockly.Blocks['color_sensor_led'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set color sensor gain")
            .appendField(new Blockly.FieldDropdown([
                ['high', '60'],
                ['medium', '16'],
                ['low', '4'],
                ['none', '1']
            ]), "GAIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['motion_sensor_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("read motion sensor")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['motion_sensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("motion sensor")
            .appendField(new Blockly.FieldDropdown([
                ['X acceleration', 'acc_x'],
                ['Y acceleration', 'acc_y'],
                ['Z acceleration', 'acc_z'],
                ['X rotation', 'gyro_x'],
                ['Y rotation', 'gyro_y'],
                ['Z rotation', 'gyro_z'],
                ['roll', 'roll'],
                ['pitch', 'pitch'],
                ['temperature', 'temp']
            ]), "VALUE");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
}

Blockly.Blocks['heart_sensor_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("read heart sensor")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['heart_sensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("heart sensor")
            .appendField(new Blockly.FieldDropdown([
                ['raw value', 'raw_value'],
                ['heart rate', 'heart_rate'],
            ]), "VALUE");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
}


Blockly.Blocks['alphabeth_letter'] = {
    init: function () {
        // build alphabet dropdown options
        let charMenu = [['32 - space', ' ']];

        // Loop through the remaining ASCII characters
        for (let k = 33; k < 127; k++) {
          charMenu.push([
            k.toString(10) + ' - ' + String.fromCharCode(k),
            String.fromCharCode(k)
          ]);
        }
    
        // Add special ASCII characters
        charMenu.push(['7 - bell', '\\a']);
        charMenu.push(['10 - line feed', '\\n']);
        charMenu.push(['11 - tab', '\\t']);
        charMenu.push(['13 - carriage return', '\\r']);

        const asciiToUnicode = [
            '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA',
            '\u00EB', '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6',
            '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9', '\u00FF', '\u00D6', '\u00DC',
            '\u00A2', '\u00A3', '\u00A5', '\u20A7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA',
            '\u00F1', '\u00D1', '\u00AA', '\u00BA', '\u00BF', '\u2310', '\u00AC', '\u00BD', '\u00BC',
            '\u00A1', '\u00AB', '\u00BB', '\u2591', '\u2592', '\u2593', '\u2502', '\u2524', '\u2561',
            '\u2562', '\u2556', '\u2555', '\u2563', '\u2551', '\u2557', '\u255D', '\u255C', '\u255B',
            '\u2510', '\u2514', '\u2534', '\u252C', '\u251C', '\u2500', '\u253C', '\u255E', '\u255F',
            '\u255A', '\u2554', '\u2569', '\u2566', '\u2560', '\u2550', '\u256C', '\u2567', '\u2568',
            '\u2564', '\u2565', '\u2559', '\u2558', '\u2552', '\u2553', '\u256B', '\u256A', '\u2518',
            '\u250C', '\u2588', '\u2584', '\u258C', '\u2590', '\u2580', '\u03B1', '\u00DF', '\u0393',
            '\u03C0', '\u03A3', '\u03C3', '\u00B5', '\u03C4', '\u03A6', '\u0398', '\u03A9', '\u03B4',
            '\u221E', '\u03C6', '\u03B5', '\u2229', '\u2261', '\u00B1', '\u2265', '\u2264', '\u2320',
            '\u2321', '\u00F7', '\u2248', '\u00B0', '\u2219', '\u00B7', '\u221A', '\u207F', '\u00B2',
            '\u25A0', '\u00A0'
        ];

        for (let k = 128; k < 256; k++) {
            charMenu.push([
              k.toString(10) + ' - ' + asciiToUnicode[k - 128],
              `\\u${k.toString(16)}`
            ]);
        }

        this.appendDummyInput()
            .appendField("character")
            .appendField(new Blockly.FieldDropdown(charMenu), "LETTER");
        this.setOutput(true, Blockly.Constants.STRING);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['servo_angle'] = {
    init: function () {
        this.appendValueInput('ANGLE')
            .appendField("servo pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField("set angle to")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['servo_percent'] = {
    init: function () {
        this.appendValueInput('ANGLE')
            .appendField("servo pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField("set speed to")
        this.appendDummyInput()
            .appendField('%');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['servo_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("servo pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField("stop")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};


Blockly.Blocks['neopixel_setup'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("setup neopixels pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField("pixels")
            .appendField(new Blockly.FieldNumber(10, 1, 255), "PIXEL_COUNT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        if (this.workspace.getBlocksByType(this.type).length > 1) {
            this.setWarningText('WARNING! Only use one setup neopixels block!');
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['neopixel_set_pixel'] = {
    init: function() {
        this.appendValueInput('PIXEL')
            .appendField("set neopixel")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('COLOR')
            .appendField("to")
            .setCheck(Blockly.Constants.COLOR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('neopixel_setup').length < 1) {
            warnText = 'WARNING! You must use a setup neopixels block before using this block';
        }
        this.setWarningText(warnText);
    }
};

Blockly.Blocks['neopixel_brightness'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .appendField("set neopixel brightness to")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendDummyInput()
            .appendField("%")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('neopixel_setup').length < 1) {
            warnText = 'WARNING! You must use a setup neopixels block before using this block';
        }
        this.setWarningText(warnText);
    }
}

Blockly.Blocks['neopixel_fill'] = {
    init: function() {
        this.appendValueInput('COLOR')
            .appendField("set all neopixels to")
            .setCheck(Blockly.Constants.COLOR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('neopixel_setup').length < 1) {
            warnText = 'WARNING! You must use a setup neopixels block before using this block';
        }
        this.setWarningText(warnText);
    }
};

Blockly.Blocks['neopixel_show'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("update neopixels")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('neopixel_setup').length < 1) {
            warnText = 'WARNING! You must use a setup neopixels block before using this block';
        }
        this.setWarningText(warnText);
    }
};


Blockly.Blocks['lightshow_pixel'] = {
    init: function() {
        this.appendValueInput('PIXEL_X')
            .appendField("set lightshow pixel x:")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('PIXEL_Y')
            .appendField("y:")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('COLOR')
            .appendField("to")
            .setCheck(Blockly.Constants.COLOR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['lightshow_box'] = {
    init: function() {
        this.appendValueInput('COLOR')
            .appendField("lightshow draw")
            .setCheck(Blockly.Constants.COLOR);
        this.appendValueInput('PIXEL_X')
            .appendField("box from x:")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('PIXEL_Y')
            .appendField("y:")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('PIXEL_W')
            .appendField("width:")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('PIXEL_H')
            .appendField("height:")
            .setCheck(Blockly.Constants.NUMBER);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['lightshow_fill'] = {
    init: function() {
        this.appendValueInput('GRID')
            .appendField("set lightshow pixels to")
            .setCheck(Blockly.Constants.PIXELGRID);
        this.appendValueInput('PIXEL_X')
            .appendField("at x:")
            .setCheck(Blockly.Constants.NUMBER);
        this.appendValueInput('PIXEL_Y')
            .appendField("y:")
            .setCheck(Blockly.Constants.NUMBER);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['lightshow_clear'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("lightshow clear screen")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['lightshow_show'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("update lightshow")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};


Blockly.Blocks['controller_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("setup controller data pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "DATA")
            .appendField("latch pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "LATCH")
            .appendField("clock pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "CLOCK");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        if (this.workspace.getBlocksByType(this.type).length > 1) {
            this.setWarningText('WARNING! Only use one setup controller block!');
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['controller_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("read controller buttons")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('controller_setup').length < 1) {
            warnText = 'WARNING! You must use a setup controller block before using this block';
        }
        this.setWarningText(warnText);
    }
};

Blockly.Blocks['controller_button'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("was controller")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.ControllerButtonMap), "BUTTON")
            .appendField("pressed");
        this.setOutput(true, Blockly.Constants.BOOLEAN);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('controller_read').length < 1) {
            warnText = 'WARNING! You must use a read controller buttons block before using this block';
        } else if (this.workspace.getBlocksByType('controller_setup').length < 1) {
            warnText = 'WARNING! You must use a setup controller block before using this block';
        }
        this.setWarningText(warnText);
    }
};

Blockly.Blocks['controller_map'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("check controller")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.ControllerButtonMap), "BUTTON")
            .appendField("map to")
            .appendField(new Blockly.FieldDropdown(
                [
                    ['mouse left button', 'LEFT_BUTTON'],
                    ['mouse right button', 'RIGHT_BUTTON'],
                    ['mouse middle button', 'MIDDLE_BUTTON']
                ].concat(Blockly.Lists.KeyboardKeys.map((e) => {return ['keyboard ' + e[0],e[1]]}))
            ), "ACTION");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('controller_read').length < 1) {
            warnText = 'WARNING! You must use a read controller buttons block before using this block';
        } else if (this.workspace.getBlocksByType('controller_setup').length < 1) {
            warnText = 'WARNING! You must use a setup controller block before using this block';
        }
        this.setWarningText(warnText);
    }
};

Blockly.Blocks['bar_graph_led_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("setup bar graph led start pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "START")
            .appendField("end pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "END")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['bar_graph_led_display'] = {
    init: function () {
        this.appendValueInput('VALUE')
            .appendField("bar graph led display")
            .appendField(new Blockly.FieldDropdown([
                ['only', 'True'], 
                ['up to', 'False']
            ]), "ACTION")
            .setCheck(Blockly.Constants.NUMBER);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let warnText = null;
        if (this.workspace.getBlocksByType('bar_graph_led_setup').length < 1) {
            warnText = 'WARNING! You must use a setup bar graph led block before using this block';
        }
        this.setWarningText(warnText);
    }
};

Blockly.Blocks['range_finder_sensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("range finder pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
            .appendField("in")
            .appendField(new Blockly.FieldDropdown([
                ["cm", "CM"],
                ["inches", "INCHES"]
            ]), "UNIT");
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['cap_sense_pin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("capacitive sense pin")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.Pins.Digital), "GPIO")
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['temperature_sensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("temperature sensor")
            .appendField(new Blockly.FieldDropdown([
                ["°F", "FARENHEIT"],
                ["°C", "CELSIUS"]
            ]), "UNIT");
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['chip_temperature'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("chip temperature")
            .appendField(new Blockly.FieldDropdown([
                ["°F", "FARENHEIT"],
                ["°C", "CELSIUS"]
            ]), "UNIT");
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

// These are global because they are used by the shout module
window.emojisDropdown = [];
window.emojiImages = [];

// build emojis dropdown options and image tags
[
    {
        name: "in-love", //    \u1F60D  20  0x14
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-width=%2220%22 d=%22M131 344c71 57 148 82 244 0%22/%3E %3Cpath fill=%22%23ed3533%22 d=%22M146 261c8 6 11 6 18 1 0 0 123-93 55-137-25-16-60 1-64 16-5-15-38-36-66-14-61 46 57 134 57 134zm198 0c8 6 11 6 18 1 0 0 123-93 55-137-25-16-60 1-64 16-5-15-38-36-66-14-61 46 57 134 57 134z%22/%3E%3C/svg%3E"
    },{
        name: "sad", //        \u1F641  21  0x15
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Ccircle cx=%22176.3%22 cy=%22166.6%22 r=%2240.1%22/%3E %3Ccircle cx=%22326.7%22 cy=%22166.2%22 r=%2240.1%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-width=%2220%22 d=%22M131 386c71-57 148-82 244 1%22/%3E%3C/svg%3E"
    },{
        name: "happy", //      \u1F600  22  0x16
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Ccircle cx=%22176.3%22 cy=%22166.6%22 r=%2240.1%22/%3E %3Ccircle cx=%22326.7%22 cy=%22166.2%22 r=%2240.1%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-width=%2220%22 d=%22M88 255c1 218 332 220 330 0%22/%3E%3C/svg%3E"
    },{
        name: "thinking", //   \u1F914  23  0x17  
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 546 546%22%3E %3Cellipse cx=%22272.2%22 cy=%22244.2%22 fill=%22%23ffcc4d%22 rx=%22244.2%22 ry=%22243.4%22/%3E %3Cpath fill=%22%23f4900c%22 d=%22M138 358c15-11 17-32 13-48s-7-29 3-37c19-14 46 19 51 55 3 27-17 51-17 51-3 4 1 6 4 5l167-37c22-5 30 34 10 39l-90 22c12 5 25 31-1 46 25 11 12 37-4 41 15 3 13 31-9 36l-58 13c-35 9-92-16-108-56-20-51-14-88 39-130Z%22/%3E %3Cellipse cx=%22203.2%22 cy=%22158.6%22 rx=%2231.2%22 ry=%2238.5%22/%3E %3Cellipse cx=%22365.4%22 cy=%22174.8%22 rx=%2231.2%22 ry=%2238.5%22/%3E %3Cpath fill=%22none%22 stroke=%22%23664500%22 stroke-linecap=%22round%22 stroke-width=%2225%22 d=%22M230 287c38-6 74 1 107 29M152 84c30-13 65-21 108 3m56 56c31-13 65-17 108 6%22/%3E%3C/svg%3E"
    },{
        name: "quiet", //      \u1F92B  24  0x18
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Cg%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Ccircle cx=%22176.3%22 cy=%22166.6%22 r=%2240.1%22/%3E %3Ccircle cx=%22326.7%22 cy=%22166.2%22 r=%2240.1%22/%3E %3Crect width=%22286%22 height=%2260%22 x=%22212%22 y=%22174%22 fill=%22%23efefef%22 ry=%2214%22 transform=%22rotate(22)%22/%3E %3Crect width=%22286%22 height=%2260%22 x=%22-37%22 y=%22363%22 fill=%22%23fff%22 ry=%2214%22 transform=%22rotate(-22)%22/%3E %3C/g%3E%3C/svg%3E"
    },{
        name: "confused", //   \u1F615  25  0x19
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Ccircle cx=%22176.3%22 cy=%22166.6%22 r=%2240.1%22/%3E %3Cellipse cx=%22325.9%22 cy=%22166.2%22 rx=%2267.7%22 ry=%2266.1%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-width=%2220%22 d=%22M98 301c0 78 110 109 157 33 49-78 157-33 156 50%22/%3E%3C/svg%3E"
    },{
        name: "suspicious", // \u1F928  26  0x1A
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Ccircle cx=%22174.7%22 cy=%22220.1%22 r=%2240.1%22/%3E %3Cellipse cx=%22334.8%22 cy=%22202.3%22 rx=%2240.1%22 ry=%2260.8%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%2220%22 d=%22M191 404h120M95 99l81 64 40-45m79 8 37-45 81 63%22/%3E%3C/svg%3E"
    },{
        name: "unhappy", //    \u1F622  27  0x1B
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Ccircle cx=%22176.3%22 cy=%22166.6%22 r=%2240.1%22/%3E %3Ccircle cx=%22326.7%22 cy=%22166.2%22 r=%2240.1%22/%3E %3Cpath fill=%22%2331a7ff%22 d=%22M367 203s-64 100-4 101 20-76 4-101z%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-width=%2220%22 d=%22M131 386c71-57 148-82 244 1%22/%3E%3C/svg%3E"
    },{
        name: "bored", //      \u1F971  28  0x1C
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Cellipse cx=%22253.4%22 cy=%22308.5%22 rx=%2247.8%22 ry=%2277%22/%3E %3Cpath fill=%22none%22 stroke=%22%23000%22 stroke-linecap=%22round%22 stroke-width=%2220%22 d=%22M304 154c35-14 74 3 87 34m-181-34c-35-14-74 3-86 34%22/%3E%3C/svg%3E"
    },{
        name: "surprised", //   \u1F62E  29  0x1D
        uri: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 507 507%22%3E %3Cg%3E %3Ccircle cx=%22253.4%22 cy=%22253.4%22 r=%22253.4%22 fill=%22%23ffc10e%22/%3E %3Cellipse cx=%22176.3%22 cy=%22176.9%22 rx=%2240.1%22 ry=%2275.2%22/%3E %3Cellipse cx=%22326.7%22 cy=%22176.2%22 rx=%2240.1%22 ry=%2275.2%22/%3E %3Cellipse cx=%22255.3%22 cy=%22365.7%22 rx=%2227.2%22 ry=%2228.4%22/%3E %3C/g%3E%3C/svg%3E"
    }
].forEach(emoji => {
    emojisDropdown.push([{
        "src": emoji.uri,
        "width": 20,
        "height": 20,
        "alt": emoji.name
    }, emoji.name]);
    emojiImages.push(`<img src="${emoji.uri}" width="60" height="60" alt="${emoji.name} emoji"/>`);
});

Blockly.Blocks['emojis'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("emoji")
            .appendField(new Blockly.FieldDropdown(emojisDropdown), "EMOJI");
        this.setOutput(true, Blockly.Constants.STRING);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['color_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("color", "COLOR_LABEL")
            .appendField(new Blockly.FieldColour('BDA602')
                    .setColours(Blockly.Lists.ColorPickerList)
                    .setColumns(9), "COLOR");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.COLOR);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
    onchange: function () {
        let currentBlockColor = Blockly.utils.colour.hexToRgb(this.getFieldValue('COLOR'));
        if ((2 * currentBlockColor[0]) + (7 * currentBlockColor[1]) + currentBlockColor[2] > 1800) {
            this.getField("COLOR_LABEL").textElement_.style.fill = '#000';
        } else {
            this.getField("COLOR_LABEL").textElement_.style.fill = '#fff';
        }
    }
};

Blockly.Blocks['color_variable_block'] = {
    init: function () {
        this.appendValueInput("R")
            .appendField("R:");
        this.appendValueInput("G")
            .appendField("G:");
        this.appendValueInput("B")
            .appendField("B:");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.COLOR);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['color_wheel'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .appendField("color hue");
            this.appendValueInput("BRIGHT")
            .appendField("brightness");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.COLOR);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['color_random'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("random color");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.COLOR);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['compare_values'] = {
    init: function () {
        this.appendValueInput("A")
            .appendField("compare");
        this.appendValueInput("B")
            .appendField("to");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('logic_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['map_value'] = {
    init: function () {
        this.appendValueInput("A")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField("map value");
        this.appendValueInput("B")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField("from range");
        this.appendValueInput("C")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField(":");
        this.appendValueInput("D")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField("to");
        this.appendValueInput("E")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField(":");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('logic_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['round_value'] = {
    init: function () {
        this.appendValueInput("A")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField(new Blockly.FieldDropdown([
                ["round", "round|"],
                ["round down", "int|"],
                ["round up", "int| + 1"],
                ["round to 1 place", "round|, 1"],
                ["round to 2 places", "round|, 2"],
                ["round to 3 places", "round|, 3"]
            ]), "ACTION");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['number_from'] = {
    init: function () {
        this.appendValueInput("A")
            .setCheck(Blockly.Constants.STRING)
            .appendField("number from text");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['rotate_list'] = {
    init: function () {
        this.appendValueInput("LIST")
            .setCheck(Blockly.Constants.LIST)
            .appendField("rotate list");
        this.appendValueInput("VALUE")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField("left by");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Constants.LIST);
        this.setStyle('list_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

// D-pad and Joystick Blocks.  Assumes the following connections:
//   Joystick vertical:      A3
//   Joystick horizontal:    A4
//   Joystick center button: D2
//   Joystick ground:        A5
//   D-pad up:               D1
//   D-pad down:             D0
//   D-pad right:            D4
//   D-pad left:             D3

/*
Blockly.Blocks['command_center_joystick'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\u25C9 joystick")
            .appendField(new Blockly.FieldDropdown([
                ["vertical position", "A3"],
                ["horizontal position", "A4"],
                ["button is pressed", "D2"],
                ["button was pressed", "D2,Fell"],
                ["button was released", "D2,Rose"],
            ], function (pin) {
                var myOutput = Blockly.Constants.NUMBER;
                if (pin.indexOf('D2') > -1) {
                    myOutput = Blockly.Constants.BOOLEAN;
                }
                this.getSourceBlock().setOutput(true, myOutput);
            }), "GPIO");
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['command_center_dpad'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("\u271C button")
            .appendField(new Blockly.FieldDropdown([
                ["1", "D1"],
                ["4", "D4"],
                ["3", "D3"],
                ["2", "D0"],
            ]), "GPIO")
            .appendField(new Blockly.FieldDropdown([
                ["is pressed", "Debounced"],
                ["was pressed", "Fell"],
                ["was released", "Rose"],
            ]), "NAME")
        this.setOutput(true, Blockly.Constants.BOOLEAN);
        this.setStyle('input_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
*/

Blockly.Blocks['keyboard_press'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["keyboard press", "press"],
                ["keyboard release", "release"]
            ]), "ACTION")
            .appendField(new Blockly.FieldDropdown(Blockly.Lists.KeyboardKeys), "KEYCODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['keyboard_release'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('keyboard release keys')
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['keyboard_type'] = {
    init: function () {
        this.appendValueInput("KEYSTRING")
            .setCheck(Blockly.Constants.STRING)
            .appendField('keyboard type');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['mouse_move'] = {
    init: function () {
        this.appendValueInput("MOVE_X")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField('mouse move \u2194');
        this.appendValueInput("MOVE_Y")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField('\u2195');
        this.appendValueInput("MOVE_WHEEL")
            .setCheck(Blockly.Constants.NUMBER)
            .appendField('wheel');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['mouse_move_on'] = {
    init: function () {
        this.appendValueInput("MOVE_NEG_X")
            .setCheck(Blockly.Constants.BOOLEAN)
            .appendField('mouse move \u2190 on');
        this.appendValueInput("MOVE_POS_X")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Constants.BOOLEAN)
            .appendField('move \u2192 on');
        this.appendValueInput("MOVE_POS_Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Constants.BOOLEAN)
            .appendField('move \u2191 on');
        this.appendValueInput("MOVE_NEG_Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(Blockly.Constants.BOOLEAN)
            .appendField('move \u2193 on');
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldDropdown([
                ['medium speed', '4'],
                ['fast speed', '6'],
                ['slow speed', '2']
            ]), 'SPEED');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['mouse_click'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('mouse')
            .appendField(new Blockly.FieldDropdown([
                ['click', 'click'],
                ['press', 'press'],
                ['release', 'release']
            ]), "ACTION")
            .appendField(new Blockly.FieldDropdown([
                ['left', 'LEFT_BUTTON'],
                ['right', 'RIGHT_BUTTON'],
                ['middle', 'MIDDLE_BUTTON'],
                ['all', 'ALL']
            ]), "BUTTON");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle('output_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Blocks['graph_output'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('graph')
            .appendField(new Blockly.FieldDropdown([
                ['number data', Blockly.Constants.NUMBER],
                ['color data', Blockly.Constants.COLOR]
            ], function (action) {
                try {
                    showGraphType(action);
                } catch (e) {}
                let block = this.getSourceBlock();
                block.buildInputs(action, block.optionList_);
            }), "GRAPH_TYPE");
        this.buildInputs(Blockly.Constants.NUMBER, ['dec'])
        this.setPreviousStatement(true, "Block");
        this.setNextStatement(true);
        this.setStyle('output_blocks');
        this.setTooltip('');
        this.setHelpUrl('');
    },
    mutationToDom: function () {
        // Create XML to represent menu options.
        let container = document.createElement('mutation');
        container.setAttribute('options', JSON.stringify(this.optionList_));
        container.setAttribute('type', this.getFieldValue('GRAPH_TYPE'));
        return container;
    },
    domToMutation: function (container) {
        // Parse XML to restore the menu options.
        let graphType = container.getAttribute('type') === Blockly.Constants.COLOR ? Blockly.Constants.COLOR : Blockly.Constants.NUMBER;
        let optionList = JSON.parse(container.getAttribute('options'));
        this.buildInputs(graphType, optionList);
    },
    buildInputs: function (graphType, optionList) {
        if (graphType !== Blockly.Constants.COLOR) {
            this.optionList_ = optionList;
            for (let i = 0; i < this.optionList_.length; i++) {
                if (this.getInput('PRINT' + i)) {
                    this.removeInput('PRINT' + i);
                }
                this.appendValueInput('PRINT' + i)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .setCheck(Blockly.Constants.NUMBER);
                if (i > 0) {
                    this.getInput('PRINT' + i)
                        .appendField(new Blockly.FieldLabel('\u2B24', 'ct-marker-' + i));
                }
            }
            this.getInput('PRINT0')
                .appendField(new Blockly.FieldLabel('\u2B24', 'ct-marker-0'));
            this.setInputsInline(false);
            //this.setMutator(new Blockly.Mutator(['graph_dec']));
            this.setMutator(new Blockly.icons.MutatorIcon(['graph_dec'], this));
        } else {
            for (let i = 0; i < this.optionList_.length; i++) {
                if (this.getInput('PRINT' + i)) {
                    this.removeInput('PRINT' + i);
                }
            }
            this.appendValueInput('PRINT0')
                .setCheck(Blockly.Constants.COLOR);
            this.setInputsInline(true);
            this.setMutator(null);
        }
    },
    decompose: function (workspace) {
        let containerBlock = workspace.newBlock('graphing_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.optionList_.length; i++) {
            let optionBlock = workspace.newBlock('graph_dec');
            optionBlock.initSvg();
            connection.connect(optionBlock.previousConnection);
            connection = optionBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        // Delete everything.
        let i = 0;
        while (this.getInput('PRINT' + i)) {
            this.removeInput('PRINT' + i);
            i++;
        }
        i = 0;
        this.optionList_.length = 0;
        // Rebuild the block's optional inputs.
        let clauseBlock = containerBlock.getInputTargetBlock('STACK');
        while (clauseBlock) {
            this.optionList_.push('dec');
            let printInput = this.appendValueInput('PRINT' + i)
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck(Blockly.Constants.NUMBER);
            if (clauseBlock.valueConnection_) {
                printInput.connection.connect(clauseBlock.valueConnection_);
            }
            if (i > 0) {
                this.getInput('PRINT' + i)
                    .appendField(new Blockly.FieldLabel('\u2B24', 'ct-marker-' + i));
            }
            i++;

            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
        this.getInput('PRINT0')
            .appendField('graph')
            .appendField(new Blockly.FieldLabel('\u2B24', 'ct-marker-0'));
    },
    saveConnections: function (containerBlock) {
        // Store a pointer to any connected child blocks.
        let clauseBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (clauseBlock) {
            let printInput = this.getInput('PRINT' + i);
            clauseBlock.valueConnection_ =
                printInput && printInput.connection.targetConnection;
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
            i++;
        }
    },
    onchange: function () {
        if (this.optionList_.length > 10) {
            this.setWarningText('Graphing output only supports up to 10 values.');
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['graphing_container'] = {
    init: function () {
        this.setStyle('input_blocks');
        this.appendDummyInput()
            .appendField('send');
        this.appendStatementInput('STACK');
        this.contextMenu = false;
    }
};

Blockly.Blocks['graph_dec'] = {
    init: function () {
        this.setStyle('input_blocks');
        this.appendDummyInput()
            .appendField('value');
        this.setPreviousStatement(true, "Block");
        this.setNextStatement(true);
        this.contextMenu = false;
    }
};

/*
Blockly.Blocks['color_matrix'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('pixel grid')
            .appendField(new Blockly.FieldColorGrid('PAINTBRUSH'), "ACTION");
        this.appendDummyInput('COLOR_PICKER')
            .appendField('\u00a0\u00a0')
            .appendField('', 'PAINTBRUSH');
        // Only used to suppress a warning that the field is unavailable.
        this.getField('PAINTBRUSH').setVisible(false);
        this.setOutput(true, Blockly.Constants.PIXELGRID);
        this.setInputsInline(true);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
        this.currentColor = 'FFFFFF'; // necessary to make the paintbrush work!
        this.hiddenState = true;
    },
    onchange: function (event) {
        if (event === 'showPaintbrush' ||
            (
                (event.element === 'dragStop' || event.element === 'click') &&
                event.blockId === this.id &&
                this.hiddenState
            )
        ) {
            this.removeInput('COLOR_PICKER');
            this.hiddenState = false;
            this.appendDummyInput('COLOR_PICKER')
                .appendField("paintbrush color")
                .appendField(new Blockly.FieldColour('#FFFFFF', function (value) {
                    this.getSourceBlock().currentColor = value.replace(/#/g, '');
                    return value;
                }).setColours(Blockly.Lists.ColorPickerList).setColumns(9), "PAINTBRUSH");
            let currentBlock = this;
            setTimeout(() => {
                if (currentBlock.currentColor.length > 5) {
                    currentBlock.setFieldValue(currentBlock.currentColor, 'PAINTBRUSH');
                }
            }, 25);
        } else if (Blockly.selected !== this && !this.hiddenState) {
            this.removeInput('COLOR_PICKER');
            this.hiddenState = true;
            this.appendDummyInput('COLOR_PICKER')
                .appendField('\u00a0\u00a0');
        }
    }
};
*/

Blockly.Blocks['color_matrix'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('pixel grid', 'COLOR_LABEL')
            .appendField(new Blockly.FieldColorGrid('PAINTBRUSH'), "ACTION");
        this.appendDummyInput('COLOR_PICKER')
            .appendField('\u00a0\u00a0')
            .appendField(new Blockly.FieldColour('#BDA602', function (value) {
                this.getSourceBlock().currentColor = value.replace(/#/g, '');
                return value;
            }).setColours(Blockly.Lists.ColorPickerList).setColumns(9), "PAINTBRUSH");
        this.setOutput(true, Blockly.Constants.PIXELGRID);
        this.setInputsInline(true);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
        this.currentColor = 'BDA602'; // necessary to make the paintbrush work!
        this.hiddenState = true;
    },
    onchange: function () {
        let currentBlockColor = Blockly.utils.colour.hexToRgb(this.getFieldValue('PAINTBRUSH'));
        if ((2 * currentBlockColor[0]) + (7 * currentBlockColor[1]) + currentBlockColor[2] > 1800) {
            this.getField("COLOR_LABEL").textElement_.style.fill = '#000';
        } else {
            this.getField("COLOR_LABEL").textElement_.style.fill = '#fff';
        }
    }
};

Blockly.Blocks['color_matrix_text'] = {
    init: function () {
        this.appendValueInput("TEXT")
            .appendField('pixel grid from text')
            .setCheck(Blockly.Constants.STRING);
        this.appendDummyInput()
            .appendField("text color")
            .appendField(new Blockly.FieldColour('FFFFFF')
                .setColours(Blockly.Lists.ColorPickerList).setColumns(9), "TEXT_COLOR");
        this.appendDummyInput()
            .appendField("background color")
            .appendField(new Blockly.FieldColour('000000')
                .setColours(Blockly.Lists.ColorPickerList).setColumns(9), "BKG_COLOR");        
        this.setOutput(true, Blockly.Constants.PIXELGRID);
        this.setInputsInline(false);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['color_matrix_width'] = {
    init: function () {
        this.appendValueInput("GRID")
            .appendField('width of pixel grid')
            .setCheck(Blockly.Constants.PIXELGRID);       
        this.setOutput(true, Blockly.Constants.NUMBER);
        this.setStyle('value_blocks');
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

/**	
 * Sets the output of the variable block's type to whatever the type of the value the variable is set to.	
 * If the variable is set multiple times, it will take the type of the value last set (top to bottom),	
 * which should match how the code is generated.	
 */

/*
Blockly.Blocks['variables_get'].onchange = function (event) {	
    let varBlocks = workspace.getBlocksByType('variables_set', true).concat(workspace.getBlocksByType('controls_forEach', true));	
    let outputType = null;	
    varBlocks.forEach((block) => {	
        if (block.getFieldValue('VAR') === this.getFieldValue('VAR')) {	
            if (block.type === 'variables_set' &&	
                block.getInput('VALUE') &&	
                block.getInput('VALUE').connection.targetConnection &&	
                block.getInput('VALUE').connection.targetConnection.check_) {	
                outputType = block.getInput('VALUE').connection.targetConnection.check_[0];	
            } else {	
                outputType = Blockly.Constants.NUMBER;	
            }	
        }	
    });	
    this.setOutput(true, outputType);	
}
*/

/** @type {string} */
Blockly.Msg.TEXT_PRINT = 'print %1';
Blockly.Msg.TEXT_PRINT_NO_NEWLINE_TITLE = 'print %1 without new line';
//Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';

Blockly.Blocks['text_print'] = {
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg['TEXT_PRINT'],
            "args0": [
            {
                "type": "input_value",
                "name": "TEXT"
            }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "style": "chip_blocks",
            "tooltip": Blockly.Msg['TEXT_PRINT_TOOLTIP'],
            "helpUrl": Blockly.Msg['TEXT_PRINT_HELPURL']
        });
    }
};

Blockly.Blocks['text_print_no_newline'] = {
    /**
     * Block for print statement without a newline at the end.
     * @this {Blockly.Block}
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg['TEXT_PRINT_NO_NEWLINE_TITLE'],
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "style": "chip_blocks",
            "tooltip": Blockly.Msg['TEXT_PRINT_TOOLTIP'],
            "helpUrl": Blockly.Msg['TEXT_PRINT_HELPURL']
        });
    }
};
  

Blockly.Msg.TEXT_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
Blockly.Msg.TEXT_REPEAT_TOOLTIP = 'Creates text consisting of the given value repeated the specified number of times.';
Blockly.Msg.TEXT_REPEAT_TITLE = 'create text with item %1 repeated %2 times';

// Block for creating a list with one element repeated.
Blockly.Blocks['text_repeat'] = {
    /**
     * Block for print statement without a newline at the end.
     * @this {Blockly.Block}
     */
    init: function() {
        this.jsonInit({
            "message0": "%{BKY_TEXT_REPEAT_TITLE}",
            "args0": [
                {
                    "type": "input_value",
                    "name": "ITEM"
                },
                {
                    "type": "input_value",
                    "name": "NUM",
                    "check": Blockly.Constants.NUMBER
                }
            ],
            "output": Blockly.Constants.LIST,
            "style": "value_blocks",
            "tooltip": "%{BKY_TEXT_REPEAT_TOOLTIP}",
            "helpUrl": "%{BKY_TEXT_REPEAT_HELPURL}"
        });
    }
};

//Blockly.Msg.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";

Blockly.Blocks['my_random'] = {
    init: function() {
        this.jsonInit({  // Block for random integer between [X] and [Y].
            'message0': '%{BKY_MATH_RANDOM_INT_TITLE}',
            'args0': [
                {
                    'type': 'input_value',
                    'name': 'FROM',
                    'check': Blockly.Constants.NUMBER,
                },
                {
                    'type': 'input_value',
                    'name': 'TO',
                    'check': Blockly.Constants.NUMBER,
                },
            ],
            'inputsInline': true,
            'output': Blockly.Constants.NUMBER,
            'style': 'value_blocks',
            'tooltip': '%{BKY_MATH_RANDOM_INT_TOOLTIP}',
            'helpUrl': '%{BKY_MATH_RANDOM_INT_HELPURL}',
        });
    }
};

Blockly.Blocks['logic_boolean'] = {
    init: function() {
        this.jsonInit({
            'message0': '%1',
            'args0': [
                {
                    'type': 'field_dropdown',
                    'name': 'BOOL',
                    'options': [
                        ['%{BKY_LOGIC_BOOLEAN_TRUE}', 'TRUE'],
                        ['%{BKY_LOGIC_BOOLEAN_FALSE}', 'FALSE'],
                    ],
                },
            ],
            'output': Blockly.Constants.BOOLEAN,
            'style': 'value_blocks',
            'tooltip': '%{BKY_LOGIC_BOOLEAN_TOOLTIP}',
            'helpUrl': '%{BKY_LOGIC_BOOLEAN_HELPURL}',
        });
    }
};

Blockly.Msg.MATH_MODULO_SYMBOL = "%";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MODULO = "Return the remainder after dividing the two numbers.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.";

Blockly.Blocks['math_arithmetic'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "A",
                    "check": Blockly.Constants.NUMBER
                },
                {
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
                        ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
                        ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
                        ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
                        ["%{BKY_MATH_POWER_SYMBOL}", "POWER"],
                        ["%{BKY_MATH_MODULO_SYMBOL}", "MODULO"],
                    ]
                },
                {
                    "type": "input_value",
                    "name": "B",
                    "check": Blockly.Constants.NUMBER
                }
            ],
            "inputsInline": true,
            "output": Blockly.Constants.NUMBER,
            "style": "math_blocks",
            "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
            "extensions": ["math_op_tooltip"]
        });
    }
};


Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_AEQ = "Return true if both inputs are similar to each other.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.";

Blockly.Blocks['logic_compare'] = {
    init: function() {
        this.jsonInit({
            "message0": "%1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "A"
                },
                {
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["=", "EQ"],
                        ["\u2248", "AEQ"],
                        ["\u2260", "NEQ"],
                        ["\u200F<", "LT"],
                        ["\u200F\u2264", "LTE"],
                        ["\u200F>", "GT"],
                        ["\u200F\u2265", "GTE"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "B"
                }
            ],
            "inputsInline": true,
            "output": Blockly.Constants.BOOLEAN,
            "style": "logic_blocks",
            "helpUrl": "%{BKY_LOGIC_COMPARE_HELPURL}",
            "extensions": ["logic_compare", "logic_op_tooltip"]
        });
    }
};


//Blockly.Msg.LOGIC_NEGATE_TITLE = "not %1";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
//Blockly.Msg.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
Blockly.Msg.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";