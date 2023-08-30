Object.defineProperty(this, "CanvasRenderingContext2D", {
    value: function CanvasRenderingContext2D() {
        rsvm.throwErrorNew("CanvasRenderingContext2D");
    }
}); rsvm.safefunction(CanvasRenderingContext2D);

Object.defineProperties(CanvasRenderingContext2D.prototype, {
    [Symbol.toStringTag]: {
        value: "CanvasRenderingContext2D", configurable: true
    }
});

CanvasRenderingContext2D.prototype["clip"] = rsvm.browser.CanvasRenderingContext2D.actor.clip;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.clip, "length", { value: 0 });
CanvasRenderingContext2D.prototype["createConicGradient"] = rsvm.browser.CanvasRenderingContext2D.actor.createConicGradient;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.createConicGradient, "length", { value: 3 });
CanvasRenderingContext2D.prototype["createImageData"] = rsvm.browser.CanvasRenderingContext2D.actor.createImageData;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.createImageData, "length", { value: 1 });
CanvasRenderingContext2D.prototype["createLinearGradient"] = rsvm.browser.CanvasRenderingContext2D.actor.createLinearGradient;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.createLinearGradient, "length", { value: 4 });
CanvasRenderingContext2D.prototype["createPattern"] = rsvm.browser.CanvasRenderingContext2D.actor.createPattern;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.createPattern, "length", { value: 2 });
CanvasRenderingContext2D.prototype["createRadialGradient"] = rsvm.browser.CanvasRenderingContext2D.actor.createRadialGradient;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.createRadialGradient, "length", { value: 6 });
CanvasRenderingContext2D.prototype["drawFocusIfNeeded"] = rsvm.browser.CanvasRenderingContext2D.actor.drawFocusIfNeeded;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.drawFocusIfNeeded, "length", { value: 1 });
CanvasRenderingContext2D.prototype["drawImage"] = rsvm.browser.CanvasRenderingContext2D.actor.drawImage;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.drawImage, "length", { value: 3 });
CanvasRenderingContext2D.prototype["fill"] = rsvm.browser.CanvasRenderingContext2D.actor.fill;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.fill, "length", { value: 0 });
CanvasRenderingContext2D.prototype["fillText"] = rsvm.browser.CanvasRenderingContext2D.actor.fillText;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.fillText, "length", { value: 3 });
CanvasRenderingContext2D.prototype["getContextAttributes"] = rsvm.browser.CanvasRenderingContext2D.actor.getContextAttributes;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.getContextAttributes, "length", { value: 0 });
CanvasRenderingContext2D.prototype["getImageData"] = rsvm.browser.CanvasRenderingContext2D.actor.getImageData;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.getImageData, "length", { value: 4 });
CanvasRenderingContext2D.prototype["getLineDash"] = rsvm.browser.CanvasRenderingContext2D.actor.getLineDash;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.getLineDash, "length", { value: 0 });
CanvasRenderingContext2D.prototype["getTransform"] = rsvm.browser.CanvasRenderingContext2D.actor.getTransform;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.getTransform, "length", { value: 0 });
CanvasRenderingContext2D.prototype["isContextLost"] = rsvm.browser.CanvasRenderingContext2D.actor.isContextLost;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.isContextLost, "length", { value: 0 });
CanvasRenderingContext2D.prototype["isPointInPath"] = rsvm.browser.CanvasRenderingContext2D.actor.isPointInPath;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.isPointInPath, "length", { value: 2 });
CanvasRenderingContext2D.prototype["isPointInStroke"] = rsvm.browser.CanvasRenderingContext2D.actor.isPointInStroke;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.isPointInStroke, "length", { value: 2 });
CanvasRenderingContext2D.prototype["measureText"] = rsvm.browser.CanvasRenderingContext2D.actor.measureText;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.measureText, "length", { value: 1 });
CanvasRenderingContext2D.prototype["putImageData"] = rsvm.browser.CanvasRenderingContext2D.actor.putImageData;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.putImageData, "length", { value: 3 });
CanvasRenderingContext2D.prototype["reset"] = rsvm.browser.CanvasRenderingContext2D.actor.reset;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.reset, "length", { value: 0 });
CanvasRenderingContext2D.prototype["roundRect"] = rsvm.browser.CanvasRenderingContext2D.actor.roundRect;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.roundRect, "length", { value: 4 });
CanvasRenderingContext2D.prototype["save"] = rsvm.browser.CanvasRenderingContext2D.actor.save;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.save, "length", { value: 0 });
CanvasRenderingContext2D.prototype["scale"] = rsvm.browser.CanvasRenderingContext2D.actor.scale;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.scale, "length", { value: 2 });
CanvasRenderingContext2D.prototype["setLineDash"] = rsvm.browser.CanvasRenderingContext2D.actor.setLineDash;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.setLineDash, "length", { value: 1 });
CanvasRenderingContext2D.prototype["setTransform"] = rsvm.browser.CanvasRenderingContext2D.actor.setTransform;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.setTransform, "length", { value: 0 });
CanvasRenderingContext2D.prototype["stroke"] = rsvm.browser.CanvasRenderingContext2D.actor.stroke;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.stroke, "length", { value: 0 });
CanvasRenderingContext2D.prototype["strokeText"] = rsvm.browser.CanvasRenderingContext2D.actor.strokeText;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.strokeText, "length", { value: 3 });
CanvasRenderingContext2D.prototype["transform"] = rsvm.browser.CanvasRenderingContext2D.actor.transform;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.transform, "length", { value: 6 });
CanvasRenderingContext2D.prototype["translate"] = rsvm.browser.CanvasRenderingContext2D.actor.translate;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.translate, "length", { value: 2 });
CanvasRenderingContext2D.prototype["arc"] = rsvm.browser.CanvasRenderingContext2D.actor.arc;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.arc, "length", { value: 5 });
CanvasRenderingContext2D.prototype["arcTo"] = rsvm.browser.CanvasRenderingContext2D.actor.arcTo;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.arcTo, "length", { value: 5 });
CanvasRenderingContext2D.prototype["beginPath"] = rsvm.browser.CanvasRenderingContext2D.actor.beginPath;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.beginPath, "length", { value: 0 });
CanvasRenderingContext2D.prototype["bezierCurveTo"] = rsvm.browser.CanvasRenderingContext2D.actor.bezierCurveTo;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.bezierCurveTo, "length", { value: 6 });
CanvasRenderingContext2D.prototype["clearRect"] = rsvm.browser.CanvasRenderingContext2D.actor.clearRect;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.clearRect, "length", { value: 4 });
CanvasRenderingContext2D.prototype["closePath"] = rsvm.browser.CanvasRenderingContext2D.actor.closePath;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.closePath, "length", { value: 0 });
CanvasRenderingContext2D.prototype["ellipse"] = rsvm.browser.CanvasRenderingContext2D.actor.ellipse;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.ellipse, "length", { value: 7 });
CanvasRenderingContext2D.prototype["fillRect"] = rsvm.browser.CanvasRenderingContext2D.actor.fillRect;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.fillRect, "length", { value: 4 });
CanvasRenderingContext2D.prototype["lineTo"] = rsvm.browser.CanvasRenderingContext2D.actor.lineTo;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.lineTo, "length", { value: 2 });
CanvasRenderingContext2D.prototype["moveTo"] = rsvm.browser.CanvasRenderingContext2D.actor.moveTo;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.moveTo, "length", { value: 2 });
CanvasRenderingContext2D.prototype["quadraticCurveTo"] = rsvm.browser.CanvasRenderingContext2D.actor.quadraticCurveTo;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.quadraticCurveTo, "length", { value: 4 });
CanvasRenderingContext2D.prototype["rect"] = rsvm.browser.CanvasRenderingContext2D.actor.rect;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.rect, "length", { value: 4 });
CanvasRenderingContext2D.prototype["resetTransform"] = rsvm.browser.CanvasRenderingContext2D.actor.resetTransform;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.resetTransform, "length", { value: 0 });
CanvasRenderingContext2D.prototype["restore"] = rsvm.browser.CanvasRenderingContext2D.actor.restore;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.restore, "length", { value: 0 });
CanvasRenderingContext2D.prototype["rotate"] = rsvm.browser.CanvasRenderingContext2D.actor.rotate;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.rotate, "length", { value: 1 });
CanvasRenderingContext2D.prototype["strokeRect"] = rsvm.browser.CanvasRenderingContext2D.actor.strokeRect;
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.actor.strokeRect, "length", { value: 4 });


