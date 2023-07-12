// Global site data
window.siteData = {

    // Tutorial and steps
    currentTutorial: null,
    steps: null,

    // Device file and directory handles
    RPIRP2drive: null,
    UF2fileHandle: null,

    // User agent/os/version
    userMachineInfo: null,

    // Firmware Setup Modal
    firmwareSetupSlideStep: 0,

    // Firmware Update Modal display
    firmwareSetupModalCount: 0,

    // CSS selector of the modal currently open (string):
    modalVisible: null,

    // is the user a verified educator (according to their g-suite account)?
    isTeacher: false,
}

window.urlParams = new URLSearchParams(window.location.search);

/**
 * @description Provide jQuery-like notation for element references.
 * @note CAUTION: this is NOT jQuery!!!
 * @param {string} e CSS-selector to find element
 * @returns HTMLelement
 */
window.$ = function (e) {
    return document.querySelector(e);
}

/**
 * @description Provide jQuery-like notation for element references.
 * @note CAUTION: this is NOT jQuery!!!
 * @param {string} e CSS-selector to find element
 * @returns array of HTMLElements
 */
window.$$ = function (e) {
    return Array.from(document.querySelectorAll(e));
}

/* 
delay function 
*/
window.delay = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/**
 * @description get a timestamp of the current second in epoch time.
 * @returns {string} string representation of the epoch time in seconds in hexadecimal.
 */
function getTimeString() {
    return Math.floor(new Date().getTime() / 1000).toString(16);
}

/**
 * From http://stackoverflow.com/questions/14967647/ (continues on next line)
 *  encode-decode-image-with-base64-breaks-image (2013-04-21)
 */
