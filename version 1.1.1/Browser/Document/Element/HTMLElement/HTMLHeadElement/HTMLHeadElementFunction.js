rsvm.browser.HTMLHeadElement = {
    memory: {
    },
    getter: {
    },
    setter: {
    },
    actor: {},
    subObject: [],
    create() {
        var object = Object.create(HTMLHeadElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLHeadElement.memory) {
            memory[key] = rsvm.browser.HTMLHeadElement.memory[key];
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
        memory["nodeName"] = memory["tagName"] = "HEAD";
        memory["localName"] = "head";
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