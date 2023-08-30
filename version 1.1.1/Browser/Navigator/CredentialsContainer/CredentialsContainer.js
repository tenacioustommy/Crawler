Object.defineProperty(this, "CredentialsContainer", {
    value: function CredentialsContainer() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(CredentialsContainer);

Object.defineProperties(CredentialsContainer.prototype, {
    [Symbol.toStringTag]: {
        value: "CredentialsContainer", configurable: true
    }
});

CredentialsContainer.prototype["create"] = rsvm.browser.CredentialsContainer.actor.create;
Object.defineProperty(rsvm.browser.CredentialsContainer.actor.create, "length", { value: 0 });
CredentialsContainer.prototype["get"] = rsvm.browser.CredentialsContainer.actor.get;
Object.defineProperty(rsvm.browser.CredentialsContainer.actor.get, "length", { value: 0 });
CredentialsContainer.prototype["preventSilentAccess"] = rsvm.browser.CredentialsContainer.actor.preventSilentAccess;
Object.defineProperty(rsvm.browser.CredentialsContainer.actor.preventSilentAccess, "length", { value: 0 });
CredentialsContainer.prototype["store"] = rsvm.browser.CredentialsContainer.actor.store;
Object.defineProperty(rsvm.browser.CredentialsContainer.actor.store, "length", { value: 1 });




for (const key in rsvm.browser.CredentialsContainer.getter) {
    rsvm.safefunction(rsvm.browser.CredentialsContainer.getter[key]);
}
for (const key in rsvm.browser.CredentialsContainer.setter) {
    rsvm.safefunction(rsvm.browser.CredentialsContainer.setter[key]);
}
for (const key in rsvm.browser.CredentialsContainer.actor) {
    rsvm.safefunction(rsvm.browser.CredentialsContainer.actor[key]);
};


CredentialsContainer = rsvm.proxy(CredentialsContainer);