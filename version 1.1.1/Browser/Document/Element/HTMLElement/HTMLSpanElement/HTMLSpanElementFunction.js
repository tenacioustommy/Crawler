rsvm.browser.HTMLSpanElement = {
    memory: {},
    getter: {},
    setter: {},
    actor: {},
    subObject: [],
    create() {
        var object = Object.create(HTMLSpanElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLSpanElement.memory) {
            memory[key] = rsvm.browser.HTMLSpanElement.memory[key];
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
        memory["nodeName"] = memory["tagName"] = "SPAN";
        memory["localName"] = "span";
        memory["innerHTML"] = "";
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