Object.defineProperty(this, "HTMLHeadElement", {
    value: function HTMLHeadElement() {
        rsvm.throwErrorNew("HTMLHeadElement");
    }
}); rsvm.safefunction(HTMLHeadElement);

Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLHeadElement", configurable: true
    }
});

HTMLHeadElement.prototype.ELEMENT_NODE = HTMLHeadElement.ELEMENT_NODE = 1;
HTMLHeadElement.prototype.ATTRIBUTE_NODE = HTMLHeadElement.ATTRIBUTE_NODE = 2;
HTMLHeadElement.prototype.TEXT_NODE = HTMLHeadElement.TEXT_NODE = 3;
HTMLHeadElement.prototype.CDATA_SECTION_NODE = HTMLHeadElement.CDATA_SECTION_NODE = 4;
HTMLHeadElement.prototype.ENTITY_REFERENCE_NODE = HTMLHeadElement.ENTITY_REFERENCE_NODE = 5;
HTMLHeadElement.prototype.ENTITY_NODE = HTMLHeadElement.ENTITY_NODE = 6;
HTMLHeadElement.prototype.PROCESSING_INSTRUCTION_NODE = HTMLHeadElement.PROCESSING_INSTRUCTION_NODE = 7;
HTMLHeadElement.prototype.COMMENT_NODE = HTMLHeadElement.COMMENT_NODE = 8;
HTMLHeadElement.prototype.DOCUMENT_NODE = HTMLHeadElement.DOCUMENT_NODE = 9;
HTMLHeadElement.prototype.DOCUMENT_TYPE_NODE = HTMLHeadElement.DOCUMENT_TYPE_NODE = 10;
HTMLHeadElement.prototype.DOCUMENT_FRAGMENT_NODE = HTMLHeadElement.DOCUMENT_FRAGMENT_NODE = 11;
HTMLHeadElement.prototype.NOTATION_NODE = HTMLHeadElement.NOTATION_NODE = 12;
HTMLHeadElement.prototype.DOCUMENT_POSITION_DISCONNECTED = HTMLHeadElement.DOCUMENT_POSITION_DISCONNECTED = 1;
HTMLHeadElement.prototype.DOCUMENT_POSITION_PRECEDING = HTMLHeadElement.DOCUMENT_POSITION_PRECEDING = 2;
HTMLHeadElement.prototype.DOCUMENT_POSITION_FOLLOWING = HTMLHeadElement.DOCUMENT_POSITION_FOLLOWING = 4;
HTMLHeadElement.prototype.DOCUMENT_POSITION_CONTAINS = HTMLHeadElement.DOCUMENT_POSITION_CONTAINS = 8;
HTMLHeadElement.prototype.DOCUMENT_POSITION_CONTAINED_BY = HTMLHeadElement.DOCUMENT_POSITION_CONTAINED_BY = 16;
HTMLHeadElement.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = HTMLHeadElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

HTMLHeadElement.prototype.__proto__ = HTMLElement.prototype;


for (const key in rsvm.browser.HTMLHeadElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLHeadElement.getter[key]);
}
for (const key in rsvm.browser.HTMLHeadElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLHeadElement.setter[key]);
}
for (const key in rsvm.browser.HTMLHeadElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLHeadElement.actor[key]);
};


HTMLHeadElement = rsvm.proxy(HTMLHeadElement);