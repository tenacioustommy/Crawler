rsvm.browser.location = {
    memory: {
        ancestorOrigins: {},
        href: "chrome://newtab/",
        origin: "chrome://newtab",
        protocol: "chrome:",
        host: "newtab",
        hostname: "newtab",
        port: "",
        pathname: "/",
        search: "",
        hash: "",
    },
    getter: {},
    setter: {},
    actor: {
        assign(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        reload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replace(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        toString() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return this.href;
        },
        valueOf(){
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return this;
        }
    },
    subObject: []
};