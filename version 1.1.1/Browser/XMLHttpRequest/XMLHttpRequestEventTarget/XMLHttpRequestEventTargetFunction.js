rsvm.browser.XMLHttpRequestEventTarget = {
    memory: {
        onloadstart: null,
        onprogress: null,
        onabort: null,
        onerror: null,
        onload: null,
        ontimeout: null,
        onloadend: null,
    },
    getter: {
        onloadstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onloadstart;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.onloadstart;
        },
        onprogress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onprogress;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.onprogress;
        },
        onabort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onabort;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.onabort;
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onerror;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.onerror;
        },
        onload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onload;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.onload;
        },
        ontimeout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].ontimeout;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.ontimeout;
        },
        onloadend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("XMLHttpRequestEventTarget");
            }
            if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    return rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onloadend;
                }
            }
            return rsvm.browser.XMLHttpRequestEventTarget.memory.onloadend;
        },
    },
    setter: {
        onloadstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onloadstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.onloadstart = arguments[0];
        },
        onprogress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onprogress = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.onprogress = arguments[0];
        },
        onabort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onabort = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.onabort = arguments[0];
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.onerror = arguments[0];
        },
        onload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onload = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.onload = arguments[0];
        },
        ontimeout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].ontimeout = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.ontimeout = arguments[0];
        },
        onloadend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.XMLHttpRequestEventTarget.subObject.length; i++) {
                if (this == rsvm.browser.XMLHttpRequestEventTarget.subObject[i].dogID) {
                    rsvm.browser.XMLHttpRequestEventTarget.subObject[i].onloadend = arguments[0];
                    return;
                }
            }
            rsvm.browser.XMLHttpRequestEventTarget.memory.onloadend = arguments[0];
        },
    },
    actor: {

    },
    subObject: []
}


for (const key in rsvm.browser.XMLHttpRequestEventTarget.getter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequestEventTarget.getter[key]);
}
for (const key in rsvm.browser.XMLHttpRequestEventTarget.setter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequestEventTarget.setter[key]);
}
for (const key in rsvm.browser.XMLHttpRequestEventTarget.actor) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequestEventTarget.actor[key]);
};