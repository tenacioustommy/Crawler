Object.defineProperty(this, "Document", {
    value: function Document() { }
}); rsvm.safefunction(Document);

Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document", configurable: true
    }
});

Document.prototype.ELEMENT_NODE = Document.ELEMENT_NODE = 1;
Document.prototype.ATTRIBUTE_NODE = Document.ATTRIBUTE_NODE = 2;
Document.prototype.TEXT_NODE = Document.TEXT_NODE = 3;
Document.prototype.CDATA_SECTION_NODE = Document.CDATA_SECTION_NODE = 4;
Document.prototype.ENTITY_REFERENCE_NODE = Document.ENTITY_REFERENCE_NODE = 5;
Document.prototype.ENTITY_NODE = Document.ENTITY_NODE = 6;
Document.prototype.PROCESSING_INSTRUCTION_NODE = Document.PROCESSING_INSTRUCTION_NODE = 7;
Document.prototype.COMMENT_NODE = Document.COMMENT_NODE = 8;
Document.prototype.DOCUMENT_NODE = Document.DOCUMENT_NODE = 9;
Document.prototype.DOCUMENT_TYPE_NODE = Document.DOCUMENT_TYPE_NODE = 10;
Document.prototype.DOCUMENT_FRAGMENT_NODE = Document.DOCUMENT_FRAGMENT_NODE = 11;
Document.prototype.NOTATION_NODE = Document.NOTATION_NODE = 12;
Document.prototype.DOCUMENT_POSITION_DISCONNECTED = Document.DOCUMENT_POSITION_DISCONNECTED = 1;
Document.prototype.DOCUMENT_POSITION_PRECEDING = Document.DOCUMENT_POSITION_PRECEDING = 2;
Document.prototype.DOCUMENT_POSITION_FOLLOWING = Document.DOCUMENT_POSITION_FOLLOWING = 4;
Document.prototype.DOCUMENT_POSITION_CONTAINS = Document.DOCUMENT_POSITION_CONTAINS = 8;
Document.prototype.DOCUMENT_POSITION_CONTAINED_BY = Document.DOCUMENT_POSITION_CONTAINED_BY = 16;
Document.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = Document.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

Document.prototype.__proto__ = Node.prototype;


Document.prototype["adoptNode"] = rsvm.browser.Document.actor.adoptNode;
Object.defineProperty(rsvm.browser.Document.actor.adoptNode, "length", { value: 1 });
Document.prototype["append"] = rsvm.browser.Document.actor.append;
Object.defineProperty(rsvm.browser.Document.actor.append, "length", { value: 0 });
Document.prototype["captureEvents"] = rsvm.browser.Document.actor.captureEvents;
Object.defineProperty(rsvm.browser.Document.actor.captureEvents, "length", { value: 0 });
Document.prototype["caretRangeFromPoint"] = rsvm.browser.Document.actor.caretRangeFromPoint;
Object.defineProperty(rsvm.browser.Document.actor.caretRangeFromPoint, "length", { value: 0 });
Document.prototype["clear"] = rsvm.browser.Document.actor.clear;
Object.defineProperty(rsvm.browser.Document.actor.clear, "length", { value: 0 });
Document.prototype["close"] = rsvm.browser.Document.actor.close;
Object.defineProperty(rsvm.browser.Document.actor.close, "length", { value: 0 });
Document.prototype["createAttribute"] = rsvm.browser.Document.actor.createAttribute;
Object.defineProperty(rsvm.browser.Document.actor.createAttribute, "length", { value: 1 });
Document.prototype["createAttributeNS"] = rsvm.browser.Document.actor.createAttributeNS;
Object.defineProperty(rsvm.browser.Document.actor.createAttributeNS, "length", { value: 2 });
Document.prototype["createCDATASection"] = rsvm.browser.Document.actor.createCDATASection;
Object.defineProperty(rsvm.browser.Document.actor.createCDATASection, "length", { value: 1 });
Document.prototype["createComment"] = rsvm.browser.Document.actor.createComment;
Object.defineProperty(rsvm.browser.Document.actor.createComment, "length", { value: 1 });
Document.prototype["createDocumentFragment"] = rsvm.browser.Document.actor.createDocumentFragment;
Object.defineProperty(rsvm.browser.Document.actor.createDocumentFragment, "length", { value: 0 });
Document.prototype["createElement"] = rsvm.browser.Document.actor.createElement;
Object.defineProperty(rsvm.browser.Document.actor.createElement, "length", { value: 1 });
Document.prototype["createElementNS"] = rsvm.browser.Document.actor.createElementNS;
Object.defineProperty(rsvm.browser.Document.actor.createElementNS, "length", { value: 2 });
Document.prototype["createEvent"] = rsvm.browser.Document.actor.createEvent;
Object.defineProperty(rsvm.browser.Document.actor.createEvent, "length", { value: 1 });
Document.prototype["createExpression"] = rsvm.browser.Document.actor.createExpression;
Object.defineProperty(rsvm.browser.Document.actor.createExpression, "length", { value: 1 });
Document.prototype["createNSResolver"] = rsvm.browser.Document.actor.createNSResolver;
Object.defineProperty(rsvm.browser.Document.actor.createNSResolver, "length", { value: 1 });
Document.prototype["createNodeIterator"] = rsvm.browser.Document.actor.createNodeIterator;
Object.defineProperty(rsvm.browser.Document.actor.createNodeIterator, "length", { value: 1 });
Document.prototype["createProcessingInstruction"] = rsvm.browser.Document.actor.createProcessingInstruction;
Object.defineProperty(rsvm.browser.Document.actor.createProcessingInstruction, "length", { value: 2 });
Document.prototype["createRange"] = rsvm.browser.Document.actor.createRange;
Object.defineProperty(rsvm.browser.Document.actor.createRange, "length", { value: 0 });
Document.prototype["createTextNode"] = rsvm.browser.Document.actor.createTextNode;
Object.defineProperty(rsvm.browser.Document.actor.createTextNode, "length", { value: 1 });
Document.prototype["createTreeWalker"] = rsvm.browser.Document.actor.createTreeWalker;
Object.defineProperty(rsvm.browser.Document.actor.createTreeWalker, "length", { value: 1 });
Document.prototype["elementFromPoint"] = rsvm.browser.Document.actor.elementFromPoint;
Object.defineProperty(rsvm.browser.Document.actor.elementFromPoint, "length", { value: 2 });
Document.prototype["elementsFromPoint"] = rsvm.browser.Document.actor.elementsFromPoint;
Object.defineProperty(rsvm.browser.Document.actor.elementsFromPoint, "length", { value: 2 });
Document.prototype["evaluate"] = rsvm.browser.Document.actor.evaluate;
Object.defineProperty(rsvm.browser.Document.actor.evaluate, "length", { value: 2 });
Document.prototype["execCommand"] = rsvm.browser.Document.actor.execCommand;
Object.defineProperty(rsvm.browser.Document.actor.execCommand, "length", { value: 1 });
Document.prototype["exitFullscreen"] = rsvm.browser.Document.actor.exitFullscreen;
Object.defineProperty(rsvm.browser.Document.actor.exitFullscreen, "length", { value: 0 });
Document.prototype["exitPictureInPicture"] = rsvm.browser.Document.actor.exitPictureInPicture;
Object.defineProperty(rsvm.browser.Document.actor.exitPictureInPicture, "length", { value: 0 });
Document.prototype["exitPointerLock"] = rsvm.browser.Document.actor.exitPointerLock;
Object.defineProperty(rsvm.browser.Document.actor.exitPointerLock, "length", { value: 0 });
Document.prototype["getElementById"] = rsvm.browser.Document.actor.getElementById;
Object.defineProperty(rsvm.browser.Document.actor.getElementById, "length", { value: 1 });
Document.prototype["getElementsByClassName"] = rsvm.browser.Document.actor.getElementsByClassName;
Object.defineProperty(rsvm.browser.Document.actor.getElementsByClassName, "length", { value: 1 });
Document.prototype["getElementsByName"] = rsvm.browser.Document.actor.getElementsByName;
Object.defineProperty(rsvm.browser.Document.actor.getElementsByName, "length", { value: 1 });
Document.prototype["getElementsByTagName"] = rsvm.browser.Document.actor.getElementsByTagName;
Object.defineProperty(rsvm.browser.Document.actor.getElementsByTagName, "length", { value: 1 });
Document.prototype["getElementsByTagNameNS"] = rsvm.browser.Document.actor.getElementsByTagNameNS;
Object.defineProperty(rsvm.browser.Document.actor.getElementsByTagNameNS, "length", { value: 2 });
Document.prototype["getSelection"] = rsvm.browser.Document.actor.getSelection;
Object.defineProperty(rsvm.browser.Document.actor.getSelection, "length", { value: 0 });
Document.prototype["hasFocus"] = rsvm.browser.Document.actor.hasFocus;
Object.defineProperty(rsvm.browser.Document.actor.hasFocus, "length", { value: 0 });
Document.prototype["importNode"] = rsvm.browser.Document.actor.importNode;
Object.defineProperty(rsvm.browser.Document.actor.importNode, "length", { value: 1 });
Document.prototype["open"] = rsvm.browser.Document.actor.open;
Object.defineProperty(rsvm.browser.Document.actor.open, "length", { value: 0 });
Document.prototype["prepend"] = rsvm.browser.Document.actor.prepend;
Object.defineProperty(rsvm.browser.Document.actor.prepend, "length", { value: 0 });
Document.prototype["queryCommandEnabled"] = rsvm.browser.Document.actor.queryCommandEnabled;
Object.defineProperty(rsvm.browser.Document.actor.queryCommandEnabled, "length", { value: 1 });
Document.prototype["queryCommandIndeterm"] = rsvm.browser.Document.actor.queryCommandIndeterm;
Object.defineProperty(rsvm.browser.Document.actor.queryCommandIndeterm, "length", { value: 1 });
Document.prototype["queryCommandState"] = rsvm.browser.Document.actor.queryCommandState;
Object.defineProperty(rsvm.browser.Document.actor.queryCommandState, "length", { value: 1 });
Document.prototype["queryCommandSupported"] = rsvm.browser.Document.actor.queryCommandSupported;
Object.defineProperty(rsvm.browser.Document.actor.queryCommandSupported, "length", { value: 1 });
Document.prototype["queryCommandValue"] = rsvm.browser.Document.actor.queryCommandValue;
Object.defineProperty(rsvm.browser.Document.actor.queryCommandValue, "length", { value: 1 });
Document.prototype["querySelector"] = rsvm.browser.Document.actor.querySelector;
Object.defineProperty(rsvm.browser.Document.actor.querySelector, "length", { value: 1 });
Document.prototype["querySelectorAll"] = rsvm.browser.Document.actor.querySelectorAll;
Object.defineProperty(rsvm.browser.Document.actor.querySelectorAll, "length", { value: 1 });
Document.prototype["releaseEvents"] = rsvm.browser.Document.actor.releaseEvents;
Object.defineProperty(rsvm.browser.Document.actor.releaseEvents, "length", { value: 0 });
Document.prototype["replaceChildren"] = rsvm.browser.Document.actor.replaceChildren;
Object.defineProperty(rsvm.browser.Document.actor.replaceChildren, "length", { value: 0 });
Document.prototype["webkitCancelFullScreen"] = rsvm.browser.Document.actor.webkitCancelFullScreen;
Object.defineProperty(rsvm.browser.Document.actor.webkitCancelFullScreen, "length", { value: 0 });
Document.prototype["webkitExitFullscreen"] = rsvm.browser.Document.actor.webkitExitFullscreen;
Object.defineProperty(rsvm.browser.Document.actor.webkitExitFullscreen, "length", { value: 0 });
Document.prototype["write"] = rsvm.browser.Document.actor.write;
Object.defineProperty(rsvm.browser.Document.actor.write, "length", { value: 0 });
Document.prototype["writeln"] = rsvm.browser.Document.actor.writeln;
Object.defineProperty(rsvm.browser.Document.actor.writeln, "length", { value: 0 });
Document.prototype["getAnimations"] = rsvm.browser.Document.actor.getAnimations;
Object.defineProperty(rsvm.browser.Document.actor.getAnimations, "length", { value: 0 });
Document.prototype["startViewTransition"] = rsvm.browser.Document.actor.startViewTransition;
Object.defineProperty(rsvm.browser.Document.actor.startViewTransition, "length", { value: 0 });


