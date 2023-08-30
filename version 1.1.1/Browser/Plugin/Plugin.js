Object.defineProperty(this, "Plugin", {
    value: function Plugin() {
        rsvm.throwErrorNew("Plugin");
    }
}); rsvm.safefunction(Plugin);

Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin", configurable: true
    },
    [Symbol.iterator]: {
        value: rsvm.browser.Plugin.actor.values,
        configurable: false, enumerable: false, writable: false
    }
});

Plugin.prototype["item"] = rsvm.browser.Plugin.actor.item;
Object.defineProperty(rsvm.browser.Plugin.actor.item, "length", { value: 1 });
Plugin.prototype["namedItem"] = rsvm.browser.Plugin.actor.namedItem;
Object.defineProperty(rsvm.browser.Plugin.actor.namedItem, "length", { value: 1 });


Object.defineProperty(Plugin.prototype, "name", {
    get: rsvm.browser.Plugin.getter.name,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Plugin.getter.name, "name", {
    value: "get name"
});
Object.defineProperty(Plugin.prototype, "filename", {
    get: rsvm.browser.Plugin.getter.filename,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Plugin.getter.filename, "name", {
    value: "get filename"
});
Object.defineProperty(Plugin.prototype, "description", {
    get: rsvm.browser.Plugin.getter.description,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Plugin.getter.description, "name", {
    value: "get description"
});
Object.defineProperty(Plugin.prototype, "length", {
    get: rsvm.browser.Plugin.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Plugin.getter.length, "name", {
    value: "get length"
});

for (const key in rsvm.browser.Plugin.getter) {
    rsvm.safefunction(rsvm.browser.Plugin.getter[key]);
}
for (const key in rsvm.browser.Plugin.setter) {
    rsvm.safefunction(rsvm.browser.Plugin.setter[key]);
}
for (const key in rsvm.browser.Plugin.actor) {
    rsvm.safefunction(rsvm.browser.Plugin.actor[key]);
};

Plugin = rsvm.proxy(Plugin);