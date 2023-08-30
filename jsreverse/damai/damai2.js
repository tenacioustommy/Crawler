const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM("<!DOCTYPE html><p>Hello world</p>");
window = dom.window;
document = window.document;

function main(token, data) {
  //   var time = new Date().getTime();
  var time = "1693404032159";
  var appkey = "12574478";
  var e = token + "&" + time + "&" + appkey + "&" + data;

  function t(e, t) {
    return (e << t) | (e >>> (32 - t));
  }
  function n(e, t) {
    var n, r, o, i, a;
    return (
      (o = 2147483648 & e),
      (i = 2147483648 & t),
      (a = (1073741823 & e) + (1073741823 & t)),
      (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? (1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i) : a ^ o ^ i
    );
  }
  function r(e, r, o, i, a, u, c) {
    return n(
      t(
        (e = n(
          e,
          n(
            n(
              (function (e, t, n) {
                return (e & t) | (~e & n);
              })(r, o, i),
              a
            ),
            c
          )
        )),
        u
      ),
      r
    );
  }
  function o(e, r, o, i, a, u, c) {
    return n(
      t(
        (e = n(
          e,
          n(
            n(
              (function (e, t, n) {
                return (e & n) | (t & ~n);
              })(r, o, i),
              a
            ),
            c
          )
        )),
        u
      ),
      r
    );
  }
  function i(e, r, o, i, a, u, c) {
    return n(
      t(
        (e = n(
          e,
          n(
            n(
              (function (e, t, n) {
                return e ^ t ^ n;
              })(r, o, i),
              a
            ),
            c
          )
        )),
        u
      ),
      r
    );
  }
  function a(e, r, o, i, a, u, c) {
    return n(
      t(
        (e = n(
          e,
          n(
            n(
              (function (e, t, n) {
                return t ^ (e | ~n);
              })(r, o, i),
              a
            ),
            c
          )
        )),
        u
      ),
      r
    );
  }
  function u(e) {
    var t,
      n = "",
      r = "";
    for (t = 0; 3 >= t; t++) n += (r = "0" + ((e >>> (8 * t)) & 255).toString(16)).substr(r.length - 2, 2);
    return n;
  }
  var c, s, l, f, d, p, h, m, v, g;
  for (
    g = (function (e) {
      for (var t, n = e.length, r = n + 8, o = 16 * ((r - (r % 64)) / 64 + 1), i = new Array(o - 1), a = 0, u = 0; n > u; )
        (a = (u % 4) * 8), (i[(t = (u - (u % 4)) / 4)] = i[t] | (e.charCodeAt(u) << a)), u++;
      return (a = (u % 4) * 8), (i[(t = (u - (u % 4)) / 4)] = i[t] | (128 << a)), (i[o - 2] = n << 3), (i[o - 1] = n >>> 29), i;
    })(
      (e = (function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          128 > r
            ? (t += String.fromCharCode(r))
            : r > 127 && 2048 > r
            ? ((t += String.fromCharCode((r >> 6) | 192)), (t += String.fromCharCode((63 & r) | 128)))
            : ((t += String.fromCharCode((r >> 12) | 224)), (t += String.fromCharCode(((r >> 6) & 63) | 128)), (t += String.fromCharCode((63 & r) | 128)));
        }
        return t;
      })(e))
    ),
      p = 1732584193,
      h = 4023233417,
      m = 2562383102,
      v = 271733878,
      c = 0;
    c < g.length;
    c += 16
  )
    (s = p),
      (l = h),
      (f = m),
      (d = v),
      (h = a(
        (h = a(
          (h = a(
            (h = a(
              (h = i(
                (h = i(
                  (h = i(
                    (h = i(
                      (h = o(
                        (h = o(
                          (h = o(
                            (h = o(
                              (h = r(
                                (h = r(
                                  (h = r(
                                    (h = r(
                                      h,
                                      (m = r(m, (v = r(v, (p = r(p, h, m, v, g[c + 0], 7, 3614090360)), h, m, g[c + 1], 12, 3905402710)), p, h, g[c + 2], 17, 606105819)),
                                      v,
                                      p,
                                      g[c + 3],
                                      22,
                                      3250441966
                                    )),
                                    (m = r(m, (v = r(v, (p = r(p, h, m, v, g[c + 4], 7, 4118548399)), h, m, g[c + 5], 12, 1200080426)), p, h, g[c + 6], 17, 2821735955)),
                                    v,
                                    p,
                                    g[c + 7],
                                    22,
                                    4249261313
                                  )),
                                  (m = r(m, (v = r(v, (p = r(p, h, m, v, g[c + 8], 7, 1770035416)), h, m, g[c + 9], 12, 2336552879)), p, h, g[c + 10], 17, 4294925233)),
                                  v,
                                  p,
                                  g[c + 11],
                                  22,
                                  2304563134
                                )),
                                (m = r(m, (v = r(v, (p = r(p, h, m, v, g[c + 12], 7, 1804603682)), h, m, g[c + 13], 12, 4254626195)), p, h, g[c + 14], 17, 2792965006)),
                                v,
                                p,
                                g[c + 15],
                                22,
                                1236535329
                              )),
                              (m = o(m, (v = o(v, (p = o(p, h, m, v, g[c + 1], 5, 4129170786)), h, m, g[c + 6], 9, 3225465664)), p, h, g[c + 11], 14, 643717713)),
                              v,
                              p,
                              g[c + 0],
                              20,
                              3921069994
                            )),
                            (m = o(m, (v = o(v, (p = o(p, h, m, v, g[c + 5], 5, 3593408605)), h, m, g[c + 10], 9, 38016083)), p, h, g[c + 15], 14, 3634488961)),
                            v,
                            p,
                            g[c + 4],
                            20,
                            3889429448
                          )),
                          (m = o(m, (v = o(v, (p = o(p, h, m, v, g[c + 9], 5, 568446438)), h, m, g[c + 14], 9, 3275163606)), p, h, g[c + 3], 14, 4107603335)),
                          v,
                          p,
                          g[c + 8],
                          20,
                          1163531501
                        )),
                        (m = o(m, (v = o(v, (p = o(p, h, m, v, g[c + 13], 5, 2850285829)), h, m, g[c + 2], 9, 4243563512)), p, h, g[c + 7], 14, 1735328473)),
                        v,
                        p,
                        g[c + 12],
                        20,
                        2368359562
                      )),
                      (m = i(m, (v = i(v, (p = i(p, h, m, v, g[c + 5], 4, 4294588738)), h, m, g[c + 8], 11, 2272392833)), p, h, g[c + 11], 16, 1839030562)),
                      v,
                      p,
                      g[c + 14],
                      23,
                      4259657740
                    )),
                    (m = i(m, (v = i(v, (p = i(p, h, m, v, g[c + 1], 4, 2763975236)), h, m, g[c + 4], 11, 1272893353)), p, h, g[c + 7], 16, 4139469664)),
                    v,
                    p,
                    g[c + 10],
                    23,
                    3200236656
                  )),
                  (m = i(m, (v = i(v, (p = i(p, h, m, v, g[c + 13], 4, 681279174)), h, m, g[c + 0], 11, 3936430074)), p, h, g[c + 3], 16, 3572445317)),
                  v,
                  p,
                  g[c + 6],
                  23,
                  76029189
                )),
                (m = i(m, (v = i(v, (p = i(p, h, m, v, g[c + 9], 4, 3654602809)), h, m, g[c + 12], 11, 3873151461)), p, h, g[c + 15], 16, 530742520)),
                v,
                p,
                g[c + 2],
                23,
                3299628645
              )),
              (m = a(m, (v = a(v, (p = a(p, h, m, v, g[c + 0], 6, 4096336452)), h, m, g[c + 7], 10, 1126891415)), p, h, g[c + 14], 15, 2878612391)),
              v,
              p,
              g[c + 5],
              21,
              4237533241
            )),
            (m = a(m, (v = a(v, (p = a(p, h, m, v, g[c + 12], 6, 1700485571)), h, m, g[c + 3], 10, 2399980690)), p, h, g[c + 10], 15, 4293915773)),
            v,
            p,
            g[c + 1],
            21,
            2240044497
          )),
          (m = a(m, (v = a(v, (p = a(p, h, m, v, g[c + 8], 6, 1873313359)), h, m, g[c + 15], 10, 4264355552)), p, h, g[c + 6], 15, 2734768916)),
          v,
          p,
          g[c + 13],
          21,
          1309151649
        )),
        (m = a(m, (v = a(v, (p = a(p, h, m, v, g[c + 4], 6, 4149444226)), h, m, g[c + 11], 10, 3174756917)), p, h, g[c + 2], 15, 718787259)),
        v,
        p,
        g[c + 9],
        21,
        3951481745
      )),
      (p = n(p, s)),
      (h = n(h, l)),
      (m = n(m, f)),
      (v = n(v, d));
  //   return (u(p) + u(h) + u(m) + u(v)).toLowerCase();
  return { sign: (u(p) + u(h) + u(m) + u(v)).toLowerCase(), t: time, requestStart: (time - 1).toString() };
}
// console.log(window.sasd);
// console.log(main("05590ea9c2dcf74fbfb6aa448196edea_1693406475577", "2asdasdcfasdavsdvasd"));
// )(a);
