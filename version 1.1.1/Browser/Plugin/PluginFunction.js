rsvm.browser.Plugin = {
    memory: {
        name: "Chrome PDF Plugin",
        filename: "internal-pdf-viewer",
        description: "Portable Document Format",
    },
    getter: {
        name() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Plugin");
            }
            if (!Plugin.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Plugin.subObject.length; i++) {
                if (this == rsvm.browser.Plugin.subObject[i].dogID) {
                    return rsvm.browser.Plugin.subObject[i].name;
                }
            }
            return rsvm.browser.Plugin.memory.name;
        },
        filename() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Plugin");
            }
            if (!Plugin.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Plugin.subObject.length; i++) {
                if (this == rsvm.browser.Plugin.subObject[i].dogID) {
                    return rsvm.browser.Plugin.subObject[i].filename;
                }
            }
            return rsvm.browser.Plugin.memory.filename;
        },
        description() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Plugin");
            }
            if (!Plugin.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Plugin.subObject.length; i++) {
                if (this == rsvm.browser.Plugin.subObject[i].dogID) {
                    return rsvm.browser.Plugin.subObject[i].description;
                }
            }
            return rsvm.browser.Plugin.memory.description;
        },
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Plugin");
            }
            if (!Plugin.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            var length = 0;
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    length++;
                }
            }
            return length;
        },
    },
    setter: {
    },
    actor: {
        values() {
            return {
                next: function () {
                    if (this.index_ == undefined) {
                        this.index_ = 0;
                    }
                    var tmp = this.self_[this.index_];
                    this.index_ += 1;
                    return { value: tmp, done: tmp == undefined };
                },
                self_: this
            }
        },
        item(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        namedItem(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(pluginName) {
        var object = Object.create(Plugin.prototype);
        var memory = {};
        var pluginAry = ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"];
        if (pluginAry.indexOf(pluginName) != -1) {
            memory["description"] = "Portable Document Format";
            memory["filename"] = "internal-pdf-viewer";
            memory["name"] = pluginName;
            object[0] = rsvm.browser.MimeType.create("application/pdf", object);
            object[1] = rsvm.browser.MimeType.create("text/pdf", object);
            Object.defineProperty(object, "application/pdf", {
                value: object[0],
                configurable: true, enumerable: false, writable: false
            });
            Object.defineProperty(object, "text/pdf", {
                value: object[1],
                configurable: true, enumerable: false, writable: false
            });
            rsvm.browser.Plugin.subObject.push(memory);
            // object = rsvm.proxy(object);
            memory.dogID = object;
            return object;
        }
        if (pluginName == "Native Client") {
            memory["description"] = "";
            memory["filename"] = "internal-nacl-plugin";
            memory["name"] = "Native Client";
            Object.defineProperty(object, "application/x-nacl", {
                value: rsvm.browser.MimeType.create("application/x-nacl", object),
                configurable: true, enumerable: false, writable: false
            });
            Object.defineProperty(object, "application/x-pnacl", {
                value: rsvm.browser.MimeType.create("application/x-pnacl", object),
                configurable: true, enumerable: false, writable: false
            });
        } else if (pluginName == "Chrome PDF Viewer") {
            memory["description"] = "";
            memory["filename"] = "mhjfbmdgcfjbbpaeojofohoefgiehjai";
            memory["name"] = "Chrome PDF Viewer";
            Object.defineProperty(object, "application/pdf", {
                value: rsvm.browser.MimeType.create("application/pdf", object),
                configurable: true, enumerable: false, writable: false
            });
        } else if (pluginName == "Chrome PDF Plugin") {
            memory["description"] = "Portable Document Format";
            memory["filename"] = "internal-pdf-viewer";
            memory["name"] = "Chrome PDF Plugin";
            Object.defineProperty(object, "application/x-google-chrome-pdf", {
                value: rsvm.browser.MimeType.create("application/x-google-chrome-pdf", object),
                configurable: true, enumerable: false, writable: false
            });
        }
        rsvm.browser.Plugin.subObject.push(memory);
        // object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};