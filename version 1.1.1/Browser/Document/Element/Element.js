Object.defineProperty(this, "Element", {
    value: function Element() {
        rsvm.throwErrorNew("Element");
    }
}); rsvm.safefunction(Element);

Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element", configurable: true
    }
});

Element.prototype.ELEMENT_NODE = Element.ELEMENT_NODE = 1;
Element.prototype.ATTRIBUTE_NODE = Element.ATTRIBUTE_NODE = 2;
Element.prototype.TEXT_NODE = Element.TEXT_NODE = 3;
Element.prototype.CDATA_SECTION_NODE = Element.CDATA_SECTION_NODE = 4;
Element.prototype.ENTITY_REFERENCE_NODE = Element.ENTITY_REFERENCE_NODE = 5;
Element.prototype.ENTITY_NODE = Element.ENTITY_NODE = 6;
Element.prototype.PROCESSING_INSTRUCTION_NODE = Element.PROCESSING_INSTRUCTION_NODE = 7;
Element.prototype.COMMENT_NODE = Element.COMMENT_NODE = 8;
Element.prototype.DOCUMENT_NODE = Element.DOCUMENT_NODE = 9;
Element.prototype.DOCUMENT_TYPE_NODE = Element.DOCUMENT_TYPE_NODE = 10;
Element.prototype.DOCUMENT_FRAGMENT_NODE = Element.DOCUMENT_FRAGMENT_NODE = 11;
Element.prototype.NOTATION_NODE = Element.NOTATION_NODE = 12;
Element.prototype.DOCUMENT_POSITION_DISCONNECTED = Element.DOCUMENT_POSITION_DISCONNECTED = 1;
Element.prototype.DOCUMENT_POSITION_PRECEDING = Element.DOCUMENT_POSITION_PRECEDING = 2;
Element.prototype.DOCUMENT_POSITION_FOLLOWING = Element.DOCUMENT_POSITION_FOLLOWING = 4;
Element.prototype.DOCUMENT_POSITION_CONTAINS = Element.DOCUMENT_POSITION_CONTAINS = 8;
Element.prototype.DOCUMENT_POSITION_CONTAINED_BY = Element.DOCUMENT_POSITION_CONTAINED_BY = 16;
Element.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = Element.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

Element.prototype.__proto__ = Node.prototype;


