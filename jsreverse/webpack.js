var window = global;
var laohe;
(function (A) {
  function e(e) {
    for (var n, r, i = e[0], g = e[1], o = e[2], c = 0, C = []; c < i.length; c++) (r = i[c]), Object.prototype.hasOwnProperty.call(a, r) && a[r] && C.push(a[r][0]), (a[r] = 0);
    for (n in g) Object.prototype.hasOwnProperty.call(g, n) && (A[n] = g[n]);
    I && I(e);
    while (C.length) C.shift()();
    return s.push.apply(s, o || []), t();
  }
  function t() {
    for (var A, e = 0; e < s.length; e++) {
      for (var t = s[e], n = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== a[i] && (n = !1);
      }
      n && (s.splice(e--, 1), (A = g((g.s = t[0]))));
    }
    return A;
  }
  var n = {},
    r = {
      index: 0,
    },
    a = {
      index: 0,
    },
    s = [];
  function i(A) {
    return g.p + "js/" + ({}[A] || A) + ".js";
  }
  //   加载器
  function g(e) {
    // 判断是否为字典格式，键调用值
    if (n[e]) return n[e].exports;
    var t = (n[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    // 列表 下标
    return A[e].call(t.exports, t, t.exports, g), (t.l = !0), t.exports;
  }
  (g.e = function (A) {
    var e = [],
      t = {
        "chunk-0086bb85": 1,
        "chunk-00e585b8": 1,
        "chunk-0541bca7": 1,
        "chunk-0bf6426b": 1,
        "chunk-0dde55f4": 1,
        "chunk-0e3bdbbe": 1,
        "chunk-154c0cd6": 1,
        "chunk-1d57ef98": 1,
        "chunk-1ea9c550": 1,
        "chunk-23ac1312": 1,
        "chunk-292fc281": 1,
        "chunk-33dc4c73": 1,
        "chunk-36ad665a": 1,
        "chunk-3a8e87b2": 1,
        "chunk-412027ab": 1,
        "chunk-422a0da3": 1,
        "chunk-564fa90c": 1,
        "chunk-5949a5f1": 1,
        "chunk-59b9b132": 1,
        "chunk-60174632": 1,
        "chunk-6038e544": 1,
        "chunk-669f1865": 1,
        "chunk-6dc29283": 1,
        "chunk-74d13824": 1,
        "chunk-80fc7ec2": 1,
        "chunk-84f3bc8a": 1,
        "chunk-90be71c6": 1,
        "chunk-b5765412": 1,
        "chunk-b686d13c": 1,
        "chunk-b8947556": 1,
        "chunk-c12273a8": 1,
        "chunk-f4935faa": 1,
        "chunk-fa29cb14": 1,
      };
    r[A]
      ? e.push(r[A])
      : 0 !== r[A] &&
        t[A] &&
        e.push(
          (r[A] = new Promise(function (e, t) {
            for (var n = "css/" + ({}[A] || A) + ".css", a = g.p + n, s = document.getElementsByTagName("link"), i = 0; i < s.length; i++) {
              var o = s[i],
                c = o.getAttribute("data-href") || o.getAttribute("href");
              if ("stylesheet" === o.rel && (c === n || c === a)) return e();
            }
            var C = document.getElementsByTagName("style");
            for (i = 0; i < C.length; i++) {
              (o = C[i]), (c = o.getAttribute("data-href"));
              if (c === n || c === a) return e();
            }
            var I = document.createElement("link");
            (I.rel = "stylesheet"),
              (I.type = "text/css"),
              (I.onload = e),
              (I.onerror = function (e) {
                var n = (e && e.target && e.target.src) || a,
                  s = new Error("Loading CSS chunk " + A + " failed.\n(" + n + ")");
                (s.code = "CSS_CHUNK_LOAD_FAILED"), (s.request = n), delete r[A], I.parentNode.removeChild(I), t(s);
              }),
              (I.href = a);
            var E = document.getElementsByTagName("head")[0];
            E.appendChild(I);
          }).then(function () {
            r[A] = 0;
          }))
        );
    var n = a[A];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var s = new Promise(function (e, t) {
          n = a[A] = [e, t];
        });
        e.push((n[2] = s));
        var o,
          c = document.createElement("script");
        (c.charset = "utf-8"), (c.timeout = 120), g.nc && c.setAttribute("nonce", g.nc), (c.src = i(A));
        var C = new Error();
        o = function (e) {
          (c.onerror = c.onload = null), clearTimeout(I);
          var t = a[A];
          if (0 !== t) {
            if (t) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src;
              (C.message = "Loading chunk " + A + " failed.\n(" + n + ": " + r + ")"), (C.name = "ChunkLoadError"), (C.type = n), (C.request = r), t[1](C);
            }
            a[A] = void 0;
          }
        };
        var I = setTimeout(function () {
          o({
            type: "timeout",
            target: c,
          });
        }, 12e4);
        (c.onerror = c.onload = o), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (g.m = A),
    (g.c = n),
    (g.d = function (A, e, t) {
      g.o(A, e) ||
        Object.defineProperty(A, e, {
          enumerable: !0,
          get: t,
        });
    }),
    (g.r = function (A) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(A, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(A, "__esModule", {
          value: !0,
        });
    }),
    (g.t = function (A, e) {
      if ((1 & e && (A = g(A)), 8 & e)) return A;
      if (4 & e && "object" === typeof A && A && A.__esModule) return A;
      var t = Object.create(null);
      if (
        (g.r(t),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          value: A,
        }),
        2 & e && "string" != typeof A)
      )
        for (var n in A)
          g.d(
            t,
            n,
            function (e) {
              return A[e];
            }.bind(null, n)
          );
      return t;
    }),
    (g.n = function (A) {
      var e =
        A && A.__esModule
          ? function () {
              return A["default"];
            }
          : function () {
              return A;
            };
      return g.d(e, "a", e), e;
    }),
    (g.o = function (A, e) {
      return Object.prototype.hasOwnProperty.call(A, e);
    }),
    (g.p = "/common/gikam/"),
    (g.oe = function (A) {
      throw (console.error(A), A);
    });
  // 单文件webpack引用多文件webpack
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var C = 0; C < o.length; C++) e(o[C]);
  var I = c;
  s.push([4, "chunk-vendors"]), t();
  laohe = g;
})(
  // 列表形式
  [
    function () {
      console.log("shuai");
    },
  ]
  // 字典形式

  //   {
  //     huang: function () {
  //       console.log("shuai");
  //     },
  //   }
);
console.log(laohe);
