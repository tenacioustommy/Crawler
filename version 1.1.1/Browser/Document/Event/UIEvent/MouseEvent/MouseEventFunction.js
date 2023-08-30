rsvm.browser.MouseEvent = {
    memory: {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: false,
        shiftKey: false,
        altKey: false,
        metaKey: false,
        button: 0,
        buttons: 0,
        relatedTarget: null,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0,
        movementX: 0,
        movementY: 0,
        fromElement: null,
        toElement: null,
        layerX: 0,
        layerY: 0,
    },
    getter: {
        screenX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].screenX;
                }
            }
            return rsvm.browser.MouseEvent.memory.screenX;
        },
        screenY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].screenY;
                }
            }
            return rsvm.browser.MouseEvent.memory.screenY;
        },
        clientX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].clientX;
                }
            }
            return rsvm.browser.MouseEvent.memory.clientX;
        },
        clientY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].clientY;
                }
            }
            return rsvm.browser.MouseEvent.memory.clientY;
        },
        ctrlKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].ctrlKey;
                }
            }
            return rsvm.browser.MouseEvent.memory.ctrlKey;
        },
        shiftKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].shiftKey;
                }
            }
            return rsvm.browser.MouseEvent.memory.shiftKey;
        },
        altKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].altKey;
                }
            }
            return rsvm.browser.MouseEvent.memory.altKey;
        },
        metaKey() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].metaKey;
                }
            }
            return rsvm.browser.MouseEvent.memory.metaKey;
        },
        button() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].button;
                }
            }
            return rsvm.browser.MouseEvent.memory.button;
        },
        buttons() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].buttons;
                }
            }
            return rsvm.browser.MouseEvent.memory.buttons;
        },
        relatedTarget() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].relatedTarget;
                }
            }
            return rsvm.browser.MouseEvent.memory.relatedTarget;
        },
        pageX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].pageX;
                }
            }
            return rsvm.browser.MouseEvent.memory.pageX;
        },
        pageY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].pageY;
                }
            }
            return rsvm.browser.MouseEvent.memory.pageY;
        },
        x() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].x;
                }
            }
            return rsvm.browser.MouseEvent.memory.x;
        },
        y() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].y;
                }
            }
            return rsvm.browser.MouseEvent.memory.y;
        },
        offsetX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].offsetX;
                }
            }
            return rsvm.browser.MouseEvent.memory.offsetX;
        },
        offsetY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].offsetY;
                }
            }
            return rsvm.browser.MouseEvent.memory.offsetY;
        },
        movementX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].movementX;
                }
            }
            return rsvm.browser.MouseEvent.memory.movementX;
        },
        movementY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].movementY;
                }
            }
            return rsvm.browser.MouseEvent.memory.movementY;
        },
        fromElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].fromElement;
                }
            }
            return rsvm.browser.MouseEvent.memory.fromElement;
        },
        toElement() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].toElement;
                }
            }
            return rsvm.browser.MouseEvent.memory.toElement;
        },
        layerX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].layerX;
                }
            }
            return rsvm.browser.MouseEvent.memory.layerX;
        },
        layerY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("MouseEvent");
            }
            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (this == rsvm.browser.Event.subObject[i].dogID) {
                    return rsvm.browser.Event.subObject[i].layerY;
                }
            }
            return rsvm.browser.MouseEvent.memory.layerY;
        },
    },
    setter: {
    },
    actor: {
        getModifierState(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        initMouseEvent(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(type) {
        var object = new MouseEvent(type);
        return rsvm.proxy(object);
    }
}