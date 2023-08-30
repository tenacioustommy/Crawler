rsvm.browser.AudioContext = {
    memory: {
        baseLatency: 0.01,
        outputLatency: 0.04,
        sinkId: "",
        onsinkchange: null,
    },
    getter: {
        baseLatency() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("AudioContext");
            }
            if (!AudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].baseLatency;
                }
            }
            return rsvm.browser.AudioContext.memory.baseLatency;
        },
        outputLatency() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("AudioContext");
            }
            if (!AudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].outputLatency;
                }
            }
            return rsvm.browser.AudioContext.memory.outputLatency;
        },
        sinkId() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("AudioContext");
            }
            if (!AudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].sinkId;
                }
            }
            return rsvm.browser.AudioContext.memory.sinkId;
        },
        onsinkchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("AudioContext");
            }
            if (!AudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].onsinkchange;
                }
            }
            return rsvm.browser.AudioContext.memory.onsinkchange;
        },
    },
    setter: {
        onsinkchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    rsvm.browser.BaseAudioContext.subObject[i].onsinkchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.AudioContext.memory.onsinkchange = arguments[0];
        },
    },
    actor: {
        close() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createMediaElementSource(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createMediaStreamDestination() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createMediaStreamSource(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getOutputTimestamp() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        resume() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        suspend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setSinkId(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    }
};