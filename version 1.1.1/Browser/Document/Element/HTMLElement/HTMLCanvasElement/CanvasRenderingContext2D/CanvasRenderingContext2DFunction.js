rsvm.browser.CanvasRenderingContext2D = {
    memory: {
        canvas: {},
        globalAlpha: 1,
        globalCompositeOperation: "source-over",
        filter: "none",
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "low",
        strokeStyle: "#000000",
        fillStyle: "#000000",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 0,
        shadowColor: "rgba(0, 0, 0, 0)",
        lineWidth: 1,
        lineCap: "butt",
        lineJoin: "miter",
        miterLimit: 10,
        lineDashOffset: 0,
        font: "10px sans-serif",
        textAlign: "start",
        textBaseline: "alphabetic",
        direction: "ltr",
        fontKerning: "auto",
        fontStretch: "normal",
        fontVariantCaps: "normal",
        letterSpacing: "0px",
        textRendering: "auto",
        wordSpacing: "0px",
    },
    getter: {
        canvas() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].canvas;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.canvas;
        },
        globalAlpha() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].globalAlpha;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.globalAlpha;
        },
        globalCompositeOperation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].globalCompositeOperation;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.globalCompositeOperation;
        },
        filter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].filter;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.filter;
        },
        imageSmoothingEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].imageSmoothingEnabled;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.imageSmoothingEnabled;
        },
        imageSmoothingQuality() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].imageSmoothingQuality;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.imageSmoothingQuality;
        },
        strokeStyle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].strokeStyle;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.strokeStyle;
        },
        fillStyle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].fillStyle;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.fillStyle;
        },
        shadowOffsetX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowOffsetX;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.shadowOffsetX;
        },
        shadowOffsetY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowOffsetY;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.shadowOffsetY;
        },
        shadowBlur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowBlur;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.shadowBlur;
        },
        shadowColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowColor;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.shadowColor;
        },
        lineWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].lineWidth;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.lineWidth;
        },
        lineCap() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].lineCap;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.lineCap;
        },
        lineJoin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].lineJoin;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.lineJoin;
        },
        miterLimit() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].miterLimit;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.miterLimit;
        },
        lineDashOffset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].lineDashOffset;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.lineDashOffset;
        },
        font() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].font;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.font;
        },
        textAlign() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].textAlign;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.textAlign;
        },
        textBaseline() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].textBaseline;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.textBaseline;
        },
        direction() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].direction;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.direction;
        },
        fontKerning() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].fontKerning;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.fontKerning;
        },
        fontStretch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].fontStretch;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.fontStretch;
        },
        fontVariantCaps() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].fontVariantCaps;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.fontVariantCaps;
        },
        letterSpacing() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].letterSpacing;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.letterSpacing;
        },
        textRendering() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].textRendering;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.textRendering;
        },
        wordSpacing() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("CanvasRenderingContext2D");
            }
            if (!CanvasRenderingContext2D.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    return rsvm.browser.CanvasRenderingContext2D.subObject[i].wordSpacing;
                }
            }
            return rsvm.browser.CanvasRenderingContext2D.memory.wordSpacing;
        },
    },
    setter: {
        globalAlpha() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].globalAlpha = arguments[0];
                    return;
                }
            }
        },
        globalCompositeOperation() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].globalCompositeOperation = arguments[0];
                    return;
                }
            }
        },
        filter() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].filter = arguments[0];
                    return;
                }
            }
        },
        imageSmoothingEnabled() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].imageSmoothingEnabled = arguments[0];
                    return;
                }
            }
        },
        imageSmoothingQuality() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].imageSmoothingQuality = arguments[0];
                    return;
                }
            }
        },
        strokeStyle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    if (arguments[0] === 'rgb(120, 186, 176)'){
                        rsvm.browser.CanvasRenderingContext2D.subObject[i].strokeStyle = '#78bab0';
                        return;
                    }
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].strokeStyle = arguments[0];
                    return;
                }
            }
        },
        fillStyle() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    if (arguments[0] == 'rgb(102, 204, 0)'){
                        rsvm.browser.CanvasRenderingContext2D.subObject[i].fillStyle = '#66cc00';
                        return;
                    }else if (arguments[0] == '#f60'){
                        rsvm.browser.CanvasRenderingContext2D.subObject[i].fillStyle = '#ff6600';
                        return;
                    }
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].fillStyle = arguments[0];
                    return;
                }
            }
        },
        shadowOffsetX() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowOffsetX = arguments[0];
                    return;
                }
            }
        },
        shadowOffsetY() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowOffsetY = arguments[0];
                    return;
                }
            }
        },
        shadowBlur() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowBlur = arguments[0];
                    return;
                }
            }
        },
        shadowColor() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].shadowColor = arguments[0];
                    return;
                }
            }
        },
        lineWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].lineWidth = arguments[0];
                    return;
                }
            }
        },
        lineCap() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].lineCap = arguments[0];
                    return;
                }
            }
        },
        lineJoin() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].lineJoin = arguments[0];
                    return;
                }
            }
        },
        miterLimit() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].miterLimit = arguments[0];
                    return;
                }
            }
        },
        lineDashOffset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].lineDashOffset = arguments[0];
                    return;
                }
            }
        },
        font() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    if (arguments[0] === '16pt Arial'){
                        rsvm.browser.CanvasRenderingContext2D.subObject[i].font = '21.3333px Arial';
                        return;
                    }
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].font = arguments[0];
                    return;
                }
            }
        },
        textAlign() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].textAlign = arguments[0];
                    return;
                }
            }
        },
        textBaseline() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].textBaseline = arguments[0];
                    return;
                }
            }
        },
        direction() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].direction = arguments[0];
                    return;
                }
            }
        },
        fontKerning() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].fontKerning = arguments[0];
                    return;
                }
            }
        },
        fontStretch() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].fontStretch = arguments[0];
                    return;
                }
            }
        },
        fontVariantCaps() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].fontVariantCaps = arguments[0];
                    return;
                }
            }
        },
        letterSpacing() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].letterSpacing = arguments[0];
                    return;
                }
            }
        },
        textRendering() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].textRendering = arguments[0];
                    return;
                }
            }
        },
        wordSpacing() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.CanvasRenderingContext2D.subObject.length; i++) {
                if (this == rsvm.browser.CanvasRenderingContext2D.subObject[i].dogID) {
                    rsvm.browser.CanvasRenderingContext2D.subObject[i].wordSpacing = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {
        clip() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createConicGradient(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createImageData(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createLinearGradient(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createPattern(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createRadialGradient(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawFocusIfNeeded(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawImage(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        fill() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        fillText(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (arguments[0] === "<@nv45. F1n63r,Pr1n71n6!" && arguments[1] === 10 && arguments[2] === 40){

            }
        },
        getContextAttributes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getImageData(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getLineDash() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getTransform() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isContextLost() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isPointInPath(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isPointInStroke(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        measureText(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        putImageData(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        reset() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        roundRect(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        save() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scale(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setLineDash(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        setTransform() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stroke() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        strokeText(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        transform(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        translate(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        arc(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (arguments[0] === 80 && arguments[1] === 10 && arguments[2] === 20 && arguments[3] === 0 && arguments[4] === 3.141592653589793){
                
            }
        },
        arcTo(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        beginPath() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bezierCurveTo(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearRect(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        closePath() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        ellipse(a, b, c, d, e, f, g) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        fillRect(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (arguments[0] === 100 && arguments[1] === 5 && arguments[2] === 80 && arguments[3] === 50){
                
            }
        },
        lineTo(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        moveTo(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        quadraticCurveTo(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        rect(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        resetTransform() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        restore() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        rotate(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        strokeRect(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(parent) {
        var object = Object.create(CanvasRenderingContext2D.prototype);
        var memory = {};
        for (const key in rsvm.browser.CanvasRenderingContext2D.memory) {
            memory[key] = rsvm.browser.CanvasRenderingContext2D.memory[key];
        }
        memory["canvas"] = parent;
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};