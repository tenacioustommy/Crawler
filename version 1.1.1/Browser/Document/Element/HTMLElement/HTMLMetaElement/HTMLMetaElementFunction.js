rsvm.browser.HTMLMetaElement = {
    memory: {
        name: "",
        httpEquiv: "",
        content: "",
        media: "",
        scheme: "",
    },
    getter: {
        name() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLMetaElement");
            }
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].name;
                }
            }
            return rsvm.browser.HTMLMetaElement.memory.name;
        },
        httpEquiv() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLMetaElement");
            }
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].httpEquiv;
                }
            }
            return rsvm.browser.HTMLMetaElement.memory.httpEquiv;
        },
        content() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLMetaElement");
            }
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].content;
                }
            }
            return rsvm.browser.HTMLMetaElement.memory.content;
        },
        media() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLMetaElement");
            }
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].media;
                }
            }
            return rsvm.browser.HTMLMetaElement.memory.media;
        },
        scheme() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLMetaElement");
            }
            if (!HTMLMetaElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scheme;
                }
            }
            return rsvm.browser.HTMLMetaElement.memory.scheme;
        },
    },
    setter: {
        name() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].name = arguments[0];
                    return;
                }
            }
            rsvm.browser.HTMLMetaElement.memory.name = arguments[0];
        },
        httpEquiv() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].httpEquiv = arguments[0];
                    return;
                }
            }
            rsvm.browser.HTMLMetaElement.memory.httpEquiv = arguments[0];
        },
        content() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].content = arguments[0];
                    return;
                }
            }
            rsvm.browser.HTMLMetaElement.memory.content = arguments[0];
        },
        media() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].media = arguments[0];
                    return;
                }
            }
            rsvm.browser.HTMLMetaElement.memory.media = arguments[0];
        },
        scheme() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].scheme = arguments[0];
                    return;
                }
            }
            rsvm.browser.HTMLMetaElement.memory.scheme = arguments[0];
        },
    },
    actor: {

    },
    subObject: [],
    create() {
        var object = Object.create(HTMLMetaElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLMetaElement.memory) {
            memory[key] = rsvm.browser.HTMLMetaElement.memory[key];
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
        memory["nodeName"] = memory["tagName"] = "META";
        memory["localName"] = "meta";
        memory["outerHTML"] = "<" + memory["localName"] + ">";
        memory['style'] = rsvm.browser.CSSStyleDeclaration.create();
        memory["children"] = rsvm.browser.HTMLCollection.create();
        memory["childNodes"] = rsvm.browser.NodeList.create();
        memory["parentNode"] = document;
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};