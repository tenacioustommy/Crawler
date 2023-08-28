// 报什么错补什么
document = {};
location = {
  reload: function () {},
};

function main() {
  var s = {},
    u,
    c,
    U,
    r,
    i,
    l = 0,
    a,
    e = eval,
    w = String.fromCharCode,
    sucuri_cloudproxy_js = "",
    S =
      "Zj0iYnN1Ii5zbGljZSgwLDEpICsgImR5Ii5jaGFyQXQoMCkgKyAnYScgKyAgImEiICsgIjMiLnNsaWNlKDAsMSkgKyAiIiArJ2UnICsgICIwIiArIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcpICsgIjBzZWMiLnN1YnN0cigwLDEpICsgJ2RaOScuY2hhckF0KDIpKyJhIi5zbGljZSgwLDEpICsgU3RyaW5nLmZyb21DaGFyQ29kZSgweDYyKSArICIyIiArICIwc3UiLnNsaWNlKDAsMSkgKyAnczgyJy5jaGFyQXQoMikrJ1k0Jy5zbGljZSgxLDIpKyAnJyArImEiICsgICcnICtTdHJpbmcuZnJvbUNoYXJDb2RlKDk5KSArIFN0cmluZy5mcm9tQ2hhckNvZGUoMHg2NCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4NjYpICsgJ2RCZCcuY2hhckF0KDIpKyI0IiArICI0IiArICAnJyArIAoiMyIuc2xpY2UoMCwxKSArICdhMGQnLmNoYXJBdCgyKSsiOHN1Ii5zbGljZSgwLDEpICsgICcnICsnJysiYSIuc2xpY2UoMCwxKSArICJhIi5zbGljZSgwLDEpICsgJzAyJy5zbGljZSgxLDIpK1N0cmluZy5mcm9tQ2hhckNvZGUoMHgzNCkgKyAiNCIgKyAgJycgKyAKImIiLnNsaWNlKDAsMSkgKyAgJycgKycnKycnO2RvY3VtZW50LmNvb2tpZT0nc3VjdXJpcycuY2hhckF0KDYpKyd1JysnYycrJ3UnKycnKydzdWN1cnInLmNoYXJBdCg1KSArICdpcycuY2hhckF0KDApKydfJysnJysnYycrJycrJ3NsJy5jaGFyQXQoMSkrJ28nKycnKyd1JysnJysnc3VjdXJkJy5jaGFyQXQoNSkgKyAncHN1YycuY2hhckF0KDApKyAncnN1Jy5jaGFyQXQoMCkgKydvcycuY2hhckF0KDApKydzdXgnLmNoYXJBdCgyKSsneScrJ19zdWN1cicuY2hhckF0KDApKyAndXN1YycuY2hhckF0KDApKyAndScrJycrJ2knKydzdWN1ZCcuY2hhckF0KDQpKyAnc3VjdV8nLmNoYXJBdCg0KSsgJzRzdWN1Jy5jaGFyQXQoMCkgICsnMicuY2hhckF0KDApKydiJysnNScrJ3N1Y3VyZCcuY2hhckF0KDUpICsgJzUnKycnKydzdWN1cmlmJy5jaGFyQXQoNikrJzUnKyczc3VjdXJpJy5jaGFyQXQoMCkgKyAiPSIgKyBmICsgJztwYXRoPS87bWF4LWFnZT04NjQwMCc7IGxvY2F0aW9uLnJlbG9hZCgpOw==";
  L = S.length;
  U = 0;
  r = "";
  var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (u = 0; u < 64; u++) {
    s[A.charAt(u)] = u;
  }
  for (i = 0; i < L; i++) {
    c = s[S.charAt(i)];
    U = (U << 6) + c;
    l += 6;
    while (l >= 8) {
      ((a = (U >>> (l -= 8)) & 0xff) || i < L - 2) && (r += w(a));
    }
  }
  e(r);

  return document.cookie;
}
