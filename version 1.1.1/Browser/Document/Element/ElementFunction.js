rsvm.browser.Element = {
    memory: {
        namespaceURI: "http://www.w3.org/1999/xhtml",
        prefix: null,
        localName: "",
        tagName: "",
        id: "",
        className: "",
        classList: {},
        slot: "",
        attributes: {},
        shadowRoot: null,
        part: {},
        assignedSlot: null,
        innerHTML: "",
        outerHTML: "",
        scrollTop: 0,
        scrollLeft: 0,
        scrollWidth: 0,
        scrollHeight: 0,
        clientTop: 0,
        clientLeft: 0,
        clientWidth: 1151,
        clientHeight: 818,
        onbeforecopy: null,
        onbeforecut: null,
        onbeforepaste: null,
        onsearch: null,
        elementTiming: "",
        onfullscreenchange: null,
        onfullscreenerror: null,
        onwebkitfullscreenchange: null,
        onwebkitfullscreenerror: null,
        role: null,
        ariaAtomic: null,
        ariaAutoComplete: null,
        ariaBusy: null,
        ariaBrailleLabel: null,
        ariaBrailleRoleDescription: null,
        ariaChecked: null,
        ariaColCount: null,
        ariaColIndex: null,
        ariaColSpan: null,
        ariaCurrent: null,
        ariaDescription: null,
        ariaDisabled: null,
        ariaExpanded: null,
        ariaHasPopup: null,
        ariaHidden: null,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLevel: null,
        ariaLive: null,
        ariaModal: null,
        ariaMultiLine: null,
        ariaMultiSelectable: null,
        ariaOrientation: null,
        ariaPlaceholder: null,
        ariaPosInSet: null,
        ariaPressed: null,
        ariaReadOnly: null,
        ariaRelevant: null,
        ariaRequired: null,
        ariaRoleDescription: null,
        ariaRowCount: null,
        ariaRowIndex: null,
        ariaRowSpan: null,
        ariaSelected: null,
        ariaSetSize: null,
        ariaSort: null,
        ariaValueMax: null,
        ariaValueMin: null,
        ariaValueNow: null,
        ariaValueText: null,
        children: rsvm.browser.HTMLCollection.create(),
        firstElementChild: null,
        lastElementChild: null,
        childElementCount: 0,
        previousElementSibling: null,
        nextElementSibling: null,
    },
    getter: {
        namespaceURI() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].namespaceURI;
                }
            }
            return rsvm.browser.Element.memory.namespaceURI;
        },
        prefix() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].prefix;
                }
            }
            return rsvm.browser.Element.memory.prefix;
        },
        localName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].localName;
                }
            }
            return rsvm.browser.Element.memory.localName;
        },
        tagName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].tagName;
                }
            }
            return rsvm.browser.Element.memory.tagName;
        },
        id() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].id;
                }
            }
            return rsvm.browser.Element.memory.id;
        },
        className() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].className;
                }
            }
            return rsvm.browser.Element.memory.className;
        },
        classList() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].classList;
                }
            }
            return rsvm.browser.Element.memory.classList;
        },
        slot() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].slot;
                }
            }
            return rsvm.browser.Element.memory.slot;
        },
        attributes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].attributes;
                }
            }
            return rsvm.browser.Element.memory.attributes;
        },
        shadowRoot() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].shadowRoot;
                }
            }
            return rsvm.browser.Element.memory.shadowRoot;
        },
        part() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].part;
                }
            }
            return rsvm.browser.Element.memory.part;
        },
        assignedSlot() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].assignedSlot;
                }
            }
            return rsvm.browser.Element.memory.assignedSlot;
        },
        innerHTML() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    var a = "<" + this.localName + ">", str = rsvm.browser.Node.subObject[i].innerHTML;
                    for (let i=0; i < this.children.length; i++){
                        str += "<" + this.children[i].localName + ">" + this.children[i].innerHTML + "</" + this.children[i].localName + ">";
                    }
                    var b = "</" + this.localName + ">";
                    str = a + str + b;
                    return str.substring(("<" + this.localName + ">").length, str.length - ("</" + this.localName + ">").length);
                }
            }
            return rsvm.browser.Element.memory.innerHTML;
        },
        outerHTML() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                        if (this == rsvm.browser.Node.subObject[i].dogID) {
                            return "<" + this.localName + ">" + this.innerHTML + "</" + this.localName + ">";
                        }
                    }
                }
            }
            return rsvm.browser.Element.memory.outerHTML;
        },
        scrollTop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scrollTop;
                }
            }
            return rsvm.browser.Element.memory.scrollTop;
        },
        scrollLeft() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scrollLeft;
                }
            }
            return rsvm.browser.Element.memory.scrollLeft;
        },
        scrollWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scrollWidth;
                }
            }
            return rsvm.browser.Element.memory.scrollWidth;
        },
        scrollHeight() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scrollHeight;
                }
            }
            return rsvm.browser.Element.memory.scrollHeight;
        },
        clientTop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].clientTop;
                }
            }
            return rsvm.browser.Element.memory.clientTop;
        },
        clientLeft() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].clientLeft;
                }
            }
            return rsvm.browser.Element.memory.clientLeft;
        },
        clientWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].clientWidth;
                }
            }
            return rsvm.browser.Element.memory.clientWidth;
        },
        clientHeight() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].clientHeight;
                }
            }
            return rsvm.browser.Element.memory.clientHeight;
        },
        onbeforecopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforecopy;
                }
            }
            return rsvm.browser.Element.memory.onbeforecopy;
        },
        onbeforecut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforecut;
                }
            }
            return rsvm.browser.Element.memory.onbeforecut;
        },
        onbeforepaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforepaste;
                }
            }
            return rsvm.browser.Element.memory.onbeforepaste;
        },
        onsearch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsearch;
                }
            }
            return rsvm.browser.Element.memory.onsearch;
        },
        elementTiming() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].elementTiming;
                }
            }
            return rsvm.browser.Element.memory.elementTiming;
        },
        onfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfullscreenchange;
                }
            }
            return rsvm.browser.Element.memory.onfullscreenchange;
        },
        onfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfullscreenerror;
                }
            }
            return rsvm.browser.Element.memory.onfullscreenerror;
        },
        onwebkitfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitfullscreenchange;
                }
            }
            return rsvm.browser.Element.memory.onwebkitfullscreenchange;
        },
        onwebkitfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitfullscreenerror;
                }
            }
            return rsvm.browser.Element.memory.onwebkitfullscreenerror;
        },
        role() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].role;
                }
            }
            return rsvm.browser.Element.memory.role;
        },
        ariaAtomic() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaAtomic;
                }
            }
            return rsvm.browser.Element.memory.ariaAtomic;
        },
        ariaAutoComplete() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaAutoComplete;
                }
            }
            return rsvm.browser.Element.memory.ariaAutoComplete;
        },
        ariaBusy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaBusy;
                }
            }
            return rsvm.browser.Element.memory.ariaBusy;
        },
        ariaBrailleLabel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaBrailleLabel;
                }
            }
            return rsvm.browser.Element.memory.ariaBrailleLabel;
        },
        ariaBrailleRoleDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaBrailleRoleDescription;
                }
            }
            return rsvm.browser.Element.memory.ariaBrailleRoleDescription;
        },
        ariaChecked() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaChecked;
                }
            }
            return rsvm.browser.Element.memory.ariaChecked;
        },
        ariaColCount() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaColCount;
                }
            }
            return rsvm.browser.Element.memory.ariaColCount;
        },
        ariaColIndex() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaColIndex;
                }
            }
            return rsvm.browser.Element.memory.ariaColIndex;
        },
        ariaColSpan() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaColSpan;
                }
            }
            return rsvm.browser.Element.memory.ariaColSpan;
        },
        ariaCurrent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaCurrent;
                }
            }
            return rsvm.browser.Element.memory.ariaCurrent;
        },
        ariaDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaDescription;
                }
            }
            return rsvm.browser.Element.memory.ariaDescription;
        },
        ariaDisabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaDisabled;
                }
            }
            return rsvm.browser.Element.memory.ariaDisabled;
        },
        ariaExpanded() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaExpanded;
                }
            }
            return rsvm.browser.Element.memory.ariaExpanded;
        },
        ariaHasPopup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaHasPopup;
                }
            }
            return rsvm.browser.Element.memory.ariaHasPopup;
        },
        ariaHidden() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaHidden;
                }
            }
            return rsvm.browser.Element.memory.ariaHidden;
        },
        ariaInvalid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaInvalid;
                }
            }
            return rsvm.browser.Element.memory.ariaInvalid;
        },
        ariaKeyShortcuts() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaKeyShortcuts;
                }
            }
            return rsvm.browser.Element.memory.ariaKeyShortcuts;
        },
        ariaLabel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaLabel;
                }
            }
            return rsvm.browser.Element.memory.ariaLabel;
        },
        ariaLevel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaLevel;
                }
            }
            return rsvm.browser.Element.memory.ariaLevel;
        },
        ariaLive() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaLive;
                }
            }
            return rsvm.browser.Element.memory.ariaLive;
        },
        ariaModal() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaModal;
                }
            }
            return rsvm.browser.Element.memory.ariaModal;
        },
        ariaMultiLine() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaMultiLine;
                }
            }
            return rsvm.browser.Element.memory.ariaMultiLine;
        },
        ariaMultiSelectable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaMultiSelectable;
                }
            }
            return rsvm.browser.Element.memory.ariaMultiSelectable;
        },
        ariaOrientation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaOrientation;
                }
            }
            return rsvm.browser.Element.memory.ariaOrientation;
        },
        ariaPlaceholder() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaPlaceholder;
                }
            }
            return rsvm.browser.Element.memory.ariaPlaceholder;
        },
        ariaPosInSet() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaPosInSet;
                }
            }
            return rsvm.browser.Element.memory.ariaPosInSet;
        },
        ariaPressed() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaPressed;
                }
            }
            return rsvm.browser.Element.memory.ariaPressed;
        },
        ariaReadOnly() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaReadOnly;
                }
            }
            return rsvm.browser.Element.memory.ariaReadOnly;
        },
        ariaRelevant() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaRelevant;
                }
            }
            return rsvm.browser.Element.memory.ariaRelevant;
        },
        ariaRequired() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaRequired;
                }
            }
            return rsvm.browser.Element.memory.ariaRequired;
        },
        ariaRoleDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaRoleDescription;
                }
            }
            return rsvm.browser.Element.memory.ariaRoleDescription;
        },
        ariaRowCount() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaRowCount;
                }
            }
            return rsvm.browser.Element.memory.ariaRowCount;
        },
        ariaRowIndex() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaRowIndex;
                }
            }
            return rsvm.browser.Element.memory.ariaRowIndex;
        },
        ariaRowSpan() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaRowSpan;
                }
            }
            return rsvm.browser.Element.memory.ariaRowSpan;
        },
        ariaSelected() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaSelected;
                }
            }
            return rsvm.browser.Element.memory.ariaSelected;
        },
        ariaSetSize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaSetSize;
                }
            }
            return rsvm.browser.Element.memory.ariaSetSize;
        },
        ariaSort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaSort;
                }
            }
            return rsvm.browser.Element.memory.ariaSort;
        },
        ariaValueMax() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaValueMax;
                }
            }
            return rsvm.browser.Element.memory.ariaValueMax;
        },
        ariaValueMin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaValueMin;
                }
            }
            return rsvm.browser.Element.memory.ariaValueMin;
        },
        ariaValueNow() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaValueNow;
                }
            }
            return rsvm.browser.Element.memory.ariaValueNow;
        },
        ariaValueText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ariaValueText;
                }
            }
            return rsvm.browser.Element.memory.ariaValueText;
        },
        children() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].children;
                }
            }
            return rsvm.browser.Element.memory.children;
        },
        firstElementChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].firstElementChild;
                }
            }
            return rsvm.browser.Element.memory.firstElementChild;
        },
        lastElementChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].lastElementChild;
                }
            }
            return rsvm.browser.Element.memory.lastElementChild;
        },
        childElementCount() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].childElementCount;
                }
            }
            return rsvm.browser.Element.memory.childElementCount;
        },
        previousElementSibling() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].previousElementSibling;
                }
            }
            return rsvm.browser.Element.memory.previousElementSibling;
        },
        nextElementSibling() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Element");
            }
            if (!Element.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].nextElementSibling;
                }
            }
            return rsvm.browser.Element.memory.nextElementSibling;
        },
    },
    setter: {
        id() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].id = arguments[0];
                    return;
                }
            }
        },
        className() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].className = arguments[0];
                    return;
                }
            }
        },
        classList() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].classList = arguments[0];
                    return;
                }
            }
        },
        slot() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].slot = arguments[0];
                    return;
                }
            }
        },
        part() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].part = arguments[0];
                    return;
                }
            }
        },
        innerHTML() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].innerHTML = arguments[0];
                    return;
                }
            }
        },
        outerHTML() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].outerHTML = arguments[0];
                    return;
                }
            }
        },
        scrollTop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].scrollTop = arguments[0];
                    return;
                }
            }
        },
        scrollLeft() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].scrollLeft = arguments[0];
                    return;
                }
            }
        },
        onbeforecopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforecopy = arguments[0];
                    return;
                }
            }
        },
        onbeforecut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforecut = arguments[0];
                    return;
                }
            }
        },
        onbeforepaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforepaste = arguments[0];
                    return;
                }
            }
        },
        onsearch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsearch = arguments[0];
                    return;
                }
            }
        },
        elementTiming() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].elementTiming = arguments[0];
                    return;
                }
            }
        },
        onfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfullscreenchange = arguments[0];
                    return;
                }
            }
        },
        onfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfullscreenerror = arguments[0];
                    return;
                }
            }
        },
        onwebkitfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitfullscreenchange = arguments[0];
                    return;
                }
            }
        },
        onwebkitfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitfullscreenerror = arguments[0];
                    return;
                }
            }
        },
        role() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].role = arguments[0];
                    return;
                }
            }
        },
        ariaAtomic() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaAtomic = arguments[0];
                    return;
                }
            }
        },
        ariaAutoComplete() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaAutoComplete = arguments[0];
                    return;
                }
            }
        },
        ariaBusy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaBusy = arguments[0];
                    return;
                }
            }
        },
        ariaBrailleLabel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaBrailleLabel = arguments[0];
                    return;
                }
            }
        },
        ariaBrailleRoleDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaBrailleRoleDescription = arguments[0];
                    return;
                }
            }
        },
        ariaChecked() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaChecked = arguments[0];
                    return;
                }
            }
        },
        ariaColCount() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaColCount = arguments[0];
                    return;
                }
            }
        },
        ariaColIndex() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaColIndex = arguments[0];
                    return;
                }
            }
        },
        ariaColSpan() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaColSpan = arguments[0];
                    return;
                }
            }
        },
        ariaCurrent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaCurrent = arguments[0];
                    return;
                }
            }
        },
        ariaDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaDescription = arguments[0];
                    return;
                }
            }
        },
        ariaDisabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaDisabled = arguments[0];
                    return;
                }
            }
        },
        ariaExpanded() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaExpanded = arguments[0];
                    return;
                }
            }
        },
        ariaHasPopup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaHasPopup = arguments[0];
                    return;
                }
            }
        },
        ariaHidden() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaHidden = arguments[0];
                    return;
                }
            }
        },
        ariaInvalid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaInvalid = arguments[0];
                    return;
                }
            }
        },
        ariaKeyShortcuts() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaKeyShortcuts = arguments[0];
                    return;
                }
            }
        },
        ariaLabel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaLabel = arguments[0];
                    return;
                }
            }
        },
        ariaLevel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaLevel = arguments[0];
                    return;
                }
            }
        },
        ariaLive() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaLive = arguments[0];
                    return;
                }
            }
        },
        ariaModal() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaModal = arguments[0];
                    return;
                }
            }
        },
        ariaMultiLine() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaMultiLine = arguments[0];
                    return;
                }
            }
        },
        ariaMultiSelectable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaMultiSelectable = arguments[0];
                    return;
                }
            }
        },
        ariaOrientation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaOrientation = arguments[0];
                    return;
                }
            }
        },
        ariaPlaceholder() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaPlaceholder = arguments[0];
                    return;
                }
            }
        },
        ariaPosInSet() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaPosInSet = arguments[0];
                    return;
                }
            }
        },
        ariaPressed() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaPressed = arguments[0];
                    return;
                }
            }
        },
        ariaReadOnly() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaReadOnly = arguments[0];
                    return;
                }
            }
        },
        ariaRelevant() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaRelevant = arguments[0];
                    return;
                }
            }
        },
        ariaRequired() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaRequired = arguments[0];
                    return;
                }
            }
        },
        ariaRoleDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaRoleDescription = arguments[0];
                    return;
                }
            }
        },
        ariaRowCount() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaRowCount = arguments[0];
                    return;
                }
            }
        },
        ariaRowIndex() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaRowIndex = arguments[0];
                    return;
                }
            }
        },
        ariaRowSpan() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaRowSpan = arguments[0];
                    return;
                }
            }
        },
        ariaSelected() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaSelected = arguments[0];
                    return;
                }
            }
        },
        ariaSetSize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaSetSize = arguments[0];
                    return;
                }
            }
        },
        ariaSort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaSort = arguments[0];
                    return;
                }
            }
        },
        ariaValueMax() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaValueMax = arguments[0];
                    return;
                }
            }
        },
        ariaValueMin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaValueMin = arguments[0];
                    return;
                }
            }
        },
        ariaValueNow() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaValueNow = arguments[0];
                    return;
                }
            }
        },
        ariaValueText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ariaValueText = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {
        after() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        animate(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        append() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            rsvm.updateValue(arguments[0], "Node", "parentElement", this);
            rsvm.updateValue(arguments[0], "Node", "parentNode", this);
            this.children[this.children.length] = arguments[0];
            this.childNodes[this.childNodes.length] = arguments[0];
        },
        attachShadow(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        before() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        closest(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        computedStyleMap() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAttribute() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            return null;
        },
        getAttributeNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAttributeNames() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAttributeNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAttributeNodeNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getBoundingClientRect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getClientRects() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getElementsByClassName(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getElementsByTagName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var tagName = ("" + arguments[0]).toLocaleLowerCase();
            var obj = rsvm.browser.HTMLCollection.create();
            if (rsvm.browser.HTMLElement.subObjectType.indexOf(tagName) != -1) {
                // obj[0] = rsvm.browser.HTMLElement[tagName]();
            }
            return obj;
        },
        getElementsByTagNameNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getInnerHTML() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hasAttribute(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hasAttributeNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hasAttributes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hasPointerCapture(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        insertAdjacentElement(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        insertAdjacentHTML(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        insertAdjacentText(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        matches(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        prepend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        querySelector(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        querySelectorAll(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        releasePointerCapture(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        remove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        removeAttribute(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        removeAttributeNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        removeAttributeNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replaceChildren() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replaceWith() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        requestFullscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        requestPointerLock() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scroll() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scrollBy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scrollIntoView() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scrollIntoViewIfNeeded() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scrollTo() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setAttribute(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setAttributeNS(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setAttributeNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setAttributeNodeNS(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setPointerCapture(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        toggleAttribute(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        webkitMatchesSelector(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        webkitRequestFullScreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        webkitRequestFullscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        checkVisibility() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAnimations() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setHTML(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
};