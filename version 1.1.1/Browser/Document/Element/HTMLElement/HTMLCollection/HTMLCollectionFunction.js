rsvm.browser.HTMLCollection = {
    memory: {
        length: 0,
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLCollection");
            }
            if (!HTMLCollection.prototype.isPrototypeOf(this)) {
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
        values() {
            return {
                next: function () {
                    if (this.index_ == undefined) {
                        this.index_ = 0;
                    }
                    var tmp = this.self_[this.index_];
                    this.index_ += 1;
                    return { value: tmp, done: tmp == undefined };
                },
                self_: this
            }
        },
        item(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        namedItem(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
    },
    subObject: [],
    create() {
        var object = Object.create(HTMLCollection.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLCollection.memory) {
            memory[key] = rsvm.browser.HTMLCollection.memory[key];
        }
        rsvm.browser.HTMLCollection.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};