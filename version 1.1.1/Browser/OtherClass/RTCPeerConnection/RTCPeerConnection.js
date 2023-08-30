Object.defineProperty(this, "RTCPeerConnection", {
    value: function RTCPeerConnection() { }
}); rsvm.safefunction(RTCPeerConnection);

Object.defineProperties(RTCPeerConnection.prototype, {
    [Symbol.toStringTag]: {
        value: "RTCPeerConnection", configurable: true
    }
});

RTCPeerConnection.prototype.__proto__ = EventTarget.prototype;

RTCPeerConnection.generateCertificate = rsvm.browser.RTCPeerConnection.actor.generateCertificate;

RTCPeerConnection.prototype["addIceCandidate"] = rsvm.browser.RTCPeerConnection.actor.addIceCandidate;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.addIceCandidate, "length", { value: 0 });
RTCPeerConnection.prototype["addStream"] = rsvm.browser.RTCPeerConnection.actor.addStream;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.addStream, "length", { value: 1 });
RTCPeerConnection.prototype["addTrack"] = rsvm.browser.RTCPeerConnection.actor.addTrack;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.addTrack, "length", { value: 1 });
RTCPeerConnection.prototype["addTransceiver"] = rsvm.browser.RTCPeerConnection.actor.addTransceiver;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.addTransceiver, "length", { value: 1 });
RTCPeerConnection.prototype["close"] = rsvm.browser.RTCPeerConnection.actor.close;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.close, "length", { value: 0 });
RTCPeerConnection.prototype["createAnswer"] = rsvm.browser.RTCPeerConnection.actor.createAnswer;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.createAnswer, "length", { value: 0 });
RTCPeerConnection.prototype["createDTMFSender"] = rsvm.browser.RTCPeerConnection.actor.createDTMFSender;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.createDTMFSender, "length", { value: 1 });
RTCPeerConnection.prototype["createDataChannel"] = rsvm.browser.RTCPeerConnection.actor.createDataChannel;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.createDataChannel, "length", { value: 1 });
RTCPeerConnection.prototype["createOffer"] = rsvm.browser.RTCPeerConnection.actor.createOffer;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.createOffer, "length", { value: 0 });
RTCPeerConnection.prototype["getConfiguration"] = rsvm.browser.RTCPeerConnection.actor.getConfiguration;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getConfiguration, "length", { value: 0 });
RTCPeerConnection.prototype["getLocalStreams"] = rsvm.browser.RTCPeerConnection.actor.getLocalStreams;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getLocalStreams, "length", { value: 0 });
RTCPeerConnection.prototype["getReceivers"] = rsvm.browser.RTCPeerConnection.actor.getReceivers;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getReceivers, "length", { value: 0 });
RTCPeerConnection.prototype["getRemoteStreams"] = rsvm.browser.RTCPeerConnection.actor.getRemoteStreams;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getRemoteStreams, "length", { value: 0 });
RTCPeerConnection.prototype["getSenders"] = rsvm.browser.RTCPeerConnection.actor.getSenders;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getSenders, "length", { value: 0 });
RTCPeerConnection.prototype["getStats"] = rsvm.browser.RTCPeerConnection.actor.getStats;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getStats, "length", { value: 0 });
RTCPeerConnection.prototype["getTransceivers"] = rsvm.browser.RTCPeerConnection.actor.getTransceivers;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.getTransceivers, "length", { value: 0 });
RTCPeerConnection.prototype["removeStream"] = rsvm.browser.RTCPeerConnection.actor.removeStream;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.removeStream, "length", { value: 1 });
RTCPeerConnection.prototype["removeTrack"] = rsvm.browser.RTCPeerConnection.actor.removeTrack;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.removeTrack, "length", { value: 1 });
RTCPeerConnection.prototype["restartIce"] = rsvm.browser.RTCPeerConnection.actor.restartIce;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.restartIce, "length", { value: 0 });
RTCPeerConnection.prototype["setConfiguration"] = rsvm.browser.RTCPeerConnection.actor.setConfiguration;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.setConfiguration, "length", { value: 0 });
RTCPeerConnection.prototype["setLocalDescription"] = rsvm.browser.RTCPeerConnection.actor.setLocalDescription;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.setLocalDescription, "length", { value: 0 });
RTCPeerConnection.prototype["setRemoteDescription"] = rsvm.browser.RTCPeerConnection.actor.setRemoteDescription;
Object.defineProperty(rsvm.browser.RTCPeerConnection.actor.setRemoteDescription, "length", { value: 1 });


