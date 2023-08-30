rsvm.browser.NavigatorUAData = {
    memory: {
        brands: [
            { brand: "Chromium", version: "112" },
            { brand: "Google Chrome", version: "112" },
            { brand: "Not:A-Brand", version: "99" },
        ],
        mobile: false,
        platform: "Windows",
    },
    getter: {
        brands() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigatorUAData");
            }
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigatorUAData.subObject.length; i++) {
                if (this == rsvm.browser.NavigatorUAData.subObject[i].dogID) {
                    return rsvm.browser.NavigatorUAData.subObject[i].brands;
                }
            }
            return rsvm.browser.NavigatorUAData.memory.brands;
        },
        mobile() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigatorUAData");
            }
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigatorUAData.subObject.length; i++) {
                if (this == rsvm.browser.NavigatorUAData.subObject[i].dogID) {
                    return rsvm.browser.NavigatorUAData.subObject[i].mobile;
                }
            }
            return rsvm.browser.NavigatorUAData.memory.mobile;
        },
        platform() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigatorUAData");
            }
            if (!NavigatorUAData.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigatorUAData.subObject.length; i++) {
                if (this == rsvm.browser.NavigatorUAData.subObject[i].dogID) {
                    return rsvm.browser.NavigatorUAData.subObject[i].platform;
                }
            }
            return rsvm.browser.NavigatorUAData.memory.platform;
        },
    },
    setter: {
    },
    actor: {
        getHighEntropyValues(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        toJSON() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};