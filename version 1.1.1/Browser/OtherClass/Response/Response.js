Object.defineProperty(this, "Response", {
    value: function Response() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Response);

Object.defineProperties(Response.prototype, {
    [Symbol.toStringTag]: {
        value: "Response", configurable: true
    }
});

Response.error = function error() { };
Response.json = function json() { };
Response.redirect = function redirect() { };

Response.prototype["arrayBuffer"] = rsvm.browser.Response.actor.arrayBuffer;
Object.defineProperty(rsvm.browser.Response.actor.arrayBuffer, "length", { value: 0 });
Response.prototype["blob"] = rsvm.browser.Response.actor.blob;
Object.defineProperty(rsvm.browser.Response.actor.blob, "length", { value: 0 });
Response.prototype["clone"] = rsvm.browser.Response.actor.clone;
Object.defineProperty(rsvm.browser.Response.actor.clone, "length", { value: 0 });
Response.prototype["formData"] = rsvm.browser.Response.actor.formData;
Object.defineProperty(rsvm.browser.Response.actor.formData, "length", { value: 0 });
Response.prototype["json"] = rsvm.browser.Response.actor.json;
Object.defineProperty(rsvm.browser.Response.actor.json, "length", { value: 0 });
Response.prototype["text"] = rsvm.browser.Response.actor.text;
Object.defineProperty(rsvm.browser.Response.actor.text, "length", { value: 0 });


Object.defineProperty(Response.prototype, "type", {
    get: rsvm.browser.Response.getter.type,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.type, "name", {
    value: "get type"
});
Object.defineProperty(Response.prototype, "url", {
    get: rsvm.browser.Response.getter.url,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.url, "name", {
    value: "get url"
});
Object.defineProperty(Response.prototype, "redirected", {
    get: rsvm.browser.Response.getter.redirected,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.redirected, "name", {
    value: "get redirected"
});
Object.defineProperty(Response.prototype, "status", {
    get: rsvm.browser.Response.getter.status,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.status, "name", {
    value: "get status"
});
Object.defineProperty(Response.prototype, "ok", {
    get: rsvm.browser.Response.getter.ok,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.ok, "name", {
    value: "get ok"
});
Object.defineProperty(Response.prototype, "statusText", {
    get: rsvm.browser.Response.getter.statusText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.statusText, "name", {
    value: "get statusText"
});
Object.defineProperty(Response.prototype, "headers", {
    get: rsvm.browser.Response.getter.headers,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.headers, "name", {
    value: "get headers"
});
Object.defineProperty(Response.prototype, "body", {
    get: rsvm.browser.Response.getter.body,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.body, "name", {
    value: "get body"
});
Object.defineProperty(Response.prototype, "bodyUsed", {
    get: rsvm.browser.Response.getter.bodyUsed,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Response.getter.bodyUsed, "name", {
    value: "get bodyUsed"
});


for (const key in rsvm.browser.Response.getter) {
    rsvm.safefunction(rsvm.browser.Response.getter[key]);
}
for (const key in rsvm.browser.Response.setter) {
    rsvm.safefunction(rsvm.browser.Response.setter[key]);
}
for (const key in rsvm.browser.Response.actor) {
    rsvm.safefunction(rsvm.browser.Response.actor[key]);
};


Response = rsvm.proxy(Response);