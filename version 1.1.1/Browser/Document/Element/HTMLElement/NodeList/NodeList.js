Object.defineProperty(this, "NodeList", {
    value: function NodeList() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(NodeList);

Object.defineProperties(NodeList.prototype, {
    [Symbol.toStringTag]: {
        value: "NodeList", configurable: true
    },
    [Symbol.iterator]: {
        value: rsvm.browser.NodeList.actor.values, configurable: true
    }
});

NodeList.prototype["entries"] = rsvm.browser.NodeList.actor.entries;
Object.defineProperty(rsvm.browser.NodeList.actor.entries, "length", { value: 0 });
NodeList.prototype["keys"] = rsvm.browser.NodeList.actor.keys;
Object.defineProperty(rsvm.browser.NodeList.actor.keys, "length", { value: 0 });
NodeList.prototype["values"] = rsvm.browser.NodeList.actor.values;
Object.defineProperty(rsvm.browser.NodeList.actor.values, "length", { value: 0 });
NodeList.prototype["forEach"] = rsvm.browser.NodeList.actor.forEach;
Object.defineProperty(rsvm.browser.NodeList.actor.forEach, "length", { value: 1 });
NodeList.prototype["item"] = rsvm.browser.NodeList.actor.item;
Object.defineProperty(rsvm.browser.NodeList.actor.item, "length", { value: 1 });


Object.defineProperty(NodeList.prototype, "length", {
    get: rsvm.browser.NodeList.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NodeList.getter.length, "name", {
    value: "get length"
});


for (const key in rsvm.browser.NodeList.getter) {
    rsvm.safefunction(rsvm.browser.NodeList.getter[key]);
}
for (const key in rsvm.browser.NodeList.setter) {
    rsvm.safefunction(rsvm.browser.NodeList.setter[key]);
}
for (const key in rsvm.browser.NodeList.actor) {
    rsvm.safefunction(rsvm.browser.NodeList.actor[key]);
};


NodeList = rsvm.proxy(NodeList);