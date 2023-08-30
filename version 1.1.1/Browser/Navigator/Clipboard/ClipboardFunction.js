rsvm.browser.Clipboard = {
    memory: {},
    getter: {},
    setter: {},
    actor: {
        read() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        readText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        write(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        writeText(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
    },
    subObject: []
};