Object.defineProperty(this, "XMLHttpRequestEventTarget", {
    value: function XMLHttpRequestEventTarget() {
        rsvm.throwErrorNew("XMLHttpRequestEventTarget");
    }
}); rsvm.safefunction(XMLHttpRequestEventTarget);

Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequestEventTarget", configurable: true
    }
});

XMLHttpRequestEventTarget.prototype.__proto__ = EventTarget.prototype;


Object.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.onloadstart,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.onloadstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.onloadstart, "name", {
    value: "get onloadstart"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onloadstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onloadstart, "name", {
    value: "set onloadstart"
});
Object.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.onprogress,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.onprogress,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.onprogress, "name", {
    value: "get onprogress"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onprogress, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onprogress, "name", {
    value: "set onprogress"
});
Object.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.onabort,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.onabort,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.onabort, "name", {
    value: "get onabort"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onabort, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onabort, "name", {
    value: "set onabort"
});
Object.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.onerror,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.onerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.onerror, "name", {
    value: "get onerror"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onerror, "name", {
    value: "set onerror"
});
Object.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.onload,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.onload,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.onload, "name", {
    value: "get onload"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onload, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onload, "name", {
    value: "set onload"
});
Object.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.ontimeout,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.ontimeout,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.ontimeout, "name", {
    value: "get ontimeout"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.ontimeout, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.ontimeout, "name", {
    value: "set ontimeout"
});
Object.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {
    get: rsvm.browser.XMLHttpRequestEventTarget.getter.onloadend,
    set: rsvm.browser.XMLHttpRequestEventTarget.setter.onloadend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.getter.onloadend, "name", {
    value: "get onloadend"
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onloadend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequestEventTarget.setter.onloadend, "name", {
    value: "set onloadend"
});


for (const key in rsvm.browser.XMLHttpRequestEventTarget.getter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequestEventTarget.getter[key]);
}
for (const key in rsvm.browser.XMLHttpRequestEventTarget.setter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequestEventTarget.setter[key]);
}
for (const key in rsvm.browser.XMLHttpRequestEventTarget.actor) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequestEventTarget.actor[key]);
};


XMLHttpRequestEventTarget = rsvm.proxy(XMLHttpRequestEventTarget);