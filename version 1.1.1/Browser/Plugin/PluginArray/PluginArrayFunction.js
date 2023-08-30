rsvm.browser.PluginArray = {
    memory: {
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("PluginArray");
            }
            if (!PluginArray.prototype.isPrototypeOf(this)) {
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
        refresh() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create() {
        var object = Object.create(PluginArray.prototype);
        var pluginAry = ["Chrome PDF Viewer", "Chromium PDF Viewer", "Microsoft Edge PDF Viewer", "PDF Viewer", "WebKit built-in PDF"];
        for (let i = 0; i < pluginAry.length; i++) {
            object[i] = rsvm.browser.Plugin.create(pluginAry[i]);
            Object.defineProperty(object, pluginAry[i], {
                value: object[i],
                configurable: true, enumerable: false, writable: false
            });
        }
        // object = rsvm.proxy(object);
        return object;
    }
};