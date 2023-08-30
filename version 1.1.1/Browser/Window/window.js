window = this;        // 
var top = self = frames = parent = window;

// ----------------------------------------------------------
Object.defineProperty(this, "Window", {
    value: function Window() {
        rsvm.throwErrorNew("Window");
    }
}); rsvm.safefunction(Window);


Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
});
Window.prototype.PERSISTENT = Window.PERSISTENT = 1;
Window.prototype.TEMPORARY = Window.TEMPORARY = 0;

Object.defineProperty(this, "DOMParser", {
    value: function DOMParser() {
        debugger;
    }
}); rsvm.safefunction(DOMParser);

Object.defineProperty(this, "WindowProperties", {
    value: function WindowProperties() {
        throw ReferenceError("WindowProperties is not defined");
    }
}); rsvm.safefunction(WindowProperties);

Object.defineProperties(WindowProperties.prototype, {
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
});

delete WindowProperties.prototype.constructor;
delete this.WindowProperties;

Object.setPrototypeOf(Window, EventTarget)
Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype)
Object.setPrototypeOf(Window.prototype, WindowProperties.prototype)
// Object.setPrototypeOf(this, Window.prototype)
this.__proto__ = Window.prototype;

// Window.__proto__ = EventTarget
// WindowProperties.prototype.__proto__ = EventTarget.prototype;
// Window.prototype.__proto__ = WindowProperties.prototype;
// window.__proto__ = Window.prototype;


Object.defineProperty(rsvm.browser.func.window["atob"], "length", { value: 1, configurable: true, });
Object.defineProperty(rsvm.browser.func.window["btoa"], "length", { value: 1, configurable: true, });
Object.defineProperty(rsvm.browser.func.window["clearInterval"], "length", { value: 0, configurable: true, });
Object.defineProperty(rsvm.browser.func.window["clearTimeout"], "length", { value: 0, configurable: true, });
Object.defineProperty(rsvm.browser.func.window["setInterval"], "length", { value: 1, configurable: true, });
Object.defineProperty(rsvm.browser.func.window["setTimeout"], "length", { value: 1, configurable: true, });

// 定义window全局函数
for (const key in rsvm.browser.func.window) {
    window[key] = rsvm.browser.func.window[key];
}

// window = rsvm.proxy(window);
// Window = rsvm.proxy(Window);