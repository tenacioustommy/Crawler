// python运行需要注释上
// var loader = require("./manifest");
window = global;

var E = loader("LJm1"),
  x = loader.n(E);
var it = (function () {
  function t(t) {
    (t = t || {}),
      (this.default_key_size = parseInt(t.default_key_size, 10) || 1024),
      (this.default_public_exponent = t.default_public_exponent || "010001"),
      (this.log = t.log || !1),
      (this.key = null);
  }
  return (
    (t.prototype.setKey = function (t) {
      this.log && this.key && console.warn("A key was already set, overriding existing."), (this.key = new nt(t));
    }),
    (t.prototype.setPrivateKey = function (t) {
      this.setKey(t);
    }),
    (t.prototype.setPublicKey = function (t) {
      this.setKey(t);
    }),
    (t.prototype.decrypt = function (t) {
      try {
        return this.getKey().decrypt(d(t));
      } catch (t) {
        return !1;
      }
    }),
    (t.prototype.encrypt = function (t) {
      try {
        return h(this.getKey().encrypt(t));
      } catch (t) {
        return !1;
      }
    }),
    (t.prototype.encryptLong = function (t) {
      try {
        for (
          var e = this.getKey().encryptLong(t) || "", n = this.getKey().decryptLong(e) || "", i = 0, r = /null$/g;
          r.test(n) && (i++, (e = this.getKey().encryptLong(t) || ""), (n = this.getKey().decryptLong(e) || ""), !(i > 10));

        );
        return e;
      } catch (t) {
        return !1;
      }
    }),
    (t.prototype.decryptLong = function (t) {
      try {
        return this.getKey().decryptLong(t);
      } catch (t) {
        return !1;
      }
    }),
    (t.prototype.sign = function (t, e, n) {
      try {
        return h(this.getKey().sign(t, e, n));
      } catch (t) {
        return !1;
      }
    }),
    (t.prototype.verify = function (t, e, n) {
      try {
        return this.getKey().verify(t, d(e), n);
      } catch (t) {
        return !1;
      }
    }),
    (t.prototype.getKey = function (t) {
      if (!this.key) {
        if (((this.key = new nt()), t && "[object Function]" === {}.toString.call(t))) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
        this.key.generate(this.default_key_size, this.default_public_exponent);
      }
      return this.key;
    }),
    (t.prototype.getPrivateKey = function () {
      return this.getKey().getPrivateKey();
    }),
    (t.prototype.getPrivateKeyB64 = function () {
      return this.getKey().getPrivateBaseKeyB64();
    }),
    (t.prototype.getPublicKey = function () {
      return this.getKey().getPublicKey();
    }),
    (t.prototype.getPublicKeyB64 = function () {
      return this.getKey().getPublicBaseKeyB64();
    }),
    (t.version = "3.1.4"),
    t
  );
})();
Rsa = {
  rsaPublicData: function (e) {
    var t = new C.a();
    return t.setPublicKey(B), t.encrypt(e);
  },
  rsaPrivateData: function (e) {
    var t = new C.a();
    return t.setPrivateKey(R), t.encrypt(e);
  },
  encrypt: function (e) {
    var t = new x.a();
    return (
      t.setPublicKey(
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKZOdKQAL+iYzJ4Q5EQzwv/yvVPnfdNVKRgNG19HbCYM4qIzFPEOFv28SVFQh+xqAj8tAfjpMSTihFwt6BQuWfZXWYpAqf4jF4cU7ez/VHJyzsn8Cb7Lf/1KsLpuz+MbqufrA57AysnLAnRXHOwik+QnpsXZYjTcjgxQ0iLMe5iJyo06CKFxH1rmgYMwS4E89kNg1VtYrFKs1MajApfhu9hTEXnm/lP24TPdefRXbf+z84p1GLue2HRhZs3wECH1HJWZOsrdL/M+wigWldY0fHoiaKsjD9rK1NyaPtk4bIYuwPsfQu5RN4hkEPpTvdw1nKzOdo77zNa5ovCY0uNLZwIDAQAB"
      ),
      t.encryptLong(e)
    );
  },
  decrypt: function (e) {
    var t = new x.a();
    return (
      t.setPrivateKey(
        "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBALqTtO2th/cDrjGe\n6rI9+vZcNT2Ad7LLyUXqCvs++jkK/fTlDbWhb+jLSd8zYnG7aJfvf00DZqVVnVhs\nIFOHyxj04dH0AFq8P/3D8hRyIKxi83fV5PcmdiyKjDtRhCIZdb12t9Q7ZQe0hZ9o\nGxOUrXvZxMObobfs9PaIvDtgLBv9AgMBAAECgYEAmY/Atm7BHXmWAZk+qf2BdQtn\ndnsqCarYugZri2bGI/T8GHf91KROq1fGMULln54T9BlWuVg3P5U7r+8unBGEAlqi\nTVYg8IkKlXEnea5aoQGiAgsJE00TPSjh5SN1E+pwAfVvOR60BvBP0SOrirWTFHvd\nsn164ck6RthkzwbqyrECQQDdOV26G0pkQq0dqs0O3Tf76T2rPIV9e/ALcDKWH17o\nOEshAX/ceOW+ibCGzkuPhzNQ/Ax/HQRzpwnCs5j9kr4XAkEA1+gM/SKPPiMtK2jF\nsvAn24fiXER7WchuNxam63NiF1icZYoQzCHZiPvLGPoYLzqMbSIGKjflIrfCuu4A\nn5E3CwI/UTq/L5bVufrBliMhKFQSOm1qN3YBjhH0Ej8gU/8w2hPRgk0Kpem+cjgc\nmWMmW41JSnNCI2qEN/MdomBPzMwVAkAeRA5GEekomb/EPQyxt86ujI7jxknQXTNu\nD4PYr7UJdsd9yGvwYbJf7IQc/ToUrM1wovtgQbOiOUZX8/MsayvfAkBy+iFMNTeV\nvSHNi2lVSpF9tTxgh7L0LC0kBkxKuldLVGS46Mh5new2sWcQX75ChroJ2UtZHlfq\nW02+EOY7mQkt"
      ),
      t.decryptLong(e)
    );
  },
};
z = loader("Av7u");
U = loader.n(z);

