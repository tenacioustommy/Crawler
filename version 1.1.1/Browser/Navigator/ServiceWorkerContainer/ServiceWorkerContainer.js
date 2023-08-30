Object.defineProperty(this, "ServiceWorkerContainer", {
    value: function ServiceWorkerContainer() {
        rsvm.throwErrorNew();
    }
}); rsvm.safefunction(ServiceWorkerContainer);

Object.defineProperties(ServiceWorkerContainer.prototype, {
    [Symbol.toStringTag]: {
        value: "ServiceWorkerContainer", configurable: true
    }
});

ServiceWorkerContainer.prototype["getRegistration"] = rsvm.browser.ServiceWorkerContainer.actor.getRegistration;
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.actor.getRegistration, "length", { value: 0 });
ServiceWorkerContainer.prototype["getRegistrations"] = rsvm.browser.ServiceWorkerContainer.actor.getRegistrations;
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.actor.getRegistrations, "length", { value: 0 });
ServiceWorkerContainer.prototype["register"] = rsvm.browser.ServiceWorkerContainer.actor.register;
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.actor.register, "length", { value: 1 });
ServiceWorkerContainer.prototype["startMessages"] = rsvm.browser.ServiceWorkerContainer.actor.startMessages;
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.actor.startMessages, "length", { value: 0 });


Object.defineProperty(ServiceWorkerContainer.prototype, "controller", {
    get: rsvm.browser.ServiceWorkerContainer.getter.controller,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.getter.controller, "name", {
    value: "get controller"
});
Object.defineProperty(ServiceWorkerContainer.prototype, "oncontrollerchange", {
    get: rsvm.browser.ServiceWorkerContainer.getter.oncontrollerchange,
    set: rsvm.browser.ServiceWorkerContainer.setter.oncontrollerchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.getter.oncontrollerchange, "name", {
    value: "get oncontrollerchange"
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.setter.oncontrollerchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.setter.oncontrollerchange, "name", {
    value: "set oncontrollerchange"
});
Object.defineProperty(ServiceWorkerContainer.prototype, "onmessage", {
    get: rsvm.browser.ServiceWorkerContainer.getter.onmessage,
    set: rsvm.browser.ServiceWorkerContainer.setter.onmessage,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.getter.onmessage, "name", {
    value: "get onmessage"
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.setter.onmessage, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.setter.onmessage, "name", {
    value: "set onmessage"
});
Object.defineProperty(ServiceWorkerContainer.prototype, "onmessageerror", {
    get: rsvm.browser.ServiceWorkerContainer.getter.onmessageerror,
    set: rsvm.browser.ServiceWorkerContainer.setter.onmessageerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.getter.onmessageerror, "name", {
    value: "get onmessageerror"
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.setter.onmessageerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.ServiceWorkerContainer.setter.onmessageerror, "name", {
    value: "set onmessageerror"
});


for (const key in rsvm.browser.ServiceWorkerContainer.getter) {
    rsvm.safefunction(rsvm.browser.ServiceWorkerContainer.getter[key]);
}
for (const key in rsvm.browser.ServiceWorkerContainer.setter) {
    rsvm.safefunction(rsvm.browser.ServiceWorkerContainer.setter[key]);
}
for (const key in rsvm.browser.ServiceWorkerContainer.actor) {
    rsvm.safefunction(rsvm.browser.ServiceWorkerContainer.actor[key]);
};


ServiceWorkerContainer = rsvm.proxy(ServiceWorkerContainer);