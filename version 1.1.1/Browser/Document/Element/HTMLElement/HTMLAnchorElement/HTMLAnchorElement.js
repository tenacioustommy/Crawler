Object.defineProperty(this, "HTMLAnchorElement", {
    value: function HTMLAnchorElement() {
        rsvm.throwErrorNew("HTMLAnchorElement");
    }
}); rsvm.safefunction(HTMLAnchorElement);

Object.defineProperties(HTMLAnchorElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLAnchorElement", configurable: true
    }
});

HTMLAnchorElement.prototype.ELEMENT_NODE = HTMLAnchorElement.ELEMENT_NODE = 1;
HTMLAnchorElement.prototype.ATTRIBUTE_NODE = HTMLAnchorElement.ATTRIBUTE_NODE = 2;
HTMLAnchorElement.prototype.TEXT_NODE = HTMLAnchorElement.TEXT_NODE = 3;
HTMLAnchorElement.prototype.CDATA_SECTION_NODE = HTMLAnchorElement.CDATA_SECTION_NODE = 4;
HTMLAnchorElement.prototype.ENTITY_REFERENCE_NODE = HTMLAnchorElement.ENTITY_REFERENCE_NODE = 5;
HTMLAnchorElement.prototype.ENTITY_NODE = HTMLAnchorElement.ENTITY_NODE = 6;
HTMLAnchorElement.prototype.PROCESSING_INSTRUCTION_NODE = HTMLAnchorElement.PROCESSING_INSTRUCTION_NODE = 7;
HTMLAnchorElement.prototype.COMMENT_NODE = HTMLAnchorElement.COMMENT_NODE = 8;
HTMLAnchorElement.prototype.DOCUMENT_NODE = HTMLAnchorElement.DOCUMENT_NODE = 9;
HTMLAnchorElement.prototype.DOCUMENT_TYPE_NODE = HTMLAnchorElement.DOCUMENT_TYPE_NODE = 10;
HTMLAnchorElement.prototype.DOCUMENT_FRAGMENT_NODE = HTMLAnchorElement.DOCUMENT_FRAGMENT_NODE = 11;
HTMLAnchorElement.prototype.NOTATION_NODE = HTMLAnchorElement.NOTATION_NODE = 12;
HTMLAnchorElement.prototype.DOCUMENT_POSITION_DISCONNECTED = HTMLAnchorElement.DOCUMENT_POSITION_DISCONNECTED = 1;
HTMLAnchorElement.prototype.DOCUMENT_POSITION_PRECEDING = HTMLAnchorElement.DOCUMENT_POSITION_PRECEDING = 2;
HTMLAnchorElement.prototype.DOCUMENT_POSITION_FOLLOWING = HTMLAnchorElement.DOCUMENT_POSITION_FOLLOWING = 4;
HTMLAnchorElement.prototype.DOCUMENT_POSITION_CONTAINS = HTMLAnchorElement.DOCUMENT_POSITION_CONTAINS = 8;
HTMLAnchorElement.prototype.DOCUMENT_POSITION_CONTAINED_BY = HTMLAnchorElement.DOCUMENT_POSITION_CONTAINED_BY = 16;
HTMLAnchorElement.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = HTMLAnchorElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;

HTMLAnchorElement.prototype.__proto__ = HTMLElement.prototype;


HTMLAnchorElement.prototype["toString"] = rsvm.browser.HTMLAnchorElement.actor.toString;
Object.defineProperty(rsvm.browser.HTMLAnchorElement.actor.toString, "length", { value: 0 });


