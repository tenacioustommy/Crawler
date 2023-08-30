Object.defineProperty(this, "Navigator", {
    value: function Navigator() {
        rsvm.throwErrorNew("Navigator");
    }
}); rsvm.safefunction(Navigator);

Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: { value: "Navigator", configurable: true }
});

Navigator.prototype["getGamepads"] = rsvm.browser.Navigator.actor.getGamepads;
Object.defineProperty(rsvm.browser.Navigator.actor.getGamepads, "length", { value: 0 });
Navigator.prototype["javaEnabled"] = rsvm.browser.Navigator.actor.javaEnabled;
Object.defineProperty(rsvm.browser.Navigator.actor.javaEnabled, "length", { value: 0 });
Navigator.prototype["sendBeacon"] = rsvm.browser.Navigator.actor.sendBeacon;
Object.defineProperty(rsvm.browser.Navigator.actor.sendBeacon, "length", { value: 1 });
Navigator.prototype["vibrate"] = rsvm.browser.Navigator.actor.vibrate;
Object.defineProperty(rsvm.browser.Navigator.actor.vibrate, "length", { value: 1 });
Navigator.prototype["canShare"] = rsvm.browser.Navigator.actor.canShare;
Object.defineProperty(rsvm.browser.Navigator.actor.canShare, "length", { value: 0 });
Navigator.prototype["share"] = rsvm.browser.Navigator.actor.share;
Object.defineProperty(rsvm.browser.Navigator.actor.share, "length", { value: 0 });
Navigator.prototype["clearAppBadge"] = rsvm.browser.Navigator.actor.clearAppBadge;
Object.defineProperty(rsvm.browser.Navigator.actor.clearAppBadge, "length", { value: 0 });
Navigator.prototype["getBattery"] = rsvm.browser.Navigator.actor.getBattery;
Object.defineProperty(rsvm.browser.Navigator.actor.getBattery, "length", { value: 0 });
Navigator.prototype["getUserMedia"] = rsvm.browser.Navigator.actor.getUserMedia;
Object.defineProperty(rsvm.browser.Navigator.actor.getUserMedia, "length", { value: 3 });
Navigator.prototype["requestMIDIAccess"] = rsvm.browser.Navigator.actor.requestMIDIAccess;
Object.defineProperty(rsvm.browser.Navigator.actor.requestMIDIAccess, "length", { value: 0 });
Navigator.prototype["requestMediaKeySystemAccess"] = rsvm.browser.Navigator.actor.requestMediaKeySystemAccess;
Object.defineProperty(rsvm.browser.Navigator.actor.requestMediaKeySystemAccess, "length", { value: 2 });
Navigator.prototype["setAppBadge"] = rsvm.browser.Navigator.actor.setAppBadge;
Object.defineProperty(rsvm.browser.Navigator.actor.setAppBadge, "length", { value: 0 });
Navigator.prototype["webkitGetUserMedia"] = rsvm.browser.Navigator.actor.webkitGetUserMedia;
Object.defineProperty(rsvm.browser.Navigator.actor.webkitGetUserMedia, "length", { value: 3 });
Navigator.prototype["getInstalledRelatedApps"] = rsvm.browser.Navigator.actor.getInstalledRelatedApps;
Object.defineProperty(rsvm.browser.Navigator.actor.getInstalledRelatedApps, "length", { value: 0 });
Navigator.prototype["registerProtocolHandler"] = rsvm.browser.Navigator.actor.registerProtocolHandler;
Object.defineProperty(rsvm.browser.Navigator.actor.registerProtocolHandler, "length", { value: 2 });
Navigator.prototype["unregisterProtocolHandler"] = rsvm.browser.Navigator.actor.unregisterProtocolHandler;
Object.defineProperty(rsvm.browser.Navigator.actor.unregisterProtocolHandler, "length", { value: 2 });


