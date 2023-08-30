Object.defineProperty(this, "MimeTypeArray", {
    value: function MimeTypeArray() {
        rsvm.throwErrorNew("MimeTypeArray");
    }
}); rsvm.safefunction(MimeTypeArray);

Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeTypeArray", configurable: true
    },
    [Symbol.iterator]: {
        value: rsvm.browser.MimeTypeArray.actor.values,
        configurable: false, enumerable: false, writable: false
    }
});

MimeTypeArray.prototype["item"] = rsvm.browser.MimeTypeArray.actor.item;
Object.defineProperty(rsvm.browser.MimeTypeArray.actor.item, "length", { value: 1 });
MimeTypeArray.prototype["namedItem"] = rsvm.browser.MimeTypeArray.actor.namedItem;
Object.defineProperty(rsvm.browser.MimeTypeArray.actor.namedItem, "length", { value: 1 });


Object.defineProperty(MimeTypeArray.prototype, "length", {
    get: rsvm.browser.MimeTypeArray.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MimeTypeArray.getter.length, "name", {
    value: "get length"
});

for (const key in rsvm.browser.MimeTypeArray.getter) {
    rsvm.safefunction(rsvm.browser.MimeTypeArray.getter[key]);
}
for (const key in rsvm.browser.MimeTypeArray.setter) {
    rsvm.safefunction(rsvm.browser.MimeTypeArray.setter[key]);
}
for (const key in rsvm.browser.MimeTypeArray.actor) {
    rsvm.safefunction(rsvm.browser.MimeTypeArray.actor[key]);
};


MimeTypeArray = rsvm.proxy(MimeTypeArray);