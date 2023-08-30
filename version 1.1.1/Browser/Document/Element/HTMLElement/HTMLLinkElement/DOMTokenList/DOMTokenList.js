Object.defineProperty(this, "DOMTokenList", {
    value: function DOMTokenList() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(DOMTokenList);

Object.defineProperties(DOMTokenList.prototype, {
    [Symbol.toStringTag]: {
        value: "DOMTokenList", configurable: true
    }
});

DOMTokenList.prototype["entries"] = rsvm.browser.DOMTokenList.actor.entries;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.entries, "length", { value: 0 });
DOMTokenList.prototype["keys"] = rsvm.browser.DOMTokenList.actor.keys;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.keys, "length", { value: 0 });
DOMTokenList.prototype["values"] = rsvm.browser.DOMTokenList.actor.values;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.values, "length", { value: 0 });
DOMTokenList.prototype["forEach"] = rsvm.browser.DOMTokenList.actor.forEach;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.forEach, "length", { value: 1 });
DOMTokenList.prototype["add"] = rsvm.browser.DOMTokenList.actor.add;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.add, "length", { value: 0 });
DOMTokenList.prototype["contains"] = rsvm.browser.DOMTokenList.actor.contains;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.contains, "length", { value: 1 });
DOMTokenList.prototype["item"] = rsvm.browser.DOMTokenList.actor.item;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.item, "length", { value: 1 });
DOMTokenList.prototype["remove"] = rsvm.browser.DOMTokenList.actor.remove;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.remove, "length", { value: 0 });
DOMTokenList.prototype["replace"] = rsvm.browser.DOMTokenList.actor.replace;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.replace, "length", { value: 2 });
DOMTokenList.prototype["supports"] = rsvm.browser.DOMTokenList.actor.supports;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.supports, "length", { value: 1 });
DOMTokenList.prototype["toggle"] = rsvm.browser.DOMTokenList.actor.toggle;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.toggle, "length", { value: 1 });
DOMTokenList.prototype["toString"] = rsvm.browser.DOMTokenList.actor.toString;
Object.defineProperty(rsvm.browser.DOMTokenList.actor.toString, "length", { value: 0 });


Object.defineProperty(DOMTokenList.prototype, "length", {
    get: rsvm.browser.DOMTokenList.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DOMTokenList.getter.length, "name", {
    value: "get length"
});
Object.defineProperty(DOMTokenList.prototype, "value", {
    get: rsvm.browser.DOMTokenList.getter.value,
    set: rsvm.browser.DOMTokenList.setter.value,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DOMTokenList.getter.value, "name", {
    value: "get value"
});
Object.defineProperty(rsvm.browser.DOMTokenList.setter.value, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.DOMTokenList.setter.value, "name", {
    value: "set value"
});


for (const key in rsvm.browser.DOMTokenList.getter) {
    rsvm.safefunction(rsvm.browser.DOMTokenList.getter[key]);
}
for (const key in rsvm.browser.DOMTokenList.setter) {
    rsvm.safefunction(rsvm.browser.DOMTokenList.setter[key]);
}
for (const key in rsvm.browser.DOMTokenList.actor) {
    rsvm.safefunction(rsvm.browser.DOMTokenList.actor[key]);
};


DOMTokenList = rsvm.proxy(DOMTokenList);