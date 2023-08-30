rsvm.browser.HTMLCanvasElement = {
    dataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABGJJREFUeF7t1AEJAAAMAsHZv/RyPNwSyDncOQIECEQEFskpJgECBM5geQICBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAgQdWMQCX4yW9owAAAABJRU5ErkJggg==",
    memory: {
        width: 300,
        height: 150,
    },
    getter: {
        width() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLCanvasElement");
            }
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].width;
                }
            }
            return rsvm.browser.HTMLCanvasElement.memory.width;
        },
        height() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.constructor != this.__proto__.constructor) {
                rsvm.throwErrorGetter("HTMLCanvasElement");
            }
            if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                rsvm.throwErrorOtherGetter();
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    return rsvm.browser.Node.subObject[i].height;
                }
            }
            return rsvm.browser.HTMLCanvasElement.memory.height;
        },
    },
    setter: {
        width() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].width = arguments[0];
                    return;
                }
            }
        },
        height() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            for (let i = 0; i < rsvm.browser.Node.subObject.length; i++) {
                if (this == rsvm.browser.Node.subObject[i].dogID) {
                    rsvm.browser.Node.subObject[i].height = arguments[0];
                    return;
                }
            }
        },
    },
    actor: {
        captureStream() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        getContext() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var a = arguments[0];
            if (a == '2d') {
                return rsvm.browser.CanvasRenderingContext2D.create(this);
            } else if (a == 'webgl' || a == 'experimental-webgl') {
                return rsvm.browser.WebGLRenderingContext.create(this);
            } else if (a == 'webgl2' || a == 'experimental-webgl2') {
                return rsvm.browser.WebGL2RenderingContext.create(this);
            } else if (a == 'bitmaprenderer') {

            } else {
                return null;
            }
        },
        toBlob(a) {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },
        toDataURL() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            if (this.width === 280 && this.height === 60){
                return 'data:image/png;base64,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';
            }else if (this.width === 16 && this.height === 16){
                return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANRJREFUOE/t0qFKw1EcxfHPQBA0CGsiQ8Gy4BMMg1UwyNKeQFSUsSKYBFGElSVFMJgVtjrYC6xZjA6bD6DNMsdPfoM/LK7uBzfcyz3fe+7hlMw5pTn1FgAzGZxjhH6Gu4Uj3KGBnTz/xRM+iiHW0MQLeljGJdZxge8U72IPt/ibAso4wRd+ElDHKrbRSUDsr3GPzwAGINYx3rCRr7zjEM84KwD2sYnHaX9CvIJTVNJuWH3FAZZQxQO6uMIAwyKgWMawHRMZxKyhlQ7GuEE7v/p/YdFEJjH4JBEScSkQAAAAAElFTkSuQmCC';
            }
            return rsvm.browser.HTMLCanvasElement.dataURL;
        },
        transferControlToOffscreen() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
        },

    },
    subObject: [],
    create() {
        var object = Object.create(HTMLCanvasElement.prototype);
        var memory = {};
        for (const key in rsvm.browser.HTMLCanvasElement.memory) {
            memory[key] = rsvm.browser.HTMLCanvasElement.memory[key];
        }
        for (const key in rsvm.browser.HTMLElement.memory) {
            memory[key] = rsvm.browser.HTMLElement.memory[key];
        }
        for (const key in rsvm.browser.Element.memory) {
            memory[key] = rsvm.browser.Element.memory[key];
        }
        for (const key in rsvm.browser.Node.memory) {
            memory[key] = rsvm.browser.Node.memory[key];
        }
        memory["nodeName"] = memory["tagName"] = "CANVAS";
        memory["localName"] = "canvas";
        memory["outerHTML"] = "<" + memory["localName"] + ">" + "</" + memory["localName"] + ">";
        memory['style'] = rsvm.browser.CSSStyleDeclaration.create();
        memory["children"] = rsvm.browser.HTMLCollection.create();
        memory["childNodes"] = rsvm.browser.NodeList.create();
        rsvm.browser.Node.subObject.push(memory);
        object = rsvm.proxy(object);
        memory.dogID = object;
        return object;
    }
};