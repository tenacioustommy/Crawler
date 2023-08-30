rsvm.browser.WebGL2RenderingContext = {
    memory: {
        canvas: {},
        drawingBufferWidth: 300,
        drawingBufferHeight: 150,
        drawingBufferColorSpace: "srgb",
        unpackColorSpace: "srgb",
    },
    getter: {
        canvas() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGL2RenderingContext");
            }
            if (!WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGL2RenderingContext.subObject[i].canvas;
                }
            }
            return rsvm.browser.WebGL2RenderingContext.memory.canvas;
        },
        drawingBufferWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGL2RenderingContext");
            }
            if (!WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGL2RenderingContext.subObject[i].drawingBufferWidth;
                }
            }
            return rsvm.browser.WebGL2RenderingContext.memory.drawingBufferWidth;
        },
        drawingBufferHeight() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGL2RenderingContext");
            }
            if (!WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGL2RenderingContext.subObject[i].drawingBufferHeight;
                }
            }
            return rsvm.browser.WebGL2RenderingContext.memory.drawingBufferHeight;
        },
        drawingBufferColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGL2RenderingContext");
            }
            if (!WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGL2RenderingContext.subObject[i].drawingBufferColorSpace;
                }
            }
            return rsvm.browser.WebGL2RenderingContext.memory.drawingBufferColorSpace;
        },
        unpackColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGL2RenderingContext");
            }
            if (!WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGL2RenderingContext.subObject[i].unpackColorSpace;
                }
            }
            return rsvm.browser.WebGL2RenderingContext.memory.unpackColorSpace;
        },
    },
    setter: {
        drawingBufferColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    rsvm.browser.WebGL2RenderingContext.subObject[i].drawingBufferColorSpace = arguments[0];
                    return;
                }
            }
            rsvm.browser.WebGL2RenderingContext.memory.drawingBufferColorSpace = arguments[0];
        },
        unpackColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.WebGL2RenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGL2RenderingContext.subObject[i].dogID) {
                    rsvm.browser.WebGL2RenderingContext.subObject[i].unpackColorSpace = arguments[0];
                    return;
                }
            }
            rsvm.browser.WebGL2RenderingContext.memory.unpackColorSpace = arguments[0];
        },
    },
    actor: {
        activeTexture(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        attachShader(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        beginQuery(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        beginTransformFeedback(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindAttribLocation(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindBufferBase(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindBufferRange(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindRenderbuffer(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindSampler(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindTransformFeedback(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindVertexArray(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blendColor(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blendEquation(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blendEquationSeparate(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blendFunc(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blendFuncSeparate(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        blitFramebuffer(a, b, c, d, e, f, g, h, i, j) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bufferData(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bufferSubData(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        checkFramebufferStatus(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clientWaitSync(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        compileShader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        compressedTexImage2D(a, b, c, d, e, f, g) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        compressedTexImage3D(a, b, c, d, e, f, g, h) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        compressedTexSubImage2D(a, b, c, d, e, f, g, h) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        compressedTexSubImage3D(a, b, c, d, e, f, g, h, i, j) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        copyBufferSubData(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        copyTexImage2D(a, b, c, d, e, f, g, h) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        copyTexSubImage2D(a, b, c, d, e, f, g, h) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        copyTexSubImage3D(a, b, c, d, e, f, g, h, i) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createBuffer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createFramebuffer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createProgram() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createQuery() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createRenderbuffer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createSampler() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createShader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createTexture() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createTransformFeedback() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createVertexArray() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        cullFace(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteBuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteFramebuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteProgram(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteQuery(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteRenderbuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteSampler(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteShader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteSync(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteTexture(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteTransformFeedback(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteVertexArray(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        depthFunc(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        depthMask(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        depthRange(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        detachShader(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        disable(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawArraysInstanced(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawElementsInstanced(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawRangeElements(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        enable(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        endQuery(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        endTransformFeedback() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        fenceSync(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        finish() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        flush() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        framebufferRenderbuffer(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        framebufferTexture2D(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        framebufferTextureLayer(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        frontFace(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        generateMipmap(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getActiveAttrib(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getActiveUniform(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getActiveUniformBlockName(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getActiveUniformBlockParameter(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getActiveUniforms(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAttachedShaders(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getAttribLocation(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getBufferParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getBufferSubData(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getContextAttributes() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getError() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getExtension(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getFragDataLocation(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getFramebufferAttachmentParameter(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getIndexedParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getInternalformatParameter(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getParameter(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getProgramInfoLog(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getProgramParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getQuery(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getQueryParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getRenderbufferParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getSamplerParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getShaderInfoLog(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getShaderParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getShaderPrecisionFormat(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getShaderSource(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getSupportedExtensions() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getSyncParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getTexParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getTransformFeedbackVarying(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUniform(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUniformBlockIndex(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUniformIndices(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUniformLocation(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getVertexAttrib(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getVertexAttribOffset(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        hint(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        invalidateFramebuffer(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        invalidateSubFramebuffer(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isBuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isContextLost() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isEnabled(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isFramebuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isProgram(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isQuery(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isRenderbuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isSampler(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isShader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isSync(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isTexture(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isTransformFeedback(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isVertexArray(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        lineWidth(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        linkProgram(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        pauseTransformFeedback() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        pixelStorei(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        polygonOffset(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        readBuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        readPixels(a, b, c, d, e, f, g) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        renderbufferStorage(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        renderbufferStorageMultisample(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        resumeTransformFeedback() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        sampleCoverage(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        samplerParameterf(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        samplerParameteri(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        shaderSource(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stencilFunc(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stencilFuncSeparate(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stencilMask(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stencilMaskSeparate(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stencilOp(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        stencilOpSeparate(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texImage2D(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texImage3D(a, b, c, d, e, f, g, h, i, j) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texParameterf(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texParameteri(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texStorage2D(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texStorage3D(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texSubImage2D(a, b, c, d, e, f, g) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        texSubImage3D(a, b, c, d, e, f, g, h, i, j, k) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        transformFeedbackVaryings(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform1ui(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform2ui(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform3ui(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform4ui(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformBlockBinding(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        useProgram(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        validateProgram(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribDivisor(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribI4i(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribI4ui(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribIPointer(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        waitSync(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindBuffer(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindFramebuffer(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindTexture(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clear(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearBufferfi(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearBufferfv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearBufferiv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearBufferuiv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearColor(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearDepth(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        clearStencil(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        colorMask(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        disableVertexAttribArray(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawArrays(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawBuffers(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        drawElements(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        enableVertexAttribArray(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        scissor(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform1f(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform1fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform1i(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform1iv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform1uiv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform2f(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform2fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform2i(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform2iv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform2uiv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform3f(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform3fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform3i(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform3iv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform3uiv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform4f(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform4fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform4i(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform4iv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniform4uiv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix2fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix2x3fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix2x4fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix3fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix3x2fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix3x4fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix4fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix4x2fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix4x3fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib1f(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib1fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib2f(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib2fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib3f(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib3fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib4f(a, b, c, d, e) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttrib4fv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribI4iv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribI4uiv(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        vertexAttribPointer(a, b, c, d, e, f) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        viewport(a, b, c, d) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        makeXRCompatible() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create(parent) {
        var object = Object.create(WebGL2RenderingContext.prototype);
        var memory = {};
        for (const key in rsvm.browser.WebGL2RenderingContext.memory) {
            memory[key] = rsvm.browser.WebGL2RenderingContext.memory[key];
        }
        memory["canvas"] = parent;
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};