rsvm.browser.DeprecatedStorageQuota = {
    memory: {},
    getter: {},
    setter: {},
    actor: {
        queryUsageAndQuota(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        requestQuota(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        }
    },
    subObject: []
};