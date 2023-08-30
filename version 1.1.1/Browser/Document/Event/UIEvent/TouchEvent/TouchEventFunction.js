rsvm.browser.TouchEvent = {
    memory: {
        touches: {},
        targetTouches: {},
        changedTouches: {},
        altKey: false,
        metaKey: false,
        ctrlKey: false,
        shiftKey: false,
    },
    getter: {
        touches() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].touches;
                }
            }
            return rsvm.browser.TouchEvent.memory.touches;
        },
        targetTouches() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].targetTouches;
                }
            }
            return rsvm.browser.TouchEvent.memory.targetTouches;
        },
        changedTouches() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].changedTouches;
                }
            }
            return rsvm.browser.TouchEvent.memory.changedTouches;
        },
        altKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].altKey;
                }
            }
            return rsvm.browser.TouchEvent.memory.altKey;
        },
        metaKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].metaKey;
                }
            }
            return rsvm.browser.TouchEvent.memory.metaKey;
        },
        ctrlKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].ctrlKey;
                }
            }
            return rsvm.browser.TouchEvent.memory.ctrlKey;
        },
        shiftKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("TouchEvent");
            }
            if (!TouchEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].shiftKey;
                }
            }
            return rsvm.browser.TouchEvent.memory.shiftKey;
        },
    },
    setter: {
    },
    actor: {

    },
    subObject: []
};