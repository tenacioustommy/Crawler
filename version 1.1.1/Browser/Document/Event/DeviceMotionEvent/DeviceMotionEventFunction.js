rsvm.browser.DeviceMotionEvent = {
    memory: {
        acceleration: null,
        accelerationIncludingGravity: null,
        rotationRate: null,
        interval: 0,
    },
    getter: {
        acceleration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceMotionEvent");
            }
            if (!DeviceMotionEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].acceleration;
                }
            }
            return rsvm.browser.DeviceMotionEvent.memory.acceleration;
        },
        accelerationIncludingGravity() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceMotionEvent");
            }
            if (!DeviceMotionEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].accelerationIncludingGravity;
                }
            }
            return rsvm.browser.DeviceMotionEvent.memory.accelerationIncludingGravity;
        },
        rotationRate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceMotionEvent");
            }
            if (!DeviceMotionEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].rotationRate;
                }
            }
            return rsvm.browser.DeviceMotionEvent.memory.rotationRate;
        },
        interval() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DeviceMotionEvent");
            }
            if (!DeviceMotionEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].interval;
                }
            }
            return rsvm.browser.DeviceMotionEvent.memory.interval;
        },
    },
    setter: {
    },
    actor: {

    },
    subObject: []
};