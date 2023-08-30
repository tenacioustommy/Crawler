rsvm = {
    debugconfig: {
        ifproxy: true,
        ifprintlog: false,
        ifdebugger: false,
        print: {
            log: function (log_info) {
                console.table(log_info);
            },
            getAll: function () { // 列出所有日志
                console.table(rsvm.debugconfig.logcache);
            }
        },
        logcache: []
    },
    browser: {
        func: {},
    },
    baseMemory: {
        url: "",
        referrer: "",
        cookie: "",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        title: "打开新的无痕模式标签页",
    },
    // 用于查找对象对应的成员属性内存位置，并进行值的更新
    // updateValue(document, "Node", "URL", "https://www.baidu.com/")
    updateValue(object, place, key, value){
        for (let i = 0; i < rsvm.browser[place].subObject.length; i++) {
            if (object == rsvm.browser[place].subObject[i].dogID) {
                rsvm.browser[place].subObject[i][key] = value;
                return;
            }
        }
    },
    throwErrorNew() {
        let error = new TypeError();
        error.stack = "TypeError: Illegal constructor\r\n    at <anonymous>:1:1";
        throw error;
    },
    throwErrorGetter(obj) {
        let error = new TypeError();
        error.stack = "TypeError: Illegal invocation\r\n    at " + obj + ".invokeGetter (<anonymous>:3:28)";
        throw error;
    },
    throwErrorOtherGetter() {
        let error = new TypeError();
        error.stack = "TypeError: Illegal invocation\r\n    at <anonymous>:1:3";
        throw error;
    },
    throwErrorEvent(obj) {
        let error = new TypeError();
        error.stack = "TypeError: Failed to construct '" + obj + "': 1 argument required, but only 0 present.\r\n    at <anonymous>:1:1";
        throw error;
    },
    outerText(obj){
        var str = "";
        for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
            if (obj == rsvm.browser.Node.subObject[i].dogID) {
                str = rsvm.browser.Node.subObject[i].innerHTML;
            }
        }
        for (let i = 0; i < obj.children.length; i++) {
            str += rsvm.outerText(obj.children[i]);
        }
        return str;
    },
    innerText(obj){
        var str = "";
        for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
            if (obj == rsvm.browser.Node.subObject[i].dogID) {
                str = rsvm.browser.Node.subObject[i].innerHTML;
            }
        }
        for (let i = 0; i < obj.children.length; i++) {
            str += rsvm.innerText(obj.children[i]);
        }
        return str;
    },
    all(obj, all){
        all[all.length] = obj;
        for (let i = 0; i < obj.children.length; i++){
            
            rsvm.all(obj.children[i], all);
        }
    },
    clearBrowserCache() {
        // ------------------------- 清空前一次浏览器中的缓存--------------------
        rsvm.browser.Node.subObject = rsvm.browser.Node.subObject.slice(0, 5);
        rsvm.browser.EventTarget.eventListener = {};
        rsvm.browser.Event.subObject = [];
        rsvm.browser.CSSStyleDeclaration.subObject = [];
        rsvm.browser.HTMLCollection.subObject = [];
        rsvm.browser.timerID = {};
        rsvm.browser.listeners = [];
    },
    init(url, referrer, userAgent){
        // ------------------------- 清空前一次浏览器中的缓存--------------------
        rsvm.baseMemory.url = url;
        rsvm.baseMemory.referrer = referrer;
        if (userAgent !== undefined){
            rsvm.baseMemory.userAgent = userAgent;
        }
        // ------------------------- location -----------------------------------
        location.href = rsvm.baseMemory.url;
        location.origin = location.href.match(/^.+\/\/.+\//g)[0].slice(0, -1);
        location.protocol = location.href.match(/^.+:/g)[0];
        location.host = document.domain;
        location.hostname = location.host;
        if (location.href.match(/:\d+\//g) == null) {
            location.port = "";
        } else {
            location.port = location.href.match(/:\d+\//g)[0].slice(1, -1);
        }
        location.pathname = location.href.match(/\/\/.+/g)[0].replace("//" + location.host, "");
        location.search = "";
        location.hash = "";

        // -----------------------------------------------------------------------------
        window.origin = location.origin;
    },
    initBrowser() {
        var url = "https://www.adidas.com.cn/pdp?articleId=ID4795";
        var referrer = "https://www.toutiao.com/index.html";
        var userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36";
        var languages = ['zh', 'zh-CN'];
        // 浏览器canvas指纹
        // rsvm.browser.HTMLCanvasElement.dataURL = "";

        // ------------------------- 清空前一次浏览器中的缓存--------------------
        rsvm.clearBrowserCache();

        // ------------------------- navigator --------------------------------
        rsvm.browser.Navigator.memory.vendorSub = "";
        rsvm.browser.Navigator.memory.productSub = "20030107";
        rsvm.browser.Navigator.memory.vendor = "Google Inc.";
        rsvm.browser.Navigator.memory.maxTouchPoints = 20;
        rsvm.browser.Navigator.memory.hardwareConcurrency = 12;
        rsvm.browser.Navigator.memory.appName = "Netscape";
        rsvm.browser.Navigator.memory.platform = "Win32";
        rsvm.browser.Navigator.memory.product = "Gecko";
        rsvm.browser.Navigator.memory.userAgent = userAgent;
        rsvm.browser.Navigator.memory.appCodeName = rsvm.browser.Navigator.memory.userAgent.split("/")[0];
        rsvm.browser.Navigator.memory.appVersion = rsvm.browser.Navigator.memory.userAgent.match(/\/.+/g)[0].slice(1);
        rsvm.browser.Navigator.memory.languages = languages;
        rsvm.browser.Navigator.memory.language = rsvm.browser.Navigator.memory.languages[0];
        rsvm.browser.Navigator.memory.deviceMemory = 10;

        // ------------------------- document -----------------------------------
        rsvm.browser.Node.subObject[0].URL = url;
        rsvm.browser.Node.subObject[0].documentURI = rsvm.browser.Node.subObject[0].URL;
        rsvm.browser.Node.subObject[0].characterSet = "UTF-8";
        rsvm.browser.Node.subObject[0].charset = "UTF-8";
        rsvm.browser.Node.subObject[0].inputEncoding = "UTF-8";
        rsvm.browser.Node.subObject[0].contentType = "application/xml";
        rsvm.browser.Node.subObject[0].domain = rsvm.browser.Node.subObject[0].URL.match(/\/\/.+\//g)[0].slice(2, -1);
        rsvm.browser.Node.subObject[0].referrer = referrer;
        rsvm.browser.Node.subObject[0].cookie = "";
        rsvm.browser.Node.subObject[0].lastModified = "04/17/2023 21:53:00";
        rsvm.browser.Node.subObject[0].readyState = "complete";
        rsvm.browser.Node.subObject[0].title = "";
        rsvm.browser.Node.subObject[0].dir = "";

        // ------------------------- location -----------------------------------
        location.href = rsvm.browser.Node.subObject[0].URL;
        location.origin = location.href.match(/^.+\/\/.+\//g)[0].slice(0, -1);
        location.protocol = location.href.match(/^.+:/g)[0];
        location.host = rsvm.browser.Node.subObject[0].domain;
        location.hostname = location.host;
        if (location.href.match(/:\d+\//g) == null) {
            location.port = "";
        } else {
            location.port = location.href.match(/:\d+\//g)[0].slice(1, -1);
        }
        location.pathname = location.href.match(/\/\/.+/g)[0].replace("//" + location.host, "");
        location.search = "";
        location.hash = "";
    }
};