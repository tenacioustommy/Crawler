Object.defineProperty(this, "Storage", {
    value: function Storage() {
        rsvm.throwErrorNew("Storage");
    }
}); rsvm.safefunction(Storage);

Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage", configurable: true
    }
});

Storage.prototype["clear"] = rsvm.browser.Storage.actor.clear;
Object.defineProperty(rsvm.browser.Storage.actor.clear, "length", { value: 0 });
Storage.prototype["getItem"] = rsvm.browser.Storage.actor.getItem;
Object.defineProperty(rsvm.browser.Storage.actor.getItem, "length", { value: 1 });
Storage.prototype["key"] = rsvm.browser.Storage.actor.key;
Object.defineProperty(rsvm.browser.Storage.actor.key, "length", { value: 1 });
Storage.prototype["removeItem"] = rsvm.browser.Storage.actor.removeItem;
Object.defineProperty(rsvm.browser.Storage.actor.removeItem, "length", { value: 1 });
Storage.prototype["setItem"] = rsvm.browser.Storage.actor.setItem;
Object.defineProperty(rsvm.browser.Storage.actor.setItem, "length", { value: 2 });


Object.defineProperty(Storage.prototype, "length", {
    get: rsvm.browser.Storage.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Storage.getter.length, "name", {
    value: "get length"
});

for (const key in rsvm.browser.Storage.getter) {
    rsvm.safefunction(rsvm.browser.Storage.getter[key]);
}
for (const key in rsvm.browser.Storage.setter) {
    rsvm.safefunction(rsvm.browser.Storage.setter[key]);
}
for (const key in rsvm.browser.Storage.actor) {
    rsvm.safefunction(rsvm.browser.Storage.actor[key]);
};

Storage = rsvm.proxy(Storage);

var localStorage = Object.create(Storage.prototype);
var sessionStorage = Object.create(Storage.prototype);

localStorage = rsvm.proxy(localStorage);
sessionStorage = rsvm.proxy(sessionStorage);