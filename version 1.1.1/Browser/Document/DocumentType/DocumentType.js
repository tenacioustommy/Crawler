Object.defineProperty(this, "DocumentType", {
    value: function DocumentType() {
        rsvm.throwErrorNew("DocumentType");
    }
}); rsvm.safefunction(DocumentType);

Object.defineProperties(DocumentType.prototype, {
    [Symbol.toStringTag]: {
        value: "DocumentType", configurable: true
    },
    [Symbol.unscopables]: {
        value: {after: true, before: true, remove: true, replaceWith: true}, configurable: true
    },
});

DocumentType.prototype.__proto__ = Node.prototype;

DocumentType.prototype.ELEMENT_NODE = DocumentType.ELEMENT_NODE = 1;
DocumentType.prototype.ATTRIBUTE_NODE = DocumentType.ATTRIBUTE_NODE = 2;
DocumentType.prototype.TEXT_NODE = DocumentType.TEXT_NODE = 3;
DocumentType.prototype.CDATA_SECTION_NODE = DocumentType.CDATA_SECTION_NODE = 4;
DocumentType.prototype.ENTITY_REFERENCE_NODE = DocumentType.ENTITY_REFERENCE_NODE = 5;
DocumentType.prototype.ENTITY_NODE = DocumentType.ENTITY_NODE = 6;
DocumentType.prototype.PROCESSING_INSTRUCTION_NODE = DocumentType.PROCESSING_INSTRUCTION_NODE = 7;
DocumentType.prototype.COMMENT_NODE = DocumentType.COMMENT_NODE = 8;
DocumentType.prototype.DOCUMENT_NODE = DocumentType.DOCUMENT_NODE = 9;
DocumentType.prototype.DOCUMENT_TYPE_NODE = DocumentType.DOCUMENT_TYPE_NODE = 10;
DocumentType.prototype.DOCUMENT_FRAGMENT_NODE = DocumentType.DOCUMENT_FRAGMENT_NODE = 11;
DocumentType.prototype.NOTATION_NODE = DocumentType.NOTATION_NODE = 12;
DocumentType.prototype.DOCUMENT_POSITION_DISCONNECTED = DocumentType.DOCUMENT_POSITION_DISCONNECTED = 1;
DocumentType.prototype.DOCUMENT_POSITION_PRECEDING = DocumentType.DOCUMENT_POSITION_PRECEDING = 2;
DocumentType.prototype.DOCUMENT_POSITION_FOLLOWING = DocumentType.DOCUMENT_POSITION_FOLLOWING = 4;
DocumentType.prototype.DOCUMENT_POSITION_CONTAINS = DocumentType.DOCUMENT_POSITION_CONTAINS = 8;
DocumentType.prototype.DOCUMENT_POSITION_CONTAINED_BY = DocumentType.DOCUMENT_POSITION_CONTAINED_BY = 16;
DocumentType.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = DocumentType.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
DocumentType.prototype["after"] = rsvm.browser.DocumentType.actor.after;
Object.defineProperty(rsvm.browser.DocumentType.actor.after, "length", { value: 0 });
DocumentType.prototype["before"] = rsvm.browser.DocumentType.actor.before;
Object.defineProperty(rsvm.browser.DocumentType.actor.before, "length", { value: 0 });
DocumentType.prototype["remove"] = rsvm.browser.DocumentType.actor.remove;
Object.defineProperty(rsvm.browser.DocumentType.actor.remove, "length", { value: 0 });
DocumentType.prototype["replaceWith"] = rsvm.browser.DocumentType.actor.replaceWith;
Object.defineProperty(rsvm.browser.DocumentType.actor.replaceWith, "length", { value: 0 });


Object.defineProperty(DocumentType.prototype, "name", {
    get: rsvm.browser.DocumentType.getter.name,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DocumentType.getter.name, "name", {
    value: "get name"
});
Object.defineProperty(DocumentType.prototype, "publicId", {
    get: rsvm.browser.DocumentType.getter.publicId,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DocumentType.getter.publicId, "name", {
    value: "get publicId"
});
Object.defineProperty(DocumentType.prototype, "systemId", {
    get: rsvm.browser.DocumentType.getter.systemId,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.DocumentType.getter.systemId, "name", {
    value: "get systemId"
});


for (const key in rsvm.browser.DocumentType.getter) {
    rsvm.safefunction(rsvm.browser.DocumentType.getter[key]);
}
for (const key in rsvm.browser.DocumentType.setter) {
    rsvm.safefunction(rsvm.browser.DocumentType.setter[key]);
}
for (const key in rsvm.browser.DocumentType.actor) {
    rsvm.safefunction(rsvm.browser.DocumentType.actor[key]);
};


DocumentType = rsvm.proxy(DocumentType);