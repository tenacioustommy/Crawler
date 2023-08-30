rsvm.browser.DOMTokenList = {
    memory: {
        length: 0,
        value: "",
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DOMTokenList");
            }
            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
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
        value() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DOMTokenList");
            }
            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.DOMTokenList.subObject.length; i++) {
                if (this == rsvm.browser.DOMTokenList.subObject[i].dogID) {
                    return rsvm.browser.DOMTokenList.subObject[i].value;
                }
            }
            return rsvm.browser.DOMTokenList.memory.value;
        },
    },
    setter: {
        value() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.DOMTokenList.subObject.length; i++) {
                if (this == rsvm.browser.DOMTokenList.subObject[i].dogID) {
                    rsvm.browser.DOMTokenList.subObject[i].value = arguments[0];
                    return;
                }
            }
            rsvm.browser.DOMTokenList.memory.value = arguments[0];
        },
    },
    actor: {
        entries() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        keys() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        values() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        forEach(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        add() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        contains(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        item(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        remove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replace(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        supports(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return true;
        },
        toggle(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        toString() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create() {
        var object = Object.create(DOMTokenList.prototype);
        var memory = {};
        for (const key in rsvm.browser.DOMTokenList.memory) {
            memory[key] = rsvm.browser.DOMTokenList.memory[key];
        }
        rsvm.browser.DOMTokenList.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};