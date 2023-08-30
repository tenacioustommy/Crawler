rsvm.browser.ServiceWorkerContainer = {
    memory: {
        controller: null,
        oncontrollerchange: null,
        onmessage: null,
        onmessageerror: null,
    },
    getter: {
        controller() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorkerContainer");
            }
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorkerContainer.subObject[i].controller;
                }
            }
            return rsvm.browser.ServiceWorkerContainer.memory.controller;
        },
        oncontrollerchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorkerContainer");
            }
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorkerContainer.subObject[i].oncontrollerchange;
                }
            }
            return rsvm.browser.ServiceWorkerContainer.memory.oncontrollerchange;
        },
        onmessage() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorkerContainer");
            }
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorkerContainer.subObject[i].onmessage;
                }
            }
            return rsvm.browser.ServiceWorkerContainer.memory.onmessage;
        },
        onmessageerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("ServiceWorkerContainer");
            }
            if (!ServiceWorkerContainer.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    return rsvm.browser.ServiceWorkerContainer.subObject[i].onmessageerror;
                }
            }
            return rsvm.browser.ServiceWorkerContainer.memory.onmessageerror;
        },
    },
    setter: {
        oncontrollerchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    rsvm.browser.ServiceWorkerContainer.subObject[i].oncontrollerchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.ServiceWorkerContainer.memory.oncontrollerchange = arguments[0];
        },
        onmessage() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    rsvm.browser.ServiceWorkerContainer.subObject[i].onmessage = arguments[0];
                    return;
                }
            }
            rsvm.browser.ServiceWorkerContainer.memory.onmessage = arguments[0];
        },
        onmessageerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.ServiceWorkerContainer.subObject.length; i++) {
                if (this == rsvm.browser.ServiceWorkerContainer.subObject[i].dogID) {
                    rsvm.browser.ServiceWorkerContainer.subObject[i].onmessageerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.ServiceWorkerContainer.memory.onmessageerror = arguments[0];
        },
    },
    actor: {
        getRegistration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getRegistrations() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        register(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        startMessages() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};