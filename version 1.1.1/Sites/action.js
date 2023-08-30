// 初始化浏览器属性
(function initBrowser(){
    var url = "https://www.adidas.com.cn/pdp?articleId=ID4795";
    var referer = "https://www.adidas.com.cn/pdp?articleId=ID4795";
    var userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36";
    var languages = ['zh', 'zh-CN'];

    // ------------------------- navigator --------------------------------
    dogvm.browser.Navigator.memory.vendorSub = "";
    dogvm.browser.Navigator.memory.productSub = "20030107";
    dogvm.browser.Navigator.memory.vendor = "Google Inc.";
    dogvm.browser.Navigator.memory.maxTouchPoints = 20;
    dogvm.browser.Navigator.memory.hardwareConcurrency = 12;
    dogvm.browser.Navigator.memory.appName = "Netscape";
    dogvm.browser.Navigator.memory.platform = "Win32";
    dogvm.browser.Navigator.memory.product = "Gecko";
    dogvm.browser.Navigator.memory.userAgent = userAgent;
    dogvm.browser.Navigator.memory.appCodeName = dogvm.browser.Navigator.memory.userAgent.split("/")[0];
    dogvm.browser.Navigator.memory.appVersion = dogvm.browser.Navigator.memory.userAgent.match(/\/.+/g)[0].slice(1);
    dogvm.browser.Navigator.memory.languages = languages;
    dogvm.browser.Navigator.memory.language = dogvm.browser.Navigator.memory.languages[0];
    dogvm.browser.Navigator.memory.deviceMemory = 10;

    // ------------------------- document -----------------------------------
    dogvm.browser.Node.subObject[0].URL = url;
    dogvm.browser.Node.subObject[0].documentURI = dogvm.browser.Node.subObject[0].URL;
    dogvm.browser.Node.subObject[0].characterSet = "UTF-8";
    dogvm.browser.Node.subObject[0].charset = "UTF-8";
    dogvm.browser.Node.subObject[0].inputEncoding = "UTF-8";
    dogvm.browser.Node.subObject[0].contentType = "application/xml";
    dogvm.browser.Node.subObject[0].domain = dogvm.browser.Node.subObject[0].URL.match(/\/\/.+\//g)[0].slice(2, -1);
    dogvm.browser.Node.subObject[0].referrer = referer;
    dogvm.browser.Node.subObject[0].cookie = "";
    dogvm.browser.Node.subObject[0].lastModified = "04/17/2023 21:53:00";
    dogvm.browser.Node.subObject[0].readyState = "complete";
    dogvm.browser.Node.subObject[0].title = "";
    dogvm.browser.Node.subObject[0].dir = "";

    // ------------------------- location -----------------------------------
    dogvm.browser.location.memory.href = dogvm.browser.Node.subObject[0].URL;
    dogvm.browser.location.memory.origin = dogvm.browser.location.memory.href.match(/^.+\/\/.+\//g)[0].slice(0, -1);
    dogvm.browser.location.memory.protocol = dogvm.browser.location.memory.href.match(/^.+:/g)[0];
    dogvm.browser.location.memory.host = dogvm.browser.Node.subObject[0].domain;
    dogvm.browser.location.memory.hostname = dogvm.browser.location.memory.host;
    if(dogvm.browser.location.memory.href.match(/:\d+\//g) == null){
        dogvm.browser.location.memory.port = "";
    }else{
        dogvm.browser.location.memory.port = dogvm.browser.location.memory.href.match(/:\d+\//g)[0].slice(1, -1);
    }
    dogvm.browser.location.memory.pathname = dogvm.browser.location.memory.href.match(/\/\/.+/g)[0].replace("//" + dogvm.browser.location.memory.host, "");
    dogvm.browser.location.memory.search = "";
    dogvm.browser.location.memory.hash = "";

    // -----------------------------------------------------------------------
    // window[MNK] = []
}());

/*!VERSION=3.4.3*/
var TINGYUN = function () {
    function t(t, e) {
        return Function.prototype.apply.apply(t, e)
    }
    function e(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }
    function n(t) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            n(t)
    }
    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
            t
    }
    function i(t, e, r) {
        var i, a = 0;
        if (t)
            if (function (t) {
                var e = !!t && "length" in t && t.length
                    , r = n(t);
                return "function" !== r && ("array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }(t))
                for (i = t.length; a < i && !1 !== e.call(t[a], t[a], a); a++)
                    ;
            else
                for (a in t)
                    if ((r || Object.prototype.hasOwnProperty.call(t, a)) && !1 === e.call(t[a], t[a], a))
                        break;
        return t
    }
    var a = window.encodeURIComponent;
    function o(t) {
        return a ? a(t) : t
    }
    function s(t) {
        return function (e) {
            return "Array" === t && Array.isArray ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }
    var c = s("String")
        , u = s("Array")
        , d = s("Function")
        , l = s("Object")
        , f = s("Number")
        , p = s("Headers")
        , h = s("Request");
    function m() {
        this.events = {}
    }
    m.prototype = {
        on: function (t, e) {
            var n = this;
            return c(t) ? (n.events[t] || (n.events[t] = [])).push(e) : u(t) && i(t, (function (t) {
                n.on(t, e)
            }
            )),
                n
        },
        off: function (t, e) {
            var n = arguments.length
                , r = this;
            if (0 === n)
                return r.events = {},
                    r;
            var i = r.events[t];
            if (!i)
                return r;
            if (1 === n)
                return r.events[t] = null,
                    r;
            for (var a = i.length; a--;)
                if (i[a] === e) {
                    i.splice(a, 1);
                    break
                }
            return r
        },
        emit: function (t) {
            var e = [].slice.call(arguments, 1)
                , n = this.events[t];
            return n && i(n, (function (t) {
                return t.apply(this, e)
            }
            )),
                this
        },
        unshift: function (t, e) {
            var n = this;
            return (n.events[t] || (n.events[t] = [])).unshift(e),
                n
        }
    };
    var v = [].slice;
    function g(t) {
        var e = arguments.length;
        if (e < 2 || !t)
            return t;
        var n = v.call(arguments, 1);
        return i(n, (function (e) {
            i(e, (function (e, n) {
                t[n] = e
            }
            ))
        }
        )),
            t
    }
    function y(t, e) {
        for (var n = -1, r = 0, i = null == t ? 0 : t.length, a = []; ++n < i;) {
            var o = t[n];
            e(o, n, t) && (a[r++] = o)
        }
        return a
    }
    function b(t, e) {
        return t ? e ? t.replace(/\{(\w+.?\w+)\}/g, (function (t, n) {
            return e[n] || ""
        }
        )).replace(/\{(\d+)\}/g, (function (t, n) {
            return e[n] || ""
        }
        )) : t : ""
    }
    var w = +new Date;
    function _(t, e, n) {
        var r;
        if (null == t)
            return -1;
        var i = Object(t)
            , a = i.length >>> 0;
        if (0 === a)
            return -1;
        var o = +n || 0;
        if (Math.abs(o) === Infinity && (o = 0),
            o >= a)
            return -1;
        for (r = Math.max(o >= 0 ? o : a - Math.abs(o), 0); r < a;) {
            if (r in i && i[r] === e)
                return r;
            r++
        }
        return -1
    }
    function E(t) {
        var e = !1;
        try {
            /\{\s+\[native code\]/.test(Function.prototype.toString.call(t)) && (e = !0)
        } catch (n) { }
        return e
    }
    function x(t) {
        return JSON.parse(t)
    }
    function T(t) {
        return JSON.stringify(t)
    }
    function S(t) {
        return c(e = t) && null != e && ("{" === e.charAt(0) && "}" === e.charAt(e.length - 1) || "[" === e.charAt(0) && "]" === e.charAt(e.length - 1)) ? new Function("return " + t)() : null;
        var e
    }
    var C, A, k = /([\"\\])/g, N = /\n/g, O = "ARRAY", R = "OBJECT_VALUE", I = "__TY_MARK_OBJECT_VALUE_UNDEFINED__";
    function P(t, e) {
        switch (n(t)) {
            case "object":
                if (!t)
                    return e === R ? null : "null";
                if (t instanceof Array) {
                    var r = v.call(t);
                    return i(r, (function (t, e) {
                        r[e] = P(t, O)
                    }
                    )),
                        "[" + r.join(",") + "]"
                }
                if (t instanceof Date)
                    return t.getTime().toString();
                var a = "";
                return i(t, (function (t, e) {
                    if (!d(t)) {
                        var n = P(t, R);
                        if (n !== I) {
                            var r = P(e, "OBJECT_KEY");
                            a += r + ":" + n + ","
                        }
                    }
                }
                )),
                    a && (a = a.substr(0, a.length - 1)),
                    "{" + a + "}";
            case "string":
                return '"' + t.replace(k, "\\$1").replace(N, "\\n") + '"';
            case "number":
                return isNaN(t) ? null : t;
            case "boolean":
                return t;
            case "function":
                return P(t.toString());
            case "undefined":
                return e === R ? I : e === O ? "null" : "undefined";
            default:
                return '"undefined"'
        }
    }
    var D, L, B, H = window.JSON;
    function j() { }
    function q() {
        return +new Date
    }
    function M(t) {
        return function () {
            if (null !== t) {
                var e = t;
                t = null,
                    e.apply(this, arguments)
            }
        }
    }
    function U(t, e) {
        return setTimeout(t, e || 0, {
            __ty_ignore: !0
        })
    }
    function F(t) {
        return t ? c(t) ? t.length : window.ArrayBuffer && t instanceof ArrayBuffer ? t.byteLength : window.Blob && t instanceof Blob ? t.size : t.length ? t.length : 0 : 0
    }
    D = H && H.stringify,
        C = d(D) && E(D) ? x : S,
        A = function () {
            var t = H && H.stringify;
            if (!d(t) || !E(t))
                return !1;
            var e = !0;
            try {
                i([Boolean, Number, String, Object, Array], (function (t) {
                    if (t.prototype.toJSON)
                        return e = !1,
                            !1
                }
                ))
            } catch (n) { }
            return e
        }() ? T : P,
        window.addEventListener ? (L = function (t, e, n, r) {
            return t.addEventListener(e, n, r)
        }
            ,
            B = function (t, e, n) {
                return t.removeEventListener(e, n)
            }
        ) : (L = function (t, e, n) {
            return t.attachEvent("on" + e, n)
        }
            ,
            B = function (t, e, n) {
                return t.detachEvent("on" + e, n)
            }
        );
    var z = String.prototype.trim ? function (t) {
        return null == t ? "" : t.trim()
    }
        : function (t) {
            return null == t ? "" : t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
        }
        , Y = function () {
            function t(t) {
                return t < 0 ? NaN : t <= 30 ? 0 | Math.random() * (1 << t) : t <= 53 ? (0 | Math.random() * (1 << 30)) + (0 | Math.random() * (1 << t - 30)) * (1 << 30) : NaN
            }
            function e(t, e) {
                for (var n = t.toString(16), r = e - n.length, i = "0"; r > 0; r >>>= 1,
                    i += i)
                    1 & r && (n = i + n);
                return n
            }
            return function (n) {
                var r = "-";
                return n && (r = ""),
                    e(t(32), 8) + r + e(t(16), 4) + r + e(16384 | t(12), 4) + r + e(32768 | t(14), 4) + r + e(t(48), 12)
            }
        }()
        , G = {}
        , J = {
            imageResources: []
        }
        , V = {};
    var K = {
        context: null,
        uniqueId: 0,
        actions: [],
        opt_custom_param: null,
        unAssignedEvents: [],
        cpActions: [],
        recordingCpActions: !1,
        cpParent: null,
        cpRemain: {
            ajax: 0,
            iframe: 0
        },
        tryEndCpActionsFailed: !1,
        pfSent: !1,
        ajaxUniqueId: 0,
        scope: null,
        enableLCPObserver: !0,
        recordingPageLoadEvent: !1,
        recentFinishedAjaxContext: null,
        pageLoadEventEnd: !1,
        nbsJsBridgeData: {},
        did: null,
        uid: null,
        plugins: {},
        pageActionData: null
    }
        , W = "load"
        , X = "unload"
        , Q = "beforeunload"
        , $ = "pagehide"
        , Z = "readystatechange"
        , tt = "complete"
        , et = "4"
        , nt = "TINGYUN_COOKIE_VALUE"
        , rt = "TINGYUN_DATA"
        , it = "TY_BASE64"
        , at = "common"
        , ot = "event"
        , st = "ajax"
        , ct = "timer"
        , ut = "iframe"
        , dt = "pf"
        , lt = "crossPage"
        , ft = "jsError"
        , pt = "resource"
        , ht = "main"
        , mt = "quit"
        , vt = "finish"
        , gt = "timeout"
        , yt = "fetchStart"
        , bt = "requestStart"
        , wt = "responseStart"
        , _t = "responseEnd"
        , Et = "domContentLoadedEventStart"
        , xt = "domainLookupStart"
        , Tt = "domainLookupEnd"
        , St = "redirectStart"
        , Ct = "redirectEnd"
        , At = "connectStart"
        , kt = "connectEnd"
        , Nt = "secureConnectionStart"
        , Ot = "transferSize"
        , Rt = "encodedBodySize"
        , It = "decodedBodySize"
        , Pt = "nextHopProtocol"
        , Dt = "__ty_crs_page_events"
        , Lt = "__ty_event_patch_tag"
        , Bt = "__ty_event_patch_disable"
        , Ht = "__ty_event_patch_id"
        , jt = "click"
        , qt = "submit"
        , Mt = "spe"
        , Ut = "addEventListener"
        , Ft = "onProperty"
        , zt = "inline"
        , Yt = "FORM"
        , Gt = "__ty_xhr_hooked_type"
        , Jt = "TY_USER_ID"
        , Vt = "TY_SESSION_N_ID"
        , Kt = "TY_DEVICE_N_ID"
        , Wt = "__TY_SPE_STORE"
        , Xt = "route"
        , Qt = "__tagFirstPaintTime"
        , $t = "hashchange"
        , Zt = "popstate"
        , te = "URL"
        , ee = "QH"
        , ne = "QB"
        , re = "RH"
        , ie = "RB"
        , ae = "lifecycle"
        , oe = "action"
        , se = "send"
        , ce = "init"
        , ue = "page"
        , de = "ajax"
        , le = "error"
        , fe = "userAction"
        , pe = "beforeSend"
        , he = "send"
        , me = "__ty_resource_load_bind_id"
        , ve = "xhr"
        , ge = "fetch"
        , ye = "mPaaS_rpc"
        , be = "resource"
        , we = "auto"
        , _e = "immediateEvent"
        , Ee = "TINGYUN_STORAGE"
        , xe = "AGENT_CONFIG"
        , Te = "GET"
        , Se = "POST"
        , Ce = "http://mgw/"
        , Ae = "userAction"
        , ke = "xmlhttprequest"
        , Ne = "session"
        , Oe = "lcp"
        , Re = "fcp"
        , Ie = "init"
        , Pe = "console"
        , De = "error"
        , Le = "report"
        , Be = {
            lifecycle: [ce],
            action: [ue, de, le, fe],
            send: [pe, he]
        }
        , He = {};
    function je(t, e) {
        return "".concat(t, "_").concat(e || "default")
    }
    function qe(t) {
        if (t && l(t)) {
            var e = t.type
                , n = t.name
                , r = t.handler
                , i = t.options;
            if (!(null == Be[e] || n && _(Be[e], n) < 0 || !d(r) || i && !l(i)))
                if (n === ue && K.pageActionData)
                    Ye(t, {
                        args: {
                            actionData: K.pageActionData
                        }
                    });
                else {
                    var a = je(e, n);
                    He[a] || (He[a] = []),
                        He[a].push(t)
                }
        }
    }
    function Me(t, e) {
        qe({
            type: ae,
            name: t,
            handler: e
        })
    }
    function Ue(t, e, n) {
        qe({
            type: oe,
            name: t,
            handler: e,
            options: n
        })
    }
    function Fe(t, e) {
        qe({
            type: se,
            name: t,
            handler: e
        })
    }
    function ze(t) {
        var e, n = t.type, r = t.name, a = t.args, o = t.scope, s = je(n, r);
        if (He[s])
            try {
                i(He[s], (function (t) {
                    if (!1 === Ye(t, {
                        args: a,
                        scope: o
                    }))
                        return e = !1,
                            !1
                }
                ))
            } catch (c) { }
        return e
    }
    function Ye(t, e) {
        var n, r = e.args, i = e.scope, a = r || {};
        i && (a.scope = i);
        try {
            n = t.handler.call(i, a)
        } catch (o) { }
        return n
    }
    function Ge(t) {
        t = t || {},
            this._contexts = t.contexts || null,
            this._name = t.name,
            this._tags = null,
            this._metrics = null
    }
    function Je() {
        K.scope || (K.scope = new Ge({
            name: "ROOT"
        }))
    }
    function Ve() {
        Je(),
            K.scope.setContext.apply(K.scope, arguments)
    }
    function Ke(t, e, n) {
        if (t && e) {
            n || (n = "scope");
            var r = e ? e.getData() : null;
            return r && (t[n] = r),
                t
        }
    }
    function We() {
        return Je(),
            K.scope
    }
    Ge.prototype.setContext = function (t, e) {
        var n = this;
        t && l(t) ? i(t, (function (t, e) {
            n._mergeContext(e, t)
        }
        )) : this._mergeContext(t, e)
    }
        ,
        Ge.prototype.setBreadcrumbs = function (t) {
            if (t)
                if (this._breadcrumbs)
                    try {
                        this._breadcrumbs = this._breadcrumbs.concat(t)
                    } catch (e) { }
                else
                    this._breadcrumbs = t
        }
        ,
        Ge.prototype.setTag = function (t, e) {
            null != t && null != e && (this._tags || (this._tags = {}),
                this._tags[t] = e)
        }
        ,
        Ge.prototype.setMetric = function (t, e, n) {
            if (null != t && null != e) {
                this._metrics || (this._metrics = {});
                var r = {
                    data: e
                };
                n && (r.unit = n),
                    this._metrics[t] = r
            }
        }
        ,
        Ge.prototype.setExtraContext = function (t) {
            this.setContext("extra", t)
        }
        ,
        Ge.prototype.getContext = function (t) {
            return null == t ? this._contexts : null == this._contexts ? null : this._contexts[t]
        }
        ,
        Ge.prototype.getData = function () {
            if (this._isEmptyScope())
                return null;
            var t = {};
            return this._contexts && (t.contexts = this._contexts),
                this._breadcrumbs && (t.breadcrumbs = this._breadcrumbs),
                this._tags && (t.tags = this._tags),
                this._metrics && (t.metrics = this._metrics),
                t
        }
        ,
        Ge.prototype._isEmptyScope = function () {
            return null == this._contexts && null == this._breadcrumbs && null == this._tags && null == this._metrics
        }
        ,
        Ge.prototype._mergeContext = function (t, e) {
            null != t && null != e && (this._contexts || (this._contexts = {}),
                l(this._contexts[t]) && l(e) ? this._contexts[t] = g(this._contexts[t] || {}, e) : this._contexts[t] = e)
        }
        ,
        Ge.prototype.toJSON = function () {
            return undefined
        }
        ;
    var Xe, Qe = window.Error, $e = window.document, Ze = window.XMLHttpRequest, tn = window.location, en = window.navigator, nn = {
        isGather: !1
    }, rn = {}, an = {};
    function on() {
        try {
            Xe || (Xe = window.navigator.userAgent.substring(0, 256))
        } catch (t) { }
        return Xe
    }
    var sn = !/(MSIE [0-8].\d+)/.test(on()) && document.addEventListener
        , cn = /(MSIE [0-7].\d+)/.test(navigator.userAgent);
    function un() {
        return sn
    }
    var dn = []
        , ln = [];
    function fn() {
        return dn
    }
    function pn() {
        return ln
    }
    "onpagehide" in window ? (dn = [$],
        ln = [W, $]) : (dn = [X, Q],
            ln = [W, X, Q]);
    var hn = un() ? function (t) {
        return setTimeout(t, 0, {
            __ty_ignore: !0
        })
    }
        : function (t) {
            return setTimeout(t, 0)
        }
        ;
    function mn() {
        return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.nbsBrowserAgent && window.webkit.messageHandlers.nbsBrowserAgent.postMessage
    }
    function vn() {
        return "undefined" != typeof nbsJsBridge && nbsJsBridge.postMessage
    }
    function gn(t) {
        return c(t) || (t = A(t)),
            t
    }
    var yn, bn = "display:none";
    function wn(t, e) {
        var n = t.url
            , r = t.data
            , i = t.callback
            , a = t.method
            , o = t.timeout
            , s = M(i)
            , c = new XDomainRequest;
        c.__ign = !0,
            a = a || Se,
            c.open(a, n),
            c.onload = function () {
                s(c.responseText),
                    e(!0)
            }
            ,
            c.onerror = function (t) {
                s(t),
                    e(!1)
            }
            ,
            o && (c.timeout = o),
            hn((function () {
                a === Se ? c.send(gn(r)) : c.send()
            }
            ))
    }
    function _n(t, e, n) {
        var r = document.createElement(t);
        try {
            for (var i in e)
                r[i] = e[i]
        } catch (s) {
            var a = "<" + t;
            for (var o in e)
                a += " " + o + '="' + e[o] + '"';
            a += ">",
                n || (a += "</" + t + ">"),
                r = document.createElement(a)
        }
        return r
    }
    function En(t, e) {
        var n = t.url
            , r = t.data
            , i = t.callback
            , a = _n("div", {
                style: bn
            })
            , o = _n("iframe", {
                name: "ty_form",
                width: 0,
                height: 0,
                style: bn
            })
            , s = _n("form", {
                style: bn,
                action: n,
                enctype: "application/x-www-form-urlencoded",
                method: "post",
                target: "ty_form"
            })
            , c = _n("input", {
                name: "data",
                type: "hidden"
            }, !0);
        c.value = gn(r),
            s.appendChild(c),
            a.appendChild(o),
            a.appendChild(s),
            document.body.appendChild(a),
            s.submit();
        var u = M((function (t) {
            i && i(),
                document.body.removeChild(a),
                e(t)
        }
        ));
        o.onreadystatechange = function () {
            o.readyState !== tt && 4 !== o.readyState || u(!0)
        }
            ,
            o.onload = function () {
                u(!0)
            }
            ,
            o.onerror = function () {
                u(!1)
            }
    }
    function xn(t, e) {
        debugger;
        var n = t.url
            , r = t.data
            , i = t.header
            , a = t.callback
            , o = t.method
            , s = t.timeout
            , c = M(a);
        console.log(n);
        $r = JSON.parse('{"size":3846,"q":[{"msg":"p{\\"type\\":\\"pf\\",\\"subType\\":\\"main\\",\\"start\\":1681276576035,\\"end\\":1681276576724,\\"duration\\":689,\\"data\\":{\\"items\\":[{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":0,\\"cid\\":2,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_men_ftw\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576292,\\"end\\":1681276576590,\\"du\\":298,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4612,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":1,\\"cid\\":3,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_men_app\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576294,\\"end\\":1681276576619,\\"du\\":325,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4192,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":2,\\"cid\\":4,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_women_ftw\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576296,\\"end\\":1681276576611,\\"du\\":315,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4265,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":3,\\"cid\\":5,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_women_app\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576297,\\"end\\":1681276576623,\\"du\\":326,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4007,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":4,\\"cid\\":6,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_youth\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576298,\\"end\\":1681276576628,\\"du\\":330,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":3967,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":5,\\"cid\\":7,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_kids\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576300,\\"end\\":1681276576616,\\"du\\":316,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4012,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":6,\\"cid\\":8,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_infants\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576301,\\"end\\":1681276576632,\\"du\\":331,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4013,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":7,\\"cid\\":9,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2srh/v1/pub/platform-products/search?page=1&pageSize=6&abTest=A&categoryCode=/catalog_newarrivals_accsee\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576302,\\"end\\":1681276576635,\\"du\\":333,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":4031,\\"send\\":0},{\\"type\\":\\"ajax\\",\\"subType\\":\\"xhr\\",\\"id\\":8,\\"cid\\":10,\\"method\\":\\"GET\\",\\"url\\":\\"https://ecp-public.api.adidas.com.cn/o2inv/v1/pub/inv-query/batch/article-shop-inv?articleIdList=ID4795\\",\\"state\\":\\"finish\\",\\"jserror\\":false,\\"start\\":1681276576332,\\"end\\":1681276576699,\\"du\\":367,\\"cb\\":0,\\"status\\":200,\\"err\\":0,\\"rec\\":2144,\\"send\\":0}],\\"ns\\":1681276575072,\\"f\\":6,\\"qs\\":10,\\"rs\\":43,\\"re\\":46,\\"os\\":701,\\"oe\\":701,\\"oi\\":357,\\"oc\\":1622,\\"ls\\":1623,\\"le\\":1653,\\"tus\\":59,\\"tue\\":61,\\"cs\\":6,\\"ce\\":6,\\"ds\\":6,\\"de\\":6,\\"sl\\":0,\\"je\\":0,\\"fp\\":737,\\"dr\\":701,\\"fs\\":786,\\"loadEventEnd\\":1623,\\"trflag\\":\\"0000\\",\\"type\\":\\"pf\\",\\"subType\\":\\"main\\",\\"body\\":{\\"tt\\":\\"%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF-SUPERSTAR%2080S%20%E7%BB%8F%E5%85%B8%E8%B4%9D%E5%A3%B3%E5%A4%B4%E6%9D%BF%E9%9E%8B%E8%BF%90%E5%8A%A8%E9%9E%8B%20%7C%20adidas%20%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%E5%AE%98%E6%96%B9%E6%97%97%E8%88%B0%E5%BA%97\\",\\"charset\\":\\"UTF-8\\",\\"webVitals\\":{\\"fcp\\":{\\"value\\":737},\\"lcp\\":{\\"value\\":785.5},\\"cls\\":{\\"value\\":0.0005140700290905647},\\"ttfb\\":{\\"value\\":43.59999999962747}}}}}","size":3846,"options":{"query":{"ps":1}}}],"options":{"query":{"ps":1}}}');
        ri({tr: "page"});
        // try {
        //     u.__ign = !0,
        //         o = o || Se;
        //     try {
        //         u.open(o, n, !0)
        //     } catch (l) {
        //         return En(t, e)
        //     }
        //     for (var d in u.overrideMimeType && u.overrideMimeType("text/html"),
        //         s && (u.timeout = s),
        //         u.onreadystatechange = function () {
        //             4 == u.readyState && (c(u.responseText),
        //                 e(200 === u.status))
        //         }
        //         ,
        //         u.onerror = function () {
        //             c(),
        //                 e(!1)
        //         }
        //         ,
        //         i)
        //         u.setRequestHeader(d, i[d]);
        //     o === Se ? u.send(gn(r)) : u.send()
        // } catch (l) {
        //     e(!1)
        // }
    }
    function Tn(t, e) {
        var n = t.url
            , r = t.data
            , i = t.callback;
        try {
            var a = en.sendBeacon(n, gn(r));
            i && i(),
                e(a)
        } catch (o) {
            e(!1)
        }
    }
    function Sn(t, e) {
        var n = {
            url: t,
            header: {
                "content-type": "text/plain;charset=UTF-8"
            },
            body: gn(e)
        };
        return gn({
            type: 0,
            params: {
                ri: n
            }
        })
    }
    function Cn(t, e) {
        var n = t.url
            , r = t.data
            , i = t.callback;
        try {
            window.webkit.messageHandlers.nbsBrowserAgent.postMessage(Sn(n, r))
        } catch (a) { }
        i && i(),
            e(!0)
    }
    function An(t, e) {
        var n = t.url
            , r = t.data
            , i = t.callback;
        try {
            nbsJsBridge.postMessage(Sn(n, r))
        } catch (a) { }
        i && i(),
            e(!0)
    }
    function kn() {
        var t = this;
        this.size = 100,
            this.queue = [],
            this.running = !1,
            this.post = null,
            this.callbackPost = null,
            this.canToggleToSendBeacon = !1,
            this.initSendingMethod(),
            L(window, $, (function () {
                t.canToggleToSendBeacon && (t.post = Tn,
                    an.initiator = "beacon")
            }
            ))
    }
    function Nn(t) {
        yn && yn.add(t)
    }
    function On() {
        this.xhrs = [],
            this.errs = [],
            this.resErrs = [],
            this.visibilities = [],
            this.clear = function () {
                this.xhrs = this.errs = this.resErrs = this.visibilities = []
            }
            ,
            m.call(this)
    }
    function Rn(t) {
        var e = t.url
            , n = t.body
            , r = t.type
            , i = t.callback;
        i = i || j;
        var a, o = {
            url: e,
            body: n,
            type: r
        };
        try {
            a = ze({
                type: se,
                name: pe,
                args: o
            })
        } catch (s) { }
        !1 !== a && Nn({
            url: o.url,
            data: o.body,
            callback: function () {
                try {
                    ze({
                        type: se,
                        name: he,
                        args: o
                    }),
                        i()
                } catch (s) { }
            }
        })
    }
    kn.prototype.add = function (t) {
        this.queue.length >= this.size || (this.queue.push(t),
            this.running || (this.running = !0,
                this.run()))
    }
        ,
        kn.prototype.run = function () {
            var t = this;
            this.handler(this.queue[0], (function (e) {
                e ? (t.queue.shift(),
                    t.queue.length > 0 ? t.run() : t.running = !1) : t.running = !1
            }
            ))
        }
        ,
        kn.prototype.handler = function (t, e) {
            var n = this.post;
            t.needPostCallback && (n = this.callbackPost),
                n(t, M((function (t) {
                    e(t)
                }
                )))
        }
        ,
        kn.prototype.initSendingMethod = function () {
            var t, e, n, r, i, a = !1;
            en.sendBeacon && (a = !0),
                e = xn,
                mn() ? (t = Cn,
                    a = !1,
                    an.initiator = "messageHandler") : vn() ? (t = An,
                        a = !1,
                        an.initiator = "jsBridge") : window.XDomainRequest ? (t = e = wn,
                            an.initiator = "xdr") : (n = window.navigator.standalone,
                                r = on().toLowerCase(),
                                i = /safari/.test(r),
                                /iphone|ipod|ipad/.test(r) && !n && !i || rn.appKey && !mn() && !vn() ? (t = xn,
                                    a = !1,
                                    an.initiator = "xhr") : cn ? (t = En,
                                        an.initiator = "form") : (t = xn,
                                            an.initiator = "xhr")),
                t || (t = function (t, e) {
                    e(!0)
                }
                    ,
                    a = !1),
                this.canToggleToSendBeacon = a,
                this.post = t,
                this.callbackPost = e
        }
        ,
        g(On.prototype, m.prototype);
    var In = new On;
    In.on("send", Rn);
    var Pn = [];
    function Dn(t) {
        Mn(t, Pn)
    }
    var Ln, Bn, Hn, jn = [];
    function qn(t) {
        Mn(t, jn)
    }
    function Mn(t, e) {
        var n = "ok";
        if (!t)
            return n = e.length ? e.join("\n") : n;
        e.push(t)
    }
    function Un(t) {
        try {
            return (e = t) && c(e) ? C(e) : e
        } catch (n) {
            Dn(n && n.message)
        }
        var e;
        return null
    }
    function Fn(t, e, n) {
        if (null == t[e] || u(t[e]))
            u(t[e]) ? t[e].push(n) : t[e] = n;
        else {
            var r = t[e];
            t[e] = [r],
                t[e].push(n)
        }
    }
    function zn(t) {
        if (!t || !c(t))
            return "";
        var e, n = t.indexOf("?");
        return n >= 0 && (e = t.substring(n + 1)),
            e
    }
    function Yn(t) {
        return Jn(zn(t))
    }
    function Gn(t) {
        return t && t.indexOf("?") && t.lastIndexOf("=") && t.lastIndexOf("=") > t.indexOf("?") ? Yn(t) : {}
    }
    function Jn(t) {
        var e = {};
        return t && i(t.split("&"), (function (t) {
            var n = t.split("=")
                , r = Vn(n[0])
                , i = Vn(n[1]);
            if (c(i) && window.isNaN(i)) {
                var a = Un(i);
                null != a && (i = a)
            }
            r && null != i && Fn(e, r, i)
        }
        )),
            e
    }
    function Vn(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) { }
        return null
    }
    function Kn(t) {
        var e = [];
        return i(t, (function (t, n) {
            var r = o(n) + "=" + o(t);
            e.push(r)
        }
        )),
            e.join("&")
    }
    function Wn(t, e) {
        var n = Kn(e);
        return t += (t.indexOf("?") > 0 ? "&" : "?") + n
    }
    Ln = function (t) {
        try {
            return window.localStorage.getItem(t)
        } catch (e) { }
    }
        ,
        Bn = function (t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch (n) { }
            return e
        }
        ,
        Hn = function (t) {
            try {
                window.localStorage.removeItem(t)
            } catch (e) { }
        }
        ;
    var Xn = null;
    function Qn(t, e) {
        if (null != Xn && d(Xn)) {
            var n = {
                type: 1,
                params: {
                    event_name: t
                }
            };
            e && (n.params.data = e);
            try {
                Xn(A(n))
            } catch (r) { }
        }
    }
    function $n() {
        return K.did
    }
    function Zn(t) {
        null != t && (K.did = t,
            Bn(Kt, t))
    }
    function tr() {
        var t = K.uid;
        return t || ((t = Ln(Jt)) ? (K.uid = t,
            t) : null)
    }
    function er(t, e) {
        e = e || {},
            null != t && (K.uid = t,
                e.noStore || Bn(Jt, t),
                Qn("setUser", {
                    id: K.uid
                }))
    }
    var nr = "http:"
        , rr = "https:"
        , ir = [nr, rr]
        , ar = {
            beacon: null,
            fullPath: !1,
            protocol: null
        }
        , or = {
            ref: document.URL,
            referrer: document.referrer,
            v: "3.4.3",
            av: "3.4.3",
            ua: (navigator || {}).userAgent
        };
    function sr() {
        return ar.fullPath ? ar.beacon : ar.protocol + "//" + ar.beacon
    }
    function cr(t) {
        var e = g({}, or, function () {
            var t = {
                did: $n(),
                url: window.location.href
            }
                , e = tr();
            e && (t.uid = e);
            var n = window.TINGYUN_RELEASE && window.TINGYUN_RELEASE.id;
            return n || (n = rn.releaseId),
                n && (t.rid = n),
                t
        }(), t);
        return e.key || e.appKey || !e.token || (e.key = e.token),
            e
    }
    function ur(t) {
        return {
            beacon: sr(),
            query: t = cr(t)
        }
    }
    function dr() {
        if (rn.sendProtocol)
            return rn.sendProtocol;
        var t = function () {
            var t = "";
            try {
                t = window.location.protocol
            } catch (e) { }
            return _(ir, t) < 0 && (t = rr),
                t
        }();
        return t !== nr && /^https/i.test(t) ? rr : nr
    }
    function lr() {
        or.ref = document.URL,
            function () {
                try {
                    return window.self !== window.top
                } catch (t) {
                    return !1
                }
            }() && (or.ifr = 1),
            i(["id", "key", "appKey", "token", "env"], (function (t) {
                rn[t] && (or[t] = rn[t])
            }
            ))
    }
    var fr, pr, hr, mr, vr = function () {
        try {
            var t = Y();
            return window.localStorage.setItem(t, t),
                window.localStorage.removeItem(t),
                !0
        } catch (e) {
            return !1
        }
    }(), gr = {};
    function yr(t, e, n) {
        if (gr.localStorage && t && e) {
            var r = Un(Ln(Ee));
            r || (r = {}),
                e && n ? (r[t] || (r[t] = {}),
                    r[t][e] = n) : r[t] = e,
                Bn(Ee, A(r))
        }
    }
    function br(t, e) {
        if (gr.localStorage && t && e) {
            var n = Un(Ln(Ee));
            if (n && n[t])
                return n[t][e]
        }
    }
    gr.localStorage = vr,
        gr.getEntriesByName = true,
        hr = $e.createElement("div"),
        (mr = $e.createElement("div")).style && (mr.style.cssText = "float:left;opacity:.5",
            gr.opacity = "0.5" === mr.style.opacity,
            gr.cssFloat = !!mr.style.cssFloat,
            mr.style.backgroundClip = "content-box",
            mr.cloneNode(!0).style.backgroundClip = "",
            gr.clearCloneStyle = "content-box" === mr.style.backgroundClip,
            (hr = $e.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            mr.innerHTML = "",
            hr.appendChild(mr),
            gr.boxSizing = "" === mr.style.boxSizing || "" === mr.style.MozBoxSizing || "" === mr.style.WebkitBoxSizing,
            gr.reliableHiddenOffsets = function () {
                return null == fr && ((n = $e.documentElement).appendChild(hr),
                    mr.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    fr = !1,
                    window.getComputedStyle && (e = window.getComputedStyle(mr),
                        fr = "1%" !== (e || {}).top,
                        (e || {}).marginLeft,
                        (e || {
                            width: "4px"
                        }).width,
                        mr.style.marginRight = "50%",
                        (e || {
                            marginRight: "4px"
                        }).marginRight,
                        (t = mr.appendChild($e.createElement("div"))).style.cssText = mr.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        t.style.marginRight = t.style.width = "0",
                        mr.style.width = "1px",
                        parseFloat((window.getComputedStyle(t) || {}).marginRight),
                        mr.removeChild(t)),
                    mr.style.display = "none",
                    (pr = 0 === mr.getClientRects().length) && (mr.style.display = "",
                        mr.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        (t = mr.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                        (pr = 0 === t[0].offsetHeight) && (t[0].style.display = "",
                            t[1].style.display = "none",
                            pr = 0 === t[0].offsetHeight)),
                    n.removeChild(hr)),
                    pr;
                var t, e, n
            }
        );
    var wr = 65536
        , _r = 6048e5;
    function Er(t, e) {
        var n = F(A(e));
        if (!(n > wr)) {
            var r = {}
                , a = function () {
                    if (gr.localStorage)
                        return Ln(Ee)
                }()
                , o = Un(a);
            if (o && o.AGENT_CONFIG)
                if (F(a) + n > wr) {
                    var s = [];
                    i(o.AGENT_CONFIG, (function (t, e) {
                        if (!t || !e)
                            return !0;
                        t.lastUpdate && q() - t.lastUpdate < _r && s.push({
                            time: t.lastUpdate,
                            key: e,
                            value: t
                        })
                    }
                    ));
                    try {
                        s.sort((function (t, e) {
                            return e.time - t.time
                        }
                        ))
                    } catch (u) { }
                    var c = n;
                    i(s, (function (t) {
                        var e = F(A(t.value));
                        if (c + e > wr)
                            return !1;
                        r[t.key] = t.value,
                            c += e
                    }
                    ))
                } else
                    i(o.AGENT_CONFIG, (function (t, e) {
                        if (!t || !e)
                            return !0;
                        t.lastUpdate && q() - t.lastUpdate < _r && (r[e] = t)
                    }
                    ));
            r[t] = e,
                yr(xe, r)
        }
    }
    function xr(t, e) {
        if (function (t) {
            return !!rn.configLoad && !!gr.localStorage && (!t || !t.config || q() - (t.lastUpdate || 0) > 6e4 * rn.configLoadInterval)
        }(e) && t) {
            var n = {
                v: "3.4.3",
                _r: q()
            };
            rn.token && (n.token = rn.token),
                rn.appKey && (n.appKey = rn.appKey),
                Nn({
                    url: "".concat(sr(), "/web-config?").concat(Kn(n)),
                    method: Te,
                    timeout: 3e4,
                    needPostCallback: !0,
                    callback: function (e) {
                        var n = Un(e);
                        if (n) {
                            var r = n.code
                                , i = n.data;
                            200 === r && l(i) && Er(t, {
                                lastUpdate: q(),
                                config: i
                            })
                        }
                    }
                })
        }
    }
    var Tr = {}
        , Sr = ["domain", "token", "key", "id", "appKey", "env", "release", "plugins"]
        , Cr = ["common", "page", "ajax", "jsError", "operation", "requestTracing", "resource", "configReload", "replay", "webVitals", "enc", "breadcrumbs"];
    function Ar(t) {
        var e = {};
        if (t) {
            var n = [te, ee, ne, re, ie];
            i(t.split(""), (function (t, r) {
                e[n[r]] = "1" === t
            }
            ))
        }
        return e
    }
    function kr(t) {
        return Rr(t, !0)
    }
    function Nr(t) {
        return Rr(t, !1)
    }
    function Or(t, e) {
        return null != t && t > 0 ? t : e
    }
    function Rr(t, e) {
        return null != t ? 1 == t : e
    }
    function Ir(t, e) {
        return null != t ? t : e
    }
    function Pr() {
        i(rn.corsDomains, (function (t) {
            return "*" !== t || (rn.apmEnableAllCorsDomains = !0,
                !1)
        }
        ));
        var t = function () {
            var t = dr()
                , e = !1
                , n = rn.beacon;
            if (rn.protocolDomainConfig && l(rn.protocolDomainConfig)) {
                var r = function (t) {
                    if (!t)
                        return null;
                    var e = t.indexOf(":");
                    return e > -1 && (t = t.substring(0, e)),
                        t
                }(t)
                    , i = r && rn.protocolDomainConfig[r];
                i && (n = i,
                    e = !0)
            }
            return ar.beacon = n,
                ar.fullPath = e,
                ar.protocol = t,
                null != ar.beacon
        }();
        return lr(),
            t
    }
    function Dr() {
        return rn
    }
    function Lr(t, e) { }
    function Br(t) {
        var e, n, r, a, o = function (t) {
            var e;
            if (t)
                return t.appKey ? e = "APPKEY_" + t.appKey : t.token && (e = "TOKEN_" + t.token),
                    e
        }(t), s = br(xe, o) || {};
        e = t,
            n = s.config,
            e || (e = {}),
            n || (n = {}),
            i(Sr, (function (t) {
                var r = n[t] || e[t];
                r && (Tr[t] = r)
            }
            )),
            i(Cr, (function (t) {
                Tr[t] = g(Tr[t] || {}, e[t], n[t])
            }
            )),
            g(rn, {
                beacon: Ir(Tr.domain),
                env: Ir(Tr.env),
                releaseId: Ir(Tr.release),
                id: Ir(Tr.id),
                key: Ir(Tr.key),
                appKey: Ir(Tr.appKey),
                token: Ir(Tr.token),
                console_debug: Nr(Tr.common.debug),
                sessionMode: Ir(Tr.common.sessionMode, we),
                sendProtocol: Ir(Tr.common.sendProtocol),
                protocolDomainConfig: Ir(Tr.common.protocolDomainConfig),
                optCustomParamRules: (r = Tr.common.paramCollection,
                    a = {},
                    i(r, (function (t) {
                        t && _(a[t.type] || [], t.key) < 0 && (a[t.type] = a[t.type] || []).push(t.key)
                    }
                    )),
                    a),
                collectAllParam: Ar(Tr.common.collectAllParams),
                sendInterval: Ir(Tr.common.sendInterval, 5e3),
                sendMaxLen: Ir(Tr.common.sendMaxLen, 10),
                sendMaxSize: Ir(Tr.common.sendMaxSize, 430080),
                routerEnable: kr(Tr.page.routerEnabled),
                routerMode: Ir(Tr.page.routerMode, "auto"),
                router_event_delay: Or(Tr.page.routerOperationDelay, 500),
                collect_noajax_hashroute: Nr(Tr.page.uploadNoAjaxHashRouter),
                fp_threshold: Ir(Tr.page.fpThreshold, 2e3),
                fs_threshold: Ir(Tr.page.fsThreshold, 4e3),
                dr_threshold: Ir(Tr.page.drThreshold, 4e3),
                le_threshold: Ir(Tr.page.leThreshold, 7e3),
                pageLoadDelay: Or(Tr.page.pageLoadDelay, 500),
                lcpAsFs: kr(Tr.page.lcpAsFs),
                monitor_dom_mutation: kr(Tr.page.mutationEnabled),
                fs_resources: Ir(Tr.page.fsResources),
                hookAjax: kr(Tr.ajax.enabled),
                hookXhr: kr(Tr.ajax.xhrEnabled),
                hookFetch: kr(Tr.ajax.fetchEnabled),
                hookMPaas: kr(Tr.ajax.mPaaSEnabled),
                hook_xhr_setrequestheader: kr(Tr.ajax.hookXhrSetRequestHeader),
                ajaxBlacklist: Ir(Tr.ajax.ignoreUrls),
                jsErrorEnabled: kr(Tr.jsError.enabled),
                errorEnabled: kr(Tr.jsError.errorEnabled),
                unhandledrejectionEnabled: kr(Tr.jsError.unhandledrejectionEnabled),
                uploadEmptyFileErrors: Nr(Tr.jsError.uploadEmptyFileErrors),
                catchAsyncCallback: Nr(Tr.jsError.catchAsyncCallback),
                hook_auto_event: kr(Tr.operation.enabled),
                hook_inline_event: kr(Tr.operation.inlineEventEnabled),
                hookOnProperty: kr(Tr.operation.onPropertyEnabled),
                hookEventListener: kr(Tr.operation.eventListenerEnabled),
                monitorRage: kr(Tr.operation.rageClickEnabled),
                inline_event_associate_threshold: Or(Tr.operation.inlineEventThreshold, 200),
                hook_cross_page: kr(Tr.operation.crossPageEnabled),
                eventResources: Ir(Tr.operation.itemUrls),
                eventResourcesIgnore: Ir(Tr.operation.ignoreItemUrls),
                eventTimeout: Ir(Tr.operation.timeout, 6e4),
                resourceAssociateThreshold: Or(Tr.operation.resourceAssociationThreshold, 100),
                resourceWaitTime: Or(Tr.operation.resourceAssociationWaitTime, 1e4),
                x_server_switch: kr(Tr.requestTracing.enabled),
                serverTiming: Nr(Tr.requestTracing.serverTimingEnabled),
                corsDomains: Ir(Tr.requestTracing.corsDomains),
                apmHeaders: Ir(Tr.requestTracing.apmHeaders),
                autoAddApmHeader: Nr(Tr.requestTracing.autoAddApmHeader),
                monitorResources: Ir(Tr.resource.keyUrls),
                hook_iframe: kr(Tr.resource.iframeEnabled),
                configLoad: kr(Tr.configReload.enabled),
                configLoadInterval: Or(Tr.configReload.expire, 10),
                replayEnabled: Nr(Tr.replay.enabled),
                replaySampleRate: Or(Tr.replay.sampleRate, -1),
                replayReportInterval: Or(Tr.replay.uploadInterval, 10),
                replayReportEveryEvents: Or(Tr.replay.uploadEveryEvents, 100),
                replayOptions: Ir(Tr.replay.options, {}),
                webVitalsEnabled: kr(Tr.webVitals.enabled),
                webVitalsLCPEnabled: kr(Tr.webVitals.lcpEnabled),
                webVitalsFIDEnabled: kr(Tr.webVitals.fidEnabled),
                webVitalsCLSEnabled: kr(Tr.webVitals.clsEnabled),
                webVitalsTTFBEnabled: kr(Tr.webVitals.ttfbEnabled),
                webVitalsFCPEnabled: kr(Tr.webVitals.fcpEnabled),
                encEnabled: Nr(Tr.enc.enabled),
                encMode: Ir(Tr.enc.mode),
                encPubKey: Ir(Tr.enc.pubKey),
                encReplayEnabled: Nr(Tr.enc.replayEnabled),
                bcEnabled: kr(Tr.breadcrumbs.enabled),
                bcConsoleEnabled: kr(Tr.breadcrumbs.consoleEnabled),
                bcDomEnabled: kr(Tr.breadcrumbs.domEnabled),
                bcFetchEnabled: kr(Tr.breadcrumbs.fetchEnabled),
                bcXhrEnabled: kr(Tr.breadcrumbs.xhrEnabled),
                bcHistoryEnabled: kr(Tr.breadcrumbs.historyEnabled),
                bcNavigationEnabled: kr(Tr.breadcrumbs.navigationEnabled),
                bcMaxCacheSize: Or(Tr.breadcrumbs.maxCacheSize, 200),
                bcParseConsoleParam: Nr(Tr.breadcrumbs.parseConsoleParam)
            });
        var c, u = Pr();
        return {
            config: Tr,
            configKey: o,
            storedConfig: s,
            valid: (c = u,
                (rn.token || rn.appKey || rn.key) && c)
        }
    }
    function Hr() {
        return K.nbsJsBridgeData.sessionId
    }
    var jr, qr = {};
    function Mr(t, e) {
        t && d(e) && (qr[t] || (qr[t] = []),
            qr[t].push(e))
    }
    function Ur(t, e) {
        t && qr[t] && 0 !== qr[t].length && i(qr[t], (function (t) {
            try {
                t(e)
            } catch (n) { }
        }
        ))
    }
    function Fr() {
        return jr
    }
    function zr(t) {
        jr = t[0],
            t[0] && (or.sid = t[0]),
            t[1] && (or.__s = +t[1])
    }
    function Yr() {
        return rn.sessionMode == we && gr.localStorage
    }
    function Gr(t) {
        t && 3 === t.length && (Bn(Vt, t.join("|")),
            zr(t))
    }
    function Jr(t, e) {
        var n = Fr()
            , r = q();
        t || (t = Y());
        var i = [t, r, r];
        Gr(i);
        var a, o = Fr();
        return Ur(Ne, {
            prev: n,
            current: o,
            init: e
        }),
            null != Hr() && (a = o,
                K.nbsJsBridgeData.sessionId = a),
            i
    }
    function Vr(t) {
        var e = function () {
            var t = Ln(Vt);
            if (t) {
                var e = t.split("|");
                return e && (e[1] = +e[1],
                    e[2] = +e[2]),
                    e
            }
            return null
        }()
            , n = !0
            , r = Hr();
        return (n = !(!e || 3 !== e.length || !e[0] || isNaN(e[1]) || isNaN(e[2])) && (null != r ? r === e[0] : q() - e[2] <= 21e5 && q() - e[1] <= 288e5)) || Jr(r, t),
        {
            session: e,
            valid: n
        }
    }
    var Kr, Wr = new m, Xr = (r(Kr = {}, at, "c"),
        r(Kr, ot, "e"),
        r(Kr, st, "a"),
        r(Kr, ut, "i"),
        r(Kr, dt, "p"),
        r(Kr, ft, "j"),
        r(Kr, _e, "event"),
        Kr), Qr = ["ps", "ss", "rs"], $r = {
            size: 0,
            q: [],
            options: null
        };
    function Zr(t, e, n) {
        var r = {
            msg: t,
            size: e,
            options: n
        };
        n.crossPage ? $r.q.unshift(r) : $r.q.push(r),
            $r.size += e,
            $r.options ? i(n, (function (t, e) {
                if (null == $r.options[e] || "query" !== e)
                    $r.options[e] = t;
                else {
                    var r = $r.options.query;
                    i(n.query, (function (t, e) {
                        _(Qr, e) > -1 ? null == r[e] ? r[e] = t : r[e] += t : r[e] = t
                    }
                    ))
                }
            }
            )) : $r.options = n
    }
    function ti(t) {
        var e = Ke({
            type: at,
            _debug: g(t || {}, an)
        }, We());
        return K.opt_custom_param && (e.optCustomParam = K.opt_custom_param),
            e
    }
    function ei(t, e) {
        if (t && t.type) {
            (e = e || {}).query = e.query || {};
            var n = 1 === e.query.ps;
            try {
                e.cb && (e.cb.call(null, t),
                    delete e.cb)
            } catch (a) { }
            var r = ni(t) + A(t)
                , i = F(r);
            return $r.size + i >= rn.sendMaxSize ? (ri({
                tr: "size"
            }),
                void Zr(r, i, e)) : $r.q.length + 1 >= rn.sendMaxLen ? (Zr(r, i, e),
                    void ri({
                        tr: "len"
                    })) : n ? (Zr(r, i, e),
                        void ri({
                            tr: "page"
                        })) : void Zr(r, i, e)
        }
    }
    function ni(t) {
        var e = Xr[t.type];
        return e || (e = t.type),
            e
    }
    function ri(t) {
        if (0 !== $r.q.length) {
            var e, n;
            Yr() && (e = Vr(!1),
                n = e.session,
                e.valid && (n[2] = q(),
                    Gr(n)));
            var r = $r.q
                , a = $r.options
                , o = a.requestInfo;
            o || (o = ur()),
                g(o.query, a.query || {}, {
                    __r: q()
                }),
                o.path = "/action";
            var s = a.commonActionInfoMessage ? a.commonActionInfoMessage : ti(t)
                , c = ni(s) + A(s)
                , u = F(c)
                , d = r
                , l = !1;
            if ($r.size + u >= rn.sendMaxSize) {
                for (var f = u, p = []; r.length > 0;) {
                    var h = r[0];
                    if (!h)
                        break;
                    var m = f + h.size;
                    if (!(m < rn.sendMaxSize))
                        break;
                    p.push(r.shift()),
                        f = m
                }
                p.length > 0 && (d = p,
                    l = !0)
            }
            o.data = [c],
                i(d, (function (t) {
                    t.msg && o.data.push(t.msg)
                }
                ));
            var v = function (t) {
                var e = t.beacon
                    , n = t.path
                    , r = t.query;
                return Wn("".concat(e).concat(n), r)
            }(o)
                , y = o.data.join("\n");
            console.log(v);
            console.log(y);
            In.emit("send", {
                url: v,
                body: y,
                type: "action"
            }),
                $r.q = [],
                $r.size = 0,
                $r.options = null,
                l && i(r, (function (t) {
                    Zr(t.msg, t.size, t.options)
                }
                ))
        }
    }
    var ii, ai, oi = [st, ct, ut, pt];
    function si(t, e) {
        i(t, (function (t) {
            i(e, (function (e) {
                t.cid === e.id && (t.state || (t.state = e.state),
                    e.items && e.items.length > 0 && (t.items = e.items))
            }
            ))
        }
        )),
            i(e, (function (t) {
                si(t.items, t.children)
            }
            ))
    }
    function ci(t) {
        var e;
        t = t || {},
            this.id = ++K.uniqueId,
            this.parent = t.parent || null,
            this.children = [],
            this.name = t.name || "",
            this.type = t.type || ot,
            this.subType = this.type === ot ? t.subType || "click" : t.subType,
            this.items = [],
            this.remain = (e = {},
                i(oi, (function (t) {
                    e[t] = {
                        current: 0,
                        children: 0
                    }
                }
                )),
                e),
            this.s = t.s || q(),
            this.e = null,
            this.data = t.data,
            this.state = "pending",
            this.crossPage = t.crossPage || !1,
            this.postComposer = [],
            this.endLock = t.endLock,
            this.registerTimeout(),
            this.closed = !1,
            this.isTimeout = !1,
            this.cleared = !1,
            this.stateChanged = !1,
            this.actionCount = {
                ajax: this.type === st ? 1 : 0,
                iframe: this.type === ut ? 1 : 0
            },
            this.sent = !1,
            this.sendOptions = {},
            this.spe = null,
            null != this.parent && this.parent.children.push(this),
            this.eventData = null,
            this.resource = {
                handler: {},
                statistic: {},
                record: {
                    timeout: [],
                    error: []
                }
            },
            this._ctx = {}
    }
    function ui(t) {
        var e = Fr()
            , n = {
                id: t || Y(),
                time: q()
            };
        !function (t) {
            zr([t.id, t.startTime])
        }(n);
        var r = Fr();
        return Ur(Ne, {
            prev: e,
            current: r,
            init: !1
        }),
            n
    }
    function di() {
        var t, e;
        Yr() && (t = Vr(!0),
            e = t.session,
            t.valid && Gr(e))
    }
    function li(t) {
        this.data = [],
            this.maxSize = t.maxSize
    }
    function fi(t) {
        rn.bcEnabled && t && t.category && (t.timestamp || (t.timestamp = q()),
            t.type || (t.type = "default"),
            t.level || (t.level = "info"),
            t.message || (t.message = ""),
            ii.add(t))
    }
    function pi() {
        return window.TINGYUN && window.TINGYUN.inited
    }
    function hi(t) {
        return ai.call(t)
    }
    function mi(t) {
        var e = {}
            , n = t.split(":");
        if (!n)
            return e;
        if (1 === n.length)
            e.filename = n[0],
                e.lineno = 0,
                e.colno = 0,
                e.resolveLevel = 1;
        else if (n.length >= 2) {
            var r, i = n[n.length - 1], a = n[n.length - 2], o = !isNaN(+i), s = !isNaN(+a);
            o && s ? (r = 2,
                e.lineno = +a,
                e.colno = +i,
                e.resolveLevel = 3) : o ? (r = 1,
                    e.lineno = +i,
                    e.colno = 0,
                    e.resolveLevel = 2) : (r = 0,
                        e.lineno = 0,
                        e.colno = 0,
                        e.resolveLevel = 1),
                e.filename = (n.slice(0, n.length - r) || []).join(":")
        }
        return e
    }
    function vi(t) {
        if (t) {
            var e, n = {};
            return i(t.split(/\n/), (function (t) {
                var r = function (t) {
                    if (t && (t = hi(t))) {
                        var e;
                        if (0 === t.indexOf("at ")) {
                            var n = t.indexOf("(")
                                , r = t.indexOf(")");
                            if (n > -1 && r > -1) {
                                var i = n + 1;
                                i > r && (i = r);
                                var a = t.substring(i, r);
                                a && (e = mi(a))
                            } else {
                                var o = t.split(" ")
                                    , s = o[o.length - 1];
                                s && (e = mi(s))
                            }
                        } else if (t.indexOf("@") > -1) {
                            var c = t.split("@");
                            c[1] && (e = mi(c[1]))
                        }
                        return e
                    }
                }(t);
                if (!r)
                    return !0;
                var i = r.resolveLevel;
                if (3 === i) {
                    if (r.filename && r.lineno > 0 && r.colno > 0)
                        return e = r,
                            !1
                } else
                    n[i] || (n[i] = r)
            }
            )),
                e || (e = n[2] || n[1]),
                e
        }
    }
    ci.prototype.end = function (t) {
        var e;
        this.closed ? !this.cleared && rn.console_debug && console.warn("Current context is already closed") : (t && (this.actionCount.ajax += t.actionCount.ajax,
            this.actionCount.iframe += t.actionCount.iframe,
            function (t, e) {
                i(t, (function (t) {
                    t.cid === e.id && e.items && e.items.length > 0 && (t.items = e.items)
                }
                ))
            }(this.items, t),
            this.updateRemain(-1, t.type)),
            this.endLock || (this.isNoRemain() || this.isTimeout) && (this.e = q(),
                this.closed = !0,
                this.i && clearTimeout(this.i),
                this.e - this.s > rn.eventTimeout && (this.isTimeout = !0),
                this.setState(this.isTimeout ? gt : vt),
                this.data && (this.data.state = this.state),
                this.parent ? this.parent.end(this) : (this.isTimeout && (this.isRemainMeaningfulAction() || this.isMeaningfulAction()) ? e = this.composeTimeoutActionData() : this.isMeaningfulAction() && (e = this.composeActionData()),
                    e && (this.eventData = e,
                        this.spe && this.buildEventDataWithSpe(),
                        this.send()),
                    K.context = null)))
    }
        ,
        ci.prototype.isNoRemain = function (t) {
            t = t || {};
            var e = !0;
            return i(this.remain, (function (n, r) {
                return !!(t.ignoreFields && _(t.ignoreFields, r) > -1) || (n.current <= 0 && (!!t.testCurrent || n.children <= 0) ? void 0 : (e = !1,
                    !1))
            }
            )),
                e
        }
        ,
        ci.prototype.clear = function () {
            this.closed = !0,
                this.cleared = !0,
                this.i && clearTimeout(this.i)
        }
        ,
        ci.prototype.isMeaningfulAction = function () {
            return this.actionCount.ajax > 0 || this.actionCount.iframe > 0 || this.type === dt
        }
        ,
        ci.prototype.isRemainMeaningfulAction = function () {
            return this.remain.ajax.current > 0 || this.remain.ajax.children > 0 || this.remain.iframe.current > 0 || this.remain.iframe.children > 0
        }
        ,
        ci.prototype.timeout = function () {
            this.isTimeout = !0,
                this.setState(gt),
                this.end(null, !0)
        }
        ,
        ci.prototype.setData = function (t) {
            this.data || (this.data = {}),
                g(this.data, t || {})
        }
        ,
        ci.prototype.composeActionData = function () {
            var t = g({}, this.data || {});
            return this.items && this.items.length > 0 && (t.items = (this.items || []).slice()),
            {
                type: this.type,
                subType: this.subType,
                start: this.s,
                end: this.e,
                duration: this.e - this.s > 0 ? this.e - this.s : 0,
                data: t
            }
        }
        ,
        ci.prototype.composeTimeoutActionData = function () {
            return this.collectActionDataFromTop(),
                this.composeActionData()
        }
        ,
        ci.prototype.collectActionDataFromTop = function () {
            si(this.items, this.children)
        }
        ,
        ci.prototype.collectCrossPageData = function (t) {
            if (t || (t = []),
                this.crossPage = !0,
                this.data && (this.data.crossPage = !0),
                t.unshift(this.data),
                this.parent)
                return this.parent.collectCrossPageData(t);
            var e = {
                type: this.type,
                subType: this.subType,
                start: this.s
            };
            return (this.isNoRemain() || 1 === this.children.length) && this.clear(),
            {
                action: e,
                data: t,
                requestInfo: ur(),
                commonActionInfo: ti(),
                fromUrl: or.ref
            }
        }
        ,
        ci.prototype.canEnd = function (t) {
            return !this.closed && this.isNoRemain(g({
                testCurrent: !0
            }, t))
        }
        ,
        ci.prototype.updateRemain = function (t, e) {
            if (this.remain[e]) {
                e || (e = st);
                var n = t || 0;
                this.remain[e].current = this.remain[e].current + n;
                for (var r = this.parent; r;)
                    r.remain[e].children = r.remain[e].children + n,
                        r = r.parent
            }
        }
        ,
        ci.prototype.setState = function (t) {
            return !this.stateChanged && (this.state = t,
                this.stateChanged = !0,
                !0)
        }
        ,
        ci.prototype.current = function () {
            return K.context
        }
        ,
        ci.prototype.buildEventDataWithSpe = function () {
            if (this.spe && this.eventData && this.eventData.data) {
                var t = this.spe.xhrs;
                this.spe.hasAjax = t && t.length > 0,
                    delete this.spe.xhrs,
                    this.eventData.data.spe = this.spe
            }
        }
        ,
        ci.prototype.setSpe = function (t) {
            if (t)
                return this.spe = t,
                    this.sent
        }
        ,
        ci.prototype.send = function () {
            var t = this;
            if (!this.sent) {
                var e = {};
                this.spe && (e.query = {
                    ss: 1
                },
                    this.spe.type === Xt && (e.query.rs = 1)),
                    this.postComposer.length > 0 && i(this.postComposer, (function (e) {
                        e.call(null, t)
                    }
                    )),
                    this.setSendOptions(e),
                    ei(this.eventData, this.sendOptions),
                    this.sent = !0
            }
        }
        ,
        ci.prototype.addResource = function (t, e) {
            var n = this;
            if (t && !t[me]) {
                var r = {
                    start: e,
                    name: t.src || "",
                    type: t.nodeName ? t.nodeName.toLowerCase() : "",
                    timeout: !1,
                    load: !1,
                    error: !1,
                    finished: !1
                }
                    , i = Y();
                t[me] = i,
                    this.resource.handler[i] = r,
                    this.addResourceStatstic("total", t.src),
                    this.updateRemain(1, pt),
                    r.timerId = U((function () {
                        var e = n.resource.handler[i];
                        e && !e.finished && (n.addResourceStatstic("timeout", t.src),
                            e.timeout = !0,
                            e.finished = !0,
                            n.updateRemain(-1, pt),
                            n.end())
                    }
                    ), rn.resourceWaitTime),
                    r.handler = function (e) {
                        var r = n.resource.handler[i];
                        if (r && !r.finished) {
                            clearTimeout(r.timerId),
                                n.updateRemain(-1, pt);
                            try {
                                n.addResourceStatstic(e.type, t.src),
                                    r[e.type] = !0
                            } catch (e) { }
                            r.finished = !0,
                                n.end()
                        }
                    }
                    ,
                    0 !== r.name.indexOf("data:image/") ? (t.addEventListener("load", r.handler),
                        t.addEventListener("error", r.handler)) : r.handler({
                            type: "load"
                        })
            }
        }
        ,
        ci.prototype.addResourceStatstic = function (t, e, n) {
            this.resource.statistic[t] || (this.resource.statistic[t] = {}),
                this.resource.statistic[t][e] || (this.resource.statistic[t][e] = 0),
                this.resource.statistic[t][e] += n || 1
        }
        ,
        ci.prototype.hasChildType = function (t) {
            var e = !1;
            return i(this.children, (function (n) {
                if (n.type === t)
                    return e = !0,
                        !1
            }
            )),
                e
        }
        ,
        ci.buildImmediateAction = function (t, e, n, r) {
            var i = g({
                type: t,
                state: "finish"
            }, (r = r || {}).actionOptions || {});
            return e && (i.subType = e),
                n && (i.data = n),
                i.data && (i.data.state = i.state),
                r.notSend || ei(i, r.sendOptions),
                i
        }
        ,
        ci.getRootContext = function (t, e) {
            if (!t && !d(e))
                return null;
            for (; t;) {
                if (null == t.parent && e.call(null, t))
                    return t;
                t = t.parent
            }
            return null
        }
        ,
        ci.containContext = function (t, e) {
            if (!t && !d(e))
                return !1;
            for (; t;) {
                if (e.call(null, t))
                    return !0;
                t = t.parent
            }
            return !1
        }
        ,
        ci.prototype.toJSON = function () {
            return undefined
        }
        ,
        ci.prototype.setSendOptions = function (t) {
            this.sendOptions || (this.sendOptions = {}),
                g(this.sendOptions, t)
        }
        ,
        ci.prototype.registerTimeout = function () {
            var t = this;
            null == this.parent && this.type !== dt && (this.i = U((function () {
                t.timeout()
            }
            ), rn.eventTimeout))
        }
        ,
        ci.prototype.addPostComposer = function (t) {
            this.postComposer.push(t)
        }
        ,
        li.prototype.add = function (t) {
            t && (this.data.length === this.maxSize && this.data.shift(),
                this.data.push(t))
        }
        ,
        li.prototype.getAll = function () {
            return this.data
        }
        ,
        ai = String.prototype.trim ? String.prototype.trim : function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        ;
    var gi = 0
        , yi = {}
        , bi = {};
    function wi(t) {
        this.limit = t,
            this.reset()
    }
    wi.prototype = {
        add: function (t, e) {
            this.len > this.limit || this.get(t) || (this.c[t] = e,
                this.len++)
        },
        get: function (t) {
            return this.c[t]
        },
        reset: function () {
            this.c = {},
                this.len = 0
        }
    };
    var _i = new wi(100);
    function Ei(t, e, n, r, i, a, o, s, c) {
        var u = this;
        u.id = t,
            u.time = q(),
            u.msg = e,
            u.lineno = r,
            u.colno = i,
            u.filename = n,
            u.count = 1,
            u.stack = a && a.stack || "",
            u.module = o,
            u.trigger = s || De,
            u.error = a,
            u.category = c,
            u.fix();
        var d = function (t, e, n, r, i) {
            return String(t) + String(e) + String(n) + String(r) + String(i)
        }(e, r, i, o, c)
            , l = yi[d];
        u.ep = l ? 0 : 1,
            yi[d] = !0,
            u.fep = 0,
            u.trace = {},
            this.recordFileName()
    }
    function xi() {
        var t, e, n = (t = _i.c,
            e = [],
            i(t, (function (t) {
                e.push(t.toObject())
            }
            )),
            e);
        if (n && n.length) {
            var r = 0;
            try {
                r = parseInt((q() - (J.pfStart || w)) / 1e3)
            } catch (o) { }
            var a = {
                fu: gi || gi++,
                os: r
            };
            ci.buildImmediateAction(ft, null, null, {
                actionOptions: g(a, {
                    items: n
                })
            }),
                _i.reset()
        }
    }
    function Ti(t, e, n, r, i, a, o) {
        if (e || rn.uploadEmptyFileErrors) {
            var s = i && i.moduleId
                , c = "js";
            try {
                o && o.category && ("js" !== o.category && "other" !== o.category || (c = o.category),
                    delete o.category)
            } catch (h) { }
            var u = function (t, e, n, r, i, a) {
                return String(t) + String(e) + String(n) + String(r) + String(i) + String(a)
            }(e, t, n, r, s, c)
                , d = _i.get(u);
            d ? d.increase() : (d = new Ei(u, t, e, n, r, i, s, a, c),
                _i.add(u, d),
                In.errs && In.errs.push(d));
            var l = d.initTraceInstance();
            d.triggerActionHook(l);
            var f = l.scope;
            if (o)
                try {
                    if (f) {
                        var p = o;
                        o.breadcrumbs ? (f.setBreadcrumbs(o.breadcrumbs),
                            p = o.contexts) : o.contexts && (p = o.contexts),
                            f.setContext(p)
                    }
                } catch (h) { }
            return f.setBreadcrumbs(function () {
                if (ii) {
                    var t = ii.getAll();
                    if (0 !== t.length)
                        return t
                }
            }()),
                d.trace[l.id] = {
                    time: l.time,
                    scope: l.scope
                },
                l.id
        }
    }
    function Si(t, e, n) {
        if (pi() && rn.jsErrorEnabled && t) {
            var r = t.message || ""
                , i = t.stack
                , a = t.fileName || ""
                , o = t.lineNumber || 0
                , s = t.columnNumber || 0;
            if (i && (!a || o <= 0 || s <= 0)) {
                var c = vi(i);
                c && (a = c.filename,
                    o = c.lineno,
                    s = c.colno)
            }
            return Ti(r, a, o, s, {
                stack: i
            }, n || Le, e)
        }
    }
    function Ci(t) {
        return d(t) ? t.apply(this) : t
    }
    function Ai(t) {
        if (pi() && t && l(t)) {
            var e = t.name
                , n = t.msg
                , r = t.status
                , i = t.context
                , a = Ci(e)
                , o = Ci(n)
                , s = Ci(r)
                , c = Ci(i)
                , u = {
                    type: _e,
                    name: a,
                    time: q()
                };
            u.name && (o && (u.msg = o),
                s && (u.status = s),
                c && l(c) && (u.scope = {
                    contexts: c
                }),
                ci.buildImmediateAction(_e, null, u),
                Qn("userEvent"))
        }
    }
    function ki(t, e) {
        var n;
        return t && (n = !0,
            i(t, (function () {
                return n = !1
            }
            ), e)),
            !!n
    }
    function Ni(t) {
        var e = {}
            , n = function (t) {
                var e = zn(t);
                return {
                    queryObj: Jn(e),
                    queryString: e
                }
            }(t)
            , r = n.queryObj
            , i = n.queryString;
        return r && (e[1] = Di(r, rn.optCustomParamRules[1], !0)),
        {
            optCustomParams: Ii(e),
            operaAllParam: i
        }
    }
    Ei.prototype = {
        increase: function () {
            this.recordFileName(),
                this.count++
        },
        recordFileName: function () {
            var t = this.filename || "_";
            this.fep += bi[t] ? 0 : 1,
                bi[t] = !0
        },
        fix: function () {
            var t = this.stack;
            if (t && c(t)) {
                t = t.split(/\n/);
                var e = [];
                i(t, (function (t, n) {
                    -1 == t.indexOf("__ty_asyncWrap__") && e.push(t)
                }
                )),
                    this.stack = e.join("\n")
            }
        },
        getErrorOverview: function () {
            var t = this;
            return {
                o: t.time,
                e: t.msg,
                l: t.lineno,
                c: t.colno,
                r: t.filename,
                ec: t.count,
                s: t.stack,
                m: t.module,
                ep: t.ep,
                fep: t.fep,
                tr: t.trigger,
                cat: t.category
            }
        },
        toObject: function () {
            var t = this.getErrorOverview()
                , e = {};
            return i(this.trace, (function (t, n) {
                e[n] = Ke({
                    time: t.time
                }, t.scope)
            }
            )),
                t.trace = e,
                t
        },
        initTraceInstance: function () {
            return {
                id: Y(),
                time: q(),
                scope: new Ge
            }
        },
        triggerActionHook: function (t) {
            if (t) {
                var e = g(this.getErrorOverview(), {
                    id: t.id,
                    o: t.time
                });
                ze({
                    type: oe,
                    name: le,
                    args: {
                        target: this.error,
                        actionData: e
                    },
                    scope: t.scope
                }),
                    e.id && (t.id = e.id)
            }
        }
    };
    var Oi = {};
    function Ri(t) {
        return (t += "") && t.substr(0, 128) || ""
    }
    function Ii(t) {
        var e = {};
        return i(t, (function (t, n) {
            ki(t) || (e[n] = t)
        }
        )),
            ki(e) ? void 0 : e
    }
    function Pi(t, e) {
        return i(e, (function (e, n) {
            t[n] = g({}, t[n] || {}, e || {})
        }
        )),
            t
    }
    function Di(t, e, n) {
        var r = {};
        return t && e && e.length && e.length > 0 && i(e, (function (e) {
            var a = t[e];
            if (null != a)
                Fn(r, e, a);
            else if (n) {
                var o = function (t, e) {
                    var n = t + "." + e;
                    if (Oi[n])
                        return Oi[n];
                    var r = (e || "").split(".")
                        , a = "";
                    e && 0 !== e.indexOf("[") && (a = ".");
                    var o, s = t;
                    i(r, (function (t, e) {
                        0 === e && (s += a),
                            t.indexOf("-") > -1 && 0 !== t.indexOf("[") && t.indexOf("]") !== t.length - 1 ? s += "['" + t + "']" : s += (e > 0 ? "." : "") + t
                    }
                    ));
                    try {
                        o = new Function(t, "try{return " + s + ";}catch(e){}return null;")
                    } catch (c) {
                        o = j
                    }
                    return Oi[n] = o,
                        o
                }("reqBody", e);
                null != (a = o(t)) && Fn(r, e, a)
            }
        }
        )),
            r
    }
    var Li = !0
        , Bi = {
            start: w,
            e: {}
        };
    function Hi(t) {
        Li && t()
    }
    function ji(t, e) {
        if (!e)
            try {
                e = window.performance.timing.navigationStart
            } catch (n) { }
        return e || (e = w),
            Math.round((e || 0) + (t || 0))
    }
    function qi(t) {
        try {
            return t > 1e12
        } catch (e) { }
        return !1
    }
    var Mi = [];
    function Ui(t) {
        var e = t.timeStamp;
        if (e)
            return (qi(e) ? q() : window.performance && d(window.performance.now) ? window.performance.now() : q() - ji()) - e
    }
    function Fi(t) {
        Mi.push({
            cb: t
        })
    }
    function zi() {
        L(window, "pageshow", (function (t) {
            var e;
            t && t.persisted && (e = t,
                i(Mi, (function (t) {
                    t.cb(e)
                }
                )))
        }
        ), !0)
    }
    var Yi = {};
    function Gi(t, e) {
        Yi[Y()] = {
            cb: t,
            once: e
        }
    }
    var Ji = -1;
    function Vi(t) {
        try {
            var e = [];
            i(Yi, (function (n, r) {
                var i = n.cb
                    , a = n.once;
                i && i(t),
                    a && e.push(r)
            }
            )),
                i(e, (function (t) {
                    delete Yi[t]
                }
                ))
        } catch (t) { }
    }
    function Ki() {
        Ji = "hidden" === document.visibilityState ? 0 : Infinity,
            Gi((function (t) {
                var e = t.timeStamp;
                e && (Ji = e)
            }
            ), !0)
    }
    function Wi() {
        return Ji
    }
    function Xi(t) {
        if (window.requestAnimationFrame)
            try {
                window.requestAnimationFrame((function () {
                    try {
                        window.requestAnimationFrame(t)
                    } catch (e) { }
                }
                ))
            } catch (e) { }
        else
            hn(t)
    }
    function Qi(t, e) {
        try {
            if (!window.PerformanceObserver || _(window.PerformanceObserver.supportedEntryTypes, t) < 0)
                return;
            if ("first-input" === t && !("PerformanceEventTiming" in window))
                return;
            var n = new PerformanceObserver((function (t) {
                i(t.getEntries(), (function (t) {
                    e(t)
                }
                ))
            }
            ));
            return n.observe({
                type: t,
                buffered: !0
            }),
                n
        } catch (r) { }
    }
    var $i, Zi = {};
    function ta(t, e, n) {
        if (e && !(e <= 0)) {
            Zi[t] || (Zi[t] = {
                value: 0
            });
            var r = Zi[t];
            r.value = e,
                n && (n.entry ? (r.entries || (r.entries = []),
                    r.entries.push(n.entry)) : n.entries && (r.entries = n.entries))
        }
    }
    function ea(t) {
        t.startTime < Wi() && ta(Oe, t.startTime, {
            entry: t
        })
    }
    function na() {
        try {
            if (!$i)
                return;
            i($i.takeRecords(), (function (t) {
                ea(t)
            }
            )),
                $i.disconnect()
        } catch (t) { }
    }
    function ra(t) {
        t || (t = {});
        var e = t
            , n = e.wd
            , r = e.startTime;
        n || (n = window);
        var i = n.performance || {}
            , a = i.timing;
        return r || (r = a && a.navigationStart ? a.navigationStart : w),
            g(t, {
                wd: n,
                performance: i,
                timing: a,
                startTime: r
            })
    }
    function ia(t, e) {
        var n, r = ra(e), i = r.timing, a = r.startTime, o = r.ifr, s = 0;
        i && (s = i.domContentLoadedEventStart || i.domInteractive || i.domLoading || s,
            n = 1),
            s <= 0 && !o && (In.domContentLoadedEventStart ? (s = In.domContentLoadedEventStart,
                n = 2) : (s = In._end,
                    n = 3));
        var c = s - a;
        c < 0 && (c = t.metric.fp,
            n = 0),
            t.metric.dr = Math.round(c),
            t.debug.dr = n
    }
    var aa = 0
        , oa = 0
        , sa = [];
    function ca(t) {
        var e;
        t || (t = window);
        try {
            e = t.performance && t.performance.getEntriesByName && t.performance.getEntriesByName("first-contentful-paint")[0]
        } catch (n) { }
        return e
    }
    var ua, da, la = null, fa = [], pa = {
        passive: !0,
        capture: !0
    }, ha = ["mousedown", "keydown", "touchstart", "pointerdown"];
    function ma(t, e) {
        try {
            if (la)
                return;
            la = e,
                ua = t,
                da = q(),
                ga(B),
                ya()
        } catch (e) { }
    }
    function va(t) {
        try {
            if (!t.cancelable || !t.timeStamp)
                return;
            var e = (qi(t.timeStamp) ? q() : performance.now()) - t.timeStamp;
            "pointerdown" == t.type ? function (t, e) {
                var n = function () {
                    ma(t, e),
                        i()
                }
                    , r = function () {
                        i()
                    }
                    , i = function () {
                        try {
                            B("pointerup", n, pa),
                                B("pointercancel", r, pa)
                        } catch (e) { }
                    };
                L("pointerup", n, pa),
                    L("pointercancel", r, pa)
            }(e, t) : ma(e, t)
        } catch (t) { }
    }
    function ga(t) {
        i(ha, (function (e) {
            t(document, e, va, pa)
        }
        ))
    }
    function ya() {
        if (!(ua < 0 || ua >= da - w)) {
            var t = {
                entryType: "first-input",
                name: la.type,
                target: la.target,
                cancelable: la.cancelable,
                startTime: la.timeStamp,
                processingStart: la.timeStamp + ua,
                polyfill: !0
            };
            i(fa, (function (e) {
                e(t)
            }
            )),
                fa = []
        }
    }
    function ba() {
        if (rn.webVitalsFIDEnabled) {
            var t = function (t) {
                try {
                    if (t.startTime < Wi())
                        ta("fid", t.processingStart - t.startTime, {
                            entry: t
                        })
                } catch (e) { }
            }
                , e = Qi("first-input", t);
            e && (Gi((function () {
                try {
                    i(e.takeRecords(), (function (e) {
                        t(e)
                    }
                    )),
                        e.disconnect()
                } catch (n) { }
            }
            ), !0),
                Fi((function () {
                    !function (t) {
                        try {
                            fa = [],
                                ua = -1,
                                la = null,
                                ga(L),
                                fa.push(t),
                                ya()
                        } catch (e) { }
                    }(t)
                }
                )))
        }
    }
    function wa(t) {
        rn.webVitalsTTFBEnabled && function () {
            try {
                if (!window.performance)
                    return;
                var t = 0;
                window.performance.getEntriesByType && (t = window.performance.getEntriesByType("navigation")[0].responseStart),
                    t <= 0 && window.performance.timing && (t = window.performance.timing.responseStart - window.performance.timing.navigationStart),
                    t <= 0 && (t = 0),
                    ta("ttfb", t)
            } catch (e) { }
        }();
        var e = Zi;
        if (e.fcp || delete e.cls,
            rn.webVitalsLCPEnabled || delete e.lcp,
            rn.webVitalsFCPEnabled || delete e.fcp,
            !ki(e)) {
            if (t)
                return e;
            var n = {};
            return i(e, (function (t, e) {
                n[e] = {
                    value: t.value
                }
            }
            )),
                n
        }
    }
    function _a(t) {
        var e = function (t) {
            return Zi[t]
        }(t);
        return e ? e.value : void 0
    }
    function Ea() {
        if (rn.webVitalsEnabled && un())
            try {
                ($i = Qi("largest-contentful-paint", ea)) && (i(["keydown", "click"], (function (t) {
                    L(document, t, na, {
                        once: !0,
                        capture: !0
                    })
                }
                )),
                    Gi(na, !0),
                    Fi((function (t) {
                        Xi((function () {
                            try {
                                ta(Oe, Ui(t))
                            } catch (e) { }
                        }
                        ))
                    }
                    ))),
                    ba(),
                    function () {
                        if (rn.webVitalsCLSEnabled) {
                            var t = function (t) {
                                try {
                                    if (t.hadRecentInput)
                                        return;
                                    var e = sa[0]
                                        , n = sa[sa.length - 1];
                                    oa && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (oa += t.value,
                                        sa.push(t)) : (oa = t.value,
                                            sa = [t]),
                                        oa > aa && ta("cls", aa = oa, {
                                            entries: sa
                                        })
                                } catch (r) { }
                            }
                                , e = Qi("layout-shift", t);
                            e && (Gi((function () {
                                try {
                                    i(e.takeRecords(), (function (e) {
                                        t(e)
                                    }
                                    ))
                                } catch (n) { }
                            }
                            )),
                                Fi((function () {
                                    aa = 0,
                                        [],
                                        oa = 0,
                                        sa = []
                                }
                                )))
                        }
                    }(),
                    function () {
                        var t, e = function (e) {
                            try {
                                if ("first-contentful-paint" !== e.name)
                                    return;
                                t && t.disconnect(),
                                    e.startTime < Wi() && ta(Re, e.startTime)
                            } catch (n) { }
                        }, n = ca();
                        n ? e(n) : t = Qi("paint", e),
                            Fi((function (t) {
                                Xi((function () {
                                    try {
                                        ta(Re, Ui(t))
                                    } catch (e) { }
                                }
                                ))
                            }
                            ))
                    }()
            } catch (t) { }
    }
    function xa(t, e) {
        var n, r = ra(e), a = r.performance, o = r.timing, s = r.startTime, c = r.wd, u = r.ifr, d = 0, l = 0;
        if (u) {
            var f = ca(c);
            f && (l = f.startTime)
        } else
            l = _a(Re);
        if (l > 0 ? (d = l,
            n = 1) : a.getEntriesByName && o ? (d = o.domLoading,
                i(J.resources, (function (t) {
                    var e = a.getEntriesByName(t);
                    if (1 === e.length) {
                        var n = e[0].responseEnd;
                        n > d && (d = n)
                    }
                }
                )),
                d -= s,
                n = 4) : c.TINGYUN && c.TINGYUN.__tagFirstPaintTime && ((d = c.TINGYUN.__tagFirstPaintTime - s) < 0 && (d = 0),
                    n = 5),
            !d || d <= 0) {
            if (c.chrome && c.chrome.loadTimes) {
                var p = c.chrome.loadTimes();
                p && p.firstPaintTime && (d = 1e3 * p.firstPaintTime - s,
                    n = 2)
            } else
                o && o.msFirstPaint && (d = o.msFirstPaint - s,
                    n = 3);
            (!d || d <= 0) && (d = 0,
                n = 0)
        }
        t.metric.fp = Math.round(d),
            t.debug.fp = n
    }
    function Ta(t) {
        return gr.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function (t) {
            for (; t && 1 === t.nodeType;) {
                if ("none" === Sa(t) || "hidden" === t.type)
                    return !0;
                t = t.parentNode
            }
            return !1
        }(t)
    }
    function Sa(t) {
        return t.style && t.style.display
    }
    function Ca(t, e) {
        var n = ra(e)
            , r = n.performance
            , a = n.timing
            , o = n.startTime
            , s = n.ifr
            , c = n.wd
            , u = t.metric.fp
            , l = u || 0
            , f = 5
            , p = 0;
        if (s || (p = _a(Oe)),
            rn.lcpAsFs && p > 0)
            l = p,
                f = 1;
        else if (!s && J.lcpStopTime)
            l = J.lcpStopTime - o,
                f = 2;
        else if (function () {
            var t = !0;
            document.createElement("img").getBoundingClientRect || (t = !1);
            return t
        }()) {
            var h = s ? [] : J.imageResources || []
                , m = c.innerHeight
                , v = c.innerWidth;
            m || (m = c.document.documentElement.clientHeight),
                v || (v = c.document.documentElement.clientWidth);
            var g = [];
            h.length > 0 ? i(h, (function (t) {
                Aa(t.element, m, v) && g.push(t)
            }
            )) : d(r.getEntriesByName) && i(c.document.querySelectorAll("img"), (function (t) {
                Aa(t, m, v) && g.push({
                    element: t
                })
            }
            ));
            var y = (a && a.loadEventEnd || In.loadEventEnd) - o;
            i(g, (function (e) {
                if (e.loadTime) {
                    var n = e.loadTime - o;
                    n > l && (l = n,
                        t.__fs = 4)
                } else if (e.element && e.element.src) {
                    var i = r.getEntriesByName(e.element.src);
                    if (i && i.length) {
                        var a = i[0];
                        if (a) {
                            var s = a.responseEnd;
                            a.fetchStart <= y && s > l && (l = s,
                                t.__fs = 3)
                        }
                    }
                }
            }
            ))
        }
        l <= u && (f = 5,
            (l = u || 0) <= 0 && (l = 0,
                f = 0)),
            t.metric.fs = Math.round(l),
            t.debug.fs = f
    }
    function Aa(t, e, n) {
        return t.src && function (t) {
            if (!t)
                return !1;
            if (!rn.fs_resources || 0 === rn.fs_resources.length)
                return !0;
            var e = !1;
            return i(rn.fs_resources, (function (n) {
                if (t.indexOf(n) > -1)
                    return e = !0,
                        !1
            }
            )),
                e
        }(t.src) && function (t, e, n) {
            if (t) {
                var r = window.pageYOffset;
                if (t.top + (0 === r ? 0 : r || document.scrollTop || 0) - (document.clientTop || 0) >= e)
                    return !1;
                var i = t.left;
                return i >= 0 && i < n
            }
            return !1
        }(function (t) {
            if (un())
                return d(t.getBoundingClientRect) ? t.getBoundingClientRect() : undefined;
            var e;
            try {
                e = t.getBoundingClientRect ? t.getBoundingClientRect() : undefined
            } catch (n) { }
            return e
        }(t), e, n) && !Ta(t)
    }
    function ka(t, e) {
        var n = t.metric;
        n.loadEventEnd = n.le;
        var r = ra(e)
            , i = r.timing
            , a = r.startTime
            , o = r.context
            , s = r.ifr
            , c = 0;
        if (o && o.hasChildType(st))
            c = q() - a;
        else {
            var u, d = i && i.loadEventEnd;
            u = s ? d || q() : d || In.loadEventEnd || q();
            var l = 0;
            a > 0 && u > a && (l = u - a);
            var f = [n.fs, n.dr, n.fp, l];
            c = Math.max.apply(null, f)
        }
        n.le = Math.round(c)
    }
    function Na(t) {
        return t.loadEventEnd || t._end
    }
    function Oa(t) {
        var e = t.fp || 0
            , n = 0
            , r = window.performance && window.performance.timing && window.performance.timing.navigationStart;
        return r || (r = w,
            e = 0),
            (n = q() - r - e) < 0 && (n = 0),
            n
    }
    function Ra(t) {
        var e = {}
            , n = (t.performance || {}).timing
            , r = t.TINGYUN && t.TINGYUN.globalStart || w
            , a = t.TINGYUN && t.TINGYUN.currentAgent || In;
        if (n) {
            Hi((function () {
                var t = Bi.t = {};
                i(n, (function (e, n) {
                    d(e) || (t[n] = e)
                }
                ), !0)
            }
            )),
                n.navigationStart && (r = n.navigationStart),
                e = {
                    ns: r,
                    f: h(yt),
                    qs: h(bt),
                    rs: h(wt),
                    re: h(_t),
                    os: h(Et),
                    oe: h("domContentLoadedEventEnd"),
                    oi: h("domInteractive"),
                    oc: h("domComplete"),
                    ls: h("loadEventStart"),
                    le: h("loadEventEnd"),
                    tus: h("unloadEventStart"),
                    tue: h("unloadEventEnd")
                };
            var o = h(xt)
                , s = h(Tt)
                , c = h(St)
                , u = h(Ct)
                , l = h(At)
                , f = h(kt);
            if (e.cs = l,
                e.ce = f,
                e.ds = o,
                e.de = s,
                (u - c > 0 || u > 0) && (e.es = c,
                    e.ee = u),
                0 == e.le) {
                var p = Na(a);
                e.ue = p - r
            }
            a && (a._le = e.ue || e.le),
                n.secureConnectionStart ? e.sl = h(Nt) : e.sl = 0
        } else
            e = {
                t: r,
                le: Na(a) - r
            };
        return e.je = a && a.errs && a.errs.length || 0,
            e;
        function h(t) {
            return n[t] > 0 ? n[t] - r : 0
        }
    }
    function Ia(t) {
        t = t || {},
            this._capacity = t.capacity || 10,
            this._cache = {},
            this._cacheKeys = [],
            this._size = 0
    }
    function Pa(t, e, n) {
        if (t && n && d(n)) {
            var r = t[e];
            if (!r || !r._wrapped) {
                var i = n(r, e);
                return i && (i._wrapped = !0),
                    t[e] = i,
                    i
            }
        }
    }
    Ia.prototype.put = function (t, e) {
        if (this._size >= this._capacity)
            try {
                var n = this._cacheKeys.shift();
                this._size--,
                    this._cache[n] = null,
                    delete this._cache[n]
            } catch (r) { }
        this._cache[t] = e,
            this._cacheKeys.push(t),
            this._size++
    }
        ,
        Ia.prototype.get = function (t) {
            return this._cache[t]
        }
        ;
    var Da = [jt, qt];
    function La(t, e) {
        return function (n) {
            if (window.__TINGYUN.hook && window.__TINGYUN.hook.eventCb && qa(n)) {
                var r = {
                    originalCallback: t,
                    eventHandlerType: e
                };
                return window.__TINGYUN.hook.eventCb.call(this, arguments, r)
            }
            return t.apply(this, arguments)
        }
    }
    function Ba(t, e, n) {
        return 1 === n ? La(t, e) : (t.handleEvent = La(t.handleEvent, e),
            t)
    }
    function Ha(t) {
        var e;
        return !function (t) {
            return d(t)
        }(t) ? function (t) {
            return l(t) && d(t.handleEvent)
        }(t) && (e = 2) : e = 1,
        {
            isValid: t && e,
            listenerType: e
        }
    }
    function ja() {
        try {
            window.EventTarget && (Pa(window.EventTarget.prototype, "addEventListener", (function (t) {
                return function (t) {
                    return function () {
                        try {
                            var e = arguments[0]
                                , n = arguments[1]
                                , r = arguments[2]
                                , i = !0;
                            r && l(r) && r[Bt] && (i = !1);
                            var a = Ha(n)
                                , o = a.isValid
                                , s = a.listenerType;
                            if (i && Da.indexOf(e) > -1 && o) {
                                var c;
                                if (n.__TY_ELEMENT_CB && n.__TY_ELEMENT_CB[this])
                                    c = n.__TY_ELEMENT_CB[this];
                                else {
                                    var u = Ba(n, Ut, s);
                                    1 === s && (n.__TY_ELEMENT_CB || (n.__TY_ELEMENT_CB = {},
                                        n.__TY_ELEMENT_CB.__TY_CB_COUNTER = 0),
                                        n.__TY_ELEMENT_CB[this] = {
                                            listener: u,
                                            options: arguments[2]
                                        },
                                        n.__TY_ELEMENT_CB.__TY_CB_COUNTER++,
                                        c = n.__TY_ELEMENT_CB[this])
                                }
                                c && (c.listener && (arguments[1] = c.listener),
                                    c.options && (arguments[2] = c.options))
                            }
                        } catch (d) { }
                        if (t)
                            return t.apply(this, arguments)
                    }
                }(t)
            }
            )),
                Pa(window.EventTarget.prototype, "removeEventListener", (function (t) {
                    return function (t) {
                        return function (e, n) {
                            var r;
                            try {
                                t && t.apply(this, arguments)
                            } finally {
                                try {
                                    if (n && Da.indexOf(e) > -1) {
                                        var i = n.__TY_ELEMENT_CB;
                                        i && i[this] && i[this].listener && (r = null != i[this].options ? t.call(this, e, i[this].listener, i[this].options) : t.call(this, e, i[this].listener),
                                            i[this] = null,
                                            i.__TY_CB_COUNTER--,
                                            i.__TY_CB_COUNTER <= 0 && (n.__TY_ELEMENT_CB = null,
                                                delete n.__TY_ELEMENT_CB))
                                    }
                                } catch (a) { }
                            }
                            return r
                        }
                    }(t)
                }
                )))
        } catch (t) { }
    }
    function qa(t) {
        return t && t.target instanceof window.HTMLElement && t.currentTarget instanceof window.HTMLElement
    }
    var Ma = [jt, qt]
        , Ua = []
        , Fa = new Ia({
            capacity: 20
        })
        , za = null;
    function Ya(t) {
        return !!t.match(Ya.regex)
    }
    function Ga(t) {
        try {
            if (!t)
                return "";
            for (var e = [], n = t.parentNode, r = function () {
                var r, i = t.tagName, a = void 0;
                a = (r = n.children) ? 1 === y(r, (function (t) {
                    return t.tagName === i
                }
                )).length ? i : "".concat(i, ":nth-child(").concat(1 + _(r, t), ")") : i;
                var o = t.id ? "#".concat(t.id) : ""
                    , s = t.className;
                c(s) && (s = hi(s));
                var u = "";
                if (s) {
                    var d = s.split(" ");
                    d && (u = y(d, (function (t) {
                        return hi(t)
                    }
                    )).map((function (t) {
                        return ".".concat(t)
                    }
                    )).join(""))
                }
                e.unshift("".concat(a).concat(o).concat(u)),
                    n = (t = n).parentNode
            }; n;)
                r();
            return "".concat(e.join(" > ")).toLowerCase()
        } catch (i) {
            return ""
        }
    }
    function Ja(t, e, n) {
        var r, i = t.target, a = i.nodeName, o = i.id, s = i.className, c = i.title, u = i.value, d = i.innerText, l = a + o, f = function (t) {
            return !(null == t.isTrusted && null == t.pointerType || t.isTrusted && (null == t.pointerType || t.pointerType))
        }(t), p = {
            type: ot,
            id: o,
            nodeName: a,
            className: s,
            title: c,
            value: u,
            text: a === Yt ? "" : (r = d,
                r && r.substr(0, 256) || ""),
            path: Ga(t.target),
            trigger: f ? "script" : "normal",
            range: "current"
        }, h = t[Ht];
        if (h || (h = Y(),
            t[Ht] = h),
            p.eventId = h,
            f) {
            var m = t.timeStamp && q();
            za && Math.abs(m - za.timestamp) <= 200 && (p.refId = za.eventId)
        } else
            za = {
                timestamp: t.timeStamp && q(),
                eventId: p.eventId
            };
        if ("IMG" === a) {
            var v = t.target.getAttribute("src");
            v && !Ya(v) && (p.src = v)
        }
        if ("A" === a) {
            var y = t.target.getAttribute("href");
            y && (p.href = y)
        }
        return p.eventHandlerType = e,
            new ci(g({
                name: l,
                type: ot,
                subType: t.type || jt,
                data: p
            }, n))
    }
    function Va(t, e) {
        K.context = Ja(t, e)
    }
    function Ka() {
        var t = K.context;
        t && t.canEnd() && t.end(),
            K.context = null
    }
    function Wa(t, e) {
        var n, r = e.originalCallback, i = e.eventHandlerType, a = t[0], o = !(a && a.target && Ma.indexOf(a.type) > -1);
        if (!o)
            try {
                Va.call(this, a, i)
            } catch (s) { }
        try {
            n = r.apply(this, t)
        } finally {
            if (!o)
                try {
                    K.context && !K.context.canEnd({
                        ignoreFields: [ct]
                    }) && (a[Lt] = !0),
                        Ka.apply(this)
                } catch (s) { }
        }
        return n
    }
    function Xa(t) {
        var e = window.performance && window.performance.timing ? window.performance.timing.navigationStart : w
            , n = t.timeStamp;
        return n = n ? qi(n) ? n : Math.round(t.timeStamp + e) : q()
    }
    function Qa(t, e) {
        return Math.abs(t - e) < rn.inline_event_associate_threshold
    }
    function $a(t) {
        var e = y(Ua, (function (t) {
            return !t[Lt]
        }
        ))
            , n = e[e.length - 1];
        if (n) {
            var r, i = Xa(n);
            if (Qa(i, t))
                return n[Ht] && (r = Fa.get(n[Ht])),
                    r || (r = Ja(n, zt, {
                        s: i
                    }),
                        n[Ht] && Fa.put(n[Ht], r)),
                    r
        }
    }
    function Za(t) {
        if (t) {
            var e = Ua[Ua.length - 1];
            if (e) {
                var n = Xa(e);
                return Qa(n, t) ? Ja(e, zt, {
                    s: n
                }) : void 0
            }
        }
    }
    function to() {
        rn.hook_auto_event && (window.__TINGYUN.hook && (window.__TINGYUN.hook.eventCb = Wa),
            !window.__TINGYUN.listenerHooked && window.HTMLElement && (rn.hookEventListener && ja(),
                rn.hookOnProperty && function () {
                    try {
                        if (!Object.getOwnPropertyDescriptor || !Object.defineProperty)
                            return;
                        i(Da, (function (t) {
                            var e = "on" + t
                                , n = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, e);
                            if (!n)
                                return !0;
                            var r = n.get
                                , i = n.set;
                            if (!r || !i)
                                return !0;
                            Object.defineProperty(window.HTMLElement.prototype, e, {
                                get: function () {
                                    return r.apply(this, arguments)
                                },
                                set: function () {
                                    try {
                                        var t = arguments[0];
                                        t && (arguments[0] = Ba(t, Ft, 1))
                                    } catch (e) { }
                                    i.apply(this, arguments)
                                },
                                configurable: !0,
                                enumerable: !0
                            })
                        }
                        ))
                    } catch (t) { }
                }()),
            rn.hook_inline_event && i(Ma, (function (t) {
                document.addEventListener(t, (function (t) {
                    Ua.length >= 5 && Ua.shift(),
                        Ua.push(t)
                }
                ), r({
                    capture: !0
                }, Bt, !0))
            }
            )))
    }
    Ya.regex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
    var eo = "undefined" != typeof window.console;
    var no = Object.create ? Object.create : function (t) {
        function e() { }
        return e.prototype = t,
            new e
    }
        ;
    function ro(t, e) {
        this.flags = 0,
            d(t.create) && (this.create = t.create,
                this.flags |= 1),
            d(t.before) && (this.before = t.before,
                this.flags |= 2),
            d(t.after) && (this.after = t.after,
                this.flags |= 4),
            d(t.error) && (this.error = t.error,
                this.flags |= 8),
            this.data = e
    }
    var io, ao = ro.prototype;
    function oo(t, e) {
        return !io || io.flags <= 0 ? t : function (t, e) {
            var n = e || io.data;
            if (!n && 0 != (1 & io.flags)) {
                var r = io.create(io.data);
                r !== undefined && (n = r)
            }
            return function i() {
                0 != (2 & io.flags) && io.before(this, n);
                var e, r = i;
                if (r._ && (r._ = 1),
                    rn.catchAsyncCallback) {
                    try {
                        e = t.apply(this, arguments)
                    } catch (a) {
                        throw 0 != (8 & io.flags) && io.error(n, a),
                        a
                    }
                    0 != (4 & io.flags) && io.after(this, n)
                } else
                    try {
                        e = t.apply(this, arguments)
                    } finally {
                        0 != (4 & io.flags) && io.after(this, n)
                    }
                return e
            }
        }(t, e)
    }
    function so(t, e) {
        return function (t) {
            return function () {
                var e;
                try {
                    e = t.apply(this, arguments)
                } finally {
                    K.context = null
                }
                return e
            }
        }(oo(t, e))
    }
    function co() {
        this.id = null,
            this.active = null,
            this._set = []
    }
    function uo() {
        var t = new co;
        return t.id = function (t, e) {
            if (!io) {
                if (!l(t) || !t)
                    throw new TypeError("callbacks arguments must be an object");
                return io = new ro(t, e)
            }
        }({
            create: function () {
                return t.active
            },
            before: function (e, n) {
                n && t.enter(n)
            },
            after: function (e, n) {
                n && t.exit(n)
            },
            error: function (e, n) {
                if (e) {
                    try {
                        n.moduleId = e.moduleId
                    } catch (r) { }
                    t.exit(e)
                }
            }
        }),
            t
    }
    ao.create = ao.before = ao.after = ao.error = null,
        co.prototype = {
            createContext: function () {
                return no(this.active)
            },
            getContext: function () {
                return this.active
            },
            get: function (t) {
                if (this.active)
                    return this.active[t]
            },
            set: function (t, e) {
                if (this.active)
                    return this.active[t] = e
            },
            enter: function (t) {
                if (!t)
                    throw new Qe("context required!");
                this._set.push(this.active),
                    this.active = t
            },
            exit: function (t) {
                if (!t)
                    throw new Qe("context required!");
                if (t !== this.active) {
                    var e = this._set.lastIndexOf ? this._set.lastIndexOf(t) : function (t, e) {
                        var n = null == t ? 0 : t.length;
                        if (!n)
                            return -1;
                        for (var r = n; r--;)
                            if (t[r] === e)
                                return r;
                        return r
                    }(this._set, t);
                    if (e < 0)
                        throw new Qe("context not currently entered!");
                    this._set.splice(e, 1)
                } else
                    this.active = this._set.pop()
            },
            bind: function (t, e) {
                e || (e = this.active ? this.active : this.createContext());
                var n = this;
                return function () {
                    n.enter(e);
                    try {
                        return t.apply(this, arguments)
                    } catch (i) {
                        try {
                            var r = "moduleId";
                            i[r] = e[r]
                        } catch (a) { }
                        throw i
                    } finally {
                        n.exit(e)
                    }
                }
            }
        };
    var lo, fo = !1;
    var po = (fo || (lo = uo(),
        fo = !0),
        lo)
        , ho = "success"
        , mo = "fail"
        , vo = {}
        , go = {};
    function yo(t) {
        var e = t
            , n = t.xhrs;
        e.hasAjax = n && n.length > 0,
            delete e.xhrs;
        var r = {
            ss: 1
        };
        t.type === Xt && (r.rs = 1),
            ci.buildImmediateAction(ot, Mt, {
                type: ot,
                items: n,
                spe: e
            }, {
                sendOptions: {
                    query: r
                }
            }),
            Qn(Ae)
    }
    function bo(t) {
        if (go[t.key]) {
            var e = go[t.key];
            delete go[t.key],
                e.sent || !e.isMeaningfulAction() && e.isNoRemain() ? yo(t) : (e.setSpe(t),
                    U((function () {
                        e.sent ? Qn(Ae) : (e.spe = null,
                            yo(t))
                    }
                    ), 1e4))
        } else
            yo(t)
    }
    function wo(t) {
        eo && console.warn(t || "Event key required!")
    }
    var _o = wo.prototype;
    function Eo(t) {
        t = t || {},
            this.key = t.key,
            this.type = t.type || "defined",
            this.timeout = t.timeout || 6e5,
            this.status = 1,
            this.remain = 0,
            this.xhrs = [],
            this.s = q(),
            this.e = null,
            this.called = this.sent = this.stored = !1,
            t.debugInfo && (this.debugInfo = t.debugInfo),
            this.duration = t.duration || 0,
            t.op && (this.op = t.op),
            t.desc && (this.desc = t.desc),
            this.scope = new Ge({
                contexts: t.context
            })
    }
    _o.fail = _o.end = _o.store = j;
    var xo = Eo.prototype;
    function To(t) {
        var e = (t = t || {}).key;
        if (!e)
            return new wo;
        if (vo[e])
            return new wo("event " + e + " is executing");
        vo[e] = !0;
        var n = po.createContext();
        po.enter(n);
        var r = new Eo(t);
        return r._end = function () {
            var t = this;
            t.sent || t.stored || 0 !== t.remain || !t.called ? t.stored && this.refreshEventAndStore(n) : t.finish().send(n)
        }
            ,
            r.end = function (t) {
                t = t || {};
                var e = this;
                e.called ? eo && console.warn("Event " + this.key + "has ended or failed!") : (e.called = !0,
                    po.exit(n),
                    null != t.status && (t.status === ho ? e.status = 1 : t.status === mo ? e.status = 0 : 1 !== t.status && 0 !== t.status || (e.status = t.status)),
                    t.context && l(t.context) && e.scope.setContext(t.context),
                    t.storeEvent || e._end())
            }
            ,
            r.finish = function () {
                var t = this;
                return t.e = q(),
                    t.i && clearTimeout(t.i),
                    delete vo[t.key],
                    t
            }
            ,
            r.fail = function (t) {
                this.end(g(t || {}, {
                    status: 0
                }))
            }
            ,
            r.store = function () {
                this.end({
                    storeEvent: !0
                }),
                    this.refreshEventAndStore(n),
                    this.stored = !0
            }
            ,
            r.setTag = function (t, e) {
                this.scope && this.scope.setTag(t, e)
            }
            ,
            r.setMetric = function (t, e, n) {
                this.scope && this.scope.setMetric(t, e, n)
            }
            ,
            r.type === Xt && function (t) {
                var e;
                e = K.context ? ci.getRootContext(K.context, (function (t) {
                    return t.type === ot && t.subType !== Mt
                }
                )) : $a(t.s),
                    e && !e.closed && (go[t.key] = e)
            }(r),
            po.set("event", r),
            r
    }
    function So(t) {
        if (pi()) {
            var e = Un(Ln(Wt));
            if (e && e.start && (!(t = t || {}).key || e.key === t.key)) {
                var n = t.timeout;
                if (n || (n = 6e4),
                    e.duration = q() - e.start,
                    e.duration > n)
                    Hn(Wt);
                else {
                    var r = window.performance && window.performance.timing;
                    if (r && r.navigationStart && (r.loadEventEnd || r.loadEventStart) && r.navigationStart - e.start >= 0) {
                        var i = {
                            method: "GET",
                            url: or.ref,
                            status: 200,
                            type: st,
                            subType: dt,
                            startSpeOffset: r.navigationStart - e.start,
                            start: r.navigationStart,
                            __spe: 1,
                            du: (r.loadEventEnd || r.loadEventStart) - r.navigationStart
                        };
                        e.xhrs || (e.xhrs = []),
                            e.xhrs.push(i)
                    }
                    var a = 1;
                    t.status && (a = t.status === ho ? 1 : 0),
                        e.status = a,
                        Hn(Wt),
                        bo(e)
                }
            }
        }
    }
    function Co(t, e) {
        e.status && e.status === mo ? t.fail() : t.end()
    }
    function Ao(t, e) {
        if (!pi())
            return new wo("Agent is not inited!");
        if (t) {
            e = e || t.immediate;
            var n = To(t = g({
                type: "auto"
            }, e ? {
                debugInfo: {
                    immediate: !0
                }
            } : {}, t || {}));
            if (e)
                Co(n, t);
            else if (t.autoEnd) {
                var r = t.endDelay;
                (!r || r <= 0) && (r = 500),
                    U((function () {
                        Co(n, t)
                    }
                    ), r)
            }
            return n
        }
    }
    function ko(t) {
        var e = go[t];
        if (e && !e.closed)
            return e
    }
    xo.end = xo.finish = xo.fail = null,
        xo.send = function (t) {
            this.sent = !0;
            var e = this.getEventData(t);
            !rn.collect_noajax_hashroute && (e.debugInfo && e.debugInfo.api === $t || e.type === Xt && e.key.indexOf("#") > -1) && 0 === e.xhrs.length || e.duration >= this.timeout || (ze({
                type: oe,
                name: fe,
                args: {
                    actionData: e
                },
                scope: this.scope
            }),
                Ke(e, this.scope),
                bo(e))
        }
        ,
        xo.getEventData = function (t) {
            var e = this
                , n = t.event && t.event.xhrs || [];
            i(n, (function (t) {
                t.startSpeOffset = t.start - e.s
            }
            ));
            var r = {
                key: e.key,
                start: e.s,
                duration: e.e - e.s,
                status: e.status,
                type: e.type,
                xhrs: n
            };
            return e.duration > 0 && (r.duration = e.duration,
                r.start = e.e - e.duration),
                e.type === Xt && rn.baseHref && (r.baseHref = rn.baseHref),
                this.debugInfo && (r.debugInfo = this.debugInfo),
                this.op && (r.op = this.op),
                this.desc && (r.desc = this.desc),
                r
        }
        ,
        xo.refreshEventAndStore = function (t) {
            this.finish();
            var e = this.getEventData(t);
            Bn(Wt, A(e))
        }
        ;
    var No, Oo, Ro, Io, Po, Do, Lo, Bo, Ho, jo, qo, Mo, Uo, Fo, zo, Yo, Go = window, Jo = (Oo = function (t) {
        for (var e = {}, n = 0, r = t.length; n < r; n++)
            e[t.charAt(n)] = n;
        return e
    }(No = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
        Ro = String.fromCharCode,
        Io = function (t) {
            if (t.length < 2)
                return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? Ro(192 | e >>> 6) + Ro(128 | 63 & e) : Ro(224 | e >>> 12 & 15) + Ro(128 | e >>> 6 & 63) + Ro(128 | 63 & e);
            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
            return Ro(240 | e >>> 18 & 7) + Ro(128 | e >>> 12 & 63) + Ro(128 | e >>> 6 & 63) + Ro(128 | 63 & e)
        }
        ,
        Po = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        Do = function (t) {
            return t.replace(Po, Io)
        }
        ,
        Lo = function (t) {
            var e = [0, 2, 1][t.length % 3]
                , n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
            return [No.charAt(n >>> 18), No.charAt(n >>> 12 & 63), e >= 2 ? "=" : No.charAt(n >>> 6 & 63), e >= 1 ? "=" : No.charAt(63 & n)].join("")
        }
        ,
        Bo = Go.btoa ? function (t) {
            return Go.btoa(t)
        }
            : function (t) {
                return t.replace(/[\s\S]{1,3}/g, Lo)
            }
        ,
        Ho = function (t) {
            return "[object Uint8Array]" === Object.prototype.toString.call(t) ? t.toString("base64") : Bo(Do(String(t)))
        }
        ,
        jo = function (t, e) {
            return e ? Ho(String(t)).replace(/[+\/]/g, (function (t) {
                return "+" == t ? "-" : "_"
            }
            )).replace(/=/g, "") : Ho(t)
        }
        ,
        qo = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"), "g"),
        Mo = function (t) {
            switch (t.length) {
                case 4:
                    var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                    return Ro(55296 + (e >>> 10)) + Ro(56320 + (1023 & e));
                case 3:
                    return Ro((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                default:
                    return Ro((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
            }
        }
        ,
        Uo = function (t) {
            return t.replace(qo, Mo)
        }
        ,
        Fo = function (t) {
            var e = t.length
                , n = e % 4
                , r = (e > 0 ? Oo[t.charAt(0)] << 18 : 0) | (e > 1 ? Oo[t.charAt(1)] << 12 : 0) | (e > 2 ? Oo[t.charAt(2)] << 6 : 0) | (e > 3 ? Oo[t.charAt(3)] : 0)
                , i = [Ro(r >>> 16), Ro(r >>> 8 & 255), Ro(255 & r)];
            return i.length -= [0, 0, 2, 1][n],
                i.join("")
        }
        ,
        zo = Go.atob ? function (t) {
            return Go.atob(t)
        }
            : function (t) {
                return t.replace(/\S{1,4}/g, Fo)
            }
        ,
    {
        atob: function (t) {
            return zo(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
        },
        btoa: Bo,
        utob: Do,
        encode: jo,
        encodeURI: function (t) {
            return jo(t, !0)
        },
        btou: Uo,
        decode: function (t) {
            return function (t) {
                return Uo(zo(t))
            }(String(t).replace(/[-_]/g, (function (t) {
                return "-" == t ? "+" : "/"
            }
            )).replace(/[^A-Za-z0-9\+\/]/g, ""))
        }
    }), Vo = "__ty_plugin_registers";
    function Ko() {
        return Yo || (Yo = {
            constant: {
                OBSERVER_SESSION: Ne,
                PAGEHIDE: $
            },
            util: {
                noop: j,
                on: L,
                support: gr,
                stringify: A,
                UUID: Y,
                now: q,
                Base64: Jo
            },
            bridge: {
                getSid: Fr,
                getUid: tr,
                getDid: $n,
                registerObserver: Mr,
                sendRequest: Rn,
                getUrlWithParam: Wn,
                getSendOrigin: sr,
                setDefaultConfig: Lr,
                getAgentConfig: Dr,
                getAgentStorage: br,
                setAgentStorage: yr
            },
            common: {
                agentVersion: "3.4.3"
            }
        }),
            Yo
    }
    function Wo(t) {
        try {
            if (c(t)) {
                var e = t;
                t = function (t) {
                    var e = window.__ty_plugins;
                    if (e && d(e[t]))
                        try {
                            return e[t]()
                        } catch (n) { }
                }(t),
                    t || function (t) {
                        window[Vo] && window[Vo][t] || (window[Vo] || (window[Vo] = {}),
                            window[Vo][t] = Wo)
                    }(e)
            }
            if (!t || !t.name)
                return;
            var n = t.name;
            if (K.plugins[n])
                return;
            if (K.plugins[n] = t,
                t.hooks && (t.hooks.init && Me(ce, t.hooks.init),
                    t.hooks.beforeSend && Fe(pe, t.hooks.beforeSend),
                    t.hooks.send && Fe(he, t.hooks.send),
                    t.hooks.action && (a = t.hooks.action,
                        d(a) && i(Be.action, (function (t) {
                            Ue(t, (function (e) {
                                a.call(null, {
                                    name: t,
                                    params: e
                                })
                            }
                            ))
                        }
                        )))),
                pi()) {
                var r = Ko();
                d(t.setup) && t.setup(r),
                    d(t.init) && t.init(r)
            }
        } catch (o) { }
        var a
    }
    var Xo, Qo, $o = ["pushState", "replaceState"];
    function Zo(t) {
        if (rn.routerEnable) {
            var e = window.location.href;
            if (e) {
                var n = Xo;
                Xo = e,
                    Ao({
                        key: e,
                        autoEnd: !0,
                        endDelay: rn.router_event_delay,
                        type: Xt,
                        debugInfo: {
                            api: t
                        }
                    }),
                    ts(e, n)
            }
        }
    }
    function ts(t, e) {
        if (rn.bcHistoryEnabled && t) {
            var n = {
                to: t
            };
            e && (n.from = e),
                fi({
                    category: "history",
                    message: t,
                    data: n
                })
        }
    }
    function es() {
        i($o, (function (t) {
            Pa(window.history, t, (function (e) {
                return function (n, r, i) {
                    var a;
                    a = e.apply(this, arguments);
                    try {
                        Zo(t)
                    } catch (o) { }
                    return a
                }
            }
            ))
        }
        )),
            L(window, Zt, (function () {
                Zo(Zt)
            }
            ))
    }
    function ns() {
        L(window, $t, (function () {
            Zo($t)
        }
        ))
    }
    var rs = {
        mainVersion: 3,
        version: "3.4.3",
        createEvent: Ao,
        globalStart: w,
        currentAgent: In,
        mark: function (t, e) {
            if (t) {
                var n, r, i = t.split("_"), a = i[0], o = i[1];
                "ty" === a && o && (n = o,
                    r = {
                        timestamp: q(),
                        data: e
                    },
                    V[n] = r)
            }
        },
        wrapVueRouter: function (t, e) {
            pi() && (e && l(e) || (e = {}),
                t && t.afterEach && (rn.routerEnable = !1,
                    t.afterEach((function (t) {
                        var n = t.fullPath;
                        if (n = n ? window.location.origin + n : t.path) {
                            var r = {
                                key: n,
                                type: Xt,
                                autoEnd: !0,
                                endDelay: rn.router_event_delay,
                                debugInfo: {
                                    api: "vueRouter"
                                }
                            };
                            g(r, e),
                                Ao(r);
                            var i = Qo;
                            Qo = n,
                                ts(n, i)
                        }
                    }
                    ))))
        },
        setUid: er,
        createAutoEvent: Ao,
        endStoreEvent: So,
        endStoredAction: So,
        captureException: function (t, e) {
            return Si(t, e, Le)
        },
        setDid: Zn,
        addHook: qe,
        addLifeCycleHook: Me,
        addActionHook: Ue,
        addSendHook: Fe,
        setContext: Ve,
        setExtraContext: function () {
            Je(),
                K.scope.setExtraContext.apply(K.scope, arguments)
        },
        stopLCPObserver: function () {
            J.lcpStopTime = q(),
                na()
        },
        checkHookSupported: function (t, e) {
            return Be[t] && _(Be[t], e) > -1
        },
        newEvent: Ai,
        createCustomEvent: Ai,
        parseQuery: Yn,
        JSON: {
            stringify: A,
            parse: Un
        },
        newAction: Ao,
        getAgentConfig: Dr,
        util: {
            uuid: Y
        },
        startNextSession: function (t) {
            Yr() ? Jr(t, !1) : ui(t),
                Qn("newSession", {
                    id: Fr()
                })
        },
        addPlugin: Wo
    };
    function is(t, e) {
        rs[t] = e
    }
    function as(t) {
        if (t && d(rs[t])) {
            var e = [].slice.call(arguments, 1);
            return rs[t].apply(null, e)
        }
    }
    function os() {
        d(window.TingyunWeb) && window.TingyunWeb.q && (i(window.TingyunWeb.q, (function (t) {
            if (!t)
                return !0;
            try {
                as.apply(null, t)
            } catch (e) { }
        }
        )),
            window.TingyunWeb.q = []),
            window.TingyunWeb = as
    }
    function ss() {
        var t = [].slice.call(arguments);
        if (t && t[0] === Ie)
            try {
                as.apply(null, t)
            } catch (e) { }
        else
            ss.q.push(t)
    }
    var cs = /(msie|trident)/i.test(on())
        , us = $e.createElement("a");
    function ds(t) {
        var e = t;
        return cs && (us.setAttribute("href", e),
            e = us.href),
            us.setAttribute("href", e),
        {
            href: us.href,
            protocol: us.protocol ? us.protocol.replace(/:$/, "") : "",
            host: us.host,
            search: us.search ? us.search.replace(/^\?/, "") : "",
            hash: us.hash ? us.hash.replace(/^#/, "") : "",
            hostname: us.hostname,
            port: us.port,
            pathname: "/" === us.pathname.charAt(0) ? us.pathname : "/" + us.pathname
        }
    }
    var ls = ds(tn.href);
    function fs(t) {
        if (!c(t))
            return {
                valid: !1
            };
        var e = ds(t);
        return {
            valid: e.protocol === ls.protocol && e.host === ls.host,
            parsed: e
        }
    }
    function ps(t) {
        if (rn.apmEnableAllCorsDomains)
            return !0;
        var e, n, r = fs(t), a = r.valid, o = r.parsed;
        return a || o && o.host && (e = o.host,
            n = !1,
            i(rn.corsDomains, (function (t) {
                if (e.indexOf(t) > -1)
                    return n = !0,
                        !1
            }
            )),
            n)
    }
    function hs(t, e, n) {
        if (t && t[e])
            try {
                Pa(t, e, n)
            } catch (r) { }
    }
    function ms(t, e, n) {
        t && t.context && t.context.parent && (t.pcid = t.context.parent.id,
            t.context.parent.updateRemain(1, e),
            t.context.parent.items.push(t.context.data),
            n && t.context.parent.children.push(t.context))
    }
    function vs(t) {
        if (!t)
            return !1;
        var e = rn.eventResources && rn.eventResources.length > 0
            , n = rn.eventResourcesIgnore && rn.eventResourcesIgnore.length > 0;
        return e && n ? gs(t) && ys(t) : e ? gs(t) : !n || ys(t)
    }
    function gs(t) {
        var e = !1;
        return i(rn.eventResources, (function (n) {
            if (t.indexOf(n) > -1)
                return e = !0,
                    !1
        }
        )),
            e
    }
    function ys(t) {
        var e = !0;
        return i(rn.eventResourcesIgnore, (function (n) {
            if (t.indexOf(n) > -1)
                return e = !1,
                    !1
        }
        )),
            e
    }
    function bs(t, e) {
        var n, r = K.context;
        if (!(t.shouldAddToEvent || !function (t) {
            return ci.containContext(t, (function (t) {
                return t && (t.type === dt || t.type === ot && t.subType !== Mt)
            }
            ))
        }(r) && r))
            return null;
        if (r)
            return r;
        if (un()) {
            var i = $a(t.start || q());
            if (i && !(n = i.closed))
                return i
        }
        return !n && e && (r = e()),
            !r && K.recordingPageLoadEvent && K.pageLoadEvent && (r = K.pageLoadEvent,
                K.recordingCpActions && (t.crossPage = !0)),
            r
    }
    var ws = 0
        , _s = "load"
        , Es = ["__wvjb_queue_message__", "__bridge_loaded__"];
    function xs(t, e, n) {
        if (!function (t) {
            if (!t)
                return !0;
            var e = !1
                , n = t.substring(0, 100);
            try {
                i(Es, (function (t) {
                    if (n.indexOf(t) > -1)
                        return e = !0,
                            !1
                }
                ))
            } catch (r) {
                e = !0
            }
            return e
        }(e) && t) {
            n || (n = t.src ? "reload" : _s);
            var r, a = {
                id: ws++,
                src: e,
                loadType: n,
                start: q(),
                sameOrigin: (r = e,
                    fs(r).valid),
                shouldAddToEvent: vs(e)
            };
            !function (t) {
                t.context || (t.context = new ci({
                    parent: bs(t),
                    name: "".concat(t.src, "-").concat(t.id),
                    type: ut
                }))
            }(a),
                a.crossPage && (a.context.crossPage = !0),
                a.context.setData({
                    type: ut,
                    loadType: a.loadType,
                    id: a.id,
                    cid: a.context.id,
                    src: a.src,
                    start: a.start,
                    sameOrigin: a.sameOrigin
                }),
                ms(a, ut),
                t.addEventListener("load", (function i() {
                    try {
                        if (a.end = q(),
                            a.sameOrigin && this && this.contentWindow && this.contentWindow.document) {
                            a.url = this.contentWindow.document.URL;
                            var e = this.contentWindow.TINGYUN
                                , n = !1;
                            e && (a.pvid = e.pvid || "",
                                d(e.checkHookSupported) && e.checkHookSupported(oe, ue) && (n = !0,
                                    e.addActionHook(ue, (function (t) {
                                        var e;
                                        t && t.actionData && (e = Cs(t.actionData)),
                                            e || (e = Ss(this.contentWindow, a.start)),
                                            Ts(a, e)
                                    }
                                    )))),
                                n || Ts(a, Ss(this.contentWindow, a.start))
                        } else
                            Ts(a);
                        t.removeEventListener("load", i)
                    } catch (r) { }
                }
                ))
        }
    }
    function Ts(t, e) {
        t.iframePageMetric = e,
            function (t) {
                t.context.setData(g({
                    pvid: t.pvid,
                    end: t.end,
                    url: t.url
                }, t.iframePageMetric))
            }(t),
            function (t) {
                if (!t.context)
                    return;
                t.context.setData({
                    state: vt
                }),
                    t.context.canEnd() && t.context.end()
            }(t)
    }
    function Ss(t, e) {
        if (!t)
            return {};
        var n = Ra(t)
            , r = {
                metric: {
                    le: n.le,
                    f: n.f
                },
                debug: {}
            }
            , i = {
                wd: t,
                startTime: e,
                ifr: !0
            };
        return xa(r, i),
            Ca(r, i),
            ia(r, i),
            ka(r, i),
            Cs(r.metric)
    }
    function Cs(t) {
        if (t)
            return g({
                f: t.f,
                fp: t.fp,
                fs: t.fs,
                dr: t.dr,
                le: t.le,
                loadEventEnd: t.loadEventEnd,
                je: t.je || 0
            }, K.pageServerData)
    }
    function As() {
        if (rn.hook_iframe && un())
            try {
                !function () {
                    function t(t) {
                        return function (e) {
                            try {
                                "IFRAME" === e.nodeName && e.src && xs(e, e.src, _s)
                            } catch (n) { }
                            return t.apply(this, arguments)
                        }
                    }
                    window.Node && (hs(window.Node.prototype, "appendChild", t),
                        hs(window.Node.prototype, "insertBefore", t))
                }(),
                    function () {
                        if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                            var t = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "src");
                            if (t) {
                                var e = t.get
                                    , n = t.set;
                                e && n && Object.defineProperty(HTMLIFrameElement.prototype, "src", {
                                    get: function () {
                                        return e.apply(this, arguments)
                                    },
                                    set: function () {
                                        try {
                                            if ($e && $e.body && $e.body.contains && $e.body.contains(this))
                                                xs(this, arguments[0])
                                        } catch (t) { }
                                        n.apply(this, arguments)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                })
                            }
                        }
                    }()
            } catch (t) { }
    }
    var ks = ["IMG", "SCRIPT", "IFRAME"];
    function Ns(t) {
        if (ks.indexOf(t.nodeName) > -1 && vs(t.src) && !Ta(t)) {
            var e = K.recentFinishedAjaxContext;
            if (e && e.data) {
                var n = q();
                if (n - e.data.end <= rn.resourceAssociateThreshold) {
                    var r = ci.getRootContext(e, (function (t) {
                        return t.type === dt || t.type === ot && !t.subType === Mt
                    }
                    ));
                    r && r.addResource(t, n)
                }
            }
        }
        i(t.childNodes, Ns)
    }
    var Os = null;
    function Rs() {
        i($e.getElementsByTagName("img"), (function (t) {
            t.complete || t.__TY_IMAGE_LOAD_HOOK || (t.__TY_IMAGE_LOAD_HOOK = !0,
                L(t, W, (function () {
                    J.imageResources.push({
                        loadTime: q(),
                        element: t
                    })
                }
                )))
        }
        ))
    }
    function Is() {
        Wr.on(W, M((function () {
            t();
            var e = q();
            Hi((function () {
                Bi.load = e
            }
            )),
                In.loadEventEnd = e,
                clearInterval(Os)
        }
        ))),
            i(pn(), (function (t) {
                L(window, t, (function (e) {
                    Hi((function () {
                        (Bi.e[t] || (Bi.e[t] = [])).push(q())
                    }
                    )),
                        Wr.emit(t, e)
                }
                ))
            }
            ));
        var t = M((function () {
            rn.monitor_dom_mutation && function () {
                if (d(window.MutationObserver)) {
                    var t = document.getElementsByTagName("body")
                        , e = t && t[0];
                    if (e)
                        try {
                            new MutationObserver((function (t) {
                                i(t, (function (t) {
                                    i(t.addedNodes, Ns)
                                }
                                ))
                            }
                            )).observe(e, {
                                childList: !0,
                                subtree: !0
                            })
                        } catch (n) { }
                }
            }();
            var t = q();
            if (Hi((function () {
                Bi.end = t
            }
            )),
                In.domContentLoadedEventStart = t,
                un() && window.performance && window.performance.getEntriesByName) {
                if (!$e.querySelectorAll)
                    return;
                J.resources = J.resources || [],
                    i($e.querySelectorAll("head>link,head>script"), (function (t) {
                        var e;
                        "LINK" == t.tagName ? e = t.href : "SCRIPT" != t.tagName || t.defer || t.async || (e = t.src),
                            e && J.resources.push(e)
                    }
                    ))
            }
        }
        ));
        if (un() && L($e, "DOMContentLoaded", t),
            L($e, Z, (function (e) {
                $e.readyState === tt && t()
            }
            )),
            (!un() || window.performance && !window.performance.getEntriesByName) && (Os = setInterval(Rs, 60)),
            !un())
            try {
                !function (t) {
                    var e = $e.createElement("script");
                    e.type = "text/javascript";
                    try {
                        e.appendChild($e.createTextNode(t))
                    } catch (n) {
                        e.text = t
                    }
                    $e.getElementsByTagName("head")[0].appendChild(e)
                }("if(window.TINGYUN) {window.TINGYUN.".concat(Qt, "=+new Date();}"))
            } catch (e) { }
    }
    function Ps() {
        try {
            zi(),
                Ki(),
                Fi((function () {
                    hn((function () {
                        Ki()
                    }
                    ))
                }
                )),
                L(document, "visibilitychange", (function (t) {
                    "hidden" === document.visibilityState && Vi(t),
                        In.visibilities && In.visibilities.push({
                            state: document.visibilityState,
                            time: q()
                        })
                }
                ), !0),
                L(window, "pagehide", Vi, !0),
                Is()
        } catch (t) { }
    }
    function Ds(t, e) {
        for (var n = q(), r = e.length - 1; r >= 0; r--) {
            var i = e[r];
            i.type === ot || i.end || (i.end = n),
                e[r - 1] && (e[r - 1].items = [i]);
            var a = void 0;
            a = i.start && i.end && i.end - i.start > rn.eventTimeout ? gt : i.type === ot && e[r + 1] && e[r + 1].state || vt,
                i.state = a
        }
        t.data = e[0],
            t.end = n
    }
    function Ls(t) {
        var e = K.cpParent;
        if (e) {
            K.recordingCpActions = !1;
            var n = e.action
                , r = e.data
                , i = e.commonActionInfo
                , a = e.requestInfo;
            if (n && r && 0 !== r.length) {
                r[r.length - 1].items = [t.eventData.data],
                    Ds(n, r),
                    n.data && (n.data.range = "crossPage");
                var o = {
                    pageParam: cr()
                };
                K.opt_custom_param && (o.cpOptCustomParam = K.opt_custom_param);
                var s = g(i || {}, Ke(o, We(), "cpScope"));
                t.eventData = n,
                    t.setSendOptions({
                        commonActionInfoMessage: s,
                        requestInfo: a,
                        crossPage: !0
                    })
            }
        }
    }
    var Bs = 0
        , Hs = null;
    function js(t) {
        if (t.parent) {
            var e = Bs++
                , n = t.url || ""
                , r = q()
                , i = new ci({
                    parent: t.parent,
                    name: "".concat(n, "-").concat(e),
                    type: lt,
                    subType: t.subType || "window_open"
                });
            i.setData({
                type: lt,
                subType: i.subType,
                id: e,
                cid: i.id,
                url: n,
                start: r
            });
            var a = i.collectCrossPageData();
            Hs = a,
                function (t) {
                    Bn(Dt, A(t))
                }(a),
                i.clear(),
                i = null
        }
    }
    function qs(t) {
        return function () {
            var e = t.apply(this, arguments);
            try {
                if (e) {
                    var n = arguments[0]
                        , r = Za(q());
                    js({
                        url: n,
                        parent: r
                    })
                }
            } catch (i) { }
            return e
        }
    }
    function Ms() {
        i([jt, qt], (function (t) {
            $e.addEventListener(t, (function (e) {
                if (e && e.target)
                    try {
                        var n = t === jt ? function (t) {
                            return {
                                valid: "A" === t.target.nodeName && !t.defaultPrevented && t.target.href,
                                url: t.target.href,
                                subType: "a_link"
                            }
                        }(e) : function (t) {
                            return {
                                valid: Yt === t.target.nodeName && !t.defaultPrevented && t.target.action,
                                url: t.target.action,
                                subType: "form_submit"
                            }
                        }(e);
                        if (n.valid) {
                            var r = e.timeStamp && function (t) {
                                var n;
                                try {
                                    n = y(Ua, (function (e) {
                                        return e.timeStamp === t.timeStamp && t.target.nodeName === e.target.nodeName
                                    }
                                    ))[0]
                                } catch (e) { }
                                if (n)
                                    return Ja(n, zt, {
                                        s: Xa(n)
                                    })
                            }(e);
                            js({
                                subType: n.subType,
                                url: n.url,
                                parent: r
                            })
                        }
                    } catch (e) { }
            }
            ), r({}, Bt, !0))
        }
        ))
    }
    function Us() {
        !function (t) {
            if (t) {
                var e = t.action
                    , n = t.data;
                e && n && 0 !== n.length && (Ds(e, n),
                    ei(e))
            }
        }(Hs),
            Hs = null
    }
    function Fs() {
        rn.hook_cross_page && (Pa(window, "open", qs),
            Ms(),
            Gi((function () {
                Us()
            }
            )))
    }
    var zs = [];
    function Ys(t) {
        t && (0 === zs.length && L(document, jt, (function (t) {
            i(zs, (function (e) {
                e(t)
            }
            ))
        }
        ), !0),
            zs.push(t))
    }
    function Gs() {
        if (rn.bcEnabled && rn.bcDomEnabled && Ys((function (t) {
            try {
                if (!t)
                    return;
                var e = t.target || t.srcElement;
                if (!e)
                    return;
                var n = Xa(t)
                    , r = e.outerText || "";
                r && (r = r.substring(0, 50)),
                    fi({
                        timestamp: n,
                        message: r,
                        category: "dom",
                        data: {
                            path: Ga(e)
                        }
                    })
            } catch (t) {
                console.log(t)
            }
        }
        )),
            un())
            try {
                to(),
                    Fs()
            } catch (t) { }
    }
    var Js = {
        uniqueId: 0
    }
        , Vs = {
            error: 990,
            abort: 905,
            timeout: 903
        };
    function Ks(t) {
        if (!rn.x_server_switch)
            return !1;
        var e = !1;
        try {
            if (t.sameOrigin = ps(t.url),
                rn.key && t.sameOrigin) {
                var n = function () {
                    try {
                        return Y(!0).substring(0, 16)
                    } catch (t) { }
                }()
                    , r = "c=B|" + rn.key;
                n && (r += ";x=" + n),
                    t.addHeader("X-Tingyun", r),
                    e = !0,
                    t.xTingyunSent = !0
            }
            if (rn.apmHeaders) {
                var a, o = Y(!0);
                i(rn.apmHeaders, (function (n) {
                    if (n) {
                        var r = t.getHeader(n);
                        null == r && rn.autoAddApmHeader && t.sameOrigin && (t.addHeader(n, o),
                            e = !0,
                            r = o),
                            null != r && (a || (a = {}),
                                a[n] = r)
                    }
                }
                )),
                    t.apms = a
            }
        } catch (s) { }
        return e
    }
    function Ws(t, e) {
        t.context || (t.context = new ci({
            parent: bs(t, (function () {
                var t = po.get("event");
                if (t && t.type == Xt)
                    return ko(t.key)
            }
            )),
            name: "".concat(t.url, "-").concat(t.id),
            type: st,
            subType: e || ve
        }),
            t.crossPage && t.context.setData({
                crossPage: !0
            }))
    }
    function Xs(t, e) {
        if (rn.x_server_switch) {
            var n = t.context.data;
            if (t.apms && (n.apms = t.apms),
                t.sameOrigin) {
                var r = t.xTingyunSent ? Un(e("X-Tingyun-Data")) : null;
                if (r) {
                    if (n.hasServerHeader = !0,
                        n.s_id = r.id,
                        n.s_tname = r.tname,
                        n.s_tid = r.tid,
                        n.s_rid = r.rid,
                        n.s_duration = r.duration,
                        "user" in r) {
                        var i = r.user
                            , a = i;
                        if (null != i && 0 === i.indexOf(it)) {
                            var o = i.substring(it.length);
                            try {
                                a = Jo.decode(o)
                            } catch (c) { }
                        }
                        n.s_user = a,
                            er(a)
                    }
                    "bid" in r && (n.s_bid = Ri(r.bid)),
                        "ber" in r && (n.s_ber = r.ber),
                        "isError" in r && (n.s_isError = r.isError)
                } else
                    n.hasServerHeader = !1;
                if (rn.serverTiming)
                    try {
                        var s = e("Server-Timing");
                        s && (n.st = s)
                    } catch (c) { }
            }
        }
    }
    function Qs(t) {
        var e = t.context.data;
        t.key && (e.__spe = 1)
    }
    function $s(t, e) {
        K.context = t.context
    }
    function Zs(t) {
        if (t.context) {
            var e = !1;
            return t.context.setData({
                state: vt
            }),
                t.context.canEnd() && (t.context.end(),
                    e = !0),
                e
        }
    }
    function tc(t) {
        if (!t || !t.context)
            return {};
        var e = t.context.data
            , n = {
                method: e.method,
                url: e.url,
                start: e.start,
                end: e.end,
                du: e.du,
                status: e.status
            };
        return t.context.subType === ve ? g(n, {
            err: e.err,
            rec: e.rec,
            send: e.send,
            requestHeader: t.headerRecord
        }) : g(n, {
            requestHeader: t.fetchOptions.headers
        }),
            n
    }
    function ec(t) {
        var e = po.get("event");
        if (e && e.key) {
            if (e.type === Xt) {
                var n = ko(e.key)
                    , r = ci.getRootContext(t.context, (function (t) {
                        return t.type === ot && t.subType !== Mt
                    }
                    ));
                if (n && r && n.id != r.id)
                    return
            }
            t.key = e.key,
                e.remain++
        }
    }
    function nc(t) {
        var e = !0;
        return i(rn.ajaxBlacklist, (function (n) {
            if (n && t.indexOf(n) > -1)
                return e = !1,
                    !1
        }
        )),
            e
    }
    function rc(t, e) {
        var n = {
            url: t.url,
            status_code: t.status,
            method: t.method,
            duration: t.du
        };
        t.apms && (n.apms = t.apms),
            fi({
                type: "http",
                category: e,
                message: t.url,
                timestamp: t.start,
                data: n
            })
    }
    var ic = {
        literal: {
            addHeader: function (t, e) {
                this.fetchOptions.headers[t] = e
            },
            getHeader: function (t) {
                return this.fetchOptions.headers[t]
            }
        },
        headers: {
            addHeader: function (t, e) {
                this.fetchOptions.headers.append(t, e)
            },
            getHeader: function (t) {
                return this.fetchOptions.headers.get(t)
            }
        },
        notSupport: {
            addHeader: j,
            getHeader: j
        }
    };
    function ac(t) {
        var e = !0
            , n = !0;
        t.fetchOptions.headers || (e = !1,
            t.fetchOptions.headers = {});
        var r = t.fetchOptions.headers;
        p(r) ? g(t, ic.headers) : l(r) ? g(t, ic.literal) : (n = !1,
            g(t, ic.notSupport)),
            t.hasOriginalHeaders = e,
            t.supportAddHeaders = n
    }
    function oc(t) {
        if (this.headers)
            return this.headers.get(t)
    }
    function sc(t, n) {
        if (t && t.context) {
            t.context.setData({
                end: t.end,
                du: t.status > 0 ? t.end - t.start : 0,
                status: t.status,
                state: vt
            });
            var r = t.context.data;
            r.err = n ? 0 : Vs.error;
            var a = {}
                , o = Ni(t.url);
            Pi(a, o.optCustomParams),
                a[2] = function (t) {
                    var e = {};
                    return i(rn.optCustomParamRules[2], (function (n) {
                        var r = t.getHeader(n);
                        null != r && (e[n] = r)
                    }
                    )),
                        e
                }(t),
                n && (a[4] = function (t) {
                    var e = {};
                    return i(rn.optCustomParamRules[4], (function (n) {
                        var r = t.headers.get(n);
                        null != r && (e[n] = r)
                    }
                    )),
                        e
                }(n));
            var s = Ii(a);
            s && (r.opt_custom_param = s),
                Xs(t, e(oc, n || {})),
                Qs(t);
            var c = {};
            if (rn.collectAllParam.URL && o.operaAllParam && (c.URL = o.operaAllParam),
                rn.collectAllParam.QH && t.fetchOptions.headers && (c.QH = t.fetchOptions.headers),
                rn.collectAllParam.RH && n && n.headers && d(n.headers.entries)) {
                var u = {};
                i(n.headers, (function (t, e) {
                    u[e] = t
                }
                )),
                    c.RH = u
            }
            return ki(c) || (r.opera_all_param = c),
                r
        }
    }
    function cc(t) {
        var e = {};
        return c(t) ? e.url = t : g(e, function (t) {
            if (!h(t) && !l(t))
                return null;
            var e = {};
            return t.url && (e.url = t.url),
                t.method && (e.method = t.method),
                t.headers && (e.headers = t.headers),
                e
        }(t)),
            e
    }
    function uc(t, e) {
        t && e && lc(t, null)
    }
    function dc(t) {
        return function e() {
            var n = e;
            n._ && (n._ = 1);
            var r = this
                , i = v.call(arguments, 0);
            return new Promise((function (e, n) {
                var a = {};
                i && (a = cc(i[0]),
                    i[1] && g(a, cc(i[1])));
                var o, s, c = nc(a.url);
                if (c) {
                    if (ac(o = {
                        id: Js.uniqueId++,
                        method: a.method || Te,
                        url: a.url,
                        start: q(),
                        fetchOptions: a,
                        shouldAddToEvent: vs(a.url),
                        scope: new Ge
                    }),
                        o.supportAddHeaders) {
                        var u = Ks(o);
                        if (!o.hasOriginalHeaders && u)
                            try {
                                i[1] || (i[1] = {}),
                                    i[1].headers = o.fetchOptions.headers
                            } catch (d) {
                                u = !1
                            }
                        o.headerAdded = u
                    }
                    Ws(o, ge),
                        ec(o),
                        o.context.setData({
                            type: st,
                            subType: ge,
                            id: o.id,
                            cid: o.context.id,
                            method: o.method,
                            url: o.url,
                            start: o.start
                        }),
                        ms(o, st)
                }
                try {
                    s = t.apply(r, i)
                } catch (d) {
                    return uc(o, c),
                        void n(d)
                }
                s.then(so((function l(t) {
                    var n = l;
                    n._ && (n._ = 1),
                        t && c && o && lc(o, t),
                        e(t)
                }
                )), so((function (t) {
                    uc(o, c),
                        n(t)
                }
                )))
            }
            ))
        }
    }
    function lc(t, e) {
        t.end = q(),
            t.status = e ? e.status : 0;
        var n = sc(t, e)
            , r = tc(t);
        ze({
            type: oe,
            name: de,
            args: {
                target: e || {},
                actionData: r
            },
            scope: t.scope
        }),
            r.st && (n.st = r.st),
            Ke(n, t.scope);
        var i = po.get("event");
        i && i.key == t.key && (i.xhrs.push(n),
            0 == --i.remain && i._end()),
            Zs(t),
            In.xhrs && In.xhrs.push(n),
            rn.bcFetchEnabled && rc(n, "fetch")
    }
    function fc(t, e, n) {
        if (t && t.context && !t.composed) {
            t.composed = !0;
            var r, a, o, s, d = Un(e), l = {};
            l[2] = (r = n.headers || {},
                a = {},
                i(rn.optCustomParamRules[2], (function (t) {
                    var e = r[t];
                    null != e && (a[t] = e)
                }
                )),
                a),
                l[3] = (o = n.requestData,
                    s = {},
                    o && u(o) && o.length > 0 && i(o, (function (t) {
                        var e = t;
                        c(t) && (e = Un(t)),
                            g(s, Di(e, rn.optCustomParamRules[3], !0))
                    }
                    )),
                    s);
            var f = Ii(l)
                , p = {
                    end: t.end,
                    du: t.end - t.start,
                    cb: t.cbTime,
                    status: 200,
                    err: d && null != d.error ? d.error : 0,
                    state: vt
                };
            f && (p.opt_custom_param = f),
                t.context.setData(p)
        }
    }
    function pc(t) {
        return t.context.data
    }
    function hc(t, e, n) {
        var r = e;
        return function (e) {
            t.end = q();
            var i, a = q();
            try {
                r && (i = r.apply(this, arguments))
            } finally {
                var o = q();
                t.cbTime = o - a
            }
            fc(t, e, n),
                ze({
                    type: oe,
                    name: de,
                    args: {
                        target: this,
                        actionData: pc(t)
                    },
                    scope: t.scope
                }),
                Ke(t.context.data, t.scope);
            var s = po.get("event");
            return s && s.key == t.key && (s.xhrs.push(t.context.data),
                0 == --s.remain && s._end()),
                Zs(t),
                i
        }
    }
    function mc(t) {
        return function () {
            var e = arguments[0]
                , n = arguments[1];
            if ("rpc" === e && n && n.operationType) {
                var r = arguments[2]
                    , i = Ce + n.operationType
                    , a = {
                        id: Js.uniqueId++,
                        url: i,
                        method: "",
                        start: q(),
                        shouldAddToEvent: vs(i),
                        scope: new Ge
                    };
                Ws(a, ye),
                    ec(a),
                    a.context.setData({
                        type: st,
                        subType: ye,
                        id: a.id,
                        cid: a.context.id,
                        method: a.method,
                        url: a.url,
                        start: a.start
                    }),
                    ms(a, st),
                    arguments[2] = hc(a, r, n)
            }
            try {
                return t.apply(self, arguments)
            } catch (o) { }
        }
    }
    var vc = ["css", "link", "script", "img", "other"]
        , gc = {}
        , yc = {}
        , bc = !1;
    function wc(t, e) {
        if (t[e]) {
            for (var n = t[e].shift(); n && n.sent;)
                n = t[e].shift();
            return n && !n.sent && n.value ? n : undefined
        }
    }
    function _c(t, e, n) {
        if (n) {
            t[e] || (t[e] = []);
            var r = {
                sent: !1,
                value: n
            };
            return t[e].push(r),
                r
        }
    }
    function Ec(t) {
        if (!t)
            return !1;
        if (!(t = function (t) {
            var e = t.indexOf("://");
            if (e < 0)
                return t;
            return t = t.substring(e + 3)
        }(t)))
            return !1;
        var e = !1;
        return i(rn.monitorResources, (function (n) {
            if (function (t, e) {
                return !(!t || !e) && (e.indexOf("*") < 0 && e.indexOf("?") < 0 ? t === e : function (t, e) {
                    for (var n = 0, r = 0, i = -1, a = 0; n < t.length;)
                        if (r < e.length && (t[n] === e[r] || "?" === e[r]))
                            n++,
                                r++;
                        else if (r < e.length && "*" == e[r])
                            i = r,
                                a = n,
                                r++;
                        else {
                            if (-1 == i)
                                return !1;
                            r = i + 1,
                                n = ++a
                        }
                    for (; r < e.length && "*" == e[r];)
                        r++;
                    return r == e.length
                }(t, e))
            }(t, n))
                return e = !0,
                    !1
        }
        )),
            e
    }
    function xc(t) {
        var e = t.url
            , n = t.error
            , r = t.res;
        if (e) {
            var i, a, o, s, c, u;
            r && !n ? (a = (i = ji(r.startTime)) + (o = Math.round(r.duration)),
                s = 200,
                c = 0,
                u = r.transferSize || 0) : (i = a = q(),
                    o = 0,
                    s = 0,
                    c = Vs.error,
                    u = 0);
            var d = {
                type: st,
                subType: be,
                method: Te,
                url: e,
                start: i,
                end: a,
                du: o,
                status: s,
                err: c,
                rec: u
            };
            ci.buildImmediateAction(st, be, d)
        }
    }
    function Tc() {
        new window.PerformanceObserver((function (t) {
            try {
                i(t.getEntries(), (function (t) {
                    var e = function (t) {
                        if (!t)
                            return {
                                valid: !1
                            };
                        var e = t.initiatorType
                            , n = t.name
                            , r = _(vc, e) > -1
                            , i = Ec(n);
                        return {
                            url: n,
                            valid: r && i
                        }
                    }(t)
                        , n = e.url;
                    if (e.valid) {
                        var r = wc(yc, n);
                        if (r)
                            xc({
                                url: n,
                                res: t,
                                error: r.value
                            }),
                                r.sent = !0;
                        else {
                            var i = _c(gc, n, t);
                            U((function () {
                                i.sent || (xc({
                                    url: n,
                                    res: t,
                                    error: !1
                                }),
                                    i.sent = !0)
                            }
                            ))
                        }
                    }
                }
                ))
            } catch (e) { }
        }
        )).observe({
            type: "resource",
            buffered: !0
        })
    }
    function Sc() {
        L($e, "error", (function (t) {
            if (t && t.target) {
                var e = t.target.src || t.target.href;
                if (e && (In.resErrs && In.resErrs.push({
                    url: e,
                    error: !0
                }),
                    bc))
                    try {
                        var n = function (t) {
                            return Ec(t)
                        }(e);
                        if (!n)
                            return;
                        var r = wc(gc, e);
                        if (r)
                            xc({
                                url: e,
                                res: r.value,
                                error: !0
                            }),
                                r.sent = !0;
                        else {
                            var i = _c(yc, e, !0);
                            U((function () {
                                i.sent || (xc({
                                    url: e,
                                    error: !0
                                }),
                                    i.sent = !0)
                            }
                            ))
                        }
                    } catch (a) { }
            }
        }
        ), !0)
    }
    var Cc = "onload"
        , Ac = "onreadystatechange"
        , kc = {};
    function Nc(t, e) {
        t._ty_rum = e.id,
            kc[e.id] = e
    }
    function Oc(t) {
        return kc[t._ty_rum]
    }
    function Rc(t) {
        return !!t && !t.__ign
    }
    function Ic(t) {
        return {
            addHeader: function (e, n) {
                try {
                    t.setRequestHeader(e, n)
                } catch (r) { }
            },
            getHeader: function (t) {
                return this.headerRecord[t]
            }
        }
    }
    function Pc(e) {
        return function n(r, i) {
            var a = this
                , o = n;
            if (o._ && (o._ = 1),
                !nc(i) && a && (a.__ign = !0),
                Rc(a)) {
                var s = {};
                s.method = r,
                    s.url = i,
                    s.id = Js.uniqueId++,
                    s.jserror = !1,
                    s.headerRecord = {},
                    s.scope = new Ge,
                    s.shouldAddToEvent = vs(i),
                    g(s, Ic(a)),
                    Ws(s),
                    ec(s),
                    s.context.setData({
                        type: st,
                        subType: ve,
                        id: s.id,
                        cid: s.context.id,
                        method: s.method,
                        url: s.url,
                        state: s.state,
                        jserror: s.jserror
                    }),
                    ms(s, st),
                    s.toJSON = function () {
                        return undefined
                    }
                    ,
                    Nc(a, s)
            }
            try {
                return e.apply(a, arguments)
            } catch (c) { }
            if (!un())
                return t(e, [a, arguments])
        }
    }
    function Dc(e) {
        return function n(r, i) {
            var a, o = this, s = n;
            if (s._ && (s._ = 1),
                Rc(o) && (a = Oc(o))) {
                var c = Fc(r, rn.optCustomParamRules);
                nn.isGather && (a.wReqHeaderParam || (a.wReqHeaderParam = {}),
                    a.wReqHeaderParam[r] = i),
                    a && c && (a.reqHeaderParam || (a.reqHeaderParam = {}),
                        a.reqHeaderParam[r] = i),
                    a.headerRecord || (a.headerRecord = {}),
                    a.headerRecord[r] = i
            }
            try {
                return e.apply(o, arguments)
            } catch (u) { }
            if (!un())
                return t(e, [o, arguments])
        }
    }
    function Lc(e) {
        return function n(r) {
            var i, a = this, o = n;
            o._ && (o._ = 1),
                Rc(a) && (i = Oc(a)) && (i.start = q(),
                    i.reqSize = F(r),
                    i.requestData = r,
                    i.context.setData({
                        start: i.start
                    }),
                    jc(a, i),
                    Ks(i));
            try {
                return e.apply(a, arguments)
            } catch (s) { }
            if (!un())
                return t(e, [a, arguments])
        }
    }
    function Bc(t, e, n) {
        t && (t.errorCode = e,
            t.errorEvent = n)
    }
    function Hc(t, e) {
        un() && (t.onload && !t.__ty_xhr_hooked && (Pa(t, Cc, e),
            t.__ty_xhr_hooked = !0,
            t[Gt] = Cc));
        var n = t.onreadystatechange;
        !n || t.__ty_xhr_hooked || n.__ty_xhr_hooked || (Pa(t, Ac, e),
            t.__ty_xhr_hooked = !0,
            t[Gt] = Ac)
    }
    function jc(t, e) {
        var n = po.getContext();
        function r(r) {
            return so((function i() {
                var n, a, o = i;
                if (o._ && (o._ = 1),
                    qc(t, e),
                    d(r))
                    if (e && 4 == t.readyState && (a = q(),
                        $s(e)),
                        rn.catchAsyncCallback)
                        try {
                            n = r.apply(this, arguments)
                        } catch (s) {
                            throw e && (e.jserror = !0),
                            s
                        } finally {
                            e && 4 == t.readyState && (e.cbTime = q() - a)
                        }
                    else
                        try {
                            n = r.apply(this, arguments)
                        } finally {
                            e && 4 == t.readyState && (e.cbTime = q() - a)
                        }
                return n
            }
            ), n)
        }
        Hc(t, r);
        try {
            un() ? function (t, e) {
                i(Vs, (function (n, r) {
                    L(t, r, (function () {
                        Bc(e, n, r),
                            t && t[Gt] === Cc && qc(t, e)
                    }
                    ))
                }
                ))
            }(t, e) : function (t, e) {
                i(Vs, (function (n, r) {
                    var i = "on" + r;
                    t[i] ? Pa(t, i, (function (t) {
                        return function () {
                            if (Bc(e, n, r),
                                d(t))
                                return t.apply(this, arguments)
                        }
                    }
                    )) : t[i] = function () {
                        Bc(e, n, r)
                    }
                }
                ))
            }(t, e)
        } catch (o) { }
        if (!t.__ty_xhr_hooked) {
            var a = so((function r() {
                var n = r;
                n._ && (n._ = 1),
                    t.__ty_xhr_hooked || 4 === t.readyState && qc(t, e)
            }
            ), n);
            try {
                un() ? L(t, Z, a) : (t.onreadystatechange = a,
                    t.onreadystatechange.__ty_xhr_hooked = !0)
            } catch (o) {
                return
            }
        }
        hn((function () {
            Hc(t, r)
        }
        ))
    }
    function qc(t, n) {
        if (n && (n.end = q(),
            n.readyState = t.readyState,
            4 == t.readyState)) {
            if (n.callbackEnd)
                return;
            n.callbackEnd = !0,
                un() && delete t.__ty_xhr_hooked,
                $s(n),
                n.status = t.status,
                n.text = function (t) {
                    var e = "";
                    if ("" == t.responseType || "text" == t.responseType)
                        e = t.responseText;
                    else if (t.response)
                        e = t.response;
                    else
                        try {
                            e = t.responseText
                        } catch (n) { }
                    return e || ""
                }(t),
                n.resSize = F(n.text);
            var r = function (t, n) {
                if (!t || !t.context || t.composed)
                    return;
                var r = t.status;
                try {
                    if (nn.isGather) {
                        var a = Mc(t.context);
                        t.wCustom = {
                            fromJS: "agent",
                            key: rn.key,
                            ajaxUrl: t.url,
                            items: t.context.items,
                            itemsTemp: a && a.items,
                            id: t.id,
                            url: or.ref,
                            text: a && a.text,
                            href: a && a.href,
                            title: a && a.title,
                            value: a && a.value,
                            src: a && a.src,
                            xpath: a && a.path,
                            nodeName: a && a.nodeName,
                            method: t.method,
                            urlParams: Gn(or.ref),
                            ajaxUrlParams: Gn(t.url),
                            start: t.start,
                            requestHeader: t.wReqHeaderParam,
                            requestParams: t.requestData,
                            responseHeader: n.getAllResponseHeaders() && n.getAllResponseHeaders().split("\n"),
                            responseBody: n.response,
                            children: []
                        },
                            window.top && window.top.postMessage && window.top.postMessage(A(t.wCustom), "*"),
                            delete t.wCustom,
                            delete t.wReqHeaderParam
                    }
                } catch (p) { }
                g(t.context.data, {
                    end: t.end,
                    du: r > 0 ? t.end - t.start : 0,
                    cb: t.cbTime || 0,
                    status: r,
                    err: t.errorCode ? t.errorCode : 0,
                    rec: t.resSize,
                    send: t.reqSize,
                    state: vt
                });
                var o = t.context.data
                    , s = {}
                    , u = Ni(t.url);
                Pi(s, u.optCustomParams),
                    s[2] = t.reqHeaderParam || {},
                    s[3] = Di(function (t) {
                        var e = Un(t);
                        e || (r = {},
                            e = c(n = (n = t) || "") && n ? r = Jn(n) : r);
                        var n, r;
                        return e
                    }(t.requestData), rn.optCustomParamRules[3], !0),
                    s[4] = function (t, e, n) {
                        var r = {};
                        return i(e[n || "3"], (function (e) {
                            var n = function (t, e) {
                                if (t && t.getResponseHeader)
                                    try {
                                        return t.getResponseHeader(e)
                                    } catch (p) { }
                            }(t, e);
                            null != n && Fn(r, e, n)
                        }
                        )),
                            r
                    }(n, rn.optCustomParamRules, et);
                var d = Un(t.text);
                d && (s[5] = Di(d, rn.optCustomParamRules[5], !0));
                var l = Ii(s);
                l && (o.opt_custom_param = l);
                Xs(t, e(Uc, n)),
                    Qs(t);
                var f = {};
                rn.collectAllParam.URL && u.operaAllParam && (f.URL = u.operaAllParam);
                rn.collectAllParam.QH && t.headerRecord && (f.QH = t.headerRecord);
                rn.collectAllParam.QB && t.requestData && (f.QB = t.requestData);
                if (rn.collectAllParam.RH)
                    try {
                        f.RH = function (t) {
                            if (!t)
                                return {};
                            var e = t.split(/\r?\n/)
                                , n = {};
                            return i(e, (function (t) {
                                if (!t)
                                    return !0;
                                var e = t.indexOf(":");
                                if (e > -1) {
                                    var r = z(t.substring(0, e))
                                        , i = z(t.substring(e + 1));
                                    r && (n[r] = i)
                                }
                            }
                            )),
                                n
                        }(n.getAllResponseHeaders())
                    } catch (p) { }
                rn.collectAllParam.RB && t.text && (f.RB = t.text);
                ki(f) || (o.opera_all_param = f);
                return t.composed = !0,
                    o
            }(n, t)
                , a = tc(n);
            if (ze({
                type: oe,
                name: de,
                args: {
                    target: t,
                    actionData: a
                },
                scope: n.scope
            }),
                a.st && (r.st = a.st),
                n.shouldAddToEvent && (K.recentFinishedAjaxContext = n.context),
                In.xhrs) {
                var o = r;
                try {
                    t.responseURL && (o = g({}, r, {
                        url: t.responseURL
                    }))
                } catch (u) { }
                In.xhrs.push(o)
            }
            var s = po.get("event");
            hn((function () {
                !function (t, e) {
                    t && e && t.jserror && (e.jserror = t.jserror);
                    t.errorCode && !e.err && (e.err = t.errorCode);
                    t.cbTime && !e.cb && (e.cb = t.cbTime);
                    Ke(e, t.scope)
                }(n, r),
                    s && s.key == n.key && (s.xhrs.push(r),
                        0 == --s.remain && s._end()),
                    Zs(n) && function (t) {
                        try {
                            kc[t._ty_rum] = null,
                                delete kc[t._ty_rum]
                        } catch (u) { }
                    }(t),
                    rn.bcXhrEnabled && rc(r, "xhr")
            }
            ))
        }
    }
    function Mc(t) {
        return t.data && "event" === t.data.type ? {
            text: t.data.text,
            path: t.data.path,
            src: t.data.src,
            value: t.data.value,
            href: t.data.href,
            title: t.data.title,
            nodeName: t.data.nodeName,
            items: t.items
        } : t.parent && t.parent.data && "event" === t.parent.data.type ? {
            text: t.parent.data.text,
            path: t.parent.data.path,
            src: t.parent.data.src,
            value: t.parent.data.value,
            href: t.parent.data.href,
            title: t.parent.data.title,
            nodeName: t.parent.data.nodeName,
            items: t.parent.items
        } : t.parent && t.parent.parent ? Mc(t.parent) : {
            text: "",
            path: "",
            nodeName: "",
            items: []
        }
    }
    function Uc(t) {
        return this.getResponseHeader(t)
    }
    function Fc(t, e) {
        var n;
        return i(e[2], (function (e) {
            if (t === e)
                return n = !0,
                    !1
        }
        )),
            n
    }
    function zc() {
        rn.hookAjax && (function () {
            if (rn.hookXhr) {
                var t = Ze && Ze.prototype;
                t ? (Pa(t, "open", Pc),
                    rn.hook_xhr_setrequestheader && Pa(t, "setRequestHeader", Dc),
                    Pa(t, "send", Lc)) : Ze && (window.XMLHttpRequest = function () {
                        var t = new Ze;
                        return Pa(t, "open", Pc),
                            rn.hook_xhr_setrequestheader && Pa(t, "setRequestHeader", Dc),
                            Pa(t, "send", Lc),
                            t
                    }
                    )
            }
        }(),
            rn.hookFetch && window.fetch && window.Promise && un() && Pa(window, "fetch", dc),
            rn.hookMPaas && window.AlipayJSBridge && d(window.AlipayJSBridge.call) && Pa(window.AlipayJSBridge, "call", mc),
            un() && function () {
                if (Sc(),
                    rn.monitorResources && 0 !== rn.monitorResources.length && window.PerformanceObserver && window.PerformanceObserver.supportedEntryTypes && !(_(window.PerformanceObserver.supportedEntryTypes, "resource") < 0)) {
                    bc = !0;
                    try {
                        Tc()
                    } catch (t) { }
                }
            }())
    }
    var Yc = ["trace", "debug", "info", "warn", "error", "log"];
    function Gc() {
        var e;
        rn.bcConsoleEnabled && window.console && (e = rn.bcParseConsoleParam ? function (t) {
            return gn(t)
        }
            : function (t) {
                return null === t ? "null" : "object" === n(t) ? "[object Object]" : String(t)
            }
            ,
            i(Yc, (function (n) {
                try {
                    var r = window.console[n];
                    if (!r)
                        return;
                    window.console[n] = function () {
                        try {
                            var a = [];
                            i([].slice.call(arguments), (function (t) {
                                try {
                                    a.push(e(t))
                                } catch (n) {
                                    a.push("[?]")
                                }
                            }
                            ));
                            var o = a.join(" ");
                            if (o) {
                                var s = n;
                                "log" === s && (s = "info"),
                                    o = o.substring(0, 1024),
                                    fi({
                                        category: Pe,
                                        level: s,
                                        message: o
                                    })
                            }
                        } catch (c) { }
                        try {
                            return r.apply(this, arguments)
                        } catch (c) { }
                        if (!un())
                            return t(r, [this, arguments])
                    }
                } catch (a) { }
            }
            )))
    }
    function Jc() {
        var t = window.onerror;
        window.onerror = function (e, n, r, i, a) {
            if (Ti(e, n, r, i, a),
                d(t))
                return t.apply(this, arguments)
        }
            ,
            window.onerror._ty = !0
    }
    function Vc() {
        var t = window.onerror;
        t && t._ty || Jc()
    }
    function Kc(t) {
        var e, n, r, i, a;
        (t instanceof window.Event || window.ErrorEvent && t instanceof window.ErrorEvent) && (e = t.message || t.error && (t.error.message || t.error.constructor.name) || "",
            n = t.lineno || 0,
            r = t.colno || 0,
            i = t.filename || t.error && t.error.filename || t.target && t.target.baseURI || "",
            a = t.error),
            Ti(e, i, n, r, a)
    }
    function Wc() {
        if (rn.errorEnabled) {
            var t = !document.addEventListener;
            t ? Jc() : L(window, "error", Kc),
                Wr.on(W, (function () {
                    t && hn(Vc)
                }
                ))
        }
    }
    function Xc(t, e) {
        return t === "[object " + e + "]"
    }
    function Qc(t) {
        if (t) {
            var e;
            try {
                "reason" in t ? e = t.reason : "detail" in t && "reason" in t.detail && (e = t.detail.reason)
            } catch (t) { }
            if (e) {
                var n = Object.prototype.toString.call(e);
                if (Xc(n, "ErrorEvent") && e.error)
                    Kc(e);
                else {
                    var r, a = function (t, e) {
                        var n, r = !1;
                        return i(e, (function (e) {
                            if (Xc(t, e))
                                return n = e,
                                    r = !0,
                                    !1
                        }
                        )),
                        {
                            typeName: n,
                            ok: r
                        }
                    }(n, ["Error", "DOMException", "DOMError"]), o = a.ok, s = a.typeName;
                    if (o) {
                        if ("stack" in e)
                            return void Si(e, null, De);
                        var c = e.name || s;
                        r = e.message ? "".concat(c, ": ").concat(e.message) : c
                    }
                    r || (r = gn(e)),
                        Ti(r)
                }
            }
        }
    }
    function $c() {
        rn.jsErrorEnabled && (Wr.on(pn(), (function () {
            xi()
        }
        )),
            setInterval(xi, 1e4),
            Wc(),
            rn.unhandledrejectionEnabled && L(window, "unhandledrejection", Qc))
    }
    function Zc(t, e) {
        if ("undefined" != typeof nbsJsBridge && nbsJsBridge.logJsResult) {
            var n = {
                rm: {},
                em: [],
                cpm: {}
            };
            e && (n.rm.res = e.res || []),
                t && (n.cpm = t,
                    n.cpm.ul = or.ref),
                nbsJsBridge.logJsResult(A(n))
        }
    }
    var tu = "{0} not support";
    function eu() {
        if (!rn.pageServerData) {
            var t = function () {
                var t = {}
                    , e = function (t, e, n) {
                        if (!n)
                            try {
                                n = e && window[e] || $e.cookie || ""
                            } catch (i) { }
                        if (n) {
                            var r = n.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                            return r ? r[3] : null
                        }
                        return null
                    }(rt, nt);
                e && (t = function (t) {
                    var e, n;
                    if (t)
                        if (0 === t.indexOf(it)) {
                            var r = t.substring(it.length);
                            try {
                                e = Un(n = Jo.decode(r))
                            } catch (i) { }
                        } else {
                            try {
                                e = Un(n = decodeURIComponent(t))
                            } catch (i) { }
                            if (!e)
                                try {
                                    e = Un(n = decodeURIComponent(n))
                                } catch (i) {
                                    Dn(i && i.message)
                                }
                        }
                    return e
                }(e),
                    function (t, e, n, r, i) {
                        var a = t + "=" + e;
                        if (n) {
                            var o = new Date;
                            o.setTime(o.getTime() + 1e3 * n),
                                a += ";expires=" + o.toGMTString()
                        }
                        r && (a += ";path=" + r),
                            (i || $e).cookie = a
                    }(rt, "", -1e3, "/"));
                return t
            }()
                , e = {};
            t && l(t) && (e.s_id = t.id,
                e.s_tname = t.tname,
                e.s_tid = t.tid,
                e.s_rid = t.rid,
                e.s_duration = t.duration,
                "user" in t && (e.s_user = t.user,
                    er(t.user)),
                "bid" in t && (e.s_bid = Ri(t.bid)),
                "ber" in t && (e.s_ber = t.ber),
                "isError" in t && (e.s_isError = t.isError)),
                rn.pageServerData = e
        }
    }
    var nu = {}
        , ru = [St, Ct, "workerStart", xt, Tt, At, kt, bt, wt, Nt, Ot, Rt, It]
        , iu = 0
        , au = 1
        , ou = 2;
    function su(t, e, n) {
        var r = {
            tt: o($e.title),
            charset: $e.characterSet
        };
        G.resources && g(r, G.resources),
            Hi((function () {
                ki(n.resource.handler) || (Bi.resource = n.resource.statistic),
                    r.debug = Bi
            }
            )),
            Li = !1;
        var a = In.errs;
        i(a, (function (t, n) {
            var r = t.toObject();
            r.o = r.o - e && e.navigationStart || w,
                a[n] = r
        }
        )),
            r.err = a;
        var s, c = "getEntriesByType";
        return t.getEntriesByType ? s = t.getEntriesByType("resource") : qn(b(tu, [c])),
            s && (r.res = [],
                i(s, (function (t) {
                    function e(e) {
                        var n = t[e];
                        return n > 0 ? n : 0
                    }
                    var n = t.initiatorType
                        , a = t.name
                        , o = {
                            o: e("startTime"),
                            rt: n,
                            n: a,
                            f: e(yt),
                            ds: e(xt),
                            de: e(Tt),
                            cs: e(At),
                            ce: e(kt),
                            sl: e(Nt),
                            qs: e(bt),
                            rs: e(wt),
                            re: e(_t),
                            ts: t.transferSize || 0,
                            es: t.encodedBodySize || 0,
                            dbs: t.decodedBodySize || 0
                        };
                    if (ke === n || "fetch" === n) {
                        var s = n === ke ? ve : ge
                            , c = cu(a, In.xhrs, s);
                        c ? (i(c, (function (t, e) {
                            0 == e.indexOf("s_") && (o[e] = t)
                        }
                        )),
                            c.st && (o.st = c.st),
                            c.apms && (o.apms = c.apms),
                            o.status = c.status,
                            o.cb = c.cb,
                            o.err = c.err,
                            o.error = c.status >= 400 || c.err > 0 ? au : ou) : o.error = iu
                    } else {
                        var u = cu(a, In.resErrs);
                        o.error = u ? au : ou;
                        var d = 200;
                        u ? d = 0 : 300 === t.transferSize && (d = 304),
                            o.status = d,
                            o.err = u ? Vs.error : 0
                    }
                    o.cors = function (t) {
                        var e = !0;
                        i(ru, (function (n) {
                            if (null != t[n] && 0 !== t[n])
                                return e = !1,
                                    !1
                        }
                        ));
                        var n = !0;
                        Pt in t && (n = "" === t.nextHopProtocol);
                        return e && n ? au : ou
                    }(t),
                        o.cached = function (t, e) {
                            if (e === au)
                                return iu;
                            if (null == t.transferSize)
                                return iu;
                            return t.transferSize <= 300 ? au : ou
                        }(t, o.cors),
                        o.compressed = function (t, e) {
                            if (e === au)
                                return iu;
                            if (null == t.encodedBodySize || null == t.decodedBodySize)
                                return iu;
                            return t.encodedBodySize < t.decodedBodySize ? au : ou
                        }(t, o.cors),
                        r.res.push(o)
                }
                ))),
            r
    }
    function cu(t, e, n) {
        var r, a;
        if (t)
            return i(e, (function (e, i) {
                if (e && t.indexOf(e.url) > -1 && (!n || e.subType === n))
                    return r = e,
                        a = i,
                        !1
            }
            )),
                r && e.splice(a, 1),
                r
    }
    function uu() {
        var t = {}
            , e = 0
            , n = window.performance;
        n && n.getEntriesByType && i(n.getEntriesByType("mark") || [], (function (n) {
            if (n && n.name && n.startTime && 0 === n.name.indexOf("ty_")) {
                var r = n.name.substring("ty_".length);
                r && (t[r] = Math.round(n.startTime),
                    e += 1)
            }
        }
        ));
        var r = n && n.timing ? n.timing.navigationStart : w
            , a = g({}, window.__TINGYUN && window.__TINGYUN.data || {}, V || {});
        return a && n && n.timing && i(a, (function (n, i) {
            n && l(n) && n.timestamp && (t[i] = n.timestamp - r,
                e += 1)
        }
        )),
            e > 0 ? t : null
    }
    function du(t, e, n) {
        var r = g({}, t || {}, {
            type: dt,
            subType: n
        });
        return K.recordingCpActions && (r.crossPage = !0),
            e && (r.body = e),
            r
    }
    var lu = M((function () {
        if (nu.overview) {
            var t = g({}, nu.overview)
                , e = Oa(t);
            t.st = e;
            var n = du(t, null, mt);
            ci.buildImmediateAction(dt, mt, n)
        }
    }
    ))
        , fu = M((function (t) {
            if (!K.pfSent) {
                var e = window.performance
                    , n = !!e
                    , r = e && e.timing;
                n || qn(b(tu, ["pf"]));
                var a = g(Ra(window), rn.pageServerData, G)
                    , s = {
                        metric: {
                            le: a.le
                        },
                        debug: {}
                    };
                try {
                    xa(s),
                        ia(s),
                        Ca(s),
                        ka(s, {
                            context: t
                        })
                } catch (w) { }
                Hi((function () {
                    Bi.calc = s.debug
                }
                ));
                var c = g(a, s.metric)
                    , u = uu();
                u && i(u, (function (t, e) {
                    f(t) && t >= 0 && (c[e] = t)
                }
                ));
                var d, l = "", p = r ? function (t) {
                    if (t) {
                        var e = t.fetchStart;
                        if (e)
                            return e - t.navigationStart
                    }
                    return undefined
                }(r) : 0;
                i(["fp", "fs", "dr", "le"], (function (t) {
                    l += (p ? c[t] - p : c[t]) >= rn[t + "_threshold"] ? "1" : "0"
                }
                ));
                var h = !1;
                n && l.indexOf("1") > -1 && (h = !0,
                    d = su(e, r, t),
                    c.ressize = !(!e || !e.getEntriesByName)),
                    u && (d || (d = {}),
                        d.mark = u),
                    c.trflag = l || "0000",
                    J.pfStart = q(),
                    delete c.firstScreenResources,
                    delete c.resources,
                    d || (d = {
                        tt: o($e.title),
                        charset: $e.characterSet
                    });
                var m = K.pageUrlInfo || {};
                rn.collectAllParam.URL && m.operaAllParam && (d.opera_all_param = {},
                    d.opera_all_param.URL = m.operaAllParam),
                    t._ctx.pageClose && (c.st = Oa(c)),
                    nu.overview = c;
                var v = wa(h);
                v && (d.webVitals = v),
                    In.visibilities && In.visibilities.length > 0 && (d.vsby = In.visibilities);
                var y = du(c, d, ht);
                t.setSendOptions({
                    query: {
                        ps: 1
                    }
                }),
                    g(t.eventData.data, y);
                try {
                    Zc(c, d)
                } catch (w) { }
                K.pfSent = !0,
                    In.clear(),
                    ze({
                        type: oe,
                        name: ue,
                        args: {
                            actionData: y
                        },
                        scope: We()
                    }),
                    K.pageActionData = y
            }
        }
        ));
    function pu(t) {
        K.recordingPageLoadEvent = !1,
            K.pageLoadEvent && (t && (K.pageLoadEvent._ctx.pageClose = !0),
                K.pageLoadEvent.endLock = !1,
                K.pageLoadEvent.end())
    }
    var hu = M((function () {
        K.pageLoadEvent && (K.pageLoadEvent.closed ? lu() : (pu(!0),
            K.pageLoadEvent.closed || K.pageLoadEvent.timeout()))
    }
    ));
    function mu() {
        var t;
        eu(),
            t = Ni(or.ref),
            K.pageUrlInfo = t,
            t.optCustomParams && (K.opt_custom_param = t.optCustomParams);
        try {
            rn.baseHref = ($e.getElementsByTagName("base")[0] || {}).href
        } catch (n) { }
        var e = window.screen;
        (e && (or.sh = e.height,
            or.sw = e.width),
            or.pvid = Y(),
            is("pvid", or.pvid),
            rn.bcNavigationEnabled) && fi({
                category: "navigation",
                timestamp: ra().startTime,
                message: or.ref
            })
    }
    function vu() {
        if (K.recordingPageLoadEvent = !0,
            K.pageLoadEvent = new ci({
                type: dt,
                subType: ht,
                endLock: !0
            }),
            K.pageLoadEvent.addPostComposer(fu),
            un()) {
            var t = Un(Ln(Dt));
            t && t.fromUrl && $e.referrer && t.fromUrl.indexOf($e.referrer) > -1 && (K.recordingCpActions = !0,
                K.cpParent = t,
                K.pageLoadEvent.addPostComposer(Ls)),
                Hn(Dt)
        }
        return function () {
            if (un()) {
                var t = 0;
                try {
                    t = window.performance.timing.loadEventEnd
                } catch (e) { }
                return t > 0
            }
            return $e.readyState === tt
        }() && !K.pfSent && pu(),
            Wr.on(W, (function () {
                var t = 0;
                if (rn.pfDelay && l(rn.pfDelay)) {
                    var e = uu();
                    i(rn.pfDelay, (function (n, r) {
                        (!e || null == e[r]) && f(n) && n > t && (t = n)
                    }
                    ))
                }
                K.pageLoadEvent && !K.pageLoadEvent.hasChildType(st) && rn.pageLoadDelay > t && (t = rn.pageLoadDelay),
                    U((function () {
                        pu()
                    }
                    ), t)
            }
            )).on(fn(), hu)
    }
    var gu = 0
        , yu = 0;
    function bu(t) {
        if (q() - yu > 300 && (gu = 0),
            gu++,
            yu = q(),
            3 === gu)
            try {
                Ai({
                    name: "rage_click",
                    context: {
                        path: Ga(t.target || t.srcElement)
                    }
                })
            } catch (e) { }
    }
    function wu(t) {
        try {
            var e;
            if (!t || !t.data || 0 !== t.data.indexOf("_TINGYUN"))
                return;
            if (Un(e = t.data.replace("_TINGYUN", ""))) {
                var n = Un(e);
                if ("gather" === n.type && "APM" === n.fromJS && !window.TY_path_gather) {
                    nn.isGather = !0;
                    var r = t.origin
                        , i = document.getElementsByTagName("head")[0]
                        , a = document.createElement("script");
                    a.type = "text/javascript",
                        a.src = r + "/assets/lib/gather/path-gather.min.js?version=" + (o = new Date,
                            (s = o || new Date).getFullYear() + "-" + (s.getMonth() + 1 < 10 ? "0" + (s.getMonth() + 1) : s.getMonth() + 1) + "-" + s.getDate() + " "),
                        i.appendChild(a)
                }
            }
        } catch (c) { }
        var o, s
    }
    function _u() {
        !function () {
            if ("undefined" != typeof nbsJsBridge && nbsJsBridge.context) {
                var t = nbsJsBridge.context;
                null != t.deviceId && Zn(t.deviceId),
                    null != t.userId && er(t.userId),
                    Ve(t.context),
                    K.nbsJsBridgeData = t
            }
        }(),
            mn() ? Xn = function (t) {
                window.webkit.messageHandlers.nbsBrowserAgent.postMessage(t)
            }
                : vn() && (Xn = function (t) {
                    nbsJsBridge.postMessage(t)
                }
                )
    }
    function Eu() {
        var t;
        Je(),
            _u(),
            function () {
                if (!K.did) {
                    var t = Ln(Kt);
                    t || (t = Y(),
                        Bn(Kt, t)),
                        K.did = t
                }
                if (!K.uid) {
                    var e = Ln(Jt);
                    e && (K.uid = e)
                }
            }(),
            di(),
            rn.bcEnabled && (ii = new li({
                maxSize: rn.bcMaxCacheSize
            })),
            mu(),
            yn = new kn,
            function () {
                if (un())
                    try {
                        L(window, "message", wu)
                    } catch (t) { }
            }(),
            Ps(),
            vu(),
            zc(),
            $c(),
            rn.routerEnable && ("history" === rn.routerMode && window.history ? es() : "hash" === rn.routerMode ? ns() : window.history ? es() : ns()),
            Gs(),
            As(),
            rn.monitorRage && Ys(bu),
            Ea(),
            Gc(),
            In._end = q(),
            Hi((function () {
                Bi._end = In._end
            }
            )),
            t = rn.sendInterval,
            rn.sendInterval < 1e3 && (t = 1e3),
            setInterval((function () {
                ri({
                    tr: "timer"
                })
            }
            ), t),
            Wr.on(fn(), (function () {
                ri({
                    tr: "pagehide"
                })
            }
            ))
    }
    function xu(t) {
        var e = {};
        if (d(t)) {
            var n = {};
            t(n),
                e = n
        } else
            e = {
                server: t
            };
        var r = e.server;
        window.__TINGYUN || (window.__TINGYUN = {
            hook: {}
        });
        var a = Br(r)
            , o = a.config
            , s = a.configKey
            , c = a.storedConfig
            , u = a.valid
            , l = !pi();
        l && u && (i(o.plugins, (function (t) {
            Wo(t)
        }
        )),
            i(K.plugins, (function (t) {
                if (!t || !d(t.setup))
                    return !0;
                t.setup(Ko())
            }
            )),
            Eu(),
            window.TINGYUN.inited = !0,
            pi() && i(K.plugins, (function (t) {
                if (!t || !d(t.init))
                    return !0;
                t.init(Ko())
            }
            )),
            os()),
            pi() && (ze({
                type: ae,
                name: ce,
                args: {
                    firstInit: l,
                    config: r
                }
            }),
                l && xr(s, c))
    }
    function Tu(t) {
        t && (d(t) || l(t)) && xu(t)
    }
    return window.TINGYUN && 3 === window.TINGYUN.mainVersion ? window.TINGYUN : (is(Ie, Tu),
        window.TINGYUN = rs,
        function () {
            if (!window.TingyunWeb)
                return window.TingyunWeb = ss,
                    void (ss.q = []);
            window.TingyunWeb.q && i(window.TingyunWeb.q, (function (t, e) {
                if (t && t[0] === Ie) {
                    try {
                        window.TingyunWeb.q.splice(e, 1),
                            as.apply(null, t)
                    } catch (n) { }
                    return !1
                }
            }
            ))
        }(),
        rs)
}();

!function () {
    debugger;
    window.TINGYUN && window.TINGYUN.init && window.TINGYUN.init({
        "domain": "wkbrs2.tingyun.com",
        "token": "3dade77ce3d3433693649168a13b5ea8",
        "key": "Y3RtLHFeSg4",
        "id": "1soD_HCpz0M",
        "page": {
            "drThreshold": 4500,
            "fpThreshold": 2500,
            "fsThreshold": 4500,
            "leThreshold": 8500
        },
        "operation": {
            "rageClickEnabled": false
        },
        "replay": {
            "sampleRate": 0.1
        }
    })
}();
/*TY_AGENT_END*/

// https://wkbrs2.tingyun.com/action?ref=https%3A%2F%2Fwww.adidas.com.cn%2Fpdp%3FarticleId%3DID4795&referrer=https%3A%2F%2Fwww.adidas.com.cn%2Fpdp%3FarticleId%3DID4795&v=3.4.3&av=3.4.3&ua=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36&id=1soD_HCpz0M&key=Y3RtLHFeSg4&token=3dade77ce3d3433693649168a13b5ea8&sid=cfa561fa-9231-404e-831d-4c88ffc83bfb&__s=1681309659024&sh=1080&sw=1920&pvid=e8076589-ce7e-44b4-993e-1420a7c730d8&did=e286b15b-4c85-4402-97ee-1e5db55b38e5&url=chrome%3A%2F%2Fnewtab%2F&ps=1&__r=1681309659153
// https://wkbrs2.tingyun.com/action?ref=https%3A%2F%2Fwww.adidas.com.cn%2Fpdp%3FarticleId%3DID4795&referrer=https%3A%2F%2Fwww.adidas.com.cn%2Fpdp%3FarticleId%3DID4795&v=3.4.3&av=3.4.3&ua=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Safari%2F537.36&id=1soD_HCpz0M&key=Y3RtLHFeSg4&token=3dade77ce3d3433693649168a13b5ea8&sid=28c85ffa-0c55-4dc7-8cd6-ceb0532bebd1&__s=1681309816286&sh=1080&sw=1920&pvid=8d5f55db-1a0f-41c1-a1cf-bc7bfd8779b6&did=e053be46-9f43-4249-b631-a352bd05ae84&url=chrome%3A%2F%2Fnewtab%2F&ps=1&__r=1681309816455