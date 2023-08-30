Object.defineProperty(this, "UIEvent", {
    value: function UIEvent() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("UIEvent");
        }
        this.isTrusted = false;
        var memory = {dogID: this};
        for (const key in rsvm.browser.Event.memory){
            memory[key] = rsvm.browser.Event.memory[key];
        }
        for (const key in rsvm.browser.UIEvent.memory){
            memory[key] = rsvm.browser.UIEvent.memory[key];
        }
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(UIEvent);

Object.defineProperties(UIEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "UIEvent", configurable: true
    }
});

UIEvent.prototype.__proto__ = Event.prototype;

UIEvent.prototype["initUIEvent"] = rsvm.browser.UIEvent.actor.initUIEvent;
Object.defineProperty(rsvm.browser.UIEvent.actor.initUIEvent, "length", { value: 1 });


Object.defineProperty(UIEvent.prototype, "view", {
    get: rsvm.browser.UIEvent.getter.view,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.UIEvent.getter.view, "name", {
    value: "get view"
});
Object.defineProperty(UIEvent.prototype, "detail", {
    get: rsvm.browser.UIEvent.getter.detail,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.UIEvent.getter.detail, "name", {
    value: "get detail"
});
Object.defineProperty(UIEvent.prototype, "sourceCapabilities", {
    get: rsvm.browser.UIEvent.getter.sourceCapabilities,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.UIEvent.getter.sourceCapabilities, "name", {
    value: "get sourceCapabilities"
});
Object.defineProperty(UIEvent.prototype, "which", {
    get: rsvm.browser.UIEvent.getter.which,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.UIEvent.getter.which, "name", {
    value: "get which"
});

for (const key in rsvm.browser.UIEvent.getter) {
    rsvm.safefunction(rsvm.browser.UIEvent.getter[key]);
}
for (const key in rsvm.browser.UIEvent.setter) {
    rsvm.safefunction(rsvm.browser.UIEvent.setter[key]);
}
for (const key in rsvm.browser.UIEvent.actor) {
    rsvm.safefunction(rsvm.browser.UIEvent.actor[key]);
};

UIEvent = rsvm.proxy(UIEvent);