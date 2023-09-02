# 先通过selenium登录获得cookie和token,注意之后就不要在重新登陆了,否则token失效
# 此程序目前只适用于无选座，无快递模式
import requests
import time
import pickle
import os
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# 配置文件
# -----------------------------------
showid = '64eee3e684cc9b00018e13ab'
# 陈奕迅
# showid = '64ecb6f83399ba000182403d'
# 一共有几个时间段
alltime = 2
# 你想抢那几个时间段按优先级排序
times = [0, 1]
# 目前只能抢一个票价，index是多少
price = 0
# 多票价待维护
# prices = [0, 1]
# 一共需要几张
num = 2
# 加快速度
delivery = "ID_CARD"
account = '13816140582'
access_token = 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkM1qwzAQhN9lzz7oz5KTY0pCAimB0Bx6KrK9IgZbCrJc0oa8e9eoKT21xx3m29nZGwQ7pfPOuwBLP_V9AdOIMc83qLvPp9AiLGGz3b89QwHjVK9-RC20sRVDbAWvSiVMpR1XC0U-Io-hn02r0-v6SMqQmtO8up1BhWXpasYk18oxxjhiLU2bwf9sDu4F4PXSRXzpBnwcTuThgtGm8CeNFNJEtOkb5nohtVTKyFJIKvgxJhxywbx3wNicrU-_n0TpmTSCVYawd4xjFzyJIr_Q28dl9y8AAAD__w.ZEbq_DAIvEYGbrcKTN3RwIJ19mfrLIBiB9nn8c60EYEG3TjFl1gub4wEaWL6d1tZS7vuXSU3lHBJUDIRNXMWXwvAjOqOoHinonT6dKqCHHvL5-6iLF5hvSEl1K2CmhGW_dZybmumA5BzwLtGQ0cHej64MHdyPljjrzeqYz7TiGQ'
# -----------------------------------
login_url = 'https://m.piaoxingqiu.com/login'


