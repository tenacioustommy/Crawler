rsvm.browser.CredentialsContainer = {
    memory: {
    },
    getter: {
    },
    setter: {
    },
    actor: {
        create() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        get() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        preventSilentAccess() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        store(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};