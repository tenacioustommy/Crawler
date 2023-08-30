rsvm.browser.Request = {
    memory: {
        method: "GET",
        url: "chrome://newtab/",
        headers: {},
        destination: "",
        referrer: "about:client",
        referrerPolicy: "",
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
        redirect: "follow",
        integrity: "",
        keepalive: false,
        signal: {},
        isHistoryNavigation: false,
        bodyUsed: false,
        body: null,
    },
    getter: {
        method() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].method;
                }
            }
            return rsvm.browser.Request.memory.method;
        },
        url() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].url;
                }
            }
            return rsvm.browser.Request.memory.url;
        },
        headers() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].headers;
                }
            }
            return rsvm.browser.Request.memory.headers;
        },
        destination() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].destination;
                }
            }
            return rsvm.browser.Request.memory.destination;
        },
        referrer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].referrer;
                }
            }
            return rsvm.browser.Request.memory.referrer;
        },
        referrerPolicy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].referrerPolicy;
                }
            }
            return rsvm.browser.Request.memory.referrerPolicy;
        },
        mode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].mode;
                }
            }
            return rsvm.browser.Request.memory.mode;
        },
        credentials() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].credentials;
                }
            }
            return rsvm.browser.Request.memory.credentials;
        },
        cache() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].cache;
                }
            }
            return rsvm.browser.Request.memory.cache;
        },
        redirect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].redirect;
                }
            }
            return rsvm.browser.Request.memory.redirect;
        },
        integrity() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].integrity;
                }
            }
            return rsvm.browser.Request.memory.integrity;
        },
        keepalive() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].keepalive;
                }
            }
            return rsvm.browser.Request.memory.keepalive;
        },
        signal() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].signal;
                }
            }
            return rsvm.browser.Request.memory.signal;
        },
        isHistoryNavigation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].isHistoryNavigation;
                }
            }
            return rsvm.browser.Request.memory.isHistoryNavigation;
        },
        bodyUsed() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].bodyUsed;
                }
            }
            return rsvm.browser.Request.memory.bodyUsed;
        },
        body() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Request");
            }
            if (!Request.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Request.subObject.length; i++) {
                if (this == rsvm.browser.Request.subObject[i].dogID) {
                    return rsvm.browser.Request.subObject[i].body;
                }
            }
            return rsvm.browser.Request.memory.body;
        },
    },
    setter: {
    },
    actor: {
        arrayBuffer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blob() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clone() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        formData() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        json() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        text() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};