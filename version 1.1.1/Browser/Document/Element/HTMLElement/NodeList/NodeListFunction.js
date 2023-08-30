rsvm.browser.NodeList = {
    memory: {},
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NodeList");
            }
            if (!NodeList.prototype.isPrototypeOf(this)) {
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
        item(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(){
        return rsvm.proxy(Object.create(NodeList.prototype));
    }
};