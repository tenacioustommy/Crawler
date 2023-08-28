import requests
import execjs
import json
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://www.qimingpian.com',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

data = {
    'unionid': '',
}

response = requests.post(
    'https://vipapi.qimingpian.cn/search/searchHotWord', headers=headers, data=data)

encrypt_data = json.loads(response.text)['encrypt_data']
print(encrypt_data)
with open('./jsreverse/demo2.js', 'r', encoding="utf-8") as f:
    js_file = f.read()

ctx = execjs.compile(js_file).call('s', encrypt_data)
print(ctx)