Object.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.canvas,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.canvas, "name", {
    value: "get canvas"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "globalAlpha", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.globalAlpha,
    set: rsvm.browser.CanvasRenderingContext2D.setter.globalAlpha,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.globalAlpha, "name", {
    value: "get globalAlpha"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.globalAlpha, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.globalAlpha, "name", {
    value: "set globalAlpha"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "globalCompositeOperation", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.globalCompositeOperation,
    set: rsvm.browser.CanvasRenderingContext2D.setter.globalCompositeOperation,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.globalCompositeOperation, "name", {
    value: "get globalCompositeOperation"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.globalCompositeOperation, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.globalCompositeOperation, "name", {
    value: "set globalCompositeOperation"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "filter", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.filter,
    set: rsvm.browser.CanvasRenderingContext2D.setter.filter,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.filter, "name", {
    value: "get filter"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.filter, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.filter, "name", {
    value: "set filter"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.imageSmoothingEnabled,
    set: rsvm.browser.CanvasRenderingContext2D.setter.imageSmoothingEnabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.imageSmoothingEnabled, "name", {
    value: "get imageSmoothingEnabled"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.imageSmoothingEnabled, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.imageSmoothingEnabled, "name", {
    value: "set imageSmoothingEnabled"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.imageSmoothingQuality,
    set: rsvm.browser.CanvasRenderingContext2D.setter.imageSmoothingQuality,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.imageSmoothingQuality, "name", {
    value: "get imageSmoothingQuality"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.imageSmoothingQuality, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.imageSmoothingQuality, "name", {
    value: "set imageSmoothingQuality"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "strokeStyle", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.strokeStyle,
    set: rsvm.browser.CanvasRenderingContext2D.setter.strokeStyle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.strokeStyle, "name", {
    value: "get strokeStyle"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.strokeStyle, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.strokeStyle, "name", {
    value: "set strokeStyle"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "fillStyle", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.fillStyle,
    set: rsvm.browser.CanvasRenderingContext2D.setter.fillStyle,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.fillStyle, "name", {
    value: "get fillStyle"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fillStyle, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fillStyle, "name", {
    value: "set fillStyle"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetX", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.shadowOffsetX,
    set: rsvm.browser.CanvasRenderingContext2D.setter.shadowOffsetX,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.shadowOffsetX, "name", {
    value: "get shadowOffsetX"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowOffsetX, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowOffsetX, "name", {
    value: "set shadowOffsetX"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowOffsetY", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.shadowOffsetY,
    set: rsvm.browser.CanvasRenderingContext2D.setter.shadowOffsetY,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.shadowOffsetY, "name", {
    value: "get shadowOffsetY"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowOffsetY, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowOffsetY, "name", {
    value: "set shadowOffsetY"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowBlur", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.shadowBlur,
    set: rsvm.browser.CanvasRenderingContext2D.setter.shadowBlur,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.shadowBlur, "name", {
    value: "get shadowBlur"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowBlur, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowBlur, "name", {
    value: "set shadowBlur"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "shadowColor", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.shadowColor,
    set: rsvm.browser.CanvasRenderingContext2D.setter.shadowColor,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.shadowColor, "name", {
    value: "get shadowColor"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowColor, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.shadowColor, "name", {
    value: "set shadowColor"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineWidth", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.lineWidth,
    set: rsvm.browser.CanvasRenderingContext2D.setter.lineWidth,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.lineWidth, "name", {
    value: "get lineWidth"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineWidth, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineWidth, "name", {
    value: "set lineWidth"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineCap", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.lineCap,
    set: rsvm.browser.CanvasRenderingContext2D.setter.lineCap,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.lineCap, "name", {
    value: "get lineCap"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineCap, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineCap, "name", {
    value: "set lineCap"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineJoin", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.lineJoin,
    set: rsvm.browser.CanvasRenderingContext2D.setter.lineJoin,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.lineJoin, "name", {
    value: "get lineJoin"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineJoin, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineJoin, "name", {
    value: "set lineJoin"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "miterLimit", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.miterLimit,
    set: rsvm.browser.CanvasRenderingContext2D.setter.miterLimit,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.miterLimit, "name", {
    value: "get miterLimit"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.miterLimit, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.miterLimit, "name", {
    value: "set miterLimit"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "lineDashOffset", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.lineDashOffset,
    set: rsvm.browser.CanvasRenderingContext2D.setter.lineDashOffset,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.lineDashOffset, "name", {
    value: "get lineDashOffset"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineDashOffset, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.lineDashOffset, "name", {
    value: "set lineDashOffset"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "font", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.font,
    set: rsvm.browser.CanvasRenderingContext2D.setter.font,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.font, "name", {
    value: "get font"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.font, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.font, "name", {
    value: "set font"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "textAlign", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.textAlign,
    set: rsvm.browser.CanvasRenderingContext2D.setter.textAlign,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.textAlign, "name", {
    value: "get textAlign"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.textAlign, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.textAlign, "name", {
    value: "set textAlign"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "textBaseline", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.textBaseline,
    set: rsvm.browser.CanvasRenderingContext2D.setter.textBaseline,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.textBaseline, "name", {
    value: "get textBaseline"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.textBaseline, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.textBaseline, "name", {
    value: "set textBaseline"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "direction", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.direction,
    set: rsvm.browser.CanvasRenderingContext2D.setter.direction,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.direction, "name", {
    value: "get direction"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.direction, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.direction, "name", {
    value: "set direction"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "fontKerning", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.fontKerning,
    set: rsvm.browser.CanvasRenderingContext2D.setter.fontKerning,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.fontKerning, "name", {
    value: "get fontKerning"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fontKerning, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fontKerning, "name", {
    value: "set fontKerning"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "fontStretch", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.fontStretch,
    set: rsvm.browser.CanvasRenderingContext2D.setter.fontStretch,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.fontStretch, "name", {
    value: "get fontStretch"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fontStretch, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fontStretch, "name", {
    value: "set fontStretch"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "fontVariantCaps", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.fontVariantCaps,
    set: rsvm.browser.CanvasRenderingContext2D.setter.fontVariantCaps,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.fontVariantCaps, "name", {
    value: "get fontVariantCaps"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fontVariantCaps, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.fontVariantCaps, "name", {
    value: "set fontVariantCaps"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "letterSpacing", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.letterSpacing,
    set: rsvm.browser.CanvasRenderingContext2D.setter.letterSpacing,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.letterSpacing, "name", {
    value: "get letterSpacing"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.letterSpacing, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.letterSpacing, "name", {
    value: "set letterSpacing"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "textRendering", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.textRendering,
    set: rsvm.browser.CanvasRenderingContext2D.setter.textRendering,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.textRendering, "name", {
    value: "get textRendering"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.textRendering, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.textRendering, "name", {
    value: "set textRendering"
});
Object.defineProperty(CanvasRenderingContext2D.prototype, "wordSpacing", {
    get: rsvm.browser.CanvasRenderingContext2D.getter.wordSpacing,
    set: rsvm.browser.CanvasRenderingContext2D.setter.wordSpacing,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.getter.wordSpacing, "name", {
    value: "get wordSpacing"
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.wordSpacing, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.CanvasRenderingContext2D.setter.wordSpacing, "name", {
    value: "set wordSpacing"
});


for (const key in rsvm.browser.CanvasRenderingContext2D.getter) {
    rsvm.safefunction(rsvm.browser.CanvasRenderingContext2D.getter[key]);
}
for (const key in rsvm.browser.CanvasRenderingContext2D.setter) {
    rsvm.safefunction(rsvm.browser.CanvasRenderingContext2D.setter[key]);
}
for (const key in rsvm.browser.CanvasRenderingContext2D.actor) {
    rsvm.safefunction(rsvm.browser.CanvasRenderingContext2D.actor[key]);
};


CanvasRenderingContext2D = rsvm.proxy(CanvasRenderingContext2D);