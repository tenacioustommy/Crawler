Object.defineProperty(this, "UserActivation", {
    value: function UserActivation() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(UserActivation);

Object.defineProperties(UserActivation.prototype, {
    [Symbol.toStringTag]: {
        value: "UserActivation", configurable: true
    }
});



Object.defineProperty(UserActivation.prototype, "hasBeenActive", {
    get: rsvm.browser.UserActivation.getter.hasBeenActive,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.UserActivation.getter.hasBeenActive, "name", {
    value: "get hasBeenActive"
});
Object.defineProperty(UserActivation.prototype, "isActive", {
    get: rsvm.browser.UserActivation.getter.isActive,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.UserActivation.getter.isActive, "name", {
    value: "get isActive"
});


for (const key in rsvm.browser.UserActivation.getter) {
    rsvm.safefunction(rsvm.browser.UserActivation.getter[key]);
}
for (const key in rsvm.browser.UserActivation.setter) {
    rsvm.safefunction(rsvm.browser.UserActivation.setter[key]);
}
for (const key in rsvm.browser.UserActivation.actor) {
    rsvm.safefunction(rsvm.browser.UserActivation.actor[key]);
};


UserActivation = rsvm.proxy(UserActivation);