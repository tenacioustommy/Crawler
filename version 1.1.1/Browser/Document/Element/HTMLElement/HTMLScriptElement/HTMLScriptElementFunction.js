rsvm.browser.HTMLScriptElement = {
    memory: {
        src: "",
        type: "",
        noModule: false,
        charset: "",
        async: true,
        defer: false,
        crossOrigin: null,
        text: "",
        referrerPolicy: "",
        event: "",
        htmlFor: "",
        integrity: "",
        fetchPriority: "auto",
        blocking: {},
    },
    getter: {
        src() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].src;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.src;
        },
        type() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].type;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.type;
        },
        noModule() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].noModule;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.noModule;
        },
        charset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].charset;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.charset;
        },
        async() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].async;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.async;
        },
        defer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].defer;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.defer;
        },
        crossOrigin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].crossOrigin;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.crossOrigin;
        },
        text() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].text;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.text;
        },
        referrerPolicy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].referrerPolicy;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.referrerPolicy;
        },
        event() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].event;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.event;
        },
        htmlFor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].htmlFor;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.htmlFor;
        },
        integrity() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].integrity;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.integrity;
        },
        fetchPriority() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fetchPriority;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.fetchPriority;
        },
        blocking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLScriptElement");
            }
            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].blocking;
                }
            }
            return rsvm.browser.HTMLScriptElement.memory.blocking;
        },
    },
    setter: {
        src() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].src = arguments[0];
                    return;
                }
            }
        },
        type() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].type = arguments[0];
                    return;
                }
            }
        },
        noModule() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].noModule = arguments[0];
                    return;
                }
            }
        },
        charset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].charset = arguments[0];
                    return;
                }
            }
        },
        async() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].async = arguments[0];
                    return;
                }
            }
        },
        defer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].defer = arguments[0];
                    return;
                }
            }
        },
        crossOrigin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].crossOrigin = arguments[0];
                    return;
                }
            }
        },
        text() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].text = arguments[0];
                    return;
                }
            }
        },
        referrerPolicy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].referrerPolicy = arguments[0];
                    return;
                }
            }
        },
        event() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].event = arguments[0];
                    return;
                }
            }
        },
        htmlFor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].htmlFor = arguments[0];
                    return;
                }
            }
        },
        integrity() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].integrity = arguments[0];
                    return;
                }
            }
        },
        fetchPriority() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].fetchPriority = arguments[0];
                    return;
                }
            }
        },
        blocking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].blocking = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {
    },
    subObject: [],
    create() {
        var object = Object.create(HTMLScriptElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLScriptElement.memory) {
            memory[key] = rsvm.browser.HTMLScriptElement.memory[key];
        }
        for (const key in rsvm.browser.HTMLElement.memory) {
            memory[key] = rsvm.browser.HTMLElement.memory[key];
        }
        for (const key in rsvm.browser.Element.memory) {
            memory[key] = rsvm.browser.Element.memory[key];
        }
        for (const key in rsvm.browser.Node.memory) {
            memory[key] = rsvm.browser.Node.memory[key];
        }
        memory["nodeName"] = memory["tagName"] = "SCRIPT";
        memory["localName"] = "script";
        memory["innerHTML"] = "";
        memory["outerHTML"] = "<" + memory["localName"] + ">" + "</" + memory["localName"] + ">";
        memory['style'] = rsvm.browser.CSSStyleDeclaration.create();
        memory["children"] = rsvm.browser.HTMLCollection.create();
        memory["parentNode"] = null;
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};