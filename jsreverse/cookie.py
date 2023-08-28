# import requests
import execjs
from curl_cffi import requests
import json
with open("./jsreverse/demo3.js", "r", encoding="utf-8") as f:
    jscode = f.read()
cookie = execjs.compile(jscode).call('main')
headers = {
    # "proxy": "http://localhost:5000",
    'authority': 'www.ontariogenomics.ca',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'cookie': cookie,
    'cache-control': 'max-age=0',
    'referer': 'https://www.ontariogenomics.ca/',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
}
# tls 第三方库检测,模拟设备指纹检测
response = requests.get('https://www.ontariogenomics.ca/',
                        headers=headers, impersonate='chrome99')

print(response.text)
