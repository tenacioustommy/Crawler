Object.defineProperty(this, "NetworkInformation", {
    value: function NetworkInformation() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(NetworkInformation);

Object.defineProperties(NetworkInformation.prototype, {
    [Symbol.toStringTag]: {
        value: "NetworkInformation", configurable: true
    }
});

NetworkInformation.prototype.__proto__ = EventTarget.prototype;

Object.defineProperty(NetworkInformation.prototype, "onchange", {
    get: rsvm.browser.NetworkInformation.getter.onchange,
    set: rsvm.browser.NetworkInformation.setter.onchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NetworkInformation.getter.onchange, "name", {
    value: "get onchange"
});
Object.defineProperty(rsvm.browser.NetworkInformation.setter.onchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.NetworkInformation.setter.onchange, "name", {
    value: "set onchange"
});
Object.defineProperty(NetworkInformation.prototype, "effectiveType", {
    get: rsvm.browser.NetworkInformation.getter.effectiveType,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NetworkInformation.getter.effectiveType, "name", {
    value: "get effectiveType"
});
Object.defineProperty(NetworkInformation.prototype, "rtt", {
    get: rsvm.browser.NetworkInformation.getter.rtt,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NetworkInformation.getter.rtt, "name", {
    value: "get rtt"
});
Object.defineProperty(NetworkInformation.prototype, "downlink", {
    get: rsvm.browser.NetworkInformation.getter.downlink,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NetworkInformation.getter.downlink, "name", {
    value: "get downlink"
});
Object.defineProperty(NetworkInformation.prototype, "saveData", {
    get: rsvm.browser.NetworkInformation.getter.saveData,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.NetworkInformation.getter.saveData, "name", {
    value: "get saveData"
});


for (const key in rsvm.browser.NetworkInformation.getter) {
    rsvm.safefunction(rsvm.browser.NetworkInformation.getter[key]);
}
for (const key in rsvm.browser.NetworkInformation.setter) {
    rsvm.safefunction(rsvm.browser.NetworkInformation.setter[key]);
}
for (const key in rsvm.browser.NetworkInformation.actor) {
    rsvm.safefunction(rsvm.browser.NetworkInformation.actor[key]);
};


NetworkInformation = rsvm.proxy(NetworkInformation);