Element.prototype["after"] = rsvm.browser.Element.actor.after;
Object.defineProperty(rsvm.browser.Element.actor.after, "length", { value: 0 });
Element.prototype["animate"] = rsvm.browser.Element.actor.animate;
Object.defineProperty(rsvm.browser.Element.actor.animate, "length", { value: 1 });
Element.prototype["append"] = rsvm.browser.Element.actor.append;
Object.defineProperty(rsvm.browser.Element.actor.append, "length", { value: 0 });
Element.prototype["attachShadow"] = rsvm.browser.Element.actor.attachShadow;
Object.defineProperty(rsvm.browser.Element.actor.attachShadow, "length", { value: 1 });
Element.prototype["before"] = rsvm.browser.Element.actor.before;
Object.defineProperty(rsvm.browser.Element.actor.before, "length", { value: 0 });
Element.prototype["closest"] = rsvm.browser.Element.actor.closest;
Object.defineProperty(rsvm.browser.Element.actor.closest, "length", { value: 1 });
Element.prototype["computedStyleMap"] = rsvm.browser.Element.actor.computedStyleMap;
Object.defineProperty(rsvm.browser.Element.actor.computedStyleMap, "length", { value: 0 });
Element.prototype["getAttribute"] = rsvm.browser.Element.actor.getAttribute;
Object.defineProperty(rsvm.browser.Element.actor.getAttribute, "length", { value: 1 });
Element.prototype["getAttributeNS"] = rsvm.browser.Element.actor.getAttributeNS;
Object.defineProperty(rsvm.browser.Element.actor.getAttributeNS, "length", { value: 2 });
Element.prototype["getAttributeNames"] = rsvm.browser.Element.actor.getAttributeNames;
Object.defineProperty(rsvm.browser.Element.actor.getAttributeNames, "length", { value: 0 });
Element.prototype["getAttributeNode"] = rsvm.browser.Element.actor.getAttributeNode;
Object.defineProperty(rsvm.browser.Element.actor.getAttributeNode, "length", { value: 1 });
Element.prototype["getAttributeNodeNS"] = rsvm.browser.Element.actor.getAttributeNodeNS;
Object.defineProperty(rsvm.browser.Element.actor.getAttributeNodeNS, "length", { value: 2 });
Element.prototype["getBoundingClientRect"] = rsvm.browser.Element.actor.getBoundingClientRect;
Object.defineProperty(rsvm.browser.Element.actor.getBoundingClientRect, "length", { value: 0 });
Element.prototype["getClientRects"] = rsvm.browser.Element.actor.getClientRects;
Object.defineProperty(rsvm.browser.Element.actor.getClientRects, "length", { value: 0 });
Element.prototype["getElementsByClassName"] = rsvm.browser.Element.actor.getElementsByClassName;
Object.defineProperty(rsvm.browser.Element.actor.getElementsByClassName, "length", { value: 1 });
Element.prototype["getElementsByTagName"] = rsvm.browser.Element.actor.getElementsByTagName;
Object.defineProperty(rsvm.browser.Element.actor.getElementsByTagName, "length", { value: 1 });
Element.prototype["getElementsByTagNameNS"] = rsvm.browser.Element.actor.getElementsByTagNameNS;
Object.defineProperty(rsvm.browser.Element.actor.getElementsByTagNameNS, "length", { value: 2 });
Element.prototype["getInnerHTML"] = rsvm.browser.Element.actor.getInnerHTML;
Object.defineProperty(rsvm.browser.Element.actor.getInnerHTML, "length", { value: 0 });
Element.prototype["hasAttribute"] = rsvm.browser.Element.actor.hasAttribute;
Object.defineProperty(rsvm.browser.Element.actor.hasAttribute, "length", { value: 1 });
Element.prototype["hasAttributeNS"] = rsvm.browser.Element.actor.hasAttributeNS;
Object.defineProperty(rsvm.browser.Element.actor.hasAttributeNS, "length", { value: 2 });
Element.prototype["hasAttributes"] = rsvm.browser.Element.actor.hasAttributes;
Object.defineProperty(rsvm.browser.Element.actor.hasAttributes, "length", { value: 0 });
Element.prototype["hasPointerCapture"] = rsvm.browser.Element.actor.hasPointerCapture;
Object.defineProperty(rsvm.browser.Element.actor.hasPointerCapture, "length", { value: 1 });
Element.prototype["insertAdjacentElement"] = rsvm.browser.Element.actor.insertAdjacentElement;
Object.defineProperty(rsvm.browser.Element.actor.insertAdjacentElement, "length", { value: 2 });
Element.prototype["insertAdjacentHTML"] = rsvm.browser.Element.actor.insertAdjacentHTML;
Object.defineProperty(rsvm.browser.Element.actor.insertAdjacentHTML, "length", { value: 2 });
Element.prototype["insertAdjacentText"] = rsvm.browser.Element.actor.insertAdjacentText;
Object.defineProperty(rsvm.browser.Element.actor.insertAdjacentText, "length", { value: 2 });
Element.prototype["matches"] = rsvm.browser.Element.actor.matches;
Object.defineProperty(rsvm.browser.Element.actor.matches, "length", { value: 1 });
Element.prototype["prepend"] = rsvm.browser.Element.actor.prepend;
Object.defineProperty(rsvm.browser.Element.actor.prepend, "length", { value: 0 });
Element.prototype["querySelector"] = rsvm.browser.Element.actor.querySelector;
Object.defineProperty(rsvm.browser.Element.actor.querySelector, "length", { value: 1 });
Element.prototype["querySelectorAll"] = rsvm.browser.Element.actor.querySelectorAll;
Object.defineProperty(rsvm.browser.Element.actor.querySelectorAll, "length", { value: 1 });
Element.prototype["releasePointerCapture"] = rsvm.browser.Element.actor.releasePointerCapture;
Object.defineProperty(rsvm.browser.Element.actor.releasePointerCapture, "length", { value: 1 });
Element.prototype["remove"] = rsvm.browser.Element.actor.remove;
Object.defineProperty(rsvm.browser.Element.actor.remove, "length", { value: 0 });
Element.prototype["removeAttribute"] = rsvm.browser.Element.actor.removeAttribute;
Object.defineProperty(rsvm.browser.Element.actor.removeAttribute, "length", { value: 1 });
Element.prototype["removeAttributeNS"] = rsvm.browser.Element.actor.removeAttributeNS;
Object.defineProperty(rsvm.browser.Element.actor.removeAttributeNS, "length", { value: 2 });
Element.prototype["removeAttributeNode"] = rsvm.browser.Element.actor.removeAttributeNode;
Object.defineProperty(rsvm.browser.Element.actor.removeAttributeNode, "length", { value: 1 });
Element.prototype["replaceChildren"] = rsvm.browser.Element.actor.replaceChildren;
Object.defineProperty(rsvm.browser.Element.actor.replaceChildren, "length", { value: 0 });
Element.prototype["replaceWith"] = rsvm.browser.Element.actor.replaceWith;
Object.defineProperty(rsvm.browser.Element.actor.replaceWith, "length", { value: 0 });
Element.prototype["requestFullscreen"] = rsvm.browser.Element.actor.requestFullscreen;
Object.defineProperty(rsvm.browser.Element.actor.requestFullscreen, "length", { value: 0 });
Element.prototype["requestPointerLock"] = rsvm.browser.Element.actor.requestPointerLock;
Object.defineProperty(rsvm.browser.Element.actor.requestPointerLock, "length", { value: 0 });
Element.prototype["scroll"] = rsvm.browser.Element.actor.scroll;
Object.defineProperty(rsvm.browser.Element.actor.scroll, "length", { value: 0 });
Element.prototype["scrollBy"] = rsvm.browser.Element.actor.scrollBy;
Object.defineProperty(rsvm.browser.Element.actor.scrollBy, "length", { value: 0 });
Element.prototype["scrollIntoView"] = rsvm.browser.Element.actor.scrollIntoView;
Object.defineProperty(rsvm.browser.Element.actor.scrollIntoView, "length", { value: 0 });
Element.prototype["scrollIntoViewIfNeeded"] = rsvm.browser.Element.actor.scrollIntoViewIfNeeded;
Object.defineProperty(rsvm.browser.Element.actor.scrollIntoViewIfNeeded, "length", { value: 0 });
Element.prototype["scrollTo"] = rsvm.browser.Element.actor.scrollTo;
Object.defineProperty(rsvm.browser.Element.actor.scrollTo, "length", { value: 0 });
Element.prototype["setAttribute"] = rsvm.browser.Element.actor.setAttribute;
Object.defineProperty(rsvm.browser.Element.actor.setAttribute, "length", { value: 2 });
Element.prototype["setAttributeNS"] = rsvm.browser.Element.actor.setAttributeNS;
Object.defineProperty(rsvm.browser.Element.actor.setAttributeNS, "length", { value: 3 });
Element.prototype["setAttributeNode"] = rsvm.browser.Element.actor.setAttributeNode;
Object.defineProperty(rsvm.browser.Element.actor.setAttributeNode, "length", { value: 1 });
Element.prototype["setAttributeNodeNS"] = rsvm.browser.Element.actor.setAttributeNodeNS;
Object.defineProperty(rsvm.browser.Element.actor.setAttributeNodeNS, "length", { value: 1 });
Element.prototype["setPointerCapture"] = rsvm.browser.Element.actor.setPointerCapture;
Object.defineProperty(rsvm.browser.Element.actor.setPointerCapture, "length", { value: 1 });
Element.prototype["toggleAttribute"] = rsvm.browser.Element.actor.toggleAttribute;
Object.defineProperty(rsvm.browser.Element.actor.toggleAttribute, "length", { value: 1 });
Element.prototype["webkitMatchesSelector"] = rsvm.browser.Element.actor.webkitMatchesSelector;
Object.defineProperty(rsvm.browser.Element.actor.webkitMatchesSelector, "length", { value: 1 });
Element.prototype["webkitRequestFullScreen"] = rsvm.browser.Element.actor.webkitRequestFullScreen;
Object.defineProperty(rsvm.browser.Element.actor.webkitRequestFullScreen, "length", { value: 0 });
Element.prototype["webkitRequestFullscreen"] = rsvm.browser.Element.actor.webkitRequestFullscreen;
Object.defineProperty(rsvm.browser.Element.actor.webkitRequestFullscreen, "length", { value: 0 });
Element.prototype["checkVisibility"] = rsvm.browser.Element.actor.checkVisibility;
Object.defineProperty(rsvm.browser.Element.actor.checkVisibility, "length", { value: 0 });
Element.prototype["getAnimations"] = rsvm.browser.Element.actor.getAnimations;
Object.defineProperty(rsvm.browser.Element.actor.getAnimations, "length", { value: 0 });
Element.prototype["setHTML"] = rsvm.browser.Element.actor.setHTML;
Object.defineProperty(rsvm.browser.Element.actor.setHTML, "length", { value: 1 });