Object.defineProperty(Document.prototype, "implementation", {
    get: rsvm.browser.Document.getter.implementation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.implementation, "name", {
    value: "get implementation"
});
Object.defineProperty(Document.prototype, "URL", {
    get: rsvm.browser.Document.getter.URL,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.URL, "name", {
    value: "get URL"
});
Object.defineProperty(Document.prototype, "documentURI", {
    get: rsvm.browser.Document.getter.documentURI,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.documentURI, "name", {
    value: "get documentURI"
});
Object.defineProperty(Document.prototype, "compatMode", {
    get: rsvm.browser.Document.getter.compatMode,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.compatMode, "name", {
    value: "get compatMode"
});
Object.defineProperty(Document.prototype, "characterSet", {
    get: rsvm.browser.Document.getter.characterSet,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.characterSet, "name", {
    value: "get characterSet"
});
Object.defineProperty(Document.prototype, "charset", {
    get: rsvm.browser.Document.getter.charset,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.charset, "name", {
    value: "get charset"
});
Object.defineProperty(Document.prototype, "inputEncoding", {
    get: rsvm.browser.Document.getter.inputEncoding,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.inputEncoding, "name", {
    value: "get inputEncoding"
});
Object.defineProperty(Document.prototype, "contentType", {
    get: rsvm.browser.Document.getter.contentType,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.contentType, "name", {
    value: "get contentType"
});
Object.defineProperty(Document.prototype, "doctype", {
    get: rsvm.browser.Document.getter.doctype,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.doctype, "name", {
    value: "get doctype"
});
Object.defineProperty(Document.prototype, "documentElement", {
    get: rsvm.browser.Document.getter.documentElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.documentElement, "name", {
    value: "get documentElement"
});
Object.defineProperty(Document.prototype, "xmlEncoding", {
    get: rsvm.browser.Document.getter.xmlEncoding,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.xmlEncoding, "name", {
    value: "get xmlEncoding"
});
Object.defineProperty(Document.prototype, "xmlVersion", {
    get: rsvm.browser.Document.getter.xmlVersion,
    set: rsvm.browser.Document.setter.xmlVersion,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.xmlVersion, "name", {
    value: "get xmlVersion"
});
Object.defineProperty(rsvm.browser.Document.setter.xmlVersion, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.xmlVersion, "name", {
    value: "set xmlVersion"
});
Object.defineProperty(Document.prototype, "xmlStandalone", {
    get: rsvm.browser.Document.getter.xmlStandalone,
    set: rsvm.browser.Document.setter.xmlStandalone,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.xmlStandalone, "name", {
    value: "get xmlStandalone"
});
Object.defineProperty(rsvm.browser.Document.setter.xmlStandalone, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.xmlStandalone, "name", {
    value: "set xmlStandalone"
});
Object.defineProperty(Document.prototype, "domain", {
    get: rsvm.browser.Document.getter.domain,
    set: rsvm.browser.Document.setter.domain,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.domain, "name", {
    value: "get domain"
});
Object.defineProperty(rsvm.browser.Document.setter.domain, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.domain, "name", {
    value: "set domain"
});
Object.defineProperty(Document.prototype, "referrer", {
    get: rsvm.browser.Document.getter.referrer,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.referrer, "name", {
    value: "get referrer"
});
Object.defineProperty(Document.prototype, "cookie", {
    get: rsvm.browser.Document.getter.cookie,
    set: rsvm.browser.Document.setter.cookie,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.cookie, "name", {
    value: "get cookie"
});
Object.defineProperty(rsvm.browser.Document.setter.cookie, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.cookie, "name", {
    value: "set cookie"
});
Object.defineProperty(Document.prototype, "lastModified", {
    get: rsvm.browser.Document.getter.lastModified,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.lastModified, "name", {
    value: "get lastModified"
});
Object.defineProperty(Document.prototype, "readyState", {
    get: rsvm.browser.Document.getter.readyState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.readyState, "name", {
    value: "get readyState"
});
Object.defineProperty(Document.prototype, "title", {
    get: rsvm.browser.Document.getter.title,
    set: rsvm.browser.Document.setter.title,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.title, "name", {
    value: "get title"
});
Object.defineProperty(rsvm.browser.Document.setter.title, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.title, "name", {
    value: "set title"
});
Object.defineProperty(Document.prototype, "dir", {
    get: rsvm.browser.Document.getter.dir,
    set: rsvm.browser.Document.setter.dir,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.dir, "name", {
    value: "get dir"
});
Object.defineProperty(rsvm.browser.Document.setter.dir, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.dir, "name", {
    value: "set dir"
});
Object.defineProperty(Document.prototype, "body", {
    get: rsvm.browser.Document.getter.body,
    set: rsvm.browser.Document.setter.body,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.body, "name", {
    value: "get body"
});
Object.defineProperty(rsvm.browser.Document.setter.body, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.body, "name", {
    value: "set body"
});
Object.defineProperty(Document.prototype, "head", {
    get: rsvm.browser.Document.getter.head,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.head, "name", {
    value: "get head"
});
Object.defineProperty(Document.prototype, "images", {
    get: rsvm.browser.Document.getter.images,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.images, "name", {
    value: "get images"
});
Object.defineProperty(Document.prototype, "embeds", {
    get: rsvm.browser.Document.getter.embeds,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.embeds, "name", {
    value: "get embeds"
});
Object.defineProperty(Document.prototype, "plugins", {
    get: rsvm.browser.Document.getter.plugins,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.plugins, "name", {
    value: "get plugins"
});
Object.defineProperty(Document.prototype, "links", {
    get: rsvm.browser.Document.getter.links,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.links, "name", {
    value: "get links"
});
Object.defineProperty(Document.prototype, "forms", {
    get: rsvm.browser.Document.getter.forms,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.forms, "name", {
    value: "get forms"
});
Object.defineProperty(Document.prototype, "scripts", {
    get: rsvm.browser.Document.getter.scripts,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.scripts, "name", {
    value: "get scripts"
});
Object.defineProperty(Document.prototype, "currentScript", {
    get: rsvm.browser.Document.getter.currentScript,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.currentScript, "name", {
    value: "get currentScript"
});
Object.defineProperty(Document.prototype, "defaultView", {
    get: rsvm.browser.Document.getter.defaultView,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.defaultView, "name", {
    value: "get defaultView"
});
Object.defineProperty(Document.prototype, "designMode", {
    get: rsvm.browser.Document.getter.designMode,
    set: rsvm.browser.Document.setter.designMode,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.designMode, "name", {
    value: "get designMode"
});
Object.defineProperty(rsvm.browser.Document.setter.designMode, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.designMode, "name", {
    value: "set designMode"
});
Object.defineProperty(Document.prototype, "anchors", {
    get: rsvm.browser.Document.getter.anchors,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.anchors, "name", {
    value: "get anchors"
});
Object.defineProperty(Document.prototype, "applets", {
    get: rsvm.browser.Document.getter.applets,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.applets, "name", {
    value: "get applets"
});
Object.defineProperty(Document.prototype, "fgColor", {
    get: rsvm.browser.Document.getter.fgColor,
    set: rsvm.browser.Document.setter.fgColor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.fgColor, "name", {
    value: "get fgColor"
});
Object.defineProperty(rsvm.browser.Document.setter.fgColor, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.fgColor, "name", {
    value: "set fgColor"
});
Object.defineProperty(Document.prototype, "linkColor", {
    get: rsvm.browser.Document.getter.linkColor,
    set: rsvm.browser.Document.setter.linkColor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.linkColor, "name", {
    value: "get linkColor"
});
Object.defineProperty(rsvm.browser.Document.setter.linkColor, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.linkColor, "name", {
    value: "set linkColor"
});
Object.defineProperty(Document.prototype, "vlinkColor", {
    get: rsvm.browser.Document.getter.vlinkColor,
    set: rsvm.browser.Document.setter.vlinkColor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.vlinkColor, "name", {
    value: "get vlinkColor"
});
Object.defineProperty(rsvm.browser.Document.setter.vlinkColor, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.vlinkColor, "name", {
    value: "set vlinkColor"
});
Object.defineProperty(Document.prototype, "alinkColor", {
    get: rsvm.browser.Document.getter.alinkColor,
    set: rsvm.browser.Document.setter.alinkColor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.alinkColor, "name", {
    value: "get alinkColor"
});
Object.defineProperty(rsvm.browser.Document.setter.alinkColor, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.alinkColor, "name", {
    value: "set alinkColor"
});
Object.defineProperty(Document.prototype, "bgColor", {
    get: rsvm.browser.Document.getter.bgColor,
    set: rsvm.browser.Document.setter.bgColor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.bgColor, "name", {
    value: "get bgColor"
});
Object.defineProperty(rsvm.browser.Document.setter.bgColor, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.bgColor, "name", {
    value: "set bgColor"
});
Object.defineProperty(Document.prototype, "all", {
    get: rsvm.browser.Document.getter.all,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.all, "name", {
    value: "get all"
});
Object.defineProperty(Document.prototype, "scrollingElement", {
    get: rsvm.browser.Document.getter.scrollingElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.scrollingElement, "name", {
    value: "get scrollingElement"
});
Object.defineProperty(Document.prototype, "onpointerlockchange", {
    get: rsvm.browser.Document.getter.onpointerlockchange,
    set: rsvm.browser.Document.setter.onpointerlockchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerlockchange, "name", {
    value: "get onpointerlockchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerlockchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerlockchange, "name", {
    value: "set onpointerlockchange"
});
Object.defineProperty(Document.prototype, "onpointerlockerror", {
    get: rsvm.browser.Document.getter.onpointerlockerror,
    set: rsvm.browser.Document.setter.onpointerlockerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerlockerror, "name", {
    value: "get onpointerlockerror"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerlockerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerlockerror, "name", {
    value: "set onpointerlockerror"
});
Object.defineProperty(Document.prototype, "hidden", {
    get: rsvm.browser.Document.getter.hidden,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.hidden, "name", {
    value: "get hidden"
});
Object.defineProperty(Document.prototype, "visibilityState", {
    get: rsvm.browser.Document.getter.visibilityState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.visibilityState, "name", {
    value: "get visibilityState"
});
Object.defineProperty(Document.prototype, "wasDiscarded", {
    get: rsvm.browser.Document.getter.wasDiscarded,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.wasDiscarded, "name", {
    value: "get wasDiscarded"
});
Object.defineProperty(Document.prototype, "featurePolicy", {
    get: rsvm.browser.Document.getter.featurePolicy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.featurePolicy, "name", {
    value: "get featurePolicy"
});
Object.defineProperty(Document.prototype, "webkitVisibilityState", {
    get: rsvm.browser.Document.getter.webkitVisibilityState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.webkitVisibilityState, "name", {
    value: "get webkitVisibilityState"
});
Object.defineProperty(Document.prototype, "webkitHidden", {
    get: rsvm.browser.Document.getter.webkitHidden,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.webkitHidden, "name", {
    value: "get webkitHidden"
});
Object.defineProperty(Document.prototype, "onbeforecopy", {
    get: rsvm.browser.Document.getter.onbeforecopy,
    set: rsvm.browser.Document.setter.onbeforecopy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onbeforecopy, "name", {
    value: "get onbeforecopy"
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforecopy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforecopy, "name", {
    value: "set onbeforecopy"
});
Object.defineProperty(Document.prototype, "onbeforecut", {
    get: rsvm.browser.Document.getter.onbeforecut,
    set: rsvm.browser.Document.setter.onbeforecut,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onbeforecut, "name", {
    value: "get onbeforecut"
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforecut, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforecut, "name", {
    value: "set onbeforecut"
});
Object.defineProperty(Document.prototype, "onbeforepaste", {
    get: rsvm.browser.Document.getter.onbeforepaste,
    set: rsvm.browser.Document.setter.onbeforepaste,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onbeforepaste, "name", {
    value: "get onbeforepaste"
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforepaste, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforepaste, "name", {
    value: "set onbeforepaste"
});
Object.defineProperty(Document.prototype, "onfreeze", {
    get: rsvm.browser.Document.getter.onfreeze,
    set: rsvm.browser.Document.setter.onfreeze,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onfreeze, "name", {
    value: "get onfreeze"
});
Object.defineProperty(rsvm.browser.Document.setter.onfreeze, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onfreeze, "name", {
    value: "set onfreeze"
});
Object.defineProperty(Document.prototype, "onresume", {
    get: rsvm.browser.Document.getter.onresume,
    set: rsvm.browser.Document.setter.onresume,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onresume, "name", {
    value: "get onresume"
});
Object.defineProperty(rsvm.browser.Document.setter.onresume, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onresume, "name", {
    value: "set onresume"
});
Object.defineProperty(Document.prototype, "onsearch", {
    get: rsvm.browser.Document.getter.onsearch,
    set: rsvm.browser.Document.setter.onsearch,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onsearch, "name", {
    value: "get onsearch"
});
Object.defineProperty(rsvm.browser.Document.setter.onsearch, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onsearch, "name", {
    value: "set onsearch"
});
Object.defineProperty(Document.prototype, "onvisibilitychange", {
    get: rsvm.browser.Document.getter.onvisibilitychange,
    set: rsvm.browser.Document.setter.onvisibilitychange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onvisibilitychange, "name", {
    value: "get onvisibilitychange"
});
Object.defineProperty(rsvm.browser.Document.setter.onvisibilitychange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onvisibilitychange, "name", {
    value: "set onvisibilitychange"
});
Object.defineProperty(Document.prototype, "fullscreenEnabled", {
    get: rsvm.browser.Document.getter.fullscreenEnabled,
    set: rsvm.browser.Document.setter.fullscreenEnabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.fullscreenEnabled, "name", {
    value: "get fullscreenEnabled"
});
Object.defineProperty(rsvm.browser.Document.setter.fullscreenEnabled, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.fullscreenEnabled, "name", {
    value: "set fullscreenEnabled"
});
Object.defineProperty(Document.prototype, "fullscreen", {
    get: rsvm.browser.Document.getter.fullscreen,
    set: rsvm.browser.Document.setter.fullscreen,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.fullscreen, "name", {
    value: "get fullscreen"
});
Object.defineProperty(rsvm.browser.Document.setter.fullscreen, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.fullscreen, "name", {
    value: "set fullscreen"
});
Object.defineProperty(Document.prototype, "onfullscreenchange", {
    get: rsvm.browser.Document.getter.onfullscreenchange,
    set: rsvm.browser.Document.setter.onfullscreenchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onfullscreenchange, "name", {
    value: "get onfullscreenchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onfullscreenchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onfullscreenchange, "name", {
    value: "set onfullscreenchange"
});
Object.defineProperty(Document.prototype, "onfullscreenerror", {
    get: rsvm.browser.Document.getter.onfullscreenerror,
    set: rsvm.browser.Document.setter.onfullscreenerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onfullscreenerror, "name", {
    value: "get onfullscreenerror"
});
Object.defineProperty(rsvm.browser.Document.setter.onfullscreenerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onfullscreenerror, "name", {
    value: "set onfullscreenerror"
});
Object.defineProperty(Document.prototype, "webkitIsFullScreen", {
    get: rsvm.browser.Document.getter.webkitIsFullScreen,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.webkitIsFullScreen, "name", {
    value: "get webkitIsFullScreen"
});
Object.defineProperty(Document.prototype, "webkitCurrentFullScreenElement", {
    get: rsvm.browser.Document.getter.webkitCurrentFullScreenElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.webkitCurrentFullScreenElement, "name", {
    value: "get webkitCurrentFullScreenElement"
});
Object.defineProperty(Document.prototype, "webkitFullscreenEnabled", {
    get: rsvm.browser.Document.getter.webkitFullscreenEnabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.webkitFullscreenEnabled, "name", {
    value: "get webkitFullscreenEnabled"
});
Object.defineProperty(Document.prototype, "webkitFullscreenElement", {
    get: rsvm.browser.Document.getter.webkitFullscreenElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.webkitFullscreenElement, "name", {
    value: "get webkitFullscreenElement"
});
Object.defineProperty(Document.prototype, "onwebkitfullscreenchange", {
    get: rsvm.browser.Document.getter.onwebkitfullscreenchange,
    set: rsvm.browser.Document.setter.onwebkitfullscreenchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwebkitfullscreenchange, "name", {
    value: "get onwebkitfullscreenchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitfullscreenchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitfullscreenchange, "name", {
    value: "set onwebkitfullscreenchange"
});
Object.defineProperty(Document.prototype, "onwebkitfullscreenerror", {
    get: rsvm.browser.Document.getter.onwebkitfullscreenerror,
    set: rsvm.browser.Document.setter.onwebkitfullscreenerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwebkitfullscreenerror, "name", {
    value: "get onwebkitfullscreenerror"
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitfullscreenerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitfullscreenerror, "name", {
    value: "set onwebkitfullscreenerror"
});
Object.defineProperty(Document.prototype, "rootElement", {
    get: rsvm.browser.Document.getter.rootElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.rootElement, "name", {
    value: "get rootElement"
});
Object.defineProperty(Document.prototype, "pictureInPictureEnabled", {
    get: rsvm.browser.Document.getter.pictureInPictureEnabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.pictureInPictureEnabled, "name", {
    value: "get pictureInPictureEnabled"
});
Object.defineProperty(Document.prototype, "pictureInPictureElement", {
    get: rsvm.browser.Document.getter.pictureInPictureElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.pictureInPictureElement, "name", {
    value: "get pictureInPictureElement"
});
Object.defineProperty(Document.prototype, "onbeforexrselect", {
    get: rsvm.browser.Document.getter.onbeforexrselect,
    set: rsvm.browser.Document.setter.onbeforexrselect,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onbeforexrselect, "name", {
    value: "get onbeforexrselect"
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforexrselect, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforexrselect, "name", {
    value: "set onbeforexrselect"
});
Object.defineProperty(Document.prototype, "onabort", {
    get: rsvm.browser.Document.getter.onabort,
    set: rsvm.browser.Document.setter.onabort,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onabort, "name", {
    value: "get onabort"
});
Object.defineProperty(rsvm.browser.Document.setter.onabort, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onabort, "name", {
    value: "set onabort"
});
Object.defineProperty(Document.prototype, "onbeforeinput", {
    get: rsvm.browser.Document.getter.onbeforeinput,
    set: rsvm.browser.Document.setter.onbeforeinput,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onbeforeinput, "name", {
    value: "get onbeforeinput"
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforeinput, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforeinput, "name", {
    value: "set onbeforeinput"
});
Object.defineProperty(Document.prototype, "onblur", {
    get: rsvm.browser.Document.getter.onblur,
    set: rsvm.browser.Document.setter.onblur,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onblur, "name", {
    value: "get onblur"
});
Object.defineProperty(rsvm.browser.Document.setter.onblur, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onblur, "name", {
    value: "set onblur"
});
Object.defineProperty(Document.prototype, "oncancel", {
    get: rsvm.browser.Document.getter.oncancel,
    set: rsvm.browser.Document.setter.oncancel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncancel, "name", {
    value: "get oncancel"
});
Object.defineProperty(rsvm.browser.Document.setter.oncancel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncancel, "name", {
    value: "set oncancel"
});
Object.defineProperty(Document.prototype, "oncanplay", {
    get: rsvm.browser.Document.getter.oncanplay,
    set: rsvm.browser.Document.setter.oncanplay,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncanplay, "name", {
    value: "get oncanplay"
});
Object.defineProperty(rsvm.browser.Document.setter.oncanplay, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncanplay, "name", {
    value: "set oncanplay"
});
Object.defineProperty(Document.prototype, "oncanplaythrough", {
    get: rsvm.browser.Document.getter.oncanplaythrough,
    set: rsvm.browser.Document.setter.oncanplaythrough,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncanplaythrough, "name", {
    value: "get oncanplaythrough"
});
Object.defineProperty(rsvm.browser.Document.setter.oncanplaythrough, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncanplaythrough, "name", {
    value: "set oncanplaythrough"
});
Object.defineProperty(Document.prototype, "onchange", {
    get: rsvm.browser.Document.getter.onchange,
    set: rsvm.browser.Document.setter.onchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onchange, "name", {
    value: "get onchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onchange, "name", {
    value: "set onchange"
});
Object.defineProperty(Document.prototype, "onclick", {
    get: rsvm.browser.Document.getter.onclick,
    set: rsvm.browser.Document.setter.onclick,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onclick, "name", {
    value: "get onclick"
});
Object.defineProperty(rsvm.browser.Document.setter.onclick, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onclick, "name", {
    value: "set onclick"
});
Object.defineProperty(Document.prototype, "onclose", {
    get: rsvm.browser.Document.getter.onclose,
    set: rsvm.browser.Document.setter.onclose,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onclose, "name", {
    value: "get onclose"
});
Object.defineProperty(rsvm.browser.Document.setter.onclose, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onclose, "name", {
    value: "set onclose"
});
Object.defineProperty(Document.prototype, "oncontextlost", {
    get: rsvm.browser.Document.getter.oncontextlost,
    set: rsvm.browser.Document.setter.oncontextlost,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncontextlost, "name", {
    value: "get oncontextlost"
});
Object.defineProperty(rsvm.browser.Document.setter.oncontextlost, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncontextlost, "name", {
    value: "set oncontextlost"
});
Object.defineProperty(Document.prototype, "oncontextmenu", {
    get: rsvm.browser.Document.getter.oncontextmenu,
    set: rsvm.browser.Document.setter.oncontextmenu,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncontextmenu, "name", {
    value: "get oncontextmenu"
});
Object.defineProperty(rsvm.browser.Document.setter.oncontextmenu, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncontextmenu, "name", {
    value: "set oncontextmenu"
});
Object.defineProperty(Document.prototype, "oncontextrestored", {
    get: rsvm.browser.Document.getter.oncontextrestored,
    set: rsvm.browser.Document.setter.oncontextrestored,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncontextrestored, "name", {
    value: "get oncontextrestored"
});
Object.defineProperty(rsvm.browser.Document.setter.oncontextrestored, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncontextrestored, "name", {
    value: "set oncontextrestored"
});
Object.defineProperty(Document.prototype, "oncuechange", {
    get: rsvm.browser.Document.getter.oncuechange,
    set: rsvm.browser.Document.setter.oncuechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncuechange, "name", {
    value: "get oncuechange"
});
Object.defineProperty(rsvm.browser.Document.setter.oncuechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncuechange, "name", {
    value: "set oncuechange"
});
Object.defineProperty(Document.prototype, "ondblclick", {
    get: rsvm.browser.Document.getter.ondblclick,
    set: rsvm.browser.Document.setter.ondblclick,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondblclick, "name", {
    value: "get ondblclick"
});
Object.defineProperty(rsvm.browser.Document.setter.ondblclick, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondblclick, "name", {
    value: "set ondblclick"
});
Object.defineProperty(Document.prototype, "ondrag", {
    get: rsvm.browser.Document.getter.ondrag,
    set: rsvm.browser.Document.setter.ondrag,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondrag, "name", {
    value: "get ondrag"
});
Object.defineProperty(rsvm.browser.Document.setter.ondrag, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondrag, "name", {
    value: "set ondrag"
});
Object.defineProperty(Document.prototype, "ondragend", {
    get: rsvm.browser.Document.getter.ondragend,
    set: rsvm.browser.Document.setter.ondragend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondragend, "name", {
    value: "get ondragend"
});
Object.defineProperty(rsvm.browser.Document.setter.ondragend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondragend, "name", {
    value: "set ondragend"
});
Object.defineProperty(Document.prototype, "ondragenter", {
    get: rsvm.browser.Document.getter.ondragenter,
    set: rsvm.browser.Document.setter.ondragenter,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondragenter, "name", {
    value: "get ondragenter"
});
Object.defineProperty(rsvm.browser.Document.setter.ondragenter, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondragenter, "name", {
    value: "set ondragenter"
});
Object.defineProperty(Document.prototype, "ondragleave", {
    get: rsvm.browser.Document.getter.ondragleave,
    set: rsvm.browser.Document.setter.ondragleave,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondragleave, "name", {
    value: "get ondragleave"
});
Object.defineProperty(rsvm.browser.Document.setter.ondragleave, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondragleave, "name", {
    value: "set ondragleave"
});
Object.defineProperty(Document.prototype, "ondragover", {
    get: rsvm.browser.Document.getter.ondragover,
    set: rsvm.browser.Document.setter.ondragover,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondragover, "name", {
    value: "get ondragover"
});
Object.defineProperty(rsvm.browser.Document.setter.ondragover, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondragover, "name", {
    value: "set ondragover"
});
Object.defineProperty(Document.prototype, "ondragstart", {
    get: rsvm.browser.Document.getter.ondragstart,
    set: rsvm.browser.Document.setter.ondragstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondragstart, "name", {
    value: "get ondragstart"
});
Object.defineProperty(rsvm.browser.Document.setter.ondragstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondragstart, "name", {
    value: "set ondragstart"
});
Object.defineProperty(Document.prototype, "ondrop", {
    get: rsvm.browser.Document.getter.ondrop,
    set: rsvm.browser.Document.setter.ondrop,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondrop, "name", {
    value: "get ondrop"
});
Object.defineProperty(rsvm.browser.Document.setter.ondrop, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondrop, "name", {
    value: "set ondrop"
});
Object.defineProperty(Document.prototype, "ondurationchange", {
    get: rsvm.browser.Document.getter.ondurationchange,
    set: rsvm.browser.Document.setter.ondurationchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ondurationchange, "name", {
    value: "get ondurationchange"
});
Object.defineProperty(rsvm.browser.Document.setter.ondurationchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ondurationchange, "name", {
    value: "set ondurationchange"
});
Object.defineProperty(Document.prototype, "onemptied", {
    get: rsvm.browser.Document.getter.onemptied,
    set: rsvm.browser.Document.setter.onemptied,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onemptied, "name", {
    value: "get onemptied"
});
Object.defineProperty(rsvm.browser.Document.setter.onemptied, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onemptied, "name", {
    value: "set onemptied"
});
Object.defineProperty(Document.prototype, "onended", {
    get: rsvm.browser.Document.getter.onended,
    set: rsvm.browser.Document.setter.onended,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onended, "name", {
    value: "get onended"
});
Object.defineProperty(rsvm.browser.Document.setter.onended, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onended, "name", {
    value: "set onended"
});
Object.defineProperty(Document.prototype, "onerror", {
    get: rsvm.browser.Document.getter.onerror,
    set: rsvm.browser.Document.setter.onerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onerror, "name", {
    value: "get onerror"
});
Object.defineProperty(rsvm.browser.Document.setter.onerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onerror, "name", {
    value: "set onerror"
});
Object.defineProperty(Document.prototype, "onfocus", {
    get: rsvm.browser.Document.getter.onfocus,
    set: rsvm.browser.Document.setter.onfocus,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onfocus, "name", {
    value: "get onfocus"
});
Object.defineProperty(rsvm.browser.Document.setter.onfocus, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onfocus, "name", {
    value: "set onfocus"
});
Object.defineProperty(Document.prototype, "onformdata", {
    get: rsvm.browser.Document.getter.onformdata,
    set: rsvm.browser.Document.setter.onformdata,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onformdata, "name", {
    value: "get onformdata"
});
Object.defineProperty(rsvm.browser.Document.setter.onformdata, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onformdata, "name", {
    value: "set onformdata"
});
Object.defineProperty(Document.prototype, "oninput", {
    get: rsvm.browser.Document.getter.oninput,
    set: rsvm.browser.Document.setter.oninput,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oninput, "name", {
    value: "get oninput"
});
Object.defineProperty(rsvm.browser.Document.setter.oninput, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oninput, "name", {
    value: "set oninput"
});
Object.defineProperty(Document.prototype, "oninvalid", {
    get: rsvm.browser.Document.getter.oninvalid,
    set: rsvm.browser.Document.setter.oninvalid,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oninvalid, "name", {
    value: "get oninvalid"
});
Object.defineProperty(rsvm.browser.Document.setter.oninvalid, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oninvalid, "name", {
    value: "set oninvalid"
});
Object.defineProperty(Document.prototype, "onkeydown", {
    get: rsvm.browser.Document.getter.onkeydown,
    set: rsvm.browser.Document.setter.onkeydown,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onkeydown, "name", {
    value: "get onkeydown"
});
Object.defineProperty(rsvm.browser.Document.setter.onkeydown, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onkeydown, "name", {
    value: "set onkeydown"
});
Object.defineProperty(Document.prototype, "onkeypress", {
    get: rsvm.browser.Document.getter.onkeypress,
    set: rsvm.browser.Document.setter.onkeypress,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onkeypress, "name", {
    value: "get onkeypress"
});
Object.defineProperty(rsvm.browser.Document.setter.onkeypress, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onkeypress, "name", {
    value: "set onkeypress"
});
Object.defineProperty(Document.prototype, "onkeyup", {
    get: rsvm.browser.Document.getter.onkeyup,
    set: rsvm.browser.Document.setter.onkeyup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onkeyup, "name", {
    value: "get onkeyup"
});
Object.defineProperty(rsvm.browser.Document.setter.onkeyup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onkeyup, "name", {
    value: "set onkeyup"
});
Object.defineProperty(Document.prototype, "onload", {
    get: rsvm.browser.Document.getter.onload,
    set: rsvm.browser.Document.setter.onload,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onload, "name", {
    value: "get onload"
});
Object.defineProperty(rsvm.browser.Document.setter.onload, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onload, "name", {
    value: "set onload"
});
Object.defineProperty(Document.prototype, "onloadeddata", {
    get: rsvm.browser.Document.getter.onloadeddata,
    set: rsvm.browser.Document.setter.onloadeddata,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onloadeddata, "name", {
    value: "get onloadeddata"
});
Object.defineProperty(rsvm.browser.Document.setter.onloadeddata, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onloadeddata, "name", {
    value: "set onloadeddata"
});
Object.defineProperty(Document.prototype, "onloadedmetadata", {
    get: rsvm.browser.Document.getter.onloadedmetadata,
    set: rsvm.browser.Document.setter.onloadedmetadata,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onloadedmetadata, "name", {
    value: "get onloadedmetadata"
});
Object.defineProperty(rsvm.browser.Document.setter.onloadedmetadata, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onloadedmetadata, "name", {
    value: "set onloadedmetadata"
});
Object.defineProperty(Document.prototype, "onloadstart", {
    get: rsvm.browser.Document.getter.onloadstart,
    set: rsvm.browser.Document.setter.onloadstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onloadstart, "name", {
    value: "get onloadstart"
});
Object.defineProperty(rsvm.browser.Document.setter.onloadstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onloadstart, "name", {
    value: "set onloadstart"
});
Object.defineProperty(Document.prototype, "onmousedown", {
    get: rsvm.browser.Document.getter.onmousedown,
    set: rsvm.browser.Document.setter.onmousedown,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onmousedown, "name", {
    value: "get onmousedown"
});
Object.defineProperty(rsvm.browser.Document.setter.onmousedown, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onmousedown, "name", {
    value: "set onmousedown"
});
Object.defineProperty(Document.prototype, "onmousemove", {
    get: rsvm.browser.Document.getter.onmousemove,
    set: rsvm.browser.Document.setter.onmousemove,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onmousemove, "name", {
    value: "get onmousemove"
});
Object.defineProperty(rsvm.browser.Document.setter.onmousemove, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onmousemove, "name", {
    value: "set onmousemove"
});
Object.defineProperty(Document.prototype, "onmouseout", {
    get: rsvm.browser.Document.getter.onmouseout,
    set: rsvm.browser.Document.setter.onmouseout,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onmouseout, "name", {
    value: "get onmouseout"
});
Object.defineProperty(rsvm.browser.Document.setter.onmouseout, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onmouseout, "name", {
    value: "set onmouseout"
});
Object.defineProperty(Document.prototype, "onmouseover", {
    get: rsvm.browser.Document.getter.onmouseover,
    set: rsvm.browser.Document.setter.onmouseover,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onmouseover, "name", {
    value: "get onmouseover"
});
Object.defineProperty(rsvm.browser.Document.setter.onmouseover, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onmouseover, "name", {
    value: "set onmouseover"
});
Object.defineProperty(Document.prototype, "onmouseup", {
    get: rsvm.browser.Document.getter.onmouseup,
    set: rsvm.browser.Document.setter.onmouseup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onmouseup, "name", {
    value: "get onmouseup"
});
Object.defineProperty(rsvm.browser.Document.setter.onmouseup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onmouseup, "name", {
    value: "set onmouseup"
});
Object.defineProperty(Document.prototype, "onmousewheel", {
    get: rsvm.browser.Document.getter.onmousewheel,
    set: rsvm.browser.Document.setter.onmousewheel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onmousewheel, "name", {
    value: "get onmousewheel"
});
Object.defineProperty(rsvm.browser.Document.setter.onmousewheel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onmousewheel, "name", {
    value: "set onmousewheel"
});
Object.defineProperty(Document.prototype, "onpause", {
    get: rsvm.browser.Document.getter.onpause,
    set: rsvm.browser.Document.setter.onpause,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpause, "name", {
    value: "get onpause"
});
Object.defineProperty(rsvm.browser.Document.setter.onpause, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpause, "name", {
    value: "set onpause"
});
Object.defineProperty(Document.prototype, "onplay", {
    get: rsvm.browser.Document.getter.onplay,
    set: rsvm.browser.Document.setter.onplay,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onplay, "name", {
    value: "get onplay"
});
Object.defineProperty(rsvm.browser.Document.setter.onplay, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onplay, "name", {
    value: "set onplay"
});
Object.defineProperty(Document.prototype, "onplaying", {
    get: rsvm.browser.Document.getter.onplaying,
    set: rsvm.browser.Document.setter.onplaying,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onplaying, "name", {
    value: "get onplaying"
});
Object.defineProperty(rsvm.browser.Document.setter.onplaying, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onplaying, "name", {
    value: "set onplaying"
});
Object.defineProperty(Document.prototype, "onprogress", {
    get: rsvm.browser.Document.getter.onprogress,
    set: rsvm.browser.Document.setter.onprogress,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onprogress, "name", {
    value: "get onprogress"
});
Object.defineProperty(rsvm.browser.Document.setter.onprogress, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onprogress, "name", {
    value: "set onprogress"
});
Object.defineProperty(Document.prototype, "onratechange", {
    get: rsvm.browser.Document.getter.onratechange,
    set: rsvm.browser.Document.setter.onratechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onratechange, "name", {
    value: "get onratechange"
});
Object.defineProperty(rsvm.browser.Document.setter.onratechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onratechange, "name", {
    value: "set onratechange"
});
Object.defineProperty(Document.prototype, "onreset", {
    get: rsvm.browser.Document.getter.onreset,
    set: rsvm.browser.Document.setter.onreset,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onreset, "name", {
    value: "get onreset"
});
Object.defineProperty(rsvm.browser.Document.setter.onreset, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onreset, "name", {
    value: "set onreset"
});
Object.defineProperty(Document.prototype, "onresize", {
    get: rsvm.browser.Document.getter.onresize,
    set: rsvm.browser.Document.setter.onresize,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onresize, "name", {
    value: "get onresize"
});
Object.defineProperty(rsvm.browser.Document.setter.onresize, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onresize, "name", {
    value: "set onresize"
});
Object.defineProperty(Document.prototype, "onscroll", {
    get: rsvm.browser.Document.getter.onscroll,
    set: rsvm.browser.Document.setter.onscroll,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onscroll, "name", {
    value: "get onscroll"
});
Object.defineProperty(rsvm.browser.Document.setter.onscroll, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onscroll, "name", {
    value: "set onscroll"
});
Object.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
    get: rsvm.browser.Document.getter.onsecuritypolicyviolation,
    set: rsvm.browser.Document.setter.onsecuritypolicyviolation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onsecuritypolicyviolation, "name", {
    value: "get onsecuritypolicyviolation"
});
Object.defineProperty(rsvm.browser.Document.setter.onsecuritypolicyviolation, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onsecuritypolicyviolation, "name", {
    value: "set onsecuritypolicyviolation"
});
Object.defineProperty(Document.prototype, "onseeked", {
    get: rsvm.browser.Document.getter.onseeked,
    set: rsvm.browser.Document.setter.onseeked,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onseeked, "name", {
    value: "get onseeked"
});
Object.defineProperty(rsvm.browser.Document.setter.onseeked, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onseeked, "name", {
    value: "set onseeked"
});
Object.defineProperty(Document.prototype, "onseeking", {
    get: rsvm.browser.Document.getter.onseeking,
    set: rsvm.browser.Document.setter.onseeking,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onseeking, "name", {
    value: "get onseeking"
});
Object.defineProperty(rsvm.browser.Document.setter.onseeking, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onseeking, "name", {
    value: "set onseeking"
});
Object.defineProperty(Document.prototype, "onselect", {
    get: rsvm.browser.Document.getter.onselect,
    set: rsvm.browser.Document.setter.onselect,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onselect, "name", {
    value: "get onselect"
});
Object.defineProperty(rsvm.browser.Document.setter.onselect, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onselect, "name", {
    value: "set onselect"
});
Object.defineProperty(Document.prototype, "onslotchange", {
    get: rsvm.browser.Document.getter.onslotchange,
    set: rsvm.browser.Document.setter.onslotchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onslotchange, "name", {
    value: "get onslotchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onslotchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onslotchange, "name", {
    value: "set onslotchange"
});
Object.defineProperty(Document.prototype, "onstalled", {
    get: rsvm.browser.Document.getter.onstalled,
    set: rsvm.browser.Document.setter.onstalled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onstalled, "name", {
    value: "get onstalled"
});
Object.defineProperty(rsvm.browser.Document.setter.onstalled, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onstalled, "name", {
    value: "set onstalled"
});
Object.defineProperty(Document.prototype, "onsubmit", {
    get: rsvm.browser.Document.getter.onsubmit,
    set: rsvm.browser.Document.setter.onsubmit,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onsubmit, "name", {
    value: "get onsubmit"
});
Object.defineProperty(rsvm.browser.Document.setter.onsubmit, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onsubmit, "name", {
    value: "set onsubmit"
});
Object.defineProperty(Document.prototype, "onsuspend", {
    get: rsvm.browser.Document.getter.onsuspend,
    set: rsvm.browser.Document.setter.onsuspend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onsuspend, "name", {
    value: "get onsuspend"
});
Object.defineProperty(rsvm.browser.Document.setter.onsuspend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onsuspend, "name", {
    value: "set onsuspend"
});
Object.defineProperty(Document.prototype, "ontimeupdate", {
    get: rsvm.browser.Document.getter.ontimeupdate,
    set: rsvm.browser.Document.setter.ontimeupdate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ontimeupdate, "name", {
    value: "get ontimeupdate"
});
Object.defineProperty(rsvm.browser.Document.setter.ontimeupdate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ontimeupdate, "name", {
    value: "set ontimeupdate"
});
Object.defineProperty(Document.prototype, "ontoggle", {
    get: rsvm.browser.Document.getter.ontoggle,
    set: rsvm.browser.Document.setter.ontoggle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ontoggle, "name", {
    value: "get ontoggle"
});
Object.defineProperty(rsvm.browser.Document.setter.ontoggle, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ontoggle, "name", {
    value: "set ontoggle"
});
Object.defineProperty(Document.prototype, "onvolumechange", {
    get: rsvm.browser.Document.getter.onvolumechange,
    set: rsvm.browser.Document.setter.onvolumechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onvolumechange, "name", {
    value: "get onvolumechange"
});
Object.defineProperty(rsvm.browser.Document.setter.onvolumechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onvolumechange, "name", {
    value: "set onvolumechange"
});
Object.defineProperty(Document.prototype, "onwaiting", {
    get: rsvm.browser.Document.getter.onwaiting,
    set: rsvm.browser.Document.setter.onwaiting,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwaiting, "name", {
    value: "get onwaiting"
});
Object.defineProperty(rsvm.browser.Document.setter.onwaiting, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwaiting, "name", {
    value: "set onwaiting"
});
Object.defineProperty(Document.prototype, "onwebkitanimationend", {
    get: rsvm.browser.Document.getter.onwebkitanimationend,
    set: rsvm.browser.Document.setter.onwebkitanimationend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwebkitanimationend, "name", {
    value: "get onwebkitanimationend"
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitanimationend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitanimationend, "name", {
    value: "set onwebkitanimationend"
});
Object.defineProperty(Document.prototype, "onwebkitanimationiteration", {
    get: rsvm.browser.Document.getter.onwebkitanimationiteration,
    set: rsvm.browser.Document.setter.onwebkitanimationiteration,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwebkitanimationiteration, "name", {
    value: "get onwebkitanimationiteration"
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitanimationiteration, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitanimationiteration, "name", {
    value: "set onwebkitanimationiteration"
});
Object.defineProperty(Document.prototype, "onwebkitanimationstart", {
    get: rsvm.browser.Document.getter.onwebkitanimationstart,
    set: rsvm.browser.Document.setter.onwebkitanimationstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwebkitanimationstart, "name", {
    value: "get onwebkitanimationstart"
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitanimationstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkitanimationstart, "name", {
    value: "set onwebkitanimationstart"
});
Object.defineProperty(Document.prototype, "onwebkittransitionend", {
    get: rsvm.browser.Document.getter.onwebkittransitionend,
    set: rsvm.browser.Document.setter.onwebkittransitionend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwebkittransitionend, "name", {
    value: "get onwebkittransitionend"
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkittransitionend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwebkittransitionend, "name", {
    value: "set onwebkittransitionend"
});
Object.defineProperty(Document.prototype, "onwheel", {
    get: rsvm.browser.Document.getter.onwheel,
    set: rsvm.browser.Document.setter.onwheel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onwheel, "name", {
    value: "get onwheel"
});
Object.defineProperty(rsvm.browser.Document.setter.onwheel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onwheel, "name", {
    value: "set onwheel"
});
Object.defineProperty(Document.prototype, "onauxclick", {
    get: rsvm.browser.Document.getter.onauxclick,
    set: rsvm.browser.Document.setter.onauxclick,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onauxclick, "name", {
    value: "get onauxclick"
});
Object.defineProperty(rsvm.browser.Document.setter.onauxclick, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onauxclick, "name", {
    value: "set onauxclick"
});
Object.defineProperty(Document.prototype, "ongotpointercapture", {
    get: rsvm.browser.Document.getter.ongotpointercapture,
    set: rsvm.browser.Document.setter.ongotpointercapture,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ongotpointercapture, "name", {
    value: "get ongotpointercapture"
});
Object.defineProperty(rsvm.browser.Document.setter.ongotpointercapture, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ongotpointercapture, "name", {
    value: "set ongotpointercapture"
});
Object.defineProperty(Document.prototype, "onlostpointercapture", {
    get: rsvm.browser.Document.getter.onlostpointercapture,
    set: rsvm.browser.Document.setter.onlostpointercapture,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onlostpointercapture, "name", {
    value: "get onlostpointercapture"
});
Object.defineProperty(rsvm.browser.Document.setter.onlostpointercapture, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onlostpointercapture, "name", {
    value: "set onlostpointercapture"
});
Object.defineProperty(Document.prototype, "onpointerdown", {
    get: rsvm.browser.Document.getter.onpointerdown,
    set: rsvm.browser.Document.setter.onpointerdown,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerdown, "name", {
    value: "get onpointerdown"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerdown, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerdown, "name", {
    value: "set onpointerdown"
});
Object.defineProperty(Document.prototype, "onpointermove", {
    get: rsvm.browser.Document.getter.onpointermove,
    set: rsvm.browser.Document.setter.onpointermove,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointermove, "name", {
    value: "get onpointermove"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointermove, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointermove, "name", {
    value: "set onpointermove"
});
Object.defineProperty(Document.prototype, "onpointerrawupdate", {
    get: rsvm.browser.Document.getter.onpointerrawupdate,
    set: rsvm.browser.Document.setter.onpointerrawupdate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerrawupdate, "name", {
    value: "get onpointerrawupdate"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerrawupdate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerrawupdate, "name", {
    value: "set onpointerrawupdate"
});
Object.defineProperty(Document.prototype, "onpointerup", {
    get: rsvm.browser.Document.getter.onpointerup,
    set: rsvm.browser.Document.setter.onpointerup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerup, "name", {
    value: "get onpointerup"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerup, "name", {
    value: "set onpointerup"
});
Object.defineProperty(Document.prototype, "onpointercancel", {
    get: rsvm.browser.Document.getter.onpointercancel,
    set: rsvm.browser.Document.setter.onpointercancel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointercancel, "name", {
    value: "get onpointercancel"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointercancel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointercancel, "name", {
    value: "set onpointercancel"
});
Object.defineProperty(Document.prototype, "onpointerover", {
    get: rsvm.browser.Document.getter.onpointerover,
    set: rsvm.browser.Document.setter.onpointerover,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerover, "name", {
    value: "get onpointerover"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerover, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerover, "name", {
    value: "set onpointerover"
});
Object.defineProperty(Document.prototype, "onpointerout", {
    get: rsvm.browser.Document.getter.onpointerout,
    set: rsvm.browser.Document.setter.onpointerout,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerout, "name", {
    value: "get onpointerout"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerout, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerout, "name", {
    value: "set onpointerout"
});
Object.defineProperty(Document.prototype, "onpointerenter", {
    get: rsvm.browser.Document.getter.onpointerenter,
    set: rsvm.browser.Document.setter.onpointerenter,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerenter, "name", {
    value: "get onpointerenter"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerenter, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerenter, "name", {
    value: "set onpointerenter"
});
Object.defineProperty(Document.prototype, "onpointerleave", {
    get: rsvm.browser.Document.getter.onpointerleave,
    set: rsvm.browser.Document.setter.onpointerleave,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpointerleave, "name", {
    value: "get onpointerleave"
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerleave, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpointerleave, "name", {
    value: "set onpointerleave"
});
Object.defineProperty(Document.prototype, "onselectstart", {
    get: rsvm.browser.Document.getter.onselectstart,
    set: rsvm.browser.Document.setter.onselectstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onselectstart, "name", {
    value: "get onselectstart"
});
Object.defineProperty(rsvm.browser.Document.setter.onselectstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onselectstart, "name", {
    value: "set onselectstart"
});
Object.defineProperty(Document.prototype, "onselectionchange", {
    get: rsvm.browser.Document.getter.onselectionchange,
    set: rsvm.browser.Document.setter.onselectionchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onselectionchange, "name", {
    value: "get onselectionchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onselectionchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onselectionchange, "name", {
    value: "set onselectionchange"
});
Object.defineProperty(Document.prototype, "onanimationend", {
    get: rsvm.browser.Document.getter.onanimationend,
    set: rsvm.browser.Document.setter.onanimationend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onanimationend, "name", {
    value: "get onanimationend"
});
Object.defineProperty(rsvm.browser.Document.setter.onanimationend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onanimationend, "name", {
    value: "set onanimationend"
});
Object.defineProperty(Document.prototype, "onanimationiteration", {
    get: rsvm.browser.Document.getter.onanimationiteration,
    set: rsvm.browser.Document.setter.onanimationiteration,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onanimationiteration, "name", {
    value: "get onanimationiteration"
});
Object.defineProperty(rsvm.browser.Document.setter.onanimationiteration, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onanimationiteration, "name", {
    value: "set onanimationiteration"
});
Object.defineProperty(Document.prototype, "onanimationstart", {
    get: rsvm.browser.Document.getter.onanimationstart,
    set: rsvm.browser.Document.setter.onanimationstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onanimationstart, "name", {
    value: "get onanimationstart"
});
Object.defineProperty(rsvm.browser.Document.setter.onanimationstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onanimationstart, "name", {
    value: "set onanimationstart"
});
Object.defineProperty(Document.prototype, "ontransitionrun", {
    get: rsvm.browser.Document.getter.ontransitionrun,
    set: rsvm.browser.Document.setter.ontransitionrun,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ontransitionrun, "name", {
    value: "get ontransitionrun"
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitionrun, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitionrun, "name", {
    value: "set ontransitionrun"
});
Object.defineProperty(Document.prototype, "ontransitionstart", {
    get: rsvm.browser.Document.getter.ontransitionstart,
    set: rsvm.browser.Document.setter.ontransitionstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ontransitionstart, "name", {
    value: "get ontransitionstart"
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitionstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitionstart, "name", {
    value: "set ontransitionstart"
});
Object.defineProperty(Document.prototype, "ontransitionend", {
    get: rsvm.browser.Document.getter.ontransitionend,
    set: rsvm.browser.Document.setter.ontransitionend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ontransitionend, "name", {
    value: "get ontransitionend"
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitionend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitionend, "name", {
    value: "set ontransitionend"
});
Object.defineProperty(Document.prototype, "ontransitioncancel", {
    get: rsvm.browser.Document.getter.ontransitioncancel,
    set: rsvm.browser.Document.setter.ontransitioncancel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.ontransitioncancel, "name", {
    value: "get ontransitioncancel"
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitioncancel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.ontransitioncancel, "name", {
    value: "set ontransitioncancel"
});
Object.defineProperty(Document.prototype, "oncopy", {
    get: rsvm.browser.Document.getter.oncopy,
    set: rsvm.browser.Document.setter.oncopy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncopy, "name", {
    value: "get oncopy"
});
Object.defineProperty(rsvm.browser.Document.setter.oncopy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncopy, "name", {
    value: "set oncopy"
});
Object.defineProperty(Document.prototype, "oncut", {
    get: rsvm.browser.Document.getter.oncut,
    set: rsvm.browser.Document.setter.oncut,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncut, "name", {
    value: "get oncut"
});
Object.defineProperty(rsvm.browser.Document.setter.oncut, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncut, "name", {
    value: "set oncut"
});
Object.defineProperty(Document.prototype, "onpaste", {
    get: rsvm.browser.Document.getter.onpaste,
    set: rsvm.browser.Document.setter.onpaste,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onpaste, "name", {
    value: "get onpaste"
});
Object.defineProperty(rsvm.browser.Document.setter.onpaste, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onpaste, "name", {
    value: "set onpaste"
});
Object.defineProperty(Document.prototype, "children", {
    get: rsvm.browser.Document.getter.children,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.children, "name", {
    value: "get children"
});
Object.defineProperty(Document.prototype, "firstElementChild", {
    get: rsvm.browser.Document.getter.firstElementChild,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.firstElementChild, "name", {
    value: "get firstElementChild"
});
Object.defineProperty(Document.prototype, "lastElementChild", {
    get: rsvm.browser.Document.getter.lastElementChild,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.lastElementChild, "name", {
    value: "get lastElementChild"
});
Object.defineProperty(Document.prototype, "childElementCount", {
    get: rsvm.browser.Document.getter.childElementCount,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.childElementCount, "name", {
    value: "get childElementCount"
});
Object.defineProperty(Document.prototype, "activeElement", {
    get: rsvm.browser.Document.getter.activeElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.activeElement, "name", {
    value: "get activeElement"
});
Object.defineProperty(Document.prototype, "styleSheets", {
    get: rsvm.browser.Document.getter.styleSheets,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.styleSheets, "name", {
    value: "get styleSheets"
});
Object.defineProperty(Document.prototype, "pointerLockElement", {
    get: rsvm.browser.Document.getter.pointerLockElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.pointerLockElement, "name", {
    value: "get pointerLockElement"
});
Object.defineProperty(Document.prototype, "fullscreenElement", {
    get: rsvm.browser.Document.getter.fullscreenElement,
    set: rsvm.browser.Document.setter.fullscreenElement,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.fullscreenElement, "name", {
    value: "get fullscreenElement"
});
Object.defineProperty(rsvm.browser.Document.setter.fullscreenElement, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.fullscreenElement, "name", {
    value: "set fullscreenElement"
});
Object.defineProperty(Document.prototype, "adoptedStyleSheets", {
    get: rsvm.browser.Document.getter.adoptedStyleSheets,
    set: rsvm.browser.Document.setter.adoptedStyleSheets,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.adoptedStyleSheets, "name", {
    value: "get adoptedStyleSheets"
});
Object.defineProperty(rsvm.browser.Document.setter.adoptedStyleSheets, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.adoptedStyleSheets, "name", {
    value: "set adoptedStyleSheets"
});
Object.defineProperty(Document.prototype, "fonts", {
    get: rsvm.browser.Document.getter.fonts,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.fonts, "name", {
    value: "get fonts"
});
Object.defineProperty(Document.prototype, "prerendering", {
    get: rsvm.browser.Document.getter.prerendering,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.prerendering, "name", {
    value: "get prerendering"
});
Object.defineProperty(Document.prototype, "onprerenderingchange", {
    get: rsvm.browser.Document.getter.onprerenderingchange,
    set: rsvm.browser.Document.setter.onprerenderingchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onprerenderingchange, "name", {
    value: "get onprerenderingchange"
});
Object.defineProperty(rsvm.browser.Document.setter.onprerenderingchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onprerenderingchange, "name", {
    value: "set onprerenderingchange"
});
Object.defineProperty(Document.prototype, "fragmentDirective", {
    get: rsvm.browser.Document.getter.fragmentDirective,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.fragmentDirective, "name", {
    value: "get fragmentDirective"
});
Object.defineProperty(Document.prototype, "onbeforematch", {
    get: rsvm.browser.Document.getter.onbeforematch,
    set: rsvm.browser.Document.setter.onbeforematch,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.onbeforematch, "name", {
    value: "get onbeforematch"
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforematch, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.onbeforematch, "name", {
    value: "set onbeforematch"
});
Object.defineProperty(Document.prototype, "timeline", {
    get: rsvm.browser.Document.getter.timeline,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.timeline, "name", {
    value: "get timeline"
});
Object.defineProperty(Document.prototype, "oncontentvisibilityautostatechange", {
    get: rsvm.browser.Document.getter.oncontentvisibilityautostatechange,
    set: rsvm.browser.Document.setter.oncontentvisibilityautostatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Document.getter.oncontentvisibilityautostatechange, "name", {
    value: "get oncontentvisibilityautostatechange"
});
Object.defineProperty(rsvm.browser.Document.setter.oncontentvisibilityautostatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Document.setter.oncontentvisibilityautostatechange, "name", {
    value: "set oncontentvisibilityautostatechange"
});


for (const key in rsvm.browser.Document.getter) {
    rsvm.safefunction(rsvm.browser.Document.getter[key]);
}
for (const key in rsvm.browser.Document.setter) {
    rsvm.safefunction(rsvm.browser.Document.setter[key]);
}
for (const key in rsvm.browser.Document.actor) {
    rsvm.safefunction(rsvm.browser.Document.actor[key]);
};


Document = rsvm.proxy(Document);