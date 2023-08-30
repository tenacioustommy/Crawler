rsvm.browser.MimeType = {
    memory: {
        type: "application/x-pnacl",
        suffixes: "",
        description: "Portable Native Client Executable",
        enabledPlugin: {},
    },
    getter: {
        type() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MimeType");
            }
            if (!MimeType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.MimeType.subObject.length; i++) {
                if (this == rsvm.browser.MimeType.subObject[i].dogID) {
                    return rsvm.browser.MimeType.subObject[i].type;
                }
            }
            return rsvm.browser.MimeType.memory.type;
        },
        suffixes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MimeType");
            }
            if (!MimeType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.MimeType.subObject.length; i++) {
                if (this == rsvm.browser.MimeType.subObject[i].dogID) {
                    return rsvm.browser.MimeType.subObject[i].suffixes;
                }
            }
            return rsvm.browser.MimeType.memory.suffixes;
        },
        description() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MimeType");
            }
            if (!MimeType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.MimeType.subObject.length; i++) {
                if (this == rsvm.browser.MimeType.subObject[i].dogID) {
                    return rsvm.browser.MimeType.subObject[i].description;
                }
            }
            return rsvm.browser.MimeType.memory.description;
        },
        enabledPlugin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MimeType");
            }
            if (!MimeType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.MimeType.subObject.length; i++) {
                if (this == rsvm.browser.MimeType.subObject[i].dogID) {
                    return rsvm.browser.MimeType.subObject[i].enabledPlugin;
                }
            }
            return rsvm.browser.MimeType.memory.enabledPlugin;
        },
    },
    setter: {
    },
    actor: {

    },
    subObject: [],
    create(type, obj) {
        var object = Object.create(MimeType.prototype);
        // object = rsvm.proxy(object);
        var memory = { dogID: object };
        var mAry = ["application/pdf", "text/pdf"];
        if (mAry.indexOf(type) != -1) {
            memory["description"] = "Portable Document Format";
            memory["enabledPlugin"] = obj;
            memory["suffixes"] = "pdf";
            memory["type"] = type;
            rsvm.browser.MimeType.subObject.push(memory);
            return object;
        }
        if (type == "application/x-pnacl") {
            memory["description"] = "Portable Native Client Executable";
            memory["enabledPlugin"] = obj;
            memory["suffixes"] = "";
            memory["type"] = type;
        } else if (type == "application/x-nacl") {
            memory["description"] = "Native Client Executable";
            memory["enabledPlugin"] = obj;
            memory["suffixes"] = "";
            memory["type"] = type;
        } else if (type == "application/pdf") {
            memory["description"] = "";
            memory["enabledPlugin"] = obj;
            memory["suffixes"] = "pdf";
            memory["type"] = type;
        } else if (type == "application/x-google-chrome-pdf") {
            memory["description"] = "Portable Document Format";
            memory["enabledPlugin"] = obj;
            memory["suffixes"] = "pdf";
            memory["type"] = type;
        }
        rsvm.browser.MimeType.subObject.push(memory);
        return object;
    }
};