Object.defineProperty(this, "HTMLAllCollection", {
    value: function HTMLAllCollection() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(HTMLAllCollection);

Object.defineProperties(HTMLAllCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAllCollection", configurable: true
    },
    [Symbol.iterator]: {
        value: rsvm.browser.HTMLAllCollection.actor.values, configurable: true
    }
});

HTMLAllCollection.prototype["item"] = rsvm.browser.HTMLAllCollection.actor.item;
Object.defineProperty(rsvm.browser.HTMLAllCollection.actor.item, "length", { value: 0 });
HTMLAllCollection.prototype["namedItem"] = rsvm.browser.HTMLAllCollection.actor.namedItem;
Object.defineProperty(rsvm.browser.HTMLAllCollection.actor.namedItem, "length", { value: 1 });


Object.defineProperty(HTMLAllCollection.prototype, "length", {
    get: rsvm.browser.HTMLAllCollection.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAllCollection.getter.length, "name", {
    value: "get length"
});


for (const key in rsvm.browser.HTMLAllCollection.getter) {
    rsvm.safefunction(rsvm.browser.HTMLAllCollection.getter[key]);
}
for (const key in rsvm.browser.HTMLAllCollection.setter) {
    rsvm.safefunction(rsvm.browser.HTMLAllCollection.setter[key]);
}
for (const key in rsvm.browser.HTMLAllCollection.actor) {
    rsvm.safefunction(rsvm.browser.HTMLAllCollection.actor[key]);
};


HTMLAllCollection = rsvm.proxy(HTMLAllCollection);