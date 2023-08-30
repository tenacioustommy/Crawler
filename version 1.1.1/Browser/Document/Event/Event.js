Object.defineProperty(this, "Event", {
    value: function Event() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("Event");
        }
        this.isTrusted = false;
        var memory = {dogID: this};
        for (const key in rsvm.browser.Event.memory){
            memory[key] = rsvm.browser.Event.memory[key];
        }
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(Event);

Object.defineProperties(Event.prototype, {
    [Symbol.toStringTag]: {
        value: "Event", configurable: true
    }
});

Event.prototype.AT_TARGET = Event.AT_TARGET = 1;
Event.prototype.BUBBLING_PHASE = Event.BUBBLING_PHASE = 1;
Event.prototype.CAPTURING_PHASE = Event.CAPTURING_PHASE = 1;
Event.prototype.NONE = Event.NONE = 1;

Event.prototype["composedPath"] = rsvm.browser.Event.actor.composedPath;
Object.defineProperty(rsvm.browser.Event.actor.composedPath, "length", { value: 0 });
Event.prototype["initEvent"] = rsvm.browser.Event.actor.initEvent;
Object.defineProperty(rsvm.browser.Event.actor.initEvent, "length", { value: 1 });
Event.prototype["preventDefault"] = rsvm.browser.Event.actor.preventDefault;
Object.defineProperty(rsvm.browser.Event.actor.preventDefault, "length", { value: 0 });
Event.prototype["stopImmediatePropagation"] = rsvm.browser.Event.actor.stopImmediatePropagation;
Object.defineProperty(rsvm.browser.Event.actor.stopImmediatePropagation, "length", { value: 0 });
Event.prototype["stopPropagation"] = rsvm.browser.Event.actor.stopPropagation;
Object.defineProperty(rsvm.browser.Event.actor.stopPropagation, "length", { value: 0 });


Object.defineProperty(Event.prototype, "type", {
    get: rsvm.browser.Event.getter.type,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.type, "name", {
    value: "get type"
});
Object.defineProperty(Event.prototype, "target", {
    get: rsvm.browser.Event.getter.target,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.target, "name", {
    value: "get target"
});
Object.defineProperty(Event.prototype, "currentTarget", {
    get: rsvm.browser.Event.getter.currentTarget,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.currentTarget, "name", {
    value: "get currentTarget"
});
Object.defineProperty(Event.prototype, "eventPhase", {
    get: rsvm.browser.Event.getter.eventPhase,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.eventPhase, "name", {
    value: "get eventPhase"
});
Object.defineProperty(Event.prototype, "bubbles", {
    get: rsvm.browser.Event.getter.bubbles,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.bubbles, "name", {
    value: "get bubbles"
});
Object.defineProperty(Event.prototype, "cancelable", {
    get: rsvm.browser.Event.getter.cancelable,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.cancelable, "name", {
    value: "get cancelable"
});
Object.defineProperty(Event.prototype, "defaultPrevented", {
    get: rsvm.browser.Event.getter.defaultPrevented,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.defaultPrevented, "name", {
    value: "get defaultPrevented"
});
Object.defineProperty(Event.prototype, "composed", {
    get: rsvm.browser.Event.getter.composed,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.composed, "name", {
    value: "get composed"
});
Object.defineProperty(Event.prototype, "timeStamp", {
    get: rsvm.browser.Event.getter.timeStamp,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.timeStamp, "name", {
    value: "get timeStamp"
});
Object.defineProperty(Event.prototype, "srcElement", {
    get: rsvm.browser.Event.getter.srcElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.srcElement, "name", {
    value: "get srcElement"
});
Object.defineProperty(Event.prototype, "returnValue", {
    get: rsvm.browser.Event.getter.returnValue,
    set: rsvm.browser.Event.setter.returnValue,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.returnValue, "name", {
    value: "get returnValue"
});
Object.defineProperty(rsvm.browser.Event.setter.returnValue, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Event.setter.returnValue, "name", {
    value: "set returnValue"
});
Object.defineProperty(Event.prototype, "cancelBubble", {
    get: rsvm.browser.Event.getter.cancelBubble,
    set: rsvm.browser.Event.setter.cancelBubble,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Event.getter.cancelBubble, "name", {
    value: "get cancelBubble"
});
Object.defineProperty(rsvm.browser.Event.setter.cancelBubble, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Event.setter.cancelBubble, "name", {
    value: "set cancelBubble"
});

for (const key in rsvm.browser.Event.getter) {
    rsvm.safefunction(rsvm.browser.Event.getter[key]);
}
for (const key in rsvm.browser.Event.setter) {
    rsvm.safefunction(rsvm.browser.Event.setter[key]);
}
for (const key in rsvm.browser.Event.actor) {
    rsvm.safefunction(rsvm.browser.Event.actor[key]);
};

Event = rsvm.proxy(Event);