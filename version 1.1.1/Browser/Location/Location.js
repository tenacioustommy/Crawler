Object.defineProperty(this, "Location", {
    value: function Location() {
        rsvm.throwErrorNew("Location");
    }
}); rsvm.safefunction(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location", configurable: true
    }
});

var location = Object.create(Location.prototype);
Object.defineProperties(location, {
    [Symbol.toPrimitive]: {
        value: undefined, configurable: true
    }
});
location["assign"] = rsvm.browser.location.actor.assign;
Object.defineProperty(rsvm.browser.location.actor.assign, "length", {value: 1});
location["reload"] = rsvm.browser.location.actor.reload;
Object.defineProperty(rsvm.browser.location.actor.reload, "length", {value: 0});
location["replace"] = rsvm.browser.location.actor.replace;
Object.defineProperty(rsvm.browser.location.actor.replace, "length", {value: 1});
location["toString"] = rsvm.browser.location.actor.toString;
Object.defineProperty(rsvm.browser.location.actor.toString, "length", {value: 0});
Object.defineProperties(location, {
    valueOf: {
        value: rsvm.browser.location.actor.valueOf, configurable: false, enumerable: false, writable: false
    }
});

for (const key in rsvm.browser.location.memory){
    location[key] = rsvm.browser.location.memory[key];
}

for (const key in rsvm.browser.location.getter) {
    rsvm.safefunction(rsvm.browser.location.getter[key]);
}
for (const key in rsvm.browser.location.setter) {
    rsvm.safefunction(rsvm.browser.location.setter[key]);
}
for (const key in rsvm.browser.location.actor) {
    rsvm.safefunction(rsvm.browser.location.actor[key]);
};

Location = rsvm.proxy(Location);
location = rsvm.proxy(location);