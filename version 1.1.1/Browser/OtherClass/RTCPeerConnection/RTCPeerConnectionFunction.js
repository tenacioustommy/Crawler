rsvm.browser.RTCPeerConnection = {
    memory: {
        localDescription: null,
        currentLocalDescription: null,
        pendingLocalDescription: null,
        remoteDescription: null,
        currentRemoteDescription: null,
        pendingRemoteDescription: null,
        signalingState: "stable",
        iceGatheringState: "new",
        iceConnectionState: "new",
        connectionState: "new",
        canTrickleIceCandidates: null,
        onnegotiationneeded: null,
        onicecandidate: null,
        onsignalingstatechange: null,
        oniceconnectionstatechange: null,
        onconnectionstatechange: null,
        onicegatheringstatechange: null,
        onicecandidateerror: null,
        ontrack: null,
        sctp: null,
        ondatachannel: null,
        onaddstream: null,
        onremovestream: null,
    },
    getter: {
        localDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].localDescription;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.localDescription;
        },
        currentLocalDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].currentLocalDescription;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.currentLocalDescription;
        },
        pendingLocalDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].pendingLocalDescription;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.pendingLocalDescription;
        },
        remoteDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].remoteDescription;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.remoteDescription;
        },
        currentRemoteDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].currentRemoteDescription;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.currentRemoteDescription;
        },
        pendingRemoteDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].pendingRemoteDescription;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.pendingRemoteDescription;
        },
        signalingState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].signalingState;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.signalingState;
        },
        iceGatheringState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].iceGatheringState;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.iceGatheringState;
        },
        iceConnectionState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].iceConnectionState;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.iceConnectionState;
        },
        connectionState() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].connectionState;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.connectionState;
        },
        canTrickleIceCandidates() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].canTrickleIceCandidates;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.canTrickleIceCandidates;
        },
        onnegotiationneeded() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onnegotiationneeded;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onnegotiationneeded;
        },
        onicecandidate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onicecandidate;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onicecandidate;
        },
        onsignalingstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onsignalingstatechange;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onsignalingstatechange;
        },
        oniceconnectionstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].oniceconnectionstatechange;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.oniceconnectionstatechange;
        },
        onconnectionstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onconnectionstatechange;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onconnectionstatechange;
        },
        onicegatheringstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onicegatheringstatechange;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onicegatheringstatechange;
        },
        onicecandidateerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onicecandidateerror;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onicecandidateerror;
        },
        ontrack() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].ontrack;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.ontrack;
        },
        sctp() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].sctp;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.sctp;
        },
        ondatachannel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].ondatachannel;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.ondatachannel;
        },
        onaddstream() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onaddstream;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onaddstream;
        },
        onremovestream() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("RTCPeerConnection");
            }
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    return rsvm.browser.RTCPeerConnection.subObject[i].onremovestream;
                }
            }
            return rsvm.browser.RTCPeerConnection.memory.onremovestream;
        },
    },
    setter: {
        onnegotiationneeded() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onnegotiationneeded = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onnegotiationneeded = arguments[0];
        },
        onicecandidate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onicecandidate = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onicecandidate = arguments[0];
        },
        onsignalingstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onsignalingstatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onsignalingstatechange = arguments[0];
        },
        oniceconnectionstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].oniceconnectionstatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.oniceconnectionstatechange = arguments[0];
        },
        onconnectionstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onconnectionstatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onconnectionstatechange = arguments[0];
        },
        onicegatheringstatechange() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onicegatheringstatechange = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onicegatheringstatechange = arguments[0];
        },
        onicecandidateerror() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onicecandidateerror = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onicecandidateerror = arguments[0];
        },
        ontrack() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].ontrack = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.ontrack = arguments[0];
        },
        ondatachannel() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].ondatachannel = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.ondatachannel = arguments[0];
        },
        onaddstream() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onaddstream = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onaddstream = arguments[0];
        },
        onremovestream() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.RTCPeerConnection.subObject.length; i++) {
                if (this == rsvm.browser.RTCPeerConnection.subObject[i].dogID) {
                    rsvm.browser.RTCPeerConnection.subObject[i].onremovestream = arguments[0];
                    return;
                }
            }
            rsvm.browser.RTCPeerConnection.memory.onremovestream = arguments[0];
        },
    },
    actor: {
        generateCertificate(){
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        addIceCandidate() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        addStream(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        addTrack(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        addTransceiver(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        close() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createAnswer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createDTMFSender(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createDataChannel(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createOffer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getConfiguration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getLocalStreams() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getReceivers() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getRemoteStreams() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getSenders() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getStats() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getTransceivers() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        removeStream(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        removeTrack(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        restartIce() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setConfiguration() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setLocalDescription() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setRemoteDescription(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create() {
        var object = Object.create(RTCPeerConnection.prototype);
        var memory = {};
        for (const key in rsvm.browser.RTCPeerConnection.memory) {
            memory[key] = rsvm.browser.RTCPeerConnection.memory[key];
        }
        rsvm.browser.RTCPeerConnection.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};