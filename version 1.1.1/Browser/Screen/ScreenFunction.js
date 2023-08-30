rsvm.browser.Screen = {
    memory: {
        availWidth: 1920,
        availHeight: 1032,
        width: 1920,
        height: 1080,
        colorDepth: 24,
        pixelDepth: 24,
        availLeft: 0,
        availTop: 0,
        orientation: {},
        onchange: null,
        isExtended: false,
    },
    getter: {
        availWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].availWidth;
                }
            }
            return rsvm.browser.Screen.memory.availWidth;
        },
        availHeight() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].availHeight;
                }
            }
            return rsvm.browser.Screen.memory.availHeight;
        },
        width() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].width;
                }
            }
            return rsvm.browser.Screen.memory.width;
        },
        height() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].height;
                }
            }
            return rsvm.browser.Screen.memory.height;
        },
        colorDepth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].colorDepth;
                }
            }
            return rsvm.browser.Screen.memory.colorDepth;
        },
        pixelDepth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].pixelDepth;
                }
            }
            return rsvm.browser.Screen.memory.pixelDepth;
        },
        availLeft() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].availLeft;
                }
            }
            return rsvm.browser.Screen.memory.availLeft;
        },
        availTop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].availTop;
                }
            }
            return rsvm.browser.Screen.memory.availTop;
        },
        orientation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].orientation;
                }
            }
            return rsvm.browser.Screen.memory.orientation;
        },
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].onchange;
                }
            }
            return rsvm.browser.Screen.memory.onchange;
        },
        isExtended() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Screen");
            }
            if (!Screen.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    return rsvm.browser.Screen.subObject[i].isExtended;
                }
            }
            return rsvm.browser.Screen.memory.isExtended;
        },
    },
    setter: {
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Screen.subObject.length; i++) {
                if (this == rsvm.browser.Screen.subObject[i].dogID) {
                    rsvm.browser.Screen.subObject[i].onchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Screen.memory.onchange = arguments[0];
        },
    },
    actor: {

    },
    subObject: []
};