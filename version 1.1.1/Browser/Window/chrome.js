rsvm.browser.func.chromeMemory = {
    runtime: {
        OnInstalledReason: { CHROME_UPDATE: "chrome_update", INSTALL: "install", SHARED_MODULE_UPDATE: "shared_module_update", UPDATE: "update" },
        OnRestartRequiredReason: { APP_UPDATE: "app_update", OS_UPDATE: "os_update", PERIODIC: "periodic" },
        PlatformArch: { ARM: "arm", ARM64: "arm64", MIPS: "mips", MIPS64: "mips64", X86_32: "x86-32", X86_64: "x86-64" },
        PlatformNaclArch: { ARM: "arm", MIPS: "mips", MIPS64: "mips64", X86_32: "x86-32", X86_64: "x86-64" },
        PlatformOs: { ANDROID: "android", CROS: "cros", FUCHSIA: "fuchsia", LINUX: "linux", MAC: "mac", OPENBSD: "openbsd", WIN: "win" },
        RequestUpdateCheckStatus: { NO_UPDATE: "no_update", THROTTLED: "throttled", UPDATE_AVAILABLE: "update_available" },
    }
};
rsvm.browser.func.chromeSetter = {
    runtime() {
        if (rsvm.ifdebugger) {
            debugger;
        }
        rsvm.browser.func.chromeMemory.runtime = arguments[0];
    }
}; rsvm.safefunction(rsvm.browser.func.chromeSetter.runtime)
rsvm.browser.func.chromeGetter = {
    id() {
        if (rsvm.ifdebugger) {
            debugger;
        }
        return undefined;
    },
    getVariableValue() {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    send() {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    nowInMicroseconds() {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    runtime() {
        if (rsvm.ifdebugger) {
            debugger;
        }
        return rsvm.browser.func.chromeMemory.runtime;
    }
};
rsvm.safefunction(rsvm.browser.func.chromeGetter.id);
rsvm.safefunction(rsvm.browser.func.chromeGetter.getVariableValue);
rsvm.safefunction(rsvm.browser.func.chromeGetter.send);
rsvm.safefunction(rsvm.browser.func.chromeGetter.nowInMicroseconds);
rsvm.safefunction(rsvm.browser.func.chromeGetter.runtime);
var chrome = {
    csi: function () {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    getVariableValue: rsvm.browser.func.chromeGetter.getVariableValue,
    loadTimes: function () {
        if (rsvm.ifdebugger) {
            debugger;
        }
    },
    send: rsvm.browser.func.chromeGetter.send,
    timeTicks: {
        nowInMicroseconds: rsvm.browser.func.chromeGetter.nowInMicroseconds
    },
    runtime: undefined
};
rsvm.safefunction(chrome.csi);
rsvm.safefunction(chrome.loadTimes);

Object.defineProperty(chrome, "runtime", {
    get: rsvm.browser.func.chromeGetter.runtime,
    set: rsvm.browser.func.chromeSetter.runtime,
    configurable: true
}); Object.defineProperty(rsvm.browser.func.chromeMemory.runtime, "id", {
    get: rsvm.browser.func.chromeGetter.id,
    configurable: true
});


Object.defineProperty(chrome.csi, "name", { value: "" });
Object.defineProperty(chrome.loadTimes, "name", { value: "" });
Object.defineProperty(rsvm.browser.func.chromeGetter["id"], "name", { value: "" });
Object.defineProperty(rsvm.browser.func.chromeGetter["getVariableValue"], "name", { value: "" });
Object.defineProperty(rsvm.browser.func.chromeGetter["runtime"], "name", { value: "" });
Object.defineProperty(rsvm.browser.func.chromeSetter["runtime"], "name", { value: "" });
Object.defineProperty(rsvm.browser.func.chromeGetter["send"], "name", { value: "" });
Object.defineProperty(rsvm.browser.func.chromeGetter["nowInMicroseconds"], "name", { value: "" });


chrome = rsvm.proxy(chrome);