AES = {
  generatekey: function (e) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = "", n = 0; n < e; n++) {
      var o = Math.floor(Math.random() * t.length);
      i += t.substring(o, o + 1);
    }
    return i;
  },
  encrypt: function (e, t) {
    t = t || "abcdsxyzhkj12345";
    var i = U.a.enc.Utf8.parse(t),
      n = U.a.enc.Utf8.parse(e);
    return U.a.AES.encrypt(n, i, {
      mode: U.a.mode.ECB,
      padding: U.a.pad.Pkcs7,
    }).toString();
  },
  decrypt: function (e, t) {
    t = t || "abcdsxyzhkj12345";
    var i = U.a.enc.Utf8.parse(t),
      n = U.a.AES.decrypt(e, i, {
        mode: U.a.mode.ECB,
        padding: U.a.pad.Pkcs7,
      });
    return U.a.enc.Utf8.stringify(n).toString();
  },
};
function getKey(e) {
  return "JWVAXPDCZTZPYUCX";
}
function getres(venTypeId, venueId, fieldType, scheduleDate, week, venueprice, scheduleTime, subSitename, subSiteId, tensity, tenSity) {
  var a = new Date().getTime();
  var sid = Rsa.encrypt(getKey());
  var tim = Rsa.encrypt(a + "");
  var payload = AES.encrypt(
    JSON.stringify({
      venTypeId: venTypeId,
      venueId: venueId,
      fieldType: fieldType,
      returnUrl: "https://sports.sjtu.edu.cn/#/paymentResult/1",
      scheduleDate: scheduleDate,
      week: week,
      spaces: [{ count: 1, venuePrice: venueprice, status: 1, scheduleTime: scheduleTime, subSitename: subSitename, subSiteId: subSiteId, tensity: tensity, venueNum: 1 }],
      tenSity: tenSity,
    }),
    getKey()
  );
  return {
    sid: sid,
    tim: tim,
    payload: payload,
  };
}
