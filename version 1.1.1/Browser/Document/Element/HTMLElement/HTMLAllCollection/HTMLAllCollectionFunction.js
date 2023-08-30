rsvm.browser.HTMLAllCollection = {
    memory: {
        length: 1,
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLAllCollection");
            }
            if (!HTMLAllCollection.prototype.isPrototypeOf(this)) {
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
        item() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        namedItem(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        values(){

        }
    },
    subObject: [],
    create() {
        var object = Object.create(HTMLAllCollection.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLAllCollection.memory) {
            memory[key] = rsvm.browser.HTMLAllCollection.memory[key];
        }
        rsvm.browser.HTMLAllCollection.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};