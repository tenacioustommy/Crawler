var r = function() {
    document.URL;
    var e = {}, r = Array.prototype,
        a = Object.prototype,
        i = r.slice,
        n = a.toString,
        s = a.hasOwnProperty,
        o = r.forEach,
        c = Array.isArray,
        l = {}, u = e.each = function(t, r, a) {
            if (null == t) return !1;
            if (o && t.forEach === o) t.forEach(r, a);
            else if (e.isArray(t) && t.length === +t.length) {
                for (var i = 0, n = t.length; i < n; i++)
                if (i in t && r.call(a, t[i], i, t) === l) return !1
            } else for (var c in t)
            if (s.call(t, c) && r.call(a, t[c], c, t) === l) return !1
        };
    return e.map = function(e, t) {
        var r = [];
        return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (u(e, function(e, a, i) {
            r.push(t(e, a, i))
        }),
        r)
    },
    e.extend = function(e) {
        return u(i.call(arguments, 1), function(t) {
            for (var r in t)
            s.call(t, r) && void 0 !== t[r] && (e[r] = t[r])
        }),
        e
    },
    e.extend2Lev = function(t) {
        return u(i.call(arguments, 1), function(r) {
            for (var a in r)
            void 0 !== r[a] && (e.isObject(r[a]) && e.isObject(t[a]) ? e.extend(t[a], r[a]) : t[a] = r[a])
        }),
        t
    },
    e.coverExtend = function(e) {
        return u(i.call(arguments, 1), function(t) {
            for (var r in t)
            void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
        }),
        e
    },
    e.isArray = c || function(e) {
        return "[object Array]" === n.call(e)
    },
    e.isFunction = function(e) {
        if (!e) return !1;
        var t = Object.prototype.toString.call(e);
        return "[object Function]" == t || "[object AsyncFunction]" == t
    },
    e.isArguments = function(e) {
        return !(!e || !s.call(e, "callee"))
    },
    e.toArray = function(t) {
        return t ? t.toArray ? t.toArray() : e.isArray(t) ? i.call(t) : e.isArguments(t) ? i.call(t) : e.values(t) : []
    },
    e.values = function(e) {
        var t = [];
        return null == e ? t : (u(e, function(e) {
            t[t.length] = e
        }),
        t)
    },
    e.indexOf = function(e, t) {
        var r = e.indexOf;
        if (r) return r.call(e, t);
        for (var a = 0; a < e.length; a++)
        if (t === e[a]) return a;
        return -1
    },
    e.hasAttributes = function(t, r) {
        if ("string" == typeof r) return e.hasAttribute(t, r);
        if (e.isArray(r)) {
            for (var a = !1, i = 0; i < r.length; i++) {
                var n = e.hasAttribute(t, r[i]);
                if (n) {
                    a = !0;
                    break
                }
            }
            return a
        }
    },
    e.hasAttribute = function(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : !(!e.attributes[t] || !e.attributes[t].specified)
    },
    e.filter = function(e, t, r) {
        var a = Object.prototype.hasOwnProperty;
        if (e.filter) return e.filter(t);
        for (var i = [], n = 0; n < e.length; n++)
        if (a.call(e, n)) {
            var s = e[n];
            t.call(r, s, n, e) && i.push(s)
        }
        return i
    },
    e.inherit = function(e, t) {
        return e.prototype = new t,
        e.prototype.constructor = e,
        e.superclass = t.prototype,
        e
    },
    e.trim = function(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    },
    e.isObject = function(e) {
        return null != e && "[object Object]" == n.call(e)
    },
    e.isEmptyObject = function(t) {
        if (e.isObject(t)) {
            for (var r in t)
            if (s.call(t, r)) return !1;
            return !0
        }
        return !1
    },
    e.isUndefined = function(e) {
        return void 0 === e
    },
    e.isString = function(e) {
        return "[object String]" == n.call(e)
    },
    e.isDate = function(e) {
        return "[object Date]" == n.call(e)
    },
    e.isBoolean = function(e) {
        return "[object Boolean]" == n.call(e)
    },
    e.isNumber = function(e) {
        return "[object Number]" == n.call(e) && /[\d\.]+/.test(String(e))
    },
    e.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    },
    e.isJSONString = function(e) {
        try {
            JSON.parse(e)
        } catch (t) {
            return !1
        }
        return !0
    },
    e.safeJSONParse = function(e) {
        var t = null;
        try {
            t = JSON.parse(e)
        } catch (r) {
            return !1
        }
        return t
    },
    e.decodeURIComponent = function(e) {
        var t = e;
        try {
            t = decodeURIComponent(e)
        } catch (r) {
            t = e
        }
        return t
    },
    e.decodeURI = function(e) {
        var t = e;
        try {
            t = decodeURI(e)
        } catch (r) {
            t = e
        }
        return t
    },
    e.isDecodeURI = function(t, r) {
        return t ? e.decodeURI(r) : r
    },
    e.encodeDates = function(t) {
        return e.each(t, function(r, a) {
            e.isDate(r) ? t[a] = e.formatDate(r) : e.isObject(r) && (t[a] = e.encodeDates(r))
        }),
        t
    },
    e.mediaQueriesSupported = function() {
        return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
    },
    e.getScreenOrientation = function() {
        var t = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
            r = "\u672a\u53d6\u5230\u503c";
        if (t) r = t.indexOf("landscape") > -1 ? "landscape" : "portrait";
        else if (e.mediaQueriesSupported()) {
            var a = window.matchMedia || window.msMatchMedia;
            a("(orientation: landscape)").matches ? r = "landscape" : a("(orientation: portrait)").matches && (r = "portrait")
        }
        return r
    },
    e.now = Date.now || function() {
        return (new Date).getTime()
    },
    e.throttle = function(t, r, a) {
        var i, n, s, o = null,
            c = 0;
        a || (a = {});
        var l = function() {
            c = a.leading === !1 ? 0 : e.now(),
            o = null,
            s = t.apply(i, n),
            o || (i = n = null)
        };
        return function() {
            var u = e.now();
            c || a.leading !== !1 || (c = u);
            var d = r - (u - c);
            return i = this,
            n = arguments,
            d <= 0 || d > r ? (o && (clearTimeout(o),
            o = null),
            c = u,
            s = t.apply(i, n),
            o || (i = n = null)) : o || a.trailing === !1 || (o = setTimeout(l, d)),
            s
        }
    },
    e.hashCode = function(e) {
        if ("string" != typeof e) return 0;
        var t = 0,
            r = null;
        if (0 == e.length) return t;
        for (var a = 0; a < e.length; a++)
        r = e.charCodeAt(a),
        t = (t << 5) - t + r,
        t &= t;
        return t
    },
    e.formatDate = function(e) {
        function t(e) {
            return e < 10 ? "0" + e : e
        }
        return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
    },
    e.getRandomBasic = function() {
        function e() {
            return r = (9301 * r + 49297) % 233280,
            r / 233280
        }
        var t = new Date,
            r = t.getTime();
        return function(t) {
            return Math.ceil(e() * t)
        }
    }(),
    e.getRandom = function() {
        if ("function" == typeof Uint32Array) {
            var t = "";
            if ("undefined" != typeof crypto ? t = crypto : "undefined" != typeof msCrypto && (t = msCrypto),
            e.isObject(t) && t.getRandomValues) {
                var r = new Uint32Array(1),
                    a = t.getRandomValues(r)[0],
                    i = Math.pow(2, 32);
                return a / i
            }
        }
        return e.getRandomBasic(1e19) / 1e19
    },
    e.searchObjDate = function(t) {
        e.isObject(t) && e.each(t, function(r, a) {
            e.isObject(r) ? e.searchObjDate(t[a]) : e.isDate(r) && (t[a] = e.formatDate(r))
        })
    },
    e.searchZZAppStyle = function(e) {
        "undefined" != typeof e.properties.$project && (e.project = e.properties.$project,
        delete e.properties.$project),
            "undefined" != typeof e.properties.$token && (e.token = e.properties.$token,
        delete e.properties.$token)
    },
    e.formatJsonString = function(e) {
        try {
            return JSON.stringify(e, null, "  ")
        } catch (t) {
            return JSON.stringify(e)
        }
    },
    e.formatString = function(r, a) {
        return e.isNumber(a) && r.length > a ? (t.log("\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u9650\u5236\uff0c\u5df2\u7ecf\u505a\u622a\u53d6--" + r),
        r.slice(0, a)) : r
    },
    e.searchObjString = function(r) {
        var a = ["$element_selector", "$element_path"];
        e.isObject(r) && e.each(r, function(i, n) {
            e.isObject(i) ? e.searchObjString(r[n]) : e.isString(i) && (r[n] = e.formatString(i, e.indexOf(a, n) > -1 ? 1024 : t.para.max_string_length))
        })
    },
    e.parseSuperProperties = function(r) {
        var a = r.properties,
            i = JSON.parse(JSON.stringify(r));
        e.isObject(a) && (e.each(a, function(r, n) {
            if (e.isFunction(r)) try {
                a[n] = r(i),
                e.isFunction(a[n]) && (t.log("\u60a8\u7684\u5c5e\u6027- " + n + " \u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),
                delete a[n])
            } catch (s) {
                delete a[n],
                t.log("\u60a8\u7684\u5c5e\u6027- " + n + " \u629b\u51fa\u4e86\u5f02\u5e38\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
            }
        }),
        e.strip_sa_properties(a))
    },
    e.filterReservedProperties = function(r) {
        var a = ["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"];
        e.isObject(r) && e.each(a, function(e, a) {
            e in r && (a < 3 ? (delete r[e],
            t.log("\u60a8\u7684\u5c5e\u6027- " + e + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664")) : t.log("\u60a8\u7684\u5c5e\u6027- " + e + "\u662f\u4fdd\u7559\u5b57\u6bb5\uff0c\u8bf7\u907f\u514d\u5176\u4f5c\u4e3a\u5c5e\u6027\u540d"))
        })
    },
    e.searchConfigData = function(e) {
        if ("object" == typeof e && e.$option) {
            var t = e.$option;
            return delete e.$option,
            t
        }
        return {}
    },
    e.unique = function(e) {
        for (var t, r = [], a = {}, i = 0; i < e.length; i++)
        t = e[i],
        t in a || (a[t] = !0,
        r.push(t));
        return r
    },
    e.strip_sa_properties = function(r) {
        return e.isObject(r) ? (e.each(r, function(a, i) {
            if (e.isArray(a)) {
                var n = [];
                e.each(a, function(r) {
                    e.isString(r) ? n.push(r) : t.log("\u60a8\u7684\u6570\u636e-", i, a, "\u7684\u6570\u7ec4\u91cc\u7684\u503c\u5fc5\u987b\u662f\u5b57\u7b26\u4e32,\u5df2\u7ecf\u5c06\u5176\u5220\u9664")
                }),
                r[i] = n
            }
            e.isString(a) || e.isNumber(a) || e.isDate(a) || e.isBoolean(a) || e.isArray(a) || e.isFunction(a) || "$option" === i || (t.log("\u60a8\u7684\u6570\u636e-", i, a, "-\u683c\u5f0f\u4e0d\u6ee1\u8db3\u8981\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u5220\u9664"),
            delete r[i])
        }),
        r) : r
    },
    e.strip_empty_properties = function(t) {
        var r = {};
        return e.each(t, function(e, t) {
            null != e && (r[t] = e)
        }),
        r
    },
    e.base64Encode = function(e) {
        return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
            return String.fromCharCode("0x" + t)
        }))
    },
    e.base64Decode = function(t) {
        var r = e.map(atob(t).split(""), function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        });
        return decodeURIComponent(r.join(""))
    },
    e.UUID = function() {
        var t = function() {
            for (var e = 1 * new Date, t = 0; e == 1 * new Date;)
            t++;
            return e.toString(16) + t.toString(16)
        }, r = function() {
            return e.getRandom().toString(16).replace(".", "")
        }, a = function() {
            function e(e, t) {
                var r, a = 0;
                for (r = 0; r < t.length; r++)
                a |= i[r] << 8 * r;
                return e ^ a
            }
            var t, r, a = navigator.userAgent,
                i = [],
                n = 0;
            for (t = 0; t < a.length; t++)
            r = a.charCodeAt(t),
            i.unshift(255 & r),
            i.length >= 4 && (n = e(n, i),
            i = []);
            return i.length > 0 && (n = e(n, i)),
            n.toString(16)
        };
        return function() {
            var i = String(screen.height * screen.width);
            i = i && /\d{5,}/.test(i) ? i.toString(16) : String(31242 * e.getRandom()).replace(".", "").slice(0, 8);
            var n = t() + "-" + r() + "-" + a() + "-" + i + "-" + t();
            return n ? n : (String(e.getRandom()) + String(e.getRandom()) + String(e.getRandom())).slice(2, 15)
        }
    }(),
    e.getQueryParam = function(t, r) {
        r = r.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
        t = e.decodeURIComponent(t);
        var a = "[\\?&]" + r + "=([^&#]*)",
            i = new RegExp(a),
            n = i.exec(t);
        return null === n || n && "string" != typeof n[1] && n[1].length ? "" : e.decodeURIComponent(n[1])
    },
    e.urlParse = function(e) {
        var r = function(e) {
            this._fields = {
                Username: 4,
                Password: 5,
                Port: 7,
                Protocol: 2,
                Host: 6,
                Path: 8,
                URL: 0,
                QueryString: 9,
                Fragment: 10
            },
            this._values = {},
            this._regex = null,
            this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/,
                "undefined" != typeof e && this._parse(e)
        };
        return r.prototype.setUrl = function(e) {
            this._parse(e)
        },
        r.prototype._initValues = function() {
            for (var e in this._fields)
            this._values[e] = ""
        },
        r.prototype.addQueryString = function(e) {
            if ("object" != typeof e) return !1;
            var t = this._values.QueryString || "";
            for (var r in e)
            t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) : "&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];
            this._values.QueryString = t
        },
        r.prototype.getUrl = function() {
            var e = "";
            return e += this._values.Origin,
            e += this._values.Port ? ":" + this._values.Port : "",
            e += this._values.Path,
            e += this._values.QueryString ? "?" + this._values.QueryString : "",
            e += this._values.Fragment ? "#" + this._values.Fragment : ""
        },
        r.prototype.getUrl = function() {
            var e = "";
            return e += this._values.Origin,
            e += this._values.Port ? ":" + this._values.Port : "",
            e += this._values.Path,
            e += this._values.QueryString ? "?" + this._values.QueryString : ""
        },
        r.prototype._parse = function(e) {
            this._initValues();
            var r = this._regex.exec(e);
            r || t.log("DPURLParser::_parse -> Invalid URL");
            for (var a in this._fields) "undefined" != typeof r[this._fields[a]] && (this._values[a] = r[this._fields[a]]);
            this._values.Hostname = this._values.Host.replace(/:\d+$/, ""),
            this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
        },
        new r(e)
    },
    e.addEvent = function() {
        function r(e) {
            return e && (e.preventDefault = r.preventDefault,
            e.stopPropagation = r.stopPropagation,
            e._getPath = r._getPath),
            e
        }

        function a(e, t, a, i) {
            var n = function(n) {
                if (n = n || r(window.event)) {
                    n.target = n.srcElement;
                    var s, o, c = !0;
                    return "function" == typeof a && (s = a(n)),
                    o = t.call(e, n),
                        "beforeunload" !== i ? (!1 !== s && !1 !== o || (c = !1),
                    c) : void 0
                }
            };
            return n
        }
        r._getPath = function() {
            var e = this,
                t = function() {
                    try {
                        var t = e.target,
                            r = [t];
                        if (null === t || null === t.parentElement) return [];
                        for (; null !== t.parentElement;)
                        t = t.parentElement,
                        r.push(t);
                        return r
                    } catch (a) {
                        return []
                    }
                };
            return this.path || this.composedPath && this.composedPath() || t()
        },
        r.preventDefault = function() {
            this.returnValue = !1
        },
        r.stopPropagation = function() {
            this.cancelBubble = !0
        };
        var i = function(i, n, s) {
            var o = !(!e.isObject(t.para.heatmap) || !t.para.heatmap.useCapture);
            if (e.isObject(t.para.heatmap) && "undefined" == typeof t.para.heatmap.useCapture && "click" === n && (o = !0),
            i && i.addEventListener) i.addEventListener(n, function(e) {
                e._getPath = r._getPath,
                s.call(this, e)
            }, o);
            else {
                var c = "on" + n,
                    l = i[c];
                i[c] = a(i, s, l, n)
            }
        };
        i.apply(null, arguments)
    },
    e.addHashEvent = function(t) {
        var r = "pushState" in window.history ? "popstate" : "hashchange";
        e.addEvent(window, r, t)
    },
    e.addSinglePageEvent = function(t) {
        var r = location.href,
            a = window.history.pushState,
            i = window.history.replaceState;
        e.isFunction(window.history.pushState) && (window.history.pushState = function() {
            a.apply(window.history, arguments),
            t(r),
            r = location.href
        }),
        e.isFunction(window.history.replaceState) && (window.history.replaceState = function() {
            i.apply(window.history, arguments),
            t(r),
            r = location.href
        });
        var n;
        n = window.document.documentMode ? "hashchange" : a ? "popstate" : "hashchange",
        e.addEvent(window, n, function() {
            t(r),
            r = location.href
        })
    },
    e.cookie = {
        get: function(t) {
            for (var r = t + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
                for (var n = a[i];
                " " == n.charAt(0);)
                n = n.substring(1, n.length);
                if (0 == n.indexOf(r)) return e.decodeURIComponent(n.substring(r.length, n.length))
            }
            return null
        },
        set: function(r, a, i, n) {
            function s(e) {
                return !!e && e.replaceAll(/\r\n/g, "")
            }
            n = "undefined" == typeof n ? t.para.cross_subdomain : n;
            var o = "",
                c = "",
                l = "",
                u = "";
            if (i = null == i ? 73e3 : i,
            n) {
                var d = e.getCurrentDomain(location.href);
                "url\u89e3\u6790\u5931\u8d25" === d && (d = ""),
                o = d ? "; domain=" + d : ""
            }
            if (0 !== i) {
                var p = new Date;
                "s" === String(i).slice(-1) ? p.setTime(p.getTime() + 1e3 * Number(String(i).slice(0, -1))) : p.setTime(p.getTime() + 24 * i * 60 * 60 * 1e3),
                c = "; expires=" + p.toGMTString()
            }
            e.isString(t.para.set_cookie_samesite) && "" !== t.para.set_cookie_samesite && (u = "; SameSite=" + t.para.set_cookie_samesite),
            t.para.is_secure_cookie && (l = "; secure");
            var _ = "",
                f = "",
                g = "";
            r && (_ = s(r)),
            a && (f = s(a)),
            o && (g = s(o)),
            _ && f && (document.cookie = _ + "=" + encodeURIComponent(f) + c + "; path=/" + g + u + l)
        },
        encrypt: function(t) {
            return "data:enc;" + e.rot13obfs(t)
        },
        decrypt: function(t) {
            return t = t.substring("data:enc;".length),
            t = e.rot13defs(t)
        },
        resolveValue: function(t) {
            var r = "data:enc;";
            return e.isString(t) && 0 === t.indexOf(r) && (t = e.cookie.decrypt(t)),
            t
        },
        remove: function(r, a) {
            a = "undefined" == typeof a ? t.para.cross_subdomain : a,
            e.cookie.set(r, "", -1, a)
        },
        getCookieName: function(r, a) {
            var i = "";
            if (a = a || location.href,
            t.para.cross_subdomain === !1) {
                try {
                    i = e.URL(a).hostname
                } catch (n) {
                    t.log(n)
                }
                i = "string" == typeof i && "" !== i ? "sajssdk_2015_" + r + "_" + i.replace(/\./g, "_") : "sajssdk_2015_root_" + r
            } else i = "sajssdk_2015_cross_" + r;
            return i
        },
        getNewUser: function() {
            var e = "new_user";
            return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName(e))
        }
    },
    e.getElementContent = function(r, a) {
        var i = "",
            n = "";
        return r.textContent ? i = e.trim(r.textContent) : r.innerText && (i = e.trim(r.innerText)),
        i && (i = i.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)),
        n = i || "",
            "input" !== a && "INPUT" !== a || ("button" === r.type || "submit" === r.type ? n = r.value || "" : t.para.heatmap && "function" == typeof t.para.heatmap.collect_input && t.para.heatmap.collect_input(r) && (n = r.value || "")),
        n
    },
    e.getEleInfo = function(r) {
        if (!r.target) return !1;
        var a = r.target,
            i = a.tagName.toLowerCase(),
            n = {};
        return n.$element_type = i,
        n.$element_name = a.getAttribute("name"),
        n.$element_id = a.getAttribute("id"),
        n.$element_class_name = "string" == typeof a.className ? a.className : null,
        n.$element_target_url = a.getAttribute("href"),
        n.$element_content = e.getElementContent(a, i),
        n = e.strip_empty_properties(n),
        n.$url = e.isDecodeURI(t.para.url_is_decode, location.href),
        n.$url_path = location.pathname,
        n.$title = document.title,
        n.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        n
    },
    e.localStorage = {
        get: function(e) {
            return window.localStorage.getItem(e)
        },
        parse: function(r) {
            var a;
            try {
                a = JSON.parse(e.localStorage.get(r)) || null
            } catch (i) {
                t.log(i)
            }
            return a
        },
        set: function(e, t) {
            window.localStorage.setItem(e, t)
        },
        remove: function(e) {
            window.localStorage.removeItem(e)
        },
        isSupport: function() {
            var t = !0;
            try {
                var r = "__sensorsdatasupport__",
                    a = "testIsSupportStorage";
                e.localStorage.set(r, a),
                e.localStorage.get(r) !== a && (t = !1),
                e.localStorage.remove(r)
            } catch (i) {
                t = !1
            }
            return t
        }
    },
    e.sessionStorage = {
        isSupport: function() {
            var e = !0,
                t = "__sensorsdatasupport__",
                r = "testIsSupportStorage";
            try {
                sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r),
                sessionStorage.removeItem(t, r),
                e = !0) : e = !1
            } catch (a) {
                e = !1
            }
            return e
        }
    },
    e.isSupportCors = function() {
        return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
    },
    e.xhr = function(e) {
        if (e) return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : "undefined" != typeof XDomainRequest ? new XDomainRequest : null;
        if ("undefined" != typeof window.XMLHttpRequest) return new XMLHttpRequest;
        if (window.ActiveXObject) try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (r) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (r) {
                t.log(r)
            }
        }
    },
    e.ajax = function(r) {
        function a(e) {
            if (!e) return "";
            try {
                return JSON.parse(e)
            } catch (t) {
                return {}
            }
        }

        function i() {
            try {
                e.isObject(n) && n.abort && n.abort()
            } catch (a) {
                t.log(a)
            }
            s && (clearTimeout(s),
            s = null,
            r.error && r.error(),
            n.onreadystatechange = null,
            n.onload = null,
            n.onerror = null)
        }
        r.timeout = r.timeout || 2e4,
        r.credentials = "undefined" == typeof r.credentials || r.credentials;
        var n = e.xhr(r.cors);
        if (!n) return !1;
        r.type || (r.type = r.data ? "POST" : "GET"),
        r = e.extend({
            success: function() {},
            error: function() {}
        }, r),
        t.debug.protocol.ajax(r.url);
        var s, o = r.success,
            c = r.error;
        r.success = function(e) {
            o(e),
            s && (clearTimeout(s),
            s = null)
        },
        r.error = function(e) {
            c(e),
            s && (clearTimeout(s),
            s = null)
        },
        s = setTimeout(function() {
            i()
        }, r.timeout),
            "undefined" != typeof XDomainRequest && n instanceof XDomainRequest && (n.onload = function() {
            r.success && r.success(a(n.responseText)),
            n.onreadystatechange = null,
            n.onload = null,
            n.onerror = null
        },
        n.onerror = function() {
            r.error && r.error(a(n.responseText), n.status),
            n.onreadystatechange = null,
            n.onerror = null,
            n.onload = null
        }),
        n.onreadystatechange = function() {
            try {
                4 == n.readyState && (n.status >= 200 && n.status < 300 || 304 == n.status ? r.success(a(n.responseText)) : r.error(a(n.responseText), n.status),
                n.onreadystatechange = null,
                n.onload = null)
            } catch (e) {
                n.onreadystatechange = null,
                n.onload = null
            }
        },
        n.open(r.type, r.url, !0);
        try {
            r.credentials && (n.withCredentials = !0),
            e.isObject(r.header) && e.each(r.header, function(e, t) {
                n.setRequestHeader && n.setRequestHeader(t, e)
            }),
            r.data && (r.cors || n.setRequestHeader && n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                "application/json" === r.contentType ? n.setRequestHeader && n.setRequestHeader("Content-type", "application/json; charset=UTF-8") : n.setRequestHeader && n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
        } catch (l) {
            t.log(l)
        }
        n.send(r.data || null)
    },
    e.loadScript = function(t) {
        t = e.extend({
            success: function() {},
            error: function() {},
            appendCall: function(e) {
                document.getElementsByTagName("head")[0].appendChild(e)
            }
        }, t);
        var r = null;
        "css" === t.type && (r = document.createElement("link"),
        r.rel = "stylesheet",
        r.href = t.url),
            "js" === t.type && (r = document.createElement("script"),
        r.async = "async",
        r.setAttribute("charset", "UTF-8"),
        r.src = t.url,
        r.type = "text/javascript"),
        r.onload = r.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (t.success(),
            r.onload = r.onreadystatechange = null)
        },
        r.onerror = function() {
            t.error(),
            r.onerror = null
        },
        t.appendCall(r)
    },
    e.getHostname = function(r, a) {
        a && "string" == typeof a || (a = "hostname\u89e3\u6790\u5f02\u5e38");
        var i = null;
        try {
            i = e.URL(r).hostname
        } catch (n) {
            t.log("getHostname\u4f20\u5165\u7684url\u53c2\u6570\u4e0d\u5408\u6cd5\uff01")
        }
        return i || a
    },
    e.getQueryParamsFromUrl = function(t) {
        var r = {}, a = t.split("?"),
            i = a[1] || "";
        return i && (r = e.getURLSearchParams("?" + i)),
        r
    },
    e.getURLSearchParams = function(e) {
        e = e || "";
        for (var t = function(e) {
            return decodeURIComponent(e)
        }, r = {}, a = e.substring(1), i = a.split("&"), n = 0; n < i.length; n++) {
            var s = i[n].indexOf("=");
            if (s !== -1) {
                var o = i[n].substring(0, s),
                    c = i[n].substring(s + 1);
                o = t(o),
                c = t(c),
                r[o] = c
            }
        }
        return r
    },
    e.URL = function(r) {
        var a = {}, i = function() {
            var e;
            try {
                return e = new URL("http://modernizr.com/"),
                    "http://modernizr.com/" === e.href
            } catch (t) {
                return !1
            }
        };
        if ("function" == typeof window.URL && i()) a = new URL(r),
        a.searchParams || (a.searchParams = function() {
            var t = e.getURLSearchParams(a.search);
            return {
                get: function(e) {
                    return t[e]
                }
            }
        }());
        else {
            var n = /^https?:\/\/.+/;
            n.test(r) === !1 && t.log("Invalid URL");
            var s = e.urlParse(r);
            a.hash = "",
            a.host = s._values.Host ? s._values.Host + (s._values.Port ? ":" + s._values.Port : "") : "",
            a.href = s._values.URL,
            a.password = s._values.Password,
            a.pathname = s._values.Path,
            a.port = s._values.Port,
            a.search = s._values.QueryString ? "?" + s._values.QueryString : "",
            a.username = s._values.Username,
            a.hostname = s._values.Hostname,
            a.protocol = s._values.Protocol ? s._values.Protocol + ":" : "",
            a.origin = s._values.Origin ? s._values.Origin + (s._values.Port ? ":" + s._values.Port : "") : "",
            a.searchParams = function() {
                var t = e.getURLSearchParams("?" + s._values.QueryString);
                return {
                    get: function(e) {
                        return t[e]
                    }
                }
            }()
        }
        return a
    },
    e.getCurrentDomain = function(r) {
        var a = t.para.current_domain;
        switch (typeof a) {
            case "function":
                var i = a();
                return "" === i || "" === e.trim(i) ? "url\u89e3\u6790\u5931\u8d25" : i.indexOf(".") !== -1 ? i : "url\u89e3\u6790\u5931\u8d25";
            case "string":
                return "" === a || "" === e.trim(a) ? "url\u89e3\u6790\u5931\u8d25" : a.indexOf(".") !== -1 ? a : "url\u89e3\u6790\u5931\u8d25";
            default:
                var n = e.getCookieTopLevelDomain();
                return "" === r ? "url\u89e3\u6790\u5931\u8d25" : "" === n ? "url\u89e3\u6790\u5931\u8d25" : n
        }
    },
    e.getCookieTopLevelDomain = function(t) {
        function r(e) {
            return !!e && e
        }
        t = t || location.hostname;
        var a = r(t);
        if (!a) return "";
        var i = a.split(".");
        if (e.isArray(i) && i.length >= 2 && !/^(\d+\.)+\d+$/.test(a)) for (var n = "." + i.splice(i.length - 1, 1); i.length > 0;)
        if (n = "." + i.splice(i.length - 1, 1) + n,
        document.cookie = "sensorsdata_domain_test=true; path=/; domain=" + n,
        document.cookie.indexOf("sensorsdata_domain_test=true") !== -1) {
            var s = new Date;
            return s.setTime(s.getTime() - 1e3),
            document.cookie = "sensorsdata_domain_test=true; expires=" + s.toGMTString() + "; path=/; domain=" + n,
            n
        }
        return ""
    },
    e.isBaiduTraffic = function() {
        var t = document.referrer,
            r = "baidu.com";
        if (!t) return !1;
        try {
            var a = e.URL(t).hostname;
            return a && a.substring(a.length - r.length) === r
        } catch (i) {
            return !1
        }
    },
    e.getReferrerEqid = function() {
        var t = e.getQueryParamsFromUrl(document.referrer);
        return e.isEmptyObject(t) || !t.eqid ? e.UUID().replace(/-/g, "") : t.eqid
    },
    e.getReferrerEqidType = function() {
        var t = e.getQueryParamsFromUrl(document.referrer);
        return e.isEmptyObject(t) || !t.eqid ? "baidu_sem_keyword_id" : "baidu_seo_keyword_id"
    },
    e.getBaiduKeyword = {
        data: {},
        id: function() {
            return this.data.id ? this.data.id : (this.data.id = e.getReferrerEqid(),
            this.data.id)
        },
        type: function() {
            return this.data.type ? this.data.type : (this.data.type = e.getReferrerEqidType(),
            this.data.type)
        }
    },
    e.isReferralTraffic = function(t) {
        return t = t || document.referrer,
            "" === t || e.getCookieTopLevelDomain(e.getHostname(t)) !== e.getCookieTopLevelDomain()
    },
    e.ry = function(t) {
        return new e.ry.init(t)
    },
    e.ry.init = function(e) {
        this.ele = e
    },
    e.ry.init.prototype = {
        addClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") === -1 && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e),
            this
        },
        removeClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1 && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)),
            this
        },
        hasClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1
        },
        attr: function(t, r) {
            return "string" == typeof t && e.isUndefined(r) ? this.ele.getAttribute(t) : ("string" == typeof t && (r = String(r),
            this.ele.setAttribute(t, r)),
            this)
        },
        offset: function() {
            var e = this.ele.getBoundingClientRect();
            if (e.width || e.height) {
                var t = this.ele.ownerDocument,
                    r = t.documentElement;
                return {
                    top: e.top + window.pageYOffset - r.clientTop,
                    left: e.left + window.pageXOffset - r.clientLeft
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        getSize: function() {
            if (!window.getComputedStyle) return {
                width: this.ele.offsetWidth,
                height: this.ele.offsetHeight
            };
            try {
                var e = this.ele.getBoundingClientRect();
                return {
                    width: e.width,
                    height: e.height
                }
            } catch (t) {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
        getStyle: function(e) {
            return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
        },
        wrap: function(t) {
            var r = document.createElement(t);
            return this.ele.parentNode.insertBefore(r, this.ele),
            r.appendChild(this.ele),
            e.ry(r)
        },
        getCssStyle: function(t) {
            var r = this.ele.style.getPropertyValue(t);
            if (r) return r;
            var a = null;
            if ("function" == typeof window.getMatchedCSSRules && (a = window.getMatchedCSSRules(this.ele)), !a || !e.isArray(a)) return null;
            for (var i = a.length - 1; i >= 0; i--) {
                var n = a[i];
                if (r = n.style.getPropertyValue(t)) return r
            }
        },
        sibling: function(e, t) {
            for (;
            (e = e[t]) && 1 !== e.nodeType;);
            return e
        },
        next: function() {
            return this.sibling(this.ele, "nextSibling")
        },
        prev: function() {
            return this.sibling(this.ele, "previousSibling")
        },
        siblings: function() {
            return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
        },
        children: function() {
            return this.siblings(this.ele.firstChild)
        },
        parent: function() {
            var t = this.ele.parentNode;
            return t = t && 11 !== t.nodeType ? t : null,
            e.ry(t)
        },
        previousElementSibling: function() {
            var t = this.ele;
            if ("previousElementSibling" in document.documentElement) return e.ry(t.previousElementSibling);
            for (; t = t.previousSibling;)
            if (1 === t.nodeType) return e.ry(t);
            return e.ry(null)
        },
        getSameTypeSiblings: function() {
            for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), a = [], i = 0; i < t.children.length; i++) {
                var n = t.children[i];
                1 === n.nodeType && n.tagName.toLowerCase() === r && a.push(t.children[i])
            }
            return a
        }
    },
    e.strToUnicode = function(e) {
        if ("string" != typeof e) return t.log("\u8f6c\u6362unicode\u9519\u8bef", e),
        e;
        for (var r = "", a = 0; a < e.length; a++)
        r += "\\" + e.charCodeAt(a).toString(16);
        return r
    },
    e.getReferrer = function(e) {
        return e = e || document.referrer,
            "string" != typeof e ? "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(e) : (0 === e.indexOf("https://www.baidu.com/") && (e = e.split("?")[0]),
        e = e.slice(0, t.para.max_referrer_string_length),
            "string" == typeof e ? e : "")
    },
    e.getKeywordFromReferrer = function(r, a) {
        r = r || document.referrer;
        var i = t.para.source_type.keyword;
        if (document && "string" == typeof r) {
            if (0 === r.indexOf("http")) {
                var n = e.getReferSearchEngine(r),
                    s = e.getQueryParamsFromUrl(r);
                if (e.isEmptyObject(s)) return t.para.preset_properties.search_keyword_baidu && e.isBaiduTraffic() ? void 0 : "\u672a\u53d6\u5230\u503c";
                var o = null;
                for (var c in i)
                if (n === c && "object" == typeof s) if (o = i[c],
                e.isArray(o)) for (c = 0; c < o.length; c++) {
                    var l = s[o[c]];
                    if (l) return a ? {
                        active: l
                    } : l
                } else if (s[o]) return a ? {
                    active: s[o]
                } : s[o];
                return t.para.preset_properties.search_keyword_baidu && e.isBaiduTraffic() ? void 0 : "\u672a\u53d6\u5230\u503c"
            }
            return "" === r ? "\u672a\u53d6\u5230\u503c_\u76f4\u63a5\u6253\u5f00" : "\u672a\u53d6\u5230\u503c_\u975ehttp\u7684url"
        }
        return "\u53d6\u503c\u5f02\u5e38_referrer\u5f02\u5e38_" + String(r)
    },
    e.getWxAdIdFromUrl = function(t) {
        var r = e.getQueryParam(t, "gdt_vid"),
            a = e.getQueryParam(t, "hash_key"),
            i = e.getQueryParam(t, "callbacks"),
            n = {
                click_id: "",
                hash_key: "",
                callbacks: ""
            };
        return e.isString(r) && r.length && (n.click_id = 16 == r.length || 18 == r.length ? r : "\u53c2\u6570\u89e3\u6790\u4e0d\u5408\u6cd5",
        e.isString(a) && a.length && (n.hash_key = a),
        e.isString(i) && i.length && (n.callbacks = i)),
        n
    },
    e.getReferSearchEngine = function(t) {
        var r = e.getHostname(t);
        if (!r || "hostname\u89e3\u6790\u5f02\u5e38" === r) return "";
        var a = {
            baidu: [/^.*\.baidu\.com$/],
            bing: [/^.*\.bing\.com$/],
            google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
            sm: [/^m\.sm\.cn$/],
            so: [/^.+\.so\.com$/],
            sogou: [/^.*\.sogou\.com$/],
            yahoo: [/^.*\.yahoo\.com$/]
        };
        for (var i in a)
        for (var n = a[i], s = 0, o = n.length; s < o; s++)
        if (n[s].test(r)) return i;
        return "\u672a\u77e5\u641c\u7d22\u5f15\u64ce"
    },
    e.getSourceFromReferrer = function() {
        function r(e, t) {
            for (var r = 0; r < e.length; r++)
            if (t.split("?")[0].indexOf(e[r]) !== -1) return !0
        }
        var a = "(" + t.para.source_type.utm.join("|") + ")\\=[^&]+",
            i = t.para.source_type.search,
            n = t.para.source_type.social,
            s = document.referrer || "",
            o = e.info.pageProp.url;
        if (o) {
            var c = o.match(new RegExp(a));
            return c && c[0] ? "\u4ed8\u8d39\u5e7f\u544a\u6d41\u91cf" : r(i, s) ? "\u81ea\u7136\u641c\u7d22\u6d41\u91cf" : r(n, s) ? "\u793e\u4ea4\u7f51\u7ad9\u6d41\u91cf" : "" === s ? "\u76f4\u63a5\u6d41\u91cf" : "\u5f15\u8350\u6d41\u91cf"
        }
        return "\u83b7\u53d6url\u5f02\u5e38"
    },
    e.info = {
        initPage: function() {
            var r = e.getReferrer(),
                a = location.href,
                i = e.getCurrentDomain(a);
            i || t.debug.jssdkDebug("url_domain\u5f02\u5e38_" + a + "_" + i),
            this.pageProp = {
                referrer: r,
                referrer_host: r ? e.getHostname(r) : "",
                url: a,
                url_host: e.getHostname(a, "url_host\u53d6\u503c\u5f02\u5e38"),
                url_domain: i
            }
        },
        pageProp: {},
        campaignParams: function() {
            var r = t.source_channel_standard.split(" "),
                a = "",
                i = {};
            return e.isArray(t.para.source_channel) && t.para.source_channel.length > 0 && (r = r.concat(t.para.source_channel),
            r = e.unique(r)),
            e.each(r, function(t) {
                a = e.getQueryParam(location.href, t),
                a.length && (i[t] = a)
            }),
            i
        },
        campaignParamsStandard: function(r, a) {
            r = r || "",
            a = a || "";
            var i = e.info.campaignParams(),
                n = {}, s = {};
            return e.each(i, function(e, i, o) {
                (" " + t.source_channel_standard + " ").indexOf(" " + i + " ") !== -1 ? n[r + i] = o[i] : s[a + i] = o[i]
            }), {
                $utms: n,
                otherUtms: s
            }
        },
        properties: function() {
            return {
                $timezone_offset: (new Date).getTimezoneOffset(),
                $screen_height: Number(screen.height) || 0,
                $screen_width: Number(screen.width) || 0,
                $lib: "js",
                $lib_version: String(t.lib_version)
            }
        },
        currentProps: {},
        register: function(t) {
            e.extend(e.info.currentProps, t)
        }
    },
    e.autoExeQueue = function() {
        var e = {
            items: [],
            enqueue: function(e) {
                this.items.push(e),
                this.start()
            },
            dequeue: function() {
                return this.items.shift()
            },
            getCurrentItem: function() {
                return this.items[0]
            },
            isRun: !1,
            start: function() {
                this.items.length > 0 && !this.isRun && (this.isRun = !0,
                this.getCurrentItem().start())
            },
            close: function() {
                this.dequeue(),
                this.isRun = !1,
                this.start()
            }
        };
        return e
    },
    e.trackLink = function(r, a, i) {
        function n(e) {
            function r() {
                n || (n = !0,
                location.href = s.href)
            }
            e.stopPropagation(),
            e.preventDefault();
            var n = !1;
            setTimeout(r, 1e3),
            t.track(a, i, r)
        }
        r = r || {};
        var s = null;
        return r.ele && (s = r.ele),
        r.event && (s = r.target ? r.target : r.event.target),
        i = i || {}, !(!s || "object" != typeof s) && (!s.href || /^javascript/.test(s.href) || s.target || s.download || s.onclick ? (t.track(a, i), !1) : (r.event && n(r.event),
        void(r.ele && e.addEvent(r.ele, "click", function(e) {
            n(e)
        }))))
    },
    e.eventEmitter = function() {
        this._events = [],
        this.pendingEvents = []
    },
    e.eventEmitter.prototype = {
        emit: function(t) {
            var r = [].slice.call(arguments, 1);
            e.each(this._events, function(e) {
                e.type === t && e.callback.apply(e.context, r)
            }),
            this.pendingEvents.push({
                type: t,
                data: r
            }),
            this.pendingEvents.length > 20 ? this.pendingEvents.shift() : null
        },
        on: function(t, r, a, i) {
            "function" == typeof r && (this._events.push({
                type: t,
                callback: r,
                context: a || this
            }),
            i = i !== !1,
            this.pendingEvents.length > 0 && i && e.each(this.pendingEvents, function(e) {
                e.type === t && r.apply(a, e.data)
            }))
        },
        tempAdd: function(e, t) {
            if (t && e) return this.emit(e, t)
        },
        isReady: function() {}
    },
    e.rot13obfs = function(e, t) {
        e = String(e),
        t = "number" == typeof t ? t : 13;
        for (var r = 126, a = e.split(""), i = 0, n = a.length; i < n; i++) {
            var s = a[i].charCodeAt(0);
            s < r && (a[i] = String.fromCharCode((a[i].charCodeAt(0) + t) % r))
        }
        return a.join("")
    },
    e.rot13defs = function(t) {
        var r = 13,
            a = 126;
        return t = String(t),
        e.rot13obfs(t, a - r)
    },
    e.urlSafeBase64 = function() {
        var e = {
            "+": "-",
            "/": "_",
            "=": "."
        }, t = {
            "-": "+",
            _: "/",
            ".": "="
        }, r = function(t) {
            return t.replace(/[+\/=]/g, function(t) {
                return e[t]
            })
        }, a = function(e) {
            return e.replace(/[-_.]/g, function(e) {
                return t[e]
            })
        }, i = function(e) {
            return e.replace(/[.=]{1,2}$/, "")
        }, n = function(e) {
            return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
        }, s = function(e) {
            return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
        };
        return {
            encode: r,
            decode: a,
            trim: i,
            isBase64: n,
            isUrlSafeBase64: s
        }
    }(),
    e.setCssStyle = function(e) {
        var t = document.createElement("style");
        t.type = "text/css";
        try {
            t.appendChild(document.createTextNode(e))
        } catch (r) {
            t.styleSheet.cssText = e
        }
        var a = document.getElementsByTagName("head")[0],
            i = document.getElementsByTagName("script")[0];
        a ? a.children.length ? a.insertBefore(t, a.children[0]) : a.appendChild(t) : i.parentNode.insertBefore(t, i)
    },
    e.isIOS = function() {
        return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    e.getIOSVersion = function() {
        try {
            var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
            return e && e[1] ? Number.parseInt(e[1], 10) : ""
        } catch (t) {
            return ""
        }
    },
    e.getUA = function() {
        var e, t = {}, r = navigator.userAgent.toLowerCase();
        return (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11),
        t
    },
    e.getDomBySelector = function(r) {
        function a(t, r) {
            t = e.trim(t);
            var a;
            if ("body" === t) return document.getElementsByTagName("body")[0];
            if (0 === t.indexOf("#")) t = t.slice(1),
            a = document.getElementById(t);
            else if (t.indexOf(":nth-of-type") > -1) {
                var i = t.split(":nth-of-type");
                if (!i[0] || !i[1]) return null;
                var n = i[0],
                    s = i[1].match(/\(([0-9]+)\)/);
                if (!s || !s[1]) return null;
                var o = Number(s[1]);
                if (!(e.isElement(r) && r.children && r.children.length > 0)) return null;
                for (var c = r.children, l = 0; l < c.length; l++)
                if (e.isElement(c[l])) {
                    var u = c[l].tagName.toLowerCase();
                    if (u === n && (o--,
                    0 === o)) {
                        a = c[l];
                        break
                    }
                }
                if (o > 0) return null
            }
            return a ? a : null
        }

        function i(r) {
            var s, o = n.shift();
            if (!o) return r;
            try {
                s = a(o, r)
            } catch (c) {
                t.log(c)
            }
            return s && e.isElement(s) ? i(s) : null
        }
        if (!e.isString(r)) return null;
        var n = r.split(">"),
            s = null;
        return s = i(),
        s && e.isElement(s) ? s : null
    },
    e.jsonp = function(r) {
        if (!e.isObject(r) || !e.isString(r.callbackName)) return t.log("JSONP \u8bf7\u6c42\u7f3a\u5c11 callbackName"), !1;
        r.success = e.isFunction(r.success) ? r.success : function() {},
        r.error = e.isFunction(r.error) ? r.error : function() {},
        r.data = r.data || "";
        var a = document.createElement("script"),
            i = document.getElementsByTagName("head")[0],
            n = null,
            s = !1;
        if (i.appendChild(a),
        e.isNumber(r.timeout) && (n = setTimeout(function() {
            return !s && (r.error("timeout"),
            window[r.callbackName] = function() {
                t.log("call jsonp error")
            },
            n = null,
            i.removeChild(a),
            void(s = !0))
        }, r.timeout)),
        window[r.callbackName] = function() {
            clearTimeout(n),
            n = null,
            r.success.apply(null, arguments),
            window[r.callbackName] = function() {
                t.log("call jsonp error")
            },
            i.removeChild(a)
        },
        r.url.indexOf("?") > -1 ? r.url += "&callbackName=" + r.callbackName : r.url += "?callbackName=" + r.callbackName,
        e.isObject(r.data)) {
            var o = [];
            e.each(r.data, function(e, t) {
                o.push(t + "=" + e)
            }),
            r.data = o.join("&"),
            r.url += "&" + r.data
        }
        a.onerror = function(e) {
            return !s && (window[r.callbackName] = function() {
                t.log("call jsonp error")
            },
            clearTimeout(n),
            n = null,
            i.removeChild(a),
            r.error(e),
            void(s = !0))
        },
        a.src = r.url
    },
    e.listenPageState = function(t) {
        var r = {
            visibleHandler: e.isFunction(t.visible) ? t.visible : function() {},
            hiddenHandler: e.isFunction(t.hidden) ? t.hidden : function() {},
            visibilityChange: null,
            hidden: null,
            isSupport: function() {
                return "undefined" != typeof document[this.hidden]
            },
            init: function() {
                "undefined" != typeof document.hidden ? (this.hidden = "hidden",
                this.visibilityChange = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this.hidden = "mozHidden",
                this.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this.hidden = "msHidden",
                this.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this.hidden = "webkitHidden",
                this.visibilityChange = "webkitvisibilitychange"),
                this.listen()
            },
            listen: function() {
                if (this.isSupport()) {
                    var t = this;
                    e.addEvent(document, this.visibilityChange, function() {
                        document[t.hidden] ? t.hiddenHandler() : t.visibleHandler()
                    }, 1)
                } else e.addEvent(window, "focus", this.visibleHandler),
                e.addEvent(window, "blur", this.hiddenHandler)
            }
        };
        r.init()
    },
    e.isSupportBeaconSend = function() {
        var t = e.getUA(),
            r = !1,
            a = navigator.userAgent.toLowerCase();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var i = /os [\d._]*/gi,
                n = a.match(i),
                s = (n + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                o = s.split(".");
            "undefined" == typeof t.safari && (t.safari = o[0]),
            o[0] && o[0] < 13 ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (r = !0) : (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (r = !0)
        } else(t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (r = !0);
        return r
    },
    e.secCheck = {
        isHttpUrl: function(e) {
            if ("string" != typeof e) return !1;
            var r = /^https?:\/\/.+/;
            return r.test(e) !== !1 || (t.log("Invalid URL"), !1)
        },
        removeScriptProtocol: function(e) {
            if ("string" != typeof e) return "";
            for (var t = /^\s*javascript/i; t.test(e);)
            e = e.replace(t, "");
            return e
        }
    },
    e
}()

console.log(r.UUID())