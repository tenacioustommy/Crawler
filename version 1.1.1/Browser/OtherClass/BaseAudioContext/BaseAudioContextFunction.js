rsvm.browser.BaseAudioContext = {
    memory: {
        destination: {},
        currentTime: 551.96,
        sampleRate: 48000,
        listener: {},
        state: "running",
        onstatechange: null,
        audioWorklet: {},
    },
    getter: {
        destination() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].destination;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.destination;
        },
        currentTime() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].currentTime;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.currentTime;
        },
        sampleRate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].sampleRate;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.sampleRate;
        },
        listener() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].listener;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.listener;
        },
        state() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].state;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.state;
        },
        onstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].onstatechange;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.onstatechange;
        },
        audioWorklet() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("BaseAudioContext");
            }
            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    return rsvm.browser.BaseAudioContext.subObject[i].audioWorklet;
                }
            }
            return rsvm.browser.BaseAudioContext.memory.audioWorklet;
        },
    },
    setter: {
        onstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.BaseAudioContext.subObject.length; i++) {
                if (this == rsvm.browser.BaseAudioContext.subObject[i].dogID) {
                    rsvm.browser.BaseAudioContext.subObject[i].onstatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.BaseAudioContext.memory.onstatechange = arguments[0];
        },
    },
    actor: {
        createAnalyser() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createBiquadFilter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createBuffer(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createBufferSource() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createChannelMerger() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createChannelSplitter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createConstantSource() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createConvolver() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createDelay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createDynamicsCompressor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createGain() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createIIRFilter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createOscillator() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createPanner() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createPeriodicWave(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createScriptProcessor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createStereoPanner() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createWaveShaper() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        decodeAudioData(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};