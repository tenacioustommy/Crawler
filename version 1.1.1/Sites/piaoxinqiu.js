// window = global;

const { y: r } = require("D:\\Computer Science\\Python3\\Crawler\\version 1.1.1\\Sites\\pxqindex.js");

var t = Object.defineProperty,
  e = (e, a, r) => (
    ((e, a, r) => {
      a in e
        ? t(e, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r,
          })
        : (e[a] = r);
    })(e, "symbol" != typeof a ? a + "" : a, r),
    r
  ),
  a = (t, e, a) =>
    new Promise((r, s) => {
      var n = (t) => {
          try {
            d(a.next(t));
          } catch (e) {
            s(e);
          }
        },
        o = (t) => {
          try {
            d(a.throw(t));
          } catch (e) {
            s(e);
          }
        },
        d = (t) => (t.done ? r(t.value) : Promise.resolve(t.value).then(n, o));
      d((a = a.apply(t, e)).next());
    });
const s = class {
  constructor(t) {
    e(this, "data"), (this.data = t);
  }
  setParamsToH5() {
    return a(this, null, function* () {
      const t = {
          scene: this.data,
          bizCode: "FHL_M",
        },
        e = yield r.setParamsToH5(t);
      return 200 === e.statusCode && e.data ? e.data.wxaCode : "";
    });
  }
  getParamsByCpId(t) {
    return a(this, null, function* () {
      const e = yield r.getParamsByCpId(t);
      return 200 === e.statusCode && e.data ? e.data : null;
    });
  }
};
window.getparam = s.prototype.setParamsToH5;
console.log(window.getparam());
