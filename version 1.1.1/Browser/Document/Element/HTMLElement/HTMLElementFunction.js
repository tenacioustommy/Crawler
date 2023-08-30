rsvm.browser.HTMLElement = {
    memory: {
        title: "",
        lang: "",
        translate: true,
        dir: "",
        hidden: false,
        accessKey: "",
        draggable: false,
        spellcheck: true,
        autocapitalize: "",
        contentEditable: "inherit",
        enterKeyHint: "",
        isContentEditable: false,
        inputMode: "",
        virtualKeyboardPolicy: "",
        offsetParent: null,
        offsetTop: 0,
        offsetLeft: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        innerText: "",
        outerText: "",
        onbeforexrselect: null,
        onabort: null,
        onbeforeinput: null,
        onblur: null,
        oncancel: null,
        oncanplay: null,
        oncanplaythrough: null,
        onchange: null,
        onclick: null,
        onclose: null,
        oncontextlost: null,
        oncontextmenu: null,
        oncontextrestored: null,
        oncuechange: null,
        ondblclick: null,
        ondrag: null,
        ondragend: null,
        ondragenter: null,
        ondragleave: null,
        ondragover: null,
        ondragstart: null,
        ondrop: null,
        ondurationchange: null,
        onemptied: null,
        onended: null,
        onerror: null,
        onfocus: null,
        onformdata: null,
        oninput: null,
        oninvalid: null,
        onkeydown: null,
        onkeypress: null,
        onkeyup: null,
        onload: null,
        onloadeddata: null,
        onloadedmetadata: null,
        onloadstart: null,
        onmousedown: null,
        onmousemove: null,
        onmouseout: null,
        onmouseover: null,
        onmouseup: null,
        onmousewheel: null,
        onpause: null,
        onplay: null,
        onplaying: null,
        onprogress: null,
        onratechange: null,
        onreset: null,
        onresize: null,
        onscroll: null,
        onsecuritypolicyviolation: null,
        onseeked: null,
        onseeking: null,
        onselect: null,
        onslotchange: null,
        onstalled: null,
        onsubmit: null,
        onsuspend: null,
        ontimeupdate: null,
        ontoggle: null,
        onvolumechange: null,
        onwaiting: null,
        onwebkitanimationend: null,
        onwebkitanimationiteration: null,
        onwebkitanimationstart: null,
        onwebkittransitionend: null,
        onwheel: null,
        onauxclick: null,
        ongotpointercapture: null,
        onlostpointercapture: null,
        onpointerdown: null,
        onpointermove: null,
        onpointerrawupdate: null,
        onpointerup: null,
        onpointercancel: null,
        onpointerover: null,
        onpointerout: null,
        onpointerenter: null,
        onpointerleave: null,
        onselectstart: null,
        onselectionchange: null,
        onanimationend: null,
        onanimationiteration: null,
        onanimationstart: null,
        ontransitionrun: null,
        ontransitionstart: null,
        ontransitionend: null,
        ontransitioncancel: null,
        oncopy: null,
        oncut: null,
        onpaste: null,
        dataset: {},
        nonce: "",
        autofocus: false,
        tabIndex: -1,
        style: {},
        attributeStyleMap: {},
        inert: false,
        oncontentvisibilityautostatechange: null,
        onbeforematch: null,
    },
    getter: {
        title() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].title;
                }
            }
            return rsvm.browser.HTMLElement.memory.title;
        },
        lang() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].lang;
                }
            }
            return rsvm.browser.HTMLElement.memory.lang;
        },
        translate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].translate;
                }
            }
            return rsvm.browser.HTMLElement.memory.translate;
        },
        dir() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].dir;
                }
            }
            return rsvm.browser.HTMLElement.memory.dir;
        },
        hidden() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].hidden;
                }
            }
            return rsvm.browser.HTMLElement.memory.hidden;
        },
        accessKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].accessKey;
                }
            }
            return rsvm.browser.HTMLElement.memory.accessKey;
        },
        draggable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].draggable;
                }
            }
            return rsvm.browser.HTMLElement.memory.draggable;
        },
        spellcheck() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].spellcheck;
                }
            }
            return rsvm.browser.HTMLElement.memory.spellcheck;
        },
        autocapitalize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].autocapitalize;
                }
            }
            return rsvm.browser.HTMLElement.memory.autocapitalize;
        },
        contentEditable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].contentEditable;
                }
            }
            return rsvm.browser.HTMLElement.memory.contentEditable;
        },
        enterKeyHint() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].enterKeyHint;
                }
            }
            return rsvm.browser.HTMLElement.memory.enterKeyHint;
        },
        isContentEditable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].isContentEditable;
                }
            }
            return rsvm.browser.HTMLElement.memory.isContentEditable;
        },
        inputMode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].inputMode;
                }
            }
            return rsvm.browser.HTMLElement.memory.inputMode;
        },
        virtualKeyboardPolicy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].virtualKeyboardPolicy;
                }
            }
            return rsvm.browser.HTMLElement.memory.virtualKeyboardPolicy;
        },
        offsetParent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].offsetParent;
                }
            }
            return rsvm.browser.HTMLElement.memory.offsetParent;
        },
        offsetTop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].offsetTop;
                }
            }
            return rsvm.browser.HTMLElement.memory.offsetTop;
        },
        offsetLeft() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].offsetLeft;
                }
            }
            return rsvm.browser.HTMLElement.memory.offsetLeft;
        },
        offsetWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].offsetWidth;
                }
            }
            return rsvm.browser.HTMLElement.memory.offsetWidth;
        },
        offsetHeight() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].offsetHeight;
                }
            }
            return rsvm.browser.HTMLElement.memory.offsetHeight;
        },
        innerText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.innerText(rsvm.browser.Node.subObject[i]);
                }
            }
            return rsvm.browser.HTMLElement.memory.innerText;
        },
        outerText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.outerText(rsvm.browser.Node.subObject[i]);
                }
            }
            return rsvm.browser.HTMLElement.memory.outerText;
        },
        onbeforexrselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforexrselect;
                }
            }
            return rsvm.browser.HTMLElement.memory.onbeforexrselect;
        },
        onabort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onabort;
                }
            }
            return rsvm.browser.HTMLElement.memory.onabort;
        },
        onbeforeinput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforeinput;
                }
            }
            return rsvm.browser.HTMLElement.memory.onbeforeinput;
        },
        onblur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onblur;
                }
            }
            return rsvm.browser.HTMLElement.memory.onblur;
        },
        oncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncancel;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncancel;
        },
        oncanplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncanplay;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncanplay;
        },
        oncanplaythrough() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncanplaythrough;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncanplaythrough;
        },
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onchange;
                }
            }
            return rsvm.browser.HTMLElement.memory.onchange;
        },
        onclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onclick;
                }
            }
            return rsvm.browser.HTMLElement.memory.onclick;
        },
        onclose() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onclose;
                }
            }
            return rsvm.browser.HTMLElement.memory.onclose;
        },
        oncontextlost() {
            if (rsvm.debugconfig.ifdebugger) {inner
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontextlost;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncontextlost;
        },
        oncontextmenu() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontextmenu;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncontextmenu;
        },
        oncontextrestored() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontextrestored;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncontextrestored;
        },
        oncuechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncuechange;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncuechange;
        },
        ondblclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondblclick;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondblclick;
        },
        ondrag() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondrag;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondrag;
        },
        ondragend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragend;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondragend;
        },
        ondragenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragenter;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondragenter;
        },
        ondragleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragleave;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondragleave;
        },
        ondragover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragover;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondragover;
        },
        ondragstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragstart;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondragstart;
        },
        ondrop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondrop;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondrop;
        },
        ondurationchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondurationchange;
                }
            }
            return rsvm.browser.HTMLElement.memory.ondurationchange;
        },
        onemptied() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onemptied;
                }
            }
            return rsvm.browser.HTMLElement.memory.onemptied;
        },
        onended() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onended;
                }
            }
            return rsvm.browser.HTMLElement.memory.onended;
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onerror;
                }
            }
            return rsvm.browser.HTMLElement.memory.onerror;
        },
        onfocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfocus;
                }
            }
            return rsvm.browser.HTMLElement.memory.onfocus;
        },
        onformdata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onformdata;
                }
            }
            return rsvm.browser.HTMLElement.memory.onformdata;
        },
        oninput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oninput;
                }
            }
            return rsvm.browser.HTMLElement.memory.oninput;
        },
        oninvalid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oninvalid;
                }
            }
            return rsvm.browser.HTMLElement.memory.oninvalid;
        },
        onkeydown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onkeydown;
                }
            }
            return rsvm.browser.HTMLElement.memory.onkeydown;
        },
        onkeypress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onkeypress;
                }
            }
            return rsvm.browser.HTMLElement.memory.onkeypress;
        },
        onkeyup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onkeyup;
                }
            }
            return rsvm.browser.HTMLElement.memory.onkeyup;
        },
        onload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onload;
                }
            }
            return rsvm.browser.HTMLElement.memory.onload;
        },
        onloadeddata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onloadeddata;
                }
            }
            return rsvm.browser.HTMLElement.memory.onloadeddata;
        },
        onloadedmetadata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onloadedmetadata;
                }
            }
            return rsvm.browser.HTMLElement.memory.onloadedmetadata;
        },
        onloadstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onloadstart;
                }
            }
            return rsvm.browser.HTMLElement.memory.onloadstart;
        },
        onmousedown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmousedown;
                }
            }
            return rsvm.browser.HTMLElement.memory.onmousedown;
        },
        onmousemove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmousemove;
                }
            }
            return rsvm.browser.HTMLElement.memory.onmousemove;
        },
        onmouseout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmouseout;
                }
            }
            return rsvm.browser.HTMLElement.memory.onmouseout;
        },
        onmouseover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmouseover;
                }
            }
            return rsvm.browser.HTMLElement.memory.onmouseover;
        },
        onmouseup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmouseup;
                }
            }
            return rsvm.browser.HTMLElement.memory.onmouseup;
        },
        onmousewheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmousewheel;
                }
            }
            return rsvm.browser.HTMLElement.memory.onmousewheel;
        },
        onpause() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpause;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpause;
        },
        onplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onplay;
                }
            }
            return rsvm.browser.HTMLElement.memory.onplay;
        },
        onplaying() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onplaying;
                }
            }
            return rsvm.browser.HTMLElement.memory.onplaying;
        },
        onprogress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onprogress;
                }
            }
            return rsvm.browser.HTMLElement.memory.onprogress;
        },
        onratechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onratechange;
                }
            }
            return rsvm.browser.HTMLElement.memory.onratechange;
        },
        onreset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onreset;
                }
            }
            return rsvm.browser.HTMLElement.memory.onreset;
        },
        onresize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onresize;
                }
            }
            return rsvm.browser.HTMLElement.memory.onresize;
        },
        onscroll() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onscroll;
                }
            }
            return rsvm.browser.HTMLElement.memory.onscroll;
        },
        onsecuritypolicyviolation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsecuritypolicyviolation;
                }
            }
            return rsvm.browser.HTMLElement.memory.onsecuritypolicyviolation;
        },
        onseeked() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onseeked;
                }
            }
            return rsvm.browser.HTMLElement.memory.onseeked;
        },
        onseeking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onseeking;
                }
            }
            return rsvm.browser.HTMLElement.memory.onseeking;
        },
        onselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onselect;
                }
            }
            return rsvm.browser.HTMLElement.memory.onselect;
        },
        onslotchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onslotchange;
                }
            }
            return rsvm.browser.HTMLElement.memory.onslotchange;
        },
        onstalled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onstalled;
                }
            }
            return rsvm.browser.HTMLElement.memory.onstalled;
        },
        onsubmit() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsubmit;
                }
            }
            return rsvm.browser.HTMLElement.memory.onsubmit;
        },
        onsuspend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsuspend;
                }
            }
            return rsvm.browser.HTMLElement.memory.onsuspend;
        },
        ontimeupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontimeupdate;
                }
            }
            return rsvm.browser.HTMLElement.memory.ontimeupdate;
        },
        ontoggle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontoggle;
                }
            }
            return rsvm.browser.HTMLElement.memory.ontoggle;
        },
        onvolumechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onvolumechange;
                }
            }
            return rsvm.browser.HTMLElement.memory.onvolumechange;
        },
        onwaiting() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwaiting;
                }
            }
            return rsvm.browser.HTMLElement.memory.onwaiting;
        },
        onwebkitanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitanimationend;
                }
            }
            return rsvm.browser.HTMLElement.memory.onwebkitanimationend;
        },
        onwebkitanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitanimationiteration;
                }
            }
            return rsvm.browser.HTMLElement.memory.onwebkitanimationiteration;
        },
        onwebkitanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitanimationstart;
                }
            }
            return rsvm.browser.HTMLElement.memory.onwebkitanimationstart;
        },
        onwebkittransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkittransitionend;
                }
            }
            return rsvm.browser.HTMLElement.memory.onwebkittransitionend;
        },
        onwheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwheel;
                }
            }
            return rsvm.browser.HTMLElement.memory.onwheel;
        },
        onauxclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onauxclick;
                }
            }
            return rsvm.browser.HTMLElement.memory.onauxclick;
        },
        ongotpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ongotpointercapture;
                }
            }
            return rsvm.browser.HTMLElement.memory.ongotpointercapture;
        },
        onlostpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onlostpointercapture;
                }
            }
            return rsvm.browser.HTMLElement.memory.onlostpointercapture;
        },
        onpointerdown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerdown;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerdown;
        },
        onpointermove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointermove;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointermove;
        },
        onpointerrawupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerrawupdate;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerrawupdate;
        },
        onpointerup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerup;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerup;
        },
        onpointercancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointercancel;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointercancel;
        },
        onpointerover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerover;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerover;
        },
        onpointerout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerout;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerout;
        },
        onpointerenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerenter;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerenter;
        },
        onpointerleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerleave;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpointerleave;
        },
        onselectstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onselectstart;
                }
            }
            return rsvm.browser.HTMLElement.memory.onselectstart;
        },
        onselectionchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onselectionchange;
                }
            }
            return rsvm.browser.HTMLElement.memory.onselectionchange;
        },
        onanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onanimationend;
                }
            }
            return rsvm.browser.HTMLElement.memory.onanimationend;
        },
        onanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onanimationiteration;
                }
            }
            return rsvm.browser.HTMLElement.memory.onanimationiteration;
        },
        onanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onanimationstart;
                }
            }
            return rsvm.browser.HTMLElement.memory.onanimationstart;
        },
        ontransitionrun() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitionrun;
                }
            }
            return rsvm.browser.HTMLElement.memory.ontransitionrun;
        },
        ontransitionstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitionstart;
                }
            }
            return rsvm.browser.HTMLElement.memory.ontransitionstart;
        },
        ontransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitionend;
                }
            }
            return rsvm.browser.HTMLElement.memory.ontransitionend;
        },
        ontransitioncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitioncancel;
                }
            }
            return rsvm.browser.HTMLElement.memory.ontransitioncancel;
        },
        oncopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncopy;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncopy;
        },
        oncut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncut;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncut;
        },
        onpaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpaste;
                }
            }
            return rsvm.browser.HTMLElement.memory.onpaste;
        },
        dataset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].dataset;
                }
            }
            return rsvm.browser.HTMLElement.memory.dataset;
        },
        nonce() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].nonce;
                }
            }
            return rsvm.browser.HTMLElement.memory.nonce;
        },
        autofocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].autofocus;
                }
            }
            return rsvm.browser.HTMLElement.memory.autofocus;
        },
        tabIndex() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].tabIndex;
                }
            }
            return rsvm.browser.HTMLElement.memory.tabIndex;
        },
        style() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].style;
                }
            }
            return rsvm.browser.HTMLElement.memory.style;
        },
        attributeStyleMap() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].attributeStyleMap;
                }
            }
            return rsvm.browser.HTMLElement.memory.attributeStyleMap;
        },
        inert() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].inert;
                }
            }
            return rsvm.browser.HTMLElement.memory.inert;
        },
        oncontentvisibilityautostatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontentvisibilityautostatechange;
                }
            }
            return rsvm.browser.HTMLElement.memory.oncontentvisibilityautostatechange;
        },
        onbeforematch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLElement");
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforematch;
                }
            }
            return rsvm.browser.HTMLElement.memory.onbeforematch;
        },
    },
    setter: {
        title() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].title = arguments[0];
                    return;
                }
            }
        },
        lang() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].lang = arguments[0];
                    return;
                }
            }
        },
        translate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].translate = arguments[0];
                    return;
                }
            }
        },
        dir() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].dir = arguments[0];
                    return;
                }
            }
        },
        hidden() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].hidden = arguments[0];
                    return;
                }
            }
        },
        accessKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].accessKey = arguments[0];
                    return;
                }
            }
        },
        draggable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].draggable = arguments[0];
                    return;
                }
            }
        },
        spellcheck() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].spellcheck = arguments[0];
                    return;
                }
            }
        },
        autocapitalize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].autocapitalize = arguments[0];
                    return;
                }
            }
        },
        contentEditable() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].contentEditable = arguments[0];
                    return;
                }
            }
        },
        enterKeyHint() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].enterKeyHint = arguments[0];
                    return;
                }
            }
        },
        inputMode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].inputMode = arguments[0];
                    return;
                }
            }
        },
        virtualKeyboardPolicy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].virtualKeyboardPolicy = arguments[0];
                    return;
                }
            }
        },
        innerText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].innerText = arguments[0];
                    return;
                }
            }
        },
        outerText() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].outerText = arguments[0];
                    return;
                }
            }
        },
        onbeforexrselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforexrselect = arguments[0];
                    return;
                }
            }
        },
        onabort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onabort = arguments[0];
                    return;
                }
            }
        },
        onbeforeinput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforeinput = arguments[0];
                    return;
                }
            }
        },
        onblur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onblur = arguments[0];
                    return;
                }
            }
        },
        oncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncancel = arguments[0];
                    return;
                }
            }
        },
        oncanplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncanplay = arguments[0];
                    return;
                }
            }
        },
        oncanplaythrough() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncanplaythrough = arguments[0];
                    return;
                }
            }
        },
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onchange = arguments[0];
                    return;
                }
            }
        },
        onclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onclick = arguments[0];
                    return;
                }
            }
        },
        onclose() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onclose = arguments[0];
                    return;
                }
            }
        },
        oncontextlost() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontextlost = arguments[0];
                    return;
                }
            }
        },
        oncontextmenu() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontextmenu = arguments[0];
                    return;
                }
            }
        },
        oncontextrestored() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontextrestored = arguments[0];
                    return;
                }
            }
        },
        oncuechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncuechange = arguments[0];
                    return;
                }
            }
        },
        ondblclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondblclick = arguments[0];
                    return;
                }
            }
        },
        ondrag() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondrag = arguments[0];
                    return;
                }
            }
        },
        ondragend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragend = arguments[0];
                    return;
                }
            }
        },
        ondragenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragenter = arguments[0];
                    return;
                }
            }
        },
        ondragleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragleave = arguments[0];
                    return;
                }
            }
        },
        ondragover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragover = arguments[0];
                    return;
                }
            }
        },
        ondragstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragstart = arguments[0];
                    return;
                }
            }
        },
        ondrop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondrop = arguments[0];
                    return;
                }
            }
        },
        ondurationchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondurationchange = arguments[0];
                    return;
                }
            }
        },
        onemptied() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onemptied = arguments[0];
                    return;
                }
            }
        },
        onended() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onended = arguments[0];
                    return;
                }
            }
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onerror = arguments[0];
                    return;
                }
            }
        },
        onfocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfocus = arguments[0];
                    return;
                }
            }
        },
        onformdata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onformdata = arguments[0];
                    return;
                }
            }
        },
        oninput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oninput = arguments[0];
                    return;
                }
            }
        },
        oninvalid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oninvalid = arguments[0];
                    return;
                }
            }
        },
        onkeydown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onkeydown = arguments[0];
                    return;
                }
            }
        },
        onkeypress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onkeypress = arguments[0];
                    return;
                }
            }
        },
        onkeyup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onkeyup = arguments[0];
                    return;
                }
            }
        },
        onload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onload = arguments[0];
                    return;
                }
            }
        },
        onloadeddata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onloadeddata = arguments[0];
                    return;
                }
            }
        },
        onloadedmetadata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onloadedmetadata = arguments[0];
                    return;
                }
            }
        },
        onloadstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onloadstart = arguments[0];
                    return;
                }
            }
        },
        onmousedown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmousedown = arguments[0];
                    return;
                }
            }
        },
        onmousemove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmousemove = arguments[0];
                    return;
                }
            }
        },
        onmouseout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmouseout = arguments[0];
                    return;
                }
            }
        },
        onmouseover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmouseover = arguments[0];
                    return;
                }
            }
        },
        onmouseup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmouseup = arguments[0];
                    return;
                }
            }
        },
        onmousewheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmousewheel = arguments[0];
                    return;
                }
            }
        },
        onpause() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpause = arguments[0];
                    return;
                }
            }
        },
        onplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onplay = arguments[0];
                    return;
                }
            }
        },
        onplaying() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onplaying = arguments[0];
                    return;
                }
            }
        },
        onprogress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onprogress = arguments[0];
                    return;
                }
            }
        },
        onratechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onratechange = arguments[0];
                    return;
                }
            }
        },
        onreset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onreset = arguments[0];
                    return;
                }
            }
        },
        onresize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onresize = arguments[0];
                    return;
                }
            }
        },
        onscroll() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onscroll = arguments[0];
                    return;
                }
            }
        },
        onsecuritypolicyviolation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsecuritypolicyviolation = arguments[0];
                    return;
                }
            }
        },
        onseeked() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onseeked = arguments[0];
                    return;
                }
            }
        },
        onseeking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onseeking = arguments[0];
                    return;
                }
            }
        },
        onselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onselect = arguments[0];
                    return;
                }
            }
        },
        onslotchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onslotchange = arguments[0];
                    return;
                }
            }
        },
        onstalled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onstalled = arguments[0];
                    return;
                }
            }
        },
        onsubmit() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsubmit = arguments[0];
                    return;
                }
            }
        },
        onsuspend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsuspend = arguments[0];
                    return;
                }
            }
        },
        ontimeupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontimeupdate = arguments[0];
                    return;
                }
            }
        },
        ontoggle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontoggle = arguments[0];
                    return;
                }
            }
        },
        onvolumechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onvolumechange = arguments[0];
                    return;
                }
            }
        },
        onwaiting() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwaiting = arguments[0];
                    return;
                }
            }
        },
        onwebkitanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitanimationend = arguments[0];
                    return;
                }
            }
        },
        onwebkitanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitanimationiteration = arguments[0];
                    return;
                }
            }
        },
        onwebkitanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitanimationstart = arguments[0];
                    return;
                }
            }
        },
        onwebkittransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkittransitionend = arguments[0];
                    return;
                }
            }
        },
        onwheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwheel = arguments[0];
                    return;
                }
            }
        },
        onauxclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onauxclick = arguments[0];
                    return;
                }
            }
        },
        ongotpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ongotpointercapture = arguments[0];
                    return;
                }
            }
        },
        onlostpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onlostpointercapture = arguments[0];
                    return;
                }
            }
        },
        onpointerdown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerdown = arguments[0];
                    return;
                }
            }
        },
        onpointermove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointermove = arguments[0];
                    return;
                }
            }
        },
        onpointerrawupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerrawupdate = arguments[0];
                    return;
                }
            }
        },
        onpointerup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerup = arguments[0];
                    return;
                }
            }
        },
        onpointercancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointercancel = arguments[0];
                    return;
                }
            }
        },
        onpointerover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerover = arguments[0];
                    return;
                }
            }
        },
        onpointerout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerout = arguments[0];
                    return;
                }
            }
        },
        onpointerenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerenter = arguments[0];
                    return;
                }
            }
        },
        onpointerleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerleave = arguments[0];
                    return;
                }
            }
        },
        onselectstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onselectstart = arguments[0];
                    return;
                }
            }
        },
        onselectionchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onselectionchange = arguments[0];
                    return;
                }
            }
        },
        onanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onanimationend = arguments[0];
                    return;
                }
            }
        },
        onanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onanimationiteration = arguments[0];
                    return;
                }
            }
        },
        onanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onanimationstart = arguments[0];
                    return;
                }
            }
        },
        ontransitionrun() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitionrun = arguments[0];
                    return;
                }
            }
        },
        ontransitionstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitionstart = arguments[0];
                    return;
                }
            }
        },
        ontransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitionend = arguments[0];
                    return;
                }
            }
        },
        ontransitioncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitioncancel = arguments[0];
                    return;
                }
            }
        },
        oncopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncopy = arguments[0];
                    return;
                }
            }
        },
        oncut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncut = arguments[0];
                    return;
                }
            }
        },
        onpaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpaste = arguments[0];
                    return;
                }
            }
        },
        nonce() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].nonce = arguments[0];
                    return;
                }
            }
        },
        autofocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].autofocus = arguments[0];
                    return;
                }
            }
        },
        tabIndex() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].tabIndex = arguments[0];
                    return;
                }
            }
        },
        style() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].style = arguments[0];
                    return;
                }
            }
        },
        inert() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].inert = arguments[0];
                    return;
                }
            }
        },
        oncontentvisibilityautostatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontentvisibilityautostatechange = arguments[0];
                    return;
                }
            }
        },
        onbeforematch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforematch = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {
        attachInternals() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        click() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        focus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create() {
        var object = Object.create(HTMLElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLElement.memory) {
            memory[key] = rsvm.browser.HTMLElement.memory[key];
        }
        for (const key in rsvm.browser.Element.memory) {
            memory[key] = rsvm.browser.Element.memory[key];
        }
        for (const key in rsvm.browser.Node.memory) {
            memory[key] = rsvm.browser.Node.memory[key];
        }
        memory["tagName"] = "I";
        memory["localName"] = "i";
        memory["outerHTML"] = "<" + memory["localName"] + ">" + "</" + memory["localName"] + ">";
        memory['style'] = rsvm.browser.CSSStyleDeclaration.create();
        for (const key in rsvm.browser.CSSStyleDeclaration.subMemory) {
            memory['style'][key] = rsvm.browser.CSSStyleDeclaration.subMemory[key];
        }
        memory["children"] = rsvm.browser.HTMLCollection.create();
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    },
    subObjectType: ["html", "body", "canvas", "div", "a", "script", "meta", "i", "span", "input", "iframe", "head", "link"],
    html() { return rsvm.browser.HTMLHtmlElement.create(); },
    head() { return rsvm.browser.HTMLHeadElement.create(); },
    body() { return rsvm.browser.HTMLBodyElement.create(); },
    canvas() { return rsvm.browser.HTMLCanvasElement.create(); },
    div() { return rsvm.browser.HTMLDivElement.create(); },
    a() { return rsvm.browser.HTMLAnchorElement.create(); },
    script() { return rsvm.browser.HTMLScriptElement.create(); },
    meta() { return rsvm.browser.HTMLMetaElement.create(); },
    i() { return rsvm.browser.HTMLElement.create(); },
    span() { return rsvm.browser.HTMLSpanElement.create(); },
    input() { return rsvm.browser.HTMLInputElement.create(); },
    iframe() { return rsvm.browser.HTMLIFrameElement.create(); },
    link() { return rsvm.browser.HTMLLinkElement.create(); },
};