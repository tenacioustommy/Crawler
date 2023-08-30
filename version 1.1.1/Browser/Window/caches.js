Object.defineProperty(this, "CacheStorage", {
    value: function CacheStorage() {
        rsvm.throwErrorNew("CacheStorage");
    }
}); rsvm.proxy(CacheStorage);
Object.defineProperties(CacheStorage.prototype, {
    [Symbol.toStringTag]: {
        value: "CacheStorage",
        configurable: true
    }
});

rsvm.browser.func.CacheStorageGetter = {
    delete(a) {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    has(a) {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    keys() {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    match(a) {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    open(a) {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
};
for (const key in rsvm.browser.func.CacheStorageGetter) {
    rsvm.safefunction(rsvm.browser.func.CacheStorageGetter[key]);
}
CacheStorage.prototype["delete"] = rsvm.browser.func.CacheStorageGetter.delete;
Object.defineProperty(rsvm.browser.func.CacheStorageGetter.delete, "length", { value: 1 });
CacheStorage.prototype["has"] = rsvm.browser.func.CacheStorageGetter.has;
Object.defineProperty(rsvm.browser.func.CacheStorageGetter.has, "length", { value: 1 });
CacheStorage.prototype["keys"] = rsvm.browser.func.CacheStorageGetter.keys;
Object.defineProperty(rsvm.browser.func.CacheStorageGetter.keys, "length", { value: 0 });
CacheStorage.prototype["match"] = rsvm.browser.func.CacheStorageGetter.match;
Object.defineProperty(rsvm.browser.func.CacheStorageGetter.match, "length", { value: 1 });
CacheStorage.prototype["open"] = rsvm.browser.func.CacheStorageGetter.open;
Object.defineProperty(rsvm.browser.func.CacheStorageGetter.open, "length", { value: 1 });

var caches = {}; caches.__proto__ = CacheStorage.prototype;



CacheStorage = rsvm.proxy(CacheStorage);
caches = rsvm.proxy(caches);