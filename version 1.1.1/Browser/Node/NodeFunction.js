rsvm.browser.Node = {
    memory: {
        nodeType: 9,
        nodeName: "#document",
        baseURI: "chrome-extension://mhloojimgilafopcmlcikiidgbbnelip/dist/index.html",
        isConnected: true,
        ownerDocument: null,
        parentNode: null,
        parentElement: null,
        childNodes: {},
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        nodeValue: null,
        textContent: null,
    },
    getter: {
        nodeType() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].nodeType;
                }
            }
            return rsvm.browser.Node.memory.nodeType;
        },
        nodeName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].nodeName;
                }
            }
            return rsvm.browser.Node.memory.nodeName;
        },
        baseURI() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0){
                        return rsvm.baseMemory.url;
                    }
                    return rsvm.browser.Node.subObject[i].baseURI;
                }
            }
            return rsvm.browser.Node.memory.baseURI;
        },
        isConnected() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].isConnected;
                }
            }
            return rsvm.browser.Node.memory.isConnected;
        },
        ownerDocument() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ownerDocument;
                }
            }
            return rsvm.browser.Node.memory.ownerDocument;
        },
        parentNode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].parentNode;
                }
            }
            return rsvm.browser.Node.memory.parentNode;
        },
        parentElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].parentElement;
                }
            }
            return rsvm.browser.Node.memory.parentElement;
        },
        childNodes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].childNodes;
                }
            }
            return rsvm.browser.Node.memory.childNodes;
        },
        firstChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].firstChild;
                }
            }
            return rsvm.browser.Node.memory.firstChild;
        },
        lastChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].lastChild;
                }
            }
            return rsvm.browser.Node.memory.lastChild;
        },
        previousSibling() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].previousSibling;
                }
            }
            return rsvm.browser.Node.memory.previousSibling;
        },
        nextSibling() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].nextSibling;
                }
            }
            return rsvm.browser.Node.memory.nextSibling;
        },
        nodeValue() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].nodeValue;
                }
            }
            return rsvm.browser.Node.memory.nodeValue;
        },
        textContent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Node");
            }
            if (!Node.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                        if (this == rsvm.browser.Node.subObject[i].dogID) {
                            return rsvm.outerText(rsvm.browser.Node.subObject[i]);
                        }
                    }
                    return rsvm.browser.HTMLElement.memory.outerText;
                }
            }
            return rsvm.browser.Node.memory.textContent;
        },
    },
    setter: {
        nodeValue() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].nodeValue = arguments[0];
                    return;
                }
            }
            rsvm.browser.Node.memory.nodeValue = arguments[0];
        },
        textContent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].textContent = arguments[0];
                    return;
                }
            }
            rsvm.browser.Node.memory.textContent = arguments[0];
        },
    },
    actor: {
        appendChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            this.children[this.children.length] = arguments[0];
        },
        cloneNode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return this;
        },
        compareDocumentPosition(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        contains(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getRootNode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hasChildNodes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        insertBefore(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isDefaultNamespace(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isEqualNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isSameNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        lookupNamespaceURI(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        lookupPrefix(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        normalize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        removeChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            var newCollect1 = rsvm.browser.HTMLCollection.create();
            for (let i = 0; i < this.children.length; i++){
                if (a !== this.children[i]){
                    newCollect1[newCollect1.length] = this.children[i];
                }
            } this.children = newCollect1;

            var newCollect2 = rsvm.browser.HTMLCollection.create();
            for (let i = 0; i < this.childNodes.length; i++){
                if (a !== this.childNodes[i]){
                    newCollect2[newCollect2.length] = this.childNodes[i];
                }
            } this.childNodes = newCollect2;
        },
        replaceChild(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};