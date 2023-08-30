Object.defineProperty(this, "ServiceWorker", {
    value: function ServiceWorker() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(ServiceWorker);

Object.defineProperties(ServiceWorker.prototype, {
    [Symbol.toStringTag]: {
        value: "ServiceWorker", configurable: true
    }
});

ServiceWorker.prototype.__proto__ = EventTarget.prototype;

ServiceWorker.prototype["postMessage"] = rsvm.browser.ServiceWorker.actor.postMessage;
Object.defineProperty(rsvm.browser.ServiceWorker.actor.postMessage, "length", { value: 1 });


Object.defineProperty(ServiceWorker.prototype, "scriptURL", {
    get: rsvm.browser.ServiceWorker.getter.scriptURL,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorker.getter.scriptURL, "name", {
    value: "get scriptURL"
});
Object.defineProperty(ServiceWorker.prototype, "state", {
    get: rsvm.browser.ServiceWorker.getter.state,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorker.getter.state, "name", {
    value: "get state"
});
Object.defineProperty(ServiceWorker.prototype, "onstatechange", {
    get: rsvm.browser.ServiceWorker.getter.onstatechange,
    set: rsvm.browser.ServiceWorker.setter.onstatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorker.getter.onstatechange, "name", {
    value: "get onstatechange"
});
Object.defineProperty(rsvm.browser.ServiceWorker.setter.onstatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.ServiceWorker.setter.onstatechange, "name", {
    value: "set onstatechange"
});
Object.defineProperty(ServiceWorker.prototype, "onerror", {
    get: rsvm.browser.ServiceWorker.getter.onerror,
    set: rsvm.browser.ServiceWorker.setter.onerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorker.getter.onerror, "name", {
    value: "get onerror"
});
Object.defineProperty(rsvm.browser.ServiceWorker.setter.onerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.ServiceWorker.setter.onerror, "name", {
    value: "set onerror"
});


for (const key in rsvm.browser.ServiceWorker.getter) {
    rsvm.safefunction(rsvm.browser.ServiceWorker.getter[key]);
}
for (const key in rsvm.browser.ServiceWorker.setter) {
    rsvm.safefunction(rsvm.browser.ServiceWorker.setter[key]);
}
for (const key in rsvm.browser.ServiceWorker.actor) {
    rsvm.safefunction(rsvm.browser.ServiceWorker.actor[key]);
};


ServiceWorker = rsvm.proxy(ServiceWorker);