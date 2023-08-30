rsvm.browser.EventTarget = {
    memory: {
    },
    getter: {
    },
    setter: {
    },
    actor: {
        addEventListener() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var type = arguments[0], listener = arguments[1];
            if (!(type in rsvm.browser.EventTarget.eventListener)) {
                rsvm.browser.EventTarget.eventListener[type] = [];
            }
            rsvm.browser.EventTarget.eventListener[type].push(listener);
        },
        dispatchEvent() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var event = arguments[0];
            if (!(event.type in rsvm.browser.EventTarget.eventListener)) {
                return;
            }
            var stack = rsvm.browser.EventTarget.eventListener[event.type];
            for (let i = 0; i < rsvm.browser.Event.subObject.length; i++) {
                if (event == rsvm.browser.Event.subObject[i].dogID) {
                    rsvm.browser.Event.subObject[i].target = this;
                }
            }
            for (var i = 0, l = stack.length; i < l; i++) {
                stack[i].call(this, event);
            }
        },
        removeEventListener() {
            if (rsvm.debugconfig.ifdebugger) {
                debugger;
            }
            var type = arguments[0], listener = arguments[1];
            if (!(type in rsvm.browser.EventTarget.eventListener)) {
                return;
            }
            var stack = rsvm.browser.EventTarget.eventListener[type];
            for (var i = 0, l = stack.length; i < l; i++) {
                if (stack[i] === listener) {
                    stack.splice(i, 1);
                    return this.removeEventListener(type, listener);
                }
            }
        }
    },
    eventListener: {},
};