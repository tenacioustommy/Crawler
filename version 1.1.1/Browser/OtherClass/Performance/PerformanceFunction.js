rsvm.browser.Performance = {
    memory: {
        timeOrigin: 1688978801485.8,
        onresourcetimingbufferfull: null,
        timing: {},
        navigation: {},
        memory: {},
        eventCounts: {},
    },
    getter: {
        timeOrigin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Performance");
            }
            if (!Performance.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    return rsvm.browser.Performance.subObject[i].timeOrigin;
                }
            }
            return rsvm.browser.Performance.memory.timeOrigin;
        },
        onresourcetimingbufferfull() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Performance");
            }
            if (!Performance.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    return rsvm.browser.Performance.subObject[i].onresourcetimingbufferfull;
                }
            }
            return rsvm.browser.Performance.memory.onresourcetimingbufferfull;
        },
        timing() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Performance");
            }
            if (!Performance.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    return rsvm.browser.Performance.subObject[i].timing;
                }
            }
            return rsvm.browser.Performance.memory.timing;
        },
        navigation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Performance");
            }
            if (!Performance.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    return rsvm.browser.Performance.subObject[i].navigation;
                }
            }
            return rsvm.browser.Performance.memory.navigation;
        },
        memory() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Performance");
            }
            if (!Performance.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    return rsvm.browser.Performance.subObject[i].memory;
                }
            }
            return rsvm.browser.Performance.memory.memory;
        },
        eventCounts() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Performance");
            }
            if (!Performance.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    return rsvm.browser.Performance.subObject[i].eventCounts;
                }
            }
            return rsvm.browser.Performance.memory.eventCounts;
        },
    },
    setter: {
        onresourcetimingbufferfull() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Performance.subObject.length; i++) {
                if (this == rsvm.browser.Performance.subObject[i].dogID) {
                    rsvm.browser.Performance.subObject[i].onresourcetimingbufferfull = arguments[0];
                    return;
                }
            }
            rsvm.browser.Performance.memory.onresourcetimingbufferfull = arguments[0];
        },
    },
    actor: {
        clearMarks() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearMeasures() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearResourceTimings() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getEntries() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getEntriesByName(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getEntriesByType(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        mark(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        measure(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        now() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setResourceTimingBufferSize(a) {
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