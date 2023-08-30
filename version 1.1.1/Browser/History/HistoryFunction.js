rsvm.browser.History = {
    memory: {
        length: 1,
        scrollRestoration: "auto",
        state: null,
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("History");
            }
            if (!History.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.History.subObject.length; i++) {
                if (this == rsvm.browser.History.subObject[i].dogID) {
                    return rsvm.browser.History.subObject[i].length;
                }
            }
            return rsvm.browser.History.memory.length;
        },
        scrollRestoration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("History");
            }
            if (!History.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.History.subObject.length; i++) {
                if (this == rsvm.browser.History.subObject[i].dogID) {
                    return rsvm.browser.History.subObject[i].scrollRestoration;
                }
            }
            return rsvm.browser.History.memory.scrollRestoration;
        },
        state() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("History");
            }
            if (!History.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.History.subObject.length; i++) {
                if (this == rsvm.browser.History.subObject[i].dogID) {
                    return rsvm.browser.History.subObject[i].state;
                }
            }
            return rsvm.browser.History.memory.state;
        },
    },
    setter: {
        scrollRestoration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.History.subObject.length; i++) {
                if (this == rsvm.browser.History.subObject[i].dogID) {
                    rsvm.browser.History.subObject[i].scrollRestoration = arguments[0];
                    return;
                }
            }
            rsvm.browser.History.memory.scrollRestoration = arguments[0];
        },
    },
    actor: {
        back() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        forward() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        go() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        pushState(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replaceState(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create() {
        return Object.create(History.prototype);
    }
};