Object.defineProperty(this, "Request", {
    value: function Request() {
        // rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Request);

Object.defineProperties(Request.prototype, {
    [Symbol.toStringTag]: {
        value: "Request", configurable: true
    }
});

Request.prototype["arrayBuffer"] = rsvm.browser.Request.actor.arrayBuffer;
Object.defineProperty(rsvm.browser.Request.actor.arrayBuffer, "length", { value: 0 });
Request.prototype["blob"] = rsvm.browser.Request.actor.blob;
Object.defineProperty(rsvm.browser.Request.actor.blob, "length", { value: 0 });
Request.prototype["clone"] = rsvm.browser.Request.actor.clone;
Object.defineProperty(rsvm.browser.Request.actor.clone, "length", { value: 0 });
Request.prototype["formData"] = rsvm.browser.Request.actor.formData;
Object.defineProperty(rsvm.browser.Request.actor.formData, "length", { value: 0 });
Request.prototype["json"] = rsvm.browser.Request.actor.json;
Object.defineProperty(rsvm.browser.Request.actor.json, "length", { value: 0 });
Request.prototype["text"] = rsvm.browser.Request.actor.text;
Object.defineProperty(rsvm.browser.Request.actor.text, "length", { value: 0 });


Object.defineProperty(Request.prototype, "method", {
    get: rsvm.browser.Request.getter.method,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.method, "name", {
    value: "get method"
});
Object.defineProperty(Request.prototype, "url", {
    get: rsvm.browser.Request.getter.url,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.url, "name", {
    value: "get url"
});
Object.defineProperty(Request.prototype, "headers", {
    get: rsvm.browser.Request.getter.headers,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.headers, "name", {
    value: "get headers"
});
Object.defineProperty(Request.prototype, "destination", {
    get: rsvm.browser.Request.getter.destination,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.destination, "name", {
    value: "get destination"
});
Object.defineProperty(Request.prototype, "referrer", {
    get: rsvm.browser.Request.getter.referrer,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.referrer, "name", {
    value: "get referrer"
});
Object.defineProperty(Request.prototype, "referrerPolicy", {
    get: rsvm.browser.Request.getter.referrerPolicy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.referrerPolicy, "name", {
    value: "get referrerPolicy"
});
Object.defineProperty(Request.prototype, "mode", {
    get: rsvm.browser.Request.getter.mode,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.mode, "name", {
    value: "get mode"
});
Object.defineProperty(Request.prototype, "credentials", {
    get: rsvm.browser.Request.getter.credentials,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.credentials, "name", {
    value: "get credentials"
});
Object.defineProperty(Request.prototype, "cache", {
    get: rsvm.browser.Request.getter.cache,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.cache, "name", {
    value: "get cache"
});
Object.defineProperty(Request.prototype, "redirect", {
    get: rsvm.browser.Request.getter.redirect,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.redirect, "name", {
    value: "get redirect"
});
Object.defineProperty(Request.prototype, "integrity", {
    get: rsvm.browser.Request.getter.integrity,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.integrity, "name", {
    value: "get integrity"
});
Object.defineProperty(Request.prototype, "keepalive", {
    get: rsvm.browser.Request.getter.keepalive,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.keepalive, "name", {
    value: "get keepalive"
});
Object.defineProperty(Request.prototype, "signal", {
    get: rsvm.browser.Request.getter.signal,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.signal, "name", {
    value: "get signal"
});
Object.defineProperty(Request.prototype, "isHistoryNavigation", {
    get: rsvm.browser.Request.getter.isHistoryNavigation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.isHistoryNavigation, "name", {
    value: "get isHistoryNavigation"
});
Object.defineProperty(Request.prototype, "bodyUsed", {
    get: rsvm.browser.Request.getter.bodyUsed,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.bodyUsed, "name", {
    value: "get bodyUsed"
});
Object.defineProperty(Request.prototype, "body", {
    get: rsvm.browser.Request.getter.body,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Request.getter.body, "name", {
    value: "get body"
});


for (const key in rsvm.browser.Request.getter) {
    rsvm.safefunction(rsvm.browser.Request.getter[key]);
}
for (const key in rsvm.browser.Request.setter) {
    rsvm.safefunction(rsvm.browser.Request.setter[key]);
}
for (const key in rsvm.browser.Request.actor) {
    rsvm.safefunction(rsvm.browser.Request.actor[key]);
};


Request = rsvm.proxy(Request);