Object.defineProperty(Element.prototype, "namespaceURI", {
    get: rsvm.browser.Element.getter.namespaceURI,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.namespaceURI, "name", {
    value: "get namespaceURI"
});
Object.defineProperty(Element.prototype, "prefix", {
    get: rsvm.browser.Element.getter.prefix,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.prefix, "name", {
    value: "get prefix"
});
Object.defineProperty(Element.prototype, "localName", {
    get: rsvm.browser.Element.getter.localName,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.localName, "name", {
    value: "get localName"
});
Object.defineProperty(Element.prototype, "tagName", {
    get: rsvm.browser.Element.getter.tagName,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.tagName, "name", {
    value: "get tagName"
});
Object.defineProperty(Element.prototype, "id", {
    get: rsvm.browser.Element.getter.id,
    set: rsvm.browser.Element.setter.id,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.id, "name", {
    value: "get id"
});
Object.defineProperty(rsvm.browser.Element.setter.id, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.id, "name", {
    value: "set id"
});
Object.defineProperty(Element.prototype, "className", {
    get: rsvm.browser.Element.getter.className,
    set: rsvm.browser.Element.setter.className,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.className, "name", {
    value: "get className"
});
Object.defineProperty(rsvm.browser.Element.setter.className, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.className, "name", {
    value: "set className"
});
Object.defineProperty(Element.prototype, "classList", {
    get: rsvm.browser.Element.getter.classList,
    set: rsvm.browser.Element.setter.classList,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.classList, "name", {
    value: "get classList"
});
Object.defineProperty(rsvm.browser.Element.setter.classList, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.classList, "name", {
    value: "set classList"
});
Object.defineProperty(Element.prototype, "slot", {
    get: rsvm.browser.Element.getter.slot,
    set: rsvm.browser.Element.setter.slot,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.slot, "name", {
    value: "get slot"
});
Object.defineProperty(rsvm.browser.Element.setter.slot, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.slot, "name", {
    value: "set slot"
});
Object.defineProperty(Element.prototype, "attributes", {
    get: rsvm.browser.Element.getter.attributes,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.attributes, "name", {
    value: "get attributes"
});
Object.defineProperty(Element.prototype, "shadowRoot", {
    get: rsvm.browser.Element.getter.shadowRoot,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.shadowRoot, "name", {
    value: "get shadowRoot"
});
Object.defineProperty(Element.prototype, "part", {
    get: rsvm.browser.Element.getter.part,
    set: rsvm.browser.Element.setter.part,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.part, "name", {
    value: "get part"
});
Object.defineProperty(rsvm.browser.Element.setter.part, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.part, "name", {
    value: "set part"
});
Object.defineProperty(Element.prototype, "assignedSlot", {
    get: rsvm.browser.Element.getter.assignedSlot,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.assignedSlot, "name", {
    value: "get assignedSlot"
});
Object.defineProperty(Element.prototype, "innerHTML", {
    get: rsvm.browser.Element.getter.innerHTML,
    set: rsvm.browser.Element.setter.innerHTML,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.innerHTML, "name", {
    value: "get innerHTML"
});
Object.defineProperty(rsvm.browser.Element.setter.innerHTML, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.innerHTML, "name", {
    value: "set innerHTML"
});
Object.defineProperty(Element.prototype, "outerHTML", {
    get: rsvm.browser.Element.getter.outerHTML,
    set: rsvm.browser.Element.setter.outerHTML,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.outerHTML, "name", {
    value: "get outerHTML"
});
Object.defineProperty(rsvm.browser.Element.setter.outerHTML, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.outerHTML, "name", {
    value: "set outerHTML"
});
Object.defineProperty(Element.prototype, "scrollTop", {
    get: rsvm.browser.Element.getter.scrollTop,
    set: rsvm.browser.Element.setter.scrollTop,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.scrollTop, "name", {
    value: "get scrollTop"
});
Object.defineProperty(rsvm.browser.Element.setter.scrollTop, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.scrollTop, "name", {
    value: "set scrollTop"
});
Object.defineProperty(Element.prototype, "scrollLeft", {
    get: rsvm.browser.Element.getter.scrollLeft,
    set: rsvm.browser.Element.setter.scrollLeft,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.scrollLeft, "name", {
    value: "get scrollLeft"
});
Object.defineProperty(rsvm.browser.Element.setter.scrollLeft, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.scrollLeft, "name", {
    value: "set scrollLeft"
});
Object.defineProperty(Element.prototype, "scrollWidth", {
    get: rsvm.browser.Element.getter.scrollWidth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.scrollWidth, "name", {
    value: "get scrollWidth"
});
Object.defineProperty(Element.prototype, "scrollHeight", {
    get: rsvm.browser.Element.getter.scrollHeight,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.scrollHeight, "name", {
    value: "get scrollHeight"
});
Object.defineProperty(Element.prototype, "clientTop", {
    get: rsvm.browser.Element.getter.clientTop,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.clientTop, "name", {
    value: "get clientTop"
});
Object.defineProperty(Element.prototype, "clientLeft", {
    get: rsvm.browser.Element.getter.clientLeft,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.clientLeft, "name", {
    value: "get clientLeft"
});
Object.defineProperty(Element.prototype, "clientWidth", {
    get: rsvm.browser.Element.getter.clientWidth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.clientWidth, "name", {
    value: "get clientWidth"
});
Object.defineProperty(Element.prototype, "clientHeight", {
    get: rsvm.browser.Element.getter.clientHeight,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.clientHeight, "name", {
    value: "get clientHeight"
});
Object.defineProperty(Element.prototype, "onbeforecopy", {
    get: rsvm.browser.Element.getter.onbeforecopy,
    set: rsvm.browser.Element.setter.onbeforecopy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onbeforecopy, "name", {
    value: "get onbeforecopy"
});
Object.defineProperty(rsvm.browser.Element.setter.onbeforecopy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onbeforecopy, "name", {
    value: "set onbeforecopy"
});
Object.defineProperty(Element.prototype, "onbeforecut", {
    get: rsvm.browser.Element.getter.onbeforecut,
    set: rsvm.browser.Element.setter.onbeforecut,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onbeforecut, "name", {
    value: "get onbeforecut"
});
Object.defineProperty(rsvm.browser.Element.setter.onbeforecut, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onbeforecut, "name", {
    value: "set onbeforecut"
});
Object.defineProperty(Element.prototype, "onbeforepaste", {
    get: rsvm.browser.Element.getter.onbeforepaste,
    set: rsvm.browser.Element.setter.onbeforepaste,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onbeforepaste, "name", {
    value: "get onbeforepaste"
});
Object.defineProperty(rsvm.browser.Element.setter.onbeforepaste, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onbeforepaste, "name", {
    value: "set onbeforepaste"
});
Object.defineProperty(Element.prototype, "onsearch", {
    get: rsvm.browser.Element.getter.onsearch,
    set: rsvm.browser.Element.setter.onsearch,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onsearch, "name", {
    value: "get onsearch"
});
Object.defineProperty(rsvm.browser.Element.setter.onsearch, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onsearch, "name", {
    value: "set onsearch"
});
Object.defineProperty(Element.prototype, "elementTiming", {
    get: rsvm.browser.Element.getter.elementTiming,
    set: rsvm.browser.Element.setter.elementTiming,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.elementTiming, "name", {
    value: "get elementTiming"
});
Object.defineProperty(rsvm.browser.Element.setter.elementTiming, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.elementTiming, "name", {
    value: "set elementTiming"
});
Object.defineProperty(Element.prototype, "onfullscreenchange", {
    get: rsvm.browser.Element.getter.onfullscreenchange,
    set: rsvm.browser.Element.setter.onfullscreenchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onfullscreenchange, "name", {
    value: "get onfullscreenchange"
});
Object.defineProperty(rsvm.browser.Element.setter.onfullscreenchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onfullscreenchange, "name", {
    value: "set onfullscreenchange"
});
Object.defineProperty(Element.prototype, "onfullscreenerror", {
    get: rsvm.browser.Element.getter.onfullscreenerror,
    set: rsvm.browser.Element.setter.onfullscreenerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onfullscreenerror, "name", {
    value: "get onfullscreenerror"
});
Object.defineProperty(rsvm.browser.Element.setter.onfullscreenerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onfullscreenerror, "name", {
    value: "set onfullscreenerror"
});
Object.defineProperty(Element.prototype, "onwebkitfullscreenchange", {
    get: rsvm.browser.Element.getter.onwebkitfullscreenchange,
    set: rsvm.browser.Element.setter.onwebkitfullscreenchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onwebkitfullscreenchange, "name", {
    value: "get onwebkitfullscreenchange"
});
Object.defineProperty(rsvm.browser.Element.setter.onwebkitfullscreenchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onwebkitfullscreenchange, "name", {
    value: "set onwebkitfullscreenchange"
});
Object.defineProperty(Element.prototype, "onwebkitfullscreenerror", {
    get: rsvm.browser.Element.getter.onwebkitfullscreenerror,
    set: rsvm.browser.Element.setter.onwebkitfullscreenerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.onwebkitfullscreenerror, "name", {
    value: "get onwebkitfullscreenerror"
});
Object.defineProperty(rsvm.browser.Element.setter.onwebkitfullscreenerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.onwebkitfullscreenerror, "name", {
    value: "set onwebkitfullscreenerror"
});
Object.defineProperty(Element.prototype, "role", {
    get: rsvm.browser.Element.getter.role,
    set: rsvm.browser.Element.setter.role,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.role, "name", {
    value: "get role"
});
Object.defineProperty(rsvm.browser.Element.setter.role, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.role, "name", {
    value: "set role"
});
Object.defineProperty(Element.prototype, "ariaAtomic", {
    get: rsvm.browser.Element.getter.ariaAtomic,
    set: rsvm.browser.Element.setter.ariaAtomic,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaAtomic, "name", {
    value: "get ariaAtomic"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaAtomic, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaAtomic, "name", {
    value: "set ariaAtomic"
});
Object.defineProperty(Element.prototype, "ariaAutoComplete", {
    get: rsvm.browser.Element.getter.ariaAutoComplete,
    set: rsvm.browser.Element.setter.ariaAutoComplete,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaAutoComplete, "name", {
    value: "get ariaAutoComplete"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaAutoComplete, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaAutoComplete, "name", {
    value: "set ariaAutoComplete"
});
Object.defineProperty(Element.prototype, "ariaBusy", {
    get: rsvm.browser.Element.getter.ariaBusy,
    set: rsvm.browser.Element.setter.ariaBusy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaBusy, "name", {
    value: "get ariaBusy"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaBusy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaBusy, "name", {
    value: "set ariaBusy"
});
Object.defineProperty(Element.prototype, "ariaBrailleLabel", {
    get: rsvm.browser.Element.getter.ariaBrailleLabel,
    set: rsvm.browser.Element.setter.ariaBrailleLabel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaBrailleLabel, "name", {
    value: "get ariaBrailleLabel"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaBrailleLabel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaBrailleLabel, "name", {
    value: "set ariaBrailleLabel"
});
Object.defineProperty(Element.prototype, "ariaBrailleRoleDescription", {
    get: rsvm.browser.Element.getter.ariaBrailleRoleDescription,
    set: rsvm.browser.Element.setter.ariaBrailleRoleDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaBrailleRoleDescription, "name", {
    value: "get ariaBrailleRoleDescription"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaBrailleRoleDescription, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaBrailleRoleDescription, "name", {
    value: "set ariaBrailleRoleDescription"
});
Object.defineProperty(Element.prototype, "ariaChecked", {
    get: rsvm.browser.Element.getter.ariaChecked,
    set: rsvm.browser.Element.setter.ariaChecked,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaChecked, "name", {
    value: "get ariaChecked"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaChecked, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaChecked, "name", {
    value: "set ariaChecked"
});
Object.defineProperty(Element.prototype, "ariaColCount", {
    get: rsvm.browser.Element.getter.ariaColCount,
    set: rsvm.browser.Element.setter.ariaColCount,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaColCount, "name", {
    value: "get ariaColCount"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaColCount, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaColCount, "name", {
    value: "set ariaColCount"
});
Object.defineProperty(Element.prototype, "ariaColIndex", {
    get: rsvm.browser.Element.getter.ariaColIndex,
    set: rsvm.browser.Element.setter.ariaColIndex,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaColIndex, "name", {
    value: "get ariaColIndex"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaColIndex, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaColIndex, "name", {
    value: "set ariaColIndex"
});
Object.defineProperty(Element.prototype, "ariaColSpan", {
    get: rsvm.browser.Element.getter.ariaColSpan,
    set: rsvm.browser.Element.setter.ariaColSpan,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaColSpan, "name", {
    value: "get ariaColSpan"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaColSpan, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaColSpan, "name", {
    value: "set ariaColSpan"
});
Object.defineProperty(Element.prototype, "ariaCurrent", {
    get: rsvm.browser.Element.getter.ariaCurrent,
    set: rsvm.browser.Element.setter.ariaCurrent,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaCurrent, "name", {
    value: "get ariaCurrent"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaCurrent, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaCurrent, "name", {
    value: "set ariaCurrent"
});
Object.defineProperty(Element.prototype, "ariaDescription", {
    get: rsvm.browser.Element.getter.ariaDescription,
    set: rsvm.browser.Element.setter.ariaDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaDescription, "name", {
    value: "get ariaDescription"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaDescription, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaDescription, "name", {
    value: "set ariaDescription"
});
Object.defineProperty(Element.prototype, "ariaDisabled", {
    get: rsvm.browser.Element.getter.ariaDisabled,
    set: rsvm.browser.Element.setter.ariaDisabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaDisabled, "name", {
    value: "get ariaDisabled"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaDisabled, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaDisabled, "name", {
    value: "set ariaDisabled"
});
Object.defineProperty(Element.prototype, "ariaExpanded", {
    get: rsvm.browser.Element.getter.ariaExpanded,
    set: rsvm.browser.Element.setter.ariaExpanded,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaExpanded, "name", {
    value: "get ariaExpanded"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaExpanded, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaExpanded, "name", {
    value: "set ariaExpanded"
});
Object.defineProperty(Element.prototype, "ariaHasPopup", {
    get: rsvm.browser.Element.getter.ariaHasPopup,
    set: rsvm.browser.Element.setter.ariaHasPopup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaHasPopup, "name", {
    value: "get ariaHasPopup"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaHasPopup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaHasPopup, "name", {
    value: "set ariaHasPopup"
});
Object.defineProperty(Element.prototype, "ariaHidden", {
    get: rsvm.browser.Element.getter.ariaHidden,
    set: rsvm.browser.Element.setter.ariaHidden,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaHidden, "name", {
    value: "get ariaHidden"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaHidden, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaHidden, "name", {
    value: "set ariaHidden"
});
Object.defineProperty(Element.prototype, "ariaInvalid", {
    get: rsvm.browser.Element.getter.ariaInvalid,
    set: rsvm.browser.Element.setter.ariaInvalid,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaInvalid, "name", {
    value: "get ariaInvalid"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaInvalid, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaInvalid, "name", {
    value: "set ariaInvalid"
});
Object.defineProperty(Element.prototype, "ariaKeyShortcuts", {
    get: rsvm.browser.Element.getter.ariaKeyShortcuts,
    set: rsvm.browser.Element.setter.ariaKeyShortcuts,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaKeyShortcuts, "name", {
    value: "get ariaKeyShortcuts"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaKeyShortcuts, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaKeyShortcuts, "name", {
    value: "set ariaKeyShortcuts"
});
Object.defineProperty(Element.prototype, "ariaLabel", {
    get: rsvm.browser.Element.getter.ariaLabel,
    set: rsvm.browser.Element.setter.ariaLabel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaLabel, "name", {
    value: "get ariaLabel"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaLabel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaLabel, "name", {
    value: "set ariaLabel"
});
Object.defineProperty(Element.prototype, "ariaLevel", {
    get: rsvm.browser.Element.getter.ariaLevel,
    set: rsvm.browser.Element.setter.ariaLevel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaLevel, "name", {
    value: "get ariaLevel"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaLevel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaLevel, "name", {
    value: "set ariaLevel"
});
Object.defineProperty(Element.prototype, "ariaLive", {
    get: rsvm.browser.Element.getter.ariaLive,
    set: rsvm.browser.Element.setter.ariaLive,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaLive, "name", {
    value: "get ariaLive"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaLive, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaLive, "name", {
    value: "set ariaLive"
});
Object.defineProperty(Element.prototype, "ariaModal", {
    get: rsvm.browser.Element.getter.ariaModal,
    set: rsvm.browser.Element.setter.ariaModal,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaModal, "name", {
    value: "get ariaModal"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaModal, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaModal, "name", {
    value: "set ariaModal"
});
Object.defineProperty(Element.prototype, "ariaMultiLine", {
    get: rsvm.browser.Element.getter.ariaMultiLine,
    set: rsvm.browser.Element.setter.ariaMultiLine,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaMultiLine, "name", {
    value: "get ariaMultiLine"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaMultiLine, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaMultiLine, "name", {
    value: "set ariaMultiLine"
});
Object.defineProperty(Element.prototype, "ariaMultiSelectable", {
    get: rsvm.browser.Element.getter.ariaMultiSelectable,
    set: rsvm.browser.Element.setter.ariaMultiSelectable,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaMultiSelectable, "name", {
    value: "get ariaMultiSelectable"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaMultiSelectable, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaMultiSelectable, "name", {
    value: "set ariaMultiSelectable"
});
Object.defineProperty(Element.prototype, "ariaOrientation", {
    get: rsvm.browser.Element.getter.ariaOrientation,
    set: rsvm.browser.Element.setter.ariaOrientation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaOrientation, "name", {
    value: "get ariaOrientation"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaOrientation, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaOrientation, "name", {
    value: "set ariaOrientation"
});
Object.defineProperty(Element.prototype, "ariaPlaceholder", {
    get: rsvm.browser.Element.getter.ariaPlaceholder,
    set: rsvm.browser.Element.setter.ariaPlaceholder,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaPlaceholder, "name", {
    value: "get ariaPlaceholder"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaPlaceholder, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaPlaceholder, "name", {
    value: "set ariaPlaceholder"
});
Object.defineProperty(Element.prototype, "ariaPosInSet", {
    get: rsvm.browser.Element.getter.ariaPosInSet,
    set: rsvm.browser.Element.setter.ariaPosInSet,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaPosInSet, "name", {
    value: "get ariaPosInSet"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaPosInSet, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaPosInSet, "name", {
    value: "set ariaPosInSet"
});
Object.defineProperty(Element.prototype, "ariaPressed", {
    get: rsvm.browser.Element.getter.ariaPressed,
    set: rsvm.browser.Element.setter.ariaPressed,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaPressed, "name", {
    value: "get ariaPressed"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaPressed, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaPressed, "name", {
    value: "set ariaPressed"
});
Object.defineProperty(Element.prototype, "ariaReadOnly", {
    get: rsvm.browser.Element.getter.ariaReadOnly,
    set: rsvm.browser.Element.setter.ariaReadOnly,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaReadOnly, "name", {
    value: "get ariaReadOnly"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaReadOnly, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaReadOnly, "name", {
    value: "set ariaReadOnly"
});
Object.defineProperty(Element.prototype, "ariaRelevant", {
    get: rsvm.browser.Element.getter.ariaRelevant,
    set: rsvm.browser.Element.setter.ariaRelevant,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaRelevant, "name", {
    value: "get ariaRelevant"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRelevant, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRelevant, "name", {
    value: "set ariaRelevant"
});
Object.defineProperty(Element.prototype, "ariaRequired", {
    get: rsvm.browser.Element.getter.ariaRequired,
    set: rsvm.browser.Element.setter.ariaRequired,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaRequired, "name", {
    value: "get ariaRequired"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRequired, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRequired, "name", {
    value: "set ariaRequired"
});
Object.defineProperty(Element.prototype, "ariaRoleDescription", {
    get: rsvm.browser.Element.getter.ariaRoleDescription,
    set: rsvm.browser.Element.setter.ariaRoleDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaRoleDescription, "name", {
    value: "get ariaRoleDescription"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRoleDescription, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRoleDescription, "name", {
    value: "set ariaRoleDescription"
});
Object.defineProperty(Element.prototype, "ariaRowCount", {
    get: rsvm.browser.Element.getter.ariaRowCount,
    set: rsvm.browser.Element.setter.ariaRowCount,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaRowCount, "name", {
    value: "get ariaRowCount"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRowCount, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRowCount, "name", {
    value: "set ariaRowCount"
});
Object.defineProperty(Element.prototype, "ariaRowIndex", {
    get: rsvm.browser.Element.getter.ariaRowIndex,
    set: rsvm.browser.Element.setter.ariaRowIndex,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaRowIndex, "name", {
    value: "get ariaRowIndex"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRowIndex, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRowIndex, "name", {
    value: "set ariaRowIndex"
});
Object.defineProperty(Element.prototype, "ariaRowSpan", {
    get: rsvm.browser.Element.getter.ariaRowSpan,
    set: rsvm.browser.Element.setter.ariaRowSpan,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaRowSpan, "name", {
    value: "get ariaRowSpan"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRowSpan, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaRowSpan, "name", {
    value: "set ariaRowSpan"
});
Object.defineProperty(Element.prototype, "ariaSelected", {
    get: rsvm.browser.Element.getter.ariaSelected,
    set: rsvm.browser.Element.setter.ariaSelected,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaSelected, "name", {
    value: "get ariaSelected"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaSelected, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaSelected, "name", {
    value: "set ariaSelected"
});
Object.defineProperty(Element.prototype, "ariaSetSize", {
    get: rsvm.browser.Element.getter.ariaSetSize,
    set: rsvm.browser.Element.setter.ariaSetSize,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaSetSize, "name", {
    value: "get ariaSetSize"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaSetSize, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaSetSize, "name", {
    value: "set ariaSetSize"
});
Object.defineProperty(Element.prototype, "ariaSort", {
    get: rsvm.browser.Element.getter.ariaSort,
    set: rsvm.browser.Element.setter.ariaSort,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaSort, "name", {
    value: "get ariaSort"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaSort, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaSort, "name", {
    value: "set ariaSort"
});
Object.defineProperty(Element.prototype, "ariaValueMax", {
    get: rsvm.browser.Element.getter.ariaValueMax,
    set: rsvm.browser.Element.setter.ariaValueMax,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaValueMax, "name", {
    value: "get ariaValueMax"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueMax, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueMax, "name", {
    value: "set ariaValueMax"
});
Object.defineProperty(Element.prototype, "ariaValueMin", {
    get: rsvm.browser.Element.getter.ariaValueMin,
    set: rsvm.browser.Element.setter.ariaValueMin,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaValueMin, "name", {
    value: "get ariaValueMin"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueMin, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueMin, "name", {
    value: "set ariaValueMin"
});
Object.defineProperty(Element.prototype, "ariaValueNow", {
    get: rsvm.browser.Element.getter.ariaValueNow,
    set: rsvm.browser.Element.setter.ariaValueNow,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaValueNow, "name", {
    value: "get ariaValueNow"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueNow, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueNow, "name", {
    value: "set ariaValueNow"
});
Object.defineProperty(Element.prototype, "ariaValueText", {
    get: rsvm.browser.Element.getter.ariaValueText,
    set: rsvm.browser.Element.setter.ariaValueText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.ariaValueText, "name", {
    value: "get ariaValueText"
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueText, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Element.setter.ariaValueText, "name", {
    value: "set ariaValueText"
});
Object.defineProperty(Element.prototype, "children", {
    get: rsvm.browser.Element.getter.children,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.children, "name", {
    value: "get children"
});
Object.defineProperty(Element.prototype, "firstElementChild", {
    get: rsvm.browser.Element.getter.firstElementChild,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.firstElementChild, "name", {
    value: "get firstElementChild"
});
Object.defineProperty(Element.prototype, "lastElementChild", {
    get: rsvm.browser.Element.getter.lastElementChild,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.lastElementChild, "name", {
    value: "get lastElementChild"
});
Object.defineProperty(Element.prototype, "childElementCount", {
    get: rsvm.browser.Element.getter.childElementCount,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.childElementCount, "name", {
    value: "get childElementCount"
});
Object.defineProperty(Element.prototype, "previousElementSibling", {
    get: rsvm.browser.Element.getter.previousElementSibling,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.previousElementSibling, "name", {
    value: "get previousElementSibling"
});
Object.defineProperty(Element.prototype, "nextElementSibling", {
    get: rsvm.browser.Element.getter.nextElementSibling,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Element.getter.nextElementSibling, "name", {
    value: "get nextElementSibling"
});


for (const key in rsvm.browser.Element.getter) {
    rsvm.safefunction(rsvm.browser.Element.getter[key]);
}
for (const key in rsvm.browser.Element.setter) {
    rsvm.safefunction(rsvm.browser.Element.setter[key]);
}
for (const key in rsvm.browser.Element.actor) {
    rsvm.safefunction(rsvm.browser.Element.actor[key]);
};


Element = rsvm.proxy(Element);