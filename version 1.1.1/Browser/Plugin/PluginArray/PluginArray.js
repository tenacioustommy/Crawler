Object.defineProperty(this, "PluginArray", {
    value: function PluginArray() {
        rsvm.throwErrorNew("PluginArray");
    }
}); rsvm.safefunction(PluginArray);

Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: "PluginArray", configurable: true
    },
    [Symbol.iterator]: {
        value: rsvm.browser.PluginArray.actor.values,
        configurable: false, enumerable: false, writable: false
    }
});

PluginArray.prototype["item"] = rsvm.browser.PluginArray.actor.item;
Object.defineProperty(rsvm.browser.PluginArray.actor.item, "length", { value: 1 });
PluginArray.prototype["namedItem"] = rsvm.browser.PluginArray.actor.namedItem;
Object.defineProperty(rsvm.browser.PluginArray.actor.namedItem, "length", { value: 1 });
PluginArray.prototype["refresh"] = rsvm.browser.PluginArray.actor.refresh;
Object.defineProperty(rsvm.browser.PluginArray.actor.refresh, "length", { value: 0 });


Object.defineProperty(PluginArray.prototype, "length", {
    get: rsvm.browser.PluginArray.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PluginArray.getter.length, "name", {
    value: "get length"
});

for (const key in rsvm.browser.PluginArray.getter) {
    rsvm.safefunction(rsvm.browser.PluginArray.getter[key]);
}
for (const key in rsvm.browser.PluginArray.setter) {
    rsvm.safefunction(rsvm.browser.PluginArray.setter[key]);
}
for (const key in rsvm.browser.PluginArray.actor) {
    rsvm.safefunction(rsvm.browser.PluginArray.actor[key]);
};

PluginArray = rsvm.proxy(PluginArray);


// (function () {
//     var obj = rsvm.proxy(Object.create(MimeTypeArray.prototype));

//     var object = Object.create(Plugin.prototype);
//     var memory = {};
//     memory["description"] = "Portable Document Format";
//     memory["filename"] = "internal-pdf-viewer";
//     memory["name"] = "PDF Viewer";

//     obj[0] = rsvm.browser.MimeType.create("application/pdf", object);
//     obj[1] = rsvm.browser.MimeType.create("text/pdf", object);

//     object[0] = obj[0];
//     object[1] = obj[1];

//     Object.defineProperty(obj, "application/pdf", {
//         value: obj[0], configurable: true, enumerable: false, writable: false
//     });
//     Object.defineProperty(obj, "text/pdf", {
//         value: obj[1], configurable: true, enumerable: false, writable: false
//     });
//     Object.defineProperty(object, "application/pdf", {
//         value: obj[0], configurable: true, enumerable: false, writable: false
//     });
//     Object.defineProperty(object, "text/pdf", {
//         value: obj[1], configurable: true, enumerable: false, writable: false
//     });

//     rsvm.browser.Plugin.subObject.push(memory);
//     object = rsvm.proxy(object);
//     memory.dogID = object;

//     rsvm.browser.Navigator.memory.mimeTypes = obj;
// })();