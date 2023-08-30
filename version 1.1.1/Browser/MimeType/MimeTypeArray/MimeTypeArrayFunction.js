rsvm.browser.MimeTypeArray = {
    memory: {
    },
    getter: {
        length() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MimeTypeArray");
            }
            if (!MimeTypeArray.prototype.isPrototypeOf(this)) {
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
        }
    },
    subObject: [],
    create() {
        var object = rsvm.proxy(Object.create(MimeTypeArray.prototype));
        var MimeTypeAry = ["text/pdf", "application/pdf"];
        for (let i = 0; i < MimeTypeAry.length; i++) {
            Object.defineProperty(object, MimeTypeAry[i], {
                value: rsvm.browser.MimeType.create(MimeTypeAry[i]),
                configurable: true, enumerable: false, writable: false
            });
        }
        return object;
    }
};