rsvm.browser.WebGLRenderingContext = {
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
                rsvm.throwErrorGetter("WebGLRenderingContext");
            }
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGLRenderingContext.subObject[i].canvas;
                }
            }
            return rsvm.browser.WebGLRenderingContext.memory.canvas;
        },
        drawingBufferWidth() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGLRenderingContext");
            }
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGLRenderingContext.subObject[i].drawingBufferWidth;
                }
            }
            return rsvm.browser.WebGLRenderingContext.memory.drawingBufferWidth;
        },
        drawingBufferHeight() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGLRenderingContext");
            }
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGLRenderingContext.subObject[i].drawingBufferHeight;
                }
            }
            return rsvm.browser.WebGLRenderingContext.memory.drawingBufferHeight;
        },
        drawingBufferColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGLRenderingContext");
            }
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGLRenderingContext.subObject[i].drawingBufferColorSpace;
                }
            }
            return rsvm.browser.WebGLRenderingContext.memory.drawingBufferColorSpace;
        },
        unpackColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("WebGLRenderingContext");
            }
            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    return rsvm.browser.WebGLRenderingContext.subObject[i].unpackColorSpace;
                }
            }
            return rsvm.browser.WebGLRenderingContext.memory.unpackColorSpace;
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
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    rsvm.browser.WebGLRenderingContext.subObject[i].drawingBufferColorSpace = arguments[0];
                    return;
                }
            }
            rsvm.browser.WebGLRenderingContext.memory.drawingBufferColorSpace = arguments[0];
        },
        unpackColorSpace() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor == this.__proto__.constructor) {
                return;
            }
            for (let i = 0; i < rsvm.browser.WebGLRenderingContext.subObject.length; i++) {
                if (this == rsvm.browser.WebGLRenderingContext.subObject[i].dogID) {
                    rsvm.browser.WebGLRenderingContext.subObject[i].unpackColorSpace = arguments[0];
                    return;
                }
            }
            rsvm.browser.WebGLRenderingContext.memory.unpackColorSpace = arguments[0];
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
        bindAttribLocation(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        bindRenderbuffer(a, b) {
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
        compressedTexSubImage2D(a, b, c, d, e, f, g, undefined) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        copyTexImage2D(a, b, c, d, e, f, g, undefined) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        copyTexSubImage2D(a, b, c, d, e, f, g, undefined) {
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
        createRenderbuffer() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        createShader() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            switch(arguments[0]){
                case 35633:
                    return rsvm.proxy(Object.create(WebGLShader.prototype));
            }
        },
        createTexture() {
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
        deleteRenderbuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteShader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        deleteTexture(a) {
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
        enable(a) {
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
        getExtension() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            if (this.getSupportedExtensions().indexOf(a) != -1){
                switch (a){
                    case "WEBGL_draw_buffers":
                        return new WebGLDrawBuffers();
                    case "WEBGL_debug_renderer_info":
                        return new WebGLDebugRendererInfo();
                    case "EXT_texture_filter_anisotropic":
                        return new EXTTextureFilterAnisotropic();
                    case "MOZ_EXT_texture_filter_anisotropic":
                        return null;
                    default:
                        return null;
                }
            }else{
                return null;
            }
        },
        getFramebufferAttachmentParameter(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getParameter(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            switch(arguments[0]){
                case 34047:
                    return 16;
                case 34047:
                    return 16;
                case 37446:
                    return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 Ti Direct3D11 vs_5_0 ps_5_0, D3D11)';
                case 37445:
                    return 'Google Inc. (NVIDIA)';
                case 7937:
                    return 'WebKit WebGL';
                case 7937:
                    return 'WebKit WebGL';
                case 7936:
                    return 'WebKit';
                case 36347:
                    return 4095;
                case 3386:
                    var obj = new Int32Array(2);
                    obj[0] = 32767;
                    obj[1] = 32767;
                    return obj;
                case 34921:
                    return 16;
                case 35724:
                    return 'WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)';
                case 7938:
                    return 'WebGL 1.0 (OpenGL ES 2.0 Chromium)';
                case 36348:
                    return 30;
                case 33901:
                    var obj = new Float32Array(2);
                    obj[0] = 1;
                    obj[1] = 1024;
                    return obj;
                case 32937:
                    return 4;
                case 35661:
                    return 32;
                case 34930:
                    return 16;
                case 36349:
                    return 1024;
                case 33902:
                    var obj = new Float32Array(2);
                    obj[0] = 1;
                    obj[1] = 1;
                    return obj;
                case 34024:
                    return 16384;
                case 35660:
                    return 16;
                case 2968:
                    return 2147483647;
                case 3379:
                    return 16384;
                case 34076:
                    return 16384;
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
        getRenderbufferParameter(a, b) {
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
            if (arguments[0][Symbol.toStringTag] === "WebGLShader" && arguments[1] === 35713){
                return false;
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
            return ["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_float_blend","EXT_frag_depth","EXT_shader_texture_lod","EXT_texture_compression_bptc","EXT_texture_compression_rgtc","EXT_texture_filter_anisotropic","EXT_sRGB","KHR_parallel_shader_compile","OES_element_index_uint","OES_fbo_render_mipmap","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_debug_renderer_info","WEBGL_debug_shaders","WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBGL_multi_draw"];
        },
        getTexParameter(a, b) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getUniform(a, b) {
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
        isRenderbuffer(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isShader(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        isTexture(a) {
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
        sampleCoverage(a, b) {
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
        texSubImage2D(a, b, c, d, e, f, g) {
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
        uniformMatrix2fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix3fv(a, b, c) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        uniformMatrix4fv(a, b, c) {
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
        var object = Object.create(WebGLRenderingContext.prototype);
        var memory = {};
        for (const key in rsvm.browser.WebGLRenderingContext.memory) {
            memory[key] = rsvm.browser.WebGLRenderingContext.memory[key];
        }
        memory["canvas"] = parent;
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};