rsvm.browser.Navigation = {
    memory: {
        currentEntry: rsvm.proxy(Object.create(NavigationHistoryEntry.prototype)),
        transition: null,
        canGoBack: false,
        canGoForward: false,
        onnavigate: null,
        onnavigatesuccess: null,
        onnavigateerror: null,
        oncurrententrychange: null,
    },
    getter: {
        currentEntry() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].currentEntry;
                }
            }
            return rsvm.browser.Navigation.memory.currentEntry;
        },
        transition() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].transition;
                }
            }
            return rsvm.browser.Navigation.memory.transition;
        },
        canGoBack() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].canGoBack;
                }
            }
            return rsvm.browser.Navigation.memory.canGoBack;
        },
        canGoForward() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].canGoForward;
                }
            }
            return rsvm.browser.Navigation.memory.canGoForward;
        },
        onnavigate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].onnavigate;
                }
            }
            return rsvm.browser.Navigation.memory.onnavigate;
        },
        onnavigatesuccess() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].onnavigatesuccess;
                }
            }
            return rsvm.browser.Navigation.memory.onnavigatesuccess;
        },
        onnavigateerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].onnavigateerror;
                }
            }
            return rsvm.browser.Navigation.memory.onnavigateerror;
        },
        oncurrententrychange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Navigation");
            }
            if (!Navigation.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    return rsvm.browser.Navigation.subObject[i].oncurrententrychange;
                }
            }
            return rsvm.browser.Navigation.memory.oncurrententrychange;
        },
    },
    setter: {
        onnavigate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    rsvm.browser.Navigation.subObject[i].onnavigate = arguments[0];
                    return;
                }
            }
            rsvm.browser.Navigation.memory.onnavigate = arguments[0];
        },
        onnavigatesuccess() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    rsvm.browser.Navigation.subObject[i].onnavigatesuccess = arguments[0];
                    return;
                }
            }
            rsvm.browser.Navigation.memory.onnavigatesuccess = arguments[0];
        },
        onnavigateerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    rsvm.browser.Navigation.subObject[i].onnavigateerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.Navigation.memory.onnavigateerror = arguments[0];
        },
        oncurrententrychange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Navigation.subObject.length; i++) {
                if (this == rsvm.browser.Navigation.subObject[i].dogID) {
                    rsvm.browser.Navigation.subObject[i].oncurrententrychange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Navigation.memory.oncurrententrychange = arguments[0];
        },
    },
    actor: {
        back() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        entries() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        forward() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        navigate(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        reload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        traverseTo(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        updateCurrentEntry(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};