rsvm.browser.NetworkInformation = {
    memory: {
        onchange: null,
        effectiveType: "4g",
        rtt: 100,
        downlink: 10,
        saveData: false,
    },
    getter: {
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NetworkInformation");
            }
            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NetworkInformation.subObject.length; i++) {
                if (this == rsvm.browser.NetworkInformation.subObject[i].dogID) {
                    return rsvm.browser.NetworkInformation.subObject[i].onchange;
                }
            }
            return rsvm.browser.NetworkInformation.memory.onchange;
        },
        effectiveType() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NetworkInformation");
            }
            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NetworkInformation.subObject.length; i++) {
                if (this == rsvm.browser.NetworkInformation.subObject[i].dogID) {
                    return rsvm.browser.NetworkInformation.subObject[i].effectiveType;
                }
            }
            return rsvm.browser.NetworkInformation.memory.effectiveType;
        },
        rtt() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NetworkInformation");
            }
            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NetworkInformation.subObject.length; i++) {
                if (this == rsvm.browser.NetworkInformation.subObject[i].dogID) {
                    return rsvm.browser.NetworkInformation.subObject[i].rtt;
                }
            }
            return rsvm.browser.NetworkInformation.memory.rtt;
        },
        downlink() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NetworkInformation");
            }
            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NetworkInformation.subObject.length; i++) {
                if (this == rsvm.browser.NetworkInformation.subObject[i].dogID) {
                    return rsvm.browser.NetworkInformation.subObject[i].downlink;
                }
            }
            return rsvm.browser.NetworkInformation.memory.downlink;
        },
        saveData() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NetworkInformation");
            }
            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NetworkInformation.subObject.length; i++) {
                if (this == rsvm.browser.NetworkInformation.subObject[i].dogID) {
                    return rsvm.browser.NetworkInformation.subObject[i].saveData;
                }
            }
            return rsvm.browser.NetworkInformation.memory.saveData;
        },
    },
    setter: {
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.NetworkInformation.subObject.length; i++) {
                if (this == rsvm.browser.NetworkInformation.subObject[i].dogID) {
                    rsvm.browser.NetworkInformation.subObject[i].onchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.NetworkInformation.memory.onchange = arguments[0];
        },
    },
    actor: {

    },
    subObject: []
};