Object.defineProperty(HTMLAnchorElement.prototype, "target", {
    get: rsvm.browser.HTMLAnchorElement.getter.target,
    set: rsvm.browser.HTMLAnchorElement.setter.target,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.target, "name", {
    value: "get target"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.target, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.target, "name", {
    value: "set target"
});
Object.defineProperty(HTMLAnchorElement.prototype, "download", {
    get: rsvm.browser.HTMLAnchorElement.getter.download,
    set: rsvm.browser.HTMLAnchorElement.setter.download,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.download, "name", {
    value: "get download"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.download, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.download, "name", {
    value: "set download"
});
Object.defineProperty(HTMLAnchorElement.prototype, "ping", {
    get: rsvm.browser.HTMLAnchorElement.getter.ping,
    set: rsvm.browser.HTMLAnchorElement.setter.ping,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.ping, "name", {
    value: "get ping"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.ping, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.ping, "name", {
    value: "set ping"
});
Object.defineProperty(HTMLAnchorElement.prototype, "rel", {
    get: rsvm.browser.HTMLAnchorElement.getter.rel,
    set: rsvm.browser.HTMLAnchorElement.setter.rel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.rel, "name", {
    value: "get rel"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.rel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.rel, "name", {
    value: "set rel"
});
Object.defineProperty(HTMLAnchorElement.prototype, "relList", {
    get: rsvm.browser.HTMLAnchorElement.getter.relList,
    set: rsvm.browser.HTMLAnchorElement.setter.relList,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.relList, "name", {
    value: "get relList"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.relList, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.relList, "name", {
    value: "set relList"
});
Object.defineProperty(HTMLAnchorElement.prototype, "hreflang", {
    get: rsvm.browser.HTMLAnchorElement.getter.hreflang,
    set: rsvm.browser.HTMLAnchorElement.setter.hreflang,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.hreflang, "name", {
    value: "get hreflang"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hreflang, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hreflang, "name", {
    value: "set hreflang"
});
Object.defineProperty(HTMLAnchorElement.prototype, "type", {
    get: rsvm.browser.HTMLAnchorElement.getter.type,
    set: rsvm.browser.HTMLAnchorElement.setter.type,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.type, "name", {
    value: "get type"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.type, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.type, "name", {
    value: "set type"
});
Object.defineProperty(HTMLAnchorElement.prototype, "referrerPolicy", {
    get: rsvm.browser.HTMLAnchorElement.getter.referrerPolicy,
    set: rsvm.browser.HTMLAnchorElement.setter.referrerPolicy,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.referrerPolicy, "name", {
    value: "get referrerPolicy"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.referrerPolicy, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.referrerPolicy, "name", {
    value: "set referrerPolicy"
});
Object.defineProperty(HTMLAnchorElement.prototype, "text", {
    get: rsvm.browser.HTMLAnchorElement.getter.text,
    set: rsvm.browser.HTMLAnchorElement.setter.text,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.text, "name", {
    value: "get text"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.text, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.text, "name", {
    value: "set text"
});
Object.defineProperty(HTMLAnchorElement.prototype, "coords", {
    get: rsvm.browser.HTMLAnchorElement.getter.coords,
    set: rsvm.browser.HTMLAnchorElement.setter.coords,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.coords, "name", {
    value: "get coords"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.coords, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.coords, "name", {
    value: "set coords"
});
Object.defineProperty(HTMLAnchorElement.prototype, "charset", {
    get: rsvm.browser.HTMLAnchorElement.getter.charset,
    set: rsvm.browser.HTMLAnchorElement.setter.charset,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.charset, "name", {
    value: "get charset"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.charset, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.charset, "name", {
    value: "set charset"
});
Object.defineProperty(HTMLAnchorElement.prototype, "name", {
    get: rsvm.browser.HTMLAnchorElement.getter.name,
    set: rsvm.browser.HTMLAnchorElement.setter.name,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.name, "name", {
    value: "get name"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.name, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.name, "name", {
    value: "set name"
});
Object.defineProperty(HTMLAnchorElement.prototype, "rev", {
    get: rsvm.browser.HTMLAnchorElement.getter.rev,
    set: rsvm.browser.HTMLAnchorElement.setter.rev,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.rev, "name", {
    value: "get rev"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.rev, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.rev, "name", {
    value: "set rev"
});
Object.defineProperty(HTMLAnchorElement.prototype, "shape", {
    get: rsvm.browser.HTMLAnchorElement.getter.shape,
    set: rsvm.browser.HTMLAnchorElement.setter.shape,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.shape, "name", {
    value: "get shape"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.shape, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.shape, "name", {
    value: "set shape"
});
Object.defineProperty(HTMLAnchorElement.prototype, "origin", {
    get: rsvm.browser.HTMLAnchorElement.getter.origin,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.origin, "name", {
    value: "get origin"
});
Object.defineProperty(HTMLAnchorElement.prototype, "protocol", {
    get: rsvm.browser.HTMLAnchorElement.getter.protocol,
    set: rsvm.browser.HTMLAnchorElement.setter.protocol,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.protocol, "name", {
    value: "get protocol"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.protocol, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.protocol, "name", {
    value: "set protocol"
});
Object.defineProperty(HTMLAnchorElement.prototype, "username", {
    get: rsvm.browser.HTMLAnchorElement.getter.username,
    set: rsvm.browser.HTMLAnchorElement.setter.username,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.username, "name", {
    value: "get username"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.username, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.username, "name", {
    value: "set username"
});
Object.defineProperty(HTMLAnchorElement.prototype, "password", {
    get: rsvm.browser.HTMLAnchorElement.getter.password,
    set: rsvm.browser.HTMLAnchorElement.setter.password,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.password, "name", {
    value: "get password"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.password, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.password, "name", {
    value: "set password"
});
Object.defineProperty(HTMLAnchorElement.prototype, "host", {
    get: rsvm.browser.HTMLAnchorElement.getter.host,
    set: rsvm.browser.HTMLAnchorElement.setter.host,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.host, "name", {
    value: "get host"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.host, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.host, "name", {
    value: "set host"
});
Object.defineProperty(HTMLAnchorElement.prototype, "hostname", {
    get: rsvm.browser.HTMLAnchorElement.getter.hostname,
    set: rsvm.browser.HTMLAnchorElement.setter.hostname,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.hostname, "name", {
    value: "get hostname"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hostname, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hostname, "name", {
    value: "set hostname"
});
Object.defineProperty(HTMLAnchorElement.prototype, "port", {
    get: rsvm.browser.HTMLAnchorElement.getter.port,
    set: rsvm.browser.HTMLAnchorElement.setter.port,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.port, "name", {
    value: "get port"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.port, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.port, "name", {
    value: "set port"
});
Object.defineProperty(HTMLAnchorElement.prototype, "pathname", {
    get: rsvm.browser.HTMLAnchorElement.getter.pathname,
    set: rsvm.browser.HTMLAnchorElement.setter.pathname,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.pathname, "name", {
    value: "get pathname"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.pathname, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.pathname, "name", {
    value: "set pathname"
});
Object.defineProperty(HTMLAnchorElement.prototype, "search", {
    get: rsvm.browser.HTMLAnchorElement.getter.search,
    set: rsvm.browser.HTMLAnchorElement.setter.search,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.search, "name", {
    value: "get search"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.search, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.search, "name", {
    value: "set search"
});
Object.defineProperty(HTMLAnchorElement.prototype, "hash", {
    get: rsvm.browser.HTMLAnchorElement.getter.hash,
    set: rsvm.browser.HTMLAnchorElement.setter.hash,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.hash, "name", {
    value: "get hash"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hash, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hash, "name", {
    value: "set hash"
});
Object.defineProperty(HTMLAnchorElement.prototype, "href", {
    get: rsvm.browser.HTMLAnchorElement.getter.href,
    set: rsvm.browser.HTMLAnchorElement.setter.href,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.href, "name", {
    value: "get href"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.href, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.href, "name", {
    value: "set href"
});
Object.defineProperty(HTMLAnchorElement.prototype, "hrefTranslate", {
    get: rsvm.browser.HTMLAnchorElement.getter.hrefTranslate,
    set: rsvm.browser.HTMLAnchorElement.setter.hrefTranslate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.getter.hrefTranslate, "name", {
    value: "get hrefTranslate"
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hrefTranslate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLAnchorElement.setter.hrefTranslate, "name", {
    value: "set hrefTranslate"
});


for (const key in rsvm.browser.HTMLAnchorElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLAnchorElement.getter[key]);
}
for (const key in rsvm.browser.HTMLAnchorElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLAnchorElement.setter[key]);
}
for (const key in rsvm.browser.HTMLAnchorElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLAnchorElement.actor[key]);
};


HTMLAnchorElement = rsvm.proxy(HTMLAnchorElement);