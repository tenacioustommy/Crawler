import execjs
import requests

cookies = {
    'ASP.NET_SessionId': 'rs2akt41dtsz1xhzjo5oiz5b',
    'PPA_CI': 'c33a19c68a867afec2eb323f84a7e554',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json;charset=UTF-8',
    # 'Cookie': 'ASP.NET_SessionId=rs2akt41dtsz1xhzjo5oiz5b; PPA_CI=c33a19c68a867afec2eb323f84a7e554',
    'Origin': 'https://ggzyfw.fj.gov.cn',
    'Referer': 'https://ggzyfw.fj.gov.cn/business/list/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'portal-sign': 'ad92c6df09d023414f13a5dbc29d59a0',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

json_data = {
    'pageNo': 10,
    'pageSize': 20,
    'total': 4178,
    'AREACODE': '',
    'M_PROJECT_TYPE': '',
    'KIND': 'GCJS',
    'GGTYPE': '1',
    'PROTYPE': '',
    'timeType': '6',
    'BeginTime': '2023-02-27 00:00:00',
    'EndTime': '2023-08-27 23:59:59',
    'createTime': [],
    'ts': 1693135406036,
}

response = requests.post('https://ggzyfw.fj.gov.cn/FwPortalApi/Trade/TradeInfo',
                         cookies=cookies, headers=headers, json=json_data).text

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"pageNo":1,"pageSize":20,"total":4178,"AREACODE":"","M_PROJECT_TYPE":"","KIND":"GCJS","GGTYPE":"1","PROTYPE":"","timeType":"6","BeginTime":"2023-02-27 00:00:00","EndTime":"2023-08-27 23:59:59","createTime":[],"ts":1693135406036}'
#response = requests.post('https://ggzyfw.fj.gov.cn/FwPortalApi/Trade/TradeInfo', cookies=cookies, headers=headers, data=data)
with open('./jsreverse/demo.js', 'r', encoding="utf-8") as f:
    js_file = f.read()

ctx = execjs.compile(js_file).call('b', response['Data'])
print(ctx)
