Object.defineProperty(this, "NavigatorUAData", {
    value: function NavigatorUAData() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(NavigatorUAData);

Object.defineProperties(NavigatorUAData.prototype, {
    [Symbol.toStringTag]: {
        value: "NavigatorUAData", configurable: true
    }
});

NavigatorUAData.prototype["getHighEntropyValues"] = rsvm.browser.NavigatorUAData.actor.getHighEntropyValues;
Object.defineProperty(rsvm.browser.NavigatorUAData.actor.getHighEntropyValues, "length", { value: 1 });
NavigatorUAData.prototype["toJSON"] = rsvm.browser.NavigatorUAData.actor.toJSON;
Object.defineProperty(rsvm.browser.NavigatorUAData.actor.toJSON, "length", { value: 0 });


Object.defineProperty(NavigatorUAData.prototype, "brands", {
    get: rsvm.browser.NavigatorUAData.getter.brands,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigatorUAData.getter.brands, "name", {
    value: "get brands"
});
Object.defineProperty(NavigatorUAData.prototype, "mobile", {
    get: rsvm.browser.NavigatorUAData.getter.mobile,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigatorUAData.getter.mobile, "name", {
    value: "get mobile"
});
Object.defineProperty(NavigatorUAData.prototype, "platform", {
    get: rsvm.browser.NavigatorUAData.getter.platform,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NavigatorUAData.getter.platform, "name", {
    value: "get platform"
});


for (const key in rsvm.browser.NavigatorUAData.getter) {
    rsvm.safefunction(rsvm.browser.NavigatorUAData.getter[key]);
}
for (const key in rsvm.browser.NavigatorUAData.setter) {
    rsvm.safefunction(rsvm.browser.NavigatorUAData.setter[key]);
}
for (const key in rsvm.browser.NavigatorUAData.actor) {
    rsvm.safefunction(rsvm.browser.NavigatorUAData.actor[key]);
};


NavigatorUAData = rsvm.proxy(NavigatorUAData);