Object.defineProperty(this, "Node", {
    value: function Node() {
        rsvm.throwErrorNew("Node");
    }
}); rsvm.safefunction(Node);

Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
        value: "Node", configurable: true
    }
});

Node.prototype.ELEMENT_NODE = Node.ELEMENT_NODE = 1;
Node.prototype.ATTRIBUTE_NODE = Node.ATTRIBUTE_NODE = 2;
Node.prototype.TEXT_NODE = Node.TEXT_NODE = 3;
Node.prototype.CDATA_SECTION_NODE = Node.CDATA_SECTION_NODE = 4;
Node.prototype.ENTITY_REFERENCE_NODE = Node.ENTITY_REFERENCE_NODE = 5;
Node.prototype.ENTITY_NODE = Node.ENTITY_NODE = 6;
Node.prototype.PROCESSING_INSTRUCTION_NODE = Node.PROCESSING_INSTRUCTION_NODE = 7;
Node.prototype.COMMENT_NODE = Node.COMMENT_NODE = 8;
Node.prototype.DOCUMENT_NODE = Node.DOCUMENT_NODE = 9;
Node.prototype.DOCUMENT_TYPE_NODE = Node.DOCUMENT_TYPE_NODE = 10;
Node.prototype.DOCUMENT_FRAGMENT_NODE = Node.DOCUMENT_FRAGMENT_NODE = 11;
Node.prototype.NOTATION_NODE = Node.NOTATION_NODE = 12;
Node.prototype.DOCUMENT_POSITION_DISCONNECTED = Node.DOCUMENT_POSITION_DISCONNECTED = 1;
Node.prototype.DOCUMENT_POSITION_PRECEDING = Node.DOCUMENT_POSITION_PRECEDING = 2;
Node.prototype.DOCUMENT_POSITION_FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING = 4;
Node.prototype.DOCUMENT_POSITION_CONTAINS = Node.DOCUMENT_POSITION_CONTAINS = 8;
Node.prototype.DOCUMENT_POSITION_CONTAINED_BY = Node.DOCUMENT_POSITION_CONTAINED_BY = 16;
Node.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

Node.prototype.__proto__ = EventTarget.prototype;

Node.prototype["appendChild"] = rsvm.browser.Node.actor.appendChild;
Object.defineProperty(rsvm.browser.Node.actor.appendChild, "length", { value: 1 });
Node.prototype["cloneNode"] = rsvm.browser.Node.actor.cloneNode;
Object.defineProperty(rsvm.browser.Node.actor.cloneNode, "length", { value: 0 });
Node.prototype["compareDocumentPosition"] = rsvm.browser.Node.actor.compareDocumentPosition;
Object.defineProperty(rsvm.browser.Node.actor.compareDocumentPosition, "length", { value: 1 });
Node.prototype["contains"] = rsvm.browser.Node.actor.contains;
Object.defineProperty(rsvm.browser.Node.actor.contains, "length", { value: 1 });
Node.prototype["getRootNode"] = rsvm.browser.Node.actor.getRootNode;
Object.defineProperty(rsvm.browser.Node.actor.getRootNode, "length", { value: 0 });
Node.prototype["hasChildNodes"] = rsvm.browser.Node.actor.hasChildNodes;
Object.defineProperty(rsvm.browser.Node.actor.hasChildNodes, "length", { value: 0 });
Node.prototype["insertBefore"] = rsvm.browser.Node.actor.insertBefore;
Object.defineProperty(rsvm.browser.Node.actor.insertBefore, "length", { value: 2 });
Node.prototype["isDefaultNamespace"] = rsvm.browser.Node.actor.isDefaultNamespace;
Object.defineProperty(rsvm.browser.Node.actor.isDefaultNamespace, "length", { value: 1 });
Node.prototype["isEqualNode"] = rsvm.browser.Node.actor.isEqualNode;
Object.defineProperty(rsvm.browser.Node.actor.isEqualNode, "length", { value: 1 });
Node.prototype["isSameNode"] = rsvm.browser.Node.actor.isSameNode;
Object.defineProperty(rsvm.browser.Node.actor.isSameNode, "length", { value: 1 });
Node.prototype["lookupNamespaceURI"] = rsvm.browser.Node.actor.lookupNamespaceURI;
Object.defineProperty(rsvm.browser.Node.actor.lookupNamespaceURI, "length", { value: 1 });
Node.prototype["lookupPrefix"] = rsvm.browser.Node.actor.lookupPrefix;
Object.defineProperty(rsvm.browser.Node.actor.lookupPrefix, "length", { value: 1 });
Node.prototype["normalize"] = rsvm.browser.Node.actor.normalize;
Object.defineProperty(rsvm.browser.Node.actor.normalize, "length", { value: 0 });
Node.prototype["removeChild"] = rsvm.browser.Node.actor.removeChild;
Object.defineProperty(rsvm.browser.Node.actor.removeChild, "length", { value: 1 });
Node.prototype["replaceChild"] = rsvm.browser.Node.actor.replaceChild;
Object.defineProperty(rsvm.browser.Node.actor.replaceChild, "length", { value: 2 });


