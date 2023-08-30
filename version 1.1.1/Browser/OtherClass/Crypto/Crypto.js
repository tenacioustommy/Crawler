Object.defineProperty(this, "Crypto", {
    value: function Crypto() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Crypto);

Object.defineProperties(Crypto.prototype, {
    [Symbol.toStringTag]: {
        value: "Crypto", configurable: true
    }
});

Crypto.prototype["getRandomValues"] = rsvm.browser.Crypto.actor.getRandomValues;
Object.defineProperty(rsvm.browser.Crypto.actor.getRandomValues, "length", { value: 1 });
Crypto.prototype["randomUUID"] = rsvm.browser.Crypto.actor.randomUUID;
Object.defineProperty(rsvm.browser.Crypto.actor.randomUUID, "length", { value: 0 });


Object.defineProperty(Crypto.prototype, "subtle", {
    get: rsvm.browser.Crypto.getter.subtle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Crypto.getter.subtle, "name", {
    value: "get subtle"
});


for (const key in rsvm.browser.Crypto.getter) {
    rsvm.safefunction(rsvm.browser.Crypto.getter[key]);
}
for (const key in rsvm.browser.Crypto.setter) {
    rsvm.safefunction(rsvm.browser.Crypto.setter[key]);
}
for (const key in rsvm.browser.Crypto.actor) {
    rsvm.safefunction(rsvm.browser.Crypto.actor[key]);
};


Crypto = rsvm.proxy(Crypto);

crypto = Object.create(Crypto.prototype);