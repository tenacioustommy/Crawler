import requests

headers = {
    'authority': 'youzhicai.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'cache-control': 'max-age=0',
    # 'cookie': 'Hm_lpvt_9511d505b6dfa0c133ef4f9b744a16da=1693148538',
    'referer': 'https://youzhicai.com/nd/047e7ebd-ce1c-465e-902d-2baf8fdfcfde-1.html',
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

response = requests.get(
    'https://youzhicai.com/nd/047e7ebd-ce1c-465e-902d-2baf8fdfcfde-1.html',

    headers=headers,
)

with open("./jsreverse/demo4.js", "w", encoding='utf-8') as f:
    f.write(response.text)
