rsvm.browser.Navigator = {
    memory: {
        vendorSub: "",
        productSub: "20030107",
        vendor: "Google Inc.",
        maxTouchPoints: 0,
        scheduling: {},
        userActivation: rsvm.proxy(Object.create(UserActivation.prototype)),
        doNotTrack: null,
        geolocation: {},
        connection: rsvm.proxy(Object.create(NetworkInformation.prototype)),
        plugins: rsvm.browser.PluginArray.create(),
        mimeTypes: {},
        pdfViewerEnabled: true,
        webkitTemporaryStorage: {},
        webkitPersistentStorage: {},
        hardwareConcurrency: 20,
        cookieEnabled: true,
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        platform: "Win32",
        product: "Gecko",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
        language: 'zh',
        languages: ['zh', 'zh-CN'],
        onLine: true,
        webdriver: false,
        bluetooth: rsvm.proxy(Object.create(Bluetooth.prototype)),
        clipboard: rsvm.proxy(Object.create(Clipboard.prototype)),
        credentials: rsvm.proxy(Object.create(CredentialsContainer.prototype)),
        keyboard: {},
        managed: {},
        mediaDevices: rsvm.proxy(Object.create(MediaDevices.prototype)),
        storage: {},
        serviceWorker: rsvm.proxy(Object.create(ServiceWorkerContainer.prototype)),
        virtualKeyboard: {},
        wakeLock: {},
        deviceMemory: 8,
        ink: {},
        hid: {},
        locks: {},
        mediaCapabilities: {},
        mediaSession: {},
        permissions: rsvm.proxy(Object.create(Permissions.prototype)),
        presentation: {},
        serial: {},
        usb: {},
        windowControlsOverlay: {},
        xr: {},
        userAgentData: rsvm.proxy(Object.create(NavigatorUAData.prototype)),
    },
    getter: {
        vendorSub() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].vendorSub;
                }
            }
            return rsvm.browser.Navigator.memory.vendorSub;
        },
        productSub() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].productSub;
                }
            }
            return rsvm.browser.Navigator.memory.productSub;
        },
        vendor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].vendor;
                }
            }
            return rsvm.browser.Navigator.memory.vendor;
        },
        maxTouchPoints() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].maxTouchPoints;
                }
            }
            return rsvm.browser.Navigator.memory.maxTouchPoints;
        },
        scheduling() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].scheduling;
                }
            }
            return rsvm.browser.Navigator.memory.scheduling;
        },
        userActivation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].userActivation;
                }
            }
            return rsvm.browser.Navigator.memory.userActivation;
        },
        doNotTrack() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].doNotTrack;
                }
            }
            return rsvm.browser.Navigator.memory.doNotTrack;
        },
        geolocation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].geolocation;
                }
            }
            return rsvm.browser.Navigator.memory.geolocation;
        },
        connection() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].connection;
                }
            }
            return rsvm.browser.Navigator.memory.connection;
        },
        plugins() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].plugins;
                }
            }
            return rsvm.browser.Navigator.memory.plugins;
        },
        mimeTypes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].mimeTypes;
                }
            }
            return rsvm.browser.Navigator.memory.mimeTypes;
        },
        pdfViewerEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].pdfViewerEnabled;
                }
            }
            return rsvm.browser.Navigator.memory.pdfViewerEnabled;
        },
        webkitTemporaryStorage() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].webkitTemporaryStorage;
                }
            }
            return rsvm.browser.Navigator.memory.webkitTemporaryStorage;
        },
        webkitPersistentStorage() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].webkitPersistentStorage;
                }
            }
            return rsvm.browser.Navigator.memory.webkitPersistentStorage;
        },
        hardwareConcurrency() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].hardwareConcurrency;
                }
            }
            return rsvm.browser.Navigator.memory.hardwareConcurrency;
        },
        cookieEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].cookieEnabled;
                }
            }
            return rsvm.browser.Navigator.memory.cookieEnabled;
        },
        appCodeName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].appCodeName;
                }
            }
            return rsvm.baseMemory.userAgent.split("/")[0];
        },
        appName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].appName;
                }
            }
            return rsvm.browser.Navigator.memory.appName;
        },
        appVersion() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].appVersion;
                }
            }
            return rsvm.baseMemory.userAgent.match(/\/.+/g)[0].slice(1);
        },
        platform() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].platform;
                }
            }
            return rsvm.browser.Navigator.memory.platform;
        },
        product() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].product;
                }
            }
            return rsvm.browser.Navigator.memory.product;
        },
        userAgent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].userAgent;
                }
            }
            return rsvm.baseMemory.userAgent;
        },
        language() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].language;
                }
            }
            return rsvm.browser.Navigator.memory.language;
        },
        languages() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].languages;
                }
            }
            return rsvm.browser.Navigator.memory.languages;
        },
        onLine() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].onLine;
                }
            }
            return rsvm.browser.Navigator.memory.onLine;
        },
        webdriver() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].webdriver;
                }
            }
            return rsvm.browser.Navigator.memory.webdriver;
        },
        bluetooth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].bluetooth;
                }
            }
            return rsvm.browser.Navigator.memory.bluetooth;
        },
        clipboard() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].clipboard;
                }
            }
            return rsvm.browser.Navigator.memory.clipboard;
        },
        credentials() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].credentials;
                }
            }
            return rsvm.browser.Navigator.memory.credentials;
        },
        keyboard() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].keyboard;
                }
            }
            return rsvm.browser.Navigator.memory.keyboard;
        },
        managed() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].managed;
                }
            }
            return rsvm.browser.Navigator.memory.managed;
        },
        mediaDevices() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].mediaDevices;
                }
            }
            return rsvm.browser.Navigator.memory.mediaDevices;
        },
        storage() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].storage;
                }
            }
            return rsvm.browser.Navigator.memory.storage;
        },
        serviceWorker() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].serviceWorker;
                }
            }
            return rsvm.browser.Navigator.memory.serviceWorker;
        },
        virtualKeyboard() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].virtualKeyboard;
                }
            }
            return rsvm.browser.Navigator.memory.virtualKeyboard;
        },
        wakeLock() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].wakeLock;
                }
            }
            return rsvm.browser.Navigator.memory.wakeLock;
        },
        deviceMemory() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].deviceMemory;
                }
            }
            return rsvm.browser.Navigator.memory.deviceMemory;
        },
        ink() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].ink;
                }
            }
            return rsvm.browser.Navigator.memory.ink;
        },
        hid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].hid;
                }
            }
            return rsvm.browser.Navigator.memory.hid;
        },
        locks() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].locks;
                }
            }
            return rsvm.browser.Navigator.memory.locks;
        },
        mediaCapabilities() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].mediaCapabilities;
                }
            }
            return rsvm.browser.Navigator.memory.mediaCapabilities;
        },
        mediaSession() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].mediaSession;
                }
            }
            return rsvm.browser.Navigator.memory.mediaSession;
        },
        permissions() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].permissions;
                }
            }
            return rsvm.browser.Navigator.memory.permissions;
        },
        presentation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].presentation;
                }
            }
            return rsvm.browser.Navigator.memory.presentation;
        },
        serial() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].serial;
                }
            }
            return rsvm.browser.Navigator.memory.serial;
        },
        usb() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].usb;
                }
            }
            return rsvm.browser.Navigator.memory.usb;
        },
        windowControlsOverlay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].windowControlsOverlay;
                }
            }
            return rsvm.browser.Navigator.memory.windowControlsOverlay;
        },
        xr() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].xr;
                }
            }
            return rsvm.browser.Navigator.memory.xr;
        },
        userAgentData() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigator");
            }
            if (!Navigator.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigator.subObject.length; i++) {
                if (this == rsvm.browser.Navigator.subObject[i].dogID) {
                    return rsvm.browser.Navigator.subObject[i].userAgentData;
                }
            }
            return rsvm.browser.Navigator.memory.userAgentData;
        },
    },
    setter: {
    },
    actor: {
        getGamepads() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return [null, null, null, null];
        },
        javaEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return false;
        },
        sendBeacon(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return true;
        },
        vibrate(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return false;
        },
        canShare() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        share() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearAppBadge() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getBattery() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUserMedia(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        requestMIDIAccess() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        requestMediaKeySystemAccess(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setAppBadge() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        webkitGetUserMedia(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getInstalledRelatedApps() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        registerProtocolHandler(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        unregisterProtocolHandler(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};