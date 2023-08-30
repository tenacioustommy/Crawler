rsvm.browser.DocumentType = {
    memory: {
        name: "html",
        publicId: "",
        systemId: "",
    },
    getter: {
        name() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DocumentType");
            }
            if (!DocumentType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].name;
                }
            }
            return rsvm.browser.DocumentType.memory.name;
        },
        publicId() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DocumentType");
            }
            if (!DocumentType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].publicId;
                }
            }
            return rsvm.browser.DocumentType.memory.publicId;
        },
        systemId() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("DocumentType");
            }
            if (!DocumentType.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].systemId;
                }
            }
            return rsvm.browser.DocumentType.memory.systemId;
        },
    },
    setter: {
    },
    actor: {
        after() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        before() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        remove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replaceWith() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(){
        var object = Object.create(DocumentType.prototype);
        var memory = { dogID: object };
        for (const key in rsvm.browser.DocumentType.memory) {
            memory[key] = rsvm.browser.DocumentType.memory[key];
        }
        for (const key in rsvm.browser.Node.memory) {
            memory[key] = rsvm.browser.Node.memory[key];
        }
        memory["baseURI"] = rsvm.baseMemory.url;
        memory["nodeName"] = memory["name"] = "html";
        memory["ownerDocument"] = memory["parentNode"] = document;
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};