Object.defineProperty(RTCPeerConnection.prototype, "localDescription", {
    get: rsvm.browser.RTCPeerConnection.getter.localDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.localDescription, "name", {
    value: "get localDescription"
});
Object.defineProperty(RTCPeerConnection.prototype, "currentLocalDescription", {
    get: rsvm.browser.RTCPeerConnection.getter.currentLocalDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.currentLocalDescription, "name", {
    value: "get currentLocalDescription"
});
Object.defineProperty(RTCPeerConnection.prototype, "pendingLocalDescription", {
    get: rsvm.browser.RTCPeerConnection.getter.pendingLocalDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.pendingLocalDescription, "name", {
    value: "get pendingLocalDescription"
});
Object.defineProperty(RTCPeerConnection.prototype, "remoteDescription", {
    get: rsvm.browser.RTCPeerConnection.getter.remoteDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.remoteDescription, "name", {
    value: "get remoteDescription"
});
Object.defineProperty(RTCPeerConnection.prototype, "currentRemoteDescription", {
    get: rsvm.browser.RTCPeerConnection.getter.currentRemoteDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.currentRemoteDescription, "name", {
    value: "get currentRemoteDescription"
});
Object.defineProperty(RTCPeerConnection.prototype, "pendingRemoteDescription", {
    get: rsvm.browser.RTCPeerConnection.getter.pendingRemoteDescription,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.pendingRemoteDescription, "name", {
    value: "get pendingRemoteDescription"
});
Object.defineProperty(RTCPeerConnection.prototype, "signalingState", {
    get: rsvm.browser.RTCPeerConnection.getter.signalingState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.signalingState, "name", {
    value: "get signalingState"
});
Object.defineProperty(RTCPeerConnection.prototype, "iceGatheringState", {
    get: rsvm.browser.RTCPeerConnection.getter.iceGatheringState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.iceGatheringState, "name", {
    value: "get iceGatheringState"
});
Object.defineProperty(RTCPeerConnection.prototype, "iceConnectionState", {
    get: rsvm.browser.RTCPeerConnection.getter.iceConnectionState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.iceConnectionState, "name", {
    value: "get iceConnectionState"
});
Object.defineProperty(RTCPeerConnection.prototype, "connectionState", {
    get: rsvm.browser.RTCPeerConnection.getter.connectionState,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.connectionState, "name", {
    value: "get connectionState"
});
Object.defineProperty(RTCPeerConnection.prototype, "canTrickleIceCandidates", {
    get: rsvm.browser.RTCPeerConnection.getter.canTrickleIceCandidates,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.canTrickleIceCandidates, "name", {
    value: "get canTrickleIceCandidates"
});
Object.defineProperty(RTCPeerConnection.prototype, "onnegotiationneeded", {
    get: rsvm.browser.RTCPeerConnection.getter.onnegotiationneeded,
    set: rsvm.browser.RTCPeerConnection.setter.onnegotiationneeded,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onnegotiationneeded, "name", {
    value: "get onnegotiationneeded"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onnegotiationneeded, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onnegotiationneeded, "name", {
    value: "set onnegotiationneeded"
});
Object.defineProperty(RTCPeerConnection.prototype, "onicecandidate", {
    get: rsvm.browser.RTCPeerConnection.getter.onicecandidate,
    set: rsvm.browser.RTCPeerConnection.setter.onicecandidate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onicecandidate, "name", {
    value: "get onicecandidate"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onicecandidate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onicecandidate, "name", {
    value: "set onicecandidate"
});
Object.defineProperty(RTCPeerConnection.prototype, "onsignalingstatechange", {
    get: rsvm.browser.RTCPeerConnection.getter.onsignalingstatechange,
    set: rsvm.browser.RTCPeerConnection.setter.onsignalingstatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onsignalingstatechange, "name", {
    value: "get onsignalingstatechange"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onsignalingstatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onsignalingstatechange, "name", {
    value: "set onsignalingstatechange"
});
Object.defineProperty(RTCPeerConnection.prototype, "oniceconnectionstatechange", {
    get: rsvm.browser.RTCPeerConnection.getter.oniceconnectionstatechange,
    set: rsvm.browser.RTCPeerConnection.setter.oniceconnectionstatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.oniceconnectionstatechange, "name", {
    value: "get oniceconnectionstatechange"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.oniceconnectionstatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.oniceconnectionstatechange, "name", {
    value: "set oniceconnectionstatechange"
});
Object.defineProperty(RTCPeerConnection.prototype, "onconnectionstatechange", {
    get: rsvm.browser.RTCPeerConnection.getter.onconnectionstatechange,
    set: rsvm.browser.RTCPeerConnection.setter.onconnectionstatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onconnectionstatechange, "name", {
    value: "get onconnectionstatechange"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onconnectionstatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onconnectionstatechange, "name", {
    value: "set onconnectionstatechange"
});
Object.defineProperty(RTCPeerConnection.prototype, "onicegatheringstatechange", {
    get: rsvm.browser.RTCPeerConnection.getter.onicegatheringstatechange,
    set: rsvm.browser.RTCPeerConnection.setter.onicegatheringstatechange,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onicegatheringstatechange, "name", {
    value: "get onicegatheringstatechange"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onicegatheringstatechange, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onicegatheringstatechange, "name", {
    value: "set onicegatheringstatechange"
});
Object.defineProperty(RTCPeerConnection.prototype, "onicecandidateerror", {
    get: rsvm.browser.RTCPeerConnection.getter.onicecandidateerror,
    set: rsvm.browser.RTCPeerConnection.setter.onicecandidateerror,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onicecandidateerror, "name", {
    value: "get onicecandidateerror"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onicecandidateerror, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onicecandidateerror, "name", {
    value: "set onicecandidateerror"
});
Object.defineProperty(RTCPeerConnection.prototype, "ontrack", {
    get: rsvm.browser.RTCPeerConnection.getter.ontrack,
    set: rsvm.browser.RTCPeerConnection.setter.ontrack,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.ontrack, "name", {
    value: "get ontrack"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.ontrack, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.ontrack, "name", {
    value: "set ontrack"
});
Object.defineProperty(RTCPeerConnection.prototype, "sctp", {
    get: rsvm.browser.RTCPeerConnection.getter.sctp,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.sctp, "name", {
    value: "get sctp"
});
Object.defineProperty(RTCPeerConnection.prototype, "ondatachannel", {
    get: rsvm.browser.RTCPeerConnection.getter.ondatachannel,
    set: rsvm.browser.RTCPeerConnection.setter.ondatachannel,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.ondatachannel, "name", {
    value: "get ondatachannel"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.ondatachannel, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.ondatachannel, "name", {
    value: "set ondatachannel"
});
Object.defineProperty(RTCPeerConnection.prototype, "onaddstream", {
    get: rsvm.browser.RTCPeerConnection.getter.onaddstream,
    set: rsvm.browser.RTCPeerConnection.setter.onaddstream,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onaddstream, "name", {
    value: "get onaddstream"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onaddstream, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onaddstream, "name", {
    value: "set onaddstream"
});
Object.defineProperty(RTCPeerConnection.prototype, "onremovestream", {
    get: rsvm.browser.RTCPeerConnection.getter.onremovestream,
    set: rsvm.browser.RTCPeerConnection.setter.onremovestream,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.getter.onremovestream, "name", {
    value: "get onremovestream"
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onremovestream, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.RTCPeerConnection.setter.onremovestream, "name", {
    value: "set onremovestream"
});


for (const key in rsvm.browser.RTCPeerConnection.getter) {
    rsvm.safefunction(rsvm.browser.RTCPeerConnection.getter[key]);
}
for (const key in rsvm.browser.RTCPeerConnection.setter) {
    rsvm.safefunction(rsvm.browser.RTCPeerConnection.setter[key]);
}
for (const key in rsvm.browser.RTCPeerConnection.actor) {
    rsvm.safefunction(rsvm.browser.RTCPeerConnection.actor[key]);
};


RTCPeerConnection = rsvm.proxy(RTCPeerConnection);