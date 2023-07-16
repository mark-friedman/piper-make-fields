if (!python.pythonGenerator.hiddenDefs) {
    python.pythonGenerator.hiddenDefs = {};
}

python.pythonGenerator.hiddenDefs['digital_view'] = 'digital_view = False\n';

/**
 * Prepend the generated code with import statements and variable definitions.
 * @override
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
python.pythonGenerator.finish = function (code) {
    // Convert the definitions dictionary into a list.
    const imports = [];
    const definitions = [];
    for (let name in this.definitions_) {
        const def = this.definitions_[name];
        if (def.match(/^(from\s+\S+\s+)?import\s+\S+/)) {
            imports.push(def);
        } else {
            definitions.push(def);
        }
    }
    // Call Blockly.CodeGenerator's finish.
    code = Blockly.CodeGenerator.prototype.finish(code);
    this.isInitialized = false;
    this.nameDB_.reset();

    // >>>> This is the section of this function that is overriden <<<<
    // Format code.  NOTE: These delimiters are not just decorative - 
    // they serve as markers for hidden code injection at load-time, so DO NOT CHANGE THEM!!!!
    let allDefs = '';
    allDefs += '## ---- Imports ---- ##\n';
    allDefs += imports.join('\n') + '\n\n';
    allDefs += '## ---- Definitions ---- ##\n';
    allDefs += definitions.join('\n');
    allDefs = allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n');
    allDefs += '## ---- Code ---- ##\n';
    return allDefs + code;
}


// Add reserved words to that the user doesn't create variables that collide with function and system variable names.
python.pythonGenerator.addReservedWords(
    'screen,rgb_to_byte,lightshow,Pix,digital_view,piper_blockly,piper_lightshow,piperGraphColor,piperGraphNumbers,' +
    'mouse_HID,Mouse,usb_hid,keyboard_HID_layout,Keyboard,time,Keycode,colorCompare,stringCompare,numberCompare,' + 
    'piperColorWheelpiper_controller,buttons_pressed_value,emojiCharacter,microcontroller,piperBarGraphLED,' + 
    'temperature_sensor,neopixels,piperNeoPixels,piperCapSensePin,piperServoPin,piperDistanceSensorPin,color_sensor,' + 
    'busio,i2c_bus,board,playSound,shout,time,consolePosition,consoleClear,input,print'
)

python.pythonGenerator.formatColor = function (color_value) {
    color_value = color_value.replace(/#/g, '').trim() || '000000';
    let number_r = parseInt(color_value.substr(0, 2), 16);
    let number_g = parseInt(color_value.substr(2, 2), 16);
    let number_b = parseInt(color_value.substr(4, 2), 16);
    color_value = `(${number_r}, ${number_g}, ${number_b})`;
    return color_value;
}

python.pythonGenerator.forBlock['on_start'] = function (block, generator) {
    return '';
}

python.pythonGenerator.forBlock['pin_on_off'] = function (block, generator) {
    let gpio = block.getFieldValue('GPIO');
    let action = block.getFieldValue('NAME');
    //let voltage = generator.valueToCode(block, 'CONDITION', generator.ORDER_ATOMIC) || '0';

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['digital_pin_' + gpio] = `${gpio} = piper${action === '-1' ? 'pwm' : ''}Pin(board.${gpio}, "${gpio}")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';

        //if (action === '-1') {
            //action = voltage;
        //}
    }

    return `${gpio}.setPin(${action})\n`;
}

python.pythonGenerator.forBlock['pin_check'] = function (block, generator) {
    let gpio = block.getFieldValue('GPIO');
    let action = block.getFieldValue('CHECKFOR').split(',');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['import_digitalio_pull'] = 'from digitalio import Pull';
        generator.definitions_['digital_pin_' + gpio] = `${gpio} = piperPin(board.${gpio}, "${gpio}")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return [`${action[0] === '0' ? 'not ' : ''}${gpio}.checkPin(${(action[1] === 'FLOAT' ? 'None' : 'Pull.' + action[1]) })`, generator.ORDER_NONE];
}

/*
python.pythonGenerator.forBlock['command_center_dpad'] = function (block, generator) {
    let gpio = block.getFieldValue('GPIO');
    let action = block.getFieldValue('NAME');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['import_digitalio_pull'] = 'from digitalio import Pull';
        generator.definitions_['digital_pin_' + gpio] = `${gpio} = piperPin(board.${gpio}, "${gpio}")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return [`${action === 'Debounced' ? 'not ' : '' }${gpio}.checkPin${action}(Pull.UP)`, generator.ORDER_NONE];
}

python.pythonGenerator.forBlock['command_center_joystick'] = function (block, generator) {
    let gpio = block.getFieldValue('GPIO');
    let code = '';

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['digital_pin_A5'] = `A5 = piperPin(board.A5, "A5")\nA5.setPin(0)`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';

        if (gpio !== 'A3' && gpio !== 'A4') {
            let pin = gpio.split(',');
            if (!pin[1]) {
                pin[1] = 'Debounced';
            }

            generator.definitions_['import_digitalio_pull'] = 'from digitalio import Pull';
            generator.definitions_['digital_pin_' + pin[0]] =
                `${pin[0]} = piperPin(board.${pin[0]}, "${pin[0]}")\n` +
                `_setupCheck = ${pin[0]}.checkPinDebounced(Pull.UP)`;

            code = `${pin[1] === 'Debounced' ? 'not ' : '' }${pin[0]}.checkPin${pin[1]}(Pull.UP)`;

        } else {
            generator.definitions_['joystick_pin_' + gpio] = `${gpio} = piperJoystickAxis(board.${gpio}, "${gpio}")`;

            code = `${gpio}.readJoystickAxis()`;
        }
    }

    return [code, generator.ORDER_NONE];
}
*/

