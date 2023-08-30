Object.defineProperty(this, "HTMLMetaElement", {
    value: function HTMLMetaElement() {
        rsvm.throwErrorNew("HTMLMetaElement");
    }
}); rsvm.safefunction(HTMLMetaElement);

Object.defineProperties(HTMLMetaElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLMetaElement", configurable: true
    }
});

HTMLMetaElement.prototype.__proto__ = HTMLElement.prototype;

Object.defineProperty(HTMLMetaElement.prototype, "name", {
    get: rsvm.browser.HTMLMetaElement.getter.name,
    set: rsvm.browser.HTMLMetaElement.setter.name,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.getter.name, "name", {
    value: "get name"
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.name, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.name, "name", {
    value: "set name"
});
Object.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
    get: rsvm.browser.HTMLMetaElement.getter.httpEquiv,
    set: rsvm.browser.HTMLMetaElement.setter.httpEquiv,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.getter.httpEquiv, "name", {
    value: "get httpEquiv"
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.httpEquiv, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.httpEquiv, "name", {
    value: "set httpEquiv"
});
Object.defineProperty(HTMLMetaElement.prototype, "content", {
    get: rsvm.browser.HTMLMetaElement.getter.content,
    set: rsvm.browser.HTMLMetaElement.setter.content,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.getter.content, "name", {
    value: "get content"
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.content, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.content, "name", {
    value: "set content"
});
Object.defineProperty(HTMLMetaElement.prototype, "media", {
    get: rsvm.browser.HTMLMetaElement.getter.media,
    set: rsvm.browser.HTMLMetaElement.setter.media,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.getter.media, "name", {
    value: "get media"
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.media, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.media, "name", {
    value: "set media"
});
Object.defineProperty(HTMLMetaElement.prototype, "scheme", {
    get: rsvm.browser.HTMLMetaElement.getter.scheme,
    set: rsvm.browser.HTMLMetaElement.setter.scheme,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.getter.scheme, "name", {
    value: "get scheme"
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.scheme, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLMetaElement.setter.scheme, "name", {
    value: "set scheme"
});

for (const key in rsvm.browser.HTMLMetaElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLMetaElement.getter[key]);
}
for (const key in rsvm.browser.HTMLMetaElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLMetaElement.setter[key]);
}
for (const key in rsvm.browser.HTMLMetaElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLMetaElement.actor[key]);
};


HTMLMetaElement = rsvm.proxy(HTMLMetaElement);