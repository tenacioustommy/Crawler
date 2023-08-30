rsvm.browser.XMLHttpRequest = {
    memory: {
        onreadystatechange: null,
        readyState: 0,
        timeout: 0,
        withCredentials: false,
        upload: {},
        responseURL: "",
        status: 0,
        statusText: "",
        responseType: "",
        response: "",
        responseText: "",
        responseXML: null,
    },
    getter: {
        onreadystatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onreadystatechange;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.onreadystatechange;
        },
        readyState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].readyState;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.readyState;
        },
        timeout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].timeout;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.timeout;
        },
        withCredentials() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].withCredentials;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.withCredentials;
        },
        upload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].upload;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.upload;
        },
        responseURL() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].responseURL;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.responseURL;
        },
        status() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].status;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.status;
        },
        statusText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].statusText;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.statusText;
        },
        responseType() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].responseType;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.responseType;
        },
        response() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].response;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.response;
        },
        responseText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].responseText;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.responseText;
        },
        responseXML() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequest");
            }
            if (!XMLHttpRequest.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].responseXML;
                }
            }
            return rsvm.browser.XMLHttpRequest.memory.responseXML;
        },
    },
    setter: {
        onreadystatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onreadystatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequest.memory.onreadystatechange = arguments[0];
        },
        timeout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].timeout = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequest.memory.timeout = arguments[0];
        },
        withCredentials() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].withCredentials = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequest.memory.withCredentials = arguments[0];
        },
        responseType() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].responseType = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequest.memory.responseType = arguments[0];
        },
    },
    actor: {
        abort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAllResponseHeaders() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getResponseHeader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        open(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        overrideMimeType(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        send() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            rsvm.target = arguments[0];
        },
        setRequestHeader(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
}


for (const key in rsvm.browser.XMLHttpRequest.getter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequest.getter[key]);
}
for (const key in rsvm.browser.XMLHttpRequest.setter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequest.setter[key]);
}
for (const key in rsvm.browser.XMLHttpRequest.actor) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequest.actor[key]);
};