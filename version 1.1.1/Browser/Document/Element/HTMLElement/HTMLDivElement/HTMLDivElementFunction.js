rsvm.browser.HTMLDivElement = {
    memory: {
        align: "",
    },
    getter: {
        align() {
            debugger;
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLDivElement");
            }
            if (!HTMLDivElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].align;
                }
            }
            return rsvm.browser.HTMLDivElement.memory.align;
        },
    },
    setter: {
        align() {
            debugger;
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].align = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {

    },
    subObject: [],
    create() {
        var object = Object.create(HTMLDivElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLDivElement.memory) {
            memory[key] = rsvm.browser.HTMLDivElement.memory[key];
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
        memory["nodeName"] = memory["tagName"] = "DIV";
        memory["localName"] = "div";
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