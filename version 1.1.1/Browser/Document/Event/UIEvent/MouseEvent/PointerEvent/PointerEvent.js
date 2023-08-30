Object.defineProperty(this, "PointerEvent", {
    value: function PointerEvent() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("PointerEvent");
        }
        this.isTrusted = false;
        var memory = { dogID: this };
        for (const key in rsvm.browser.Event.memory) {
            memory[key] = rsvm.browser.Event.memory[key];
        }
        for (const key in rsvm.browser.UIEvent.memory) {
            memory[key] = rsvm.browser.UIEvent.memory[key];
        }
        for (const key in rsvm.browser.MouseEvent.memory) {
            memory[key] = rsvm.browser.MouseEvent.memory[key];
        }
        for (const key in rsvm.browser.PointerEvent.memory) {
            memory[key] = rsvm.browser.PointerEvent.memory[key];
        }
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(PointerEvent);

Object.defineProperties(PointerEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "PointerEvent", configurable: true
    }
});

PointerEvent.prototype.__proto__ = MouseEvent.prototype;

PointerEvent.prototype.NONE = PointerEvent.NONE = 0;
PointerEvent.prototype.CAPTURING_PHASE = PointerEvent.CAPTURING_PHASE = 1;
PointerEvent.prototype.AT_TARGET = PointerEvent.AT_TARGET = 2;
PointerEvent.prototype.BUBBLING_PHASE = PointerEvent.BUBBLING_PHASE = 3;
PointerEvent.prototype["getCoalescedEvents"] = rsvm.browser.PointerEvent.actor.getCoalescedEvents;
Object.defineProperty(rsvm.browser.PointerEvent.actor.getCoalescedEvents, "length", { value: 0 });
PointerEvent.prototype["getPredictedEvents"] = rsvm.browser.PointerEvent.actor.getPredictedEvents;
Object.defineProperty(rsvm.browser.PointerEvent.actor.getPredictedEvents, "length", { value: 0 });


Object.defineProperty(PointerEvent.prototype, "pointerId", {
    get: rsvm.browser.PointerEvent.getter.pointerId,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.pointerId, "name", {
    value: "get pointerId"
});
Object.defineProperty(PointerEvent.prototype, "width", {
    get: rsvm.browser.PointerEvent.getter.width,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.width, "name", {
    value: "get width"
});
Object.defineProperty(PointerEvent.prototype, "height", {
    get: rsvm.browser.PointerEvent.getter.height,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.height, "name", {
    value: "get height"
});
Object.defineProperty(PointerEvent.prototype, "pressure", {
    get: rsvm.browser.PointerEvent.getter.pressure,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.pressure, "name", {
    value: "get pressure"
});
Object.defineProperty(PointerEvent.prototype, "tiltX", {
    get: rsvm.browser.PointerEvent.getter.tiltX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.tiltX, "name", {
    value: "get tiltX"
});
Object.defineProperty(PointerEvent.prototype, "tiltY", {
    get: rsvm.browser.PointerEvent.getter.tiltY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.tiltY, "name", {
    value: "get tiltY"
});
Object.defineProperty(PointerEvent.prototype, "azimuthAngle", {
    get: rsvm.browser.PointerEvent.getter.azimuthAngle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.azimuthAngle, "name", {
    value: "get azimuthAngle"
});
Object.defineProperty(PointerEvent.prototype, "altitudeAngle", {
    get: rsvm.browser.PointerEvent.getter.altitudeAngle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.altitudeAngle, "name", {
    value: "get altitudeAngle"
});
Object.defineProperty(PointerEvent.prototype, "tangentialPressure", {
    get: rsvm.browser.PointerEvent.getter.tangentialPressure,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.tangentialPressure, "name", {
    value: "get tangentialPressure"
});
Object.defineProperty(PointerEvent.prototype, "twist", {
    get: rsvm.browser.PointerEvent.getter.twist,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.twist, "name", {
    value: "get twist"
});
Object.defineProperty(PointerEvent.prototype, "pointerType", {
    get: rsvm.browser.PointerEvent.getter.pointerType,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.pointerType, "name", {
    value: "get pointerType"
});
Object.defineProperty(PointerEvent.prototype, "isPrimary", {
    get: rsvm.browser.PointerEvent.getter.isPrimary,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.PointerEvent.getter.isPrimary, "name", {
    value: "get isPrimary"
});


for (const key in rsvm.browser.PointerEvent.getter) {
    rsvm.safefunction(rsvm.browser.PointerEvent.getter[key]);
}
for (const key in rsvm.browser.PointerEvent.setter) {
    rsvm.safefunction(rsvm.browser.PointerEvent.setter[key]);
}
for (const key in rsvm.browser.PointerEvent.actor) {
    rsvm.safefunction(rsvm.browser.PointerEvent.actor[key]);
};


PointerEvent = rsvm.proxy(PointerEvent);