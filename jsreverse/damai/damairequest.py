import requests
import execjs
import json
import time
import pickle
import os
from bs4 import BeautifulSoup
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
# 想看的演出序号与时间
expectedtime = [0]
expectedticket = [0, 5]
account = '13816140582'
pwd = 'hzh475601'
login_url = 'https://passport.damai.cn/login?ru=https%3A%2F%2Fwww.damai.cn%2F'
# 请求到选择页面，无cookie
# projectid自己手动添加
projectid = '733071713999'


def dict_to_equals(dictionary):
    equals_string = ""
    for key, value in dictionary.items():
        equals_string += str(key) + " = " + str(value) + ", "
    equals_string = equals_string.rstrip("; ")
    return equals_string


class Damai:
    def __init__(self):
        self.cookies = {
            'PPA_CI': '2acb5d83e3cc0f10245d82b86266034c',
            '_samesite_flag_': "true",
            'x5sec': "7b22617365727665723b32223a22393130623032316366663965323234653761333766356536643732653639346543506d4876616347454c4c55324d622f2f2f2f2f2f7745776735435530774e4141773d3d222c22733b32223a2239633063383137306136303937623261227d",
        }

    def login(self):
        if not os.path.exists(f'damai{account}.pkl'):
            options = Options()
            options.add_experimental_option(
                "excludeSwitches", ["enable-automation"])
            options.add_experimental_option(
                'useAutomationExtension', False)
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")
            options.add_argument("--disable-gpu")
            options.add_argument("--disable-extensions")
            options.add_argument(
                "--disable-blink-features=AutomationControlled")
            options.add_argument(
                "--disable-blink-features=AutomationControlledInHeadlessMode")
            options.add_argument("--disable-logging")
            options.add_argument("--disable-infobars")
            options.add_argument("--disable-notifications")
            options.add_argument("--disable-popup-blocking")
            options.add_argument("--disable-web-security")
            options.add_argument(
                "--disable-features=CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process,NetworkService,VizDisplayCompositor")
            web = Chrome(options=options)
            web.set_window_size(720, 1920)
            web.get(login_url)
            time.sleep(1)
            # 恶心的iframe
            iframe = web.find_element(
                By.XPATH, '//*[@id="alibaba-login-box"]')
            web.switch_to.frame(iframe)
            phonenum = web.find_element(
                By.XPATH, '//*[@id="fm-login-id"]')
            phonenum.clear()
            phonenum.send_keys(account)
            password = web.find_element(
                By.XPATH, '//*[@id="fm-login-password"]')
            password.clear()
            password.send_keys(pwd)
            login = web.find_element(
                By.XPATH, '//*[@id="login-form"]/div[4]/button')
            login.click()
            time.sleep(2)
            cookies = web.execute_script("return document.cookie;")
            # Remove any whitespace characters
            string = cookies.replace(" ", "")
            # Split the string into key-value pairs
            pairs = string.split(";")
            # Iterate over the key-value pairs and add them to the dictionary
            for pair in pairs:
                key, value = pair.split("=", 1)
                self.cookies[key] = value
            self.cookies.pop('destCity')
            pickle.dump(self.cookies, open(f'damai{account}.pkl', "wb"))
        # selenium获取的有session的cookie,添加进cookie
        self.cookies = pickle.load(open(f'damai{account}.pkl', 'rb'))

    def getparam(self):
        # 第一种方法通过电脑版获取skuId，但有可能直接显示不全，好在实在不行可以手动获取
        headers = {
            'authority': 'detail.damai.cn',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'cache-control': 'max-age=0',
            'referer': 'https://detail.damai.cn/item.htm?id=729389580105',
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

        params = {
            'id': projectid,
        }
        # get response
        while True:
            response = requests.get('https://detail.damai.cn/item.htm',
                                    params=params, headers=headers)
            self.html = response.text
            page = BeautifulSoup(response.text, "lxml")
            result = json.loads(
                page.find('div', attrs={'id': 'dataDefault'}).text)

            # performbases是时间，performs是场次
            for performbase in expectedtime:
                for perform in expectedticket:
                    expected = result['performBases'][performbase]['performs'][0]["skuList"][perform]
                    print(expected)
                    # 有票
                    if(expected['skuEnable']):
                        self.buy_param = projectid+'_1_'+str(expected['skuId'])
                        print(expected['skuName']+' has tickets')
                        return
                    else:
                        # 不可售
                        continue
            time.sleep(1)
        # 第二种方法手机端，隐藏在js中，需要逆向


# --------------------------------------

    def get_ticket(self):
        params = execjs.compile('./damai.js').call('getparam')
        # 请求购买页面
        # 两个人

        headers = {
            'authority': 'mtop.damai.cn',
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'content-type': 'application/x-www-form-urlencoded',
            'globalcode': 'ali.china.damai',
            'origin': 'https://m.damai.cn',
            'referer': 'https://m.damai.cn/',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        }

        params = {
            'jsv': '2.7.2',
            'appKey': '12574478',
            't': '1693208413079',
            'sign': 'dfd20e8e4a411c94e2feb88545ec4a9b',
            'v': '4.0',
            'post': '1',
            'type': 'originaljson',
            'timeout': '15000',
            'dataType': 'json',
            'isSec': '1',
            'ecode': '1',
            'AntiCreep': 'true',
            'ttid': '#t#ip##_h5_2014',
            'globalCode': 'ali.china.damai',
            'tb_eagleeyex_scm_project': '20190509-aone2-join-test',
            'H5Request': 'true',
            'api': 'mtop.trade.order.create.h5',

            # important
            'submitref': '8a0769b5ccfacb9a799368b28790c0630a7112b3d048624594d076a1e3081c5c',
        }

        # data ，两个人,h5/mtop.trade.order.create.h5/4.0/parsed-------------------------------------------------------------------------------------
        data = {"damai": "1", "channel": "damai_app", "umpChannel": "10002", "atomSplit": "1", "serviceVersion": "1.8.5", "signKey": "cEl4bXJdXglkRV51QEF1eXZTfG1xWFoKZEFbfFo3GBcTIgoSBzI6bBIgOB8=", "umidToken": "T2gAT3P45XLCdnFp24pZ93m_qCI0A42m0CVSEh2uuv0djwx8FRzLuI8Be-9Y99ihiGk=",
                }

        response = requests.post(
            'https://mtop.damai.cn/h5/mtop.trade.order.create.h5/4.0/',
            params=params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        with open("response2.txt", "w", encoding='utf-8') as f:
            f.write(response.text)

    def get_page2(self):
        with open('./jsreverse/damai/collina.js', 'r', encoding="utf-8") as f:
            js_file = f.read()
        ua = execjs.compile(
            js_file).call('main', self.html, dict_to_equals(self.cookies))
        data = {
            'data': '{"buyNow":true,"exParams":"{\\"damai\\":\\"1\\",\\"channel\\":\\"damai_app\\",\\"umpChannel\\":\\"10002\\",\\"atomSplit\\":\\"1\\",\\"serviceVersion\\":\\"2.0.0\\",\\"signKey\\":\\"cEl4bXJdXglkRV51QEF1eXZTfGpxXlAIYEdfdFo3GBcTIgoSBzI6bBIgOB8=\\",\\"ua\\":\\%s\\",\\"subChannel\\":\\"damai@damaih5_h5\\",\\"customerType\\":\\"default\\"}","buyParam":"733071713999_1_5246716671861","dmChannel":"damai@damaih5_h5"}' % (ua),
        }

        token = self.cookies['_m_h5_tk'].split('_')[0]
        with open('./jsreverse/damai/damai2.js', 'r', encoding="utf-8") as f:
            js_file = f.read()
        keyparam = execjs.compile(
            js_file).call('main', token, data['data'])
        headers = {
            'authority': 'mtop.damai.cn',
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            'globalcode': 'ali.china.damai',
            'origin': 'https://m.damai.cn',
            'pragma': 'no-cache',
            'referer': 'https://m.damai.cn/',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        }
        params = {
            'jsv': '2.7.2',
            'appKey': '12574478',
            'type': 'originaljson',
            'dataType': 'json',
            'v': '4.0',
            'H5Request': 'true',
            'AntiCreep': 'true',
            'AntiFlood': 'true',
            'api': 'mtop.trade.order.build.h5',
            'method': 'POST',
            'ttid': '#t#ip##_h5_2014',
            'globalCode': 'ali.china.damai',
            'tb_eagleeyex_scm_project': '20190509-aone2-join-test',
        }
        params.update(keyparam)

        response = requests.post(
            'https://mtop.damai.cn/h5/mtop.trade.order.build.h5/4.0/',
            params=params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        return response.text


if __name__ == "__main__":
    damai = Damai()
    damai.login()
    damai.getparam()
    print(damai.get_page2())

    damai.get_ticket()
