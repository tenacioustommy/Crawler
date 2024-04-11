import execjs
import requests
import os

cur_path=os.path.abspath(os.path.dirname(__file__))
# os.environ['NODE_PATH'] = cur_path
with open(os.path.join(cur_path,'sign.js'), 'r',encoding="utf-8") as f:
    js=f.read()
code=execjs.compile(js)
sign=code.call('get_sign','https://www.toutiao.com/api/pc/list/feed?channel_id=3189399007&min_behot_time=0&offset=0&refresh_count=1&category=pc_profile_channel&client_extra_params=%7B%22short_video_item%22:%22filter%22%7D&aid=24&app_name=toutiao_web')
print(sign)
headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ckb;q=0.6',
    'cache-control': 'no-cache',
   'pragma': 'no-cache',
    'referer': 'https://www.toutiao.com/',
    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
}
params = {
    'channel_id': '3189399007',
    'min_behot_time': '1712827336',
    'offset': '0',
    'refresh_count': '2',
    'category': 'pc_profile_recommend',
    'aid': '24',
    'app_name': 'toutiao_web',
    '_signature': sign,
}

response = requests.get('https://www.toutiao.com/api/pc/list/feed', params=params, headers=headers)
print(response.text)