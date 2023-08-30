Object.defineProperty(this, "XMLHttpRequest", {
    value: function XMLHttpRequest() {
        // rsvm.throwErrorNew("XMLHttpRequest");
    }
}); rsvm.safefunction(XMLHttpRequest);

Object.defineProperties(XMLHttpRequest.prototype, {
    [Symbol.toStringTag]: {
        value: "XMLHttpRequest", configurable: true
    }
});

XMLHttpRequest.prototype.UNSENT = XMLHttpRequest.UNSENT = 0;
XMLHttpRequest.prototype.OPENED = XMLHttpRequest.OPENED = 1;
XMLHttpRequest.prototype.HEADERS_RECEIVED = XMLHttpRequest.HEADERS_RECEIVED = 2;
XMLHttpRequest.prototype.LOADING = XMLHttpRequest.LOADING = 3;
XMLHttpRequest.prototype.DONE = XMLHttpRequest.DONE = 4;

XMLHttpRequest.prototype.__proto__ = XMLHttpRequestEventTarget.prototype;


XMLHttpRequest.prototype["abort"] = rsvm.browser.XMLHttpRequest.actor.abort;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.abort, "length", { value: 0 });
XMLHttpRequest.prototype["getAllResponseHeaders"] = rsvm.browser.XMLHttpRequest.actor.getAllResponseHeaders;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.getAllResponseHeaders, "length", { value: 0 });
XMLHttpRequest.prototype["getResponseHeader"] = rsvm.browser.XMLHttpRequest.actor.getResponseHeader;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.getResponseHeader, "length", { value: 1 });
XMLHttpRequest.prototype["open"] = rsvm.browser.XMLHttpRequest.actor.open;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.open, "length", { value: 2 });
XMLHttpRequest.prototype["overrideMimeType"] = rsvm.browser.XMLHttpRequest.actor.overrideMimeType;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.overrideMimeType, "length", { value: 1 });
XMLHttpRequest.prototype["send"] = rsvm.browser.XMLHttpRequest.actor.send;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.send, "length", { value: 0 });
XMLHttpRequest.prototype["setRequestHeader"] = rsvm.browser.XMLHttpRequest.actor.setRequestHeader;
Object.defineProperty(rsvm.browser.XMLHttpRequest.actor.setRequestHeader, "length", { value: 2 });


Object.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {
    get: rsvm.browser.XMLHttpRequest.getter.onreadystatechange,
    set: rsvm.browser.XMLHttpRequest.setter.onreadystatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.onreadystatechange, "name", {
    value: "get onreadystatechange"
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.onreadystatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.onreadystatechange, "name", {
    value: "set onreadystatechange"
});
Object.defineProperty(XMLHttpRequest.prototype, "readyState", {
    get: rsvm.browser.XMLHttpRequest.getter.readyState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.readyState, "name", {
    value: "get readyState"
});
Object.defineProperty(XMLHttpRequest.prototype, "timeout", {
    get: rsvm.browser.XMLHttpRequest.getter.timeout,
    set: rsvm.browser.XMLHttpRequest.setter.timeout,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.timeout, "name", {
    value: "get timeout"
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.timeout, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.timeout, "name", {
    value: "set timeout"
});
Object.defineProperty(XMLHttpRequest.prototype, "withCredentials", {
    get: rsvm.browser.XMLHttpRequest.getter.withCredentials,
    set: rsvm.browser.XMLHttpRequest.setter.withCredentials,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.withCredentials, "name", {
    value: "get withCredentials"
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.withCredentials, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.withCredentials, "name", {
    value: "set withCredentials"
});
Object.defineProperty(XMLHttpRequest.prototype, "upload", {
    get: rsvm.browser.XMLHttpRequest.getter.upload,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.upload, "name", {
    value: "get upload"
});
Object.defineProperty(XMLHttpRequest.prototype, "responseURL", {
    get: rsvm.browser.XMLHttpRequest.getter.responseURL,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.responseURL, "name", {
    value: "get responseURL"
});
Object.defineProperty(XMLHttpRequest.prototype, "status", {
    get: rsvm.browser.XMLHttpRequest.getter.status,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.status, "name", {
    value: "get status"
});
Object.defineProperty(XMLHttpRequest.prototype, "statusText", {
    get: rsvm.browser.XMLHttpRequest.getter.statusText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.statusText, "name", {
    value: "get statusText"
});
Object.defineProperty(XMLHttpRequest.prototype, "responseType", {
    get: rsvm.browser.XMLHttpRequest.getter.responseType,
    set: rsvm.browser.XMLHttpRequest.setter.responseType,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.responseType, "name", {
    value: "get responseType"
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.responseType, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.setter.responseType, "name", {
    value: "set responseType"
});
Object.defineProperty(XMLHttpRequest.prototype, "response", {
    get: rsvm.browser.XMLHttpRequest.getter.response,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.response, "name", {
    value: "get response"
});
Object.defineProperty(XMLHttpRequest.prototype, "responseText", {
    get: rsvm.browser.XMLHttpRequest.getter.responseText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.responseText, "name", {
    value: "get responseText"
});
Object.defineProperty(XMLHttpRequest.prototype, "responseXML", {
    get: rsvm.browser.XMLHttpRequest.getter.responseXML,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.XMLHttpRequest.getter.responseXML, "name", {
    value: "get responseXML"
});


for (const key in rsvm.browser.XMLHttpRequest.getter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequest.getter[key]);
}
for (const key in rsvm.browser.XMLHttpRequest.setter) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequest.setter[key]);
}
for (const key in rsvm.browser.XMLHttpRequest.actor) {
    rsvm.safefunction(rsvm.browser.XMLHttpRequest.actor[key]);
};


XMLHttpRequest = rsvm.proxy(XMLHttpRequest);