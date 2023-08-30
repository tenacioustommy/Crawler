Object.defineProperty(this, "HTMLHtmlElement", {
    value: function HTMLHtmlElement() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(HTMLHtmlElement);

Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHtmlElement", configurable: true
    }
});

HTMLHtmlElement.prototype.__proto__ = HTMLElement.prototype;

Object.defineProperty(HTMLHtmlElement.prototype, "version", {
    get: rsvm.browser.HTMLHtmlElement.getter.version,
    set: rsvm.browser.HTMLHtmlElement.setter.version,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLHtmlElement.getter.version, "name", {
    value: "get version"
});
Object.defineProperty(rsvm.browser.HTMLHtmlElement.setter.version, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLHtmlElement.setter.version, "name", {
    value: "set version"
});


for (const key in rsvm.browser.HTMLHtmlElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLHtmlElement.getter[key]);
}
for (const key in rsvm.browser.HTMLHtmlElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLHtmlElement.setter[key]);
}
for (const key in rsvm.browser.HTMLHtmlElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLHtmlElement.actor[key]);
};


HTMLHtmlElement = rsvm.proxy(HTMLHtmlElement);