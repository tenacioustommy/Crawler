Object.defineProperty(this, "AudioContext", {
    value: function AudioContext() {
        var memory = {dogID: this};
        for (const key in rsvm.browser.AudioContext.memory){
            memory[key] = rsvm.browser.AudioContext.memory[key];
        }
        for (const key in rsvm.browser.BaseAudioContext.memory){
            memory[key] = rsvm.browser.BaseAudioContext.memory[key];
        }
        rsvm.browser.BaseAudioContext.subObject.push(memory);
    }
}); rsvm.safefunction(AudioContext);

Object.defineProperties(AudioContext.prototype, {
    [Symbol.toStringTag]: {
        value: "AudioContext", configurable: true
    }
});

AudioContext.prototype.__proto__ = BaseAudioContext.prototype;

AudioContext.prototype["close"] = rsvm.browser.AudioContext.actor.close;
Object.defineProperty(rsvm.browser.AudioContext.actor.close, "length", { value: 0 });
AudioContext.prototype["createMediaElementSource"] = rsvm.browser.AudioContext.actor.createMediaElementSource;
Object.defineProperty(rsvm.browser.AudioContext.actor.createMediaElementSource, "length", { value: 1 });
AudioContext.prototype["createMediaStreamDestination"] = rsvm.browser.AudioContext.actor.createMediaStreamDestination;
Object.defineProperty(rsvm.browser.AudioContext.actor.createMediaStreamDestination, "length", { value: 0 });
AudioContext.prototype["createMediaStreamSource"] = rsvm.browser.AudioContext.actor.createMediaStreamSource;
Object.defineProperty(rsvm.browser.AudioContext.actor.createMediaStreamSource, "length", { value: 1 });
AudioContext.prototype["getOutputTimestamp"] = rsvm.browser.AudioContext.actor.getOutputTimestamp;
Object.defineProperty(rsvm.browser.AudioContext.actor.getOutputTimestamp, "length", { value: 0 });
AudioContext.prototype["resume"] = rsvm.browser.AudioContext.actor.resume;
Object.defineProperty(rsvm.browser.AudioContext.actor.resume, "length", { value: 0 });
AudioContext.prototype["suspend"] = rsvm.browser.AudioContext.actor.suspend;
Object.defineProperty(rsvm.browser.AudioContext.actor.suspend, "length", { value: 0 });
AudioContext.prototype["setSinkId"] = rsvm.browser.AudioContext.actor.setSinkId;
Object.defineProperty(rsvm.browser.AudioContext.actor.setSinkId, "length", { value: 1 });


Object.defineProperty(AudioContext.prototype, "baseLatency", {
    get: rsvm.browser.AudioContext.getter.baseLatency,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.AudioContext.getter.baseLatency, "name", {
    value: "get baseLatency"
});
Object.defineProperty(AudioContext.prototype, "outputLatency", {
    get: rsvm.browser.AudioContext.getter.outputLatency,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.AudioContext.getter.outputLatency, "name", {
    value: "get outputLatency"
});
Object.defineProperty(AudioContext.prototype, "sinkId", {
    get: rsvm.browser.AudioContext.getter.sinkId,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.AudioContext.getter.sinkId, "name", {
    value: "get sinkId"
});
Object.defineProperty(AudioContext.prototype, "onsinkchange", {
    get: rsvm.browser.AudioContext.getter.onsinkchange,
    set: rsvm.browser.AudioContext.setter.onsinkchange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.AudioContext.getter.onsinkchange, "name", {
    value: "get onsinkchange"
});
Object.defineProperty(rsvm.browser.AudioContext.setter.onsinkchange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.AudioContext.setter.onsinkchange, "name", {
    value: "set onsinkchange"
});


for (const key in rsvm.browser.AudioContext.getter) {
    rsvm.safefunction(rsvm.browser.AudioContext.getter[key]);
}
for (const key in rsvm.browser.AudioContext.setter) {
    rsvm.safefunction(rsvm.browser.AudioContext.setter[key]);
}
for (const key in rsvm.browser.AudioContext.actor) {
    rsvm.safefunction(rsvm.browser.AudioContext.actor[key]);
};


AudioContext = rsvm.proxy(AudioContext);