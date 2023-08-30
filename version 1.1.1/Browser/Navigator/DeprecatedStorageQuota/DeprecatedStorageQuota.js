(function () {
    var DeprecatedStorageQuota = {};
    rsvm.browser.Navigator.memory.webkitTemporaryStorage.__proto__ = DeprecatedStorageQuota;
    Object.defineProperties(DeprecatedStorageQuota, {
        [Symbol.toStringTag]: {
            value: "DeprecatedStorageQuota", configurable: true
        }
    });

    DeprecatedStorageQuota["queryUsageAndQuota"] = rsvm.browser.DeprecatedStorageQuota.actor.queryUsageAndQuota;
    Object.defineProperty(rsvm.browser.DeprecatedStorageQuota.actor.queryUsageAndQuota, "length", { value: 0 });
    DeprecatedStorageQuota["requestQuota"] = rsvm.browser.DeprecatedStorageQuota.actor.requestQuota;
    Object.defineProperty(rsvm.browser.DeprecatedStorageQuota.actor.requestQuota, "length", { value: 0 });
}());