Object.defineProperty(this, "Bluetooth", {
    value: function Bluetooth() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Bluetooth);

Object.defineProperties(Bluetooth.prototype, {
    [Symbol.toStringTag]: {
        value: "Bluetooth", configurable: true
    }
});

Bluetooth.prototype.__proto__ = EventTarget.prototype;


Bluetooth.prototype["getAvailability"] = rsvm.browser.Bluetooth.actor.getAvailability;
Object.defineProperty(rsvm.browser.Bluetooth.actor.getAvailability, "length", { value: 0 });
Bluetooth.prototype["requestDevice"] = rsvm.browser.Bluetooth.actor.requestDevice;
Object.defineProperty(rsvm.browser.Bluetooth.actor.requestDevice, "length", { value: 0 });

for (const key in rsvm.browser.Bluetooth.getter) {
    rsvm.safefunction(rsvm.browser.Bluetooth.getter[key]);
}
for (const key in rsvm.browser.Bluetooth.setter) {
    rsvm.safefunction(rsvm.browser.Bluetooth.setter[key]);
}
for (const key in rsvm.browser.Bluetooth.actor) {
    rsvm.safefunction(rsvm.browser.Bluetooth.actor[key]);
};

Bluetooth = rsvm.proxy(Bluetooth);