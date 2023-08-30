Object.defineProperty(this, "CSSStyleDeclaration", {
    value: function CSSStyleDeclaration() {
        rsvm.throwErrorNew("CSSStyleDeclaration");
    }
}); rsvm.safefunction(CSSStyleDeclaration);

Object.defineProperties(CSSStyleDeclaration.prototype, {
    [Symbol.toStringTag]: {
        value: "CSSStyleDeclaration", configurable: true
    }
});

CSSStyleDeclaration.prototype["getPropertyPriority"] = rsvm.browser.CSSStyleDeclaration.actor.getPropertyPriority;
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.actor.getPropertyPriority, "length", { value: 1 });
CSSStyleDeclaration.prototype["getPropertyValue"] = rsvm.browser.CSSStyleDeclaration.actor.getPropertyValue;
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.actor.getPropertyValue, "length", { value: 1 });
CSSStyleDeclaration.prototype["item"] = rsvm.browser.CSSStyleDeclaration.actor.item;
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.actor.item, "length", { value: 1 });
CSSStyleDeclaration.prototype["removeProperty"] = rsvm.browser.CSSStyleDeclaration.actor.removeProperty;
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.actor.removeProperty, "length", { value: 1 });
CSSStyleDeclaration.prototype["setProperty"] = rsvm.browser.CSSStyleDeclaration.actor.setProperty;
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.actor.setProperty, "length", { value: 2 });


Object.defineProperty(CSSStyleDeclaration.prototype, "cssText", {
    get: rsvm.browser.CSSStyleDeclaration.getter.cssText,
    set: rsvm.browser.CSSStyleDeclaration.setter.cssText,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.getter.cssText, "name", {
    value: "get cssText"
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.setter.cssText, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.setter.cssText, "name", {
    value: "set cssText"
});
Object.defineProperty(CSSStyleDeclaration.prototype, "length", {
    get: rsvm.browser.CSSStyleDeclaration.getter.length,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.getter.length, "name", {
    value: "get length"
});
Object.defineProperty(CSSStyleDeclaration.prototype, "parentRule", {
    get: rsvm.browser.CSSStyleDeclaration.getter.parentRule,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.getter.parentRule, "name", {
    value: "get parentRule"
});
Object.defineProperty(CSSStyleDeclaration.prototype, "cssFloat", {
    get: rsvm.browser.CSSStyleDeclaration.getter.cssFloat,
    set: rsvm.browser.CSSStyleDeclaration.setter.cssFloat,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.getter.cssFloat, "name", {
    value: "get cssFloat"
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.setter.cssFloat, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CSSStyleDeclaration.setter.cssFloat, "name", {
    value: "set cssFloat"
});

for (const key in rsvm.browser.CSSStyleDeclaration.getter) {
    rsvm.safefunction(rsvm.browser.CSSStyleDeclaration.getter[key]);
}
for (const key in rsvm.browser.CSSStyleDeclaration.setter) {
    rsvm.safefunction(rsvm.browser.CSSStyleDeclaration.setter[key]);
}
for (const key in rsvm.browser.CSSStyleDeclaration.actor) {
    rsvm.safefunction(rsvm.browser.CSSStyleDeclaration.actor[key]);
};

CSSStyleDeclaration = rsvm.proxy(CSSStyleDeclaration);