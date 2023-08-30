Object.defineProperty(this, "NavigationHistoryEntry", {
    value: function NavigationHistoryEntry() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(NavigationHistoryEntry);

Object.defineProperties(NavigationHistoryEntry.prototype, {
    [Symbol.toStringTag]: {
        value: "NavigationHistoryEntry", configurable: true
    }
});

NavigationHistoryEntry.prototype.__proto__ = EventTarget.prototype;

NavigationHistoryEntry.prototype["getState"] = rsvm.browser.NavigationHistoryEntry.actor.getState;
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.actor.getState, "length", { value: 0 });


Object.defineProperty(NavigationHistoryEntry.prototype, "key", {
    get: rsvm.browser.NavigationHistoryEntry.getter.key,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.getter.key, "name", {
    value: "get key"
});
Object.defineProperty(NavigationHistoryEntry.prototype, "id", {
    get: rsvm.browser.NavigationHistoryEntry.getter.id,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.getter.id, "name", {
    value: "get id"
});
Object.defineProperty(NavigationHistoryEntry.prototype, "url", {
    get: rsvm.browser.NavigationHistoryEntry.getter.url,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.getter.url, "name", {
    value: "get url"
});
Object.defineProperty(NavigationHistoryEntry.prototype, "index", {
    get: rsvm.browser.NavigationHistoryEntry.getter.index,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.getter.index, "name", {
    value: "get index"
});
Object.defineProperty(NavigationHistoryEntry.prototype, "sameDocument", {
    get: rsvm.browser.NavigationHistoryEntry.getter.sameDocument,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.getter.sameDocument, "name", {
    value: "get sameDocument"
});
Object.defineProperty(NavigationHistoryEntry.prototype, "ondispose", {
    get: rsvm.browser.NavigationHistoryEntry.getter.ondispose,
    set: rsvm.browser.NavigationHistoryEntry.setter.ondispose,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.getter.ondispose, "name", {
    value: "get ondispose"
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.setter.ondispose, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.NavigationHistoryEntry.setter.ondispose, "name", {
    value: "set ondispose"
});


for (const key in rsvm.browser.NavigationHistoryEntry.getter) {
    rsvm.safefunction(rsvm.browser.NavigationHistoryEntry.getter[key]);
}
for (const key in rsvm.browser.NavigationHistoryEntry.setter) {
    rsvm.safefunction(rsvm.browser.NavigationHistoryEntry.setter[key]);
}
for (const key in rsvm.browser.NavigationHistoryEntry.actor) {
    rsvm.safefunction(rsvm.browser.NavigationHistoryEntry.actor[key]);
};


NavigationHistoryEntry = rsvm.proxy(NavigationHistoryEntry);