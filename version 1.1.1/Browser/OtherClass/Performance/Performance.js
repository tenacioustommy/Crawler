Object.defineProperty(this, "Performance", {
    value: function Performance() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(Performance);

Object.defineProperties(Performance.prototype, {
    [Symbol.toStringTag]: {
        value: "Performance", configurable: true
    }
});

Performance.prototype.__proto__ = EventTarget.prototype;

Performance.prototype["clearMarks"] = rsvm.browser.Performance.actor.clearMarks;
Object.defineProperty(rsvm.browser.Performance.actor.clearMarks, "length", { value: 0 });
Performance.prototype["clearMeasures"] = rsvm.browser.Performance.actor.clearMeasures;
Object.defineProperty(rsvm.browser.Performance.actor.clearMeasures, "length", { value: 0 });
Performance.prototype["clearResourceTimings"] = rsvm.browser.Performance.actor.clearResourceTimings;
Object.defineProperty(rsvm.browser.Performance.actor.clearResourceTimings, "length", { value: 0 });
Performance.prototype["getEntries"] = rsvm.browser.Performance.actor.getEntries;
Object.defineProperty(rsvm.browser.Performance.actor.getEntries, "length", { value: 0 });
Performance.prototype["getEntriesByName"] = rsvm.browser.Performance.actor.getEntriesByName;
Object.defineProperty(rsvm.browser.Performance.actor.getEntriesByName, "length", { value: 1 });
Performance.prototype["getEntriesByType"] = rsvm.browser.Performance.actor.getEntriesByType;
Object.defineProperty(rsvm.browser.Performance.actor.getEntriesByType, "length", { value: 1 });
Performance.prototype["mark"] = rsvm.browser.Performance.actor.mark;
Object.defineProperty(rsvm.browser.Performance.actor.mark, "length", { value: 1 });
Performance.prototype["measure"] = rsvm.browser.Performance.actor.measure;
Object.defineProperty(rsvm.browser.Performance.actor.measure, "length", { value: 1 });
Performance.prototype["now"] = rsvm.browser.Performance.actor.now;
Object.defineProperty(rsvm.browser.Performance.actor.now, "length", { value: 0 });
Performance.prototype["setResourceTimingBufferSize"] = rsvm.browser.Performance.actor.setResourceTimingBufferSize;
Object.defineProperty(rsvm.browser.Performance.actor.setResourceTimingBufferSize, "length", { value: 1 });
Performance.prototype["toJSON"] = rsvm.browser.Performance.actor.toJSON;
Object.defineProperty(rsvm.browser.Performance.actor.toJSON, "length", { value: 0 });


Object.defineProperty(Performance.prototype, "timeOrigin", {
    get: rsvm.browser.Performance.getter.timeOrigin,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Performance.getter.timeOrigin, "name", {
    value: "get timeOrigin"
});
Object.defineProperty(Performance.prototype, "onresourcetimingbufferfull", {
    get: rsvm.browser.Performance.getter.onresourcetimingbufferfull,
    set: rsvm.browser.Performance.setter.onresourcetimingbufferfull,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Performance.getter.onresourcetimingbufferfull, "name", {
    value: "get onresourcetimingbufferfull"
});
Object.defineProperty(rsvm.browser.Performance.setter.onresourcetimingbufferfull, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Performance.setter.onresourcetimingbufferfull, "name", {
    value: "set onresourcetimingbufferfull"
});
Object.defineProperty(Performance.prototype, "timing", {
    get: rsvm.browser.Performance.getter.timing,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Performance.getter.timing, "name", {
    value: "get timing"
});
Object.defineProperty(Performance.prototype, "navigation", {
    get: rsvm.browser.Performance.getter.navigation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Performance.getter.navigation, "name", {
    value: "get navigation"
});
Object.defineProperty(Performance.prototype, "memory", {
    get: rsvm.browser.Performance.getter.memory,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Performance.getter.memory, "name", {
    value: "get memory"
});
Object.defineProperty(Performance.prototype, "eventCounts", {
    get: rsvm.browser.Performance.getter.eventCounts,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Performance.getter.eventCounts, "name", {
    value: "get eventCounts"
});


for (const key in rsvm.browser.Performance.getter) {
    rsvm.safefunction(rsvm.browser.Performance.getter[key]);
}
for (const key in rsvm.browser.Performance.setter) {
    rsvm.safefunction(rsvm.browser.Performance.setter[key]);
}
for (const key in rsvm.browser.Performance.actor) {
    rsvm.safefunction(rsvm.browser.Performance.actor[key]);
};


Performance = rsvm.proxy(Performance);

performance = Object.create(Performance.prototype);