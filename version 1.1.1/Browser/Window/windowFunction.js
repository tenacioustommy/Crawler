rsvm.browser.func.windowMemory = {
    self: this,
    document: {},
    name: "",
    location: {},
    customElements: {},
    history: {},
    navigation: {},
    locationbar: {},
    menubar: {},
    personalbar: {},
    scrollbars: {},
    statusbar: {},
    toolbar: {},
    status: "",
    closed: false,
    frames: {},
    // length: 0,
    top: {},
    opener: null,
    parent: {},
    // contentWindow: rsvm.proxy(this),
    frameElement: null,
    navigator: {},
    origin: "chrome://newtab",
    external: {},
    screen: {},
    innerWidth: 150,
    innerHeight: 872,
    scrollX: 0,
    pageXOffset: 0,
    scrollY: 0,
    pageYOffset: 0,
    visualViewport: {},
    screenX: 391,
    screenY: 51,
    outerWidth: 751,
    outerHeight: 992,
    devicePixelRatio: 1,
    clientInformation: {},
    screenLeft: 391,
    screenTop: 51,
    styleMedia: {},
    onsearch: null,
    isSecureContext: true,
    trustedTypes: {},
    performance: {},
    onappinstalled: null,
    onbeforeinstallprompt: null,
    crypto: {},
    indexedDB: {},
    sessionStorage: {},
    localStorage: {},
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
    onmouseenter: null,
    onmouseleave: null,
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
    onafterprint: null,
    onbeforeprint: null,
    onbeforeunload: null,
    onhashchange: null,
    onlanguagechange: null,
    onmessage: null,
    onmessageerror: null,
    onoffline: null,
    ononline: null,
    onpagehide: null,
    onpageshow: null,
    onpopstate: null,
    onrejectionhandled: null,
    onstorage: null,
    onunhandledrejection: null,
    onunload: null,
    crossOriginIsolated: false,
    scheduler: {},
    chrome: {},
    credentialless: false,
    caches: {},
    cookieStore: rsvm.proxy(Object.create(CookieStore.prototype)),
    ondevicemotion: null,
    ondeviceorientation: null,
    ondeviceorientationabsolute: null,
    launchQueue: {},
    onbeforematch: null,
    originAgentCluster: false,
    speechSynthesis: {},
    oncontentvisibilityautostatechange: null,
};

rsvm.browser.timerID = {};

rsvm.browser.func.window = {
    alert() {
        // if (rsvm.debugconfig.ifdebugger) {
        //     debugger;
        // }
    },
    atob() {
        var base64 = arguments[0];
        if (base64.length / 4 < 0 || base64.length % 4 != 0) {
            throw DOMException();
        } else {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            let result = '';
            let buffer = 0;
            let bufferLength = 0;
            for (let i = 0; i < base64.length; i++) {
                if (base64[i] === '=') {
                    break; // 标志解码结束
                }
                const charValue = chars.indexOf(base64[i]);
                if (charValue === -1) {
                    throw new Error('Invalid base64 string');
                }
                buffer = (buffer << 6) | charValue;
                bufferLength += 6;
                if (bufferLength >= 8) {
                    result += String.fromCharCode((buffer >> (bufferLength - 8)) & 255);
                    bufferLength -= 8;
                }
            }
            return result;
        }
    },
    blur() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    btoa() {
        let string = arguments[0];
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let result = '';
        for (let i = 0; i < string.length; i += 3) {
            const char1 = string.charCodeAt(i);
            const char2 = i + 1 < string.length ? string.charCodeAt(i + 1) : 0;
            const char3 = i + 2 < string.length ? string.charCodeAt(i + 2) : 0;
            const byte1 = char1 >> 2;
            const byte2 = ((char1 & 3) << 4) | (char2 >> 4);
            const byte3 = ((char2 & 15) << 2) | (char3 >> 6);
            const byte4 = char3 & 63;
            result += chars[byte1] + chars[byte2] + chars[byte3] + chars[byte4];
        }
        return result;
    },
    cancelAnimationFrame(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    cancelIdleCallback(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    captureEvents() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    clearInterval() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
        if (rsvm.browser.timerID.hasOwnProperty(arguments[0])) {
            delete rsvm.browser.timerID[arguments[0]];
        }
    },
    clearTimeout() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
        if (rsvm.browser.timerID.hasOwnProperty(arguments[0])) {
            delete rsvm.browser.timerID[arguments[0]];
        }
    },
    close() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    confirm() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    createImageBitmap(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    fetch(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    find() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    focus() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    getComputedStyle() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
        var a = arguments[0];
        var object = Object.create(CSSStyleDeclaration.prototype);
        var memory = {};
        for (let i = 0; i < rsvm.browser.CSSStyleDeclaration.subObject.length; i++) {
            if (a.style == rsvm.browser.CSSStyleDeclaration.subObject[i].dogID) {
                for (const key in rsvm.browser.CSSStyleDeclaration.memory) {
                    memory[key] = a.style[key];
                }
                for (const key in rsvm.browser.CSSStyleDeclaration.subMemory) {
                    object[key] = a.style[key];
                }
            }
        }
        rsvm.browser.CSSStyleDeclaration.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    },
    getSelection() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    matchMedia(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    moveBy(a, b) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    moveTo(a, b) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    open() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    postMessage(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    print() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },

    prompt() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    queueMicrotask(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    releaseEvents() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    reportError(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    requestAnimationFrame(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    requestIdleCallback(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    resizeBy(a, b) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    resizeTo(a, b) {
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
    scrollTo() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    setInterval() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
        var func = arguments[0];
        var tm = arguments[1];
        var id, inTimer = false;
        while (!inTimer) {
            id = Math.floor(Math.random() * 2000);
            if (!rsvm.browser.timerID.hasOwnProperty(id)) {
                break;
            }
        }
        if (tm <= 3000) {
            if (typeof (func) == "function") {
                func();
            } else if (typeof (func) == "string") {
                eval(func);
            }
        }
        rsvm.browser.timerID[id] = func;
        return id;
    },
    setTimeout() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
        var func = arguments[0];
        var tm = arguments[1];
        var id, inTimer = false;
        while (!inTimer) {
            id = Math.floor(Math.random() * 2000);
            if (!rsvm.browser.timerID.hasOwnProperty(id)) {
                break;
            }
        }
        if (tm <= 3000) {
            if (typeof (func) == "function") {
                func();
            } else if (typeof (func) == "string") {
                eval(func);
            }
        }
        rsvm.browser.timerID[id] = func;
        return id;
    },
    stop() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    structuredClone(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    webkitCancelAnimationFrame(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    webkitRequestAnimationFrame(a) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    getScreenDetails() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    queryLocalFonts() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    showDirectoryPicker() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    showOpenFilePicker() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    showSaveFilePicker() {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    openDatabase(a, b, c, d) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    webkitRequestFileSystem(a, b, c) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    },
    webkitResolveLocalFileSystemURL(a, b) {
        if (rsvm.debugconfig.ifdebugger) {
            debugger;
        }
    }
};

for (const key in rsvm.browser.func.window) {
    rsvm.safefunction(rsvm.browser.func.window[key]);
}