var speechSynthesis = {};
(function () {
    var SpeechSynthesis = {};
    // SpeechSynthesis = EventTarget.prototype;
    speechSynthesis.__proto__ = SpeechSynthesis;
    Object.defineProperties(SpeechSynthesis, {
        [Symbol.toStringTag]: {
            value: "SpeechSynthesis", configurable: true
        }
    });

    SpeechSynthesis["cancel"] = rsvm.browser.SpeechSynthesis.actor.cancel;
    Object.defineProperty(rsvm.browser.SpeechSynthesis.actor.cancel, "length", { value: 0 });
    SpeechSynthesis["getVoices"] = rsvm.browser.SpeechSynthesis.actor.getVoices;
    Object.defineProperty(rsvm.browser.SpeechSynthesis.actor.getVoices, "length", { value: 0 });
    SpeechSynthesis["pause"] = rsvm.browser.SpeechSynthesis.actor.pause;
    Object.defineProperty(rsvm.browser.SpeechSynthesis.actor.pause, "length", { value: 0 });
    SpeechSynthesis["resume"] = rsvm.browser.SpeechSynthesis.actor.resume;
    Object.defineProperty(rsvm.browser.SpeechSynthesis.actor.resume, "length", { value: 0 });
    SpeechSynthesis["speak"] = rsvm.browser.SpeechSynthesis.actor.speak;
    Object.defineProperty(rsvm.browser.SpeechSynthesis.actor.speak, "length", { value: 1 });


    Object.defineProperty(SpeechSynthesis, "onvoiceschanged", {
        get: rsvm.browser.SpeechSynthesis.getter.onvoiceschanged,
        set: rsvm.browser.SpeechSynthesis.setter.onvoiceschanged,
        configurable: true, enumerable: true,
    });
    Object.defineProperty(rsvm.browser.SpeechSynthesis.getter.onvoiceschanged, "name", {
        value: "get onvoiceschanged"
    });
    Object.defineProperty(rsvm.browser.SpeechSynthesis.setter.onvoiceschanged, "length", {
        value: 1
    });
    Object.defineProperty(rsvm.browser.SpeechSynthesis.setter.onvoiceschanged, "name", {
        value: "set onvoiceschanged"
    });
    Object.defineProperty(SpeechSynthesis, "paused", {
        get: rsvm.browser.SpeechSynthesis.getter.paused,
        configurable: true, enumerable: true,
    });
    Object.defineProperty(rsvm.browser.SpeechSynthesis.getter.paused, "name", {
        value: "get paused"
    });
    Object.defineProperty(SpeechSynthesis, "pending", {
        get: rsvm.browser.SpeechSynthesis.getter.pending,
        configurable: true, enumerable: true,
    });
    Object.defineProperty(rsvm.browser.SpeechSynthesis.getter.pending, "name", {
        value: "get pending"
    });
    Object.defineProperty(SpeechSynthesis, "speaking", {
        get: rsvm.browser.SpeechSynthesis.getter.speaking,
        configurable: true, enumerable: true,
    });
    Object.defineProperty(rsvm.browser.SpeechSynthesis.getter.speaking, "name", {
        value: "get speaking"
    });
}());

speechSynthesis = rsvm.proxy(speechSynthesis);