Object.defineProperty(this, "Clipboard", {
    value: function Clipboard() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Clipboard);

Object.defineProperties(Clipboard.prototype, {
    [Symbol.toStringTag]: {
        value: "Clipboard", configurable: true
    }
});

Clipboard.prototype.__proto__ = EventTarget.prototype;

Clipboard.prototype["read"] = rsvm.browser.Clipboard.actor.read;
Object.defineProperty(rsvm.browser.Clipboard.actor.read, "length", { value: 0 });
Clipboard.prototype["readText"] = rsvm.browser.Clipboard.actor.readText;
Object.defineProperty(rsvm.browser.Clipboard.actor.readText, "length", { value: 0 });
Clipboard.prototype["write"] = rsvm.browser.Clipboard.actor.write;
Object.defineProperty(rsvm.browser.Clipboard.actor.write, "length", { value: 1 });
Clipboard.prototype["writeText"] = rsvm.browser.Clipboard.actor.writeText;
Object.defineProperty(rsvm.browser.Clipboard.actor.writeText, "length", { value: 1 });




for (const key in rsvm.browser.Clipboard.getter) {
    rsvm.safefunction(rsvm.browser.Clipboard.getter[key]);
}
for (const key in rsvm.browser.Clipboard.setter) {
    rsvm.safefunction(rsvm.browser.Clipboard.setter[key]);
}
for (const key in rsvm.browser.Clipboard.actor) {
    rsvm.safefunction(rsvm.browser.Clipboard.actor[key]);
};


Clipboard = rsvm.proxy(Clipboard);