Object.defineProperty(this, "DeviceOrientationEvent", {
    value: function DeviceOrientationEvent() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("DeviceOrientationEvent");
        }
        this.isTrusted = false;
        var memory = {dogID: this};
        for (const key in rsvm.browser.Event.memory){
            memory[key] = rsvm.browser.Event.memory[key];
        }
        for (const key in rsvm.browser.DeviceOrientationEvent.memory){
            memory[key] = rsvm.browser.DeviceOrientationEvent.memory[key];
        }
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(DeviceOrientationEvent);

Object.defineProperties(DeviceOrientationEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "DeviceOrientationEvent", configurable: true
    }
});

DeviceOrientationEvent.prototype.__proto__ = Event.prototype;

DeviceOrientationEvent.prototype.NONE = DeviceOrientationEvent.NONE = 0;
DeviceOrientationEvent.prototype.CAPTURING_PHASE = DeviceOrientationEvent.CAPTURING_PHASE = 1;
DeviceOrientationEvent.prototype.AT_TARGET = DeviceOrientationEvent.AT_TARGET = 2;
DeviceOrientationEvent.prototype.BUBBLING_PHASE = DeviceOrientationEvent.BUBBLING_PHASE = 3;


Object.defineProperty(DeviceOrientationEvent.prototype, "alpha", {
    get: rsvm.browser.DeviceOrientationEvent.getter.alpha,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceOrientationEvent.getter.alpha, "name", {
    value: "get alpha"
});
Object.defineProperty(DeviceOrientationEvent.prototype, "beta", {
    get: rsvm.browser.DeviceOrientationEvent.getter.beta,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceOrientationEvent.getter.beta, "name", {
    value: "get beta"
});
Object.defineProperty(DeviceOrientationEvent.prototype, "gamma", {
    get: rsvm.browser.DeviceOrientationEvent.getter.gamma,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceOrientationEvent.getter.gamma, "name", {
    value: "get gamma"
});
Object.defineProperty(DeviceOrientationEvent.prototype, "absolute", {
    get: rsvm.browser.DeviceOrientationEvent.getter.absolute,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceOrientationEvent.getter.absolute, "name", {
    value: "get absolute"
});


for (const key in rsvm.browser.DeviceOrientationEvent.getter) {
    rsvm.safefunction(rsvm.browser.DeviceOrientationEvent.getter[key]);
}
for (const key in rsvm.browser.DeviceOrientationEvent.setter) {
    rsvm.safefunction(rsvm.browser.DeviceOrientationEvent.setter[key]);
}
for (const key in rsvm.browser.DeviceOrientationEvent.actor) {
    rsvm.safefunction(rsvm.browser.DeviceOrientationEvent.actor[key]);
};


DeviceOrientationEvent = rsvm.proxy(DeviceOrientationEvent);