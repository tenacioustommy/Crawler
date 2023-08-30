rsvm.browser.Storage = {
    memory: {
        length: 0,
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Storage");
            }
            if (!Storage.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            var length = 0;
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    length++;
                }
            }
            return length;
        },
    },
    setter: {
    },
    actor: {
        clear() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    delete this[key];
                }
            }
        },
        getItem() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            if (this.hasOwnProperty(a)) {
                return String(this[a]);
            } else {
                return null;
            }
        },
        key() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0], i = 1;
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    if (i == a) {
                        return this[key];
                    }
                    i++;
                }
            }
            return null;
        },
        removeItem() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            delete this[a];
        },
        setItem() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0], b = "" + arguments[1];
            this[a] = b;
        },

    },
    subObject: []
}