# 先通过selenium登录获得cookie和token,注意之后就不要在重新登陆了,否则token失效
# 此程序目前只适用于无选座，无快递模式
from piaoxinqiuconfig import User, Show
import requests
import time
import datetime
import pickle
import os
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from multiprocessing import Process

# 该代码仍然有问题，会被黑号
login_url = 'https://m.piaoxingqiu.com/mine'
showid = Show.liangyongqi
# targettime还需要进一步测试,提前1h用其他测试选择时间
targetime = datetime.time(hour=11, minute=59, second=59, microsecond=0)
alltime = 1
# 需要抢票的config
targetme = User('13816140582', showid, alltime, [0], 0, 1, 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEtrwzAQhP_Lnn3Qw3rYx5SUBlIKoTn0VPRYE4NtBVkubUP-e2XUlJx63GG-2d25QDBLOu2mLkA7LcNQwTJjLPMFbP_9EDxCC49P-_dnqGBe7OZPlEwqowmiZ1SLmiktO1o3dfZl8hCG1bQ5vm0PWRmTO67RfgVrFKKzhHAq644QQhEtV76Ad7ZOOOmYY1wgWW3WU68UXCvAz3Mf8bUf8XZ4Jl_OGE0K_9IyL3ERTfqFqWy4ZrpRhHKeH_yaE47lwZI7YnQnM6X7kvL2QjZUcEUq-MA492GClpcGJ3M77PoDAAD__w.WnfvEfKp4hkzXgKds3ODMMpz2PhaXB5TuBVKnoeWqLYvYoCbzzoy34cs2NmIjYWELdnnbWZXQSF0e6pdnJ8XwxRY61MTjFig1dGHh88KtGZzUuYEFvWRkH75tWuDnLHXQm3-tR7wRqgvkNpYxuk1zhoVcEjRVqrHi_yHKfOJUzE')

target0 = User('13816140582', showid, alltime, [0], 0, 1, 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNp8kEtrwzAQhP_Lnn3Qw3rYx5SUBlIKoTn0VPRYE4NtBVkubUP-e2XUlJx63GG-2d25QDBLOu2mLkA7LcNQwTJjLPMFbP_9EDxCC49P-_dnqGBe7OZPlEwqowmiZ1SLmiktO1o3dfZl8hCG1bQ5vm0PWRmTO67RfgVrFKKzhHAq644QQhEtV76Ad7ZOOOmYY1wgWW3WU68UXCvAz3Mf8bUf8XZ4Jl_OGE0K_9IyL3ERTfqFqWy4ZrpRhHKeH_yaE47lwZI7YnQnM6X7kvL2QjZUcEUq-MA492GClpcGJ3M77PoDAAD__w.WnfvEfKp4hkzXgKds3ODMMpz2PhaXB5TuBVKnoeWqLYvYoCbzzoy34cs2NmIjYWELdnnbWZXQSF0e6pdnJ8XwxRY61MTjFig1dGHh88KtGZzUuYEFvWRkH75tWuDnLHXQm3-tR7wRqgvkNpYxuk1zhoVcEjRVqrHi_yHKfOJUzE')
target1 = User('13917786031', showid, alltime, [0], 3, 1, 'eyJ0eXAiOiJKV1QiLCJjdHkiOiJKV1QiLCJ6aXAiOiJERUYiLCJhbGciOiJSUzUxMiJ9.eNqEkMFqwzAQRP9lzz5IsiLJPqYkpNASCM2hpyJLK2KwpSDLJW3Iv1dGTempPe4wb2dnrxD0nE6P3gVo_TwMFcwTxjJfoes_H4JFaGG7e3p7hgqmuVv_iIIJqRVBtIyqFWdSCUd5w7Mvk4cwLKb18XVzyMqYzHFZbReQu5VxVhqUlglCCHWoUGMB_7F1BG4V4OXcR3zpR7wfnsn9GaNO4c8Ql0NMRJ2-YSqaWtWsllwSmgt-TAnHUrDsHTGak_bp95NyeiEbqqTkFbxjnPrgoeXlg17fD7t9AQAA__8.RJqSezHBuU03DLpfVKvXPCKSMIYIthInRBV77Ipg7q7d1TYK4FsX68FCcGlDCru2K-z_8Y6AuNOKgUJpY666efv0A0rccJuTDUMHgGsuWL4isLAv7yJ8mPwC1IVX1DZI6fp3ATIDoITguNSFKBeQUOR9UfXb8gy6ttcP0W6bGSM')

target2 = User("15801891894", showid, alltime, [4, 0], 2, 2)
target3 = User("15370603770", showid, alltime, [4, 0], 2, 2)
target4 = User('13761168614', showid, alltime, [1, 0], 1, 2)
target5 = User('13501832760', showid, alltime, [3, 4], 2, 1)
target6 = User('15388030946', showid, alltime, [0, 4], 0, 1)
target7 = User('13871938100', showid, alltime, [0, 1, 2, 3, 4, 5], 0, 1)
target8 = User('18321398578', showid, alltime, [0, 1, 2, 3, 4, 5], 2, 2)
target9 = User('15221280083', showid, alltime, [2], 2, 1)
target10 = User('15846218939', showid, alltime, [3], 2, 1)
target11 = User('18028992993', showid, alltime, [1], 3, 2)


class piaoxinqiu:
    def __init__(self, target: User):
        self.cookies = {
            'channel_id': '',
        }
        self.target = target
        # 每个演出时间的sessionid
        self.bizshowsessionids = []
        # 获取每个演出时间的seatplans
        self.seatPlans = []
        # self.login()
        # self.target.access_token = self.cookies["consistent_code"]
        response = self.get_user()
        if(response['statusCode'] != 200):
            print(response["comments"])
            os._exit(255)
        self.audienceids = response['data']
        # 提前搞好所有时间
        for i in range(self.target.alltime):
            self.bizshowsessionids.append(self.get_bizshowsessionid(i))
        # 随便选一个id来获得delivery
        self.delivery = self.get_delivery(self.bizshowsessionids[0])
        # 这个也需要提前搞好
        for i in range(self.target.alltime):
            self.seatPlans.append(self.get_Seat(self.bizshowsessionids[i]))

    def login(self):
        if not os.path.exists(f'D:\\Computer Science\\Python3\\Crawler\\file\\piaoxinqiu{self.target.account}.pkl'):
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

            time.sleep(2)
            web.find_element(
                By.CLASS_NAME, 'login-title').click()
            time.sleep(1)
            wait = WebDriverWait(web, 180)
            wait.until(EC.invisibility_of_element_located(
                (By.CLASS_NAME, 'button-color')))
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
                f'D:\\Computer Science\\Python3\\Crawler\\file\\piaoxinqiu{self.target.account}.pkl', "wb"))
            print('暂停程序获取token')
            time.sleep(30)
        # selenium获取的有session的cookie,添加进cookie
        self.cookies = pickle.load(open(
            f'D:\\Computer Science\\Python3\\Crawler\\file\\piaoxinqiu{self.target.account}.pkl', 'rb'))

    def get_bizshowsessionid(self, time=0):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/booking/{self.target.showid}?seatPickType=SUPPORT_NONE&selectedDate=&self.target.showid={self.target.showid}f&stdself.target.showid=',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            # 暂时固定
            'access-token': self.target.access_token,
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
            'showId': self.target.showid,
            'privilegeId': '',
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/show/{self.target.showid}/sessions_static_data',
            params=params,
            cookies=self.cookies,
            headers=headers,
        )
        # 选择时间
        return response.json()['data']['sessionVOs'][time]['bizShowSessionId']
    # 获得delivery方式

    def get_delivery(self, bizshowsessionid):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/package-order/pages/preload-ticket/preload-ticket?self.target.showid={self.target.showid}',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': self.target.access_token,
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'src': 'H5',
            'terminal-src': 'H5',
            'ver': '3.3.5',
        }

        params = {
            'bizShowSessionId': bizshowsessionid,
            'src': 'H5',
            'ver': '3.3.5',
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/pre_filed_session_rule/{self.target.showid}',
            params=params,
            cookies=self.cookies,
            headers=headers,
        )
        return response.json()['data']['deliveryMethodTypes'][0]
        # 获得价格表
        # 注意它返回的顺序是按照原顺序的

    def get_Seat(self, showsessionid):
        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/booking/{self.target.showid}?seatPickType=SUPPORT_NONE&selectedDate=&self.target.showid={self.target.showid}&stdself.target.showid=',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': self.target.access_token,
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
            'showId': self.target.showid,
            'sessionId': showsessionid,
            'bizSessionId': showsessionid,
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/show/{self.target.showid}/show_session/{showsessionid}/seat_plans_static_data',
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
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/booking/{self.target.showid}?seatPickType=SUPPORT_NONE&selectedDate=&self.target.showid={self.target.showid}&stdself.target.showid=',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': self.target.access_token,
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
            'showId': self.target.showid,
            'sessionId': showsessionid,
            'bizSessionId': showsessionid,
        }

        response = requests.get(
            f'https://m.piaoxingqiu.com/cyy_gatewayapi/show/pub/v3/show/{self.target.showid}/show_session/{showsessionid}/seat_plans_dynamic_data',
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
            'Pragma': 'no-cache',
            'Referer': f'https://m.piaoxingqiu.com/package-order/pages/preload-ticket/preload-ticket?self.target.showid={self.target.showid}',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': self.target.access_token,
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

    def create_order(self, seatPlan):
        permoney = int(seatPlan["originalPrice"])
        seatPlanid = seatPlan['seatPlanId']
        bizshowsessionid = seatPlan["showSessionId"]

        headers = {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Origin': 'https://m.piaoxingqiu.com',
            'Pragma': 'no-cache',
            # 'Referer': 'https://m.piaoxingqiu.com/order/confirm?cpId=f5358d2de1bb04966781d309909e2833',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'access-token': self.target.access_token,
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
                'totalAmount': permoney*self.target.num,
                'payAmount': permoney*self.target.num,
            },
            'priceItemParam': [
                {
                    'applyTickets': [],
                    'priceItemName': '票款总额',
                    'priceItemVal': permoney*self.target.num,
                    'priceItemType': 'TICKET_FEE',
                    'priceItemSpecies': 'SEAT_PLAN',
                    'direction': 'INCREASE',
                    'priceDisplay': f'￥{permoney*self.target.num}',
                },
            ],
            'items': [
                {
                    'skus': [
                        {
                            'seatPlanId': seatPlanid,
                            'sessionId': bizshowsessionid,
                            'showId': self.target.showid,
                            'skuId': seatPlanid,
                            'skuType': 'SINGLE',
                            'ticketPrice': permoney,
                            'qty': self.target.num,
                            'deliverMethod': self.delivery,
                        },
                    ],
                    'spu': {
                        # self.target.showid
                        'id': self.target.showid,
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
        for i in range(self.target.num):
            json_data['one2oneAudiences'].append({
                'audienceId': self.audienceids[i]['id'],
                'sessionId': bizshowsessionid,
            })
        # 必须增加一个定点提交
        # 预留1s提前发请求,服务器会延迟一秒

        now = datetime.datetime.now().time()
        flag = True
        while(now < targetime):
            if flag:
                flag = False
                print(self.target.account, now, "准备就绪")
            # 实际sleep了0.015
            time.sleep(0.01)
            now = datetime.datetime.now().time()
        # print(now)
        response = requests.post(
            'https://m.piaoxingqiu.com/cyy_gatewayapi/trade/buyer/order/v3/create_order',
            cookies=self.cookies,
            headers=headers,
            json=json_data,
        )
        # 平均耗时0.7s
        # now = datetime.datetime.now().time()
        # print(now)
        return response.json()

    def get_ticket(self):
        while True:
            for pertime in self.target.times:
                bizshowsessionid = self.bizshowsessionids[pertime]
                avails = self.get_availablity(bizshowsessionid)
                for avail in avails:
                    # for price in prices:
                    # 有票并且是想要的票,专一抢票模式
                    if avail['seatPlanId'] == self.seatPlans[pertime][self.target.price]['seatPlanId'] and avail['canBuyCount'] >= self.target.num:
                        seatPlan = self.seatPlans[pertime][self.target.price]
                        response = self.create_order(seatPlan)
                        if(response['statusCode'] == 200):
                            print(self.target.account, " success")
                            with open('D:\\Computer Science\\Python3\\Crawler\\file\\success.txt', 'a', encoding='utf-8') as f:
                                f.write(self.target.account+" success\n")
                            return True
                        else:
                            print(self.target.account, response)
                            break
        #  时间间隔

            time.sleep(0.5)
            print(self.target.account, "fail")


# 主程序一共就两次get请求，必然可以抢到
if __name__ == "__main__":

    # testticket = piaoxinqiu(targetme)
    # testticket.get_ticket()

    # ticket0 = piaoxinqiu(target0)
    ticket1 = piaoxinqiu(target1)
    # ticket2 = piaoxinqiu(target2)
    # ticket3 = piaoxinqiu(target3)
    # ticket4 = piaoxinqiu(target4)
    # ticket5 = piaoxinqiu(target5)
    # ticket6 = piaoxinqiu(target6)
    # ticket7 = piaoxinqiu(target7)
    # ticket8 = piaoxinqiu(target8)
    # ticket9 = piaoxinqiu(target9)
    # ticket10 = piaoxinqiu(target10)
    # ticket11 = piaoxinqiu(target11)

    # process0 = Process(target=ticket0.get_ticket)
    process1 = Process(target=ticket1.get_ticket)
    # process2 = Process(target=ticket2.get_ticket)
    # process3 = Process(target=ticket3.get_ticket)
    # process4 = Process(target=ticket4.get_ticket)
    # process5 = Process(target=ticket5.get_ticket)
    # process6 = Process(target=ticket6.get_ticket)
    # process7 = Process(target=ticket7.get_ticket)
    # process8 = Process(target=ticket8.get_ticket)
    # process9 = Process(target=ticket9.get_ticket)
    # process10 = Process(target=ticket10.get_ticket)
    # process11 = Process(target=ticket11.get_ticket)

    # process0.start()
    process1.start()
    # process2.start()
    # process3.start()
    # process4.start()
    # process5.start()
    # process6.start()
    # process7.start()
    # process8.start()
    # process9.start()
    # process10.start()
    # process11.start()
