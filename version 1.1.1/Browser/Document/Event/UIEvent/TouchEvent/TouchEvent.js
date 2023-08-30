Object.defineProperty(this, "TouchEvent", {
    value: function TouchEvent() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("TouchEvent");
        }
        this.isTrusted = false;
        var memory = { dogID: this };
        for (const key in rsvm.browser.Event.memory) {
            memory[key] = rsvm.browser.Event.memory[key];
        }
        for (const key in rsvm.browser.UIEvent.memory) {
            memory[key] = rsvm.browser.UIEvent.memory[key];
        }
        for (const key in rsvm.browser.TouchEvent.memory) {
            memory[key] = rsvm.browser.TouchEvent.memory[key];
        }
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(TouchEvent);

Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "TouchEvent", configurable: true
    }
});

TouchEvent.prototype.__proto__ = UIEvent.prototype;

TouchEvent.prototype.NONE = TouchEvent.NONE = 0;
TouchEvent.prototype.CAPTURING_PHASE = TouchEvent.CAPTURING_PHASE = 1;
TouchEvent.prototype.AT_TARGET = TouchEvent.AT_TARGET = 2;
TouchEvent.prototype.BUBBLING_PHASE = TouchEvent.BUBBLING_PHASE = 3;


Object.defineProperty(TouchEvent.prototype, "touches", {
    get: rsvm.browser.TouchEvent.getter.touches,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.touches, "name", {
    value: "get touches"
});
Object.defineProperty(TouchEvent.prototype, "targetTouches", {
    get: rsvm.browser.TouchEvent.getter.targetTouches,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.targetTouches, "name", {
    value: "get targetTouches"
});
Object.defineProperty(TouchEvent.prototype, "changedTouches", {
    get: rsvm.browser.TouchEvent.getter.changedTouches,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.changedTouches, "name", {
    value: "get changedTouches"
});
Object.defineProperty(TouchEvent.prototype, "altKey", {
    get: rsvm.browser.TouchEvent.getter.altKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.altKey, "name", {
    value: "get altKey"
});
Object.defineProperty(TouchEvent.prototype, "metaKey", {
    get: rsvm.browser.TouchEvent.getter.metaKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.metaKey, "name", {
    value: "get metaKey"
});
Object.defineProperty(TouchEvent.prototype, "ctrlKey", {
    get: rsvm.browser.TouchEvent.getter.ctrlKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.ctrlKey, "name", {
    value: "get ctrlKey"
});
Object.defineProperty(TouchEvent.prototype, "shiftKey", {
    get: rsvm.browser.TouchEvent.getter.shiftKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.TouchEvent.getter.shiftKey, "name", {
    value: "get shiftKey"
});


for (const key in rsvm.browser.TouchEvent.getter) {
    rsvm.safefunction(rsvm.browser.TouchEvent.getter[key]);
}
for (const key in rsvm.browser.TouchEvent.setter) {
    rsvm.safefunction(rsvm.browser.TouchEvent.setter[key]);
}
for (const key in rsvm.browser.TouchEvent.actor) {
    rsvm.safefunction(rsvm.browser.TouchEvent.actor[key]);
};


TouchEvent = rsvm.proxy(TouchEvent);