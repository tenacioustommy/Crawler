rsvm.browser.Event = {
    memory: {
        type: "type",
        target: null,
        currentTarget: null,
        eventPhase: 0,
        bubbles: false,
        cancelable: false,
        defaultPrevented: false,
        composed: false,
        timeStamp: 31594931.300000012,
        srcElement: null,
        returnValue: true,
        cancelBubble: false,
    },
    getter: {
        type() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].type;
                }
            }
            return rsvm.browser.Event.memory.type;
        },
        target() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].target;
                }
            }
            return rsvm.browser.Event.memory.target;
        },
        currentTarget() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].currentTarget;
                }
            }
            return rsvm.browser.Event.memory.currentTarget;
        },
        eventPhase() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].eventPhase;
                }
            }
            return rsvm.browser.Event.memory.eventPhase;
        },
        bubbles() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].bubbles;
                }
            }
            return rsvm.browser.Event.memory.bubbles;
        },
        cancelable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].cancelable;
                }
            }
            return rsvm.browser.Event.memory.cancelable;
        },
        defaultPrevented() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].defaultPrevented;
                }
            }
            return rsvm.browser.Event.memory.defaultPrevented;
        },
        composed() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].composed;
                }
            }
            return rsvm.browser.Event.memory.composed;
        },
        timeStamp() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].timeStamp;
                }
            }
            return rsvm.browser.Event.memory.timeStamp;
        },
        srcElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].srcElement;
                }
            }
            return rsvm.browser.Event.memory.srcElement;
        },
        returnValue() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].returnValue;
                }
            }
            return rsvm.browser.Event.memory.returnValue;
        },
        cancelBubble() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Event");
            }
            if (!Event.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].cancelBubble;
                }
            }
            return rsvm.browser.Event.memory.cancelBubble;
        },
    },
    setter: {
        returnValue() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    rsvm.browser.Event.subObject[i].returnValue = arguments[0];
                    return;
                }
            }
        },
        cancelBubble() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    rsvm.browser.Event.subObject[i].cancelBubble = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {
        composedPath() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        initEvent(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        preventDefault() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stopImmediatePropagation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stopPropagation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(type) {
        var object = new Event(type);
        return rsvm.proxy(object);
    },
    subObjectType: ["Event", "UIEvent", "MouseEvent", "DeviceOrientationEvent"],
    Event(type) { return rsvm.browser.Event.create(type); },
    UIEvent(type) { return rsvm.browser.UIEvent.create(type); },
    MouseEvent(type) { return rsvm.browser.MouseEvent.create(type); },
    DeviceOrientationEvent(type) { return rsvm.browser.DeviceOrientationEvent.create(type); },
};