python.pythonGenerator.forBlock['pin_analog_read'] = function (block, generator) {
    let gpio = block.getFieldValue('GPIO');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['analog_pin_' + gpio] = `\n${gpio} = piperPin(board.${gpio}, "${gpio}", "Analog")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';    
    }

    return [`${gpio}.readVoltage()`, generator.ORDER_ATOMIC];
}

/*
python.pythonGenerator.forBlock['dotstar_rgb_led'] = function (block, generator) {
    let ledColor = generator.valueToCode(block, 'COLOR', generator.ORDER_NONE) || '(0, 0, 0)';

    if (!block.disabled) {
        generator.definitions_['dotstar_init'] = 'dotstar_led = piperDotStar()';
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n'; 
    }

    return `dotstar_led.setDotStar(${ledColor})\n`;
}
*/

python.pythonGenerator.forBlock['wait'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_time'] = 'import time';
    }

    let value_time = generator.valueToCode(block, 'time', generator.ORDER_ATOMIC);
    return `time.sleep(${value_time})\n`;
};

python.pythonGenerator.forBlock['wait_condition'] = function (block, generator) {
    let condition = generator.valueToCode(block, 'CONDITION', generator.ORDER_ATOMIC);
    let inner = block.getFieldValue('ACTION');

    return `while ${inner === 'until' ? 'not ' : ''}(${condition}):\n${generator.INDENT}pass\n`;
};

python.pythonGenerator.forBlock['chip_clock'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_time'] = 'import time';
        generator.definitions_['chip_clock'] = '_clock_start = time.monotonic() + 0.09 # adjust for startup time\n'
        generator.definitions_['chip_clock'] += 'def chip_clock():\n' + generator.INDENT + 'global _clock_start\n'
        generator.definitions_['chip_clock'] += generator.INDENT + 'return time.monotonic() - _clock_start\n'
    }

    return['chip_clock()', generator.ORDER_ATOMIC];
};

python.pythonGenerator.forBlock['console_input'] = function (block, generator) {
    let question = generator.valueToCode(block, 'QUESTION', generator.ORDER_ATOMIC);
    return [`input(${question} + ' :?')`, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['console_clear'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    return 'consoleClear()\n';
};

python.pythonGenerator.forBlock['console_cursor_position'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    let x_pos = generator.valueToCode(block, 'CURSOR_X', generator.ORDER_ATOMIC);
    let y_pos = generator.valueToCode(block, 'CURSOR_Y', generator.ORDER_ATOMIC);
    return `consolePosition(${x_pos}, ${y_pos})\n`;
};

python.pythonGenerator.forBlock['repeat_forever'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_time'] = 'import time';
    }

    let delay = generator.valueToCode(block, 'DELAY', generator.ORDER_ATOMIC);
    let inner = generator.statementToCode(block, 'DO');

    if (!delay && !inner) {
        inner = generator.INDENT + "pass";
    } else {
        if (delay && delay == delay.replace(/[^0-9\(\)\.-]/g,'')) {
            delay = parseFloat(delay.replace(/\((.*?)\)/g, '$1'));
            delay = (delay < 0.002 ? 0.002 : delay);
        }
        inner += `\n${generator.INDENT}time.sleep(${delay})`;
    }

    return "while True:\n" + inner + "\n";
};

for (let set in Blockly.Lists.Sounds) {
    if (Blockly.Lists.Sounds.hasOwnProperty(set)) {
        python.pythonGenerator.forBlock['sounds_' + set] = function (block, generator) {
            return [`"${block.getFieldValue("path")}"`, generator.ORDER_ATOMIC];
        };
    }
}

python.pythonGenerator.forBlock['sounds_instrument'] = function (block, generator) {
    let note = generator.valueToCode(block, 'NOTE', generator.ORDER_ATOMIC) || '440';
    let duration = generator.valueToCode(block, 'DURATION', generator.ORDER_ATOMIC) || '0.125';
    let instrument = block.getFieldValue("instrument") || 'piano';

    return [`"instrument|${instrument}|" + str(${duration}) + "|" + str(${note})`, generator.ORDER_ATOMIC];
}

python.pythonGenerator.forBlock['sound_note_value'] = function (block, generator) {
    return [`${block.getFieldValue("PITCH") || '65.41'}`, generator.ORDER_ATOMIC];
}

python.pythonGenerator.forBlock['sound_note_duration'] = function (block, generator) {
    let duration = parseFloat(block.getFieldValue("DURATION") || '0.125');
    return [`${duration}`, generator.ORDER_ATOMIC];
}

python.pythonGenerator.forBlock['playsound'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    let value = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC) || "";
    return `playSound(${value})\n`;
};

python.pythonGenerator.forBlock['shout'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    let shout_color = generator.valueToCode(block, 'COLOR', generator.ORDER_NONE) || '(0, 0, 0)';
    let value_name = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC) || '"hey!"';
    return 'shout(' + shout_color + ', ' + value_name + ')\n';
};

python.pythonGenerator.forBlock['color_sensor'] = function (block, generator) {
    let dropdown_gain = block.getFieldValue('GAIN') || '0';
    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['import_busio'] = 'import busio';
        generator.definitions_['setup_i2c'] = 'i2c_bus = busio.I2C(scl=board.GP21, sda=board.GP20)';
        generator.definitions_['color_sensor_init'] = 'color_sensor = piperColorSensor(i2c_bus)\ncolor_sensor.sensorGain = 60';

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    if (block.type === 'color_sensor') {
        return ['color_sensor.readColorSensor()', generator.ORDER_ATOMIC];
    } else {
        return `color_sensor.sensorGain = ${dropdown_gain}\n`;
    }
};


python.pythonGenerator.forBlock['motion_sensor_read'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['import_busio'] = 'import busio';
        generator.definitions_['setup_i2c'] = 'i2c_bus = busio.I2C(scl=board.GP21, sda=board.GP20)';
        generator.definitions_['motion_sensor_init'] = 'motion_sensor = piperMotionSensor(i2c_bus)';

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return 'motion_sensor.read()\n'
};

python.pythonGenerator.forBlock['motion_sensor'] = function (block, generator) {
    let value = block.getFieldValue("VALUE") || 'acc_x';
    return [`motion_sensor.${value}`, generator.ORDER_ATOMIC];
}

python.pythonGenerator.forBlock['heart_sensor_read'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['import_busio'] = 'import busio';
        generator.definitions_['setup_i2c'] = 'i2c_bus = busio.I2C(scl=board.GP21, sda=board.GP20)';
        generator.definitions_['heart_sensor_init'] = 'heart_sensor = piperHeartSensor(i2c_bus)\nheart_sensor.start()';

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return 'heart_sensor.read()\n'
};

python.pythonGenerator.forBlock['heart_sensor'] = function (block, generator) {
    let value = block.getFieldValue("VALUE") || 'raw_value';
    return [`heart_sensor.${value}`, generator.ORDER_ATOMIC];
}

python.pythonGenerator.forBlock['color_sensor_led'] = python.pythonGenerator.forBlock['color_sensor'];

python.pythonGenerator.forBlock['alphabeth_letter'] = function (block, generator) {
    return [`"${block.getFieldValue("LETTER")}"`, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['range_finder_sensor'] = function (block, generator) {
    const gpio = block.getFieldValue('GPIO');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['digital_pin_' + gpio] = `${gpio} = piperDistanceSensorPin(board.${gpio}, "${gpio}")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';

        generator.definitions_['check_range_for_none'] = '\ndef distance_range(_value):';
        generator.definitions_['check_range_for_none'] += '\n' + generator.INDENT + 'if (_value == None):';
        generator.definitions_['check_range_for_none'] += '\n' + generator.INDENT + generator.INDENT + 'return 520';
        generator.definitions_['check_range_for_none'] += '\n' + generator.INDENT + 'else:';
        generator.definitions_['check_range_for_none'] += '\n' + generator.INDENT + generator.INDENT + 'return _value\n';
    }

    let code = `distance_range(${gpio}.readDistanceSensor())`;
    if (block.getFieldValue('UNIT') === 'INCHES') {
        code = `(${code} / 2.54)`;
    }
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['cap_sense_pin'] = function (block, generator) {
    const gpio = block.getFieldValue('GPIO');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['digital_pin_' + gpio] = `${gpio} = piperCapSensePin(board.${gpio}, "${gpio}")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    let code = `${gpio}.readCapSenseValue()`;
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['servo_angle'] = function (block, generator) {
    const gpio = block.getFieldValue('GPIO');
    const value = generator.valueToCode(block, 'ANGLE', generator.ORDER_ATOMIC) || 'None';

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['digital_pin_' + gpio] = `${gpio} = piperServoPin(board.${gpio}, "${gpio}")`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    if (block.type === 'servo_angle') {
        return `${gpio}.setServoAngle(${value})\n`;
    } else {
        if (value === 'None') {
            return `${gpio}.setServoFraction(None)\n`;
        } else {
            return `${gpio}.setServoFraction(min(max(${value} * 0.0018 + 0.5,0),1))\n`;
        }
    }
};

python.pythonGenerator.forBlock['servo_stop'] = python.pythonGenerator.forBlock['servo_angle'];
python.pythonGenerator.forBlock['servo_percent'] = python.pythonGenerator.forBlock['servo_angle'];

python.pythonGenerator.forBlock['neopixel_setup'] = function (block, generator) {
    let gpio = block.getFieldValue('GPIO');
    let pixelCount = block.getFieldValue('PIXEL_COUNT');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['digital_pin_' + gpio] = `neopixels = piperNeoPixels(board.${gpio}, "${gpio}", ${pixelCount})`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return '';
};

python.pythonGenerator.forBlock['neopixel_set_pixel'] = function (block, generator) {
    const pixel = generator.valueToCode(block, 'PIXEL', generator.ORDER_ATOMIC) || '1';
    const color = generator.valueToCode(block, 'COLOR', generator.ORDER_ATOMIC) || '(0, 0, 0)';
    return `neopixels.pixels[${pixel} - 1] = ${color}\n`;
}

python.pythonGenerator.forBlock['neopixel_brightness'] = function (block, generator) {
    const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '50';
    return `neopixels.brightness = ${value} / 100\n`;
}

python.pythonGenerator.forBlock['neopixel_fill'] = function (block, generator) {
    const color = generator.valueToCode(block, 'COLOR', generator.ORDER_ATOMIC) || '(0, 0, 0)';
    return `neopixels.fill(${color})\n`;
}

python.pythonGenerator.forBlock['neopixel_show'] = function (block, generator) {
    return `neopixels.show()\n`;
}

python.pythonGenerator.forBlock['temperature_sensor'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['import_busio'] = 'import busio';
        generator.definitions_['setup_i2c'] = 'i2c_bus = busio.I2C(scl=board.GP21, sda=board.GP20)';
        generator.definitions_['temperature_sensor_init'] = 'temperature_sensor = piperTemperatureSensor(i2c_bus)';

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    let code = `temperature_sensor.readTemperatureSensor()`;
    if (block.getFieldValue('UNIT') !== 'CELSIUS') {
        code = `(${code} * 9 / 5 + 32)`;
    }

    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['bar_graph_led_setup'] = function (block, generator) {
    const start_pin = parseInt(block.getFieldValue('START').replace('GP','') || '0');
    const end_pin = parseInt(block.getFieldValue('END').replace('GP','') || '0');
    const inc_or_dec = start_pin > end_pin ? -1 : 1;

    let i = start_pin; 
    let pins = [('GP' + start_pin)];
    if (start_pin !== end_pin) {
        while (true) {
            i += inc_or_dec;
            pins.push('GP' + i);
            if (i === end_pin || (start_pin + end_pin - Math.abs(i) < 0)) {
                break;
            }
        }
    }

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        pins.forEach(pin => {
            generator.definitions_['digital_pin_' + pin] = `${pin} = piperPin(board.${pin}, "${pin}")`;
        });

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';

        const pin_array = '[' + pins.join(',') + ']';
        python.pythonGenerator.hiddenDefs['bar_graph_led_def'] = '\ndef piperBarGraphLED(single, show_value):\n' + 
            generator.INDENT + 'show_value = int(show_value)\n' +
            generator.INDENT + 'bar_graph_pins = ' + pin_array + '\n' +
            generator.INDENT + 'for pin in bar_graph_pins:\n' +
            generator.INDENT + generator.INDENT + 'pin.setPin(0)\n' +
            generator.INDENT + 'if (show_value <= 0): return\n' +
            generator.INDENT + 'if (show_value > ' + pins.length + '): show_value = ' + pins.length + '\n' +
            generator.INDENT + 'if (single):\n' +
            generator.INDENT + generator.INDENT + 'bar_graph_pins[int(show_value) - 1].setPin(1)\n' +
            generator.INDENT + 'else:\n' +
            generator.INDENT + generator.INDENT + 'for nn in range(int(show_value)):\n' +
            generator.INDENT + generator.INDENT + generator.INDENT + 'bar_graph_pins[nn].setPin(1)\n';
    }

    return '';
};

python.pythonGenerator.forBlock['bar_graph_led_display'] = function (block, generator) {
    const action = block.getFieldValue('ACTION');
    const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '0';

    return `piperBarGraphLED(${action}, ${value})\n`;
};

python.pythonGenerator.forBlock['chip_temperature'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_microcontroller'] = 'import microcontroller';
    }

    let code = `microcontroller.cpu.temperature`;
    if (block.getFieldValue('UNIT') !== 'CELSIUS') {
        code = `(${code} * 9 / 5 + 32)`;
    }

    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['emojis'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return [`emojiCharacter("${block.getFieldValue("EMOJI")}")`, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['controller_setup'] = function (block, generator) {
    let pin_data = block.getFieldValue('DATA');
    let pin_latch = block.getFieldValue('LATCH');
    let pin_clock = block.getFieldValue('CLOCK');

    if (!block.disabled) {
        generator.definitions_['import_board'] = 'import board';
        generator.definitions_['controller_pins'] = `piper_controller = piperControllerPins(board.${pin_clock}, "${pin_clock}", board.${pin_data}, "${pin_data}", board.${pin_latch}, "${pin_latch}")`;
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    return '';
};

python.pythonGenerator.forBlock['controller_read'] = function (block, generator) {
    return 'buttons_pressed_value = piper_controller.readButtons()\n';
};

python.pythonGenerator.forBlock['controller_button'] = function (block, generator) {
    let button_name = block.getFieldValue('BUTTON');
    return [`piper_controller.wasPressed(${button_name})`, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['controller_map'] = function (block, generator) {
    let button_name = block.getFieldValue('BUTTON');
    let action_name = block.getFieldValue('ACTION');

    let action_mouse = action_name.indexOf('_BUTTON') > -1;

    if (!block.disabled) {
        generator.definitions_['import_time'] = 'import time';
        generator.definitions_['import_usb_hid'] = 'import usb_hid';

        if (action_mouse) {
            generator.definitions_['import_mouse'] = 'from adafruit_hid.mouse import Mouse';
            generator.definitions_['mouse_setup'] = 'mouse_HID = Mouse(usb_hid.devices)\n';

        } else {
            generator.definitions_['import_keyboard'] = 'from adafruit_hid.keyboard import Keyboard';
            generator.definitions_['import_keyboard_layout'] = 'from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS';
            generator.definitions_['import_keycode'] = 'from adafruit_hid.keycode import Keycode';
            generator.definitions_['keyboard_setup'] =
                'time.sleep(1)\nkeyboard_HID = Keyboard(usb_hid.devices)\n' +
                'keyboard_HID_layout = KeyboardLayoutUS(keyboard_HID)\n';
        }
    }

    let code = `if piper_controller.wasPressed(${button_name}):\n` + generator.INDENT;
    if (action_mouse) {
        code += `keyboard_HID.press(Keycode.${action_name})\n`;
    } else {
        code += `mouse_HID.press(Mouse.${action_name})\n`;
    }

    code += `elif not (piper_controller.wasPressed(${button_name})):\n` + generator.INDENT;
    if (action_mouse) {
        code += `keyboard_HID.release(Keycode.${action_name})\n`;
    } else {
        code += `mouse_HID.release(Mouse.${action_name})\n`;
    }

    return code;
}

python.pythonGenerator.forBlock['color_value'] = function (block, generator) {
    return [python.pythonGenerator.formatColor(block.getFieldValue('COLOR')), generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['color_random'] = function (block, generator) {
    generator.definitions_['import_random'] = 'import random';
    const code = `piperColorWheel(random.randint(0, 255), 50)`;
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['color_variable_block'] = function (block, generator) {
    const number_r = generator.valueToCode(block, 'R', generator.ORDER_ATOMIC);
    const number_g = generator.valueToCode(block, 'G', generator.ORDER_ATOMIC);
    const number_b = generator.valueToCode(block, 'B', generator.ORDER_ATOMIC);
    const code = `(${number_r || '0'}, ${number_g || '0'}, ${number_b || '0'})`;
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['color_wheel'] = function (block, generator) {
    const color_value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '0';
    const bright_value = generator.valueToCode(block, 'BRIGHT', generator.ORDER_ATOMIC) || '100';
    const code = `piperColorWheel(${color_value}, ${bright_value})`;
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['compare_values'] = function (block, generator) {
    let value_a = generator.valueToCode(block, 'A', generator.ORDER_NONE) || '0';
    let value_b = generator.valueToCode(block, 'B', generator.ORDER_NONE) || '0';
    let code = `(${value_a } == ${value_b})`;

    let type_a = Blockly.Constants.NUMBER;
    let type_b = Blockly.Constants.NUMBER;

    if (block.getInput('A').connection.targetConnection &&
        block.getInput('A').connection.targetConnection.check_) {
        type_a = block.getInput('A').connection.targetConnection.check_[0];
    }
    if (block.getInput('B').connection.targetConnection &&
        block.getInput('B').connection.targetConnection.check_) {
        type_b = block.getInput('B').connection.targetConnection.check_[0];
    }

    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    if (type_a === Blockly.Constants.COLOR || type_b === Blockly.Constants.COLOR) {
        code = `colorCompare(${value_a}, ${value_b})`;
    } else if (type_a === Blockly.Constants.STRING || type_b === Blockly.Constants.STRING) {
        code = `stringCompare(${value_a}, ${value_b})`;
    } else if (type_a === Blockly.Constants.NUMBER && type_a === type_b) {
        code = `numberCompare(${value_a}, ${value_b})`;
    }

    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['map_value'] = function (block, generator) {
    const number_a = generator.valueToCode(block, 'A', generator.ORDER_ATOMIC);
    const number_b = generator.valueToCode(block, 'B', generator.ORDER_ATOMIC);
    const number_c = generator.valueToCode(block, 'C', generator.ORDER_ATOMIC);
    const number_d = generator.valueToCode(block, 'D', generator.ORDER_ATOMIC);
    const number_e = generator.valueToCode(block, 'E', generator.ORDER_ATOMIC);

    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    const code = `mapValue(${number_a || '0'}, ${number_b || '0'}, ${number_c || '0'}, ${number_d || '0'}, ${number_e || '0'})`;
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['round_value'] = function (block, generator) {
    const number_a = generator.valueToCode(block, 'A', generator.ORDER_ATOMIC);
    const action = (block.getFieldValue('ACTION') || 'float|').split('|');

    const code = action[0] + '(' + number_a + (action[1] || '') + ')';
    return [code, generator.ORDER_NONE];
};

python.pythonGenerator.forBlock['number_from'] = python.pythonGenerator.forBlock['round_value'];

/**
 * @override
 * @param {object} block Blockly block to generate python code for
 * @returns {array} generated code (value) and an evaluation order for the value.
 */
python.pythonGenerator.forBlock['logic_compare'] = function (block, generator) {
    let op = block.getFieldValue('OP');
    let order = generator.ORDER_RELATIONAL;
    let code = '';

    if (op !== 'AEQ') {
        // Comparison operator.
        let OPERATORS = {
        'EQ': '==',
        'NEQ': '!=',
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
        };
        let operator = OPERATORS[op];
        let argument0 = generator.valueToCode(block, 'A', order) || '0';
        let argument1 = generator.valueToCode(block, 'B', order) || '0';
        code = argument0 + ' ' + operator + ' ' + argument1;

    } else {
        let comparison_function_code = python.pythonGenerator.forBlock['compare_values'](block);
        if (comparison_function_code[0].indexOf(' == ') === -1) {
            code = comparison_function_code[0] + ' > 85';
        } else {
            code = comparison_function_code[0];
            order = generator.ORDER_NONE;
        }
    }

    return [code, order];
};

python.pythonGenerator.forBlock['rotate_list'] = function (block, generator) {
    const list_name = generator.valueToCode(block, 'LIST', generator.ORDER_ATOMIC) || 'please_enter_a_list';
    const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || '1';

    return [`${list_name}[${value}:] + ${list_name}[:${value}]`, generator.ORDER_ATOMIC];
};


python.pythonGenerator.forBlock['keyboard_press'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_time'] = 'import time';
        generator.definitions_['import_usb_hid'] = 'import usb_hid';
        generator.definitions_['import_keyboard'] = 'from adafruit_hid.keyboard import Keyboard';
        generator.definitions_['import_keyboard_layout'] = 'from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS';
        generator.definitions_['import_keycode'] = 'from adafruit_hid.keycode import Keycode';

        generator.definitions_['keyboard_setup'] =
            'time.sleep(1)\nkeyboard_HID = Keyboard(usb_hid.devices)\n' +
            'keyboard_HID_layout = KeyboardLayoutUS(keyboard_HID)\n';
    }

    if (block.type === 'keyboard_press') {
        let key = block.getFieldValue('KEYCODE') || 'A';
        let action = block.getFieldValue('ACTION') || 'press';

        return `keyboard_HID.${action}(Keycode.${key})\n`;

    } else if (block.type === 'keyboard_release') {
        return `keyboard_HID.release_all()\n`;

    } else {
        let key = generator.valueToCode(block, 'KEYSTRING', generator.ORDER_ATOMIC) || 'A';

        return `keyboard_HID_layout.write(${key})\n`;
    }
};

python.pythonGenerator.forBlock['keyboard_release'] = python.pythonGenerator.forBlock['keyboard_press'];
python.pythonGenerator.forBlock['keyboard_type'] = python.pythonGenerator.forBlock['keyboard_press'];

python.pythonGenerator.forBlock['mouse_move'] = function (block, generator) {
    let moveX = generator.valueToCode(block, 'MOVE_X', generator.ORDER_ATOMIC) || '0';
    let moveY = generator.valueToCode(block, 'MOVE_Y', generator.ORDER_ATOMIC) || '0';
    let moveW = generator.valueToCode(block, 'MOVE_WHEEL', generator.ORDER_ATOMIC) || '0';

    if (!block.disabled) {
        generator.definitions_['import_usb_hid'] = 'import usb_hid';
        generator.definitions_['import_mouse'] = 'from adafruit_hid.mouse import Mouse';

        generator.definitions_['mouse_setup'] = 'mouse_HID = Mouse(usb_hid.devices)\n';
    }

    return `mouse_HID.move(int(${moveX}), int(${moveY}), int(${moveW}))\n`;
};

python.pythonGenerator.forBlock['mouse_move_on'] = function (block, generator) {
    let movePosX = generator.valueToCode(block, 'MOVE_POS_X', generator.ORDER_ATOMIC) || '0';
    let moveNegX = generator.valueToCode(block, 'MOVE_NEG_X', generator.ORDER_ATOMIC) || '0';
    let movePosY = generator.valueToCode(block, 'MOVE_POS_Y', generator.ORDER_ATOMIC) || '0';
    let moveNegY = generator.valueToCode(block, 'MOVE_NEG_Y', generator.ORDER_ATOMIC) || '0';
    let moveSpeed = parseInt(block.getFieldValue('SPEED'));

    if (!block.disabled) {
        generator.definitions_['import_usb_hid'] = 'import usb_hid';
        generator.definitions_['import_mouse'] = 'from adafruit_hid.mouse import Mouse';

        generator.definitions_['mouse_setup'] = 'mouse_HID = Mouse(usb_hid.devices)\n';
    }

    let code = `_move_y = 0\n_move_x = 0\nif _speed < 4 or _speed == None:\n${generator.INDENT}_speed = ${moveSpeed}\n`;

    if (movePosX !== '0') {
        code += `if ${movePosX}:\n${generator.INDENT}_move_x = _speed\n`;
    }
    if (movePosY !== '0') {
        code += `if ${movePosY}:\n${generator.INDENT}_move_y = _speed\n`;
    }
    if (moveNegX !== '0') {
        code += `if ${moveNegX}:\n${generator.INDENT}_move_x = -1 * _speed\n`;
    }
    if (moveNegY !== '0') {
        code += `if ${moveNegY}:\n${generator.INDENT}_move_y = -1 * _speed\n`;
    }

    code += `if _move_x == 0 and _move_y == 0:\n${generator.INDENT}_speed = ${moveSpeed}\n`;
    code += `else:\n${generator.INDENT}_speed = _speed + ${moveSpeed / 8}\n`;
    code += `${generator.INDENT}mouse_HID.move(_move_x, _move_y, 0)\n`;

    return code;
};

python.pythonGenerator.forBlock['mouse_click'] = function (block, generator) {
    let action = block.getFieldValue('ACTION') || 'click';
    let button = block.getFieldValue('BUTTON') || 'LEFT_BUTTON';

    if (!block.disabled) {
        generator.definitions_['import_usb_hid'] = 'import usb_hid';
        generator.definitions_['import_mouse'] = 'from adafruit_hid.mouse import Mouse';

        generator.definitions_['mouse_setup'] = 'mouse_HID = Mouse(usb_hid.devices)\n';
    }

    return `mouse_HID.${(action === 'release' && button === 'ALL') ? 'release_all()' : (action + '(' + (button === 'ALL' ? '7' : ('Mouse.' + button)) + ')')}\n`;
};

python.pythonGenerator.forBlock['graph_output'] = function (block, generator) {

    if (!block.disabled) {
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    if (block.getFieldValue('GRAPH_TYPE') !== Blockly.Constants.COLOR) {
        let varList = [];
        let i = 0;
        while (generator.valueToCode(block, 'PRINT' + i, generator.ORDER_NONE)) {
            varList.push(generator.valueToCode(block, 'PRINT' + i, generator.ORDER_NONE || '0'));
            i++;
            if (i > 10)
                break;
        }
        if (varList.length > 0) {
            return `piperGraphNumbers([str(${varList.join('),str(')})])\n`;
        } else {
            return '';
        }
    } else {
        let value = generator.valueToCode(block, 'PRINT0', generator.ORDER_NONE);
        return `piperGraphColor(${value})\n`;
    }
};


python.pythonGenerator.forBlock['color_matrix'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
    }

    let grid_colors = block.getFieldValue('ACTION').split(',');
    grid_colors = grid_colors.map((e) => {
        let c = parseInt(e, 16);
        let r = (((c & 0xff0000) >> 22) & 3) << 4;
        let g = (((c & 0x00ff00) >> 14) & 3) << 2;
        let b = (((c & 0x0000ff) >> 6) & 3);
        return (r | g | b);
    });
    if (grid_colors.length === 64) {
        let tmp = 'lightshow.Pix.from_grid((\n';
        for (let i = 0; i < 8; i++) {
            tmp += generator.INDENT + '('
            for (let j = 0; j < 8; j++) {
                let k = i * 8 + j
                tmp += (grid_colors[k] < 10 ? ' ' : '') + grid_colors[k].toString(10);
                tmp += (j !== 7 ? ', ' : '');
            }
            tmp += '),\n';
        }
        grid_colors = tmp + '))'
    } else {
        grid_colors = `(${grid_colors.join(',')})`;
    }
    return [grid_colors, generator.ORDER_ATOMIC];
}

python.pythonGenerator.forBlock['color_matrix_text'] = function (block, generator) {
    let text = generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || "Hello";
    let text_color = python.pythonGenerator.formatColor(block.getFieldValue('TEXT_COLOR') || '#FFFFFF');
    let bkg_color = python.pythonGenerator.formatColor(block.getFieldValue('BKG_COLOR') || '#000000');

    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `lightshow.init()\nscreen = lightshow.Pix()`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    let grid_text = `lightshow.Pix.from_text(${text}, lightshow.rgb_to_byte(${text_color}), lightshow.rgb_to_byte(${bkg_color}))`;
    return [grid_text, generator.ORDER_NONE];
}

python.pythonGenerator.forBlock['color_matrix_width'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `lightshow.init()\nscreen = lightshow.Pix()`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
    }

    let grid = generator.valueToCode(block, 'GRID', generator.ORDER_NONE) || "lightshow.Pix.from_grid((0))";
    return ['(' + grid + '.width + 1)', generator.ORDER_NONE];
}

python.pythonGenerator.forBlock['lightshow_show'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `lightshow.init()\nscreen = lightshow.Pix()`;

        generator.definitions_['import_piper_blockly'] = 'from piper_blockly import *';
        generator.definitions_['import_digital_view'] = '\ntry:\n' + generator.INDENT + 'set_digital_view(True)\nexcept:\n' + generator.INDENT + 'pass\n';
        
        // TODO: remove this when it is added to the firmware
        python.pythonGenerator.hiddenDefs['lightshow_explore_tab'] = 
            `def send_lightshow_buffer(__b):\n` + 
            generator.INDENT + 
            `print(chr(17), 'L', ''.join(['ABDEFHIJKMNOQSTUVWXYZ{}[]=+:0123456789abcdefghijklmnopqrstuvwxyz'[__i] for __i in list(__b)]), chr(17))\n`;
    }
    return 'lightshow.show(screen)\n' + 'send_lightshow_buffer(screen.buffer)\n';
}

python.pythonGenerator.forBlock['lightshow_fill'] = function (block, generator) {
    const pixel_grid = generator.valueToCode(block, 'GRID', generator.ORDER_ATOMIC) || 'lightshow.Pix.from_grid((0x0C)), 0, 0';
    let pixel_x = generator.valueToCode(block, 'PIXEL_X', generator.ORDER_ATOMIC) || '1';
    let pixel_y = generator.valueToCode(block, 'PIXEL_Y', generator.ORDER_ATOMIC) || '1';

    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `screen = lightshow.Pix()`;
    }
    return `screen.draw(${pixel_grid}, (${pixel_x}-1), (${pixel_y}-1))\n`;
}

python.pythonGenerator.forBlock['lightshow_clear'] = function (block, generator) {
    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `screen = lightshow.Pix()`;
    }
    return 'screen.box(0, 0, 0, 8, 8)\n';
}

python.pythonGenerator.forBlock['lightshow_box'] = function (block, generator) {
    let color = generator.valueToCode(block, 'COLOR', generator.ORDER_NONE) || '(0, 255, 0)';
    let pixel_x = generator.valueToCode(block, 'PIXEL_X', generator.ORDER_ATOMIC) || '1';
    let pixel_y = generator.valueToCode(block, 'PIXEL_Y', generator.ORDER_ATOMIC) || '1';
    let pixel_w = generator.valueToCode(block, 'PIXEL_W', generator.ORDER_ATOMIC) || '3';
    let pixel_h = generator.valueToCode(block, 'PIXEL_H', generator.ORDER_ATOMIC) || '3';

    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `screen = lightshow.Pix()`;
    }
    return `screen.box(lightshow.rgb_to_byte(${color}), (${pixel_x}-1), (${pixel_y}-1), ${pixel_w}, ${pixel_h})\n`;
}

python.pythonGenerator.forBlock['lightshow_pixel'] = function (block, generator) {
    let color = generator.valueToCode(block, 'COLOR', generator.ORDER_ATOMIC) || '(0, 255, 0)';
    let pixel_x = generator.valueToCode(block, 'PIXEL_X', generator.ORDER_ATOMIC) || '1';
    let pixel_y = generator.valueToCode(block, 'PIXEL_Y', generator.ORDER_ATOMIC) || '1';

    if (!block.disabled) {
        generator.definitions_['import_lightshow'] = 'import piper_lightshow as lightshow';
        generator.definitions_['lightshow_screen_object'] = `screen = lightshow.Pix()`;
    }
    return `screen.pixel((${pixel_x}-1), (${pixel_y}-1), lightshow.rgb_to_byte(${color}))\n`;
}