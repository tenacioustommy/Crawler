Object.defineProperty(this, "HTMLCanvasElement", {
    value: function HTMLCanvasElement() {
        rsvm.throwErrorNew("HTMLCanvasElement");
    }
}); rsvm.safefunction(HTMLCanvasElement);

Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement", configurable: true
    }
});

HTMLCanvasElement.prototype.__proto__ = HTMLElement.prototype;

HTMLCanvasElement.prototype["captureStream"] = rsvm.browser.HTMLCanvasElement.actor.captureStream;
Object.defineProperty(rsvm.browser.HTMLCanvasElement.actor.captureStream, "length", { value: 0 });
HTMLCanvasElement.prototype["getContext"] = rsvm.browser.HTMLCanvasElement.actor.getContext;
Object.defineProperty(rsvm.browser.HTMLCanvasElement.actor.getContext, "length", { value: 1 });
HTMLCanvasElement.prototype["toBlob"] = rsvm.browser.HTMLCanvasElement.actor.toBlob;
Object.defineProperty(rsvm.browser.HTMLCanvasElement.actor.toBlob, "length", { value: 1 });
HTMLCanvasElement.prototype["toDataURL"] = rsvm.browser.HTMLCanvasElement.actor.toDataURL;
Object.defineProperty(rsvm.browser.HTMLCanvasElement.actor.toDataURL, "length", { value: 0 });
HTMLCanvasElement.prototype["transferControlToOffscreen"] = rsvm.browser.HTMLCanvasElement.actor.transferControlToOffscreen;
Object.defineProperty(rsvm.browser.HTMLCanvasElement.actor.transferControlToOffscreen, "length", { value: 0 });


Object.defineProperty(HTMLCanvasElement.prototype, "width", {
    get: rsvm.browser.HTMLCanvasElement.getter.width,
    set: rsvm.browser.HTMLCanvasElement.setter.width,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLCanvasElement.getter.width, "name", {
    value: "get width"
});
Object.defineProperty(rsvm.browser.HTMLCanvasElement.setter.width, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLCanvasElement.setter.width, "name", {
    value: "set width"
});
Object.defineProperty(HTMLCanvasElement.prototype, "height", {
    get: rsvm.browser.HTMLCanvasElement.getter.height,
    set: rsvm.browser.HTMLCanvasElement.setter.height,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLCanvasElement.getter.height, "name", {
    value: "get height"
});
Object.defineProperty(rsvm.browser.HTMLCanvasElement.setter.height, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLCanvasElement.setter.height, "name", {
    value: "set height"
});

for (const key in rsvm.browser.HTMLCanvasElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLCanvasElement.getter[key]);
}
for (const key in rsvm.browser.HTMLCanvasElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLCanvasElement.setter[key]);
}
for (const key in rsvm.browser.HTMLCanvasElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLCanvasElement.actor[key]);
};

HTMLCanvasElement = rsvm.proxy(HTMLCanvasElement);