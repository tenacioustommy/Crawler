Object.defineProperty(this, "HTMLCollection", {
    value: function HTMLCollection() {
        rsvm.throwErrorNew("HTMLCollection");
    }
}); rsvm.safefunction(HTMLCollection);

Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCollection", configurable: true
    },
    [Symbol.iterator]: {
		value: rsvm.browser.HTMLCollection.actor.values,
	    configurable: false, enumerable: false, writable: false
	}
});

HTMLCollection.prototype["item"] = rsvm.browser.HTMLCollection.actor.item;
Object.defineProperty(rsvm.browser.HTMLCollection.actor.item, "length", { value: 1 });
HTMLCollection.prototype["namedItem"] = rsvm.browser.HTMLCollection.actor.namedItem;
Object.defineProperty(rsvm.browser.HTMLCollection.actor.namedItem, "length", { value: 1 });


Object.defineProperty(HTMLCollection.prototype, "length", {
    get: rsvm.browser.HTMLCollection.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLCollection.getter.length, "name", {
    value: "get length"
});

for (const key in rsvm.browser.HTMLCollection.getter) {
    rsvm.safefunction(rsvm.browser.HTMLCollection.getter[key]);
}
for (const key in rsvm.browser.HTMLCollection.setter) {
    rsvm.safefunction(rsvm.browser.HTMLCollection.setter[key]);
}
for (const key in rsvm.browser.HTMLCollection.actor) {
    rsvm.safefunction(rsvm.browser.HTMLCollection.actor[key]);
};

HTMLCollection = rsvm.proxy(HTMLCollection);