Object.defineProperty(this, "DeviceMotionEvent", {
    value: function DeviceMotionEvent() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("DeviceMotionEvent");
        }
        this.isTrusted = false;
        var memory = {dogID: this};
        for (const key in rsvm.browser.Event.memory){
            memory[key] = rsvm.browser.Event.memory[key];
        }
        for (const key in rsvm.browser.DeviceMotionEvent.memory){
            memory[key] = rsvm.browser.DeviceMotionEvent.memory[key];
        }
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(DeviceMotionEvent);

Object.defineProperties(DeviceMotionEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "DeviceMotionEvent", configurable: true
    }
});

DeviceMotionEvent.prototype.__proto__ = Event.prototype;

DeviceMotionEvent.prototype.NONE = DeviceMotionEvent.NONE = 0;
DeviceMotionEvent.prototype.CAPTURING_PHASE = DeviceMotionEvent.CAPTURING_PHASE = 1;
DeviceMotionEvent.prototype.AT_TARGET = DeviceMotionEvent.AT_TARGET = 2;
DeviceMotionEvent.prototype.BUBBLING_PHASE = DeviceMotionEvent.BUBBLING_PHASE = 3;


Object.defineProperty(DeviceMotionEvent.prototype, "acceleration", {
    get: rsvm.browser.DeviceMotionEvent.getter.acceleration,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceMotionEvent.getter.acceleration, "name", {
    value: "get acceleration"
});
Object.defineProperty(DeviceMotionEvent.prototype, "accelerationIncludingGravity", {
    get: rsvm.browser.DeviceMotionEvent.getter.accelerationIncludingGravity,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceMotionEvent.getter.accelerationIncludingGravity, "name", {
    value: "get accelerationIncludingGravity"
});
Object.defineProperty(DeviceMotionEvent.prototype, "rotationRate", {
    get: rsvm.browser.DeviceMotionEvent.getter.rotationRate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceMotionEvent.getter.rotationRate, "name", {
    value: "get rotationRate"
});
Object.defineProperty(DeviceMotionEvent.prototype, "interval", {
    get: rsvm.browser.DeviceMotionEvent.getter.interval,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DeviceMotionEvent.getter.interval, "name", {
    value: "get interval"
});


for (const key in rsvm.browser.DeviceMotionEvent.getter) {
    rsvm.safefunction(rsvm.browser.DeviceMotionEvent.getter[key]);
}
for (const key in rsvm.browser.DeviceMotionEvent.setter) {
    rsvm.safefunction(rsvm.browser.DeviceMotionEvent.setter[key]);
}
for (const key in rsvm.browser.DeviceMotionEvent.actor) {
    rsvm.safefunction(rsvm.browser.DeviceMotionEvent.actor[key]);
};


DeviceMotionEvent = rsvm.proxy(DeviceMotionEvent);