class piaoxinqiu:
    def __init__(self):
        self.cookies = {
            'sajssdk_2015_cross_new_user': '1',
        }
        self.bizshowsessionids = []
        self.login()
        self.audienceids = self.get_user()['data']
        # 提前搞好所有时间
        for i in range(alltime):
            self.bizshowsessionids.append(self.get_bizshowsessionid(i))
        # 这个也需要提前搞好
        self.seatPlans = self.get_Seat(self.bizshowsessionids[0])

    def login(self):
        if not os.path.exists(f'D:\\Computer Science\\Python3\\Crawler\\file\\piaoxinqiu{account}.pkl'):
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
            phonenum = web.find_element(
                By.XPATH, '//*[@id="app"]/uni-app/uni-page/uni-page-wrapper/uni-page-body/uni-view[2]/uni-view[2]/uni-view/uni-view/uni-view[2]/uni-view[1]/uni-view[1]/uni-input/div/input')
            phonenum.send_keys(account)
            time.sleep(1)
            sendverify = web.find_element(
                By.XPATH, '//*[@id="app"]/uni-app/uni-page/uni-page-wrapper/uni-page-body/uni-view[2]/uni-view[2]/uni-view/uni-view/uni-view[2]/uni-view[1]/uni-view[2]/uni-view')
            sendverify.click()
            print('input the code and login in 10secs')
            wait = WebDriverWait(web, 30)
            wait.until(EC.invisibility_of_element(phonenum))
            time.sleep(1)
            cookies = web.execute_script("return document.cookie;")
            # Remove any whitespace characters
            string = cookies.replace(" ", "")
            # Split the string into key-value pairs
            pairs = string.split(";")
            # Iterate over the key-value pairs and add them to the dictionary
            for pair in pairs:
                key, value = pair.split("=", 1)
                self.cookies[key] = value
            pickle.dump(self.cookies, open(
                f'D:\\Computer Science\\Python3\\Crawler\\file\\piaoxinqiu{account}.pkl', "wb"))
            print('获取token')
        # selenium获取的有session的cookie,添加进cookie
        self.cookies = pickle.load(open(
            f'D:\\Computer Science\\Python3\\Crawler\\file\\piaoxinqiu{account}.pkl', 'rb'))

    def get_bizshowsessionid(self, time=0):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/booking/{showid}?seatPickType=SUPPORT_NONE&selectedDate=&showId={showid}f&stdShowId=',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            # 暂时固定
            'access-token': access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        params = {
            'src': 'H5',
            'ver': '3.3.5',
            'showId': showid,
            'privilegeId': '',
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/show/{showid}/sessions_static_data',
            params=params,
            cookies=self.cookies,
            headers=headers,
        )
        # 选择时间
        return response.json()['data']['sessionVOs'][time]['bizShowSessionId']

    # 获得价格表
    # 注意它返回的顺序是按照原顺序的

    def get_Seat(self, showsessionid):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2264e55fb003164f0001eeb37d%22%2C%22first_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNGI3YjM0NDkxNTdjLTAzNWE1MWU0NTNmZmI4Mi0yNjAzMWY1MS0zNjg2NDAwLTE4YTRiN2IzNDRhZGJkIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjRlNTVmYjAwMzE2NGYwMDAxZWViMzdkIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2264e55fb003164f0001eeb37d%22%7D%2C%22%24device_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%7D; PPA_CI=9e55668ed4cb4f273585bdb92a60a43e; acw_tc=2760824c16936199644454893e99ae98bff99d5e302ab0e1bef998fd3a4f47; ssxmod_itna=eqfxgiD=DQ0=GQIP0Ln7tD97Dumsq=CdeODBQZmhx0H2eiODUxn4iaDT=rv7bZjBxhPI808YvWpFB3xqF4sB+uDtj7bk0PqTDCPGnm2gxIaD44GTDt4DTD34DYDix=DLDmeD+UkKDd06TN/GT=7D0YDzqDgD7Q7GqDEDG3D04UrR7xB7qG0DDtDAqrNoeDAjxUl/br77eWtRTdBD0tDIqGXYBF=ZeH1HBXlGadDbhPcierDtqD9zltO7eDHId0ZQwBWbDfeIB5WY7fxQ2DKlAMq+0meDExpY7Dbl2GdUG+MdaYX2iD==; ssxmod_itna2=eqfxgiD=DQ0=GQIP0Ln7tD97Dumsq=CdeODBQZmxn98e5DsqCIDLQWV4VmsXsHkxjecBBuYUx0Q+eKhz3s9QTrslbtj8WAOvfcO=+kZ3ULXKhZrl3Qfp1MqUbg6TN7PG2e47=D+6iD==',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/booking/{showid}?seatPickType=SUPPORT_NONE&selectedDate=&showId={showid}&stdShowId=',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        params = {
            'src': 'H5',
            'ver': '3.3.5',
            'showId': showid,
            'sessionId': showsessionid,
            'bizSessionId': showsessionid,
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/show/{showid}/show_session/{showsessionid}/seat_plans_static_data',
            params=params,
            cookies=self.cookies,
            headers=headers,
        )
        return response.json()['data']['seatPlans']

    # 检测有无余票
    # 注意它返回的顺序不是按照原顺序的

    def get_availablity(self, showsessionid):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2264e55fb003164f0001eeb37d%22%2C%22first_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNGI3YjM0NDkxNTdjLTAzNWE1MWU0NTNmZmI4Mi0yNjAzMWY1MS0zNjg2NDAwLTE4YTRiN2IzNDRhZGJkIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjRlNTVmYjAwMzE2NGYwMDAxZWViMzdkIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2264e55fb003164f0001eeb37d%22%7D%2C%22%24device_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%7D; PPA_CI=9e55668ed4cb4f273585bdb92a60a43e; acw_tc=2760824c16936199644454893e99ae98bff99d5e302ab0e1bef998fd3a4f47; ssxmod_itna=eqfxgiD=DQ0=GQIP0Ln7tD97Dumsq=CdeODBQZmhx0H2eiODUxn4iaDT=rv7bZjBxhPI808YvWpFB3xqF4sB+uDtj7bk0PqTDCPGnm2gxIaD44GTDt4DTD34DYDix=DLDmeD+UkKDd06TN/GT=7D0YDzqDgD7Q7GqDEDG3D04UrR7xB7qG0DDtDAqrNoeDAjxUl/br77eWtRTdBD0tDIqGXYBF=ZeH1HBXlGadDbhPcierDtqD9zltO7eDHId0ZQwBWbDfeIB5WY7fxQ2DKlAMq+0meDExpY7Dbl2GdUG+MdaYX2iD==; ssxmod_itna2=eqfxgiD=DQ0=GQIP0Ln7tD97Dumsq=CdeODBQZmxn98e5DsqCIDLQWV4VmsXsHkxjecBBuYUx0Q+eKhz3s9QTrslbtj8WAOvfcO=+kZ3ULXKhZrl3Qfp1MqUbg6TN7PG2e47=D+6iD==',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/booking/{showid}?seatPickType=SUPPORT_NONE&selectedDate=&showId={showid}&stdShowId=',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        params = {
            'src': 'H5',
            'ver': '3.3.5',
            'showId': showid,
            'sessionId': showsessionid,
            'bizSessionId': showsessionid,
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/show/{showid}/show_session/{showsessionid}/seat_plans_dynamic_data',
            params=params,
            cookies=self.cookies,
            headers=headers,
        )
        return response.json()['data']['seatPlans']

    def get_user(self):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2264e55fb003164f0001eeb37d%22%2C%22first_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNGI3YjM0NDkxNTdjLTAzNWE1MWU0NTNmZmI4Mi0yNjAzMWY1MS0zNjg2NDAwLTE4YTRiN2IzNDRhZGJkIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjRlNTVmYjAwMzE2NGYwMDAxZWViMzdkIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2264e55fb003164f0001eeb37d%22%7D%2C%22%24device_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%7D; PPA_CI=9e55668ed4cb4f273585bdb92a60a43e; acw_tc=2760824c16936199644454893e99ae98bff99d5e302ab0e1bef998fd3a4f47; ssxmod_itna=Cq0xcDgm0QiQDQDXDnn+=G=APKYTkfuAOxo+M4GXKwYGRDCqAPGfDI3bz+ifMrlxhxEQl7rer7zj8Rmp10QoPxQ=b=AuWAW+DB3DExkrvd7+DYYDtxBYDQxAYDGDDpnDj4ibDY4VODjey1McHCLg4DKx0kDY5DwgbCDYPDWxDF260q3PHkDeKD0xD1o/OhDDP=2EyHdSbwhUGz=niCD75Dux0HKmMq2ZEUl/DGSPMjDmb3Lp7+DCKDjxoz0nYDUivGl192Yoa5TerNeehxLBDxYBe5Gvi5YiiY=QDbKQRqK0q4F7heZkS46i4=iDD===; ssxmod_itna2=Cq0xcDgm0QiQDQDXDnn+=G=APKYTkfuAOxo+qA=nieD/8SFDFO+UuPbIizEPwFFvFuSYLrL+utFLh2hlCFTobAdqSC9n8QsFn8656mKWCcvT=7UIyR8xzmAunUgUtf8uuXuzLClUrqNEQDPDKdQDFqD2ziD=',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/package-order/pages/preload-ticket/preload-ticket?showId={showid}',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        params = {
            'length': '500',
            'offset': '0',
            'src': 'H5',
            'ver': '3.3.5',
        }

        response = requests.get(
            'https://m.piaoxingqiu.com/cyy_gatewayapi/user/buyer/v3/user_audiences',
            params=params,
            cookies=self.cookies,
            headers=headers,
        )
        return response.json()

    def pre_order(self, seatPlan):
        permoney = seatPlan["originalPrice"]
        seatPlanid = seatPlan['seatPlanId']
        bizshowsessionid = seatPlan["showSessionId"]
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2264e55fb003164f0001eeb37d%22%2C%22first_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNGI3YjM0NDkxNTdjLTAzNWE1MWU0NTNmZmI4Mi0yNjAzMWY1MS0zNjg2NDAwLTE4YTRiN2IzNDRhZGJkIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjRlNTVmYjAwMzE2NGYwMDAxZWViMzdkIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2264e55fb003164f0001eeb37d%22%7D%2C%22%24device_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%7D; PPA_CI=9e55668ed4cb4f273585bdb92a60a43e; acw_tc=2760777016936287590431335eb23dfb7bf86989ee0f52396593ea895f8eff; ssxmod_itna2=Qq0xgD07i=GQiQYD=DXmNSq7wOAke5G8qW=QYD6pK=lD0Hwq03s8uqUDyAV+QqApxuGZY7q+/4te9Nho1+jBbAWkzj3ioO5+ioim=/RlLn2o=4tLgALgS/fSBjq8CtlRB18NVZBlkMNZfddDonXXQbjDTji5PeRKXkr4EeYqXQEQuCRK6eTisWRHRlvYyu6Nv2R0lnaWaa0xzp0OrPIb2h9QMxa=F7HwmA2hrc93klBQaaOP1=yI1QSEoUr4ml7wnB8THaovM/30o+AWD7QOz79YY8hkDOAnHytyHpGhnEYTc0YH98wLZDM0NClG6e+H0UKYxEnDbimoQD2Y0a2i+BiIGDGr2PUD+AwahD1BP9OGklDqiD+lxo7Ge8eKimWtq4iRsQDoB25D4m0Nb9XCzr4GeqnDDjKDeqx4D===; ssxmod_itna=Qq0xgD07i=GQiQYD=DXmNSq7wOAke5G8qW=Q7NDlZjixWKGkD6DWP0WWubeYIY=FGGDGkWojWi=Y7or4uxK8080wxf7tMxIKpDCPGn+=ArK=WDeeDvDCeDIDWeDiDG+8DFxYoDep5=DFmqN/lTt9zxDwDB=DmqG2zrtDm4DfDDdgKDhpmu=D4qDBDGtPxciDGfKg9qQKs2rr57X6mqDMD7tD/8hCriticpHe4CNOy4GWWh=PaeGuDG6YudK5x0pSKjNnt9eoWEh3lxe3FGf5tBoNf7xEQGDoGGYTF7hYFA5qbh4sBVnYboP4D===',
            'Origin': 'https://m.piaoxingqiu.com',
            'Pragma': 'no-cache',
            # 'Referer': 'https://m.piaoxingqiu.com/order/confirm?cpId=72d0ee620dbc885d39b0fa25db1ac6e1',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        json_data = {
            'src': 'H5',
            'ver': '3.3.5',
            'items': [
                {
                    'skus': [
                        {
                            'seatPlanId': seatPlanid,
                            'sessionId': bizshowsessionid,
                            'showId': showid,
                            'skuId': seatPlanid,
                            'skuType': 'SINGLE',
                            'ticketPrice': permoney,
                            'qty': num,
                        },
                    ],
                    'spu': {
                        'id': showid,
                        'spuType': 'SINGLE',
                    },
                },
            ],
        }

        response = requests.post(
            'https://m.piaoxingqiu.com/cyy_gatewayapi/trade/buyer/order/v3/pre_order',
            cookies=self.cookies,
            headers=headers,
            json=json_data,
        )
        return response.json()

    def create_order(self, seatPlan, delivery):
        permoney = int(seatPlan["originalPrice"])
        seatPlanid = seatPlan['seatPlanId']
        bizshowsessionid = seatPlan["showSessionId"]

        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            # 'Cookie': 'sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2264e55fb003164f0001eeb37d%22%2C%22first_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMThhNGI3YjM0NDkxNTdjLTAzNWE1MWU0NTNmZmI4Mi0yNjAzMWY1MS0zNjg2NDAwLTE4YTRiN2IzNDRhZGJkIiwiJGlkZW50aXR5X2xvZ2luX2lkIjoiNjRlNTVmYjAwMzE2NGYwMDAxZWViMzdkIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%24identity_login_id%22%2C%22value%22%3A%2264e55fb003164f0001eeb37d%22%7D%2C%22%24device_id%22%3A%2218a4b7b3449157c-035a51e453ffb82-26031f51-3686400-18a4b7b344adbd%22%7D; PPA_CI=9e55668ed4cb4f273585bdb92a60a43e; acw_tc=2760779b16936239725093798e1f8e9cf5c08b7171ea9cf60b8b9a5a4e4c68; ssxmod_itna=Wqjx0Q0QGQqewqBPGKEwDRorFTqxBKeDC+SQQ+CDBuOY4AQDyD8xA3GE+AvKTHQn00YiLK7YhE4K8=2ufetbn3SWInGehieDHxY=OQW6PiiDC40rD74irDDxD3Ix7PGmDiW1RD72=1lSgK80DGrDlKDRx070BKDbxDaDGpkolhxUEKDhxDCDivhC3YDiOwkygP+0AAvoC5eUxG1DQ5Ds=i67RE6B8isyg3eDmR3AOAhDCKDjc71RAYDUeysgrI0IQ231e2NpQDatQ4Kzj2erQDKdG2YTjGqGAnqm7DKF0ZZKQfqK7hP4D===; ssxmod_itna2=Wqjx0Q0QGQqewqBPGKEwDRorFTqxBKeDC+SQQD8d=2DGXP+eGaGYKvvKk0C=fLgk9+GD8220GViS0crG=VrQ3WhQPtcoRjdaFZo=fHMb=Mu2oPkCLHnA=uF6Cj6HHa8ZIvZRZUs8dApsUpvGZ6P1S2niFaYO=tHHx/Am=toiH+ne=bG8XncD=UOpN+nbi8OfdfFIQRFLxUBpexkfW+of1pGdL9BUSSLAi/diTiG6B4CpIFH6m4e28+jnG4gY4ZnD7ii3DQ94tnxXkgDKcj0tc70UiQe4UHuDKeMbHQmlgYuc6kuZVQRICGW90gDBQnDYKyibDY3BeI2Y95T0iqxH=DBdeBiU2QbidSAl+h4wxtlBbI5XmRD87BK2DKR4ABYHOxsgYSeDFqD+ODxD',
            'Origin': 'https://m.piaoxingqiu.com',
            'Pragma': 'no-cache',
            # 'Referer': 'https://m.piaoxingqiu.com/order/confirm?cpId=f5358d2de1bb04966781d309909e2833',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        json_data = {
            'src': 'H5',
            'ver': '3.3.5',
            'locationParam': {
                'locationCityId': '3101',
            },
            'paymentParam': {
                'totalAmount': permoney*num,
                'payAmount': permoney*num,
            },
            'priceItemParam': [
                {
                    'applyTickets': [],
                    'priceItemName': '票款总额',
                    'priceItemVal': permoney*num,
                    'priceItemType': 'TICKET_FEE',
                    'priceItemSpecies': 'SEAT_PLAN',
                    'direction': 'INCREASE',
                    'priceDisplay': f'￥{permoney*num}',
                },
            ],
            'items': [
                {
                    'skus': [
                        {
                            'seatPlanId': seatPlanid,
                            'sessionId': bizshowsessionid,
                            'showId': showid,
                            'skuId': seatPlanid,
                            'skuType': 'SINGLE',
                            'ticketPrice': permoney,
                            'qty': num,
                            'deliverMethod': delivery,
                        },
                    ],
                    'spu': {
                        # showid
                        'id': showid,
                        'spuType': 'SINGLE',
                    },
                },
            ],
            # 快递才有这个参数
            'contactParam': {},
            'many2OneAudience': {},
            # 手动填!!!!!!!!
            'one2oneAudiences': [
            ],
            # 快递才有这个参数
            'addressParam': {},
        }
        for i in range(num):
            json_data['one2oneAudiences'].append({
                'audienceId': self.audienceids[i]['id'],
                'sessionId': bizshowsessionid,
            })
        response = requests.post(
            'https://m.piaoxingqiu.com/cyy_gatewayapi/trade/buyer/order/v3/create_order',
            cookies=self.cookies,
            headers=headers,
            json=json_data,
        )
        return response.json()

        # Note: json_data will not be serialized by requests
        # exactly as it was in the original request.
        #data = '{"src":"H5","ver":"3.3.5","locationParam":{"locationCityId":"3101"},"paymentParam":{"totalAmount":880,"payAmount":880},"priceItemParam":[{"applyTickets":[],"priceItemName":"票款总额","priceItemVal":880,"priceItemType":"TICKET_FEE","priceItemSpecies":"SEAT_PLAN","direction":"INCREASE","priceDisplay":"￥880"}],"items":[{"skus":[{"seatPlanId":"64e70df9b72ba1000173742e","sessionId":"64d466ec7131660001a03ed4","showId":"64d466eb7131660001a03ec2","skuId":"64e70df9b72ba1000173742e","skuType":"SINGLE","ticketPrice":880,"qty":1,"deliverMethod":"ID_CARD"}],"spu":{"id":"64d466eb7131660001a03ec2","spuType":"SINGLE"}}],"contactParam":{},"many2OneAudience":{},"one2oneAudiences":[{"audienceId":"64e55fdd6b58440001620ee3","sessionId":"64d466ec7131660001a03ed4"}],"addressParam":{}}'.encode()
        # response = requests.post(
        #    'https://m.piaoxingqiu.com/cyy_gatewayapi/trade/buyer/order/v3/create_order',
        #    cookies=cookies,
        #    headers=headers,
        #    data=data,
        # )


    # response = requests.post(
    #     'https://m.piaoxingqiu.com/cyy_gatewayapi/trade/buyer/order/v3/create_order',
    #     cookies=cookies,
    #     headers=headers,
    #     json=json_data,
    # )
if __name__ == "__main__":
    ticket = piaoxinqiu()
    flag = True
    while flag:
        for pertime in times:
            bizshowsessionid = ticket.bizshowsessionids[pertime]
            avails = ticket.get_availablity(bizshowsessionid)
            for avail in avails:
                # for price in prices:
                # 有票并且是想要的票,专一抢票模式
                if avail['seatPlanId'] == ticket.seatPlans[price]['seatPlanId'] and avail['canBuyCount'] >= num:
                    print('ticket available')
                    seatPlan = ticket.seatPlans[price]
                    response = ticket.create_order(seatPlan, delivery)
                    if(response['statusCode'] == 200):
                        print(account, " success")
                        flag = False
                    else:
                        print(response)
        time.sleep(0.3)
        print('这一轮没票')