Object.defineProperty(Node.prototype, "nodeType", {
    get: rsvm.browser.Node.getter.nodeType,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.nodeType, "name", {
    value: "get nodeType"
});
Object.defineProperty(Node.prototype, "nodeName", {
    get: rsvm.browser.Node.getter.nodeName,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.nodeName, "name", {
    value: "get nodeName"
});
Object.defineProperty(Node.prototype, "baseURI", {
    get: rsvm.browser.Node.getter.baseURI,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.baseURI, "name", {
    value: "get baseURI"
});
Object.defineProperty(Node.prototype, "isConnected", {
    get: rsvm.browser.Node.getter.isConnected,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.isConnected, "name", {
    value: "get isConnected"
});
Object.defineProperty(Node.prototype, "ownerDocument", {
    get: rsvm.browser.Node.getter.ownerDocument,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.ownerDocument, "name", {
    value: "get ownerDocument"
});
Object.defineProperty(Node.prototype, "parentNode", {
    get: rsvm.browser.Node.getter.parentNode,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.parentNode, "name", {
    value: "get parentNode"
});
Object.defineProperty(Node.prototype, "parentElement", {
    get: rsvm.browser.Node.getter.parentElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.parentElement, "name", {
    value: "get parentElement"
});
Object.defineProperty(Node.prototype, "childNodes", {
    get: rsvm.browser.Node.getter.childNodes,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.childNodes, "name", {
    value: "get childNodes"
});
Object.defineProperty(Node.prototype, "firstChild", {
    get: rsvm.browser.Node.getter.firstChild,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.firstChild, "name", {
    value: "get firstChild"
});
Object.defineProperty(Node.prototype, "lastChild", {
    get: rsvm.browser.Node.getter.lastChild,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.lastChild, "name", {
    value: "get lastChild"
});
Object.defineProperty(Node.prototype, "previousSibling", {
    get: rsvm.browser.Node.getter.previousSibling,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.previousSibling, "name", {
    value: "get previousSibling"
});
Object.defineProperty(Node.prototype, "nextSibling", {
    get: rsvm.browser.Node.getter.nextSibling,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.nextSibling, "name", {
    value: "get nextSibling"
});
Object.defineProperty(Node.prototype, "nodeValue", {
    get: rsvm.browser.Node.getter.nodeValue,
    set: rsvm.browser.Node.setter.nodeValue,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.nodeValue, "name", {
    value: "get nodeValue"
});
Object.defineProperty(rsvm.browser.Node.setter.nodeValue, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Node.setter.nodeValue, "name", {
    value: "set nodeValue"
});
Object.defineProperty(Node.prototype, "textContent", {
    get: rsvm.browser.Node.getter.textContent,
    set: rsvm.browser.Node.setter.textContent,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Node.getter.textContent, "name", {
    value: "get textContent"
});
Object.defineProperty(rsvm.browser.Node.setter.textContent, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Node.setter.textContent, "name", {
    value: "set textContent"
});


for (const key in rsvm.browser.Node.getter) {
    rsvm.safefunction(rsvm.browser.Node.getter[key]);
}
for (const key in rsvm.browser.Node.setter) {
    rsvm.safefunction(rsvm.browser.Node.setter[key]);
}
for (const key in rsvm.browser.Node.actor) {
    rsvm.safefunction(rsvm.browser.Node.actor[key]);
};


Node = rsvm.proxy(Node);