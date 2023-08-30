Object.defineProperty(this, "HTMLDivElement", {
    value: function HTMLDivElement() {
        rsvm.throwErrorNew("HTMLDivElement");
    }
}); rsvm.safefunction(HTMLDivElement);

Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement", configurable: true
    }
});

HTMLDivElement.prototype.__proto__ = HTMLElement.prototype;

Object.defineProperty(HTMLDivElement.prototype, "align", {
    get: rsvm.browser.HTMLDivElement.getter.align,
    set: rsvm.browser.HTMLDivElement.setter.align,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLDivElement.getter.align, "name", {
    value: "get align"
});
Object.defineProperty(rsvm.browser.HTMLDivElement.setter.align, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLDivElement.setter.align, "name", {
    value: "set align"
});

for (const key in rsvm.browser.HTMLDivElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLDivElement.getter[key]);
}
for (const key in rsvm.browser.HTMLDivElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLDivElement.setter[key]);
}
for (const key in rsvm.browser.HTMLDivElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLDivElement.actor[key]);
};


HTMLDivElement = rsvm.proxy(HTMLDivElement);