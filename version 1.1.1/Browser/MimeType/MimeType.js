Object.defineProperty(this, "MimeType", {
    value: function MimeType() {
        rsvm.throwErrorNew("MimeType");
    }
}); rsvm.safefunction(MimeType);

Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType", configurable: true
    }
});



Object.defineProperty(MimeType.prototype, "type", {
    get: rsvm.browser.MimeType.getter.type,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MimeType.getter.type, "name", {
    value: "get type"
});
Object.defineProperty(MimeType.prototype, "suffixes", {
    get: rsvm.browser.MimeType.getter.suffixes,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MimeType.getter.suffixes, "name", {
    value: "get suffixes"
});
Object.defineProperty(MimeType.prototype, "description", {
    get: rsvm.browser.MimeType.getter.description,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MimeType.getter.description, "name", {
    value: "get description"
});
Object.defineProperty(MimeType.prototype, "enabledPlugin", {
    get: rsvm.browser.MimeType.getter.enabledPlugin,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MimeType.getter.enabledPlugin, "name", {
    value: "get enabledPlugin"
});

for (const key in rsvm.browser.MimeType.getter) {
    rsvm.safefunction(rsvm.browser.MimeType.getter[key]);
}
for (const key in rsvm.browser.MimeType.setter) {
    rsvm.safefunction(rsvm.browser.MimeType.setter[key]);
}
for (const key in rsvm.browser.MimeType.actor) {
    rsvm.safefunction(rsvm.browser.MimeType.actor[key]);
};

MimeType = rsvm.proxy(MimeType);