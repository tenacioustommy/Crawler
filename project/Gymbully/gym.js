function getKey(e) {
  //   var t = [
  //     "0",
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //     "9",
  //     "A",
  //     "B",
  //     "C",
  //     "D",
  //     "E",
  //     "F",
  //     "G",
  //     "H",
  //     "I",
  //     "J",
  //     "K",
  //     "L",
  //     "M",
  //     "N",
  //     "O",
  //     "P",
  //     "Q",
  //     "R",
  //     "S",
  //     "T",
  //     "U",
  //     "V",
  //     "W",
  //     "X",
  //     "Y",
  //     "Z",
  //   ];
  //   null == e && (e = 16);
  //   for (var i = "", a = 0; a < e; a++) {
  //     i += t[Math.ceil(35 * Math.random())];
  //   }
  //   return i;
  return "F3364HK2UC6B5HKY";
}

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
