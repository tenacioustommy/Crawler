rsvm.browser.Permissions = {
    memory: {
    },
    getter: {
    },
    setter: {
    },
    actor: {
        query() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            return new Promise(function(){});
        },

    },
    subObject: []
};