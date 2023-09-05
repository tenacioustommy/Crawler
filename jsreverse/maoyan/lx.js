!(function () {
  "use strict";
  var c = !0,
    e = "_MeiTuanALogObject",
    p = 1,
    r = "dianping_nova",
    s = "waimai",
    f = "group",
    n = "demo",
    _ = "4.31.0",
    l = "lxcuid",
    v = "uuid",
    h = "msid",
    g = "cityid",
    j = "utm",
    t = "utm_source",
    i = "utm_medium",
    a = "utm_content",
    o = "utm_term",
    u = "utm_campaign",
    m = "uid",
    d = "scene",
    y = "userid",
    w = "dpid",
    b = "appnm",
    x = "union_id",
    k = "web_env",
    S = "wxmp_env",
    O = "wxid",
    A = "_lx_validcode",
    I = "pd_data",
    C = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/,
    T = setTimeout,
    N = clearTimeout,
    q = 1,
    E = 2,
    D = 3,
    M = 4,
    B = 5,
    F = 6,
    R = 20,
    W = 7,
    P = "lx-web-config";
  function L(t) {
    var e = t;
    return (
      t && t.code && (e = t.code),
      e === q
        ? "E_TIME_OUT"
        : e === E
        ? "E_NO_JSBRIDGE"
        : e === D
        ? "E_KNB_FAIL"
        : e === M
        ? "E_KNB_CB_FAIL"
        : e === B
        ? "E_KNB_NOT_EXIST"
        : e === R
        ? "ERR_PARAMS"
        : e === F
        ? "E_KNB_METHOD_NOT_SUPPORT"
        : "unknown error: " + e
    );
  }
  var J = 200,
    U = 500,
    V = -1,
    K = "PV",
    X = "PD",
    $ = "MC",
    Q = "SC",
    z = "MV",
    G = "MVL",
    H = "ME",
    Z = "BO",
    Y = "BP",
    tt = "event_type",
    et = "val_act",
    nt = "val_cid",
    rt = "index",
    it = "element_id",
    at = "lx_inner_data",
    ot = "pageView",
    ct = "systemCheck",
    ut = "moduleClick",
    st = "order",
    ft = "order_id",
    lt = 1e3,
    dt = 2,
    vt = 0,
    pt = -1,
    ht = 0,
    gt = 1,
    mt = 10080,
    yt = 1576800,
    _t = 30,
    wt = "_lx_utm",
    bt = "_lxsdk",
    xt = "_lxsdk_cuid",
    kt = "_lxsdk_dpid",
    St = "_lxsdk_s",
    Ot = "latlng",
    At = "_lxsdk_rr",
    It = "_lxsdk_rc",
    jt = "msid",
    Ct = "ms",
    Tt = "category",
    Nt = "c",
    qt = "login_type",
    Et = "lt",
    Dt = "locate_city_id",
    Mt = "lci",
    Bt = "sdk_ver",
    Ft = "sv",
    Rt = "lxcuid",
    Wt = "lxid",
    Pt = "val_lab",
    Lt = "val_bid",
    Jt = "val_val",
    Ut = "custom",
    Vt = "sf",
    Kt = "sdk_env",
    Xt = "online",
    $t = "offline",
    Qt = "__$lx_beacon_",
    zt = "_lx_urltag",
    Gt = {
      category: c,
      union_id: c,
      lxcuid: c,
      app: c,
      sdk_ver: c,
      appnm: c,
      ch: c,
      lch: c,
      ct: c,
      did: c,
      dm: c,
      ua: c,
      msid: c,
      uuid: c,
      lat: c,
      log: c,
      net: c,
      os: c,
      idfa: c,
      pushid: c,
      subcid: c,
      mac: c,
      imsi: c,
      uid: c,
      logintype: c,
      cityid: c,
      apn: c,
      mno: c,
      pushSetting: c,
      wifi: c,
      bht: c,
      ip: c,
      vendorid: c,
      geohash: c,
      dtk: c,
      sns: c,
      android_id: c,
      version_code: c,
      brand: c,
      utm: c,
    },
    Ht = "post",
    Zt = "get",
    Yt = "__lxvalidation",
    te = "plx.meituan.com",
    ee = "lx1.meituan.net",
    ne = "hlx.meituan.com",
    re = 200,
    ie = -3,
    ae = function () {},
    oe = "pageLeave";
  function ce() {
    return window;
  }
  function ue() {
    return ce().XMLHttpRequest;
  }
  var se,
    fe,
    le =
      ((se = ue()),
      (fe = se && "withCredentials" in new se()),
      function () {
        return fe;
      }),
    de = window;
  try {
    for (; de !== de.parent; ) de = de.parent;
  } catch (Ba) {}
  var ve = de === window,
    pe = /__lxvalidation=([\w.]+)/i,
    he = 10,
    ge = !1,
    me = void 0,
    ye = void 0,
    _e = {};
  function we(t) {
    var e,
      n = 0 === $n().indexOf("http:") ? "http:" : "https:",
      r = n + "//" + t + "/",
      i = en.search.match(pe) || [],
      a = (function () {
        var t = qn.get(Yt);
        if (t) {
          var e = t.split("|");
          return {
            mis: e[0],
            env: e[1] || "",
          };
        }
        return t || {};
      })();
    return (e = (i && i[1]) || a.mis || "") && (qn.top(Yt, e + "|", he), (r = n + "//" + t + "/?mis=" + e), (be.debug = e)), r;
  }
  var be = {
      noHeadless: !0,
      nt: vt,
      inWXMP: !1,
      pageValLab: null,
      pageEnv: null,
      use_post: !1,
      cid: null,
      appnm: null,
      quit: null,
      useQR: !1,
      onWebviewAppearAutoPV: !0,
      nativeAutoPD: !0,
      positiveLab: !0,
      nativeSDKVer: null,
      cacheRetryMinutes: 5,
      debug: !1,
      autoPD: !0,
      sessionScope: "top",
      isDev: !1,
      reportDelay: 500,
    },
    xe = [];
  be.on = function (t, e) {
    xe.push({
      name: t,
      fn: e,
    });
  };
  var ke = {
    MVL: !(be.emit = function (r, i, a, o, c) {
      jn.each(xe, function (t) {
        var e = t.name,
          n = t.fn;
        e === r && n(i, a, o, c);
      });
    }),
    QR: !1,
    getReqId: !1,
  };
  function Se(t) {
    return !!ke[t];
  }
  var Oe = void 0;
  function Ae() {
    return Oe;
  }
  var Ie = {
    path: location.href.replace(/^(.+\/\/[^?#]+).*$/, "$1"),
    isHeadless: (function () {
      if (0 <= rr) return rr;
      var t = navigator.userAgent;
      (rr = 0), /HeadlessChrome/.test(t) && (rr += 1);
      navigator.webdriver && (rr += 10);
      window.chrome || (rr += 100);
      (navigator.plugins && 0 !== navigator.plugins.length) || (rr += 1e3);
      /mtdp-searchspider/.test(t) && (rr += 1e4);
      /spider/.test(t) && (rr += 1e5);
      (t && "" !== t) || (rr += 1e6);
      return rr;
    })(),
    labv: 10006,
    cv: "prod",
    web: 1,
    proxy: "function" == typeof window.Proxy && /native code/.test(window.Proxy.toString()) ? 1 : 0,
  };
  function je(t, e) {
    t && null == e ? delete Ie[t] : (Ie[t] = e);
  }
  function Ce(t) {
    return t ? Ie[t] : Ie;
  }
  function Te(t, e) {
    Sn.isStr(t) && (_e[t] = e);
  }
  function Ne(t) {
    ge = t;
  }
  function qe() {
    return ge === p;
  }
  function Ee(t) {
    return (me && !t) || (me = we(te)), me;
  }
  var De = [ee, "lx2.meituan.net"],
    Me = 0;
  function Be(t) {
    if (!ye || t) {
      var e = De[parseInt((Me++ % 12) / 6)];
      ye = we(e);
    }
    return ye;
  }
  var Fe = void 0;
  function Re() {
    if (cn !== Fe) return Fe;
    var t = nn.getElementsByTagName("meta");
    return (Fe = "off" === Wn(t, "lx:native-report"));
  }
  var We = vt;
  function Pe() {
    return We;
  }
  function Le(t) {
    Re() || (We = t);
  }
  var Je = !1;
  function Ue(t) {
    Je = !!t;
  }
  var Ve = 5e3,
    Ke = 50,
    Xe = {
      MVL: {},
    },
    $e = void 0,
    Qe = void 0;
  function ze(t, e, n, r) {
    r = r || {};
    var i = e.category,
      a = n.req_id,
      o = n.val_cid,
      c = n.val_bid,
      u = r.tag;
    if (Xe[t] && Sn.isStr(t) && Sn.isStr(i) && Sn.isStr(a) && Sn.isStr(o) && Sn.isStr(c)) {
      var s = i + "_" + a + "_" + o + "_" + c,
        f = Xe[t];
      Sn.isObj(f[s]) ||
        (f[s] = {
          env: On(!0, {}, e),
          evs: n,
          lab: [],
        }),
        Sn.isObj(u) && (f[s].evs.tag = u);
      var l = On(!0, n.val_lab, {
        _seq: n.seq,
        _tm: n.tm,
      });
      f[s].lab.push(l),
        (function () {
          var t = 0;
          for (var e in Xe) {
            var n = Xe[e];
            for (var r in n) {
              var i = n[r].lab;
              t += i.length || 0;
            }
          }
          Ke < t && Ze();
        })();
    }
  }
  function Ge(t, e) {
    var n = (e || {}).withUnload,
      r = Xe[t];
    if (Sn.isObj(r)) {
      var i = [];
      for (var a in r) {
        var o = r[a],
          c = !1;
        if (o.lab && o.lab.length) {
          var u = o.env,
            s = o.evs,
            f = {
              mv_list: o.lab,
              custom: {
                _withUnload: !!n,
              },
            };
          s.val_lab = f;
          for (var l = 0, d = i.length; l < d; l++) {
            var v = i[l];
            if (!He(v, u)) {
              v.evs.push(s), (c = !0);
              break;
            }
          }
          c || ((u.evs = [s]), i.push(u));
        }
      }
      i.length && Qe.send(i), (Xe[t] = {});
    }
  }
  function He(t, e) {
    var n = 0,
      r = 0;
    for (var i in t) t.hasOwnProperty(i) && n++;
    for (var a in e) e.hasOwnProperty(a) && r++;
    var o = r < n ? t : e,
      c = n <= r ? t : e;
    for (var u in o) {
      if (!(-1 < "evs|".indexOf(u + "|")))
        if (Sn.isObj(o[u]) && Sn.isObj(c[u])) {
          if (He(o[u], c[u])) return !0;
        } else if (o[u] !== c[u]) return !0;
    }
    return !1;
  }
  function Ze(t) {
    var e = (t || {}).withUnload;
    for (var n in Xe)
      Ge(n, {
        withUnload: e,
      });
  }
  T(function t() {
    clearTimeout($e);
    try {
      Ze();
    } catch (t) {
    } finally {
      Pe() === vt ? ($e = T(t, Ve)) : clearTimeout($e);
    }
  }, 100);
  var Ye =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          },
    tn = ce(),
    en = location,
    nn = document,
    rn = nn.domain,
    an = navigator,
    on = an.userAgent.toString(),
    cn = void 0,
    un = Array.prototype,
    sn = Object.prototype,
    fn = decodeURIComponent,
    ln = encodeURIComponent,
    dn = wn(),
    vn = sn.toString,
    pn = sn.hasOwnProperty,
    hn = "&\";/(=')564XEqc$D7PBYZ>W_:owNi^~0R*.yQp+hs<G|OjzFmH@MAK3JV[\\]SUL9b?C1fIa`Tl,xnv%erktugd8!-{#}2",
    gn = "y\"|0p!'%(CHlzD$Ae~X+)*2xa:#K&7cTV4d1-QLSgYW`U=N3FB^j_Z8,56[\\]?9ihb/wqfvI>OskRn;G.rJtuo<mEP{M}@";
  function mn() {}
  function yn(t) {
    return void 0 === t ? "undefined" : Ye(t);
  }
  function _n(t, e) {
    return yn(t) === e;
  }
  function wn() {
    return +new Date();
  }
  function bn() {
    return Math.random();
  }
  function xn(t) {
    return _n(t, "number");
  }
  function kn(t, e) {
    var n = t.toString().replace(/[^(0-9)|\.]/gi, ""),
      r = n.indexOf(".");
    return -1 === r ? n : n.substring(0, r + 1 + e);
  }
  var Sn = {};
  function On(t, n, r) {
    var i = void 0,
      a = !0 === t;
    return (
      a || ((r = n), (n = t)),
      (n && Sn.isObj(n)) || (n = {}),
      (r && Sn.isObj(r)) || (r = {}),
      jn.each(r, function (t, e) {
        a && Sn.isObj(r[e]) ? ((i = n[e]), (n[e] = Sn.isObj(i) ? i : {}), On(a, n[e], r[e])) : (n[e] = r[e]);
      }),
      n
    );
  }
  (Sn.trim = function (t) {
    return t.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "");
  }),
    (Sn.now = wn),
    (Sn.rnd = bn),
    (Sn.hasOwn = function (t, e) {
      return pn.call(t, e);
    });
  var An = function (t) {
    return t && "[object Object]" === vn.call(t);
  };
  Sn.isObj = An;
  var In = function (t) {
    return _n(t, "string");
  };
  (Sn.isStr = In),
    (Sn.isFunc = function (t) {
      return _n(t, "function");
    }),
    (Sn.attr = function (t, e) {
      return t.getAttribute(e);
    }),
    (Sn.parseQuery = function (t) {
      var i = {};
      if (t) {
        var e = t
          .replace(C, function (t, e, n, r) {
            return r || "";
          })
          .split("&");
        return (
          jn.each(e, function (t) {
            var e = t.split("="),
              n = e[0],
              r = e.slice(1).join("") || "";
            if (n && !pn.call(i, n))
              try {
                i[n] = fn(r);
              } catch (t) {}
          }),
          i
        );
      }
    }),
    (Sn.stringifyQuery = function (t) {
      var r = [];
      return (
        Sn.isObj(t) &&
          jn.each(t, function (t, e) {
            var n;
            Sn.isFunc(t) || ((cn !== t && ((n = t) || !_n(n, "object"))) || (t = t || ""), r.push(ln(e) + "=" + ln(t)));
          }),
        r.join("&")
      );
    }),
    (Sn.genReqId = function () {
      return "" + 1e3 * wn() + parseInt(1e3 * bn());
    }),
    (Sn.run = function (t, e) {
      Cn(t) ? jn.each(t, e) : e(t);
    }),
    (Sn.on = function (t, e, n) {
      t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n);
    }),
    (Sn.off = function (t, e, n) {
      t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n);
    });
  var jn = {
      isArray: function (t) {
        return "[object Array]" === vn.call(t);
      },
    },
    Cn = function (t) {
      if (!t) return !1;
      var e = t.length;
      return !!jn.isArray(t) || (!!(t && xn(e) && 0 <= e) && (!Sn.isObj(t) || !(1 < e) || e - 1 in t));
    };
  (jn.isArrayLike = Cn),
    (jn.find = function (n, r, i) {
      var a = void 0;
      return (
        Cn(n) &&
          jn.each(n, function (t, e) {
            if (!0 === r.call(i, t, e, n)) return (a = t), !1;
          }),
        a
      );
    }),
    (jn.filter = function (n, r, i) {
      var a = [];
      return (
        Cn(n) &&
          jn.each(n, function (t, e) {
            r.call(i, t, e, n) && a.push(t);
          }),
        a
      );
    }),
    (jn.toArray = function (t, e, n) {
      var r = [];
      return (
        Cn(t) &&
          jn.each(
            t,
            function (t) {
              r.push(e ? e.call(n, t) : t);
            },
            n
          ),
        r
      );
    });
  var Tn = function (t, e, n) {
    if (t) {
      var r = void 0,
        i = void 0,
        a = void 0;
      if (Cn(t)) for (i = 0, a = t.length; i < a && !1 !== e.call(n, t[i], i, t); i++);
      else for (r in t) if (Sn.hasOwn(t, r) && !1 === e.call(n, t[r], r, t)) break;
    }
  };
  jn.each = Tn;
  var Nn = function (t, e, n) {
    if (t) {
      for (var r = [], i = 0, a = t.length; i < a; i++) {
        var o = e.call(n, t[i], i, t);
        r.push(o);
      }
      return r;
    }
  };
  (jn.slice = function (t, e, n) {
    return un.slice.call(jn.toArray(t), e, n);
  }),
    (jn.reduce = function (t, e) {
      if (Cn(t) && Sn.isFunc(e)) {
        var n = t,
          r = n.length >>> 0,
          i = 0,
          a = void 0,
          o = arguments;
        if (3 === o.length) a = o[2];
        else {
          for (; i < r && !(i in n); ) i++;
          if (r <= i) return;
          a = n[i++];
        }
        for (; i < r; ) i in n && (a = e(a, n[i], i, n)), i++;
        return a;
      }
    });
  var qn = {};
  function En(t) {
    for (var e = "", n = JSON.stringify(t), r = 0; r < n.length; r++) {
      var i = n.charAt(r);
      i.charCodeAt(0) <= "~".charCodeAt(0) && i.charCodeAt(0) >= "!".charCodeAt(0) ? (e += hn.charAt(i.charCodeAt(0) - "!".charCodeAt(0))) : (e += i);
    }
    return e;
  }
  function Dn(t) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      n = void 0,
      r = void 0,
      i = void 0,
      a = void 0,
      o = void 0,
      c = 0,
      u = 0,
      s = "",
      f = [];
    if (!t) return t;
    for (
      t = Mn(t);
      (n = ((o = (t.charCodeAt(c++) << 16) | (t.charCodeAt(c++) << 8) | t.charCodeAt(c++)) >> 18) & 63),
        (r = (o >> 12) & 63),
        (i = (o >> 6) & 63),
        (a = 63 & o),
        (f[u++] = e.charAt(n) + e.charAt(r) + e.charAt(i) + e.charAt(a)),
        c < t.length;

    );
    switch (((s = f.join("")), t.length % 3)) {
      case 1:
        s = s.slice(0, -2) + "==";
        break;
      case 2:
        s = s.slice(0, -1) + "=";
    }
    return s;
  }
  function Mn(t) {
    var e,
      n = "",
      r = void 0,
      i = void 0,
      a = void 0;
    for (r = i = 0, e = (t = ("" + t).replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, a = 0; a < e; a++) {
      var o = t.charCodeAt(a),
        c = null;
      o < 128 ? i++ : (c = 127 < o && o < 2048 ? String.fromCharCode((o >> 6) | 192, (63 & o) | 128) : String.fromCharCode((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128)),
        null !== c && (r < i && (n += t.substring(r, i)), (n += c), (r = i = a + 1));
    }
    return r < i && (n += t.substring(r, t.length)), n;
  }
  (qn.del = function (t, e) {
    var n = t + "=;path=/;domain=" + e,
      r = new Date();
    return r.setFullYear(1970), (n += ";expires=" + r.toUTCString()), (nn.cookie = n), !0;
  }),
    (qn.get = function (t) {
      var e = nn.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
      return fn(e ? e[1] : "");
    }),
    (qn.set = function (t, e, n, r) {
      r = r || nn.domain;
      var i = void 0,
        a = void 0,
        o = void 0,
        c = t + "=" + ln(e) + ";path=/;domain=" + r;
      cn === n || isNaN(n) || ((i = new Date()), (a = 60 * parseInt(n, 10) * 1e3), (o = i.getTime() + a), i.setTime(o), (c += ";expires=" + i.toUTCString()));
      try {
        return (nn.cookie = c), !0;
      } catch (t) {
        return !1;
      }
    }),
    (qn.top = function (t, e, n) {
      var r = nn.domain,
        i = r.split("."),
        a = i.length,
        o = a - 1,
        c = void 0,
        u = !1;
      for (e = "" + e; !u && 0 <= o && ((r = i.slice(o, a).join(".")), qn.set(t, e, n, r), (c = qn.get(t)), cn !== c && (u = c === e), o--, !u); );
    }),
    (qn.del = function (t) {
      return qn.top(t, "", -100);
    });
  var Bn = window.btoa,
    Fn = Dn;
  je("btoa", !!window.btoa), je("atob", !!window.atob);
  try {
    Sn.isFunc(Bn) &&
      Bn(Mn(on)) === Dn(on) &&
      (Fn = function (t) {
        return Bn(Mn(t));
      });
  } catch (t) {}
  var Rn = Fn;
  function Wn(t, e) {
    var n = void 0,
      r = jn.find(t, function (t) {
        return Sn.attr(t, "name") === e;
      });
    return r && (n = Sn.attr(r, "content")), n;
  }
  function Pn() {
    var t = tn[e];
    return tn[t];
  }
  var Ln,
    Jn =
      ((Ln = void 0),
      {
        update: function (t) {
          Ln = t;
        },
        get: function () {
          return Ln;
        },
      });
  function Un(t) {
    var e = t || wn(),
      n = Pn();
    Jn.update(e), (dn = e), n && (n.l = e);
  }
  function Vn() {
    var t = {
        duration: (function () {
          var t = void 0,
            e = Jn.get(),
            n = wn();
          if (e) (t = e), Jn.update(n);
          else {
            var r = Pn(),
              i = tn.performance && tn.performance.timing;
            (t = i && i.requestStart) || (t = r ? r.l : dn), Jn.update(n);
          }
          return n - t;
        })(),
      },
      e = void 0,
      n = be.quit;
    return Sn.isFunc(n) && (e = n() || {}), (t = On(t, e || {}));
  }
  function Kn(t, e) {
    e[ft];
  }
  var Xn = 2032;
  function $n() {
    return en.protocol;
  }
  /trident/i.test(on) || /msie/i.test(on) || !/mozilla.+webkit.+chrome.+/i.test(on) || (Xn = 6e3);
  var Qn = 0;
  function zn(t, e) {
    var n = /^((\d+\.)+\d+).*$/;
    if ("string" !== yn(t) || "string" !== yn(e)) return NaN;
    if (!n.test(t) || !n.test(e)) return NaN;
    for (var r = t.replace(n, "$1").split("."), i = e.replace(n, "$1").split("."), a = 0, o = Math.max(r.length, i.length); a < o; a++) {
      if (!r[a] || !i[a]) ((!r[a] && r) || (!i[a] && i)).push("0");
      var c = r[a].toString().length,
        u = i[a].toString().length;
      if (c !== u) {
        var s = u < c ? i : r;
        s[a] = Array(Math.abs(c - u) + 1).join("0") + s[a].toString();
      }
    }
    var f = parseInt(r.join("")),
      l = parseInt(i.join(""));
    return f == l ? 0 : l < f ? 1 : -1;
  }
  function Gn(n, r, i, a, o, c, u) {
    return function (t) {
      if ((ur(oe), be.autoPD && !n)) {
        n = !0;
        try {
          if (r && new Date() - i < 50) return;
          if (a) return;
          if (((a = !1), !u())) {
            var e = Vn();
            o("pageDisappear", e, {
              isAuto: 6,
              shouldStore: !0,
            });
          }
          Ze({
            withUnload: !0,
          });
        } catch (t) {}
        c && c(t);
      }
    };
  }
  var Hn = 4,
    Zn = "",
    Yn = function (t) {
      Hn = t;
    },
    tr = function () {
      return Zn && 3 === Hn;
    },
    er = function (t) {
      Zn = t;
    },
    nr = function () {
      return Zn;
    },
    rr = -1;
  var ir = void 0;
  try {
    ir = tn.sessionStorage;
  } catch (t) {
    ir = null;
  }
  var ar = void 0;
  ar = Sn.isFunc(tn.atob)
    ? tn.atob
    : function (t) {
        return t;
      };
  var or = {},
    cr = function (t, e) {
      var n = e || "fn_" + parseInt(1e6 * bn());
      return (or[n] = t), n;
    },
    ur = function (t, e) {
      if (or[t])
        try {
          or[t](e),
            T(function () {
              delete or[t];
            }, 0);
        } catch (t) {}
    },
    sr = on,
    fr = [
      {
        n: n,
        r: /lingxi\/demo\/\d+/i,
        v: sr,
      },
      {
        n: r,
        r: /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i,
        v: sr,
      },
      {
        n: s,
        r: /\b(meituanwaimai-c|com\.sankuai\.meituan\.takeoutnew)\/\d+\./i,
        v: sr,
      },
      {
        n: "moviepro",
        r: /\bmoviepro/i,
        v: sr,
      },
      {
        n: "movie",
        r: /\bmaoyan\b/i,
        v: sr,
      },
      {
        n: f,
        r: /\bmeituan \d+|meituangroup\/\d+\./i,
        v: sr,
      },
    ],
    lr = /android/i.test(sr),
    dr = "",
    vr = lr,
    pr = !1,
    hr = !1,
    gr = "www",
    mr = !1;
  if (/\bandroid|mobile\b|\bhtc\b/i.test(sr)) {
    (gr = "i"),
      (vr = !0),
      jn.each(fr, function (t) {
        if (t.r.test(t.v)) return (dr = t.n), !1;
      }),
      /\btitans(no){0,1}x\b/i.test(sr) && (pr = !0);
    var yr = /iphone/i.test(sr),
      _r = /ipad/i.test(sr);
    (yr || _r) && (hr = !0), dr && (yr ? (gr = "iphone") : /android/i.test(sr) ? (gr = "android") : _r && (gr = "ipad"));
  } else {
    var wr = sr.match(/(msie) (\d+)|Trident\/(d+)/i);
    wr && ((mr = !0), wr && parseInt(wr[2], 10));
  }
  var br = tn.screen.width + "*" + tn.screen.height,
    xr = !/Chrome/.test(sr) && !mr && /Mozilla.+AppleWebKit.+Version.+Safari.+/.test(sr),
    kr = /firefox/i.test(sr),
    Sr = on.replace(/^.*Titans(No)?X\/([\w.]+)\s.*$/i, "$2"),
    Or = -1 !== sr.indexOf("mtdp-infosec/scan"),
    Ar = -1 !== sr.indexOf("DXShell"),
    Ir = !(!vr || !/\sMMP\//.test(sr)),
    jr = !(!/\sMicroMessenger/.test(sr) || Ir),
    Cr = !(!/\sToutiaoMicroApp/i.test(sr) || jr),
    Tr = !(!/swan\//.test(sr) || jr),
    Nr = !(!/AlipayClient/.test(sr) || jr),
    qr = !(!/dingtalk/i.test(sr) || jr),
    Er = !(!/miniprogram/i.test(sr) || jr),
    Dr = !(!vr || !/\sMSC\//.test(sr)),
    Mr = pr || / knb\/\d+/i.test(on),
    Br = function () {
      return vr && Mr && !jr && !Ir;
    },
    Fr = sr.match(/group\/([\d\.]+)/),
    Rr = void 0;
  Fr && (Rr = Fr[1]);
  var Wr = sr.match(/App\/\d+\/(\d+\.\d+\.\d+)/),
    Pr = void 0;
  Wr && (Pr = Wr[1]);
  var Lr,
    Jr,
    Ur,
    Vr,
    Kr = tn.JSON;
  Kr ||
    (Kr = {
      parse: function (t) {
        return new Function("return (" + t + ")")();
      },
      stringify:
        ((Lr = jn.isArray),
        (Jr = {
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
        }),
        (Ur = function (t) {
          return Jr[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1);
        }),
        (Vr = /[\\"\u0000-\u001F\u2028\u2029]/g),
        function t(e) {
          if (null == e) return "null";
          if (_n(e, "number")) return isFinite(e) ? e.toString() : "null";
          if (_n(e, "boolean")) return e.toString();
          if (_n(e, "object")) {
            if ("function" === yn(e.toJSON)) return t(e.toJSON());
            if (Lr(e)) {
              for (var n = "[", r = 0; r < e.length; r++) n += (r ? ", " : "") + t(e[r]);
              return n + "]";
            }
            if (Sn.isObj(e)) {
              var i = [];
              for (var a in e) e.hasOwnProperty(a) && i.push(t(a) + ": " + t(e[a]));
              return "{" + i.join(", ") + "}";
            }
          }
          return '"' + e.toString().replace(Vr, Ur) + '"';
        }),
    });
  var Xr = Kr;
  function $r(t) {
    return t;
  }
  function Qr(t) {
    try {
      t(ti(this, Gr), ti(this, zr));
    } catch (t) {
      if (this._state === Hr) return ni(new Qr($r), zr, t);
    }
  }
  (Qr.prototype.then = function (t, e) {
    return (function (t, e, n, r) {
      yn(n) === Zr && (e._onFulfilled = n);
      yn(r) === Zr && (e._onRejected = r);
      t._state === Hr ? (t[t._pCount++] = e) : ei(t, e);
      return e;
    })(this, new Qr($r), t, e);
  }),
    (Qr.all = function (d) {
      return new Qr(function (r, n) {
        for (
          var t,
            e,
            i,
            a = 0,
            o = d.length,
            c = [],
            u = 0,
            s = void 0,
            f = function (n) {
              return function (t) {
                if (((n.value = t), (n.state = Gr), ++u === n.len && !s)) {
                  var e = (function (t) {
                    var e = [];
                    for (a = 0; a < o; a++) e.push(t[a] ? t[a].value : void 0);
                    return e;
                  })(c);
                  r(e);
                }
              };
            },
            l = function (e) {
              return function (t) {
                (e.value = t), (e.state = zr), u++, s || ((s = !0), n(t));
              };
            };
          a < o;
          a++
        )
          (e = t = void 0),
            (e = d[a]),
            (i = {
              value: null,
              index: a,
              state: null,
              len: o,
            }),
            c.push(i),
            (t = i),
            e.then ? e.then(f(t), l(t)) : Qr.resolve(e).then(f(t), l(t));
      });
    }),
    (Qr.resolve = function (e) {
      if (e instanceof Qr) return e;
      if (Sn.isFunc(e.then)) {
        var n = e.then.bind(e);
        return new Qr(function (t, e) {
          n(t, e);
        });
      }
      return new Qr(function (t) {
        t(e);
      });
    }),
    (Qr.reject = function (n) {
      return new Qr(function (t, e) {
        e(n);
      });
    });
  var zr = 0,
    Gr = 1,
    Hr = 2,
    Zr = "function",
    Yr = "object";
  function ti(e, n) {
    return function (t) {
      return ni(e, n, t);
    };
  }
  function ei(n, r) {
    return setTimeout(function () {
      var t = void 0,
        e = n._state ? r._onFulfilled : r._onRejected;
      if (void 0 !== e) {
        try {
          t = e(n._value);
        } catch (t) {
          return void ni(r, zr, t);
        }
        ri(r, t);
      } else ni(r, n._state, n._value);
    });
  }
  function ni(t, e, n) {
    if (t._state === Hr) {
      (t._state = e), (t._value = n);
      for (var r = 0, i = t._pCount; r < i; ) ei(t, t[r++]);
      return t;
    }
  }
  function ri(e, t) {
    if (t !== e || !t) {
      var n = void 0,
        r = yn(t);
      if (null === t || (r !== Zr && r !== Yr)) ni(e, Gr, t);
      else {
        try {
          n = t.then;
        } catch (t) {
          return void ni(e, zr, t);
        }
        yn(n) === Zr
          ? (function (e, n, t) {
              try {
                t.call(
                  n,
                  function (t) {
                    n && ((n = null), ri(e, t));
                  },
                  function (t) {
                    n && ((n = null), ni(e, zr, t));
                  }
                );
              } catch (t) {
                n && (ni(e, zr, t), (n = null));
              }
            })(e, t, n)
          : ni(e, Gr, t);
      }
      return e;
    }
    ni(e, zr, new Error("promise_circular_chain"));
  }
  (Qr.prototype._state = Hr), (Qr.prototype._pCount = 0);
  var ii = !xr && !mr && tn.indexedDB,
    ai = tn.IDBFactory,
    oi = ii && Sn.isFunc(ii.open) && ii.constructor === ai,
    ci = !1,
    ui = void 0,
    si = void 0,
    fi = void 0,
    li = 60 * (parseInt(be.cacheRetryMinutes) || 5),
    di = void 0,
    vi = !1,
    pi = 0,
    hi = !1;
  function gi() {
    return new Qr(function (e) {
      if (hi)
        return e({
          reason: 0,
        });
      if (pr || kr)
        return (
          (hi = !0),
          e({
            reason: 1,
          })
        );
      if (!oi)
        return (
          (hi = !0),
          e({
            reason: 2,
          })
        );
      if (ci) return e();
      try {
        ((ui = ii.open("_lxsdk_db", 1e3)).onsuccess = function (t) {
          (ci = !0), (si = t.target.result), e();
        }),
          (ui.onupgradeneeded = function (t) {
            (si = t.target.result),
              (fi = si.createObjectStore("cache", {
                keyPath: "id",
                autoIncrement: !0,
              })).createIndex("evs", "evs", {
                unique: !1,
              }),
              fi.createIndex("type", "type", {
                unique: !1,
              });
          });
      } catch (t) {
        (hi = !(ci = !1)),
          e({
            reason: 3,
          });
      }
    });
  }
  function mi() {
    gi().then(function (t) {
      if (!t)
        try {
          var n = si.transaction(["cache"], "readwrite").objectStore("cache"),
            e = n.openCursor(),
            r = [];
          e.onsuccess = function (t) {
            var e = t.target.result;
            e
              ? (r.push(e.value), e.continue())
              : ((pi = r.length),
                r.forEach(function (t) {
                  !(function (t) {
                    if ("get" === t.type) {
                      var e = document.createElement("img"),
                        n = Math.random();
                      (e.src = "//" + ee + "/?d=" + Rn("[" + t.evs + "]") + "&t=1&r=" + n + "&_lxsdk_rnd=" + n), (e.id = n), (window["img_" + n] = e);
                    } else
                      try {
                        window.navigator.sendBeacon("//" + te, JSON.stringify(t));
                      } catch (t) {}
                  })(t),
                    n.delete(t.id);
                }));
          };
        } catch (t) {
          ta(location.href, "lx-func-indexedDB", t.stack || t.message, 2);
        }
    });
  }
  gi();
  var yi = {
      add: function (n, r) {
        gi().then(function (t) {
          if (!t)
            try {
              var e = si.transaction(["cache"], "readwrite").objectStore("cache");
              100 < pi && e.clear(),
                n.forEach(function (t) {
                  t.evs.forEach(function (t) {
                    (t[at] = t[at] || {}), (t[at].fc = 1);
                  }),
                    e.add({
                      type: r,
                      evs: JSON.stringify(t),
                    });
                });
            } catch (t) {
              ta(location.href, "lx-func-indexedDB", t.stack || t.message, 2);
            }
        });
      },
      check: mi,
      startPoll: function () {
        !vi &&
          oi &&
          ((vi = !0),
          (di = +new Date()),
          gi().then(function (t) {
            if (!t)
              try {
                setTimeout(function t() {
                  var e = "_lxsdk_rc_img";
                  tn[e] = new Image();
                  var n = new Image();
                  (n.onload = function () {
                    mi(), (vi = !1), (tn[e] = null);
                  }),
                    (n.onabort = n.onerror =
                      function () {
                        +new Date() - di > 1e3 * li || (setTimeout(t, 6e3), (tn[e] = null));
                      }),
                    (n.src = "//" + ee + "/?r=" + Math.random());
                }, 6e3);
              } catch (t) {
                ta(location.href, "lx-func-indexedDB", t.stack || t.message, 2);
              }
          }));
      },
    },
    _i = "__lxsdk_",
    wi = void 0;
  try {
    wi = tn.localStorage;
  } catch (t) {
    wi = null;
  }
  function bi(t) {
    return _i + t;
  }
  function xi() {
    return {
      length: 0,
      _data: {},
      setItem: function (t, e) {
        return this.length++, (this._data[t] = String(e));
      },
      getItem: function (t) {
        return this._data.hasOwnProperty(t) ? this._data[t] : cn;
      },
      removeItem: function (t) {
        return this.length--, delete this._data[t];
      },
      clear: function () {
        return (this.length = 0), (this._data = {});
      },
      key: function (t) {
        var e = [],
          n = this._data;
        return (
          jn.each(n, function (t) {
            Sn.hasOwn(n, t) && e.push(t);
          }),
          e[t]
        );
      },
    };
  }
  var ki = {
    get: function (t) {
      try {
        t = bi(t);
        var e = wi.getItem(t);
        return (e = cn !== e ? Xr.parse(e) : e);
      } catch (t) {
        ta(location.href, "lx-func-getLocalStorage-error", t.stack || t.message, 2, 1);
      }
    },
    set: function (t, e) {
      ki.del(t);
      try {
        return wi.setItem(bi(t), Xr.stringify(e));
      } catch (t) {
        ta(location.href, "lx-func-setLocalStorage-error", t.stack || t.message, 2, 1);
      }
    },
    keys: function () {
      for (var t = [], e = void 0, n = 0; n < wi.length; n++) 0 === (e = wi.key(n)).indexOf(_i) && t.push(e.replace(_i, ""));
      return t;
    },
    del: function (t) {
      try {
        return wi.removeItem(bi(t));
      } catch (t) {
        ta(location.href, "lx-func-delLocalStorage-error", t.stack || t.message, 2, 1);
      }
    },
    clear: function () {
      for (var t = this.keys(), e = 0; e < t.length; e++) this.del(t[e]);
    },
  };
  if (wi) {
    if (wi) {
      var Si = "___lxtest";
      ki.nt = !0;
      try {
        ki.set(Si, 1), 1 !== ki.get(Si) ? ki.clear() : ki.del(Si);
      } catch (t) {
        try {
          ki.clear(), wi.setItem(Si, 1), wi.removeItem(Si);
        } catch (t) {
          (wi = xi()), (ki.nt = !1);
        }
      }
    }
  } else (wi = xi()), (ki.nt = !1);
  var Oi,
    Ai = void 0,
    Ii =
      ((Oi = function () {
        for (var t = 1 * new Date(), e = 0; t === 1 * new Date() && e < 200; ) e++;
        return t.toString(16) + e.toString(16);
      }),
      function () {
        var t = (screen.height * screen.width).toString(16);
        return (
          Oi() +
          "-" +
          Math.random().toString(16).replace(".", "") +
          "-" +
          (function () {
            var t = sr,
              e = void 0,
              n = void 0,
              i = [],
              r = 0;
            function a(t, e) {
              var n = void 0,
                r = 0;
              for (n = 0; n < e.length; n++) r |= i[n] << (8 * n);
              return t ^ r;
            }
            for (e = 0; e < t.length; e++) (n = t.charCodeAt(e)), i.unshift(255 & n), 4 <= i.length && ((r = a(r, i)), (i = []));
            return 0 < i.length && (r = a(r, i)), r.toString(16);
          })() +
          "-" +
          t +
          "-" +
          Oi()
        );
      });
  function ji() {
    var t = {
        mem: Ai,
        cookie: qn.get(xt),
        ls: ki.get(xt),
        ss: ir && ir.getItem(xt),
      },
      e = void 0;
    for (var n in t) t[n] && (e = t[n]);
    for (var r in (e || (e = Ii()), t))
      if (!t[r])
        switch (r) {
          case "mem":
            Ai = e;
            break;
          case "cookie":
            qn.top(xt, e, yt);
            break;
          case "ls":
            try {
              ki.set(xt, e);
            } catch (t) {
              ta(location.href, "lx-func-setlocalStorage-lxid-error", t.stack || t.message, 2, 1);
            }
            break;
          case "ss":
            try {
              ir && ir.setItem(xt, e);
            } catch (t) {
              ta(location.href, "lx-func-setSessionStorage-lxid-error", t.stack || t.message, 2, 1);
            }
        }
    return e;
  }
  var Ci = 3,
    Ti = 150,
    Ni = 5e3,
    qi = 3500,
    Ei = !1,
    Di = [],
    Mi = [],
    Bi = 0,
    Fi = "send",
    Ri = "fail",
    Wi = "success",
    Pi = [],
    Li = [],
    Ji = void 0,
    Ui = 0,
    Vi = !be.use_post,
    Ki = !0,
    Xi = 5e3,
    $i = 12,
    Qi = !0,
    zi = (lr && /baiduboxapp\//.test(sr)) || (/Mozilla.+AppleWebKit.+Chrome.+Safari.+/i.test(sr) && !vr),
    Gi = !mr && Sn.isFunc(an.sendBeacon),
    Hi = [
      {
        key: "mac",
        type: 1,
      },
      {
        key: "imei",
        type: 2,
      },
      {
        key: "imei2",
        type: 2,
      },
      {
        key: "did",
        type: 2,
      },
      {
        key: "imsi",
        type: 3,
      },
      {
        key: "lat",
        type: 4,
      },
      {
        key: "latitude",
        type: 4,
      },
      {
        key: "lng",
        type: 5,
      },
      {
        key: "longitude",
        type: 5,
      },
      {
        key: "android_id",
        type: 6,
      },
      {
        key: "idfa",
        type: 7,
      },
      {
        key: "idfv",
        type: 8,
      },
      {
        key: "meid",
        type: 9,
      },
      {
        key: "ssid",
        type: 10,
      },
      {
        key: "bssid",
        type: 10,
      },
    ],
    Zi = [
      {
        key: "_lat",
        type: 4,
      },
      {
        key: "_latitude",
        type: 4,
      },
      {
        key: "_lng",
        type: 5,
      },
      {
        key: "_longitude",
        type: 5,
      },
    ];
  function Yi(t) {
    return Math.ceil(Math.random() * t) === t;
  }
  function ta(t, e, n, r, i) {
    if (!(0 <= on.indexOf("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0"))) {
      var a = 1;
      if (1 === r) a = 1e4;
      else if (2 === r) {
        -1 !== ["lx-func-setLocalStorage-error", "lx-knb-getEnv-error", "lx-knb-setEvs-mv-error", "lx-knb-setEvs-pv-error", "lx-knb-setEvs-mc-error"].indexOf(e) && (a = 1e4);
      }
      if (Yi(a)) {
        var o = ji(),
          c = [
            {
              project: "com.sankuai.analytics.web4new",
              pageUrl: en.href,
              resourceUrl: t,
              category: ["jsError", "ajaxError", "customError"][r] || "jsError",
              sec_category: "prod_" + e,
              level: ["error", "warn", "info"][i] || "error",
              unionId: o,
              timestamp: Sn.now(),
              content: "" + n || "",
            },
          ],
          u = la("//catfront.dianping.com/api/log?v=1", Ht, "application/x-www-form-urlencoded");
        u && ((u.onerror = u.onreadystatechange = function () {}), u.send("c=" + encodeURIComponent(Xr.stringify(c))));
      }
    }
  }
  function ea(t, e, n, r) {
    try {
      var i =
        {
          send: 1e3,
          success: 1e3,
          fail: 10,
        }[t] || 1e3;
      if (0 <= sr.indexOf("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0") || !Yi(i)) return;
      var a = 0,
        o = "",
        c = "",
        u = parseInt(new Date().getTime() / 1e3);
      jn.isArray(n) &&
        jn.each(n, function (t) {
          try {
            (o = t[b]), (c = (t[h] ? t[h] + "-" : "") + u);
            var e = t.evs;
            Sn.isStr(e) &&
              (e = Xr.parse(
                Xr.parse(
                  (function (t) {
                    for (var e = "", n = JSON.stringify(t), r = 0; r < n.length; r++) {
                      var i = n.charAt(r);
                      i.charCodeAt(0) <= "~".charCodeAt(0) && i.charCodeAt(0) >= "!".charCodeAt(0) ? (e += gn.charAt(i.charCodeAt(0) - "!".charCodeAt(0))) : (e += i);
                    }
                    return e;
                  })(t.evs)
                )
              )),
              jn.isArray(e) &&
                jn.each(e, function () {
                  a++;
                });
          } catch (t) {}
        }),
        (a = a || 1);
      var s = e.match(/^[\w-]+:\/\/([^/]+)(?:\/([^?]+)?)?/),
        f = {
          domain: s && s[1],
          requestId: c,
          status: t,
          appName: o,
          lxVersion: _,
          num: a,
          msg: r || "",
        },
        l = {
          kvs: {
            lx_api: [1],
          },
          extraData: Xr.stringify(f) || "{}",
          ts: u,
        },
        d = la("https://catfront.dianping.com/api/metric?p=com.sankuai.analytics.web4new&v=1", Ht, "application/x-www-form-urlencoded");
      d && ((d.onreadystatechange = function () {}), (d.onerror = function () {}), d.send("data=" + encodeURIComponent(Xr.stringify(l))));
    } catch (t) {}
  }
  function na() {
    if (!(0 <= sr.indexOf("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")) && Yi(1e5)) {
      var t = {
          kvs: {
            reporTotal: [1],
          },
          tags: {},
          ts: parseInt(new Date().getTime() / 1e3),
        },
        e = la("https://catfront.dianping.com/api/metric?p=com.sankuai.analytics.web4new&v=1", Ht, "application/x-www-form-urlencoded");
      e && ((e.onerror = e.onreadystatechange = function () {}), e.send("data=" + encodeURIComponent(Xr.stringify(t))));
    }
  }
  function ra() {
    var t, r, e, i, a;
    (t = P),
      (r = function (t, e) {
        t === J && ((Ki = e.lx_encry_switch), (Xi = e.lx_max_req_len), ($i = e.lx_max_req_num), (Qi = e.lx_split_req_switch));
      }),
      (e = -1 < ["staging", "prod"].indexOf("prod")),
      (i = la(["//portal-portm.meituan.com/horn/v1/modules", t, e ? "prod" : "test"].join("/"), Zt, "text/plain")),
      (a = !1),
      (i.onreadystatechange = function () {
        if (4 === i.readyState) {
          var t = i.status,
            e = "",
            n = void 0;
          if (200 <= t && t < 400) (e = Xr.parse(i.responseText)), (n = re);
          else {
            if (a) return;
            (a = !0), (n = ie);
          }
          Sn.isFunc(r) && r(n, e), (i.onreadystatechange = null);
        }
      }),
      (i.onerror = function () {
        a || ((a = !0), Sn.isFunc(r) && r(U));
      }),
      i.send();
  }
  function ia() {
    if (Ji) {
      var t = Li.concat([]);
      clearTimeout(Ji),
        Pi.length &&
          oa(
            (function (e) {
              try {
                var i = [],
                  a = void 0;
                return (
                  Tn(e, function (t) {
                    var e = t.evs;
                    delete t.evs;
                    var n = Xr.stringify(t);
                    if (n === a) {
                      var r = i.length - 1;
                      i[r].evs = (i[r].evs || []).concat(e);
                    } else (t.evs = e), i.push(t), (a = n);
                  }),
                  i
                );
              } catch (t) {
                return ta(en.href, "lx-func-combineEvs", t.stack || t.message, 2, 1), e;
              }
            })(Pi),
            {
              cb: function () {
                var e = arguments;
                jn.each(t, function (t) {
                  t.apply(cn, e);
                });
              },
            }
          ),
        (Ji = null),
        (Pi = []),
        (Li = []);
    }
  }
  function aa(t, m) {
    var e = On(!0, {}, t);
    return (
      (function v(p, h) {
        var g = [];
        Tn(p, function (t, e) {
          var n = On(!0, {}, p),
            r = e.toLowerCase();
          n.level = h;
          var i,
            a,
            o =
              ((i = r),
              (a = 0),
              Tn(Hi, function (t) {
                t.key === i && (a = t.type);
              }),
              a);
          o && (g.push(o), (p.hit_3 = g), delete p[e]);
          var c,
            u,
            s =
              ((c = r),
              (u = 0),
              Tn(Zi, function (t) {
                -1 < c.indexOf(t.key) && (u = t.type);
              }),
              u);
          if ((s && (g.push(s), (p.hit_3 = g), delete p[e]), be.geo && /[\d|\.]*$/.test(t) && p[r])) {
            var f = kn(be.geo.lat, 3),
              l = kn(be.geo.lng, 3),
              d = kn(t, 3);
            f === d ? (g.push(4), (p.hit_3 = g), delete p[e]) : l === d && (g.push(5), (p.hit_3 = g), delete p[e]);
          }
          An(t) && n.level < m && v(t, n.level + 1);
        });
      })(e, 1),
      e
    );
  }
  function oa(t, r) {
    if (Ci <= Ui) return !1;
    r = On(
      {
        cb: mn,
      },
      r || {}
    );
    var e = Ee();
    Vi = !xr && !be.use_post;
    var i = [];
    Tn(t, function (t) {
      var e = On(!0, {}, t),
        n = [];
      Tn(t.evs, function (i) {
        (i = On(!0, {}, i)),
          r.useBeacon && Gi ? (i[at].req_type = "beacon") : (i[at].req_type = Vi ? "get" : "post"),
          Tn(i, function (t, e) {
            if ("val_lab" === e) {
              var n = aa(i[e], 3);
              i.val_lab = n;
            }
            if ("tag" === e) {
              var r = aa(i[e], 4);
              i.tag = r;
            }
          }),
          n.push(i);
      }),
        !Vi || (r.useBeacon && Gi) ? (Ki ? ((e.evs = En(n)), (e.lx_dict = "true")) : ((e.evs = n), (e.lx_dict = "false"))) : (e.evs = n),
        i.push(e);
    });
    try {
      r.useBeacon && Gi
        ? ca(e, i)
        : Vi
        ? (function (n, t) {
            var r = (t = t || {}).cb,
              e = wn().toString(16) + Bi++,
              i = Ee(),
              a = !1,
              o =
                ((c = n),
                (u = []),
                (s = [
                  {
                    l: Bt,
                    s: Ft,
                  },
                  {
                    l: jt,
                    s: Ct,
                  },
                  {
                    l: Tt,
                    s: Nt,
                  },
                  {
                    l: qt,
                    s: Et,
                  },
                  {
                    l: Rt,
                    s: Wt,
                  },
                  {
                    l: Dt,
                    s: Mt,
                  },
                ]),
                jn.each(c, function (t) {
                  var e = On(!0, {}, t);
                  jn.each(s, function (t) {
                    da(e, t.l, t.s);
                  });
                  var r = [];
                  jn.each(t.evs, function (n) {
                    (n = On(!0, {}, n)),
                      jn.each(n, function (t, e) {
                        -1 < e.indexOf("val_") && ((n[e.replace("val_", "")] = n[e]), delete n[e]), da(n, "refer_url", "urlr");
                      }),
                      r.push(n);
                  }),
                    (e.evs = r),
                    e[Wt] === e.uuid && delete e.uuid;
                  var n = e[Nt];
                  n && (e[Nt] = n.replace("data_sdk_", "")), delete e.ua, u.push(e);
                }),
                u);
            var c, u, s;
            jn.each(o, function (t) {
              t.uuid || t.lxid, delete t.ua;
            });
            var f = Xr.stringify(o);
            if (
              !(function (t) {
                for (var e = t.length, n = e, r = 0; r < e; r++) 127 < t.charCodeAt(r) && n++;
                return 1.5 * n < Xn;
              })(f)
            ) {
              var l = [],
                d = Xr.stringify(n).length;
              if (pr && Qi)
                if (Xi < d) {
                  var v = Math.ceil((d / Xi).toFixed(1));
                  jn.each(n, function (n) {
                    var t = n.evs.length;
                    $i < v && (v = $i);
                    var e = Math.ceil(t / v);
                    if (0 < e && 1 < t) {
                      var r = (function (t, e) {
                        for (var n = [], r = 0; r < t.length; r += e) n.push(t.slice(r, r + e));
                        return n;
                      })(n.evs, e);
                      jn.each(r, function (t) {
                        var e = On({}, n);
                        (e.evs = t), l.push(e);
                      });
                    } else l.push(n);
                  });
                } else l = l.concat(n);
              else l = l.concat(n);
              return (
                jn.each(l, function (t) {
                  if (
                    (jn.each(t.evs, function (t) {
                      var e = t.val_lab;
                      t.val_lab = On(
                        !0,
                        {
                          custom: {
                            _s: 1,
                          },
                        },
                        e || {}
                      );
                    }),
                    Ki)
                  )
                    try {
                      (t.evs = En(t.evs)), (t.lx_dict = "true");
                    } catch (t) {
                      ta(location.href, "lx-func-dictionaryEncrypt-error", t.stack || t.message, 2);
                    }
                  else t.lx_dict = "false";
                }),
                jn.each(l, function (n) {
                  sa(i, [n], {
                    cb: function (t, e) {
                      try {
                        r(t, e, "ajax-post");
                      } catch (t) {}
                      t !== J && !a && Gi && ((a = !0), ca(i, [n]));
                    },
                  });
                })
              );
            }
            var p = Rn(f),
              h = ln(p),
              g = Be(!0);
            (g += -1 < g.indexOf("?") ? "&d=" + h : "?d=" + h),
              h.length,
              (g = g + "&t=1&r=" + e),
              zi
                ? (ea(Fi, g, o),
                  sa(g, null, {
                    method: "get",
                    cb: function (t, e) {
                      try {
                        r(t, e, "ajax-get");
                      } catch (t) {}
                      if (t === J) return ea(Wi, g, o), void (Ar && yi.startPoll());
                      ea(Ri, g, o, "sendWithGetMethod"), !a && Gi && ((a = !0), ca(i, n), yi.add(o, "get"), yi.startPoll());
                    },
                  }))
                : (ea(Fi, g, o),
                  (function t(e, n, r) {
                    var i = void 0,
                      a = Qt + Qn++;
                    if (((n = n || {}), !(2 < (r = r || 0))))
                      return (
                        (tn[a] = i = new Image()),
                        (i.onload = function () {
                          Sn.isFunc(n.cb) && n.cb(!0), (tn[a] = null);
                        }),
                        (i.onabort = i.onerror =
                          function () {
                            (tn[a] = null),
                              T(function () {
                                t(e, n, ++r);
                              }, 100);
                          }),
                        (i.src = e),
                        i
                      );
                    Sn.isFunc(n.cb) && n.cb(!1);
                  })(g, {
                    cb: function (t) {
                      if (t)
                        try {
                          ea(Wi, g, o), Ar && yi.startPoll(), r(J, 200, "image-get");
                        } catch (t) {}
                      else {
                        try {
                          ea(Ri, g, o, "createImageBeacon"), r(ie, 0, "ajax-get-to-image-get");
                        } catch (t) {}
                        !a && Gi && ((a = !0), ca(i, n), yi.add(o, "get"), yi.startPoll());
                      }
                    },
                  }));
          })(i, r)
        : sa(e, i, r) || (mr && ua(e, i, r)) || (ca(e, i) && r.cb(J));
    } catch (t) {
      return !1;
    }
    return !0;
  }
  function ca(t, e) {
    var n = an.sendBeacon;
    if (n) {
      (t = fa(t)), ea(Fi, t, e);
      var r = n && n.call(an, t, Xr.stringify(e));
      return r ? ea(Wi, t, e) : ea(Ri, t, e, "sendWithNavBeacon"), r;
    }
    return !1;
  }
  function ua(t, e, n, r) {
    if (!tn.XDomainRequest) return !1;
    try {
      var i = new XDomainRequest();
      return (
        i.open(Ht, fa(t), !0),
        (i.onload = function () {
          (Ui = 0), ea(Wi, t, e), n && n.cb(J, 200, "IEXDR-post"), (Di = []);
        }),
        (i.onerror = function () {
          Ui++, ea(Ri, t, e, "sendWithIEXDR"), n && n.cb(U, 0, "IEXDR-post");
        }),
        (i.ontimeout = function () {
          Ui++,
            ea(Ri, t, e, "sendWithIEXDRTIMEOUT"),
            r ||
              (!(function (t, e, n, r) {
                Di = Di.concat(e);
                var i = void 0,
                  a = jn.reduce(Di, function (t, e) {
                    return (e.evs = t.evs.concat(e.evs)), (i = e.evs.length), Ti < i && jn.slice(e.evs, i - Ti, i), e;
                  });
                if (((Di = [a]), Mi.push(r), !Ei))
                  var o = setInterval(function () {
                    if (Ci <= Ui) return clearInterval(o), !1;
                    n(
                      t,
                      Di,
                      function (e) {
                        clearInterval(o),
                          (Ei = !1),
                          jn.each(Mi, function (t) {
                            t && t(e);
                          });
                      },
                      !0
                    );
                  }, qi);
              })(t, e, ua, n),
              (Ei = !0));
        }),
        (i.timeout = Ni),
        ea(Fi, t, e),
        i.send(Xr.stringify(e)),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function sa(e, n, r, i) {
    if (!le()) return !1;
    try {
      var a = (r && r.method) || Ht,
        o = "get" !== a.toLowerCase(),
        c = (Sn.isFunc(r.cb) && r.cb) || ae,
        u = la(e, a, "text/plain");
      return (
        (u.onreadystatechange = function () {
          if (4 === u.readyState) {
            var t = u.status;
            200 <= t && t < 400
              ? ((Ui = 0), c(J, u.status, "ajax-" + a), o && ea(Wi, e, n), (Di = []))
              : i
              ? (o && ea(Ri, e, n, "sendWithCorsAjax"), c(V, u.status, "ajax-" + a))
              : (o && ea(Ri, e, n, "sendWithCorsAjax"), sa(e, n, r, !0)),
              (u.onreadystatechange = null);
          }
        }),
        (u.onerror = function () {
          o && ea(Ri, e, n, "sendWithCorsAjax"), c(U, u.status, "ajax-" + a);
        }),
        o && ea(Fi, e, n),
        u.send((a === Ht && Xr.stringify(n)) || null),
        !0
      );
    } catch (t) {
      return !1;
    }
  }
  function fa(t) {
    var e = "_lxsdk_rnd=" + (wn().toString(16) + Bi);
    return -1 === t.indexOf("?") ? t + "?" + e : t + "&" + e;
  }
  function la(t, e, n) {
    var r = new (ue())();
    return r.open(e || Ht, fa(t), !0), (r.timeout = Ni), r.setRequestHeader("Content-Type", n), r;
  }
  function da(t, e, n) {
    return pn.call(t, e) && t[e] && ((t[n] = t[e]), delete t[e]), t;
  }
  cr(ia, "pageDisappear"),
    cr(function () {
      ia();
    }, oe);
  var va = "performance",
    pa = "getEntries",
    ha = "pvid-" + parseInt(1e7 * Sn.rnd()) + "-" + parseInt(1e7 * Sn.rnd());
  if (tn && tn[va] && tn[va][pa] && Sn.isFunc(tn[va][pa]) && /\[native code\]/.test(tn[va][pa].toString())) {
    var ga = tn[va][pa]();
    Tn(ga, function (t) {
      try {
        t && "script" === t.initiatorType && /(lx|analytics)\.meituan\.net/.test(t.name) && (je("stime", t.duration || t.responseEnd - t.startTime), je("pvid", ha));
      } catch (t) {
        ta(en.href, "lx-func-performance", t.stack || t.message, 2, 1);
      }
    });
  }
  var ma = j + "_source",
    ya = j + "_medium",
    _a = j + "_term",
    wa = j + "_campaign",
    ba = j + "_content",
    xa = void 0,
    ka = !1;
  function Sa(t) {
    if (!t) return cn;
    var n = cn,
      r = /^utm_(source|medium|term|content|campaign)$/;
    return (
      jn.each(t, function (t, e) {
        r.test(e) && (!n && (n = {}), (n[e] = t));
      }),
      n
    );
  }
  function Oa(t) {
    if (!t) return !1;
    xa = t;
    var e = Sn.stringifyQuery(t);
    return qn.del(wt, rn), qn.top(wt, e, mt, rn), !0;
  }
  function Aa(t, e) {
    var a, n, r, i, o;
    return (
      ((!xa && !ka) || t) &&
        ((t = t || en.href),
        (e = e || nn.referrer),
        (o = t),
        (xa =
          Sa(Sn.parseQuery(o)) ||
          (function (t) {
            var e = cn,
              n = t.match(/^[\w-]+:\/\/([^/]+)(?:\/([^?]+)?)?/),
              o = n && n[1];
            if (o) {
              var c = Sn.parseQuery(t),
                r =
                  "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(
                    " "
                  ),
                u = "",
                s = "";
              jn.each(r, function (t) {
                var e = t.split(":"),
                  n = e[0],
                  r = e[1],
                  i = c[r],
                  a = -1 < n.indexOf(".") ? n : "." + n + ".";
                if (-1 < o.indexOf(a.toLowerCase()) && ((s = n), (u = i))) return !1;
              }),
                s && (((e = {})[ma] = s), (e[ya] = "organic"), u && (e[_a] = u));
            }
            return e;
          })(e))
          ? Oa(xa)
          : ((i = qn.get(wt)), (xa = C.test(i) ? Sa(Sn.isStr(i) ? Sn.parseQuery(i) : null) : xa)),
        xa ||
          ((a = void 0),
          (n = qn.get("__utmz")),
          (r = n && n.match(/(utmc(tr|sr|cn|md|ct))=([^|()]+)/g)) &&
            jn.each(r, function (t) {
              var e = t.split("="),
                n = e[0],
                r = void 0,
                i = e[1] || "";
              "utmcsr" === n ? (r = ma) : "utmccn" === n ? (r = wa) : "utmcmd" === n ? (r = ya) : "utmcct" === n ? (r = ba) : "utmctr" === n && (r = _a),
                r && ((a = a || {})[r] = i);
            }),
          Oa((xa = a))),
        (ka = c)),
      xa
    );
  }
  var Ia = "tag",
    ja = 18e5;
  function Ca(t, e, n, r, i, a) {
    var o = {};
    (o.c = t),
      (o.k = e),
      (o.v = n),
      (o.t = r || +new Date()),
      (o.u = i || ""),
      (o.r = a || ""),
      (this.toJSON = function () {
        return On(!0, {}, o);
      });
  }
  var Ta = {
    set: function (t, e, n) {
      var r = void 0,
        i = [],
        a = ki.get(Ia) || [];
      if (!Sn.isStr(e) || "" === e) return !1;
      for (var o = 0, c = a.length; o < c; o++) Na((r = a[o])) || (t === r.c ? e !== r.k && i.push(r) : i.push(r));
      return (r = new Ca(t, e, n, +new Date())), i.push(r.toJSON()), ki.set(Ia, i), !0;
    },
    get: function (t, e) {
      var n = void 0,
        r = ki.get(Ia);
      if (r && r.length)
        return (
          (n = {}),
          jn.each(r, function (t) {
            var e = {};
            (e[t.k] = t.v), Na(t) || (n[t.c] = On(!0, n[t.c] || {}, e));
          }),
          t && e ? n[t] && n[t][e] : t ? n[t] : n
        );
    },
    getAll: function (t) {
      var e = ki.get(Ia),
        n = Ae() || ki.get(zt),
        r = {},
        i = void 0;
      return (
        !t && n && (r = On((i = !0), r, n)),
        jn.each(e, function (t) {
          var e = void 0;
          !Na(t) && t.v && ((i = !0), ((e = {})[t.k] = t.v), An(e[t.k]) && (e[t.k].lx_tag_tm = t.t), (r[t.c] = On(!0, r[t.c], e)));
        }),
        i && r
      );
    },
    clear: function (e, n) {
      if ((ki.set(zt, []), (Oe = {}), !e)) return ki.set(Ia, []);
      if (Sn.isStr(e)) {
        var t = ki.get(Ia),
          r = [];
        jn.each(t, function (t) {
          ((n !== cn && t.k !== n) || e !== t.c) && r.push(t);
        }),
          ki.set(Ia, r);
      }
    },
  };
  function Na(t) {
    var e = Sn.now();
    return ja < e - t.t;
  }
  var qa =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          },
    Ea = (function () {
      var t = !("undefined" == typeof window || !window.navigator || !window.navigator.userAgent);
      function r() {
        return t ? navigator.userAgent.toLowerCase() : "";
      }
      function a(t) {
        for (var e = {}, n = t.replace(/\([^)]+\)/g, "").split(/\s+/), r = "", i = 0; i < n.length; i += 1) {
          var a = n[i],
            o = a.lastIndexOf("/");
          if (o < 0) r = a;
          else {
            var c = a.slice(0, o);
            r && ((c = r + " " + c), (r = "")), (e[c] = a.slice(o - a.length + 1));
          }
        }
        return e;
      }
      function u(t) {
        var e = t || "0",
          n = e.match(/^(\d*)/);
        return n ? Number(n[1]) : 0;
      }
      function o(t, e) {
        for (var n = "string" == typeof t ? t.split(".") : ["0"], r = "string" == typeof e ? e.split(".") : ["0"], i = Math.max(n.length, r.length), a = 0; a < i; a += 1) {
          var o = u(n[a]),
            c = u(r[a]);
          if (c < o) return 1;
          if (o < c) return -1;
        }
        return 0;
      }
      function c(t) {
        var e = -1,
          n = document.createElement("iframe");
        function r() {
          if ((clearTimeout(e), n)) {
            var t = n.parentNode;
            t && t.removeChild(n), (n.onload = null), (n.onerror = null), (n = null);
          }
        }
        (n.style.display = "none"), (n.onload = r), (n.onerror = r), (n.src = t), document.documentElement.appendChild(n), (e = setTimeout(r, 3e3));
      }
      function s(t, e, n, r) {
        try {
          window.webkit.messageHandlers.titans.postMessage({
            method: e,
            args: n,
            callbackId: r,
          });
        } catch (error) {
          c(t);
        }
      }
      function f(t) {
        if (window.KNBTitansX && window.KNBTitansX.sendMessage) window.KNBTitansX.sendMessage(t);
        else {
          if (10240 < t.length) throw new Error("too large bridge data");
          window.prompt(t);
        }
      }
      function l(t) {
        if (10240 < t.length) throw new Error("too large bridge data");
        window.prompt(t);
      }
      var e,
        n = {
          getDefaultSender: function () {
            var i = Function.prototype,
              t = r(),
              e = a(t),
              n = e.titansx || e.titansnox || "0";
            return (
              /ios|iphone|ipod|ipad/.test(t) ? (i = 0 <= o(n, "11.26") ? s : c) : /android/.test(t) && (i = 0 < o(e.android, "4.2.0") ? f : l),
              function (t, e, n) {
                var r = "js://_?method=" + t + "&callbackId=" + n + "&args=" + encodeURIComponent(e);
                i(r, t, e, n);
              }
            );
          },
          compareVersion: o,
          parseUserAgent: a,
          canUseSlot: ((e = a(r())), 0 <= o(e.titansx || e.titansnox, "11.13")),
        },
        i = n.getDefaultSender,
        d = n.compareVersion,
        v = n.parseUserAgent,
        p = n.canUseSlot,
        h =
          "function" == typeof Symbol && "symbol" === qa(Symbol.iterator)
            ? function (t) {
                return void 0 === t ? "undefined" : qa(t);
              }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : qa(t);
              },
        g = {
          sender: null,
        };
      function m(t) {
        return "DPApp_callback_" + t;
      }
      function y(t, e) {
        var n = m(t),
          r = window[n];
        r && (r(e), r.isSafeDelete && (window[n] = void 0));
      }
      function _(t) {
        var e = t || "DPApp";
        if (!window[e] || !window[e].KNBCore) {
          var n = {
            dequeue: (window[e] && window[e].dequeue) || Function.prototype,
            KNBCore: !0,
            callback: y,
          };
          window[e] = (function (t, e) {
            if (t && "object" === (void 0 === t ? "undefined" : h(t))) {
              var n = t;
              return (
                Object.keys(e).forEach(function (t) {
                  n[t] = e[t];
                }),
                n
              );
            }
            return e;
          })(window[e], n);
        }
      }
      var w,
        b = {
          bindSender: function (t) {
            "function" == typeof t && (g.sender = t);
          },
          sendMessage: function (t, e, n, r, i) {
            var a = p && r ? "KNBSlot" + r : void 0;
            _(a);
            var o = (function (t) {
                if (!/^[a-zA-Z0-9]*$/.test(t)) throw new Error("illegal slot name");
                if ("undefined" == typeof window) throw new Error("[KNB-Core Error] window is not defined");
                if (((window.__TITANS_COUNT = window.__TITANS_COUNT || 1), "number" != typeof window.__TITANS_COUNT)) throw new Error("[KNB-Core Error] __TITANS_COUNT invalid!");
                return ++window.__TITANS_COUNT + (t ? "_" + t : "");
              })(a),
              c = m(o),
              u = n || {},
              s = setTimeout(function () {
                "function" == typeof window[c] &&
                  window[c]({
                    status: "timeout",
                  });
              }, i || 2e3);
            if (
              ((window[c] = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                clearTimeout(s);
                var e = t.status,
                  n = "action" === e ? "handle" : e;
                "0" === String(n) && (n = "success"), "handle" !== n && "success" !== n && "timeout" !== n && (n = "fail");
                var r = u[n] || Function.prototype;
                if ("function" == typeof r) return r(t);
              }),
              u.handle || u.timeout || (window[c].isSafeDelete = !0),
              g.sender)
            )
              try {
                g.sender(t || "", JSON.stringify(e || {}), o);
              } catch (error) {
                window[c]({
                  status: "fail",
                  errorMsg: error.message,
                  errorCode: error.code || 21,
                });
              }
          },
          fireCallback: y,
          compareVersion: d,
          parseUserAgent: v,
        };
      return (w = b), "undefined" != typeof window && ((g.sender = i()), window.KNBCore || (window.KNBCore = w)), b;
    })(),
    Da = !1,
    Ma = [],
    Ba = void 0,
    Fa = void 0;
  function Ra(t) {
    Br()
      ? n === dr
        ? t(cn, Fa)
        : Da
        ? t(Ba, Fa)
        : (Ma.push(t),
          Da
            ? t(cn, Fa)
            : new Promise(function (t) {
                t({
                  ready: function (t) {
                    return t();
                  },
                  use: function (t, e) {
                    (e = e || {}),
                      Ea.sendMessage(
                        t,
                        {
                          data: e.data || {},
                        },
                        e,
                        "LXAnalyticsSDK"
                      );
                  },
                }),
                  (Da = !0);
              }).then(function (t) {
                var e,
                  n,
                  r = (Fa = t);
                (e = Ba),
                  (n = r),
                  jn.each(Ma, function (t) {
                    t(e, n);
                  }),
                  (Ma = []);
              }))
      : t(B, Fa);
  }
  var Wa = 500,
    Pa = "getUserInfo";
  function La() {
    return new Qr(function (a, r) {
      Ra(function (t, e) {
        t && ta(location.href, "lx-knb-error", "GetKNB-" + Pa + "-" + t || "", 2, 2);
        var n = tn.DPApp,
          i = T(function () {
            ta(location.href, "lx-knb-error", "TIMEOUT-" + Pa + "-" + Wa, 2, 2), a({});
          }, Wa);
        e
          ? e.ready(function () {
              e.use(Pa, {
                success: function (t) {
                  var e, n, r;
                  N(i),
                    a(
                      ((n = {}),
                      ((r = (e = t)[w]) && "0" !== r) || "dp" !== e.type ? e[w] && (n[w] = e[w]) : (n[w] = e[v]),
                      "dp" !== e.type && e[v] && (n[v] = e[v]),
                      e.unionId && (n.unionId = e.unionId),
                      e.userId && (n.userId = e.userId),
                      n)
                    );
                },
                fail: function (t) {
                  N(i),
                    ta(location.href, "lx-knb-error", "KNBuse-fail-" + JSON.stringify(t) + "-" + Pa + "-" + D || "", 2, 2),
                    r({
                      code: D,
                    });
                },
              });
            })
          : n && n[Pa]
          ? n.ready(function () {
              n[Pa]({
                success: function (t) {
                  N(i);
                  var e = {};
                  (t.dpid || t.userId) && ((e.dpid = t.dpid), (e.userId = t.userId), (e.unionId = t.unionId)), a(e);
                },
                fail: function (t) {
                  N(i),
                    ta(location.href, "lx-knb-error", "DPAppuse-fail-" + Pa + "-" + JSON.stringify(t) + "-" + E || "", 2, 2),
                    r({
                      code: E,
                      res: t,
                    });
                },
              });
            })
          : (ta(location.href, "lx-knb-error", "GetKNB-" + Pa + "-" + E, 2, 2),
            r({
              code: E,
            }));
      });
    });
  }
  function Ja() {
    return Math.floor(1 + 65535 * Sn.rnd())
      .toString(16)
      .substring(1);
  }
  function Ua() {
    var t = [],
      e = +new Date();
    return t.push(e.toString(16)), t.push(Ja()), t.push(Ja()), t.push(Ja()), t.join("-");
  }
  var Va = {},
    Ka = !1;
  function Xa(i, c, u) {
    if (dr === n && window.JavaScriptBridge)
      window.JavaScriptBridge.log(c, function (t) {
        var e = t.data;
        try {
          Sn.isStr(e) && (e = Xr.parse(e)), u(cn, e.data ? e.data : e);
        } catch (t) {
          u(t);
        }
      });
    else {
      var t = zn(Pr, "12.12.400");
      if (!(!ve && xn(t) && 0 <= t))
        return Ra(function (t, e) {
          if (t) return ta(location.href, "lx-knb-error", "GetKNB-" + Xr.stringify(c) + "-" + t || "", 2, 2), u(t);
          var n = !1,
            r = T(function () {
              (n = !0), ta(location.href, "lx-knb-error", "TIMEOUT-" + Xr.stringify(c) + "-3000" || "", 2, 2), u(q);
            }, 3e3);
          e.ready(function () {
            e.use(i, {
              data: c,
              success: function (e) {
                if ((N(r), !n))
                  if ("success" === e.status) {
                    var t = e.data || {};
                    try {
                      Sn.isStr(t) && (t = Xr.parse(t)), u(cn, t.data ? t.data : e);
                    } catch (t) {
                      ta(location.href, "lx-knb-error", "KNBuse-success-" + Xr.stringify(c) + "-" + e + "-" + t || "", 2, 2), u(t);
                    }
                  } else ta(location.href, "lx-knb-error", "KNBuse-success-" + Xr.stringify(c) + "-" + e + "-" + M || "", 2, 2), u(M);
              },
              fail: function (t) {
                N(r), n || (ta(location.href, "lx-knb-error", "KNBuse-fail-" + Xr.stringify(t) + "-" + Xr.stringify(c) + "-" + M || "", 2, 2), u(M));
              },
            });
          });
        });
      try {
        var s = "iframe-" + new Date().getTime() + "-" + Math.random().toString(36).substring(2, 8);
        Sn.isObj(Va) || (Va = {}), (Va[s] = !0);
        var f = T(function () {
          ta(location.href, "lx-knb-error", "TIMEOUT-iframe-" + Xr.stringify(c) + "-3000" || "", 2, 2), delete Va[s], u(q);
        }, 3e3);
        window.addEventListener("message", function (e) {
          if (e && e.data) {
            var t = e.data,
              n = t.type,
              r = t.token,
              i = t.resData,
              a = t.errorMsg;
            if ("BridgeCallbackFromMainWindow" === n) {
              if (s === r && Va[s])
                if ((N(f), delete Va[s], i && "success" === i.status)) {
                  var o = i.data || {};
                  try {
                    Sn.isStr(o) && (o = Xr.parse(o)), u(cn, o.data ? o.data : i);
                  } catch (t) {
                    ta(location.href, "lx-knb-error", "KNB-iframe-success-try-catch-" + Xr.stringify(e.data) + "-" + Xr.stringify(i) + "-" + t || "", 2, 2), u(t);
                  }
                } else ta(location.href, "lx-knb-error", "KNB-iframe-fail-" + a + "-" + Xr.stringify(e.data) + "-" + M || "", 2, 2), u(M);
            } else
              "NativeBridgeReady" === n &&
                ((Ka = !0),
                de.postMessage(
                  {
                    method: "lxlog",
                    token: s,
                    type: "InvokeBridgeFromIframe",
                    args: {
                      data: c,
                    },
                  },
                  "*"
                ));
          }
        }),
          Ka
            ? de.postMessage(
                {
                  method: "lxlog",
                  token: s,
                  type: "InvokeBridgeFromIframe",
                  args: {
                    data: c,
                  },
                },
                "*"
              )
            : de.postMessage(
                {
                  type: "IsNativeAndScriptReady",
                },
                "*"
              );
      } catch (t) {
        ta(location.href, "lx-knb-error", "KNB-iframe-try-catch-" + t || "", 2, 2), u(t);
      }
    }
  }
  function $a(t) {
    var e = t.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/),
      n = [];
    if (e) for (var r = 1; r < e.length; r++) n.push(parseInt(e[r] || 0));
    return n;
  }
  function Qa(t, e) {
    var n = $a(t),
      r = $a(e);
    return !(n[0] < r[0]) && !(n[0] === r[0] && n[1] < r[1]) && !(n[0] === r[0] && n[1] === r[1] && n[2] < r[2]);
  }
  var za = 100,
    Ga = !1,
    Ha = void 0,
    Za = !1,
    Ya = !1,
    to = !1,
    eo = [],
    no = 0,
    ro = void 0,
    io = Sn.now();
  function ao(t) {
    var e = (t._opts || {}).nativeOptions || {};
    return {
      cb: "_lx" + (100 * Sn.now() + no++),
      mn: t._mn,
      cn: t._cn,
      data: t._d || {},
      options: e,
      ver: 4,
    };
  }
  function oo(t, e, n, r, i) {
    i = i || {};
    var a = this;
    (a._cn = t), (a._mn = e), (a._d = n), (a._cb = r), (a._opts = i);
  }
  function co() {
    return Za;
  }
  (oo.prototype.send = function (n) {
    var r = this,
      i = ao(r),
      t = "statistics://_lx/?data=" + ln(Xr.stringify(i)),
      e = Sn.now();
    ro && 5e3 < e - io && "getEnv" === r._mn && za === J
      ? (r._mn, n(0, ro))
      : (r._mn,
        i.cb,
        Xa("lxlog", t, function (t, e) {
          t ? (r._mn, i.cb, new Date(), L(t)) : (r._mn, i.cb, new Date()), n(t, e);
        }));
  }),
    (Ha = function (t, e, n, r, i) {
      if (
        "setEvs" !== e ||
        (function (t, e) {
          var n = !0;
          In(t) || (n = !1);
          var r = e.web_cid,
            i = e.val_bid,
            a = e.val_lab;
          ((r && !In(r)) || (i && !In(i)) || (a && !An(a))) && (n = !1);
          return n;
        })(t, n[0])
      ) {
        if (U === za || 600 === za) return r(za);
        var a = new oo(t, e, n, ae, i);
        if (J === za)
          a.send(function (t, e) {
            r(t, e);
          });
        else if (100 === za) {
          if ((eo.push([a, r]), !Ga)) {
            Ga = !0;
            new Date();
            new oo(t, "getEnv", {}).send(function (r, t) {
              if ((new Date(), r && L(r), r)) za = U;
              else {
                if (((za = J), Le(dt), Sn.isStr(t)))
                  try {
                    t = Xr.parse(t);
                  } catch (t) {}
                var e = (ro = t).sdk_ver || "";
                (Za = Qa(e, "4.0.0")), (Ya = Qa(e, "4.3.0")), (to = !Qa(e, "4.8.0"));
              }
              jn.each(eo, function (t) {
                var e = t[0],
                  n = t[1];
                r
                  ? (L(r), n(r))
                  : e.send(function (t, e) {
                      n(t, e);
                    });
              });
            });
          }
        } else r(V);
      }
    });
  var uo =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          },
    so = {},
    fo = pt,
    lo = [],
    vo = null,
    po = !1,
    ho = {
      tag: "tag",
      s: h,
      l: l,
      a: b,
      w: O,
      lch: "lch",
      u: {
        us: t,
        um: i,
        uc: a,
        ucp: u,
        ut: o,
      },
      se: Kt,
      sc: d,
      v: A,
      uni: x,
      di: w,
      ui: v,
      wxi: "wxunionid",
    },
    go = ["tag", h, l, b, O, "lch", Kt, d, A, x, w, v, Dt, g, "oneid_mini_program", "wi", "wf", "ji", "jf", "wxunionid", "v", "pn", "app"],
    mo = [t, i, a, u, o],
    yo = "_lxsdk_wxenv_",
    _o = ["sdk_ver", "ua"],
    wo = {},
    bo = [Cr, Tr, Nr, qr, Er],
    xo = !!jn.find(bo, function (t) {
      return t;
    });
  function ko(t) {
    var e = /(^\w+-\w+-\w+-\w+-\w+)/;
    if (e.test(t)) {
      var n = t.match(e);
      qn.top(bt, n[1], yt);
    } else t && !/(^\w+\.\d+\.\d+\.\d+\.\d+)/.test(t) && t.length < 100 ? qn.top(bt, t, yt) : qn.top(bt, "", -1);
  }
  var So = 0,
    Oo = 1,
    Ao = 2,
    Io = "|";
  function jo() {
    var t = nn.domain;
    return "sub" === be.sessionScope ? St + "_" + t : St;
  }
  function Co(t) {
    var e = jo(),
      n = qn.get(e);
    return n ? n.split(Io)[t] : "";
  }
  function To(t, e, n) {
    var r,
      i,
      a,
      o = jo();
    qn.top(o, ((r = e), (i = n), (a = []).push(t || No()), a.push(r || qo()), a.push(i || Eo()), a.join(Io)), _t);
  }
  function No() {
    return Co(So);
  }
  function qo() {
    return Co(Oo);
  }
  function Eo() {
    var t = 0,
      e = Co(Ao);
    return isNaN(e) || (t = parseInt(e)), t < 0 ? 0 : t;
  }
  var Do,
    Mo = void 0,
    Bo = ((Do = "_lxsdk_test"), qn.set(Do, "1"), !(-1 < nn.cookie.indexOf(Do) && (qn.del(Do), 1)));
  function Fo() {
    if (Bo) return (Mo = Mo || 0), ++Mo;
    var t = Eo();
    return (t = t || 0), To(cn, cn, ++t), t;
  }
  function Ro(t) {
    var e = {};
    if (!C.test(t)) return e;
    var n,
      r = Sn.parseQuery(t);
    if (r._lx_tag)
      try {
        var i = r._lx_tag.replace(/\*/g, "+").replace(/_/, "/").replace(/\./g, "=");
        (n = JSON.parse(
          (function (t) {
            for (var e = "", n = 0, r = 0, i = 0, a = 0; n < t.length; )
              (r = t.charCodeAt(n)) < 128
                ? ((e += String.fromCharCode(r)), n++)
                : 191 < r && r < 224
                ? ((a = t.charCodeAt(n + 1)), (e += String.fromCharCode(((31 & r) << 6) | (63 & a))), (n += 2))
                : ((a = t.charCodeAt(n + 1)), (i = t.charCodeAt(n + 2)), (e += String.fromCharCode(((15 & r) << 12) | ((63 & a) << 6) | (63 & i))), (n += 3));
            return e;
          })(ar(i))
        )),
          (Oe = On(!0, {}, n));
      } catch (t) {}
    if ((r[v] && (e[v] = r[v]), r[g] && (e[g] = r[g]), r[y] && (e[m] = r[y]), r.__lxsdk_params)) {
      var a = r._lx_ver,
        o = {};
      try {
        if (a) {
          var c = decodeURIComponent(decodeURIComponent(r.__lxsdk_params)),
            u = ar(c.replace(/\*/g, "+").replace(/_/, "/").replace(/\./g, "=")).split(";"),
            s = void 0;
          jn.each(u, function (t) {
            var e = t.split(":"),
              n = e.shift(),
              r = e.join(":");
            if (r)
              if (0 <= mo.indexOf(n)) (s = s || {})[n] = r;
              else {
                if (go.indexOf(n) < 0)
                  try {
                    r = ar(r);
                  } catch (t) {}
                else "v" === n && (n = A);
                o[n] = r;
              }
          }),
            s && (o[j] = s),
            o[Kt] || (o[Kt] = Xt);
        } else {
          po = !0;
          var f = decodeURIComponent(decodeURIComponent(r.__lxsdk_params)).split(";"),
            l = ho.u,
            d = void 0;
          jn.each(f, function (t) {
            var e = t.split(":"),
              n = e.shift(),
              r = e.join(":");
            if (r)
              if (l[n]) (d = d || {})[l[n]] = r;
              else {
                if (!ho[n])
                  try {
                    r = ar(r);
                  } catch (t) {}
                o[n] = r;
              }
          }),
            d && (o[j] = d),
            o.se || (o.se = "online");
        }
      } catch (t) {
        ta(en.href, "lx-func-getUrlQuery-error", t.stack || t.message, 2, 0);
      }
      e[S] = o;
    }
    return e;
  }
  function Wo(t, u, s) {
    return (
      (s = s || {}),
      new Qr(function (o, c) {
        T(function () {
          c({
            code: q,
          });
        }, 3e3),
          Ha(t, "getEnv", {}, function (t, e) {
            if (t) c(t);
            else if (
              ((vo = be.nativeSDKVer = e.sdk_ver),
              (a = be.nativeSDKVer),
              Sn.isStr(a) && ((ke.MVL = -1 < zn(a, "4.14.0")), (ke.QR = -1 < zn(a, "4.14.0")), (ke.getReqId = -1 < zn(a, "4.12.0"))),
              s.origin)
            )
              o(e);
            else {
              var n = {
                uuid: v,
                msid: h,
                uid: m,
                dpid: w,
                appnm: b,
                union_id: x,
              };
              for (var r in ((u = u || {}), n)) {
                var i = n[r];
                e[r] && (u[i] = e[r]);
                try {
                  if ("uuid" === r) ki.get(v) !== e[r] && ki.set(v, e[r]);
                } catch (t) {}
              }
              o(u);
            }
            var a;
          });
      })
    );
  }
  function Po() {
    var t = qn.get(Ot);
    if (t) {
      var e = t.split(","),
        n = /^\d+\.\d{5,}$/;
      return 3 !== e.length
        ? null
        : n.test(e[0]) && n.test(e[1])
        ? {
            lat: e[0],
            lng: e[1],
            tm: e[2],
          }
        : null;
    }
    return null;
  }
  function Lo(t) {
    return On(!0, {}, t);
  }
  function Jo(t) {
    var e = nn.getElementsByTagName("meta"),
      n = Wn(e, "lx:appnm"),
      r = Wn(e, "lx:defaultAppnm"),
      i = dr,
      a = nn.domain,
      o = Pe();
    return Te("appnm", n), Te("defaultAppnm", r), vr && er(dr || n || r || a), pr ? n || (2 === o ? t : i || r || a) : n || i || r || a;
  }
  function Uo() {
    var t = dr === f || dr === s || jr || Ir || xo,
      e = (function () {
        var t = qn.get(bt),
          e = qn.get("iuuid") || qn.get("uuid") || t;
        Br() && (e = ki.get(v) || e);
        var n = No(),
          r = qo(),
          i = qn.get(kt) || qn.get(w),
          a = {};
        return e && (a[v] = e), n && (a[h] = n), t && (a[l] = t), r && (a[m] = r), i && (a[w] = i), a;
      })(),
      n = void 0,
      r = {};
    t && (r = Ro(en.href)),
      dr === f && (r[v] ? (e[v] ? (r[v] !== e[v] ? je("uuidState", "2") : je("uuidState", "3")) : ((e[v] = r[v]), je("uuidState", "1")), delete r[v]) : je("uuidState", "0")),
      ((n = On(e, r)).ct = gr);
    var i = Aa();
    i && (n[j] = i);
    var a = ji();
    (n[l] = a), n[v] || (n[v] = a), n[h] || ((n[h] = Ua()), To(n[h], n.uid || "")), n[v] && ko(n[v]);
    var o = Jo();
    Sn.isStr(o) && (n[b] = o);
    var c,
      u =
        ((c = on.replace(
          /^.*([A-Za-z-]+)\/com\.(sankuai(?!\.meituan\.)|meituan(?!\.sankuai\.)|dianping|sankuai\.meituan|meituan\.sankuai)\.([.A-Za-z0-9-]+)\/(\d+[.\d]+).*$/,
          "$4"
        )),
        /^\d+(\.\d+)+$/.test(c) ? c : null);
    return u && (n.app = u), n;
  }
  function Vo(e) {
    return function (t) {
      var n = t;
      return (
        e !== t && (n = On(e, t)),
        n.dpid && n.uid
          ? n
          : La().then(
              function (t) {
                var e = {};
                return t.dpid && ((e.dpid = t.dpid), t.userId && (e.uid = "" + t.userId), t.unionId && (e.union_id = t.unionId)), (n = On(n, e));
              },
              function (t) {
                return L(t), n;
              }
            )
      );
    };
  }
  function Ko(e, n) {
    try {
      !(function (e) {
        try {
          ve
            ? window.WeixinJSBridge && window.WeixinJSBridge.invoke
              ? window.WeixinJSBridge.invoke(
                  "invokeMiniProgramAPI",
                  {
                    name: "getTinySystemInfo",
                    arg: {
                      source: "lx",
                    },
                  },
                  e
                )
              : ta(
                  location.href,
                  "lx-miniprogram-bridge-error",
                  "isTopWindow: " + ve + "-window:" + window + "-Weixin:" + window.WeixinJSBridge + "-invoke:" + window.WeixinJSBridge.invoke,
                  2,
                  2
                )
            : (window.addEventListener("message", function (t) {
                t && t.data && "getTinySystemInfo" === t.data.name && e(t.data.data);
              }),
              de.postMessage(
                {
                  func: "invokeMiniProgramAPI",
                  params: {
                    name: "getTinySystemInfo",
                    arg: {
                      source: "lx",
                    },
                  },
                },
                "*"
              ));
        } catch (t) {
          ta(location.href, "lx-miniprogram-bridge-error", "getUuidFromMiniProgramJSBridge-try-catch-" + (t.stack || t.message), 2, 2);
        }
      })(function (t) {
        t && An(t) && t.uuid ? e(t.uuid) : n(t);
      });
    } catch (t) {
      ta(location.href, "lx-miniprogram-bridge-error", "invokeMiniProgramGetUUID-try-catch-" + (t.stack || t.message), 2, 2);
    }
  }
  var Xo = function (t) {
    we();
    var o = Uo();
    if (Br()) {
      var e = Wo(t, o);
      return (
        r === dr &&
          (e = e.then(Vo(o), function (t) {
            return L(t), Vo(o)();
          })),
        e.then(
          function (t) {
            var e = Jo(t[b]),
              n = t[w],
              r = t[v],
              i = t[x],
              a = t;
            return t !== o && (a = On(o, t)), Sn.isStr(e) && (a[b] = e), r && ko(r), n && qn.top(kt, n, yt), i && qn.top("_lxsdk_unoinid", i, yt), a;
          },
          function (t) {
            return t && L(t), o;
          }
        )
      );
    }
    var n,
      c = Lo(o),
      u = c[S];
    return ((n = Sn.now()),
    new Qr(function (t) {
      if (jr || Ir)
        if (/miniProgram/i.test(on)) t(!0);
        else if (tn.WeixinJSBridge && tn.WeixinJSBridge.invoke) t("miniprogram" === tn.__wxjs_environment);
        else {
          var e = setTimeout(function () {
            (be.wx_t = Sn.now() - n), t(!1);
          }, 5e3);
          nn.addEventListener("WeixinJSBridgeReady", function () {
            clearTimeout(e), (be.wx_t = Sn.now() - n), t("miniprogram" === tn.__wxjs_environment);
          });
        }
      else t(!!xo);
    }))
      .then(function (n) {
        return new Qr(function (e) {
          if ((be.inWXMP = n))
            if (Ir) {
              be.nt = 7;
              try {
                var t = zn(Rr, "12.11.200");
                !Dr && xn(t) && 0 <= t
                  ? new Qr(function (e, n) {
                      setTimeout(function () {
                        n({
                          code: q,
                        });
                      }, 3e3);
                      try {
                        if (window && de && document)
                          window.WeixinJSBridge
                            ? Ko(e, n)
                            : ve
                            ? document.addEventListener("WeixinJSBridgeReady", function () {
                                Ko(e, n);
                              })
                            : (window.addEventListener("message", function (t) {
                                t && t.data && "WeixinJSBridgeReady" === t.data.event && Ko(e, n);
                              }),
                              de.postMessage(
                                {
                                  event: "isWeixinJsBridgeReady",
                                },
                                "*"
                              ));
                        else {
                          var t = {
                            window: window,
                            topWindow: de,
                            document: document,
                          };
                          ta(location.href, "lx-miniprogram-bridge-error", "Not satisfy:allObj:" + JSON.stringify(t), 2, 2);
                        }
                      } catch (t) {
                        ta(location.href, "lx-miniprogram-bridge-error", "onMmpBridgeReady-try-catch-" + (t.stack || t.message), 2, 2),
                          n({
                            code: q,
                          });
                      }
                    }).then(
                      function (t) {
                        t && c && An(c)
                          ? (c.uuid = t)
                          : ta(location.href, "lx-miniprogram-bridge-error", "Not satisfy:uuid:" + t + ", resultEnv:" + c + ", isObj(resultEnv):" + An(c), 2, 2),
                          e && e(n);
                      },
                      function (t) {
                        An(t) && (t = JSON.stringify(t)), ta(location.href, "lx-miniprogram-bridge-error", "catch-" + t, 2, 2), e && e(n);
                      }
                    )
                  : e && e(n);
              } catch (t) {
                ta(location.href, "lx-miniprogram-bridge-error", "isSupportMmpH5Bridge-try-catch-" + (t.stack || t.message), 2, 2), e && e(n);
              }
            } else (be.nt = 6), e && e(n);
          else (be.nt = vt), e && e(n);
        });
      })
      .then(function (t) {
        if (t) {
          if ("object" === (void 0 === ir ? "undefined" : uo(ir)) && !Sn.isObj(u))
            for (var e in ((u = {}), ir))
              if (0 === e.indexOf(yo)) {
                var n = e.slice(yo.length),
                  r = ir[e];
                if (n === j)
                  try {
                    u[j] = JSON.parse(r);
                  } catch (t) {}
                else u[n] = r;
              }
          var i = function (t) {
            var e = t;
            po && (e = ho[e] || e);
            var n = u[t];
            if (
              n &&
              ((c[k] = c[k] || {}),
              c[e] && (c[k][e] = c[e]),
              !jn.find(_o, function (t) {
                return t === e;
              }))
            )
              try {
                e && "pn" === e ? (jr || xo) && (c[e] = n) : (c[e] = n);
              } catch (t) {}
            try {
              ir.setItem(yo + e, An(n) ? JSON.stringify(n) : n);
            } catch (t) {
              ta(location.href, "lx-func-setSessionStorage-error", t.stack || t.message, 2, 1);
            }
          };
          for (var a in u) i(a);
        }
        return (wo = c[S] || {}), delete c[S], Qr.resolve(c);
      });
  };
  function $o(t) {
    return gt === fo
      ? Qr.resolve(Lo(so))
      : ht === fo
      ? new Qr(function (e) {
          var t;
          (t = function (t) {
            e(t);
          }),
            lo.push(t);
        })
      : ((fo = ht),
        Xo(t).then(function (n) {
          return (
            (so = On(!0, {}, n || {})),
            (jr || Ir || xo) && (be._isWXDev = so[Kt] === $t),
            (fo = gt),
            jn.each(lo, function (t, e) {
              Sn.isFunc(t) && lo[e](n);
            }),
            n
          );
        }));
  }
  var Qo = /([a-fA-F0-9-]+)(\.\d+)/,
    zo = "_hc.v",
    Go = 525600,
    Ho = "",
    Zo = /(dper|dianping|51ping)\.com/.test(rn);
  function Yo() {
    return (
      (function () {
        function t() {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      })() +
      "." +
      Math.round(+new Date() / 1e3)
    );
  }
  function tc() {
    return (
      !Ho &&
        Zo &&
        (Ho = (function () {
          var t = qn.get(zo);
          if ((t || ((t = Yo()), qn.top(zo, t, Go)), t)) {
            var e = t.match(Qo);
            return e ? e[1] : "";
          }
          return "";
        })()),
      Ho
    );
  }
  var ec = (function () {
    var t = void 0;
    try {
      var e = document;
      if (e.querySelectorAll) {
        var n = e.querySelectorAll("head script"),
          r = e.querySelectorAll("body script"),
          i = [];
        jn.each(n, function (t) {
          i.push(t);
        }),
          jn.each(r, function (t) {
            i.push(t);
          });
        for (var a = 0; a < i.length; a++) {
          var o = i[a].innerHTML.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
          if (o) {
            t = o[1];
            break;
          }
        }
      }
    } catch (t) {}
    return function () {
      return t;
    };
  })();
  function nc(t) {
    var e = this;
    e.s = t;
    var n = void 0,
      r = ki.get(Vt) || {
        s: t,
        d: e.d,
      };
    r.s !== t ? (ki.del(Vt), (n = e.d = [])) : (n = e.d = r.d || []), (e.l = (n && n.length) || 0);
  }
  var rc = null;
  function ic() {
    return rc;
  }
  function ac(t) {
    return ir && Sn.isFunc(ir.getItem) ? ir.getItem(t) : qn.get(t);
  }
  function oc(t, e) {
    if (!ir || !Sn.isFunc(ir.setItem)) return qn.top(t, e, _t);
    try {
      return ir.setItem(t, e);
    } catch (t) {
      ta(location.href, "lx-func-setSessionStorage-error", t.stack || t.message, 2, 1);
    }
  }
  function cc(t) {
    oc(It, t);
  }
  function uc() {
    var t = ac(It);
    return t || "";
  }
  function sc(t) {
    oc(At, t);
  }
  function fc() {
    var t = ac(At);
    return t || "";
  }
  var lc = "QR",
    dc = 20480 / 30,
    vc = 2592e5,
    pc = {},
    hc = void 0,
    gc = !(nc.prototype = {
      constructor: nc,
      set: function (t, e, n) {
        var r = this,
          i = r.l,
          a = r.d,
          o = r.indexOf(t),
          c = {
            scid: 0 < i ? a[i - 1].scid + 1 : 0,
            cid: t,
            bid: e,
            sf: n,
          };
        -1 < o ? a.splice(o, i - o, c) : a.push(c),
          (r.l = a.length),
          ki.set(Vt, {
            s: r.s,
            d: a,
          });
      },
      indexOf: function (t) {
        for (var e = this.d || [], n = 0, r = e.length; n < r; n++) {
          if (e[n].cid === t) return n;
        }
        return -1;
      },
      toJSON: function () {
        var t = this.d;
        return t && t.length ? t : null;
      },
    }),
    mc = [],
    yc = !1,
    _c = ["ua"].join("|") + "|",
    wc = ["lxcuid", "category", "sdk_ver", "utm", "uuid", "msid", "ct", "appnm"],
    bc = ["utm", "seq", "tm", "nm", "val_ref", "ji", "jf", "val_lab", "req_id", "wi", "wf", "s_from", "val_cid", "val_bid"];
  function xc() {
    if (!gc) {
      var t = wn(),
        e = [hc.opts.cid],
        n = 0,
        r = function (t, e) {
          if (!t)
            try {
              var n = e;
              if ((Sn.isObj(e) || (n = JSON.parse(e)), 0 === n.code))
                (function t(e) {
                  var n = 0;
                  var r = 0;
                  var i = [];
                  var a = wn() - vc;
                  for (var o in e) (n += e[o].bids.length), (r += e[o].bids.length);
                  if (!r) return;
                  for (var c in pc) (n += pc[c].bids.length), pc[c].tm < a && i.push(c);
                  dc < n &&
                    (i.length
                      ? (jn.each(i, function (t) {
                          delete pc[t];
                        }),
                        t(e))
                      : (pc = {}));
                  pc = On(pc, e);
                  setTimeout(function () {
                    ki.set(lc, pc);
                  }, 10);
                })(
                  (function (t) {
                    if (!Sn.isObj(t)) return;
                    var i = {},
                      a = wn();
                    return (
                      jn.each(t, function (e, r) {
                        (i[r] = i[r] || {
                          cid: r,
                          tm: a,
                          bids: [],
                          envInfo: (e.envInfo || {}).quickReport || [],
                          evsInfo: (e.evsInfo || {}).quickReport || [],
                        }),
                          delete e.envInfo,
                          delete e.evsInfo;
                        var t = function (n) {
                          var t = e[n].quickReport || [];
                          jn.each(t, function (t) {
                            var e = {
                              tp: n,
                              id: t,
                            };
                            i[r].bids.push(e);
                          });
                        };
                        for (var n in e) t(n);
                      }),
                      i
                    );
                  })(n.data)
                ),
                  (gc = !0);
              else {
                if (304 !== n.code) return void n.message;
                gc = !0;
              }
            } catch (t) {}
        };
      for (var i in pc) n++, (t = Math.min(pc[i].tm, t));
      0 === n && (t = 0);
      var a = (
        "https://ocean.sankuai.com/delivery/api/web-configFile?\n                timestamp=" +
        t +
        "\n                &cidList=" +
        e.join(",") +
        "\n                &rnd=" +
        Math.random()
      ).replace(/\s/g, "");
      ("https" === $n() &&
        sa(
          a,
          {},
          {
            cb: r,
          }
        )) ||
        (function (t, e, n, r) {
          var i = void 0,
            a = (r = r || {}).outTime || 5e3,
            o = "__lxsdk_jsonp_callback_" + Math.random().toString(16).slice(2, 10);
          /^([^?]+)\?/.test(t)
            ? (t = t.replace(/^([^?]+)\?/, "$1?" + e + "=" + o + "&"))
            : /^([^#]+)#/.test(t)
            ? (t = t.replace(/^([^#]+)#/, "$1?" + e + "=" + o + "#"))
            : (t += "?" + e + "=" + o);
          var c = nn.createElement("script");
          (c.src = t),
            (tn[o] = function (t) {
              clearTimeout(i);
              try {
                n(cn, t);
              } catch (t) {}
              delete window[o];
            }),
            (c.type = "application/javascript"),
            (c.charset = "utf-8"),
            c.setAttribute("async", "true"),
            nn.body.appendChild(c),
            (i = T(function () {
              try {
                n("timeout");
              } catch (t) {}
              delete window[o];
            }, a)),
            T(function () {
              nn.body.removeChild(c);
            }, 0);
        })(a, "callback", r);
    }
  }
  function kc(t, e, n) {
    if (!be.useQR) return !1;
    if (!pc[e]) return !1;
    for (var r = pc[e].bids, i = 0, a = r.length; i < a; i++) {
      var o = r[i];
      if (o.tp == t) {
        if (t === K && o.id == e) return !0;
        if (o.id == n) return !0;
      }
    }
    return !1;
  }
  function Sc(t, e, n) {
    var r = {},
      i = {};
    if (t && pc[t]) {
      var a = wc.concat(pc[t].envInfo || []),
        o = bc.concat(pc[t].evsInfo || []);
      jn.each(a, function (t) {
        e.hasOwnProperty(t) && e[t] && (i[t] = e[t]);
      }),
        jn.each(o, function (t) {
          n.hasOwnProperty(t) && _c.indexOf(t + "|") < 0 && (Ki ? ((r["evs." + t] = En(n[t])), (r.lx_dict = "true")) : ((r["evs." + t] = n[t]), (r.lx_dict = "false")));
        });
      var c = On(!0, i, r);
      mc.push(c),
        N(yc),
        (yc = setTimeout(function () {
          sa("https://" + ne + "/?rnd=" + Math.random(), mc, {
            nm: n.nm,
            cb: ae,
          }),
            (mc = []);
        }, 0));
    }
  }
  !(function () {
    var t = ki.get(lc);
    if (t)
      try {
        var e = void 0;
        (e = Sn.isObj(t) ? t : JSON.parse(t)), (pc = On(!0, pc, e));
      } catch (t) {}
  })(),
    (function e() {
      var n = Pu();
      return new Qr(function (t) {
        n
          ? t(n)
          : setTimeout(function () {
              e().then(t);
            }, 100);
      });
    })().then(function (t) {
      (hc = t), be.useQR && ($n(), xc());
    });
  var Oc = function (t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t))
      return (function (t, e) {
        var n = [],
          r = !0,
          i = !1,
          a = void 0;
        try {
          for (var o, c = t[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
        } catch (t) {
          (i = !0), (a = t);
        } finally {
          try {
            !r && c.return && c.return();
          } finally {
            if (i) throw a;
          }
        }
        return n;
      })(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  (window._lxsdk_ms = window._lxsdk_ms || "mem_" + Ua()), (window._lxsdk_seq = window._lxsdk_seq || 0), je("m_msid", window._lxsdk_ms);
  var Ac = "category",
    Ic = "setEvs",
    jc = 7e3,
    Cc = {
      overlen_cutoff: 1,
    },
    Tc = {
      code: re,
      status: 200,
      type: "native-report",
    },
    Nc = {
      code: ie,
      status: 200,
      type: "native-report",
    },
    qc = "val_bid",
    Ec = "page",
    Dc = "s_from",
    Mc = "wi",
    Bc = "wf",
    Fc = "ji",
    Rc = "jf",
    Wc = [h, l, b, O, d, "wxunionid", "pn", "app"],
    Pc = [v, w, Q, b, m, j, h, Ac, g, "ct", "logintype", "pli"],
    Lc = 0.95 < Sn.rnd() && !mr,
    Jc = [],
    Uc = nn.referrer,
    Vc = [],
    Kc = void 0,
    Xc = void 0,
    $c = {},
    Qc = 0,
    zc = 0,
    Gc = function (t, e, n) {
      if (n) {
        var r = {};
        (r[e] = n),
          (t = On(!0, t || {}, {
            custom: r,
          }));
      }
      return t;
    },
    Hc = function (t, e) {
      var n = cr(t);
      return (
        T(function () {
          ur(n, {
            code: -1,
            status: 408,
            type: "overtime",
          });
        }, (xn(e) && e) || 2500),
        n
      );
    };
  function Zc(t, e) {
    var n = this;
    (n.env = e || {}), (n.currentEvs = {}), (n.opts = On(!0, {}, t)), Jc.push(n), (Qe = n);
  }
  var Yc = Zc.prototype;
  function tu(t) {
    return 6 === t._ptpvs;
  }
  function eu() {
    return !Qc;
  }
  function nu(t) {
    return (
      (t = t || {}) &&
        !Sn.isObj(t) &&
        (t = {
          cid: "" + t,
        }),
      t
    );
  }
  function ru(n, r, i, a, o) {
    if (!Or) {
      var c = this,
        u = Hc((o = o || {}).callback, o.callbackTimeout),
        t = o,
        e = t.isLeave,
        s = t.currentPageInfo,
        f = t.mvDelay,
        l = t.sf,
        d = Sn.isStr(o.category) && "" !== o.category,
        v = kc(n, r, i);
      if (Pe() === vt) {
        var p = fu(c),
          h = Ta.getAll(),
          g = pu(n, r, i, a, null, o),
          m = [g],
          y = mu(p, m, h, o);
        if ((v && Sc(r, p, g), n === z)) {
          if (f && !d)
            return (
              g[at] && (g[at].md = f),
              Vc.push(g),
              void T(function () {
                if (Vc.length) {
                  var t = mu(p, Vc, h, o);
                  c.send(t, {
                    cbkey: u,
                    nodelay: !0,
                  }),
                    (Vc = []);
                }
              }, f * lt)
            );
        } else {
          if (n === G)
            return void ze.call(c, G, p, g, {
              tag: h,
            });
          if (n === $) {
            if (
              (s &&
                Tn(y.evs, function (t) {
                  (t[Pt] = t[Pt] || {}), (t[Pt][Ec] = c._cpi);
                }),
              (y = mu(p, m, h, o)),
              e)
            ) {
              var _ = Vn(),
                w = pu(X, r, cn, _);
              y.evs.push(w), cc(r), sc(Kc);
            }
            vr && l && ic().set(r, i, l);
          }
        }
        c.send(y, {
          nm: n,
          cbkey: u,
        });
      } else {
        var b = c.env,
          x = void 0,
          k = lu({
            isQuickReport: v,
          }),
          S = [gu.call(c, n, r, i, a)];
        if (
          n === $ &&
          ((x = {
            sf: l,
          }),
          c._cpi && (x.cpi = c._cpi),
          (S = [gu.call(c, n, r, i, a, null, x)]),
          e)
        ) {
          var O = Vn(),
            A = gu.call(c, X, r, null, O);
          S.push(A), cc(r), sc(Kc);
        }
        b[j] &&
          (S = (function (t, e) {
            if (!jn.isArray(t) || !t.length) return t;
            if (!Sn.isObj(t[0][Pt]))
              return (
                (t[0][Pt] = {
                  page: {
                    utm: e[j],
                  },
                }),
                t
              );
            if (!Sn.isObj(t[0][Pt][Ec]))
              return (
                (t[0][Pt][Ec] = {
                  utm: e[j],
                }),
                t
              );
            return (
              (t[0][Pt][Ec] = On(!0, t[0][Pt][Ec], {
                utm: e[j],
              })),
              t
            );
          })(S, b));
        var I = (Sn.isStr(o.category) && o.category) || b[Ac];
        new Date();
        Ha(
          su(I),
          Ic,
          S,
          function (t, e) {
            t ? (Le(vt), L(t), new Date(), ur(u, Nc), ru.call(c, n, r, i, a, o)) : (ur(u, Tc), new Date());
          },
          {
            nativeOptions: k,
          }
        );
      }
    }
  }
  function iu() {
    return Kc || (Kc = ou()), Kc;
  }
  function au(t) {
    var e = ki.get(I);
    return e && t && ki.del(I), e;
  }
  function ou() {
    return Sn.now().toString(16) + "-" + Math.floor(65535 * Sn.rnd()) + "-" + Math.floor(65535 * Sn.rnd());
  }
  function cu(t) {
    var e,
      n,
      r = t.nm;
    K === r
      ? ((t.nm = "mpt"), (t.val_act = "pageview"))
      : X === r
      ? ((t.nm = "report"), (t.val_act = "quit"))
      : ((t.nm = "mge"), (t.event_type = ((e = r), ((n = {})[Z] = "order"), (n[Y] = "pay"), (n[$] = "click"), (n[H] = "return"), (n[z] = "view"), (n[Q] = "click"), n[e] || r))),
      (t.nt = 0),
      (t.isauto = 8);
  }
  function uu(t) {
    var e = "data_sdk_";
    return 0 !== t.indexOf(e) && (t = e + t), t;
  }
  function su(t) {
    var e = "data_sdk_";
    return 0 === t.indexOf(e) && (t = t.replace(e, "")), t;
  }
  function fu(t) {
    var e = On(!0, {}, t.env);
    e[Ac] = uu(e[Ac]);
    var n = No();
    n || To((n = Ua()), e.uid || ""), be.inWXMP && Sn.isObj(e[k]) && Sn.isObj(t.env[k]) ? (e[k][h] = t.env[k][h] = n) : (e[h] = t.env[h] = n);
    var r = e.utm,
      i = {
        ua: sr,
        sdk_ver: _,
        ch: r && r.utm_source ? r.utm_source : "web",
        sc: br,
      };
    (i[Bt] = _), be.debug && (i._misid = be.debug);
    var a = On(!0, i, e);
    return be.isDev || be._isWXDev ? (a[Kt] = $t) : (a[Kt] = Xt), pr && !Re() && delete a.ch, a;
  }
  function lu(t) {
    return ((t = t || {}).isQuickReport = Se("QR") && !!t.isQuickReport), t;
  }
  function du(t, e) {
    var n = t.toString().split("."),
      r = Oc(n, 2),
      i = r[0],
      a = r[1],
      o = e.toString().split("."),
      c = Oc(o, 2),
      u = c[0],
      s = c[1];
    return {
      wi: (i = 999 * +i),
      wf: (a = a ? a.replace(/3/g, "c").replace(/7/g, "g").replace(/9/g, "i") : "0"),
      ji: (u = 777 * +u),
      jf: (s = s ? s.replace(/2/g, "b").replace(/4/g, "d").replace(/6/g, "f") : "0"),
    };
  }
  function vu(t) {
    if (Sn.isObj)
      try {
        return JSON.stringify(t), !0;
      } catch (t) {
        return ta(location.href, "lx-func-jsonStringify", t.stack || t.message, 2), !1;
      }
    return !0;
  }
  function pu(t, e, n, r, i, a) {
    (i = i || W), (a = a || {});
    var o = Fo(),
      c = Po();
    vu(r) ||
      (r = {
        error_val_lab: 1,
      });
    var u,
      s,
      f,
      l = (Sn.isObj(r) && r.custom) || {},
      d = void 0,
      v = K === t,
      p = Z === t,
      h = Y === t,
      g = {
        nm: t,
        tm: Sn.now(),
        nt: be.nt,
        isauto: i,
        val_cid: e,
        req_id: iu(),
        seq: o,
        lx_inner_data: On(!0, {}, Ce()),
      };
    if (((g[at].m_seq = ++window._lxsdk_seq), v)) {
      var m = en.href;
      (g.url = m), (d = Uc) && (g.refer_url = d), i === W && (Uc = m);
    }
    (p || v || h) && vr && ((u = g), (s = ic().toJSON()) && (u[Dc] = s), (g = u)),
      (r = Gc(r, "_hguid", tc())),
      (f = r) && f.custom && "v3" === f.custom._api && !e && ((g.val_cid = nn.title || en.pathname), (r = Gc(r, "_cid", 1))),
      Sn.isObj(l) && "v3" === l._api && ((g[at]._api = "v3"), delete l._api),
      vr && a.sf && (g[at].use_sfrom = 1);
    try {
      g[at].ht = Re();
    } catch (t) {}
    if ((v && ((r = Gc(r, "_hpid", ec())), (r = Gc(r, "_lx_cv", "prod")), be.wx_t && (r = Gc(r, "_wx_t", be.wx_t))), n && (g[qc] = n), be.geo)) {
      var y = du(be.geo.lat, be.geo.lng);
      (g[Mc] = y.wi), (g[Bc] = y.wf), (g[Fc] = y.ji), (g[Rc] = y.jf);
    } else if (c) {
      var _ = du(c.lat, c.lng);
      (g[Mc] = _.wi), (g[Bc] = _.wf), (g[Fc] = _.ji), (g[Rc] = _.jf);
    }
    if (r) {
      try {
        var w = JSON.stringify(r).length;
        jc <= w && ((r = Cc).overlen_length = w);
      } catch (t) {
        ta(location.href, "lx-func-jsonStringify", t.stack || t.message, 2);
      }
      if ((g[Pt] = r).lat && r.lng) {
        var b = du(r.lat, r.lng);
        (g[Mc] = b.wi), (g[Bc] = b.wf), (g[Fc] = b.ji), (g[Rc] = b.jf);
      }
    }
    return g;
  }
  function hu(t) {
    return hr ? t : lr && !to ? t : ln(t);
  }
  function gu(t, e, n, r, i, a) {
    i = i || W;
    var o = (a = a || {}).fromWA,
      c = this.env.appnm,
      u = Po(),
      s = !Je,
      f = void 0,
      l = {
        nm: t,
        tm: Sn.now(),
        nt: dt,
        isauto: i,
        val_cid: e,
        shouldCover: s,
        lx_inner_data: On(!0, {}, Ce()),
      };
    (l = On(!0, l, $c)),
      Xc && (l.req_id = Xc),
      a.sf && ((l[at].use_sfrom = 1), (l._sf = a.sf)),
      vu(r) ||
        (r = {
          error_val_lab: 1,
        });
    var d = void 0,
      v = On(!0, {}, r || {}),
      p = K === t;
    if (p) {
      var h = hu(en.href);
      d = {
        ua: sr,
        url: h,
        _fromWA: !!o,
      };
      var g = Aa();
      g && g.utm_source && (d.utm = g), (f = Uc) && (d.refer_url = hu(f)), i === W && (Uc = h);
    } else d = {};
    if (
      ((l = On(l, {
        web_cid: e,
        web_req_id: iu(),
        web_refer_cid: uc(),
        web_refer_req_id: fc(),
        web_first_pv: !!(zc <= 1 && tn.history && 1 === tn.history.length),
      })),
      jn.each(
        {
          web_req_id: iu(),
          web_sdk_ver: _,
          lxcuid: ji(),
          web_appnm: c,
        },
        function (t, e) {
          Sn.isStr(t) && (d[e] = t);
        }
      ),
      Sn.isObj(v.custom) &&
        "v3" === v.custom._api &&
        ((d.web_appnm = (function (t) {
          if (Sn.isStr(t)) return (t && _e[t]) || _e;
        })("appnm")),
        (l[at]._api = "v3"),
        delete v.custom._api),
      a.cpi && !v.page && (v.page = a.cpi),
      (v.custom = On(!0, v.custom, d)),
      (v = Gc(v, "_hguid", tc())),
      p && (v = Gc(v, "_hpid", ec())),
      t !== Q || Ya ? co() || cu(l) : co() ? (l.nm = $) : cu(l),
      u)
    ) {
      var m = du(u.lat, u.lng);
      (l[Mc] = m.wi), (l[Bc] = m.wf), (l[Fc] = m.ji), (l[Rc] = m.jf);
    }
    if ((n && (l[qc] = n), v))
      try {
        var y = JSON.stringify(v).length;
        jc <= y && ((v = Cc).overlen_length = y);
      } catch (t) {
        ta(location.href, "lx-func-jsonStringify", t.stack || t.message, 2);
      }
    return (l[Pt] = v), p && !co() && ((l.val_val = v), delete l[Pt]), l;
  }
  function mu(t, e, n, r) {
    var i = (r = r || {}).category;
    return (
      jn.isArrayLike(e) || (e = [e]),
      Sn.run(e, function (t) {
        t && n && (t.tag = n);
      }),
      (t.evs = e),
      Sn.isStr(i) && (t[Ac] = uu(i)),
      t
    );
  }
  function yu(t, e) {
    var n = {};
    return (n[ft] = e), On(n, t);
  }
  function _u(n, t, e, r) {
    try {
      var i =
          ((u = t),
          (s = e),
          (f = r),
          (l = null),
          !Sn.isStr(u) || s || f ? Sn.isObj(u) && Sn.isStr(s) && !f && ((l = s), (s = null)) : ((l = u), (u = null)),
          l &&
            (f = On(
              {
                cid: l,
              },
              f || {}
            )),
          {
            lab: u,
            env: s,
            opts: f,
          }),
        a = i.lab,
        o = i.env;
      (r = nu(i.opts)), (n.opts.cid = r.cid || n.opts.cid);
      var c = r.cid || n.opts.cid;
      if (!c || !Sn.isStr(c)) return;
      (r = On(
        {
          cid: c,
        },
        r
      )),
        o &&
          Sn.isObj(o) &&
          jn.each(o, function (t, e) {
            n._dt.set(e, t, cn, !0);
          }),
        n._dt.pageView(a, r);
    } catch (t) {
      ta(location.href, "lx-api-pageView", t.stack || t.message, 0);
    }
    var u, s, f, l;
  }
  function wu(t, e) {
    (this.env = t || {}), (this.opts = e || {}), (this._t = []);
  }
  (Yc.set = function (t, e, n, r) {
    var i = this,
      a = i.env,
      o = be.inWXMP && Sn.isObj(a[k]);
    if (Sn.isObj(t))
      Tn(t, function (t, e) {
        i.set(e, t);
      });
    else if ((t !== Ac || e) && t !== Kt && "pn" !== t) {
      try {
        t === v && Sn.isObj(a) && e !== a[t] && ta(location.href, "lx-api-set-uuid-mismatch", "key:" + t + "-val:" + e + "-env[key]:" + a[t], 2, 2);
      } catch (t) {
        ta(location.href, "lx-api-set-uuid-mismatch-error", t.stack || t.message, 0);
      }
      var c = (o && -1 < Wc.indexOf(t) && !wo[t]) || (o && -1 === Wc.indexOf(t));
      if (
        (!r && o && a[k][t] ? (a[k][t] = e) : (!c && o) || (a[t] = e),
        t === Ac && (be.c = e),
        "utm" === t && Sn.isObj(e) && !o && Oa(e),
        Te(t, e),
        b === t && er(e),
        dt !== Pe() || Gt[t])
      )
        Sn.isFunc(n) && n(a, i);
      else {
        var u = {},
          s = su(a[Ac]);
        (u[t] = e),
          Ha(s, "setEnv", u, function () {
            Sn.isFunc(n) && n(a, i);
          });
      }
      try {
        -1 === Pc.indexOf(t) && ta(location.href, "lx-api-set-value", "key:" + t + "-val:" + e, 2, 2);
      } catch (t) {
        ta(location.href, "lx-api-set-value-error", t.stack || t.message, 0);
      }
    }
  }),
    (Yc.get = function (t, e) {
      Sn.isFunc(e) && e(this.env[t], this);
    }),
    (Yc.pageView = function (n, r) {
      if (!Or) {
        r = nu(r) || {};
        var t = void 0,
          i = this,
          e = r.fromWA,
          a = r.withlab,
          o = Hc(r.callback, r.callbackTimeout),
          c = i.opts.cid,
          u = r.cid || c,
          s = r.isauto || W,
          f = r.isAutoInit,
          l = r.reportStatus,
          d = c && !(tu(i) || f) && !eu(),
          v = l === vt || vt === Pe(),
          p = i.env;
        if (
          (vu(n) ||
            (n = {
              error_val_lab: 1,
            }),
          e && a ? ((s = 6), (n = this._cpi || {})) : (this._cpi = n),
          d && !qe())
        ) {
          var h = Vn();
          (t = v ? pu(X, c, null, h) : gu.call(i, X, c, null, h)), cc(c), sc(Kc);
        }
        if ((Ne(0), (c && (tu(i) || eu())) || (Kc = ou()), (i.opts.cid = u) || !e)) {
          var g = kc(K, u);
          if (v) {
            var m = fu(i),
              y = Ta.getAll(),
              _ = pu(K, u, null, n, s),
              w = [_];
            d && t && w.unshift(t);
            var b = mu(m, w, y, r);
            g && Sc(u, m, _),
              this.send(b, {
                nm: K,
                cbkey: o,
              }),
              zc++,
              f || Qc++;
          } else {
            var x = lu({
                isQuickReport: g,
                shouldCoverCid: !0,
                needCachePD: be.nativeAutoPD,
              }),
              k = [
                gu.call(i, K, u, null, n, s, {
                  fromWA: e,
                }),
              ];
            d && t && k.push(t);
            var S = (Sn.isStr(r.category) && r.category) || p[Ac];
            Ha(
              su(S),
              Ic,
              k,
              function (t, e) {
                t ? (Le(vt), ur(o, Nc), i.pageView(n, r), ta(location.href, "lx-knb-setEvs-pv-error", L(t), 2)) : (zc++, f || Qc++, ur(o, Tc));
              },
              {
                nativeOptions: x,
              }
            );
          }
          (i.currentEvs = {
            cid: u,
            req_id: iu(),
            refer_cid: uc(),
            refer_req_id: fc(),
          }),
            (i._ptpvs = f ? 6 : W),
            Un();
        }
      }
    }),
    (Yc.pageDisappear = function (n, r) {
      if (!Or && 0 !== zc) {
        r = On({}, r);
        var i = this,
          t = r.cid || i.opts.cid,
          e = r.shouldStore;
        Ne(p);
        var a = Vn();
        if (((n = On(a, n)), cc(t), sc(Kc), vt === Pe())) {
          var o = fu(i),
            c = pu(X, t, null, n, r.isAuto),
            u = mu(o, Vc.concat(c), Ta.getAll(), r);
          if (((Vc = []), vr && e && ki.nt)) {
            tr() && (be.inWXMP && Sn.isObj(u[k]) && u[k][b] ? (u[k][b] = nr()) : (u[b] = nr()));
            var s = au() || [];
            jn.isArray(s) ? ki.set(I, s.concat(u)) : ki.set(I, [u]);
          } else i.send(u);
        } else {
          var f = this.env,
            l = lu(),
            d = [gu.call(i, X, t, null, n)],
            v = (Sn.isStr(r.category) && r.category) || f[Ac];
          Ha(
            su(v),
            Ic,
            d,
            function (t, e) {
              t && (Le(vt), i.pageDisappear(n, r));
            },
            {
              nativeOptions: l,
            }
          );
        }
        Ze(), ur(oe);
      }
    }),
    (Yc.systemCheck = function (n, r, i) {
      if (!Or) {
        i = On({}, i);
        var a = this,
          t = i.cid || a.opts.cid,
          e = !!i.isLXLog;
        if (vt === Pe()) {
          var o = fu(a),
            c = mu(o, [pu(Q, t, n, r)], Ta.getAll(), i);
          e && (o.category = "others"), this.send(c, i);
        } else {
          var u = a.env,
            s = lu(),
            f = [gu.call(a, Q, t, n, r)],
            l = (Sn.isStr(i.category) && i.category) || u[Ac];
          e && (l = "others"),
            Ha(
              su(l),
              Ic,
              f,
              function (t, e) {
                t && (Le(vt), a.systemCheck(n, r, i));
              },
              {
                nativeOptions: s,
              }
            );
        }
      }
    }),
    (Yc.moduleView = function (t, e, n) {
      if (!Or) {
        var r = (n = On({}, n)).cid || this.opts.cid;
        (n.mvDelay = this.opts.mvDelay || n.delay), ru.call(this, z, r, t, e, n);
      }
    }),
    (Yc.moduleViewList = function (t, e, n) {
      if (!Or) {
        var r = (n = On({}, n)).cid || this.opts.cid;
        n.mvDelay = this.opts.mvDelay || n.delay;
        var i = Se("MVL");
        Pe() !== dt || i ? ru.call(this, G, r, t, e, n) : ru.call(this, z, r, t, e, n);
      }
    }),
    (Yc.moduleClick = function (t, e, n) {
      if (!Or) {
        var r = (n = On({}, n)).cid || this.opts.cid;
        n && n.isLeave && Ne(p), (n.currentPageInfo = n.withPageInfo && Sn.isObj(this._cpi) ? this._cpi : cn), ru.call(this, $, r, t, e, n);
      }
    }),
    (Yc.moduleEdit = function (t, e, n) {
      if (!Or) {
        var r = (n = On({}, n)).cid || this.opts.cid;
        ru.call(this, H, r, t, e, n);
      }
    }),
    (Yc.order = function (n, r, i) {
      if (!Or) {
        i = On({}, i);
        var a = this,
          o = Hc(i.callback, i.callbackTimeout),
          t = i.cid || a.opts.cid;
        Kn(0, r);
        var e = kc(Z, t, n);
        if (vt === Pe()) {
          var c = fu(this),
            u = pu(Z, t, n, r),
            s = [u],
            f = Ta.getAll(),
            l = mu(c, s, f, i);
          e && Sc(t, c, u),
            this.send(l, {
              cbkey: o,
              nodelay: !0,
            });
        } else {
          var d = this.env,
            v = lu({
              isQuickReport: e,
            }),
            p = [gu.call(a, Z, t, n, r)],
            h = (Sn.isStr(i.category) && i.category) || d[Ac];
          Ha(
            su(h),
            Ic,
            p,
            function (t, e) {
              t ? (Le(vt), ur(o, Nc), a.order(n, r, i)) : ur(o, Tc);
            },
            {
              nativeOptions: v,
            }
          );
        }
      }
    }),
    (Yc.pay = function (n, r, i) {
      if (!Or) {
        i = On({}, i);
        var a = this,
          o = Hc(i.callback, i.callbackTimeout),
          t = i.cid || a.opts.cid;
        Kn(0, r);
        var e = kc(Y, t, n);
        if (vt === Pe()) {
          var c = fu(a),
            u = pu(Y, t, n, r),
            s = [u],
            f = Ta.getAll(),
            l = mu(c, s, f, i);
          e && Sc(t, c, u),
            this.send(l, {
              nodelay: !0,
              cb: function (t, e, n) {
                Ta.clear(),
                  ur(o, {
                    code: t,
                    status: e,
                    type: n,
                  });
              },
            }),
            a.clearTag();
        } else {
          var d = this.env,
            v = lu({
              isQuickReport: e,
            }),
            p = [gu.call(a, Y, t, n, r)],
            h = (Sn.isStr(i.category) && i.category) || d[Ac];
          Ha(
            su(h),
            Ic,
            p,
            function (t, e) {
              t ? (Le(vt), ur(o, Nc), a.pay(n, r, i)) : ur(o, Tc);
            },
            {
              nativeOptions: v,
            }
          );
        }
      }
    }),
    (Yc.tag = function (n, t, e, i) {
      var r = void 0,
        a = void 0,
        o = this.env,
        c = arguments,
        u = [],
        s = function (t) {
          if (!Sn.isObj(t)) return t;
          for (var e = t, n = 0, r = u.length; n < r; n++) {
            if (!e) return e;
            e = e[u[n]];
          }
          return e;
        },
        f = function () {
          jn.each(c, function (t) {
            if (!Sn.isStr(t)) return !1;
            u.push(t);
          });
        },
        l = function (t, e, n) {
          var r = {};
          (r[t] = e),
            (a = su(o[Ac])),
            Ha(a, "setTag", r, function (t, e) {
              i && (n && f(), i(t, s(e), !0));
            });
        },
        d = function (t) {
          var e = Ta.getAll();
          t || f(), i && i(0, s(e), !1);
        };
      if (
        (jn.each(c, function (t) {
          Sn.isFunc(t) && (i = t);
        }),
        Sn.isObj(n))
      ) {
        var v = this;
        jn.each(n, function (t, e) {
          v.tag(e, t);
        });
      } else
        Sn.isStr(n) && Sn.isObj(t)
          ? vt !== Pe()
            ? l(n, (r = t), !0)
            : (Tn(t, function (t, e) {
                Ta.set(n, e, t);
              }),
              d(!0))
          : (Sn.isObj(e) || Sn.isStr(e)) &&
            (function (t) {
              if (!Sn.isStr(t) && !t.length) return !1;
              return !0;
            })(n) &&
            Sn.isStr(t)
          ? vt !== Pe()
            ? (((r = {})[t] = e), l(n, r, !0))
            : (Ta.set(n, t, e), d(!0))
          : Sn.isFunc(n) || Sn.isFunc(t) || (Sn.isStr(n) && Sn.isStr(t) && Sn.isFunc(e))
          ? vt !== Pe()
            ? (f(),
              (a = su(o[Ac])),
              Ha(a, "getTag", {}, function (t, e) {
                i && i(t, s(e), !0);
              }))
            : d()
          : i && i(-1);
    }),
    (Yc.clearTag = function (t, e, n) {
      var r = 0;
      vt === Pe() ? (Sn.isFunc(t) && ((n = t), (t = cn)), Ta.clear(t, e), n && n(0)) : (r = -1), n && n(r);
    }),
    (Yc.sfrom = function (r) {
      var i = void 0,
        t = void 0,
        e = this.env;
      vt !== Pe()
        ? ((t = su(e[Ac])),
          Ha(t, "getSFrom", {}, function (t, e) {
            if (e) {
              var n = e.data ? e.data : e;
              (i = Sn.isStr(n) ? JSON.parse(n) : n), r(t, i);
            }
          }))
        : r(1, []);
    }),
    (Yc.send = function (t, r) {
      var e = [];
      (r = On(
        {
          cb: function (t, e, n) {
            r.cbkey &&
              ur(r.cbkey, {
                code: t,
                status: e,
                type: n,
              });
          },
        },
        r
      )),
        Sn.run(t, function (t) {
          tr() && (be.inWXMP && Sn.isObj(t[k]) && t[k][b] ? (t[k][b] = nr()) : (t[b] = nr())), e.push(t);
        });
      var n = au(!0);
      n && jn.isArray(n) && (e = n.concat(e)),
        (("data_sdk_saaspay" === (e[0] && e[0][Ac]) && "menuorder-new-rms-h5" === tn.__appName__) || Lc) && (r.useBeacon = !0),
        r.nodelay ? oa(e, r) : oa(e, r);
    }),
    (Yc.getAll = function () {
      return Jc;
    });
  var bu = wu.prototype;
  (bu.create = function (t, e) {
    var n = On({}, this.env);
    n = On(n, {
      category: t,
    });
    var r = On(
        {
          isDefault: !1,
        },
        this.opts
      ),
      i = new Zc((r = On(r, e || {})), n);
    return this._t.push(i), e.isDefault && (this._dt = i), i;
  }),
    (bu.config = function (t, e) {
      na();
      try {
        if ("isDev" === t && be._lockSDKENV) return;
        return cn !== t && (be[t] = e), "cid" === t && In(e) && (this.opts.cid = e), be[t];
      } catch (t) {
        ta(location.href, "lx-api-config", t.stack || t.message, 0);
      }
    }),
    (bu._initPV = function (t, e) {
      _u(this, this.config("pageValLab"), (t = On(t, this.config("pageEnv"))), {
        isauto: 6,
        cid: e,
        isAutoInit: !0,
      });
    }),
    (bu.pageView = function (t, e, n) {
      na(), Or || _u(this, t, e, n);
    }),
    (bu.moduleView = function (t, e, n) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.moduleView(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-moduleView", t.stack || t.message, 0);
      }
    }),
    (bu.moduleViewList = function (t, e, n) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.moduleViewList(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-moduleViewList", t.stack || t.message, 0);
      }
    }),
    (bu.systemCheck = function (t, e, n) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.systemCheck(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-systemCheck", t.stack || t.message, 0);
      }
    }),
    (bu.moduleClick = function (t, e, n) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.moduleClick(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-moduleClick", t.stack || t.message, 0);
      }
    }),
    (bu.moduleEdit = function (t, e, n) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.moduleEdit(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-moduleEdit", t.stack || t.message, 0);
      }
    }),
    (bu.order = function (t, e, n, r) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.order(t, yu(n, e), r);
      } catch (t) {
        ta(location.href, "lx-api-order", t.stack || t.message, 0);
      }
    }),
    (bu.pay = function (t, e, n, r) {
      na();
      try {
        if (Or) return;
        if (!t || !Sn.isStr(t)) return;
        this._dt.pay(t, yu(n, e), r);
      } catch (t) {
        ta(location.href, "lx-api-pay", t.stack || t.message, 0);
      }
    }),
    (bu.pageDisappear = function (t, e) {
      na();
      try {
        if (Or) return;
        this._dt.pageDisappear(t, e);
      } catch (t) {
        ta(location.href, "lx-api-pageDisappear", t.stack || t.message, 0);
      }
    }),
    (bu.tag = function (t, e, n, r) {
      na();
      try {
        this._dt.tag(t, e, n, r);
      } catch (t) {
        ta(location.href, "lx-api-tag", t.stack || t.message, 0);
      }
    }),
    (bu.getBase64WebTag = function (t, e) {
      na();
      try {
        var n = (e = e || {}).full,
          r = On(!0, {}, Ta.getAll(!n)),
          i = Rn(JSON.stringify(r));
        (i = i.replace(/\+/g, "*").replace(/\//, "_").replace(/=/g, ".")), Sn.isFunc(t) && t(i);
      } catch (t) {
        ta(location.href, "lx-api-getBase64WebTag", t.stack || t.message, 0);
      }
    }),
    (bu.sfrom = function (t) {
      this._dt.sfrom(t);
    }),
    (bu.clearTag = function (t, e, n) {
      na();
      try {
        this._dt.clearTag(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-clearTag", t.stack || t.message, 0);
      }
    }),
    (bu.setGeoLocation = function (t, e) {
      if ((na(), null !== t)) {
        if (xn(t) && xn(e)) (e = e.toString()), (t = t.toString());
        else if (!/^\d+\.\d+$/.test(t) || !/^\d+\.\d+$/.test(e)) return;
        be.geo = {
          lat: e,
          lng: t,
        };
      } else be.geo = null;
    }),
    (bu.getAll = function (t) {
      t && t(this._t);
    }),
    (bu.getTracker = function (e, t) {
      var n = jn.find(this._t, function (t) {
        return t.env.category === e;
      });
      t && t(n);
    }),
    (bu.get = function (t, e) {
      na(), this._dt.get(t, e);
    }),
    (bu.getNative = function (n, r) {
      na();
      try {
        var i = this;
        pr
          ? Wo(be.c, cn, {
              origin: !0,
            }).then(
              function (t) {
                var e = In(n) ? t[n] : t;
                r(e, i._dt);
              },
              function () {
                r();
              }
            )
          : r();
      } catch (t) {
        ta(location.href, "lx-api-getNative", t.stack || t.message, 0);
      }
    }),
    (bu.set = function (t, e, n) {
      na();
      try {
        this._dt.set(t, e, n);
      } catch (t) {
        ta(location.href, "lx-api-common-set", t.stack || t.message, 0);
      }
    }),
    (bu._setRequestID = function (t) {
      Xc = t;
    }),
    (bu._setNativeEvsData = function (t, e) {
      var n;
      (n = e), ($c[t] = n);
    });
  var xu = void 0,
    ku = !0,
    Su = function () {
      var e;
      if (!!!be.onWebviewAppearAutoPV)
        return (
          (e = be.c),
          void Pu().getTracker(e, function (t) {
            if (t && t.currentEvs) {
              var n = On(
                {
                  refer_cid: uc(),
                  refer_req_id: fc(),
                },
                t.currentEvs
              );
              jn.each(n, function (t, e) {
                (n["web_" + e] = t), delete n[e];
              }),
                Ha(e, "setWebPageData", n, function (t, e) {});
            }
          })
        );
      Un(),
        Lu(),
        xu.pageView(cn, cn, {
          fromWA: !0,
          withlab: !!be.positiveLab,
        }),
        Ne(0);
    },
    Ou = function () {
      !!be.onWebviewAppearAutoPV && (qe() || (Ne(p), xu.pageDisappear({})));
    },
    Au = function () {
      (ku = !0), Su();
    },
    Iu = function () {
      (ku = !1), Ou(), Ze();
    },
    ju = function () {
      ku && Su();
    },
    Cu = function () {
      ku && (Ou(), Ze());
    },
    Tu = void 0,
    Nu = !!/\d+\.\d+\.\d+/.test(Sr) && 0 <= zn(Sr, "11.3.0");
  function qu(t, e) {
    Sn.isStr(t) &&
      ((e = (Sn.isFunc(e) && e) || function () {}),
      "on" + t in tn || "KNB:" + t in tn
        ? Sn.on(window, t, function (t) {
            e(t);
          })
        : (Tu = window.KNB) &&
          Sn.isFunc(Tu.subscribe) &&
          Tu.subscribe({
            action: t,
            handle: function () {
              e();
            },
            success: function () {},
            fail: function (t) {},
          }));
  }
  var Eu = {
      hook: function () {
        try {
          qu("appear", Au), qu("disappear", Iu), Nu && (qu("foreground", ju), qu("background", Cu));
        } catch (t) {
          ta(location.href, "lx-knb-hook-error", t.stack || t.message, 2, 1);
        }
        xu = Pu();
      },
    },
    Du = ["setGeoLocation"].join("|"),
    Mu = [],
    Bu = pt,
    Fu = void 0,
    Ru = void 0;
  function Wu(t, e) {
    return {
      cb: t,
      cmd: e,
    };
  }
  function Pu() {
    return Fu;
  }
  function Lu() {
    var e, r;
    Ue(!1),
      ((e = Ru),
      (r = {
        none: !0,
      }),
      new Qr(function (n) {
        try {
          var t = zn(vo, "4.12.0");
          !vo || !xn(t) || t < 0
            ? n(r)
            : (e && dr) || Br()
            ? Ha(e, "getReqId", {}, function (t, e) {
                n(t ? r : e);
              })
            : n(r);
        } catch (t) {
          n(r), ta(location.href, "lx-knb-getReqId-error", t.stack || t.message, 2, 1);
        }
      })).then(function (t) {
        var e = t || {},
          n = e.val_ref,
          r = e.req_id,
          i = e.refer_req_id,
          a = !!(r || n || i);
        r && Fu._setRequestID(r), n && Fu._setNativeEvsData("val_ref", n), i && Fu._setNativeEvsData("refer_req_id", i), Ue(a);
      });
  }
  function Ju(t, e) {
    if (gt === Bu) t && t(Fu);
    else if (ht === Bu) t && Mu.push(Wu(t, e));
    else {
      Sn.now();
      Mu = Mu.concat(Wu(t, e));
      var n = nn.getElementsByTagName("meta"),
        o = Wn(n, "lx:cid") || be.cid;
      if (!(Ru = be.c = Wn(n, "lx:category"))) return void (Bu = pt);
      Bu = ht;
      var c = Wn(n, "lx:mvDelay");
      c = isNaN(c) ? 0 : parseInt(c, 10);
      var u = "off" !== Wn(n, "lx:autopv");
      (be.autoPV = u),
        T(Lu, 1e3),
        Qr.all([$o(Ru)])
          .then(function (t) {
            var e,
              r = t[0],
              n = r.appnm,
              i = Ae();
            !Sn.isStr(n) || nn.domain,
              (Fu = new wu(r, {
                cid: o,
                isDefault: !0,
                mvDelay: c,
              })),
              Ru &&
                Fu.create(Ru, {
                  isDefault: !0,
                }),
              (r = On(!0, Fu._dt.env, r)),
              (Fu._dt.env = r),
              Sn.now();
            try {
              var a = [];
              jn.each(Mu, function (t) {
                var e = t.cb,
                  n = t.cmd;
                "config" === n || "set" === n || -1 < Du.indexOf(n) ? e(Fu, r) : a.push(t);
              }),
                vr && ((e = r.msid), rc || (rc = new nc(e))),
                i && ki.set(zt, i),
                u && Ru && o && o && Fu._initPV(r, o),
                Eu.hook(function () {}),
                jn.each(a, function (t) {
                  t && t.cb && t.cb(Fu, r);
                });
            } catch (t) {}
          })
          .then(
            function () {
              (Bu = gt), yi.check();
            },
            function (t) {
              throw ((Bu = gt), t);
            }
          );
    }
  }
  var Uu = [
      ["click", ut],
      ["tap", ut],
      ["view", "moduleView"],
      ["return", "moduleEdit"],
      ["order", st],
      ["pay", "pay"],
    ],
    Vu = jn.reduce(
      Uu,
      function (t, e) {
        return (t[e[0]] = e[1]), t;
      },
      {}
    ),
    Ku = [
      ["mpt", ot],
      ["report", "pageDisappear"],
    ],
    Xu = jn.reduce(
      Ku,
      function (t, e) {
        return (t[e[0]] = e[1]), t;
      },
      {}
    ),
    $u = jn.reduce(
      ["config", "event", "send", "use"],
      function (t, e) {
        return (t[e] = !0), t;
      },
      {}
    ),
    Qu = function (t, e) {
      var n = nn.getElementsByTagName("head")[0],
        r = nn.createElement("meta");
      r.setAttribute("name", t), r.setAttribute("from", "v3api"), r.setAttribute("content", e), n.appendChild(r);
    },
    zu = function (n, t) {
      return (
        (n = n || {}),
        Tn(t, function (t, e) {
          1 ===
          {
            act: 1,
            cid: 1,
            val: 1,
            lab: 1,
            bid: 1,
          }[e]
            ? (n["val_" + e] = t)
            : (n[e] = t);
        }),
        n
      );
    },
    Gu = function (t, e, n) {
      (t &&
        !An(t) &&
        (t = {
          custom: {
            _lab: t,
          },
        }),
      !t && n && (t = {}),
      n) && ((t[Ut] = t[Ut] || {}), ((t[Ut] || {})[e] = n));
      return t;
    },
    Hu = function (t, e, n) {
      return (
        t &&
          !An(t) &&
          (t = {
            custom: {
              _lab: t,
            },
          }),
        t && (t[e] = n),
        t
      );
    },
    Zu = function (t, e) {
      var n = t[Pt],
        r = t[Jt];
      if ((n && n === r && (r = On(!0, {}, r)), e && (r || n))) {
        var i = n;
        (n = r || {}), i && (n = Gu(n || {}, "_lab", i));
      } else if (!e && (r || n)) {
        if (
          (In(r) &&
            (r = {
              analyse_val: r,
            }),
          In(n))
        )
          n = {
            val_lab: n,
          };
        r && (n = Hu(n || {}, "page", r));
      }
      return (
        cn !== t[et] && (n = Gu(n || {}, "_act", t[et])),
        cn !== t[tt] && (n = Gu(n || {}, "_et", t[tt])),
        cn !== t[rt] && (n = Hu(n || {}, rt, t[rt])),
        cn !== t[it] && (n = Gu(n || {}, "_el_id", t[it])),
        n
      );
    };
  function Yu(t) {
    var e,
      n,
      r,
      i = ((n = (e = t).split(".")), (r = void 0), 2 === n.length && ((e = n[1]), (r = n[0])), [e, r]),
      a = void 0;
    return i[1] && (a = i[1]), [(t = i[0]), a];
  }
  var ts = function e(n, t) {
      var r = Yu(n);
      n = r[0];
      var i = r[1],
        a = t[0],
        o = t[1];
      if (jn.isArray(a))
        return Nn(a, function (t) {
          return e(i ? i + "." + n : n, [t, o]);
        });
      var c,
        u,
        s = (a.nm || "mge").toLowerCase();
      (a.nm = s), (u = (c = a).val) && (zu(c, u), delete c.val), (a = c);
      var f = "mge" === s;
      if ("mpt" === s)
        return function (t) {
          t = zu(t, t.val);
          var e = Zu(t, !0);
          return [ot, e, null, t[nt]];
        }.apply(null, t);
      var l,
        d,
        v = st === s,
        p = "pay" === s,
        h = a[tt],
        g = a[et],
        m = Zu(a, !1);
      v || p || h || !f || !g
        ? p || v
          ? (n = s)
          : ((d = h), (n = "mge" === (l = s) ? (d ? Vu[d] || ct : ut) : "mpt" === l || "report" === l ? Xu[l] : ct), f || (m = Gu(m || {}, "_nm", s)))
        : (n = ut);
      var y = a[nt];
      return y && ((o = o || {}).cid = y), i && Gu(m, "_logchannel", i), Gu((m = m || {}), "_api", "v3"), n === st || "pay" === n ? [n, a[Lt], m.order_id, m, o] : [n, a[Lt], m, o];
    },
    es = function t() {
      if (!t.f) {
        Qu("lx:autopv", "off"), (t.f = !0);
      }
    },
    ns = function (t) {
      if (!t || !t.length) return t;
      try {
        var e = t[0];
        (function (t) {
          if (Sn.isFunc(t)) return !1;
          var e = t.indexOf(".");
          return 0 < e && (t = t.substr(e + 1)), !!$u[t];
        })(e) &&
          ((t = jn.slice(t, 1)),
          rs(e)
            ? (Yn(3), es(), (t = ts(e, t)))
            : is(e)
            ? (Yn(3),
              es(),
              (t = (function (t, e) {
                var n = Yu(t)[1];
                t = ot;
                var r = e[1],
                  i = e[2],
                  a = n
                    ? {
                        custom: {
                          _logchannel: n,
                        },
                      }
                    : cn,
                  o = {};
                if (In(r)) An(i) ? (a = i) : In(i) && (a = Gu({}, "analyse_val", i));
                else if (An(r)) {
                  (i = (o = zu(o, r))[Jt]), In(i) && (i = Gu({}, "analyse_val", i)), (a = i);
                  var c = o[Pt];
                  c && Gu(a, "_lab", c), (r = o[nt]);
                }
                var u = void 0;
                return r && ((u = {}).cid = r), [t, (a = Gu(a, "_api", "v3")), cn, u];
              })(e, t)))
            : as(e)
            ? (Yn(3),
              es(),
              (t = (function (t, e) {
                var n = e[0],
                  r = e[1];
                if ((n && ((n = n.replace(/^data_sdk_/i, "")), Qu("lx:category", n)), An(r))) return ["set", r];
              })(0, t)))
            : os(e, t[0])
            ? (es(),
              (t = (function (t, e, n) {
                if ("appnm" !== e || !In(n)) return "cid" === e && In(n) && Qu("lx:cid", n), [t, e, n];
                Qu("lx:appnm", n);
              })(e, t[0], t[1])))
            : t.unshift(e));
      } catch (t) {}
      return t;
    },
    rs = function (t) {
      if (Sn.isFunc(t)) return !1;
      var e = t.indexOf(".");
      return 0 < e && (t = t.substr(e + 1)), "event" === t;
    },
    is = function (t) {
      var e = t.indexOf(".");
      return 0 < e && (t = t.substr(e + 1)), "send" === t;
    },
    as = function (t) {
      return "use" === t;
    },
    os = function (t, e) {
      var n = !1;
      return ("cid" !== e && "appnm" !== e) || (Yn(3), (n = !0)), "config" === t && n;
    },
    cs = void 0,
    us = void 0;
  function ss(t, e, n, r, i) {
    if (Sn.isFunc(e)) e.call(t, t, r, i);
    else if (!i && Sn.isStr(e)) {
      if (Sn.isFunc(t[e])) return t[e].apply(t, n);
      if ("onLoad" === e)
        try {
          n[0](On(!0, {}, r));
        } catch (t) {}
    }
  }
  function fs() {
    if (!us) {
      us = !0;
      var r = void 0;
      mr &&
        Sn.on(nn, "mouseup", function (t) {
          var e = t.target || t.srcElement,
            n = e.tagName + e.href;
          (n = n.toLocaleLowerCase()), 1 === e.nodeType && /^ajavascript:/i.test(n) && (r = new Date());
        });
      var t = tn.onbeforeunload;
      vr && hr ? tn.addEventListener("pagehide", Gn(!1, mr, r, void 0, ls, cn, qe)) : (tn.onbeforeunload = Gn(!1, mr, r, void 0, ls, t, qe));
    }
  }
  function ls(r) {
    try {
      var t = document.getElementById("__lxsdk_devltool_message_node");
      if (t) {
        var e = new CustomEvent("lxsdk", {
          detail: {
            args: JSON.stringify(arguments),
          },
        });
        t.dispatchEvent(e);
      }
    } catch (t) {}
    var n = arguments;
    if (n.length) {
      var i = jn.slice(n, 1, n.length);
      try {
        cs
          ? ss(cs, r, i, cs._dt ? cs._dt.env : null)
          : Ju(function (t, e, n) {
              ss((cs = t), r, i, e, n), fs();
            }, r);
      } catch (t) {
        try {
          var a = t.stack.split(/\n\s*at\s/m)[1].replace(/^.*\(([^)]+)\).*$/, "$1");
          if (!/\/(lx|analytics)\.js/.test(a)) return;
        } catch (t) {
        } finally {
          ta(location.href, "lx-api-error", t.message + "\n" + t.stack, 0);
        }
      }
    }
  }
  window._lxsdk_isDOMReady ||
    ((window._lxsdk_isDOMReady = !0),
    (function () {
      ra();
      var s = !0,
        f = !1,
        l = (function () {
          var t = Pn();
          t &&
            (t.q.push = function e(t) {
              try {
                var n,
                  r = (n = ns(t)) ? n[0] : "";
                if (jn.isArray(r))
                  return void Tn(n, function (t) {
                    e(t);
                  });
                "start" === r ? ((s = !0), f || d(l)) : !1 === s ? n && l.push(n) : ls.apply(cn, n);
              } catch (t) {
                ta(location.href, "lx-func-init-error", t.stack || t.message, 2);
              }
            });
          for (var e = void 0, n = void 0, r = [], i = [], a = [], o = t && jn.isArray(t.q) ? t.q : [], c = 0, u = o.length; c < u; c++)
            "config" === (n = o[c][0]) ? i.push(o[c]) : e || "use" !== n ? a.push(o[c]) : (r.push(o[c]), (e = !0));
          return (o = i.concat(r.concat(a)));
        })();
      function d(t) {
        f ||
          (t &&
            jn.each(t, function (t) {
              var e,
                n = (e = ns(t)) ? e[0] : "";
              jn.isArray(n)
                ? Tn(e, function (t) {
                    ls.apply(cn, t);
                  })
                : (n ? ls.apply(cn, e) : t && t && t[0],
                  (function () {
                    if (!(0 <= sr.indexOf("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")) && Yi(1e3)) {
                      var t = {
                          kvs: {
                            cacheNum: [1],
                          },
                          tags: {},
                          ts: parseInt(new Date().getTime() / 1e3),
                        },
                        e = la("https://catfront.dianping.com/api/metric?p=com.sankuai.analytics.web4new&v=1", Ht, "application/x-www-form-urlencoded");
                      e && ((e.onerror = e.onreadystatechange = function () {}), e.send("data=" + encodeURIComponent(Xr.stringify(t))));
                    }
                  })());
            }),
          ls(function () {
            fs();
          }),
          (f = !0));
      }
      if (0 === l.length)
        Ju(function (t) {
          (cs = t), fs();
        });
      else
        try {
          (l = Nn(l, function (t) {
            var e;
            if ("config" === ((e = ns(t)) ? e[0] : "")) {
              var n = e[1],
                r = e[2];
              "autoStart" === n && !1 === r && (s = !1);
            }
            return e;
          })),
            s && d(l);
        } catch (t) {}
      !(function () {
        if (!(0 <= on.indexOf("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")) && Yi(1e5)) {
          var t = {
              kvs: {
                initTimes: [1],
              },
              tags: {},
              ts: parseInt(new Date().getTime() / 1e3),
            },
            e = la("https://catfront.dianping.com/api/metric?p=com.sankuai.analytics.web4new&v=1", Ht, "application/x-www-form-urlencoded");
          e && ((e.onerror = e.onreadystatechange = function () {}), e.send("data=" + encodeURIComponent(Xr.stringify(t))));
        }
      })();
    })());
})();