function fixBinary(bin) {
    let length = bin.length;
    let buf = new ArrayBuffer(length);
    let arr = new Uint8Array(buf);
    for (let i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

/**
 * @description use the enter key to simulate a click for non-buttons and links.
 */
function handleEnter(e) {
    let keycode = (e.keyCode ? e.keyCode : e.which);
    let tabSelectedElement = document.activeElement;
    if (keycode == '13' && tabSelectedElement.getAttribute('onclick')) {
        tabSelectedElement.click();
    }
}


if (!Array.prototype.findClosest) {
    Object.defineProperty(Array.prototype, 'findClosest', {

        /**
         * @description find the closest numeric value in the array to the specified value.
         * @param {array} goal the value to try to find the closest array value to.
         * @returns {number} array value that is closest to the specified value.
         */
        value: function (goal) {
            return this.reduce((a, b) => Math.abs(a - goal) < Math.abs(b - goal) ? a : b);
        },
        enumerable: false
    });
}

if (!Array.prototype.findClosestIndex) {
    Object.defineProperty(Array.prototype, 'findClosestIndex', {

        /**
         * @description find the index of the closest numeric value in the array to
         * the specified value.
         * @param {array} goal the value to try to find the closest array value's index to.
         * @returns {number} index of the array value that is closest to the specified value.
         */
        value: function (goal) {
            return this.indexOf(this.findClosest(goal));
        },
        enumerable: false
    });
}

if (!Array.prototype.containsOneOf) {
    Object.defineProperty(Array.prototype, 'containsOneOf', {

        /**
         * @description determine if an array contains one or more items from another array.
         * @source http://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-elements-in-another-array-in-javascript
         * @param {array} isInArray the array providing items to check for in the haystack.
         * @returns {boolean} true|false if haystack contains at least one item from arr.
         */
        value: function (isInArray) {
            let currentArray = this;
            return isInArray.some(function (v) {
                return currentArray.indexOf(v) >= 0;
            });
        },
        enumerable: false
    });
}

if (!Array.prototype.containsAllOf) {
    Object.defineProperty(Array.prototype, 'containsAllOf', {

        /**
         * @description determine if an array contains one or more items from another array.
         * @source http://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-elements-in-another-array-in-javascript
         * @param {array} isInArray the array providing items to check for in the haystack.
         * @returns {boolean} true|false if haystack contains at least one item from arr.
         */
        value: function (isInArray) {
            let currentArray = this;
            return isInArray.every(function (v) {
                return currentArray.indexOf(v) >= 0;
            });
        },
        enumerable: false
    });
}

if (!Array.prototype.sortedUnique) {
    Object.defineProperty(Array.prototype, 'sortedUnique', {

        /**
         * @description Removes duplicates from an array and sorts it
         * @source https://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
         * @returns {Array} Sorted array with any duplicates removed
         */
        value: function () {
            let seen = {};
            let out = [];
            let len = this.length;
            let j = 0;
            for (let i = 0; i < len; i++) {
                let item = this[i];
                if (seen[item] !== 1) {
                    seen[item] = 1;
                    out[j++] = item;
                }
            }
            let tmpOut = out;
            try {
                let sorted = [];
                j = 0;
                while (out.length > 0) {
                    len = out.length;
                    let k = 0;
                    for (let i = 0; i < len; i++) {
                        if (parseInt(out[i], 10) < parseInt(out[k], 10)) {
                            k = i;
                        }
                    }
                    sorted[j] = out[k];
                    j++;
                    out.splice(k, 1);
                }
                return sorted;
            } catch (err) {
                return tmpOut;
            }
        },
        enumerable: false
    });
}

if (!Array.prototype.shuffle) {
    Object.defineProperty(Array.prototype, 'shuffle', {

        /**
         * @description Randomize the order of the elements in the array in place
         * @source http://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-elements-in-another-array-in-javascript
         */
        value: function () {
            let currentArray = this;
            let currentIndex = currentArray.length,
                temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = currentArray[currentIndex];
                currentArray[currentIndex] = currentArray[randomIndex];
                currentArray[randomIndex] = temporaryValue;
            }
        },
        enumerable: false
    });
}

if (!Array.prototype.moveElement) {
    Object.defineProperty(Array.prototype, 'moveElement', {

        /**
         * @description Move an element inside of an array
         * @param {int} from the index of the element being moved
         * @param {int} to the index to move the element to
         */
        value: function (from, to) {
            let currentArray = this;
            let element = currentArray[from];
            currentArray.splice(from, 1);
            currentArray.splice(to, 0, element);
        },
        enumerable: false
    });
}

/**
 * @description removes all child elements from the specificed HTMLElement
 * @param {HTMLElement} element convinience function for removing all of an element's child elements.
 */
 function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/**
 * @description tests the input to determine if it's a numerical value
 * @param {*} input value to be tested
 * @returns {boolean} true of input is numeric, false if not
 */
function IsNumeric(input) {
    return (input - 0) == input && input.length > 0;
}

/**
 * @description Determine wheter the incognito mode of Google Chrome or Edge is available or not.
 * @source https://ourcodeworld.com/articles/read/805/how-to-detect-if-you-are-in-incognito-mode-with-javascript-in-google-chrome
 * @param callback Anonymous function executed when the availability of the incognito mode has been checked.
 */
async function isIncognito(callback) {
    if (navigator.storage && navigator.storage.estimate) {
        const {
            usage,
            quota
        } = await navigator.storage.estimate();
        console.log(`Using ${Math.round(usage / 104857.6) / 10} out of ${Math.round(quota / 104857.6) / 10} MB.`);
        if (quota < 120000000) {
            callback(true);
        } else {
            callback(false);
        }
    } else {
        console.log('Can not detect browser mode');
        callback(null);
    }
}

/**
 * @description Determine the user's operating system and version - used to provide the correct set up setup instructions
 * and note incompatibilities
 * @source https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-version-using-javascript
 */
function getMachineInfo() {
    let unknown = '-';

    // screen
    let screenSize = '';
    if (screen.width) {
        let w = (screen.width) ? screen.width : '';
        let h = (screen.height) ? screen.height : '';
        screenSize += w + "x" + h;
    }

    // browser
    let nVer = navigator.appVersion;
    let nAgt = navigator.userAgent;
    let browser = navigator.appName;
    let version = '' + parseFloat(navigator.appVersion);
    let majorVersion = parseInt(navigator.appVersion, 10);
    let nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    // Legacy Edge
    else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
        browser = 'Microsoft Legacy Edge';
        version = nAgt.substring(verOffset + 5);
    }
    // Edge (Chromium)
    else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
        browser = 'Microsoft Edge';
        version = nAgt.substring(verOffset + 4);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // cookie
    let cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    // system
    let os = unknown;
    let clientStrings = [
        {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
        {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
        {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
        {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
        {s:'Windows Vista', r:/Windows NT 6.0/},
        {s:'Windows Server 2003', r:/Windows NT 5.2/},
        {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
        {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
        {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
        {s:'Windows 98', r:/(Windows 98|Win98)/},
        {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
        {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s:'Windows CE', r:/Windows CE/},
        {s:'Windows 3.11', r:/Win16/},
        {s:'Android', r:/Android/},
        {s:'Open BSD', r:/OpenBSD/},
        {s:'Sun OS', r:/SunOS/},
        {s:'Chrome OS', r:/CrOS/},
        {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'Mac OS X', r:/Mac OS X/},
        {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s:'QNX', r:/QNX/},
        {s:'UNIX', r:/UNIX/},
        {s:'BeOS', r:/BeOS/},
        {s:'OS/2', r:/OS\/2/},
        {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (let id in clientStrings) {
        let cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    let osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS':
        case 'Mac OS X':
        case 'Android':
            osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    siteData.userMachineInfo = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
    };
}

/**
 * @description Retrieve a large file from a URL and wait for the response
 * @param {string} elementId the id of an <input type="file"> element used to upload a file
 * @returns the server's response as a stream.
 * @source https://javascript.info/fetch-progress
 */
async function fetchFile(url) {
    let response = await fetch(url);
    const reader = response.body.getReader();

    // read the data
    let receivedLength = 0; // received that many bytes at the moment
    let chunks = []; // array of received binary chunks (comprises the body)
    while (true) {
        const {
            done,
            value
        } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        receivedLength += value.length;
    }

    // concatenate chunks into single Uint8Array
    let chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for (let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }

    return chunksAll;
}

/**
 * @description Get a file from a URL and save to the file to a writeable handle
 * @param {string} fileHandle the handle of an writeable file that was retrieved from the File System Access API
 * @param {string} url the address of the file to retireve from the server
 * @source https://web.dev/file-system-access/
 */
async function writeURLToFile(fileHandle, url) {
    // Create a FileSystemWritableFileStream to write to.
    const writable = await fileHandle.createWritable();

    // Make an HTTP request for the contents.
    const response = await fetchFile(url);

    // Write the response into the file.
    await writable.write(response);

    // Close the file and write the contents to disk.
    await writable.close();
}

/**
 * @description Get the directory handle for the Pico's Boot Drive.  Checks it by verifying the name
 * @param {string} callback a function that handles the results of the directory request
 */
async function getRPIdirectory(callback) {
    try {
        const directoryChoice = await window.showDirectoryPicker();

        // Make sure it is the right directory
        //if (directoryChoice.name === 'RPI-RP2') {

            // save the directory handle for the boot drive
            siteData.RPIRP2drive = directoryChoice;

            try {
                // Check to see if there is a files named "INFO_UF2.TXT" - if not, the pico is not in bootloader mode
                const uf2InfoFileHandle = directoryChoice.getFileHandle('INFO_UF2.TXT');

                // report success with the callback function
                callback({
                    success: true,
                    bootloader: true,
                    name: directoryChoice.name
                });

            } catch (err) {
                // report the failure and the name of the directory that was selected
                callback({
                    success: false,
                    name: directoryChoice.name,
                    bootloader: false,
                    error: err
                });
            }
        /*
        } else {
            // report the failure and the name of the directory that was selected
            callback({
                success: false,
                name: directoryChoice.name,
                bootloader: false
            });
        }
        */
    } catch (err) {
        // report the failure and the name of the directory that was selected
        callback({
            success: false,
            name: null,
            bootloader: false,
            error: err
        });
    }
}

/**
 * @description Download the UF2 bootloader file (firmware) and save it to the Pico's Boot drive
 * @param {string} callback a function that handles the results of the firmware burning operation
 */
async function burnCircuitPython(callback) {
    try {
        console.log("Getting RPI-RP2 drive handle");

        // create a new file in the Pico's boot drive
        const uf2fileHandle = await siteData.RPIRP2drive.getFileHandle('piper_circuitpython.uf2', {
            create: true
        });
        siteData.UF2fileHandle = uf2fileHandle;

        console.log("Writing UF2 file to RPI-RP2 drive");

        // fetch and write the contents of the firmware to the file
        await writeURLToFile(siteData.UF2fileHandle, './assets/firmware/piper_circuitpython.uf2');

        console.log("Success");

        // execute the callback to signal that the file write is complete
        callback({
            success: true
        });

    } catch (err) {
        // report the failure
        callback({
            bootloader: true,
            success: false,
            error: err
        })
    }
}

/**
 * @description post data to a URL.
 * @param {string} url the url of the service to post data to
 * @param {object} data object with key-value pairs to send via HTTP POST to the service at the url
 * @param {function} callback function with a single parameter that accepts the JSON
 * response from the url.
 */
async function postJsonData(url, data, callback) {
    try {
        const fetchResult = fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const response = await fetchResult;
        const jsonData = await response.json();
        if (callback) {
            callback(jsonData);
        }
    } catch (e) {
        throw Error(e);
    }
}

/**
 * @description deletes remote data at a URL.
 * @param {string} url the url of the service to delete data from
 * @param {function} callback function with a single parameter that accepts the JSON
 * response from the url.
 */
async function deleteData(url, callback) {
    try {
        const fetchResult = fetch(url, {
            method: 'DELETE'
        });
        const response = await fetchResult;
        const jsonData = await response.json();
        callback(jsonData);
    } catch (e) {
        throw Error(e);
    }
}

/**
 * @description retireves data from a URL.
 * @param {string} url the url of the service to request data from
 * @param {function} callback function with a single parameter that accepts the JSON
 * @param {boolean} text returns raw text if true, otherwise a JSON object
 * data returned by the url.
 */
window.getJsonData = async function (url, callback, text) {
    const fetchResult = fetch(url);
    const response = await fetchResult;
    let jsonData;
    if (!text) {
        jsonData = await response.json();
    } else {
        jsonData = await response.text();
    }
    if (!callback) {
        return jsonData;
    } else {
        callback(jsonData);
    }
}

/**
 * @description retrieves a single tutorial from the api service
 * @param {number} tutorial_id string
 * @param {function} callback function with a single parameter that accepts the JSON
 * data returned by the url.
 */
function getTutorial(tutorial_id, callback) {

    if (tutorial_id && window.siteData.currentTutorial !== tutorial_id) {
        window.siteData.currentTutorial = tutorial_id;

        getJsonData(`./static/data/steps/${tutorial_id}.json`, (data) => {
            window.siteData.steps = data;
            formatTutorialData(tutorial_id, callback);
        });

    } else {
        formatTutorialData(tutorial_id, callback);
    }

    function formatTutorialData(tutorial_id, callback) {
        pageData.tutorials.records.forEach((record) => {
            if (record && record.tutorial_id === tutorial_id) {
                let data = record;
                //if (data.code) {
                //    data.code = atob(data.code);
                //}
                if (typeof data.blocks === 'string') {
                    data.blocks = data.blocks.split(',');
                } else if (!data.blocks) {
                    data.blocks = [];
                }

                callback(data);
            }
        });
    }
}



// TODO: move types of python errors into object with associated message text and
// replacers (instead of this big ugly switch-case).
/**
 * @description Populates the modal with information about a thrown python error and
 * sends the error, and the project's XML to the console (where it would be reported by a logging service)
 * @param {String} errorType the type of Python exception thrown.
 */
function pythonErrorReport(errorType) {
    switch (errorType) {
        case 'AssertionError': // fall through
        case 'AttributeError': // fall through
        case 'EOFError': // fall through
        case 'FloatingPointError': // fall through
        case 'GeneratorExit': // fall through
        case 'ImportError': // fall through
        case 'IndexError': // fall through
        case 'KeyError': // fall through
        case 'KeyboardInterrupt': // fall through
        case 'MemoryError': // fall through
        case 'NameError': // fall through
        case 'NotImplementedError': // fall through
        case 'OSError': // fall through
        case 'OverflowError': // fall through
        case 'ReferenceError': // fall through
        case 'RuntimeError': // fall through
        case 'StopIteration': // fall through
        case 'SyntaxError': // fall through
        case 'IndentationError': // fall through
        case 'TabError': // fall through
        case 'SystemError': // fall through
        case 'SystemExit': // fall through
        case 'TypeError': // fall through
        case 'UnboundLocalError': // fall through
        case 'UnicodeError': // fall through
        case 'UnicodeEncodeError': // fall through
        case 'UnicodeDecodeError': // fall through
        case 'UnicodeTranslateError': // fall through
        case 'ValueError': // fall through
        case 'ZeroDivisionError':
            let errorMessage = `<p>It looks like your program has a bug!</p>
                <p>There is a <b>${errorType}</b>. You can find out more by clicking the <b>Console</b> at the bottom of your screen.</p>
                <p>Check your blocks and try making some changes to fix this error.<p>
                <b><strong>If you are using a sensor, check the wiring between your sensor and the Pico.</strong></p>`

            // Open the modal to show the error dialog
            showErrorModal(errorMessage);

            // Activate the ui-highlighter to point out the console:
            highlightElement('#tab-bottom-console');

            break;
    }

    const blocksXml = getXml();
    // Push the error to the browser console so it can get picked up by the error reporting service.
    // TODO: verify this
    console.error({
        "type": 'Python ' + errorType,
        "xml": blocksXml
    });

    const pythonCode = Blockly.Python.workspaceToCode(workspace);
    reportPythonError(errorType, blocksXml, pythonCode, term.getText());
}

function downloadJSON(filename, contentObject) {
    triggerDownload(filename + '.json', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(contentObject)));
}

function triggerDownload(filename, dataURI) {
    let element = document.createElement('a');
    element.setAttribute('href', dataURI);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}