rsvm.browser.UIEvent = {
    memory: {
        view: null,
        detail: 0,
        sourceCapabilities: null,
        which: 0,
    },
    getter: {
        view() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("UIEvent");
            }
            if (!UIEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].view;
                }
            }
            return rsvm.browser.UIEvent.memory.view;
        },
        detail() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("UIEvent");
            }
            if (!UIEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].detail;
                }
            }
            return rsvm.browser.UIEvent.memory.detail;
        },
        sourceCapabilities() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("UIEvent");
            }
            if (!UIEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].sourceCapabilities;
                }
            }
            return rsvm.browser.UIEvent.memory.sourceCapabilities;
        },
        which() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("UIEvent");
            }
            if (!UIEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].which;
                }
            }
            return rsvm.browser.UIEvent.memory.which;
        },
    },
    setter: {
    },
    actor: {
        initUIEvent(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(type) {
        var object = new UIEvent(type);
        return rsvm.proxy(object);
    }
};