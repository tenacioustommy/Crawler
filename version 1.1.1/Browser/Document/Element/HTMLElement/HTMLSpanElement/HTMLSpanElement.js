Object.defineProperty(this, "HTMLSpanElement", {
    value: function HTMLSpanElement() {
        rsvm.throwErrorNew("HTMLSpanElement");
    }
}); rsvm.safefunction(HTMLSpanElement);

Object.defineProperties(HTMLSpanElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLSpanElement", configurable: true
    }
});

HTMLSpanElement.prototype.ELEMENT_NODE = HTMLSpanElement.ELEMENT_NODE = 1;
HTMLSpanElement.prototype.ATTRIBUTE_NODE = HTMLSpanElement.ATTRIBUTE_NODE = 2;
HTMLSpanElement.prototype.TEXT_NODE = HTMLSpanElement.TEXT_NODE = 3;
HTMLSpanElement.prototype.CDATA_SECTION_NODE = HTMLSpanElement.CDATA_SECTION_NODE = 4;
HTMLSpanElement.prototype.ENTITY_REFERENCE_NODE = HTMLSpanElement.ENTITY_REFERENCE_NODE = 5;
HTMLSpanElement.prototype.ENTITY_NODE = HTMLSpanElement.ENTITY_NODE = 6;
HTMLSpanElement.prototype.PROCESSING_INSTRUCTION_NODE = HTMLSpanElement.PROCESSING_INSTRUCTION_NODE = 7;
HTMLSpanElement.prototype.COMMENT_NODE = HTMLSpanElement.COMMENT_NODE = 8;
HTMLSpanElement.prototype.DOCUMENT_NODE = HTMLSpanElement.DOCUMENT_NODE = 9;
HTMLSpanElement.prototype.DOCUMENT_TYPE_NODE = HTMLSpanElement.DOCUMENT_TYPE_NODE = 10;
HTMLSpanElement.prototype.DOCUMENT_FRAGMENT_NODE = HTMLSpanElement.DOCUMENT_FRAGMENT_NODE = 11;
HTMLSpanElement.prototype.NOTATION_NODE = HTMLSpanElement.NOTATION_NODE = 12;
HTMLSpanElement.prototype.DOCUMENT_POSITION_DISCONNECTED = HTMLSpanElement.DOCUMENT_POSITION_DISCONNECTED = 1;
HTMLSpanElement.prototype.DOCUMENT_POSITION_PRECEDING = HTMLSpanElement.DOCUMENT_POSITION_PRECEDING = 2;
HTMLSpanElement.prototype.DOCUMENT_POSITION_FOLLOWING = HTMLSpanElement.DOCUMENT_POSITION_FOLLOWING = 4;
HTMLSpanElement.prototype.DOCUMENT_POSITION_CONTAINS = HTMLSpanElement.DOCUMENT_POSITION_CONTAINS = 8;
HTMLSpanElement.prototype.DOCUMENT_POSITION_CONTAINED_BY = HTMLSpanElement.DOCUMENT_POSITION_CONTAINED_BY = 16;
HTMLSpanElement.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = HTMLSpanElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

HTMLSpanElement.prototype.__proto__ = HTMLElement.prototype;


for (const key in rsvm.browser.HTMLSpanElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLSpanElement.getter[key]);
}
for (const key in rsvm.browser.HTMLSpanElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLSpanElement.setter[key]);
}
for (const key in rsvm.browser.HTMLSpanElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLSpanElement.actor[key]);
};


HTMLSpanElement = rsvm.proxy(HTMLSpanElement);