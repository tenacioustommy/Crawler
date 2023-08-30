Object.defineProperty(this, "HTMLDocument", {
    value: function HTMLDocument() {
        rsvm.throwErrorNew("HTMLDocument");
    }
}); rsvm.safefunction(HTMLDocument);

Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDocument", configurable: true
    }
});

HTMLDocument.prototype.__proto__ = Document.prototype;

HTMLDocument = rsvm.proxy(HTMLDocument);