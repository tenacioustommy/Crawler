import requests
import execjs
import codecs
cookies = {
    'SUNWAY-ESCM-COOKIE': 'd842ea98-5b09-4258-90ef-41636c525461',
    '__jsluid_s': '09a306b67fea13efb6c528a978304d61',
    'PPA_CI': '7cf160762186d0f29152c7121972a134',
    'JSESSIONID': 'CE7735BDCD1DC01E33496FD124CD6DB3',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Connection': 'keep-alive',
    # 'Content-Length': '0',
    # 'Cookie': 'SUNWAY-ESCM-COOKIE=d842ea98-5b09-4258-90ef-41636c525461; __jsluid_s=09a306b67fea13efb6c528a978304d61; PPA_CI=7cf160762186d0f29152c7121972a134; JSESSIONID=CE7735BDCD1DC01E33496FD124CD6DB3',
    'Origin': 'https://ec.minmetals.com.cn',
    'Referer': 'https://ec.minmetals.com.cn/supplier-info',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/public', cookies=cookies, headers=headers)

with open("./jsreverse/webpack1.js", "r", encoding='utf-8') as f:
    jscode = f.read()

param = execjs.compile(jscode).call('main', response.text, 3)

json_data = {
    "param": param,
}

response = requests.post(
    'https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page',
    cookies=cookies,
    headers=headers,
    json=json_data,
)
print(response.text)
