rsvm.browser.Document = {
    memory: {
        implementation: {},
        URL: "about:blank",
        documentURI: "about:blank",
        compatMode: "CSS1Compat",
        characterSet: "UTF-8",
        charset: "UTF-8",
        inputEncoding: "UTF-8",
        contentType: "application/xml",
        doctype: null,
        documentElement: null,
        xmlEncoding: null,
        xmlVersion: "1.0",
        xmlStandalone: false,
        domain: "mhloojimgilafopcmlcikiidgbbnelip",
        referrer: "",
        cookie: "",
        lastModified: "04/17/2023 21:53:00",
        readyState: "complete",
        title: "",
        dir: "",
        body: null,
        head: null,
        images: {},
        embeds: {},
        plugins: {},
        links: {},
        forms: {},
        scripts: {},
        currentScript: null,
        defaultView: null,
        designMode: "off",
        anchors: {},
        applets: {},
        fgColor: "",
        linkColor: "",
        vlinkColor: "",
        alinkColor: "",
        bgColor: "",
        all: {},
        scrollingElement: null,
        onpointerlockchange: null,
        onpointerlockerror: null,
        hidden: false,
        visibilityState: "hidden",
        wasDiscarded: false,
        featurePolicy: {},
        webkitVisibilityState: "hidden",
        webkitHidden: true,
        onbeforecopy: null,
        onbeforecut: null,
        onbeforepaste: null,
        onfreeze: null,
        onresume: null,
        onsearch: null,
        onvisibilitychange: null,
        fullscreenEnabled: false,
        fullscreen: false,
        onfullscreenchange: null,
        onfullscreenerror: null,
        webkitIsFullScreen: false,
        webkitCurrentFullScreenElement: null,
        webkitFullscreenEnabled: false,
        webkitFullscreenElement: null,
        onwebkitfullscreenchange: null,
        onwebkitfullscreenerror: null,
        rootElement: null,
        pictureInPictureEnabled: false,
        pictureInPictureElement: null,
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
        children: rsvm.browser.HTMLCollection.create(),
        firstElementChild: null,
        lastElementChild: null,
        childElementCount: 0,
        activeElement: null,
        styleSheets: {},
        pointerLockElement: null,
        fullscreenElement: null,
        adoptedStyleSheets: {},
        fonts: {},
        prerendering: false,
        onprerenderingchange: null,
        fragmentDirective: {},
        onbeforematch: null,
        timeline: {},
        oncontentvisibilityautostatechange: null,
    },
    getter: {
        implementation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].implementation;
                }
            }
            return rsvm.browser.Document.memory.implementation;
        },
        URL() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0) {
                        return rsvm.baseMemory.url;
                    }
                }
            }
            return rsvm.browser.Document.memory.URL;
        },
        documentURI() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0) {
                        return rsvm.baseMemory.url;
                    }
                }
            }
            return rsvm.browser.Document.memory.documentURI;
        },
        compatMode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].compatMode;
                }
            }
            return rsvm.browser.Document.memory.compatMode;
        },
        characterSet() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].characterSet;
                }
            }
            return rsvm.browser.Document.memory.characterSet;
        },
        charset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].charset;
                }
            }
            return rsvm.browser.Document.memory.charset;
        },
        inputEncoding() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].inputEncoding;
                }
            }
            return rsvm.browser.Document.memory.inputEncoding;
        },
        contentType() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].contentType;
                }
            }
            return rsvm.browser.Document.memory.contentType;
        },
        doctype() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].doctype;
                }
            }
            return rsvm.browser.Document.memory.doctype;
        },
        documentElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].documentElement;
                }
            }
            return rsvm.browser.Document.memory.documentElement;
        },
        xmlEncoding() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].xmlEncoding;
                }
            }
            return rsvm.browser.Document.memory.xmlEncoding;
        },
        xmlVersion() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].xmlVersion;
                }
            }
            return rsvm.browser.Document.memory.xmlVersion;
        },
        xmlStandalone() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].xmlStandalone;
                }
            }
            return rsvm.browser.Document.memory.xmlStandalone;
        },
        domain() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0) {
                        return rsvm.baseMemory.url.match(/\/\/.+\//g)[0].slice(2, -1).split("/")[0];
                    }
                }
            }
            return rsvm.browser.Document.memory.domain;
        },
        referrer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0) {
                        return rsvm.baseMemory.referrer;
                    }
                }
            }
            return rsvm.browser.Document.memory.referrer;
        },
        cookie() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0) {
                        return rsvm.baseMemory.cookie;
                    }
                    return rsvm.browser.Node.subObject[i].cookie;
                }
            }

            return rsvm.browser.Document.memory.cookie;
        },
        lastModified() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].lastModified;
                }
            }
            return rsvm.browser.Document.memory.lastModified;
        },
        readyState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].readyState;
                }
            }
            return rsvm.browser.Document.memory.readyState;
        },
        title() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.baseMemory.title;
                }
            }
            return rsvm.browser.Document.memory.title;
        },
        dir() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].dir;
                }
            }
            return rsvm.browser.Document.memory.dir;
        },
        body() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].body;
                }
            }
            return rsvm.browser.Document.memory.body;
        },
        head() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].head;
                }
            }
            return rsvm.browser.Document.memory.head;
        },
        images() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].images;
                }
            }
            return rsvm.browser.Document.memory.images;
        },
        embeds() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].embeds;
                }
            }
            return rsvm.browser.Document.memory.embeds;
        },
        plugins() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].plugins;
                }
            }
            return rsvm.browser.Document.memory.plugins;
        },
        links() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].links;
                }
            }
            return rsvm.browser.Document.memory.links;
        },
        forms() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].forms;
                }
            }
            return rsvm.browser.Document.memory.forms;
        },
        scripts() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scripts;
                }
            }
            return rsvm.browser.Document.memory.scripts;
        },
        currentScript() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].currentScript;
                }
            }
            return rsvm.browser.Document.memory.currentScript;
        },
        defaultView() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].defaultView;
                }
            }
            return rsvm.browser.Document.memory.defaultView;
        },
        designMode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].designMode;
                }
            }
            return rsvm.browser.Document.memory.designMode;
        },
        anchors() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].anchors;
                }
            }
            return rsvm.browser.Document.memory.anchors;
        },
        applets() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].applets;
                }
            }
            return rsvm.browser.Document.memory.applets;
        },
        fgColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fgColor;
                }
            }
            return rsvm.browser.Document.memory.fgColor;
        },
        linkColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].linkColor;
                }
            }
            return rsvm.browser.Document.memory.linkColor;
        },
        vlinkColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].vlinkColor;
                }
            }
            return rsvm.browser.Document.memory.vlinkColor;
        },
        alinkColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].alinkColor;
                }
            }
            return rsvm.browser.Document.memory.alinkColor;
        },
        bgColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].bgColor;
                }
            }
            return rsvm.browser.Document.memory.bgColor;
        },
        all() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    var all = rsvm.browser.HTMLAllCollection.create();
                    rsvm.all(this.firstElementChild, all);
                    return all;
                }
            }
            return rsvm.browser.Document.memory.all;
        },
        scrollingElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].scrollingElement;
                }
            }
            return rsvm.browser.Document.memory.scrollingElement;
        },
        onpointerlockchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerlockchange;
                }
            }
            return rsvm.browser.Document.memory.onpointerlockchange;
        },
        onpointerlockerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerlockerror;
                }
            }
            return rsvm.browser.Document.memory.onpointerlockerror;
        },
        hidden() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].hidden;
                }
            }
            return rsvm.browser.Document.memory.hidden;
        },
        visibilityState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].visibilityState;
                }
            }
            return rsvm.browser.Document.memory.visibilityState;
        },
        wasDiscarded() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].wasDiscarded;
                }
            }
            return rsvm.browser.Document.memory.wasDiscarded;
        },
        featurePolicy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].featurePolicy;
                }
            }
            return rsvm.browser.Document.memory.featurePolicy;
        },
        webkitVisibilityState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].webkitVisibilityState;
                }
            }
            return rsvm.browser.Document.memory.webkitVisibilityState;
        },
        webkitHidden() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].webkitHidden;
                }
            }
            return rsvm.browser.Document.memory.webkitHidden;
        },
        onbeforecopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforecopy;
                }
            }
            return rsvm.browser.Document.memory.onbeforecopy;
        },
        onbeforecut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforecut;
                }
            }
            return rsvm.browser.Document.memory.onbeforecut;
        },
        onbeforepaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforepaste;
                }
            }
            return rsvm.browser.Document.memory.onbeforepaste;
        },
        onfreeze() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfreeze;
                }
            }
            return rsvm.browser.Document.memory.onfreeze;
        },
        onresume() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onresume;
                }
            }
            return rsvm.browser.Document.memory.onresume;
        },
        onsearch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsearch;
                }
            }
            return rsvm.browser.Document.memory.onsearch;
        },
        onvisibilitychange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onvisibilitychange;
                }
            }
            return rsvm.browser.Document.memory.onvisibilitychange;
        },
        fullscreenEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fullscreenEnabled;
                }
            }
            return rsvm.browser.Document.memory.fullscreenEnabled;
        },
        fullscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fullscreen;
                }
            }
            return rsvm.browser.Document.memory.fullscreen;
        },
        onfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfullscreenchange;
                }
            }
            return rsvm.browser.Document.memory.onfullscreenchange;
        },
        onfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfullscreenerror;
                }
            }
            return rsvm.browser.Document.memory.onfullscreenerror;
        },
        webkitIsFullScreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].webkitIsFullScreen;
                }
            }
            return rsvm.browser.Document.memory.webkitIsFullScreen;
        },
        webkitCurrentFullScreenElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].webkitCurrentFullScreenElement;
                }
            }
            return rsvm.browser.Document.memory.webkitCurrentFullScreenElement;
        },
        webkitFullscreenEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].webkitFullscreenEnabled;
                }
            }
            return rsvm.browser.Document.memory.webkitFullscreenEnabled;
        },
        webkitFullscreenElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].webkitFullscreenElement;
                }
            }
            return rsvm.browser.Document.memory.webkitFullscreenElement;
        },
        onwebkitfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitfullscreenchange;
                }
            }
            return rsvm.browser.Document.memory.onwebkitfullscreenchange;
        },
        onwebkitfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitfullscreenerror;
                }
            }
            return rsvm.browser.Document.memory.onwebkitfullscreenerror;
        },
        rootElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].rootElement;
                }
            }
            return rsvm.browser.Document.memory.rootElement;
        },
        pictureInPictureEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].pictureInPictureEnabled;
                }
            }
            return rsvm.browser.Document.memory.pictureInPictureEnabled;
        },
        pictureInPictureElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].pictureInPictureElement;
                }
            }
            return rsvm.browser.Document.memory.pictureInPictureElement;
        },
        onbeforexrselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforexrselect;
                }
            }
            return rsvm.browser.Document.memory.onbeforexrselect;
        },
        onabort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onabort;
                }
            }
            return rsvm.browser.Document.memory.onabort;
        },
        onbeforeinput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforeinput;
                }
            }
            return rsvm.browser.Document.memory.onbeforeinput;
        },
        onblur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onblur;
                }
            }
            return rsvm.browser.Document.memory.onblur;
        },
        oncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncancel;
                }
            }
            return rsvm.browser.Document.memory.oncancel;
        },
        oncanplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncanplay;
                }
            }
            return rsvm.browser.Document.memory.oncanplay;
        },
        oncanplaythrough() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncanplaythrough;
                }
            }
            return rsvm.browser.Document.memory.oncanplaythrough;
        },
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onchange;
                }
            }
            return rsvm.browser.Document.memory.onchange;
        },
        onclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onclick;
                }
            }
            return rsvm.browser.Document.memory.onclick;
        },
        onclose() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onclose;
                }
            }
            return rsvm.browser.Document.memory.onclose;
        },
        oncontextlost() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontextlost;
                }
            }
            return rsvm.browser.Document.memory.oncontextlost;
        },
        oncontextmenu() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontextmenu;
                }
            }
            return rsvm.browser.Document.memory.oncontextmenu;
        },
        oncontextrestored() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontextrestored;
                }
            }
            return rsvm.browser.Document.memory.oncontextrestored;
        },
        oncuechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncuechange;
                }
            }
            return rsvm.browser.Document.memory.oncuechange;
        },
        ondblclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondblclick;
                }
            }
            return rsvm.browser.Document.memory.ondblclick;
        },
        ondrag() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondrag;
                }
            }
            return rsvm.browser.Document.memory.ondrag;
        },
        ondragend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragend;
                }
            }
            return rsvm.browser.Document.memory.ondragend;
        },
        ondragenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragenter;
                }
            }
            return rsvm.browser.Document.memory.ondragenter;
        },
        ondragleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragleave;
                }
            }
            return rsvm.browser.Document.memory.ondragleave;
        },
        ondragover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragover;
                }
            }
            return rsvm.browser.Document.memory.ondragover;
        },
        ondragstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondragstart;
                }
            }
            return rsvm.browser.Document.memory.ondragstart;
        },
        ondrop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondrop;
                }
            }
            return rsvm.browser.Document.memory.ondrop;
        },
        ondurationchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ondurationchange;
                }
            }
            return rsvm.browser.Document.memory.ondurationchange;
        },
        onemptied() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onemptied;
                }
            }
            return rsvm.browser.Document.memory.onemptied;
        },
        onended() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onended;
                }
            }
            return rsvm.browser.Document.memory.onended;
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onerror;
                }
            }
            return rsvm.browser.Document.memory.onerror;
        },
        onfocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onfocus;
                }
            }
            return rsvm.browser.Document.memory.onfocus;
        },
        onformdata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onformdata;
                }
            }
            return rsvm.browser.Document.memory.onformdata;
        },
        oninput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oninput;
                }
            }
            return rsvm.browser.Document.memory.oninput;
        },
        oninvalid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oninvalid;
                }
            }
            return rsvm.browser.Document.memory.oninvalid;
        },
        onkeydown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onkeydown;
                }
            }
            return rsvm.browser.Document.memory.onkeydown;
        },
        onkeypress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onkeypress;
                }
            }
            return rsvm.browser.Document.memory.onkeypress;
        },
        onkeyup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onkeyup;
                }
            }
            return rsvm.browser.Document.memory.onkeyup;
        },
        onload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onload;
                }
            }
            return rsvm.browser.Document.memory.onload;
        },
        onloadeddata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onloadeddata;
                }
            }
            return rsvm.browser.Document.memory.onloadeddata;
        },
        onloadedmetadata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onloadedmetadata;
                }
            }
            return rsvm.browser.Document.memory.onloadedmetadata;
        },
        onloadstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onloadstart;
                }
            }
            return rsvm.browser.Document.memory.onloadstart;
        },
        onmousedown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmousedown;
                }
            }
            return rsvm.browser.Document.memory.onmousedown;
        },
        onmousemove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmousemove;
                }
            }
            return rsvm.browser.Document.memory.onmousemove;
        },
        onmouseout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmouseout;
                }
            }
            return rsvm.browser.Document.memory.onmouseout;
        },
        onmouseover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmouseover;
                }
            }
            return rsvm.browser.Document.memory.onmouseover;
        },
        onmouseup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmouseup;
                }
            }
            return rsvm.browser.Document.memory.onmouseup;
        },
        onmousewheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onmousewheel;
                }
            }
            return rsvm.browser.Document.memory.onmousewheel;
        },
        onpause() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpause;
                }
            }
            return rsvm.browser.Document.memory.onpause;
        },
        onplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onplay;
                }
            }
            return rsvm.browser.Document.memory.onplay;
        },
        onplaying() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onplaying;
                }
            }
            return rsvm.browser.Document.memory.onplaying;
        },
        onprogress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onprogress;
                }
            }
            return rsvm.browser.Document.memory.onprogress;
        },
        onratechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onratechange;
                }
            }
            return rsvm.browser.Document.memory.onratechange;
        },
        onreset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onreset;
                }
            }
            return rsvm.browser.Document.memory.onreset;
        },
        onresize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onresize;
                }
            }
            return rsvm.browser.Document.memory.onresize;
        },
        onscroll() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onscroll;
                }
            }
            return rsvm.browser.Document.memory.onscroll;
        },
        onsecuritypolicyviolation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsecuritypolicyviolation;
                }
            }
            return rsvm.browser.Document.memory.onsecuritypolicyviolation;
        },
        onseeked() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onseeked;
                }
            }
            return rsvm.browser.Document.memory.onseeked;
        },
        onseeking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onseeking;
                }
            }
            return rsvm.browser.Document.memory.onseeking;
        },
        onselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onselect;
                }
            }
            return rsvm.browser.Document.memory.onselect;
        },
        onslotchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onslotchange;
                }
            }
            return rsvm.browser.Document.memory.onslotchange;
        },
        onstalled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onstalled;
                }
            }
            return rsvm.browser.Document.memory.onstalled;
        },
        onsubmit() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsubmit;
                }
            }
            return rsvm.browser.Document.memory.onsubmit;
        },
        onsuspend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onsuspend;
                }
            }
            return rsvm.browser.Document.memory.onsuspend;
        },
        ontimeupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontimeupdate;
                }
            }
            return rsvm.browser.Document.memory.ontimeupdate;
        },
        ontoggle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontoggle;
                }
            }
            return rsvm.browser.Document.memory.ontoggle;
        },
        onvolumechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onvolumechange;
                }
            }
            return rsvm.browser.Document.memory.onvolumechange;
        },
        onwaiting() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwaiting;
                }
            }
            return rsvm.browser.Document.memory.onwaiting;
        },
        onwebkitanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitanimationend;
                }
            }
            return rsvm.browser.Document.memory.onwebkitanimationend;
        },
        onwebkitanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitanimationiteration;
                }
            }
            return rsvm.browser.Document.memory.onwebkitanimationiteration;
        },
        onwebkitanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkitanimationstart;
                }
            }
            return rsvm.browser.Document.memory.onwebkitanimationstart;
        },
        onwebkittransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwebkittransitionend;
                }
            }
            return rsvm.browser.Document.memory.onwebkittransitionend;
        },
        onwheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onwheel;
                }
            }
            return rsvm.browser.Document.memory.onwheel;
        },
        onauxclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onauxclick;
                }
            }
            return rsvm.browser.Document.memory.onauxclick;
        },
        ongotpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ongotpointercapture;
                }
            }
            return rsvm.browser.Document.memory.ongotpointercapture;
        },
        onlostpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onlostpointercapture;
                }
            }
            return rsvm.browser.Document.memory.onlostpointercapture;
        },
        onpointerdown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerdown;
                }
            }
            return rsvm.browser.Document.memory.onpointerdown;
        },
        onpointermove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointermove;
                }
            }
            return rsvm.browser.Document.memory.onpointermove;
        },
        onpointerrawupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerrawupdate;
                }
            }
            return rsvm.browser.Document.memory.onpointerrawupdate;
        },
        onpointerup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerup;
                }
            }
            return rsvm.browser.Document.memory.onpointerup;
        },
        onpointercancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointercancel;
                }
            }
            return rsvm.browser.Document.memory.onpointercancel;
        },
        onpointerover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerover;
                }
            }
            return rsvm.browser.Document.memory.onpointerover;
        },
        onpointerout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerout;
                }
            }
            return rsvm.browser.Document.memory.onpointerout;
        },
        onpointerenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerenter;
                }
            }
            return rsvm.browser.Document.memory.onpointerenter;
        },
        onpointerleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpointerleave;
                }
            }
            return rsvm.browser.Document.memory.onpointerleave;
        },
        onselectstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onselectstart;
                }
            }
            return rsvm.browser.Document.memory.onselectstart;
        },
        onselectionchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onselectionchange;
                }
            }
            return rsvm.browser.Document.memory.onselectionchange;
        },
        onanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onanimationend;
                }
            }
            return rsvm.browser.Document.memory.onanimationend;
        },
        onanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onanimationiteration;
                }
            }
            return rsvm.browser.Document.memory.onanimationiteration;
        },
        onanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onanimationstart;
                }
            }
            return rsvm.browser.Document.memory.onanimationstart;
        },
        ontransitionrun() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitionrun;
                }
            }
            return rsvm.browser.Document.memory.ontransitionrun;
        },
        ontransitionstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitionstart;
                }
            }
            return rsvm.browser.Document.memory.ontransitionstart;
        },
        ontransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitionend;
                }
            }
            return rsvm.browser.Document.memory.ontransitionend;
        },
        ontransitioncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].ontransitioncancel;
                }
            }
            return rsvm.browser.Document.memory.ontransitioncancel;
        },
        oncopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncopy;
                }
            }
            return rsvm.browser.Document.memory.oncopy;
        },
        oncut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncut;
                }
            }
            return rsvm.browser.Document.memory.oncut;
        },
        onpaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onpaste;
                }
            }
            return rsvm.browser.Document.memory.onpaste;
        },
        children() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].children;
                }
            }
            return rsvm.browser.Document.memory.children;
        },
        firstElementChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].firstElementChild;
                }
            }
            return rsvm.browser.Document.memory.firstElementChild;
        },
        lastElementChild() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].lastElementChild;
                }
            }
            return rsvm.browser.Document.memory.lastElementChild;
        },
        childElementCount() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].all.length;
                }
            }
            return rsvm.browser.Document.memory.childElementCount;
        },
        activeElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].activeElement;
                }
            }
            return rsvm.browser.Document.memory.activeElement;
        },
        styleSheets() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].styleSheets;
                }
            }
            return rsvm.browser.Document.memory.styleSheets;
        },
        pointerLockElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].pointerLockElement;
                }
            }
            return rsvm.browser.Document.memory.pointerLockElement;
        },
        fullscreenElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fullscreenElement;
                }
            }
            return rsvm.browser.Document.memory.fullscreenElement;
        },
        adoptedStyleSheets() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].adoptedStyleSheets;
                }
            }
            return rsvm.browser.Document.memory.adoptedStyleSheets;
        },
        fonts() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fonts;
                }
            }
            return rsvm.browser.Document.memory.fonts;
        },
        prerendering() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].prerendering;
                }
            }
            return rsvm.browser.Document.memory.prerendering;
        },
        onprerenderingchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onprerenderingchange;
                }
            }
            return rsvm.browser.Document.memory.onprerenderingchange;
        },
        fragmentDirective() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].fragmentDirective;
                }
            }
            return rsvm.browser.Document.memory.fragmentDirective;
        },
        onbeforematch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].onbeforematch;
                }
            }
            return rsvm.browser.Document.memory.onbeforematch;
        },
        timeline() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].timeline;
                }
            }
            return rsvm.browser.Document.memory.timeline;
        },
        oncontentvisibilityautostatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].oncontentvisibilityautostatechange;
                }
            }
            return rsvm.browser.Document.memory.oncontentvisibilityautostatechange;
        },
    },
    setter: {
        xmlVersion() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].xmlVersion = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.xmlVersion = arguments[0];
        },
        xmlStandalone() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].xmlStandalone = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.xmlStandalone = arguments[0];
        },
        domain() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].domain = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.domain = arguments[0];
        },
        cookie() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    if (i == 0) {
                        var value = arguments[0];
                        if (typeof (value) == "string") {
                            value = value.split(";")[0]
                            var ary = rsvm.baseMemory.cookie.split("; ");
                            if (value.indexOf("=") != -1) {
                                value = value.replaceAll(" ", "");
                                if (rsvm.baseMemory.cookie == "") {
                                    rsvm.baseMemory.cookie = value;
                                } else {
                                    var find = false;
                                    for (var j = 0; j < ary.length; j++) {
                                        var v = ary[j];
                                        if (ary[j].split("=")[0] == value.split("=")[0] && ary[j].indexOf("=") != -1) {
                                            v = value;
                                            find = true;
                                        }
                                        if (j == 0) {
                                            rsvm.baseMemory.cookie = v;
                                        } else {
                                            rsvm.baseMemory.cookie += "; " + v;
                                        }
                                    }
                                    if (find == false) {
                                        rsvm.baseMemory.cookie += "; " + value;
                                    }
                                }
                            } else {
                                while (value[0] == " ") {
                                    value = value.replace(" ", "");
                                }
                                if (rsvm.baseMemory.cookie == "") {
                                    rsvm.baseMemory.cookie = value;
                                } else {
                                    rsvm.baseMemory.cookie = "";
                                    var isfirst = ary[0].indexOf("=") == -1;
                                    for (var j = 0; j < ary.length; j++) {
                                        if (ary[j].indexOf("=") != -1) {
                                            if (j == 0) {
                                                rsvm.baseMemory.cookie = ary[j];
                                            } else {
                                                if (isfirst && j == 1) {
                                                    rsvm.baseMemory.cookie += ary[j];
                                                } else {
                                                    rsvm.baseMemory.cookie += "; " + ary[j];
                                                }
                                            }
                                        }
                                    }
                                    rsvm.baseMemory.cookie += "; " + value;
                                }
                            }
                        }
                        return;
                    }
                }
            }

        },
        title() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].title = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.title = arguments[0];
        },
        dir() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].dir = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.dir = arguments[0];
        },
        body() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].body = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.body = arguments[0];
        },
        designMode() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].designMode = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.designMode = arguments[0];
        },
        fgColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].fgColor = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.fgColor = arguments[0];
        },
        linkColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].linkColor = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.linkColor = arguments[0];
        },
        vlinkColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].vlinkColor = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.vlinkColor = arguments[0];
        },
        alinkColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].alinkColor = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.alinkColor = arguments[0];
        },
        bgColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].bgColor = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.bgColor = arguments[0];
        },
        onpointerlockchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerlockchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerlockchange = arguments[0];
        },
        onpointerlockerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerlockerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerlockerror = arguments[0];
        },
        onbeforecopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforecopy = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onbeforecopy = arguments[0];
        },
        onbeforecut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforecut = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onbeforecut = arguments[0];
        },
        onbeforepaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforepaste = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onbeforepaste = arguments[0];
        },
        onfreeze() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfreeze = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onfreeze = arguments[0];
        },
        onresume() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onresume = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onresume = arguments[0];
        },
        onsearch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsearch = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onsearch = arguments[0];
        },
        onvisibilitychange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onvisibilitychange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onvisibilitychange = arguments[0];
        },
        fullscreenEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].fullscreenEnabled = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.fullscreenEnabled = arguments[0];
        },
        fullscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].fullscreen = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.fullscreen = arguments[0];
        },
        onfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfullscreenchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onfullscreenchange = arguments[0];
        },
        onfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfullscreenerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onfullscreenerror = arguments[0];
        },
        onwebkitfullscreenchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitfullscreenchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwebkitfullscreenchange = arguments[0];
        },
        onwebkitfullscreenerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitfullscreenerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwebkitfullscreenerror = arguments[0];
        },
        onbeforexrselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforexrselect = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onbeforexrselect = arguments[0];
        },
        onabort() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onabort = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onabort = arguments[0];
        },
        onbeforeinput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforeinput = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onbeforeinput = arguments[0];
        },
        onblur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onblur = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onblur = arguments[0];
        },
        oncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncancel = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncancel = arguments[0];
        },
        oncanplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncanplay = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncanplay = arguments[0];
        },
        oncanplaythrough() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncanplaythrough = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncanplaythrough = arguments[0];
        },
        onchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onchange = arguments[0];
        },
        onclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onclick = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onclick = arguments[0];
        },
        onclose() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onclose = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onclose = arguments[0];
        },
        oncontextlost() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontextlost = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncontextlost = arguments[0];
        },
        oncontextmenu() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontextmenu = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncontextmenu = arguments[0];
        },
        oncontextrestored() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontextrestored = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncontextrestored = arguments[0];
        },
        oncuechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncuechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncuechange = arguments[0];
        },
        ondblclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondblclick = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondblclick = arguments[0];
        },
        ondrag() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondrag = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondrag = arguments[0];
        },
        ondragend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragend = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondragend = arguments[0];
        },
        ondragenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragenter = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondragenter = arguments[0];
        },
        ondragleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragleave = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondragleave = arguments[0];
        },
        ondragover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragover = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondragover = arguments[0];
        },
        ondragstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondragstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondragstart = arguments[0];
        },
        ondrop() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondrop = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondrop = arguments[0];
        },
        ondurationchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ondurationchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ondurationchange = arguments[0];
        },
        onemptied() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onemptied = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onemptied = arguments[0];
        },
        onended() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onended = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onended = arguments[0];
        },
        onerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onerror = arguments[0];
        },
        onfocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onfocus = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onfocus = arguments[0];
        },
        onformdata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onformdata = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onformdata = arguments[0];
        },
        oninput() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oninput = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oninput = arguments[0];
        },
        oninvalid() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oninvalid = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oninvalid = arguments[0];
        },
        onkeydown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onkeydown = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onkeydown = arguments[0];
        },
        onkeypress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onkeypress = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onkeypress = arguments[0];
        },
        onkeyup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onkeyup = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onkeyup = arguments[0];
        },
        onload() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onload = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onload = arguments[0];
        },
        onloadeddata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onloadeddata = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onloadeddata = arguments[0];
        },
        onloadedmetadata() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onloadedmetadata = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onloadedmetadata = arguments[0];
        },
        onloadstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onloadstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onloadstart = arguments[0];
        },
        onmousedown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmousedown = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onmousedown = arguments[0];
        },
        onmousemove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmousemove = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onmousemove = arguments[0];
        },
        onmouseout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmouseout = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onmouseout = arguments[0];
        },
        onmouseover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmouseover = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onmouseover = arguments[0];
        },
        onmouseup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmouseup = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onmouseup = arguments[0];
        },
        onmousewheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onmousewheel = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onmousewheel = arguments[0];
        },
        onpause() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpause = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpause = arguments[0];
        },
        onplay() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onplay = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onplay = arguments[0];
        },
        onplaying() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onplaying = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onplaying = arguments[0];
        },
        onprogress() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onprogress = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onprogress = arguments[0];
        },
        onratechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onratechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onratechange = arguments[0];
        },
        onreset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onreset = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onreset = arguments[0];
        },
        onresize() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onresize = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onresize = arguments[0];
        },
        onscroll() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onscroll = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onscroll = arguments[0];
        },
        onsecuritypolicyviolation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsecuritypolicyviolation = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onsecuritypolicyviolation = arguments[0];
        },
        onseeked() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onseeked = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onseeked = arguments[0];
        },
        onseeking() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onseeking = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onseeking = arguments[0];
        },
        onselect() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onselect = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onselect = arguments[0];
        },
        onslotchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onslotchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onslotchange = arguments[0];
        },
        onstalled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onstalled = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onstalled = arguments[0];
        },
        onsubmit() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsubmit = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onsubmit = arguments[0];
        },
        onsuspend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onsuspend = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onsuspend = arguments[0];
        },
        ontimeupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontimeupdate = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ontimeupdate = arguments[0];
        },
        ontoggle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontoggle = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ontoggle = arguments[0];
        },
        onvolumechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onvolumechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onvolumechange = arguments[0];
        },
        onwaiting() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwaiting = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwaiting = arguments[0];
        },
        onwebkitanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitanimationend = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwebkitanimationend = arguments[0];
        },
        onwebkitanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitanimationiteration = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwebkitanimationiteration = arguments[0];
        },
        onwebkitanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkitanimationstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwebkitanimationstart = arguments[0];
        },
        onwebkittransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwebkittransitionend = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwebkittransitionend = arguments[0];
        },
        onwheel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onwheel = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onwheel = arguments[0];
        },
        onauxclick() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onauxclick = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onauxclick = arguments[0];
        },
        ongotpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ongotpointercapture = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ongotpointercapture = arguments[0];
        },
        onlostpointercapture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onlostpointercapture = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onlostpointercapture = arguments[0];
        },
        onpointerdown() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerdown = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerdown = arguments[0];
        },
        onpointermove() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointermove = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointermove = arguments[0];
        },
        onpointerrawupdate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerrawupdate = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerrawupdate = arguments[0];
        },
        onpointerup() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerup = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerup = arguments[0];
        },
        onpointercancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointercancel = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointercancel = arguments[0];
        },
        onpointerover() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerover = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerover = arguments[0];
        },
        onpointerout() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerout = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerout = arguments[0];
        },
        onpointerenter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerenter = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerenter = arguments[0];
        },
        onpointerleave() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpointerleave = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpointerleave = arguments[0];
        },
        onselectstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onselectstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onselectstart = arguments[0];
        },
        onselectionchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onselectionchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onselectionchange = arguments[0];
        },
        onanimationend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onanimationend = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onanimationend = arguments[0];
        },
        onanimationiteration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onanimationiteration = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onanimationiteration = arguments[0];
        },
        onanimationstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onanimationstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onanimationstart = arguments[0];
        },
        ontransitionrun() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitionrun = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ontransitionrun = arguments[0];
        },
        ontransitionstart() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitionstart = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ontransitionstart = arguments[0];
        },
        ontransitionend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitionend = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ontransitionend = arguments[0];
        },
        ontransitioncancel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].ontransitioncancel = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.ontransitioncancel = arguments[0];
        },
        oncopy() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncopy = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncopy = arguments[0];
        },
        oncut() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncut = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncut = arguments[0];
        },
        onpaste() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onpaste = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onpaste = arguments[0];
        },
        fullscreenElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].fullscreenElement = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.fullscreenElement = arguments[0];
        },
        adoptedStyleSheets() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].adoptedStyleSheets = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.adoptedStyleSheets = arguments[0];
        },
        onprerenderingchange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onprerenderingchange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onprerenderingchange = arguments[0];
        },
        onbeforematch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].onbeforematch = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.onbeforematch = arguments[0];
        },
        oncontentvisibilityautostatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("Document");
            }
            if (!Document.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].oncontentvisibilityautostatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.Document.memory.oncontentvisibilityautostatechange = arguments[0];
        },
    },
    actor: {
        adoptNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        append() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            this.children[this.children.length] = arguments[0];
            this.childNodes[this.childNodes.length] = arguments[0];
            rsvm.updateValue(arguments[0], "Node", "parentElement", this);
            rsvm.updateValue(arguments[0], "Node", "parentNode", this);
        },
        captureEvents() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        caretRangeFromPoint() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clear() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        close() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createAttribute(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createAttributeNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createCDATASection(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createComment(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createDocumentFragment() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var tagName = ("" + arguments[0]).toLocaleLowerCase();
            if (rsvm.browser.HTMLElement.subObjectType.indexOf(tagName) != -1) {
                return rsvm.browser.HTMLElement[tagName]();
            }
            return null;
        },
        createElementNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createEvent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var type = arguments[0];
            if (rsvm.browser.Event.subObjectType.indexOf(type) != -1) {
                return rsvm.browser.Event[type]();
            } else {
                let error = new DOMException();
                error.stack = "Uncaught DOMException: Failed to execute 'createEvent' on 'Document': The provided event type ('Eventsd') is invalid.";
                throw error;
            }
        },
        createExpression(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createNSResolver(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createNodeIterator(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createProcessingInstruction(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createRange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createTextNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createTreeWalker(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        elementFromPoint(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        elementsFromPoint(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        evaluate(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        execCommand(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        exitFullscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        exitPictureInPicture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        exitPointerLock() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getElementById(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getElementsByClassName(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getElementsByName(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getElementsByTagName() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var obj = rsvm.browser.HTMLCollection.create();
            var tagName = ("" + arguments[0]).toLocaleLowerCase();
            for (let i = 0; i < document.all.length; i++){
                if (document.all[i].localName === tagName){
                    obj[obj.length] = document.all[i];
                }
            }
            return obj;
        },
        getElementsByTagNameNS(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getSelection() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hasFocus() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        importNode(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        open() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            return new Document;
        },
        prepend() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        queryCommandEnabled(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        queryCommandIndeterm(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        queryCommandState(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        queryCommandSupported(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        queryCommandValue(a) {
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
        releaseEvents() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        replaceChildren() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        webkitCancelFullScreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        webkitExitFullscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        write() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        writeln() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAnimations() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        startViewTransition() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: []
};