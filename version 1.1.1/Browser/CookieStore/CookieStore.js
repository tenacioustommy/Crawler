Object.defineProperty(this, "CookieStore", {
    value: function CookieStore() {
        rsvm.throwErrorNew("CookieStore");
    }
}); rsvm.safefunction(CookieStore);

Object.defineProperties(CookieStore.prototype, {
    [Symbol.toStringTag]: {
        value: "CookieStore", configurable: true
    }
});

CookieStore.prototype.__proto__ = EventTarget.prototype;

CookieStore.prototype["delete"] = rsvm.browser.CookieStore.actor.delete;
Object.defineProperty(rsvm.browser.CookieStore.actor.delete, "length", { value: 1 });
CookieStore.prototype["get"] = rsvm.browser.CookieStore.actor.get;
Object.defineProperty(rsvm.browser.CookieStore.actor.get, "length", { value: 0 });
CookieStore.prototype["getAll"] = rsvm.browser.CookieStore.actor.getAll;
Object.defineProperty(rsvm.browser.CookieStore.actor.getAll, "length", { value: 0 });
CookieStore.prototype["set"] = rsvm.browser.CookieStore.actor.set;
Object.defineProperty(rsvm.browser.CookieStore.actor.set, "length", { value: 1 });


Object.defineProperty(CookieStore.prototype, "onchange", {
    get: rsvm.browser.CookieStore.getter.onchange,
    set: rsvm.browser.CookieStore.setter.onchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CookieStore.getter.onchange, "name", {
    value: "get onchange"
});
Object.defineProperty(rsvm.browser.CookieStore.setter.onchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CookieStore.setter.onchange, "name", {
    value: "set onchange"
});


for (const key in rsvm.browser.CookieStore.getter) {
    rsvm.safefunction(rsvm.browser.CookieStore.getter[key]);
}
for (const key in rsvm.browser.CookieStore.setter) {
    rsvm.safefunction(rsvm.browser.CookieStore.setter[key]);
}
for (const key in rsvm.browser.CookieStore.actor) {
    rsvm.safefunction(rsvm.browser.CookieStore.actor[key]);
};


CookieStore = rsvm.proxy(CookieStore);