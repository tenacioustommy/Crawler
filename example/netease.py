from Crypto.Cipher import AES
from base64 import b64encode
import requests
import json
import re
url="https://music.163.com/weapi/comment/resource/comments/get?csrf_token="
data={
    'csrf_token': "",
    'cursor': "-1",
    'offset': "0",
    'orderType': "1",
    'pageNo': "1",
    'pageSize': "20",
    'rid': "R_SO_4_29572502",
    'threadId': "R_SO_4_29572502"
}
# windows.arsear
i="Yp4a2pLSMBDUfsAk"
e='010001'
f="00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
g='0CoJUm6Qyw8W8jud'
def get_seckey():
    return "d9bfa0621d8cb2b521530474c17e2c28046375b3ea72f1ea93124de0a46f7c3b3ce31b1dea7e48fd4a9f39a2a90178951fc7b42e5a8d5ecde240a6d0d7853c346fcfe6c4eb59a44898fc08dd0b6594f6beebd2723d4ea4fcce5adcc4f488220095479c4b94222d5c0af577c472e701c994b1c8cb497ccb2014f57bfeb1809014"
def get_param(data):
    first=enc_param(data,g)
    second=enc_param(first,i)
    return second
def to_16(data):
    pad=16-len(data)%16
    data+=chr(pad)*pad
    return data
def enc_param(data,key):
    iv="0102030405060708"
    data=to_16(data)
    aes=AES.new(key=key.encode("utf-8"),IV=iv.encode("utf-8"),mode=AES.MODE_CBC)
    bs=aes.encrypt(data.encode("utf-8"))
    return str(b64encode(bs),"utf-8")

resp=requests.post(url,data={
    "params":get_param(json.dumps(data)),
    "encSecKey":get_seckey()
})
text=resp.text
obj=re.compile(r"content\":\"(?P<comment>.*?)\"",re.S)
iter=obj.finditer(resp.text)

# data=json.loads(resp.text)["data"]

with open("output.txt","a+",encoding="utf-8") as f:
    for it in iter:
        print(it.group("comment"),file=f)


"""function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    
    function d(d, e, f, g) {
        var h = {}
          , i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
    } 
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }"""