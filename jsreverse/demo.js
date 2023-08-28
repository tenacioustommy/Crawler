const Crytojs = require("crypto-js");

function b(t) {
  var e = Crytojs.enc.Utf8.parse("EB444973714E4A40876CE66BE45D5930"),
    n = Crytojs.enc.Utf8.parse("B5A8904209931867"),
    a = Crytojs.AES.decrypt(t, e, {
      iv: n,
      mode: Crytojs.mode.CBC,
      padding: Crytojs.pad.Pkcs7,
    });
  return a.toString(Crytojs.enc.Utf8);
}
// data =
//   "unymNwX9P/HVx9IwE7qVtnSkg9H66eT0u5ai5K1FKfM6VezWgfGzcvMFB6meGKclrBuFvQU0EjyFaenzYNvFN1AJe6jB3+H9rAEOWS5hHY83wJZqFsBfbVJMd52/Mo2W81a209/Z3HPoXCjpU1k9kIVMNHuD8GYVmMxL4QGBlq41gxYQ8FPSfBvQ5N/yuLxiwdXGFHtjBu4abUTF31oYCT0Nzo6x0HxSG5Mt6trOyiZtajs39aO4FKUQOGXSrey0f/IkxygPNrPe97hCiGzzCqlZuc7ka9w/0wQkA6vzjOq7unKUXfal6zs5odduIn4z3nglsRrKVyXfXz6Fu5rvXg1KrRSj71NCyQQQstVHAeAH9vxJTxY2LYudhaA+RNS9EE/h+BkJ/L8sfcUbd0t6rwgEVC8D1gh8i019nnPbrFtkKWrtWjzxeWFuoGv+wqLLuwqPmApuLJ+sznliL6o9MUhhWCDsAGtSMOf40Hongf2KOzA2rOkTRHCoD9OB/eE91cYG6LjDHeb8EkJVHoDs+TD5OAUi9/GfZQ7nzaE6Hp6MS639M3oZdfTJCPXL4gT7/rhwndfa8OSTmoDliJIiS3qOdyKDyITr/DhTUhzaVaMX2vbMU6wd73tmR8W1UgiPA4gS5nsT5MtxY5YVfLUt9ESaA359gcO8TK8IL9HZ3aniTfsv2WshiLPFe+C2EdOCSGt7O7ZJBXrWXD3YKu9p3y7iC4Lk/FlFdBVtVcEZiFmH8qMbSnmVwKGrRmpMa6YE26rY6hR0hF9c78nzf8cAZxMVdYGqzIn7oMnzo/9hDb08eNXfS+ceRRlXcn5S506+TqyfsW09wGSaVPNldNJxAOQId1AGo/TM5cw+4Pv8ljh5YFZqcR9NhHXcLExmyk8IEWpNHOqhpc6rAkN+OZyZ97tz++FYzCKHH9DxYrX6z/2kQFGU43og8bBERwlRRNHKD1xlOlZ0QnjRRLiQJLqcp70qdWsUnCPCCJvL9n4iGXy1T1UDitiK3XGPl26GI18jal4/hpXGdM31H6zZkdS8AOAOwG29Kt+L9hWF3N+wIZQkGFUW9D3tiMBzL22Lre9hcAoZXDdYikUg6JJ+UE1k7qHaZw5r3i290ooMj2FY+AYmQB9Kij2kub4UWMx+FUGN549NM0Zz8nb2K4AeG5+R75hQn0+u9uWcdGgBhBZuySHJdplQDQALbDB3mB3DqRxYq5oiF+mug0RGyBcxWCeF+htFER7ynOE0jhY2RC4JZwKzjV7LW4ue90oxKOEfCDRl8j/HNutcbqNt1y2RsISwY9LEbxwjrv1wlgWr+zmS4GrGx5GoRZ67ZcXllitbsM89SmWqhbym6Oq2ipvukCAM84w5VNtQfY7n/ozmGamy90v5F5Rx2AQBafasCRQNjqf/JLrvg+rqpJiTpoF0GIK8hNzHVniHLlLZ7/biTyamxzONeD6Vqz68VpGeQHZz5WzIpksyAaJL1fkmaS+xhdnWSC5sI/AkF5BmK8Ho003VNm5Ei9maOcJvBioZ4ED9uyovOZfZOo4ESmTB/U74xK5ZDnvJrBdth3Nhlg9A//hR+/A=";
// console.log(b(data));
