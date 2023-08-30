Object.defineProperty(this, "HTMLElement", {
    value: function HTMLElement() {
        rsvm.throwErrorNew("HTMLElement");
    }
});

Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement", configurable: true
    }
});

HTMLElement.prototype.ELEMENT_NODE = HTMLElement.ELEMENT_NODE = 1;
HTMLElement.prototype.ATTRIBUTE_NODE = HTMLElement.ATTRIBUTE_NODE = 2;
HTMLElement.prototype.TEXT_NODE = HTMLElement.TEXT_NODE = 3;
HTMLElement.prototype.CDATA_SECTION_NODE = HTMLElement.CDATA_SECTION_NODE = 4;
HTMLElement.prototype.ENTITY_REFERENCE_NODE = HTMLElement.ENTITY_REFERENCE_NODE = 5;
HTMLElement.prototype.ENTITY_NODE = HTMLElement.ENTITY_NODE = 6;
HTMLElement.prototype.PROCESSING_INSTRUCTION_NODE = HTMLElement.PROCESSING_INSTRUCTION_NODE = 7;
HTMLElement.prototype.COMMENT_NODE = HTMLElement.COMMENT_NODE = 8;
HTMLElement.prototype.DOCUMENT_NODE = HTMLElement.DOCUMENT_NODE = 9;
HTMLElement.prototype.DOCUMENT_TYPE_NODE = HTMLElement.DOCUMENT_TYPE_NODE = 10;
HTMLElement.prototype.DOCUMENT_FRAGMENT_NODE = HTMLElement.DOCUMENT_FRAGMENT_NODE = 11;
HTMLElement.prototype.NOTATION_NODE = HTMLElement.NOTATION_NODE = 12;
HTMLElement.prototype.DOCUMENT_POSITION_DISCONNECTED = HTMLElement.DOCUMENT_POSITION_DISCONNECTED = 1;
HTMLElement.prototype.DOCUMENT_POSITION_PRECEDING = HTMLElement.DOCUMENT_POSITION_PRECEDING = 2;
HTMLElement.prototype.DOCUMENT_POSITION_FOLLOWING = HTMLElement.DOCUMENT_POSITION_FOLLOWING = 4;
HTMLElement.prototype.DOCUMENT_POSITION_CONTAINS = HTMLElement.DOCUMENT_POSITION_CONTAINS = 8;
HTMLElement.prototype.DOCUMENT_POSITION_CONTAINED_BY = HTMLElement.DOCUMENT_POSITION_CONTAINED_BY = 16;
HTMLElement.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = HTMLElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

HTMLElement.prototype.__proto__ = Element.prototype;

HTMLElement.prototype["attachInternals"] = rsvm.browser.HTMLElement.actor.attachInternals;
Object.defineProperty(rsvm.browser.HTMLElement.actor.attachInternals, "length", { value: 0 });
HTMLElement.prototype["blur"] = rsvm.browser.HTMLElement.actor.blur;
Object.defineProperty(rsvm.browser.HTMLElement.actor.blur, "length", { value: 0 });
HTMLElement.prototype["click"] = rsvm.browser.HTMLElement.actor.click;
Object.defineProperty(rsvm.browser.HTMLElement.actor.click, "length", { value: 0 });
HTMLElement.prototype["focus"] = rsvm.browser.HTMLElement.actor.focus;
Object.defineProperty(rsvm.browser.HTMLElement.actor.focus, "length", { value: 0 });


