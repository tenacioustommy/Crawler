Object.defineProperty(this, "MediaDevices", {
    value: function MediaDevices() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(MediaDevices);

Object.defineProperties(MediaDevices.prototype, {
    [Symbol.toStringTag]: {
        value: "MediaDevices", configurable: true
    }
});

MediaDevices.prototype.__proto__ = EventTarget.prototype;

MediaDevices.prototype["enumerateDevices"] = rsvm.browser.MediaDevices.actor.enumerateDevices;
Object.defineProperty(rsvm.browser.MediaDevices.actor.enumerateDevices, "length", { value: 0 });
MediaDevices.prototype["getSupportedConstraints"] = rsvm.browser.MediaDevices.actor.getSupportedConstraints;
Object.defineProperty(rsvm.browser.MediaDevices.actor.getSupportedConstraints, "length", { value: 0 });
MediaDevices.prototype["getUserMedia"] = rsvm.browser.MediaDevices.actor.getUserMedia;
Object.defineProperty(rsvm.browser.MediaDevices.actor.getUserMedia, "length", { value: 0 });
MediaDevices.prototype["getDisplayMedia"] = rsvm.browser.MediaDevices.actor.getDisplayMedia;
Object.defineProperty(rsvm.browser.MediaDevices.actor.getDisplayMedia, "length", { value: 0 });
MediaDevices.prototype["setCaptureHandleConfig"] = rsvm.browser.MediaDevices.actor.setCaptureHandleConfig;
Object.defineProperty(rsvm.browser.MediaDevices.actor.setCaptureHandleConfig, "length", { value: 0 });


Object.defineProperty(MediaDevices.prototype, "ondevicechange", {
    get: rsvm.browser.MediaDevices.getter.ondevicechange,
    set: rsvm.browser.MediaDevices.setter.ondevicechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.MediaDevices.getter.ondevicechange, "name", {
    value: "get ondevicechange"
});
Object.defineProperty(rsvm.browser.MediaDevices.setter.ondevicechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.MediaDevices.setter.ondevicechange, "name", {
    value: "set ondevicechange"
});


for (const key in rsvm.browser.MediaDevices.getter) {
    rsvm.safefunction(rsvm.browser.MediaDevices.getter[key]);
}
for (const key in rsvm.browser.MediaDevices.setter) {
    rsvm.safefunction(rsvm.browser.MediaDevices.setter[key]);
}
for (const key in rsvm.browser.MediaDevices.actor) {
    rsvm.safefunction(rsvm.browser.MediaDevices.actor[key]);
};


MediaDevices = rsvm.proxy(MediaDevices);