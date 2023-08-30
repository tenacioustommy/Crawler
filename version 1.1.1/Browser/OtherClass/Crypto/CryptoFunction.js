rsvm.browser.Crypto = {
    memory: {
        subtle: {},
    },
    getter: {
        subtle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Crypto");
            }
            if (!Crypto.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Crypto.subObject.length; i++) {
                if (this == rsvm.browser.Crypto.subObject[i].dogID) {
                    return rsvm.browser.Crypto.subObject[i].subtle;
                }
            }
            return rsvm.browser.Crypto.memory.subtle;
        },
    },
    setter: {
    },
    actor: {
        getRandomValues(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        randomUUID() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};