rsvm.browser.MediaDevices = {
    memory: {
        ondevicechange: null,
    },
    getter: {
        ondevicechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MediaDevices");
            }
            if (!MediaDevices.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.MediaDevices.subObject.length; i++) {
                if (this == rsvm.browser.MediaDevices.subObject[i].dogID) {
                    return rsvm.browser.MediaDevices.subObject[i].ondevicechange;
                }
            }
            return rsvm.browser.MediaDevices.memory.ondevicechange;
        },
    },
    setter: {
        ondevicechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.MediaDevices.subObject.length; i++) {
                if (this == rsvm.browser.MediaDevices.subObject[i].dogID) {
                    rsvm.browser.MediaDevices.subObject[i].ondevicechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.MediaDevices.memory.ondevicechange = arguments[0];
        },
    },
    actor: {
        enumerateDevices() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getSupportedConstraints() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUserMedia() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getDisplayMedia() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setCaptureHandleConfig() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};