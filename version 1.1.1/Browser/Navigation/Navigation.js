Object.defineProperty(this, "Navigation", {
    value: function Navigation() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Navigation);

Object.defineProperties(Navigation.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigation", configurable: true
    }
});

Navigation.prototype.__proto__ = EventTarget.prototype;

Navigation.prototype["back"] = rsvm.browser.Navigation.actor.back;
Object.defineProperty(rsvm.browser.Navigation.actor.back, "length", { value: 0 });
Navigation.prototype["entries"] = rsvm.browser.Navigation.actor.entries;
Object.defineProperty(rsvm.browser.Navigation.actor.entries, "length", { value: 0 });
Navigation.prototype["forward"] = rsvm.browser.Navigation.actor.forward;
Object.defineProperty(rsvm.browser.Navigation.actor.forward, "length", { value: 0 });
Navigation.prototype["navigate"] = rsvm.browser.Navigation.actor.navigate;
Object.defineProperty(rsvm.browser.Navigation.actor.navigate, "length", { value: 1 });
Navigation.prototype["reload"] = rsvm.browser.Navigation.actor.reload;
Object.defineProperty(rsvm.browser.Navigation.actor.reload, "length", { value: 0 });
Navigation.prototype["traverseTo"] = rsvm.browser.Navigation.actor.traverseTo;
Object.defineProperty(rsvm.browser.Navigation.actor.traverseTo, "length", { value: 1 });
Navigation.prototype["updateCurrentEntry"] = rsvm.browser.Navigation.actor.updateCurrentEntry;
Object.defineProperty(rsvm.browser.Navigation.actor.updateCurrentEntry, "length", { value: 1 });


Object.defineProperty(Navigation.prototype, "currentEntry", {
    get: rsvm.browser.Navigation.getter.currentEntry,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.currentEntry, "name", {
    value: "get currentEntry"
});
Object.defineProperty(Navigation.prototype, "transition", {
    get: rsvm.browser.Navigation.getter.transition,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.transition, "name", {
    value: "get transition"
});
Object.defineProperty(Navigation.prototype, "canGoBack", {
    get: rsvm.browser.Navigation.getter.canGoBack,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.canGoBack, "name", {
    value: "get canGoBack"
});
Object.defineProperty(Navigation.prototype, "canGoForward", {
    get: rsvm.browser.Navigation.getter.canGoForward,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.canGoForward, "name", {
    value: "get canGoForward"
});
Object.defineProperty(Navigation.prototype, "onnavigate", {
    get: rsvm.browser.Navigation.getter.onnavigate,
    set: rsvm.browser.Navigation.setter.onnavigate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.onnavigate, "name", {
    value: "get onnavigate"
});
Object.defineProperty(rsvm.browser.Navigation.setter.onnavigate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Navigation.setter.onnavigate, "name", {
    value: "set onnavigate"
});
Object.defineProperty(Navigation.prototype, "onnavigatesuccess", {
    get: rsvm.browser.Navigation.getter.onnavigatesuccess,
    set: rsvm.browser.Navigation.setter.onnavigatesuccess,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.onnavigatesuccess, "name", {
    value: "get onnavigatesuccess"
});
Object.defineProperty(rsvm.browser.Navigation.setter.onnavigatesuccess, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Navigation.setter.onnavigatesuccess, "name", {
    value: "set onnavigatesuccess"
});
Object.defineProperty(Navigation.prototype, "onnavigateerror", {
    get: rsvm.browser.Navigation.getter.onnavigateerror,
    set: rsvm.browser.Navigation.setter.onnavigateerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.onnavigateerror, "name", {
    value: "get onnavigateerror"
});
Object.defineProperty(rsvm.browser.Navigation.setter.onnavigateerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Navigation.setter.onnavigateerror, "name", {
    value: "set onnavigateerror"
});
Object.defineProperty(Navigation.prototype, "oncurrententrychange", {
    get: rsvm.browser.Navigation.getter.oncurrententrychange,
    set: rsvm.browser.Navigation.setter.oncurrententrychange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigation.getter.oncurrententrychange, "name", {
    value: "get oncurrententrychange"
});
Object.defineProperty(rsvm.browser.Navigation.setter.oncurrententrychange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Navigation.setter.oncurrententrychange, "name", {
    value: "set oncurrententrychange"
});


for (const key in rsvm.browser.Navigation.getter) {
    rsvm.safefunction(rsvm.browser.Navigation.getter[key]);
}
for (const key in rsvm.browser.Navigation.setter) {
    rsvm.safefunction(rsvm.browser.Navigation.setter[key]);
}
for (const key in rsvm.browser.Navigation.actor) {
    rsvm.safefunction(rsvm.browser.Navigation.actor[key]);
};


Navigation = rsvm.proxy(Navigation);
navigation = rsvm.proxy(Object.create(Navigation.prototype));