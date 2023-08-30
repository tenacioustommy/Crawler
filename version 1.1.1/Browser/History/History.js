Object.defineProperty(this, "History", {
    value: function History() {
        rsvm.throwErrorNew("History");
    }
}); rsvm.safefunction(History);

Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: "History", configurable: true
    }
});

History.prototype["back"] = rsvm.browser.History.actor.back;
Object.defineProperty(rsvm.browser.History.actor.back, "length", { value: 0 });
History.prototype["forward"] = rsvm.browser.History.actor.forward;
Object.defineProperty(rsvm.browser.History.actor.forward, "length", { value: 0 });
History.prototype["go"] = rsvm.browser.History.actor.go;
Object.defineProperty(rsvm.browser.History.actor.go, "length", { value: 0 });
History.prototype["pushState"] = rsvm.browser.History.actor.pushState;
Object.defineProperty(rsvm.browser.History.actor.pushState, "length", { value: 2 });
History.prototype["replaceState"] = rsvm.browser.History.actor.replaceState;
Object.defineProperty(rsvm.browser.History.actor.replaceState, "length", { value: 2 });


Object.defineProperty(History.prototype, "length", {
    get: rsvm.browser.History.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.History.getter.length, "name", {
    value: "get length"
});
Object.defineProperty(History.prototype, "scrollRestoration", {
    get: rsvm.browser.History.getter.scrollRestoration,
    set: rsvm.browser.History.setter.scrollRestoration,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.History.getter.scrollRestoration, "name", {
    value: "get scrollRestoration"
});
Object.defineProperty(rsvm.browser.History.setter.scrollRestoration, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.History.setter.scrollRestoration, "name", {
    value: "set scrollRestoration"
});
Object.defineProperty(History.prototype, "state", {
    get: rsvm.browser.History.getter.state,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.History.getter.state, "name", {
    value: "get state"
});


for (const key in rsvm.browser.History.getter) {
    rsvm.safefunction(rsvm.browser.History.getter[key]);
}
for (const key in rsvm.browser.History.setter) {
    rsvm.safefunction(rsvm.browser.History.setter[key]);
}
for (const key in rsvm.browser.History.actor) {
    rsvm.safefunction(rsvm.browser.History.actor[key]);
};


History = rsvm.proxy(History);

history = rsvm.proxy(Object.create(History.prototype));