Object.defineProperty(HTMLElement.prototype, "title", {
    get: rsvm.browser.HTMLElement.getter.title,
    set: rsvm.browser.HTMLElement.setter.title,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.title, "name", {
    value: "get title"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.title, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.title, "name", {
    value: "set title"
});
Object.defineProperty(HTMLElement.prototype, "lang", {
    get: rsvm.browser.HTMLElement.getter.lang,
    set: rsvm.browser.HTMLElement.setter.lang,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.lang, "name", {
    value: "get lang"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.lang, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.lang, "name", {
    value: "set lang"
});
Object.defineProperty(HTMLElement.prototype, "translate", {
    get: rsvm.browser.HTMLElement.getter.translate,
    set: rsvm.browser.HTMLElement.setter.translate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.translate, "name", {
    value: "get translate"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.translate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.translate, "name", {
    value: "set translate"
});
Object.defineProperty(HTMLElement.prototype, "dir", {
    get: rsvm.browser.HTMLElement.getter.dir,
    set: rsvm.browser.HTMLElement.setter.dir,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.dir, "name", {
    value: "get dir"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.dir, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.dir, "name", {
    value: "set dir"
});
Object.defineProperty(HTMLElement.prototype, "hidden", {
    get: rsvm.browser.HTMLElement.getter.hidden,
    set: rsvm.browser.HTMLElement.setter.hidden,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.hidden, "name", {
    value: "get hidden"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.hidden, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.hidden, "name", {
    value: "set hidden"
});
Object.defineProperty(HTMLElement.prototype, "accessKey", {
    get: rsvm.browser.HTMLElement.getter.accessKey,
    set: rsvm.browser.HTMLElement.setter.accessKey,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.accessKey, "name", {
    value: "get accessKey"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.accessKey, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.accessKey, "name", {
    value: "set accessKey"
});
Object.defineProperty(HTMLElement.prototype, "draggable", {
    get: rsvm.browser.HTMLElement.getter.draggable,
    set: rsvm.browser.HTMLElement.setter.draggable,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.draggable, "name", {
    value: "get draggable"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.draggable, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.draggable, "name", {
    value: "set draggable"
});
Object.defineProperty(HTMLElement.prototype, "spellcheck", {
    get: rsvm.browser.HTMLElement.getter.spellcheck,
    set: rsvm.browser.HTMLElement.setter.spellcheck,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.spellcheck, "name", {
    value: "get spellcheck"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.spellcheck, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.spellcheck, "name", {
    value: "set spellcheck"
});
Object.defineProperty(HTMLElement.prototype, "autocapitalize", {
    get: rsvm.browser.HTMLElement.getter.autocapitalize,
    set: rsvm.browser.HTMLElement.setter.autocapitalize,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.autocapitalize, "name", {
    value: "get autocapitalize"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.autocapitalize, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.autocapitalize, "name", {
    value: "set autocapitalize"
});
Object.defineProperty(HTMLElement.prototype, "contentEditable", {
    get: rsvm.browser.HTMLElement.getter.contentEditable,
    set: rsvm.browser.HTMLElement.setter.contentEditable,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.contentEditable, "name", {
    value: "get contentEditable"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.contentEditable, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.contentEditable, "name", {
    value: "set contentEditable"
});
Object.defineProperty(HTMLElement.prototype, "enterKeyHint", {
    get: rsvm.browser.HTMLElement.getter.enterKeyHint,
    set: rsvm.browser.HTMLElement.setter.enterKeyHint,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.enterKeyHint, "name", {
    value: "get enterKeyHint"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.enterKeyHint, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.enterKeyHint, "name", {
    value: "set enterKeyHint"
});
Object.defineProperty(HTMLElement.prototype, "isContentEditable", {
    get: rsvm.browser.HTMLElement.getter.isContentEditable,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.isContentEditable, "name", {
    value: "get isContentEditable"
});
Object.defineProperty(HTMLElement.prototype, "inputMode", {
    get: rsvm.browser.HTMLElement.getter.inputMode,
    set: rsvm.browser.HTMLElement.setter.inputMode,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.inputMode, "name", {
    value: "get inputMode"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.inputMode, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.inputMode, "name", {
    value: "set inputMode"
});
Object.defineProperty(HTMLElement.prototype, "virtualKeyboardPolicy", {
    get: rsvm.browser.HTMLElement.getter.virtualKeyboardPolicy,
    set: rsvm.browser.HTMLElement.setter.virtualKeyboardPolicy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.virtualKeyboardPolicy, "name", {
    value: "get virtualKeyboardPolicy"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.virtualKeyboardPolicy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.virtualKeyboardPolicy, "name", {
    value: "set virtualKeyboardPolicy"
});
Object.defineProperty(HTMLElement.prototype, "offsetParent", {
    get: rsvm.browser.HTMLElement.getter.offsetParent,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.offsetParent, "name", {
    value: "get offsetParent"
});
Object.defineProperty(HTMLElement.prototype, "offsetTop", {
    get: rsvm.browser.HTMLElement.getter.offsetTop,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.offsetTop, "name", {
    value: "get offsetTop"
});
Object.defineProperty(HTMLElement.prototype, "offsetLeft", {
    get: rsvm.browser.HTMLElement.getter.offsetLeft,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.offsetLeft, "name", {
    value: "get offsetLeft"
});
Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    get: rsvm.browser.HTMLElement.getter.offsetWidth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.offsetWidth, "name", {
    value: "get offsetWidth"
});
Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
    get: rsvm.browser.HTMLElement.getter.offsetHeight,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.offsetHeight, "name", {
    value: "get offsetHeight"
});
Object.defineProperty(HTMLElement.prototype, "innerText", {
    get: rsvm.browser.HTMLElement.getter.innerText,
    set: rsvm.browser.HTMLElement.setter.innerText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.innerText, "name", {
    value: "get innerText"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.innerText, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.innerText, "name", {
    value: "set innerText"
});
Object.defineProperty(HTMLElement.prototype, "outerText", {
    get: rsvm.browser.HTMLElement.getter.outerText,
    set: rsvm.browser.HTMLElement.setter.outerText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.outerText, "name", {
    value: "get outerText"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.outerText, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.outerText, "name", {
    value: "set outerText"
});
Object.defineProperty(HTMLElement.prototype, "onbeforexrselect", {
    get: rsvm.browser.HTMLElement.getter.onbeforexrselect,
    set: rsvm.browser.HTMLElement.setter.onbeforexrselect,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onbeforexrselect, "name", {
    value: "get onbeforexrselect"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onbeforexrselect, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onbeforexrselect, "name", {
    value: "set onbeforexrselect"
});
Object.defineProperty(HTMLElement.prototype, "onabort", {
    get: rsvm.browser.HTMLElement.getter.onabort,
    set: rsvm.browser.HTMLElement.setter.onabort,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onabort, "name", {
    value: "get onabort"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onabort, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onabort, "name", {
    value: "set onabort"
});
Object.defineProperty(HTMLElement.prototype, "onbeforeinput", {
    get: rsvm.browser.HTMLElement.getter.onbeforeinput,
    set: rsvm.browser.HTMLElement.setter.onbeforeinput,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onbeforeinput, "name", {
    value: "get onbeforeinput"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onbeforeinput, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onbeforeinput, "name", {
    value: "set onbeforeinput"
});
Object.defineProperty(HTMLElement.prototype, "onblur", {
    get: rsvm.browser.HTMLElement.getter.onblur,
    set: rsvm.browser.HTMLElement.setter.onblur,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onblur, "name", {
    value: "get onblur"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onblur, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onblur, "name", {
    value: "set onblur"
});
Object.defineProperty(HTMLElement.prototype, "oncancel", {
    get: rsvm.browser.HTMLElement.getter.oncancel,
    set: rsvm.browser.HTMLElement.setter.oncancel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncancel, "name", {
    value: "get oncancel"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncancel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncancel, "name", {
    value: "set oncancel"
});
Object.defineProperty(HTMLElement.prototype, "oncanplay", {
    get: rsvm.browser.HTMLElement.getter.oncanplay,
    set: rsvm.browser.HTMLElement.setter.oncanplay,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncanplay, "name", {
    value: "get oncanplay"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncanplay, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncanplay, "name", {
    value: "set oncanplay"
});
Object.defineProperty(HTMLElement.prototype, "oncanplaythrough", {
    get: rsvm.browser.HTMLElement.getter.oncanplaythrough,
    set: rsvm.browser.HTMLElement.setter.oncanplaythrough,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncanplaythrough, "name", {
    value: "get oncanplaythrough"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncanplaythrough, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncanplaythrough, "name", {
    value: "set oncanplaythrough"
});
Object.defineProperty(HTMLElement.prototype, "onchange", {
    get: rsvm.browser.HTMLElement.getter.onchange,
    set: rsvm.browser.HTMLElement.setter.onchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onchange, "name", {
    value: "get onchange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onchange, "name", {
    value: "set onchange"
});
Object.defineProperty(HTMLElement.prototype, "onclick", {
    get: rsvm.browser.HTMLElement.getter.onclick,
    set: rsvm.browser.HTMLElement.setter.onclick,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onclick, "name", {
    value: "get onclick"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onclick, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onclick, "name", {
    value: "set onclick"
});
Object.defineProperty(HTMLElement.prototype, "onclose", {
    get: rsvm.browser.HTMLElement.getter.onclose,
    set: rsvm.browser.HTMLElement.setter.onclose,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onclose, "name", {
    value: "get onclose"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onclose, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onclose, "name", {
    value: "set onclose"
});
Object.defineProperty(HTMLElement.prototype, "oncontextlost", {
    get: rsvm.browser.HTMLElement.getter.oncontextlost,
    set: rsvm.browser.HTMLElement.setter.oncontextlost,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncontextlost, "name", {
    value: "get oncontextlost"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontextlost, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontextlost, "name", {
    value: "set oncontextlost"
});
Object.defineProperty(HTMLElement.prototype, "oncontextmenu", {
    get: rsvm.browser.HTMLElement.getter.oncontextmenu,
    set: rsvm.browser.HTMLElement.setter.oncontextmenu,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncontextmenu, "name", {
    value: "get oncontextmenu"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontextmenu, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontextmenu, "name", {
    value: "set oncontextmenu"
});
Object.defineProperty(HTMLElement.prototype, "oncontextrestored", {
    get: rsvm.browser.HTMLElement.getter.oncontextrestored,
    set: rsvm.browser.HTMLElement.setter.oncontextrestored,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncontextrestored, "name", {
    value: "get oncontextrestored"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontextrestored, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontextrestored, "name", {
    value: "set oncontextrestored"
});
Object.defineProperty(HTMLElement.prototype, "oncuechange", {
    get: rsvm.browser.HTMLElement.getter.oncuechange,
    set: rsvm.browser.HTMLElement.setter.oncuechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncuechange, "name", {
    value: "get oncuechange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncuechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncuechange, "name", {
    value: "set oncuechange"
});
Object.defineProperty(HTMLElement.prototype, "ondblclick", {
    get: rsvm.browser.HTMLElement.getter.ondblclick,
    set: rsvm.browser.HTMLElement.setter.ondblclick,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondblclick, "name", {
    value: "get ondblclick"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondblclick, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondblclick, "name", {
    value: "set ondblclick"
});
Object.defineProperty(HTMLElement.prototype, "ondrag", {
    get: rsvm.browser.HTMLElement.getter.ondrag,
    set: rsvm.browser.HTMLElement.setter.ondrag,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondrag, "name", {
    value: "get ondrag"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondrag, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondrag, "name", {
    value: "set ondrag"
});
Object.defineProperty(HTMLElement.prototype, "ondragend", {
    get: rsvm.browser.HTMLElement.getter.ondragend,
    set: rsvm.browser.HTMLElement.setter.ondragend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondragend, "name", {
    value: "get ondragend"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragend, "name", {
    value: "set ondragend"
});
Object.defineProperty(HTMLElement.prototype, "ondragenter", {
    get: rsvm.browser.HTMLElement.getter.ondragenter,
    set: rsvm.browser.HTMLElement.setter.ondragenter,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondragenter, "name", {
    value: "get ondragenter"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragenter, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragenter, "name", {
    value: "set ondragenter"
});
Object.defineProperty(HTMLElement.prototype, "ondragleave", {
    get: rsvm.browser.HTMLElement.getter.ondragleave,
    set: rsvm.browser.HTMLElement.setter.ondragleave,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondragleave, "name", {
    value: "get ondragleave"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragleave, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragleave, "name", {
    value: "set ondragleave"
});
Object.defineProperty(HTMLElement.prototype, "ondragover", {
    get: rsvm.browser.HTMLElement.getter.ondragover,
    set: rsvm.browser.HTMLElement.setter.ondragover,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondragover, "name", {
    value: "get ondragover"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragover, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragover, "name", {
    value: "set ondragover"
});
Object.defineProperty(HTMLElement.prototype, "ondragstart", {
    get: rsvm.browser.HTMLElement.getter.ondragstart,
    set: rsvm.browser.HTMLElement.setter.ondragstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondragstart, "name", {
    value: "get ondragstart"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondragstart, "name", {
    value: "set ondragstart"
});
Object.defineProperty(HTMLElement.prototype, "ondrop", {
    get: rsvm.browser.HTMLElement.getter.ondrop,
    set: rsvm.browser.HTMLElement.setter.ondrop,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondrop, "name", {
    value: "get ondrop"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondrop, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondrop, "name", {
    value: "set ondrop"
});
Object.defineProperty(HTMLElement.prototype, "ondurationchange", {
    get: rsvm.browser.HTMLElement.getter.ondurationchange,
    set: rsvm.browser.HTMLElement.setter.ondurationchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ondurationchange, "name", {
    value: "get ondurationchange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondurationchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ondurationchange, "name", {
    value: "set ondurationchange"
});
Object.defineProperty(HTMLElement.prototype, "onemptied", {
    get: rsvm.browser.HTMLElement.getter.onemptied,
    set: rsvm.browser.HTMLElement.setter.onemptied,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onemptied, "name", {
    value: "get onemptied"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onemptied, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onemptied, "name", {
    value: "set onemptied"
});
Object.defineProperty(HTMLElement.prototype, "onended", {
    get: rsvm.browser.HTMLElement.getter.onended,
    set: rsvm.browser.HTMLElement.setter.onended,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onended, "name", {
    value: "get onended"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onended, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onended, "name", {
    value: "set onended"
});
Object.defineProperty(HTMLElement.prototype, "onerror", {
    get: rsvm.browser.HTMLElement.getter.onerror,
    set: rsvm.browser.HTMLElement.setter.onerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onerror, "name", {
    value: "get onerror"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onerror, "name", {
    value: "set onerror"
});
Object.defineProperty(HTMLElement.prototype, "onfocus", {
    get: rsvm.browser.HTMLElement.getter.onfocus,
    set: rsvm.browser.HTMLElement.setter.onfocus,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onfocus, "name", {
    value: "get onfocus"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onfocus, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onfocus, "name", {
    value: "set onfocus"
});
Object.defineProperty(HTMLElement.prototype, "onformdata", {
    get: rsvm.browser.HTMLElement.getter.onformdata,
    set: rsvm.browser.HTMLElement.setter.onformdata,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onformdata, "name", {
    value: "get onformdata"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onformdata, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onformdata, "name", {
    value: "set onformdata"
});
Object.defineProperty(HTMLElement.prototype, "oninput", {
    get: rsvm.browser.HTMLElement.getter.oninput,
    set: rsvm.browser.HTMLElement.setter.oninput,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oninput, "name", {
    value: "get oninput"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oninput, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oninput, "name", {
    value: "set oninput"
});
Object.defineProperty(HTMLElement.prototype, "oninvalid", {
    get: rsvm.browser.HTMLElement.getter.oninvalid,
    set: rsvm.browser.HTMLElement.setter.oninvalid,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oninvalid, "name", {
    value: "get oninvalid"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oninvalid, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oninvalid, "name", {
    value: "set oninvalid"
});
Object.defineProperty(HTMLElement.prototype, "onkeydown", {
    get: rsvm.browser.HTMLElement.getter.onkeydown,
    set: rsvm.browser.HTMLElement.setter.onkeydown,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onkeydown, "name", {
    value: "get onkeydown"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onkeydown, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onkeydown, "name", {
    value: "set onkeydown"
});
Object.defineProperty(HTMLElement.prototype, "onkeypress", {
    get: rsvm.browser.HTMLElement.getter.onkeypress,
    set: rsvm.browser.HTMLElement.setter.onkeypress,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onkeypress, "name", {
    value: "get onkeypress"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onkeypress, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onkeypress, "name", {
    value: "set onkeypress"
});
Object.defineProperty(HTMLElement.prototype, "onkeyup", {
    get: rsvm.browser.HTMLElement.getter.onkeyup,
    set: rsvm.browser.HTMLElement.setter.onkeyup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onkeyup, "name", {
    value: "get onkeyup"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onkeyup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onkeyup, "name", {
    value: "set onkeyup"
});
Object.defineProperty(HTMLElement.prototype, "onload", {
    get: rsvm.browser.HTMLElement.getter.onload,
    set: rsvm.browser.HTMLElement.setter.onload,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onload, "name", {
    value: "get onload"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onload, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onload, "name", {
    value: "set onload"
});
Object.defineProperty(HTMLElement.prototype, "onloadeddata", {
    get: rsvm.browser.HTMLElement.getter.onloadeddata,
    set: rsvm.browser.HTMLElement.setter.onloadeddata,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onloadeddata, "name", {
    value: "get onloadeddata"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onloadeddata, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onloadeddata, "name", {
    value: "set onloadeddata"
});
Object.defineProperty(HTMLElement.prototype, "onloadedmetadata", {
    get: rsvm.browser.HTMLElement.getter.onloadedmetadata,
    set: rsvm.browser.HTMLElement.setter.onloadedmetadata,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onloadedmetadata, "name", {
    value: "get onloadedmetadata"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onloadedmetadata, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onloadedmetadata, "name", {
    value: "set onloadedmetadata"
});
Object.defineProperty(HTMLElement.prototype, "onloadstart", {
    get: rsvm.browser.HTMLElement.getter.onloadstart,
    set: rsvm.browser.HTMLElement.setter.onloadstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onloadstart, "name", {
    value: "get onloadstart"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onloadstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onloadstart, "name", {
    value: "set onloadstart"
});
Object.defineProperty(HTMLElement.prototype, "onmousedown", {
    get: rsvm.browser.HTMLElement.getter.onmousedown,
    set: rsvm.browser.HTMLElement.setter.onmousedown,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onmousedown, "name", {
    value: "get onmousedown"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmousedown, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmousedown, "name", {
    value: "set onmousedown"
});
Object.defineProperty(HTMLElement.prototype, "onmousemove", {
    get: rsvm.browser.HTMLElement.getter.onmousemove,
    set: rsvm.browser.HTMLElement.setter.onmousemove,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onmousemove, "name", {
    value: "get onmousemove"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmousemove, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmousemove, "name", {
    value: "set onmousemove"
});
Object.defineProperty(HTMLElement.prototype, "onmouseout", {
    get: rsvm.browser.HTMLElement.getter.onmouseout,
    set: rsvm.browser.HTMLElement.setter.onmouseout,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onmouseout, "name", {
    value: "get onmouseout"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmouseout, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmouseout, "name", {
    value: "set onmouseout"
});
Object.defineProperty(HTMLElement.prototype, "onmouseover", {
    get: rsvm.browser.HTMLElement.getter.onmouseover,
    set: rsvm.browser.HTMLElement.setter.onmouseover,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onmouseover, "name", {
    value: "get onmouseover"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmouseover, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmouseover, "name", {
    value: "set onmouseover"
});
Object.defineProperty(HTMLElement.prototype, "onmouseup", {
    get: rsvm.browser.HTMLElement.getter.onmouseup,
    set: rsvm.browser.HTMLElement.setter.onmouseup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onmouseup, "name", {
    value: "get onmouseup"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmouseup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmouseup, "name", {
    value: "set onmouseup"
});
Object.defineProperty(HTMLElement.prototype, "onmousewheel", {
    get: rsvm.browser.HTMLElement.getter.onmousewheel,
    set: rsvm.browser.HTMLElement.setter.onmousewheel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onmousewheel, "name", {
    value: "get onmousewheel"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmousewheel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onmousewheel, "name", {
    value: "set onmousewheel"
});
Object.defineProperty(HTMLElement.prototype, "onpause", {
    get: rsvm.browser.HTMLElement.getter.onpause,
    set: rsvm.browser.HTMLElement.setter.onpause,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpause, "name", {
    value: "get onpause"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpause, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpause, "name", {
    value: "set onpause"
});
Object.defineProperty(HTMLElement.prototype, "onplay", {
    get: rsvm.browser.HTMLElement.getter.onplay,
    set: rsvm.browser.HTMLElement.setter.onplay,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onplay, "name", {
    value: "get onplay"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onplay, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onplay, "name", {
    value: "set onplay"
});
Object.defineProperty(HTMLElement.prototype, "onplaying", {
    get: rsvm.browser.HTMLElement.getter.onplaying,
    set: rsvm.browser.HTMLElement.setter.onplaying,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onplaying, "name", {
    value: "get onplaying"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onplaying, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onplaying, "name", {
    value: "set onplaying"
});
Object.defineProperty(HTMLElement.prototype, "onprogress", {
    get: rsvm.browser.HTMLElement.getter.onprogress,
    set: rsvm.browser.HTMLElement.setter.onprogress,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onprogress, "name", {
    value: "get onprogress"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onprogress, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onprogress, "name", {
    value: "set onprogress"
});
Object.defineProperty(HTMLElement.prototype, "onratechange", {
    get: rsvm.browser.HTMLElement.getter.onratechange,
    set: rsvm.browser.HTMLElement.setter.onratechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onratechange, "name", {
    value: "get onratechange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onratechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onratechange, "name", {
    value: "set onratechange"
});
Object.defineProperty(HTMLElement.prototype, "onreset", {
    get: rsvm.browser.HTMLElement.getter.onreset,
    set: rsvm.browser.HTMLElement.setter.onreset,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onreset, "name", {
    value: "get onreset"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onreset, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onreset, "name", {
    value: "set onreset"
});
Object.defineProperty(HTMLElement.prototype, "onresize", {
    get: rsvm.browser.HTMLElement.getter.onresize,
    set: rsvm.browser.HTMLElement.setter.onresize,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onresize, "name", {
    value: "get onresize"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onresize, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onresize, "name", {
    value: "set onresize"
});
Object.defineProperty(HTMLElement.prototype, "onscroll", {
    get: rsvm.browser.HTMLElement.getter.onscroll,
    set: rsvm.browser.HTMLElement.setter.onscroll,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onscroll, "name", {
    value: "get onscroll"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onscroll, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onscroll, "name", {
    value: "set onscroll"
});
Object.defineProperty(HTMLElement.prototype, "onsecuritypolicyviolation", {
    get: rsvm.browser.HTMLElement.getter.onsecuritypolicyviolation,
    set: rsvm.browser.HTMLElement.setter.onsecuritypolicyviolation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onsecuritypolicyviolation, "name", {
    value: "get onsecuritypolicyviolation"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onsecuritypolicyviolation, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onsecuritypolicyviolation, "name", {
    value: "set onsecuritypolicyviolation"
});
Object.defineProperty(HTMLElement.prototype, "onseeked", {
    get: rsvm.browser.HTMLElement.getter.onseeked,
    set: rsvm.browser.HTMLElement.setter.onseeked,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onseeked, "name", {
    value: "get onseeked"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onseeked, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onseeked, "name", {
    value: "set onseeked"
});
Object.defineProperty(HTMLElement.prototype, "onseeking", {
    get: rsvm.browser.HTMLElement.getter.onseeking,
    set: rsvm.browser.HTMLElement.setter.onseeking,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onseeking, "name", {
    value: "get onseeking"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onseeking, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onseeking, "name", {
    value: "set onseeking"
});
Object.defineProperty(HTMLElement.prototype, "onselect", {
    get: rsvm.browser.HTMLElement.getter.onselect,
    set: rsvm.browser.HTMLElement.setter.onselect,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onselect, "name", {
    value: "get onselect"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onselect, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onselect, "name", {
    value: "set onselect"
});
Object.defineProperty(HTMLElement.prototype, "onslotchange", {
    get: rsvm.browser.HTMLElement.getter.onslotchange,
    set: rsvm.browser.HTMLElement.setter.onslotchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onslotchange, "name", {
    value: "get onslotchange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onslotchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onslotchange, "name", {
    value: "set onslotchange"
});
Object.defineProperty(HTMLElement.prototype, "onstalled", {
    get: rsvm.browser.HTMLElement.getter.onstalled,
    set: rsvm.browser.HTMLElement.setter.onstalled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onstalled, "name", {
    value: "get onstalled"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onstalled, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onstalled, "name", {
    value: "set onstalled"
});
Object.defineProperty(HTMLElement.prototype, "onsubmit", {
    get: rsvm.browser.HTMLElement.getter.onsubmit,
    set: rsvm.browser.HTMLElement.setter.onsubmit,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onsubmit, "name", {
    value: "get onsubmit"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onsubmit, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onsubmit, "name", {
    value: "set onsubmit"
});
Object.defineProperty(HTMLElement.prototype, "onsuspend", {
    get: rsvm.browser.HTMLElement.getter.onsuspend,
    set: rsvm.browser.HTMLElement.setter.onsuspend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onsuspend, "name", {
    value: "get onsuspend"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onsuspend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onsuspend, "name", {
    value: "set onsuspend"
});
Object.defineProperty(HTMLElement.prototype, "ontimeupdate", {
    get: rsvm.browser.HTMLElement.getter.ontimeupdate,
    set: rsvm.browser.HTMLElement.setter.ontimeupdate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ontimeupdate, "name", {
    value: "get ontimeupdate"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontimeupdate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontimeupdate, "name", {
    value: "set ontimeupdate"
});
Object.defineProperty(HTMLElement.prototype, "ontoggle", {
    get: rsvm.browser.HTMLElement.getter.ontoggle,
    set: rsvm.browser.HTMLElement.setter.ontoggle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ontoggle, "name", {
    value: "get ontoggle"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontoggle, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontoggle, "name", {
    value: "set ontoggle"
});
Object.defineProperty(HTMLElement.prototype, "onvolumechange", {
    get: rsvm.browser.HTMLElement.getter.onvolumechange,
    set: rsvm.browser.HTMLElement.setter.onvolumechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onvolumechange, "name", {
    value: "get onvolumechange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onvolumechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onvolumechange, "name", {
    value: "set onvolumechange"
});
Object.defineProperty(HTMLElement.prototype, "onwaiting", {
    get: rsvm.browser.HTMLElement.getter.onwaiting,
    set: rsvm.browser.HTMLElement.setter.onwaiting,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onwaiting, "name", {
    value: "get onwaiting"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwaiting, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwaiting, "name", {
    value: "set onwaiting"
});
Object.defineProperty(HTMLElement.prototype, "onwebkitanimationend", {
    get: rsvm.browser.HTMLElement.getter.onwebkitanimationend,
    set: rsvm.browser.HTMLElement.setter.onwebkitanimationend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onwebkitanimationend, "name", {
    value: "get onwebkitanimationend"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkitanimationend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkitanimationend, "name", {
    value: "set onwebkitanimationend"
});
Object.defineProperty(HTMLElement.prototype, "onwebkitanimationiteration", {
    get: rsvm.browser.HTMLElement.getter.onwebkitanimationiteration,
    set: rsvm.browser.HTMLElement.setter.onwebkitanimationiteration,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onwebkitanimationiteration, "name", {
    value: "get onwebkitanimationiteration"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkitanimationiteration, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkitanimationiteration, "name", {
    value: "set onwebkitanimationiteration"
});
Object.defineProperty(HTMLElement.prototype, "onwebkitanimationstart", {
    get: rsvm.browser.HTMLElement.getter.onwebkitanimationstart,
    set: rsvm.browser.HTMLElement.setter.onwebkitanimationstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onwebkitanimationstart, "name", {
    value: "get onwebkitanimationstart"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkitanimationstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkitanimationstart, "name", {
    value: "set onwebkitanimationstart"
});
Object.defineProperty(HTMLElement.prototype, "onwebkittransitionend", {
    get: rsvm.browser.HTMLElement.getter.onwebkittransitionend,
    set: rsvm.browser.HTMLElement.setter.onwebkittransitionend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onwebkittransitionend, "name", {
    value: "get onwebkittransitionend"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkittransitionend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwebkittransitionend, "name", {
    value: "set onwebkittransitionend"
});
Object.defineProperty(HTMLElement.prototype, "onwheel", {
    get: rsvm.browser.HTMLElement.getter.onwheel,
    set: rsvm.browser.HTMLElement.setter.onwheel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onwheel, "name", {
    value: "get onwheel"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwheel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onwheel, "name", {
    value: "set onwheel"
});
Object.defineProperty(HTMLElement.prototype, "onauxclick", {
    get: rsvm.browser.HTMLElement.getter.onauxclick,
    set: rsvm.browser.HTMLElement.setter.onauxclick,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onauxclick, "name", {
    value: "get onauxclick"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onauxclick, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onauxclick, "name", {
    value: "set onauxclick"
});
Object.defineProperty(HTMLElement.prototype, "ongotpointercapture", {
    get: rsvm.browser.HTMLElement.getter.ongotpointercapture,
    set: rsvm.browser.HTMLElement.setter.ongotpointercapture,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ongotpointercapture, "name", {
    value: "get ongotpointercapture"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ongotpointercapture, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ongotpointercapture, "name", {
    value: "set ongotpointercapture"
});
Object.defineProperty(HTMLElement.prototype, "onlostpointercapture", {
    get: rsvm.browser.HTMLElement.getter.onlostpointercapture,
    set: rsvm.browser.HTMLElement.setter.onlostpointercapture,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onlostpointercapture, "name", {
    value: "get onlostpointercapture"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onlostpointercapture, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onlostpointercapture, "name", {
    value: "set onlostpointercapture"
});
Object.defineProperty(HTMLElement.prototype, "onpointerdown", {
    get: rsvm.browser.HTMLElement.getter.onpointerdown,
    set: rsvm.browser.HTMLElement.setter.onpointerdown,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerdown, "name", {
    value: "get onpointerdown"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerdown, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerdown, "name", {
    value: "set onpointerdown"
});
Object.defineProperty(HTMLElement.prototype, "onpointermove", {
    get: rsvm.browser.HTMLElement.getter.onpointermove,
    set: rsvm.browser.HTMLElement.setter.onpointermove,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointermove, "name", {
    value: "get onpointermove"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointermove, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointermove, "name", {
    value: "set onpointermove"
});
Object.defineProperty(HTMLElement.prototype, "onpointerrawupdate", {
    get: rsvm.browser.HTMLElement.getter.onpointerrawupdate,
    set: rsvm.browser.HTMLElement.setter.onpointerrawupdate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerrawupdate, "name", {
    value: "get onpointerrawupdate"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerrawupdate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerrawupdate, "name", {
    value: "set onpointerrawupdate"
});
Object.defineProperty(HTMLElement.prototype, "onpointerup", {
    get: rsvm.browser.HTMLElement.getter.onpointerup,
    set: rsvm.browser.HTMLElement.setter.onpointerup,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerup, "name", {
    value: "get onpointerup"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerup, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerup, "name", {
    value: "set onpointerup"
});
Object.defineProperty(HTMLElement.prototype, "onpointercancel", {
    get: rsvm.browser.HTMLElement.getter.onpointercancel,
    set: rsvm.browser.HTMLElement.setter.onpointercancel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointercancel, "name", {
    value: "get onpointercancel"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointercancel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointercancel, "name", {
    value: "set onpointercancel"
});
Object.defineProperty(HTMLElement.prototype, "onpointerover", {
    get: rsvm.browser.HTMLElement.getter.onpointerover,
    set: rsvm.browser.HTMLElement.setter.onpointerover,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerover, "name", {
    value: "get onpointerover"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerover, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerover, "name", {
    value: "set onpointerover"
});
Object.defineProperty(HTMLElement.prototype, "onpointerout", {
    get: rsvm.browser.HTMLElement.getter.onpointerout,
    set: rsvm.browser.HTMLElement.setter.onpointerout,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerout, "name", {
    value: "get onpointerout"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerout, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerout, "name", {
    value: "set onpointerout"
});
Object.defineProperty(HTMLElement.prototype, "onpointerenter", {
    get: rsvm.browser.HTMLElement.getter.onpointerenter,
    set: rsvm.browser.HTMLElement.setter.onpointerenter,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerenter, "name", {
    value: "get onpointerenter"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerenter, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerenter, "name", {
    value: "set onpointerenter"
});
Object.defineProperty(HTMLElement.prototype, "onpointerleave", {
    get: rsvm.browser.HTMLElement.getter.onpointerleave,
    set: rsvm.browser.HTMLElement.setter.onpointerleave,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpointerleave, "name", {
    value: "get onpointerleave"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerleave, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpointerleave, "name", {
    value: "set onpointerleave"
});
Object.defineProperty(HTMLElement.prototype, "onselectstart", {
    get: rsvm.browser.HTMLElement.getter.onselectstart,
    set: rsvm.browser.HTMLElement.setter.onselectstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onselectstart, "name", {
    value: "get onselectstart"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onselectstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onselectstart, "name", {
    value: "set onselectstart"
});
Object.defineProperty(HTMLElement.prototype, "onselectionchange", {
    get: rsvm.browser.HTMLElement.getter.onselectionchange,
    set: rsvm.browser.HTMLElement.setter.onselectionchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onselectionchange, "name", {
    value: "get onselectionchange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onselectionchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onselectionchange, "name", {
    value: "set onselectionchange"
});
Object.defineProperty(HTMLElement.prototype, "onanimationend", {
    get: rsvm.browser.HTMLElement.getter.onanimationend,
    set: rsvm.browser.HTMLElement.setter.onanimationend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onanimationend, "name", {
    value: "get onanimationend"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onanimationend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onanimationend, "name", {
    value: "set onanimationend"
});
Object.defineProperty(HTMLElement.prototype, "onanimationiteration", {
    get: rsvm.browser.HTMLElement.getter.onanimationiteration,
    set: rsvm.browser.HTMLElement.setter.onanimationiteration,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onanimationiteration, "name", {
    value: "get onanimationiteration"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onanimationiteration, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onanimationiteration, "name", {
    value: "set onanimationiteration"
});
Object.defineProperty(HTMLElement.prototype, "onanimationstart", {
    get: rsvm.browser.HTMLElement.getter.onanimationstart,
    set: rsvm.browser.HTMLElement.setter.onanimationstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onanimationstart, "name", {
    value: "get onanimationstart"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onanimationstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onanimationstart, "name", {
    value: "set onanimationstart"
});
Object.defineProperty(HTMLElement.prototype, "ontransitionrun", {
    get: rsvm.browser.HTMLElement.getter.ontransitionrun,
    set: rsvm.browser.HTMLElement.setter.ontransitionrun,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ontransitionrun, "name", {
    value: "get ontransitionrun"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitionrun, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitionrun, "name", {
    value: "set ontransitionrun"
});
Object.defineProperty(HTMLElement.prototype, "ontransitionstart", {
    get: rsvm.browser.HTMLElement.getter.ontransitionstart,
    set: rsvm.browser.HTMLElement.setter.ontransitionstart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ontransitionstart, "name", {
    value: "get ontransitionstart"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitionstart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitionstart, "name", {
    value: "set ontransitionstart"
});
Object.defineProperty(HTMLElement.prototype, "ontransitionend", {
    get: rsvm.browser.HTMLElement.getter.ontransitionend,
    set: rsvm.browser.HTMLElement.setter.ontransitionend,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ontransitionend, "name", {
    value: "get ontransitionend"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitionend, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitionend, "name", {
    value: "set ontransitionend"
});
Object.defineProperty(HTMLElement.prototype, "ontransitioncancel", {
    get: rsvm.browser.HTMLElement.getter.ontransitioncancel,
    set: rsvm.browser.HTMLElement.setter.ontransitioncancel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.ontransitioncancel, "name", {
    value: "get ontransitioncancel"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitioncancel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.ontransitioncancel, "name", {
    value: "set ontransitioncancel"
});
Object.defineProperty(HTMLElement.prototype, "oncopy", {
    get: rsvm.browser.HTMLElement.getter.oncopy,
    set: rsvm.browser.HTMLElement.setter.oncopy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncopy, "name", {
    value: "get oncopy"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncopy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncopy, "name", {
    value: "set oncopy"
});
Object.defineProperty(HTMLElement.prototype, "oncut", {
    get: rsvm.browser.HTMLElement.getter.oncut,
    set: rsvm.browser.HTMLElement.setter.oncut,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncut, "name", {
    value: "get oncut"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncut, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncut, "name", {
    value: "set oncut"
});
Object.defineProperty(HTMLElement.prototype, "onpaste", {
    get: rsvm.browser.HTMLElement.getter.onpaste,
    set: rsvm.browser.HTMLElement.setter.onpaste,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onpaste, "name", {
    value: "get onpaste"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpaste, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onpaste, "name", {
    value: "set onpaste"
});
Object.defineProperty(HTMLElement.prototype, "dataset", {
    get: rsvm.browser.HTMLElement.getter.dataset,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.dataset, "name", {
    value: "get dataset"
});
Object.defineProperty(HTMLElement.prototype, "nonce", {
    get: rsvm.browser.HTMLElement.getter.nonce,
    set: rsvm.browser.HTMLElement.setter.nonce,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.nonce, "name", {
    value: "get nonce"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.nonce, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.nonce, "name", {
    value: "set nonce"
});
Object.defineProperty(HTMLElement.prototype, "autofocus", {
    get: rsvm.browser.HTMLElement.getter.autofocus,
    set: rsvm.browser.HTMLElement.setter.autofocus,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.autofocus, "name", {
    value: "get autofocus"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.autofocus, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.autofocus, "name", {
    value: "set autofocus"
});
Object.defineProperty(HTMLElement.prototype, "tabIndex", {
    get: rsvm.browser.HTMLElement.getter.tabIndex,
    set: rsvm.browser.HTMLElement.setter.tabIndex,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.tabIndex, "name", {
    value: "get tabIndex"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.tabIndex, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.tabIndex, "name", {
    value: "set tabIndex"
});
Object.defineProperty(HTMLElement.prototype, "style", {
    get: rsvm.browser.HTMLElement.getter.style,
    set: rsvm.browser.HTMLElement.setter.style,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.style, "name", {
    value: "get style"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.style, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.style, "name", {
    value: "set style"
});
Object.defineProperty(HTMLElement.prototype, "attributeStyleMap", {
    get: rsvm.browser.HTMLElement.getter.attributeStyleMap,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.attributeStyleMap, "name", {
    value: "get attributeStyleMap"
});
Object.defineProperty(HTMLElement.prototype, "inert", {
    get: rsvm.browser.HTMLElement.getter.inert,
    set: rsvm.browser.HTMLElement.setter.inert,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.inert, "name", {
    value: "get inert"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.inert, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.inert, "name", {
    value: "set inert"
});
Object.defineProperty(HTMLElement.prototype, "oncontentvisibilityautostatechange", {
    get: rsvm.browser.HTMLElement.getter.oncontentvisibilityautostatechange,
    set: rsvm.browser.HTMLElement.setter.oncontentvisibilityautostatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.oncontentvisibilityautostatechange, "name", {
    value: "get oncontentvisibilityautostatechange"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontentvisibilityautostatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.oncontentvisibilityautostatechange, "name", {
    value: "set oncontentvisibilityautostatechange"
});
Object.defineProperty(HTMLElement.prototype, "onbeforematch", {
    get: rsvm.browser.HTMLElement.getter.onbeforematch,
    set: rsvm.browser.HTMLElement.setter.onbeforematch,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLElement.getter.onbeforematch, "name", {
    value: "get onbeforematch"
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onbeforematch, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLElement.setter.onbeforematch, "name", {
    value: "set onbeforematch"
});


for (const key in rsvm.browser.HTMLElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLElement.getter[key]);
}
for (const key in rsvm.browser.HTMLElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLElement.setter[key]);
}
for (const key in rsvm.browser.HTMLElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLElement.actor[key]);
};


HTMLElement = rsvm.proxy(HTMLElement);