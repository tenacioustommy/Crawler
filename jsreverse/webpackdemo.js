var asd;
(function (e) {
  function i(A) {
    console.log(A);
  }
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }

  asd = n;
})({
  key1: function () {
    console.log("key1");
  },
  key2: function () {
    console.log("key2");
  },
});

asd("key1");
