// 初始化浏览器属性
(function initBrowser(){
    var url = "https://www.adidas.com.cn/pdp?articleId=ID4795";
    var referer = "https://www.toutiao.com/index.html";
    var userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36";
    var languages = ['zh', 'zh-CN'];
    // 浏览器canvas指纹
    // dogvm.browser.HTMLCanvasElement.dataURL = "";

    // ------------------------- 清空前一次浏览器中的缓存--------------------
    dogvm.browser.Node.subObject = [];
    dogvm.browser.eventListener = {};
    dogvm.browser.Event.subObject = [];
    dogvm.browser.CSSStyleDeclaration.subObject = [];
    dogvm.browser.HTMLCollection.subObject = [];
    dogvm.browser.timerID = {};

    // ------------------------- navigator --------------------------------
    dogvm.browser.Navigator.memory.vendorSub = "";
    dogvm.browser.Navigator.memory.productSub = "20030107";
    dogvm.browser.Navigator.memory.vendor = "Google Inc.";
    dogvm.browser.Navigator.memory.maxTouchPoints = 20;
    dogvm.browser.Navigator.memory.hardwareConcurrency = 12;
    dogvm.browser.Navigator.memory.appName = "Netscape";
    dogvm.browser.Navigator.memory.platform = "Win32";
    dogvm.browser.Navigator.memory.product = "Gecko";
    dogvm.browser.Navigator.memory.userAgent = userAgent;
    dogvm.browser.Navigator.memory.appCodeName = dogvm.browser.Navigator.memory.userAgent.split("/")[0];
    dogvm.browser.Navigator.memory.appVersion = dogvm.browser.Navigator.memory.userAgent.match(/\/.+/g)[0].slice(1);
    dogvm.browser.Navigator.memory.languages = languages;
    dogvm.browser.Navigator.memory.language = dogvm.browser.Navigator.memory.languages[0];
    dogvm.browser.Navigator.memory.deviceMemory = 10;

    // ------------------------- document -----------------------------------
    dogvm.browser.Node.subObject[0].URL = url;
    dogvm.browser.Node.subObject[0].documentURI = dogvm.browser.Node.subObject[0].URL;
    dogvm.browser.Node.subObject[0].characterSet = "UTF-8";
    dogvm.browser.Node.subObject[0].charset = "UTF-8";
    dogvm.browser.Node.subObject[0].inputEncoding = "UTF-8";
    dogvm.browser.Node.subObject[0].contentType = "application/xml";
    dogvm.browser.Node.subObject[0].domain = dogvm.browser.Node.subObject[0].URL.match(/\/\/.+\//g)[0].slice(2, -1);
    dogvm.browser.Node.subObject[0].referrer = referer;
    dogvm.browser.Node.subObject[0].cookie = "";
    dogvm.browser.Node.subObject[0].lastModified = "04/17/2023 21:53:00";
    dogvm.browser.Node.subObject[0].readyState = "complete";
    dogvm.browser.Node.subObject[0].title = "";
    dogvm.browser.Node.subObject[0].dir = "";

    // ------------------------- location -----------------------------------
    dogvm.browser.location.memory.href = dogvm.browser.Node.subObject[0].URL;
    dogvm.browser.location.memory.origin = dogvm.browser.location.memory.href.match(/^.+\/\/.+\//g)[0].slice(0, -1);
    dogvm.browser.location.memory.protocol = dogvm.browser.location.memory.href.match(/^.+:/g)[0];
    dogvm.browser.location.memory.host = dogvm.browser.Node.subObject[0].domain;
    dogvm.browser.location.memory.hostname = dogvm.browser.location.memory.host;
    if(dogvm.browser.location.memory.href.match(/:\d+\//g) == null){
        dogvm.browser.location.memory.port = "";
    }else{
        dogvm.browser.location.memory.port = dogvm.browser.location.memory.href.match(/:\d+\//g)[0].slice(1, -1);
    }
    dogvm.browser.location.memory.pathname = dogvm.browser.location.memory.href.match(/\/\/.+/g)[0].replace("//" + dogvm.browser.location.memory.host, "");
    dogvm.browser.location.memory.search = "";
    dogvm.browser.location.memory.hash = "";

    // -----------------------------------------------------------------------
    
}());