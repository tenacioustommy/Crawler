rsvm.browser.NavigationHistoryEntry = {
    memory: {
        key: "5379db79-5dcd-4e4d-bfb8-4da9e85840ef",
        id: "21ddc811-d116-4301-aa38-93e0e4d79dfa",
        url: "chrome://newtab/",
        index: 0,
        sameDocument: true,
        ondispose: null,
    },
    getter: {
        key() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigationHistoryEntry");
            }
            if (!NavigationHistoryEntry.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    return rsvm.browser.NavigationHistoryEntry.subObject[i].key;
                }
            }
            return rsvm.browser.NavigationHistoryEntry.memory.key;
        },
        id() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigationHistoryEntry");
            }
            if (!NavigationHistoryEntry.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    return rsvm.browser.NavigationHistoryEntry.subObject[i].id;
                }
            }
            return rsvm.browser.NavigationHistoryEntry.memory.id;
        },
        url() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigationHistoryEntry");
            }
            if (!NavigationHistoryEntry.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    return rsvm.browser.NavigationHistoryEntry.subObject[i].url;
                }
            }
            return rsvm.browser.NavigationHistoryEntry.memory.url;
        },
        index() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigationHistoryEntry");
            }
            if (!NavigationHistoryEntry.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    return rsvm.browser.NavigationHistoryEntry.subObject[i].index;
                }
            }
            return rsvm.browser.NavigationHistoryEntry.memory.index;
        },
        sameDocument() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigationHistoryEntry");
            }
            if (!NavigationHistoryEntry.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    return rsvm.browser.NavigationHistoryEntry.subObject[i].sameDocument;
                }
            }
            return rsvm.browser.NavigationHistoryEntry.memory.sameDocument;
        },
        ondispose() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("NavigationHistoryEntry");
            }
            if (!NavigationHistoryEntry.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    return rsvm.browser.NavigationHistoryEntry.subObject[i].ondispose;
                }
            }
            return rsvm.browser.NavigationHistoryEntry.memory.ondispose;
        },
    },
    setter: {
        ondispose() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.NavigationHistoryEntry.subObject.length; i++) {
                if (this == rsvm.browser.NavigationHistoryEntry.subObject[i].dogID) {
                    rsvm.browser.NavigationHistoryEntry.subObject[i].ondispose = arguments[0];
                    return;
                }
            }
            rsvm.browser.NavigationHistoryEntry.memory.ondispose = arguments[0];
        },
    },
    actor: {
        getState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};