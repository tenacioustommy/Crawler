Object.defineProperty(this, "Screen", {
    value: function Screen() {
        rsvm.throwErrorNew("Screen");
    }
}); rsvm.safefunction(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen", configurable: true
    }
});



Object.defineProperty(Screen.prototype, "availWidth", {
    get: rsvm.browser.Screen.getter.availWidth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.availWidth, "name", {
    value: "get availWidth"
});
Object.defineProperty(Screen.prototype, "availHeight", {
    get: rsvm.browser.Screen.getter.availHeight,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.availHeight, "name", {
    value: "get availHeight"
});
Object.defineProperty(Screen.prototype, "width", {
    get: rsvm.browser.Screen.getter.width,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.width, "name", {
    value: "get width"
});
Object.defineProperty(Screen.prototype, "height", {
    get: rsvm.browser.Screen.getter.height,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.height, "name", {
    value: "get height"
});
Object.defineProperty(Screen.prototype, "colorDepth", {
    get: rsvm.browser.Screen.getter.colorDepth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.colorDepth, "name", {
    value: "get colorDepth"
});
Object.defineProperty(Screen.prototype, "pixelDepth", {
    get: rsvm.browser.Screen.getter.pixelDepth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.pixelDepth, "name", {
    value: "get pixelDepth"
});
Object.defineProperty(Screen.prototype, "availLeft", {
    get: rsvm.browser.Screen.getter.availLeft,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.availLeft, "name", {
    value: "get availLeft"
});
Object.defineProperty(Screen.prototype, "availTop", {
    get: rsvm.browser.Screen.getter.availTop,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.availTop, "name", {
    value: "get availTop"
});
Object.defineProperty(Screen.prototype, "orientation", {
    get: rsvm.browser.Screen.getter.orientation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.orientation, "name", {
    value: "get orientation"
});
Object.defineProperty(Screen.prototype, "onchange", {
    get: rsvm.browser.Screen.getter.onchange,
    set: rsvm.browser.Screen.setter.onchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.onchange, "name", {
    value: "get onchange"
});
Object.defineProperty(rsvm.browser.Screen.setter.onchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.Screen.setter.onchange, "name", {
    value: "set onchange"
});
Object.defineProperty(Screen.prototype, "isExtended", {
    get: rsvm.browser.Screen.getter.isExtended,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.Screen.getter.isExtended, "name", {
    value: "get isExtended"
});

for (const key in rsvm.browser.Screen.getter) {
    rsvm.safefunction(rsvm.browser.Screen.getter[key]);
}
for (const key in rsvm.browser.Screen.setter) {
    rsvm.safefunction(rsvm.browser.Screen.setter[key]);
}
for (const key in rsvm.browser.Screen.actor) {
    rsvm.safefunction(rsvm.browser.Screen.actor[key]);
};

Screen = rsvm.proxy(Screen);

var screen = Object.create(Screen.prototype);
screen = rsvm.proxy(screen);