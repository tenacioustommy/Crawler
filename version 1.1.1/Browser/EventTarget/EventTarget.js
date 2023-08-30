Object.defineProperty(this, "EventTarget", {
    value: function EventTarget() { }
}); rsvm.safefunction(EventTarget);

// EventTarget.prototype = {}

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget", configurable: true
    }
});

EventTarget.prototype["addEventListener"] = rsvm.browser.EventTarget.actor.addEventListener;
Object.defineProperty(rsvm.browser.EventTarget.actor.addEventListener, "length", { value: 2 });
EventTarget.prototype["dispatchEvent"] = rsvm.browser.EventTarget.actor.dispatchEvent;
Object.defineProperty(rsvm.browser.EventTarget.actor.dispatchEvent, "length", { value: 1 });
EventTarget.prototype["removeEventListener"] = rsvm.browser.EventTarget.actor.removeEventListener;
Object.defineProperty(rsvm.browser.EventTarget.actor.removeEventListener, "length", { value: 2 });

for (const key in rsvm.browser.EventTarget.getter) {
    rsvm.safefunction(rsvm.browser.EventTarget.getter[key]);
}
for (const key in rsvm.browser.EventTarget.setter) {
    rsvm.safefunction(rsvm.browser.EventTarget.setter[key]);
}
for (const key in rsvm.browser.EventTarget.actor) {
    rsvm.safefunction(rsvm.browser.EventTarget.actor[key]);
};


EventTarget = rsvm.proxy(EventTarget);