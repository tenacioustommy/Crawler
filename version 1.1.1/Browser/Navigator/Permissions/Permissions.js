Object.defineProperty(this, "Permissions", {
    value: function Permissions() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Permissions);

Object.defineProperties(Permissions.prototype, {
    [Symbol.toStringTag]: {
        value: "Permissions", configurable: true
    }
});

Permissions.prototype["query"] = rsvm.browser.Permissions.actor.query;
Object.defineProperty(rsvm.browser.Permissions.actor.query, "length", { value: 1 });




for (const key in rsvm.browser.Permissions.getter) {
    rsvm.safefunction(rsvm.browser.Permissions.getter[key]);
}
for (const key in rsvm.browser.Permissions.setter) {
    rsvm.safefunction(rsvm.browser.Permissions.setter[key]);
}
for (const key in rsvm.browser.Permissions.actor) {
    rsvm.safefunction(rsvm.browser.Permissions.actor[key]);
};


Permissions = rsvm.proxy(Permissions);