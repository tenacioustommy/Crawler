Object.defineProperty(this, "MouseEvent", {
    value: function MouseEvent() {
        if (arguments[0] == undefined) {
            rsvm.throwErrorEvent("MouseEvent");
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
        memory["type"] = arguments[0];
        rsvm.browser.Event.subObject.push(memory);
    }
}); rsvm.safefunction(MouseEvent);

Object.defineProperties(MouseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: "MouseEvent", configurable: true
    }
});

MouseEvent.prototype.__proto__ = UIEvent.prototype;

MouseEvent.prototype["getModifierState"] = rsvm.browser.MouseEvent.actor.getModifierState;
Object.defineProperty(rsvm.browser.MouseEvent.actor.getModifierState, "length", { value: 1 });
MouseEvent.prototype["initMouseEvent"] = rsvm.browser.MouseEvent.actor.initMouseEvent;
Object.defineProperty(rsvm.browser.MouseEvent.actor.initMouseEvent, "length", { value: 1 });


Object.defineProperty(MouseEvent.prototype, "screenX", {
    get: rsvm.browser.MouseEvent.getter.screenX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.screenX, "name", {
    value: "get screenX"
});
Object.defineProperty(MouseEvent.prototype, "screenY", {
    get: rsvm.browser.MouseEvent.getter.screenY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.screenY, "name", {
    value: "get screenY"
});
Object.defineProperty(MouseEvent.prototype, "clientX", {
    get: rsvm.browser.MouseEvent.getter.clientX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.clientX, "name", {
    value: "get clientX"
});
Object.defineProperty(MouseEvent.prototype, "clientY", {
    get: rsvm.browser.MouseEvent.getter.clientY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.clientY, "name", {
    value: "get clientY"
});
Object.defineProperty(MouseEvent.prototype, "ctrlKey", {
    get: rsvm.browser.MouseEvent.getter.ctrlKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.ctrlKey, "name", {
    value: "get ctrlKey"
});
Object.defineProperty(MouseEvent.prototype, "shiftKey", {
    get: rsvm.browser.MouseEvent.getter.shiftKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.shiftKey, "name", {
    value: "get shiftKey"
});
Object.defineProperty(MouseEvent.prototype, "altKey", {
    get: rsvm.browser.MouseEvent.getter.altKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.altKey, "name", {
    value: "get altKey"
});
Object.defineProperty(MouseEvent.prototype, "metaKey", {
    get: rsvm.browser.MouseEvent.getter.metaKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.metaKey, "name", {
    value: "get metaKey"
});
Object.defineProperty(MouseEvent.prototype, "button", {
    get: rsvm.browser.MouseEvent.getter.button,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.button, "name", {
    value: "get button"
});
Object.defineProperty(MouseEvent.prototype, "buttons", {
    get: rsvm.browser.MouseEvent.getter.buttons,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.buttons, "name", {
    value: "get buttons"
});
Object.defineProperty(MouseEvent.prototype, "relatedTarget", {
    get: rsvm.browser.MouseEvent.getter.relatedTarget,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.relatedTarget, "name", {
    value: "get relatedTarget"
});
Object.defineProperty(MouseEvent.prototype, "pageX", {
    get: rsvm.browser.MouseEvent.getter.pageX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.pageX, "name", {
    value: "get pageX"
});
Object.defineProperty(MouseEvent.prototype, "pageY", {
    get: rsvm.browser.MouseEvent.getter.pageY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.pageY, "name", {
    value: "get pageY"
});
Object.defineProperty(MouseEvent.prototype, "x", {
    get: rsvm.browser.MouseEvent.getter.x,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.x, "name", {
    value: "get x"
});
Object.defineProperty(MouseEvent.prototype, "y", {
    get: rsvm.browser.MouseEvent.getter.y,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.y, "name", {
    value: "get y"
});
Object.defineProperty(MouseEvent.prototype, "offsetX", {
    get: rsvm.browser.MouseEvent.getter.offsetX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.offsetX, "name", {
    value: "get offsetX"
});
Object.defineProperty(MouseEvent.prototype, "offsetY", {
    get: rsvm.browser.MouseEvent.getter.offsetY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.offsetY, "name", {
    value: "get offsetY"
});
Object.defineProperty(MouseEvent.prototype, "movementX", {
    get: rsvm.browser.MouseEvent.getter.movementX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.movementX, "name", {
    value: "get movementX"
});
Object.defineProperty(MouseEvent.prototype, "movementY", {
    get: rsvm.browser.MouseEvent.getter.movementY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.movementY, "name", {
    value: "get movementY"
});
Object.defineProperty(MouseEvent.prototype, "fromElement", {
    get: rsvm.browser.MouseEvent.getter.fromElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.fromElement, "name", {
    value: "get fromElement"
});
Object.defineProperty(MouseEvent.prototype, "toElement", {
    get: rsvm.browser.MouseEvent.getter.toElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.toElement, "name", {
    value: "get toElement"
});
Object.defineProperty(MouseEvent.prototype, "layerX", {
    get: rsvm.browser.MouseEvent.getter.layerX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.layerX, "name", {
    value: "get layerX"
});
Object.defineProperty(MouseEvent.prototype, "layerY", {
    get: rsvm.browser.MouseEvent.getter.layerY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MouseEvent.getter.layerY, "name", {
    value: "get layerY"
});

for (const key in rsvm.browser.MouseEvent.getter) {
    rsvm.safefunction(rsvm.browser.MouseEvent.getter[key]);
}
for (const key in rsvm.browser.MouseEvent.setter) {
    rsvm.safefunction(rsvm.browser.MouseEvent.setter[key]);
}
for (const key in rsvm.browser.MouseEvent.actor) {
    rsvm.safefunction(rsvm.browser.MouseEvent.actor[key]);
};

MouseEvent = rsvm.proxy(MouseEvent);