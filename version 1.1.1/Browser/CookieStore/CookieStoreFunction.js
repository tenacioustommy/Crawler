rsvm.browser.CookieStore = {
    memory: {
        onchange: null,
    },
    getter: {
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CookieStore");
            }
            if (!CookieStore.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CookieStore.subObject.length; i++) {
                if (this == rsvm.browser.CookieStore.subObject[i].dogID) {
                    return rsvm.browser.CookieStore.subObject[i].onchange;
                }
            }
            return rsvm.browser.CookieStore.memory.onchange;
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
            for (let i = 0; i < rsvm.browser.CookieStore.subObject.length; i++) {
                if (this == rsvm.browser.CookieStore.subObject[i].dogID) {
                    rsvm.browser.CookieStore.subObject[i].onchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.CookieStore.memory.onchange = arguments[0];
        },
    },
    actor: {
        delete(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        get() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            
        },
        getAll() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return rsvm.browser.Node.subObject[0].cookie;
        },
        set(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};