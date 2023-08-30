rsvm.browser.HTMLHtmlElement = {
    memory: {
        version: "",
    },
    getter: {
        version() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLHtmlElement");
            }
            if (!HTMLHtmlElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].version;
                }
            }
            return rsvm.browser.Node.memory.version;
        },
    },
    setter: {
        version() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].version = arguments[0];
                    return;
                }
            }
            rsvm.browser.Node.memory.version = arguments[0];
        },
    },
    actor: {

    },
    subObject: [],
    create() {
        var object = Object.create(HTMLHtmlElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLHtmlElement.memory) {
            memory[key] = rsvm.browser.HTMLHtmlElement.memory[key];
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
        memory["nodeName"] = memory["tagName"] = "HTML";
        memory["localName"] = "html";
        memory["outerHTML"] = "<" + memory["localName"] + ">" + "</" + memory["localName"] + ">";
        memory['style'] = rsvm.browser.CSSStyleDeclaration.create();
        memory["children"] = rsvm.browser.HTMLCollection.create();
        memory["childNodes"] = rsvm.browser.NodeList.create();
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};