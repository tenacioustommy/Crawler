var document = Object.create(HTMLDocument.prototype);
// document = rsvm.proxy(document);
document["location"] = location;

(function (){
    var memory = {dogID: document};
    // document = rsvm.proxy(document);
    // 在现框架中document的内存位置必须在Node中第一个
    rsvm.browser.Node.subObject.push(memory);
    for (const key in rsvm.browser.Node.memory) {
        memory[key] = rsvm.browser.Node.memory[key];
    }
    for (const key in rsvm.browser.Document.memory) {
        memory[key] = rsvm.browser.Document.memory[key];
    }
    memory["firstElementChild"] = rsvm.browser.HTMLHtmlElement.create();
    memory["head"] = rsvm.browser.HTMLHeadElement.create();
    memory["body"] = rsvm.browser.HTMLBodyElement.create();
    memory["body"]["clientHeight"] = 818;
    memory["body"]["clientWidth"] = 844;

    memory["children"] = rsvm.browser.HTMLCollection.create();
    memory["childNodes"] = rsvm.browser.NodeList.create();

    memory["currentScript"] = rsvm.browser.HTMLScriptElement.create();
    memory["embeds"] = rsvm.browser.HTMLCollection.create();
    memory["forms"] = rsvm.browser.HTMLCollection.create();
    memory["images"] = rsvm.browser.HTMLCollection.create();
    memory["anchors"] = rsvm.browser.HTMLCollection.create();
    memory["applets"] = rsvm.browser.HTMLCollection.create();
    memory["plugins"] = rsvm.browser.HTMLCollection.create();
    memory["links"] = rsvm.browser.HTMLCollection.create();
    memory["doctype"] = rsvm.browser.DocumentType.create();
    memory["firstChild"] = rsvm.browser.DocumentType.create();

    memory["defaultView"] = window;
    memory["nodeName"] = "#document";
    memory["all"] = rsvm.browser.HTMLAllCollection.create();

    document.append(memory["firstElementChild"])
    memory["firstElementChild"].append(memory["head"]);
    memory["firstElementChild"].append(memory["body"]);
    var script1 = rsvm.browser.HTMLScriptElement.create();
    script1.src = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js";
    var script2 = rsvm.browser.HTMLScriptElement.create();
    script2.src = "/js/deleteCookies.js";
    memory["head"].append(script1);
    script1
    memory["head"].append(script2);
    var input1 = rsvm.browser.HTMLInputElement.create();
    input1.formAction = "https://www.adidas.com.cn/pdp?articleId=ID2176";
    memory["body"].append(input1);
})();