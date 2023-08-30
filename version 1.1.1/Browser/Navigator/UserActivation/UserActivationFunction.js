rsvm.browser.UserActivation = {
    memory: {
        hasBeenActive: true,
        isActive: true,
    },
    getter: {
        hasBeenActive() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("UserActivation");
            }
            if (!UserActivation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.UserActivation.subObject.length; i++) {
                if (this == rsvm.browser.UserActivation.subObject[i].dogID) {
                    return rsvm.browser.UserActivation.subObject[i].hasBeenActive;
                }
            }
            return rsvm.browser.UserActivation.memory.hasBeenActive;
        },
        isActive() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("UserActivation");
            }
            if (!UserActivation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.UserActivation.subObject.length; i++) {
                if (this == rsvm.browser.UserActivation.subObject[i].dogID) {
                    return rsvm.browser.UserActivation.subObject[i].isActive;
                }
            }
            return rsvm.browser.UserActivation.memory.isActive;
        },
    },
    setter: {},
    actor: {},
    subObject: []
};