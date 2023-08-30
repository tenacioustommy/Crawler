Object.defineProperty(this, "BaseAudioContext", {
    value: function BaseAudioContext() {
        rsvm.throwErrorNew("BaseAudioContext");
    }
}); rsvm.safefunction(BaseAudioContext);

Object.defineProperties(BaseAudioContext.prototype, {
    [Symbol.toStringTag]: {
        value: "BaseAudioContext", configurable: true
    }
});

BaseAudioContext.prototype.__proto__ = EventTarget.prototype;

BaseAudioContext.prototype["createAnalyser"] = rsvm.browser.BaseAudioContext.actor.createAnalyser;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createAnalyser, "length", { value: 0 });
BaseAudioContext.prototype["createBiquadFilter"] = rsvm.browser.BaseAudioContext.actor.createBiquadFilter;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createBiquadFilter, "length", { value: 0 });
BaseAudioContext.prototype["createBuffer"] = rsvm.browser.BaseAudioContext.actor.createBuffer;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createBuffer, "length", { value: 3 });
BaseAudioContext.prototype["createBufferSource"] = rsvm.browser.BaseAudioContext.actor.createBufferSource;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createBufferSource, "length", { value: 0 });
BaseAudioContext.prototype["createChannelMerger"] = rsvm.browser.BaseAudioContext.actor.createChannelMerger;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createChannelMerger, "length", { value: 0 });
BaseAudioContext.prototype["createChannelSplitter"] = rsvm.browser.BaseAudioContext.actor.createChannelSplitter;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createChannelSplitter, "length", { value: 0 });
BaseAudioContext.prototype["createConstantSource"] = rsvm.browser.BaseAudioContext.actor.createConstantSource;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createConstantSource, "length", { value: 0 });
BaseAudioContext.prototype["createConvolver"] = rsvm.browser.BaseAudioContext.actor.createConvolver;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createConvolver, "length", { value: 0 });
BaseAudioContext.prototype["createDelay"] = rsvm.browser.BaseAudioContext.actor.createDelay;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createDelay, "length", { value: 0 });
BaseAudioContext.prototype["createDynamicsCompressor"] = rsvm.browser.BaseAudioContext.actor.createDynamicsCompressor;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createDynamicsCompressor, "length", { value: 0 });
BaseAudioContext.prototype["createGain"] = rsvm.browser.BaseAudioContext.actor.createGain;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createGain, "length", { value: 0 });
BaseAudioContext.prototype["createIIRFilter"] = rsvm.browser.BaseAudioContext.actor.createIIRFilter;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createIIRFilter, "length", { value: 2 });
BaseAudioContext.prototype["createOscillator"] = rsvm.browser.BaseAudioContext.actor.createOscillator;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createOscillator, "length", { value: 0 });
BaseAudioContext.prototype["createPanner"] = rsvm.browser.BaseAudioContext.actor.createPanner;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createPanner, "length", { value: 0 });
BaseAudioContext.prototype["createPeriodicWave"] = rsvm.browser.BaseAudioContext.actor.createPeriodicWave;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createPeriodicWave, "length", { value: 2 });
BaseAudioContext.prototype["createScriptProcessor"] = rsvm.browser.BaseAudioContext.actor.createScriptProcessor;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createScriptProcessor, "length", { value: 0 });
BaseAudioContext.prototype["createStereoPanner"] = rsvm.browser.BaseAudioContext.actor.createStereoPanner;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createStereoPanner, "length", { value: 0 });
BaseAudioContext.prototype["createWaveShaper"] = rsvm.browser.BaseAudioContext.actor.createWaveShaper;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.createWaveShaper, "length", { value: 0 });
BaseAudioContext.prototype["decodeAudioData"] = rsvm.browser.BaseAudioContext.actor.decodeAudioData;
Object.defineProperty(rsvm.browser.BaseAudioContext.actor.decodeAudioData, "length", { value: 1 });


Object.defineProperty(BaseAudioContext.prototype, "destination", {
    get: rsvm.browser.BaseAudioContext.getter.destination,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.destination, "name", {
    value: "get destination"
});
Object.defineProperty(BaseAudioContext.prototype, "currentTime", {
    get: rsvm.browser.BaseAudioContext.getter.currentTime,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.currentTime, "name", {
    value: "get currentTime"
});
Object.defineProperty(BaseAudioContext.prototype, "sampleRate", {
    get: rsvm.browser.BaseAudioContext.getter.sampleRate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.sampleRate, "name", {
    value: "get sampleRate"
});
Object.defineProperty(BaseAudioContext.prototype, "listener", {
    get: rsvm.browser.BaseAudioContext.getter.listener,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.listener, "name", {
    value: "get listener"
});
Object.defineProperty(BaseAudioContext.prototype, "state", {
    get: rsvm.browser.BaseAudioContext.getter.state,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.state, "name", {
    value: "get state"
});
Object.defineProperty(BaseAudioContext.prototype, "onstatechange", {
    get: rsvm.browser.BaseAudioContext.getter.onstatechange,
    set: rsvm.browser.BaseAudioContext.setter.onstatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.onstatechange, "name", {
    value: "get onstatechange"
});
Object.defineProperty(rsvm.browser.BaseAudioContext.setter.onstatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.BaseAudioContext.setter.onstatechange, "name", {
    value: "set onstatechange"
});
Object.defineProperty(BaseAudioContext.prototype, "audioWorklet", {
    get: rsvm.browser.BaseAudioContext.getter.audioWorklet,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.BaseAudioContext.getter.audioWorklet, "name", {
    value: "get audioWorklet"
});


for (const key in rsvm.browser.BaseAudioContext.getter) {
    rsvm.safefunction(rsvm.browser.BaseAudioContext.getter[key]);
}
for (const key in rsvm.browser.BaseAudioContext.setter) {
    rsvm.safefunction(rsvm.browser.BaseAudioContext.setter[key]);
}
for (const key in rsvm.browser.BaseAudioContext.actor) {
    rsvm.safefunction(rsvm.browser.BaseAudioContext.actor[key]);
};


BaseAudioContext = rsvm.proxy(BaseAudioContext);