Object.defineProperty(Navigator.prototype, "vendorSub", {
    get: rsvm.browser.Navigator.getter.vendorSub,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.vendorSub, "name", {
    value: "get vendorSub"
});
Object.defineProperty(Navigator.prototype, "productSub", {
    get: rsvm.browser.Navigator.getter.productSub,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.productSub, "name", {
    value: "get productSub"
});
Object.defineProperty(Navigator.prototype, "vendor", {
    get: rsvm.browser.Navigator.getter.vendor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.vendor, "name", {
    value: "get vendor"
});
Object.defineProperty(Navigator.prototype, "maxTouchPoints", {
    get: rsvm.browser.Navigator.getter.maxTouchPoints,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.maxTouchPoints, "name", {
    value: "get maxTouchPoints"
});
Object.defineProperty(Navigator.prototype, "scheduling", {
    get: rsvm.browser.Navigator.getter.scheduling,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.scheduling, "name", {
    value: "get scheduling"
});
Object.defineProperty(Navigator.prototype, "userActivation", {
    get: rsvm.browser.Navigator.getter.userActivation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.userActivation, "name", {
    value: "get userActivation"
});
Object.defineProperty(Navigator.prototype, "doNotTrack", {
    get: rsvm.browser.Navigator.getter.doNotTrack,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.doNotTrack, "name", {
    value: "get doNotTrack"
});
Object.defineProperty(Navigator.prototype, "geolocation", {
    get: rsvm.browser.Navigator.getter.geolocation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.geolocation, "name", {
    value: "get geolocation"
});
Object.defineProperty(Navigator.prototype, "connection", {
    get: rsvm.browser.Navigator.getter.connection,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.connection, "name", {
    value: "get connection"
});
Object.defineProperty(Navigator.prototype, "plugins", {
    get: rsvm.browser.Navigator.getter.plugins,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.plugins, "name", {
    value: "get plugins"
});
Object.defineProperty(Navigator.prototype, "mimeTypes", {
    get: rsvm.browser.Navigator.getter.mimeTypes,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.mimeTypes, "name", {
    value: "get mimeTypes"
});
Object.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
    get: rsvm.browser.Navigator.getter.pdfViewerEnabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.pdfViewerEnabled, "name", {
    value: "get pdfViewerEnabled"
});
Object.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
    get: rsvm.browser.Navigator.getter.webkitTemporaryStorage,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.webkitTemporaryStorage, "name", {
    value: "get webkitTemporaryStorage"
});
Object.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
    get: rsvm.browser.Navigator.getter.webkitPersistentStorage,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.webkitPersistentStorage, "name", {
    value: "get webkitPersistentStorage"
});
Object.defineProperty(Navigator.prototype, "hardwareConcurrency", {
    get: rsvm.browser.Navigator.getter.hardwareConcurrency,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.hardwareConcurrency, "name", {
    value: "get hardwareConcurrency"
});
Object.defineProperty(Navigator.prototype, "cookieEnabled", {
    get: rsvm.browser.Navigator.getter.cookieEnabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.cookieEnabled, "name", {
    value: "get cookieEnabled"
});
Object.defineProperty(Navigator.prototype, "appCodeName", {
    get: rsvm.browser.Navigator.getter.appCodeName,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.appCodeName, "name", {
    value: "get appCodeName"
});
Object.defineProperty(Navigator.prototype, "appName", {
    get: rsvm.browser.Navigator.getter.appName,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.appName, "name", {
    value: "get appName"
});
Object.defineProperty(Navigator.prototype, "appVersion", {
    get: rsvm.browser.Navigator.getter.appVersion,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.appVersion, "name", {
    value: "get appVersion"
});
Object.defineProperty(Navigator.prototype, "platform", {
    get: rsvm.browser.Navigator.getter.platform,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.platform, "name", {
    value: "get platform"
});
Object.defineProperty(Navigator.prototype, "product", {
    get: rsvm.browser.Navigator.getter.product,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.product, "name", {
    value: "get product"
});
Object.defineProperty(Navigator.prototype, "userAgent", {
    get: rsvm.browser.Navigator.getter.userAgent,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.userAgent, "name", {
    value: "get userAgent"
});
Object.defineProperty(Navigator.prototype, "language", {
    get: rsvm.browser.Navigator.getter.language,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.language, "name", {
    value: "get language"
});
Object.defineProperty(Navigator.prototype, "languages", {
    get: rsvm.browser.Navigator.getter.languages,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.languages, "name", {
    value: "get languages"
});
Object.defineProperty(Navigator.prototype, "onLine", {
    get: rsvm.browser.Navigator.getter.onLine,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.onLine, "name", {
    value: "get onLine"
});
Object.defineProperty(Navigator.prototype, "webdriver", {
    get: rsvm.browser.Navigator.getter.webdriver,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.webdriver, "name", {
    value: "get webdriver"
});
Object.defineProperty(Navigator.prototype, "bluetooth", {
    get: rsvm.browser.Navigator.getter.bluetooth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.bluetooth, "name", {
    value: "get bluetooth"
});
Object.defineProperty(Navigator.prototype, "clipboard", {
    get: rsvm.browser.Navigator.getter.clipboard,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.clipboard, "name", {
    value: "get clipboard"
});
Object.defineProperty(Navigator.prototype, "credentials", {
    get: rsvm.browser.Navigator.getter.credentials,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.credentials, "name", {
    value: "get credentials"
});
Object.defineProperty(Navigator.prototype, "keyboard", {
    get: rsvm.browser.Navigator.getter.keyboard,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.keyboard, "name", {
    value: "get keyboard"
});
Object.defineProperty(Navigator.prototype, "managed", {
    get: rsvm.browser.Navigator.getter.managed,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.managed, "name", {
    value: "get managed"
});
Object.defineProperty(Navigator.prototype, "mediaDevices", {
    get: rsvm.browser.Navigator.getter.mediaDevices,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.mediaDevices, "name", {
    value: "get mediaDevices"
});
Object.defineProperty(Navigator.prototype, "storage", {
    get: rsvm.browser.Navigator.getter.storage,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.storage, "name", {
    value: "get storage"
});
Object.defineProperty(Navigator.prototype, "serviceWorker", {
    get: rsvm.browser.Navigator.getter.serviceWorker,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.serviceWorker, "name", {
    value: "get serviceWorker"
});
Object.defineProperty(Navigator.prototype, "virtualKeyboard", {
    get: rsvm.browser.Navigator.getter.virtualKeyboard,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.virtualKeyboard, "name", {
    value: "get virtualKeyboard"
});
Object.defineProperty(Navigator.prototype, "wakeLock", {
    get: rsvm.browser.Navigator.getter.wakeLock,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.wakeLock, "name", {
    value: "get wakeLock"
});
Object.defineProperty(Navigator.prototype, "deviceMemory", {
    get: rsvm.browser.Navigator.getter.deviceMemory,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.deviceMemory, "name", {
    value: "get deviceMemory"
});
Object.defineProperty(Navigator.prototype, "ink", {
    get: rsvm.browser.Navigator.getter.ink,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.ink, "name", {
    value: "get ink"
});
Object.defineProperty(Navigator.prototype, "hid", {
    get: rsvm.browser.Navigator.getter.hid,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.hid, "name", {
    value: "get hid"
});
Object.defineProperty(Navigator.prototype, "locks", {
    get: rsvm.browser.Navigator.getter.locks,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.locks, "name", {
    value: "get locks"
});
Object.defineProperty(Navigator.prototype, "mediaCapabilities", {
    get: rsvm.browser.Navigator.getter.mediaCapabilities,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.mediaCapabilities, "name", {
    value: "get mediaCapabilities"
});
Object.defineProperty(Navigator.prototype, "mediaSession", {
    get: rsvm.browser.Navigator.getter.mediaSession,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.mediaSession, "name", {
    value: "get mediaSession"
});
Object.defineProperty(Navigator.prototype, "permissions", {
    get: rsvm.browser.Navigator.getter.permissions,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.permissions, "name", {
    value: "get permissions"
});
Object.defineProperty(Navigator.prototype, "presentation", {
    get: rsvm.browser.Navigator.getter.presentation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.presentation, "name", {
    value: "get presentation"
});
Object.defineProperty(Navigator.prototype, "serial", {
    get: rsvm.browser.Navigator.getter.serial,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.serial, "name", {
    value: "get serial"
});
Object.defineProperty(Navigator.prototype, "usb", {
    get: rsvm.browser.Navigator.getter.usb,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.usb, "name", {
    value: "get usb"
});
Object.defineProperty(Navigator.prototype, "windowControlsOverlay", {
    get: rsvm.browser.Navigator.getter.windowControlsOverlay,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.windowControlsOverlay, "name", {
    value: "get windowControlsOverlay"
});
Object.defineProperty(Navigator.prototype, "xr", {
    get: rsvm.browser.Navigator.getter.xr,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.xr, "name", {
    value: "get xr"
});
Object.defineProperty(Navigator.prototype, "userAgentData", {
    get: rsvm.browser.Navigator.getter.userAgentData,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Navigator.getter.userAgentData, "name", {
    value: "get userAgentData"
});

for (const key in rsvm.browser.Navigator.getter) {
    rsvm.safefunction(rsvm.browser.Navigator.getter[key]);
}
for (const key in rsvm.browser.Navigator.setter) {
    rsvm.safefunction(rsvm.browser.Navigator.setter[key]);
}
for (const key in rsvm.browser.Navigator.actor) {
    rsvm.safefunction(rsvm.browser.Navigator.actor[key]);
};

Navigator = rsvm.proxy(Navigator);

var navigator = Object.create(Navigator.prototype);
(function () {
    var object = Object.create(MimeTypeArray.prototype);
    object[0] = rsvm.browser.Navigator.memory.plugins["PDF Viewer"]["application/pdf"];
    object[1] = rsvm.browser.Navigator.memory.plugins["PDF Viewer"]["text/pdf"];
    Object.defineProperty(object, "application/pdf", {
        value: object[0],
        configurable: true, enumerable: false, writable: false
    });
    Object.defineProperty(object, "text/pdf", {
        value: object[1],
        configurable: true, enumerable: false, writable: false
    });
    object = rsvm.proxy(object);
    rsvm.browser.Navigator.memory.mimeTypes = object;
})();
clientInformation = navigator = rsvm.proxy(navigator);