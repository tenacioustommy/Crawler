Object.defineProperty(this, "MutationObserver", {
    value: function MutationObserver(func) {
        // rsvm.throwErrorNew();
    }
}); rsvm.safefunction(MutationObserver);

Object.defineProperties(MutationObserver.prototype, {
    [Symbol.toStringTag]: {
        value: "MutationObserver", configurable: true
    }
});

MutationObserver.prototype["disconnect"] = rsvm.browser.MutationObserver.actor.disconnect;
Object.defineProperty(rsvm.browser.MutationObserver.actor.disconnect, "length", { value: 0 });
MutationObserver.prototype["observe"] = rsvm.browser.MutationObserver.actor.observe;
Object.defineProperty(rsvm.browser.MutationObserver.actor.observe, "length", { value: 1 });
MutationObserver.prototype["takeRecords"] = rsvm.browser.MutationObserver.actor.takeRecords;
Object.defineProperty(rsvm.browser.MutationObserver.actor.takeRecords, "length", { value: 0 });




for (const key in rsvm.browser.MutationObserver.getter) {
    rsvm.safefunction(rsvm.browser.MutationObserver.getter[key]);
}
for (const key in rsvm.browser.MutationObserver.setter) {
    rsvm.safefunction(rsvm.browser.MutationObserver.setter[key]);
}
for (const key in rsvm.browser.MutationObserver.actor) {
    rsvm.safefunction(rsvm.browser.MutationObserver.actor[key]);
};


MutationObserver = rsvm.proxy(MutationObserver);