rsvm.browser.ServiceWorker = {
    memory: {
        scriptURL: undefined,
        state: undefined,
        onstatechange: undefined,
        onerror: undefined,
    },
    getter: {
        scriptURL() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorker");
            }
            if (!ServiceWorker.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorker.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorker.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorker.subObject[i].scriptURL;
                }
            }
            return rsvm.browser.ServiceWorker.memory.scriptURL;
        },
        state() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorker");
            }
            if (!ServiceWorker.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorker.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorker.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorker.subObject[i].state;
                }
            }
            return rsvm.browser.ServiceWorker.memory.state;
        },
        onstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorker");
            }
            if (!ServiceWorker.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorker.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorker.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorker.subObject[i].onstatechange;
                }
            }
            return rsvm.browser.ServiceWorker.memory.onstatechange;
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorker");
            }
            if (!ServiceWorker.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorker.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorker.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorker.subObject[i].onerror;
                }
            }
            return rsvm.browser.ServiceWorker.memory.onerror;
        },
    },
    setter: {
        onstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.ServiceWorker.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorker.subObject[i].dogID) {
                    rsvm.browser.ServiceWorker.subObject[i].onstatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.ServiceWorker.memory.onstatechange = arguments[0];
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.ServiceWorker.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorker.subObject[i].dogID) {
                    rsvm.browser.ServiceWorker.subObject[i].onerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.ServiceWorker.memory.onerror = arguments[0];
        },
    },
    actor: {
        postMessage(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};