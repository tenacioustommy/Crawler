rsvm.browser.SpeechSynthesis = {
    memory: {
        onvoiceschanged: null,
        paused: false,
        pending: false,
        speaking: false,
    },
    getter: {
        onvoiceschanged() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (!speechSynthesis.__proto__.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.SpeechSynthesis.subObject.length; i++) {
                if (this == rsvm.browser.SpeechSynthesis.subObject[i].dogID) {
                    return rsvm.browser.SpeechSynthesis.subObject[i].scriptURL;
                }
            }
            return rsvm.browser.SpeechSynthesis.memory.onvoiceschanged;
        },
        paused() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (!speechSynthesis.__proto__.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.SpeechSynthesis.subObject.length; i++) {
                if (this == rsvm.browser.SpeechSynthesis.subObject[i].dogID) {
                    return rsvm.browser.SpeechSynthesis.subObject[i].state;
                }
            }
            return rsvm.browser.SpeechSynthesis.memory.paused;
        },
        pending() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (!speechSynthesis.__proto__.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.SpeechSynthesis.subObject.length; i++) {
                if (this == rsvm.browser.SpeechSynthesis.subObject[i].dogID) {
                    return rsvm.browser.SpeechSynthesis.subObject[i].onstatechange;
                }
            }
            return rsvm.browser.SpeechSynthesis.memory.pending;
        },
        speaking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (!speechSynthesis.__proto__.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.SpeechSynthesis.subObject.length; i++) {
                if (this == rsvm.browser.SpeechSynthesis.subObject[i].dogID) {
                    return rsvm.browser.SpeechSynthesis.subObject[i].onerror;
                }
            }
            return rsvm.browser.SpeechSynthesis.memory.speaking;
        },
    },
    setter: {
        onvoiceschanged() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.SpeechSynthesis.subObject.length; i++) {
                if (this == rsvm.browser.SpeechSynthesis.subObject[i].dogID) {
                    rsvm.browser.SpeechSynthesis.subObject[i].onvoiceschanged = arguments[0];
                    return;
                }
            }
            rsvm.browser.SpeechSynthesis.memory.onvoiceschanged = arguments[0];
        }
    },
    actor: {
        cancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getVoices() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return [];
        },
        pause() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        resume() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        speak(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
    },
    subObject: []
};