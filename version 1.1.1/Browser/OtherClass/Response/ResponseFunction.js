rsvm.browser.Response = {
    memory: {
        type: "default",
        url: "",
        redirected: false,
        status: 200,
        ok: true,
        statusText: "",
        headers: {},
        body: null,
        bodyUsed: false,
    },
    getter: {
        type() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].type;
                }
            }
            return rsvm.browser.Response.memory.type;
        },
        url() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].url;
                }
            }
            return rsvm.browser.Response.memory.url;
        },
        redirected() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].redirected;
                }
            }
            return rsvm.browser.Response.memory.redirected;
        },
        status() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].status;
                }
            }
            return rsvm.browser.Response.memory.status;
        },
        ok() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].ok;
                }
            }
            return rsvm.browser.Response.memory.ok;
        },
        statusText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].statusText;
                }
            }
            return rsvm.browser.Response.memory.statusText;
        },
        headers() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].headers;
                }
            }
            return rsvm.browser.Response.memory.headers;
        },
        body() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].body;
                }
            }
            return rsvm.browser.Response.memory.body;
        },
        bodyUsed() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Response");
            }
            if (!Response.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Response.subObject.length; i++) {
                if (this == rsvm.browser.Response.subObject[i].dogID) {
                    return rsvm.browser.Response.subObject[i].bodyUsed;
                }
            }
            return rsvm.browser.Response.memory.bodyUsed;
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