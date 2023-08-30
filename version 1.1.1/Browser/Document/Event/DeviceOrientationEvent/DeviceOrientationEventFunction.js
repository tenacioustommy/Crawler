rsvm.browser.DeviceOrientationEvent = {
    memory: {
        alpha: null,
        beta: null,
        gamma: null,
        absolute: false,
    },
    getter: {
        alpha() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceOrientationEvent");
            }
            if (!DeviceOrientationEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].alpha;
                }
            }
            return rsvm.browser.DeviceOrientationEvent.memory.alpha;
        },
        beta() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceOrientationEvent");
            }
            if (!DeviceOrientationEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].beta;
                }
            }
            return rsvm.browser.DeviceOrientationEvent.memory.beta;
        },
        gamma() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceOrientationEvent");
            }
            if (!DeviceOrientationEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].gamma;
                }
            }
            return rsvm.browser.DeviceOrientationEvent.memory.gamma;
        },
        absolute() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceOrientationEvent");
            }
            if (!DeviceOrientationEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].absolute;
                }
            }
            return rsvm.browser.DeviceOrientationEvent.memory.absolute;
        },
    },
    setter: {
    },
    actor: {

    },
    subObject: [],
    create(type) {
        var object = new DeviceOrientationEvent(type);
        return rsvm.proxy(object);
    }
};