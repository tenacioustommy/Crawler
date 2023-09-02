from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time
from datetime import datetime
from threading import Timer
import pickle
import os

clickinternal = 0.2
account = '13816140582'
pwd = 'hzh475601'
login_url = 'https://passport.damai.cn/login?ru=https%3A%2F%2Fwww.damai.cn%2F'
# ID = "734807675057"
ID = '733071713999'
target_url = f"https://m.damai.cn/shows/item.html?itemId={ID}&from=def&sqm=dianying.h5.unknown.value&spm=a2o71.project.0.center"
# ！！下面两个都是从头开始的0-based格子数
expected_time = [0, 1]
expected_ticket = [2]
# num,需要提前填写观演人在猫眼上,只保留本次观演的，其他全部删掉！！
num = 1


class damai:
    def __init__(self):
        self.chrome_options = Options()
        # self.chrome_options.add_argument(
        #     "--headless")  # Run Chrome in headless mode
        self.chrome_options.add_experimental_option(
            "excludeSwitches", ["enable-automation"])
        self.chrome_options.add_experimental_option(
            'useAutomationExtension', False)
        # self.chrome_options.add_argument(
        #     'user-agent="Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; ja-jp) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F137 Safari/525.20"')
        self.chrome_options.add_argument("--no-sandbox")
        self.chrome_options.add_argument("--disable-dev-shm-usage")
        self.chrome_options.add_argument("--disable-gpu")
        self.chrome_options.add_argument("--disable-extensions")
        self.chrome_options.add_argument(
            "--disable-blink-features=AutomationControlled")
        self.chrome_options.add_argument(
            "--disable-blink-features=AutomationControlledInHeadlessMode")
        self.chrome_options.add_argument("--disable-logging")
        self.chrome_options.add_argument("--disable-infobars")
        self.chrome_options.add_argument("--disable-notifications")
        self.chrome_options.add_argument("--disable-popup-blocking")
        self.chrome_options.add_argument("--disable-web-security")
        self.chrome_options.add_argument(
            "--disable-features=CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process,NetworkService,VizDisplayCompositor")
        self.web = Chrome(options=self.chrome_options)
        self.web.set_window_size(720, 1920)

    def get_cookie(self):
        self.web.get(login_url)
        time.sleep(1)
        # 恶心的iframe
        iframe = self.web.find_element(
            By.XPATH, '//*[@id="alibaba-login-box"]')
        self.web.switch_to.frame(iframe)
        phonenum = self.web.find_element(
            By.XPATH, '//*[@id="fm-login-id"]')
        phonenum.clear()
        phonenum.send_keys(account)
        password = self.web.find_element(
            By.XPATH, '//*[@id="fm-login-password"]')
        password.clear()
        password.send_keys(pwd)
        login = self.web.find_element(
            By.XPATH, '//*[@id="login-form"]/div[4]/button')
        login.click()
        cookies = self.web.get_cookies()
        pickle.dump(cookies, open(f'./file/damai{account}.pkl', "wb"))

    def login(self):
        self.web.get(target_url)
        cookies = pickle.load(open(f'./file/damai{account}.pkl', 'rb'))
        # print(cookies)
        for cookie in cookies:
            cookie_dict = {
                'domain': '.damai.cn',  # 必须要有的, 否则就是假登录
                'name': cookie.get('name'),
                'value': cookie.get('value')
            }
            self.web.add_cookie(cookie_dict)
        self.web.refresh()
        # time.sleep(1)

    def isElementExist(self, element):
        flag = True
        try:
            self.web.find_element(By.XPATH, element)
            return flag
        except:
            flag = False
            return flag

    def choose_ticket(self):
        wait = WebDriverWait(self.web,  2, 0.1)
        all_tags = wait.until(EC.visibility_of_any_elements_located(
            (By.CLASS_NAME, 'item-text')))

        for eachtime in expected_time:
            expected = all_tags[eachtime]
            # # 没合适时间了
            # try:
            #     timeele = expected.find_element(
            #         By.CLASS_NAME, 'item-tag-outer')
            #     if timeele.text == '无票':
            #         continue

            # except:
            # 点击合适时间
            wait = WebDriverWait(self.web, 1, 0.1)
            wait.until(EC.element_to_be_clickable(expected))
            expected.click()
            time.sleep(0.2)
            all_tags = self.web.find_elements(By.CLASS_NAME, 'item-text')
            for ticket in expected_ticket:
                expected = all_tags[ticket]
                try:
                    # 没合适票了,还在预约状态或缺货状态
                    expected.find_element(
                        By.CLASS_NAME, 'item-tag-outer')
                    # raise Exception("test")
                except:
                    # wait = WebDriverWait(self.web, 2)
                    # wait.until(EC.element_to_be_clickable(expected))
                    # time.sleep(0.1)
                    expected.click()
                    # 选人
                    if num > 1:
                        wait = WebDriverWait(self.web,  1, 0.1)
                        plusbtn = wait.until(EC.element_to_be_clickable(
                            (By.CLASS_NAME, 'plus-enable')))
                        for _ in range(num-1):
                            plusbtn.click()
                    return True
        return False

    def rob_ticket(self):
        while True:
            try:
                self.web.get(target_url)
                # 不管三七二十一直接点
                wait = WebDriverWait(self.web,  1, 0.1)
                buybutton = wait.until(EC.element_to_be_clickable(
                    (By.CLASS_NAME, "buy__button__text")))
                time.sleep(0.1)
                buybutton.click()
                # 选位置
                if self.choose_ticket():
                    # 选到了点击确认按钮
                    self.web.find_element(
                        By.XPATH, '/html/body/div[6]/div[2]/div/div/div/div/div[4]/div[2]/div[2]').click()
                else:
                    continue
            # 选观演人
                wait = WebDriverWait(self.web,  2, 0.1)
                wait.until(EC.element_to_be_clickable(
                    (By.CLASS_NAME, 'icondanxuan-weixuan_')))
                elements = self.web.find_elements(
                    By.CLASS_NAME, "icondanxuan-weixuan_")
                for ele in elements:
                    ele.click()

            # 拼命点击
                wait = WebDriverWait(self.web,  1, 0.1)
                confirmbtn = wait.until(EC.element_to_be_clickable((
                    By.XPATH, '//*[@id="dmOrderSubmitBlock_DmOrderSubmitBlock"]/div[2]/div/div[2]/div[3]/div[2]/span')))
                while True:
                    confirmbtn.click()
                    if self.isElementExist('//*[@id="dmOrderSubmitBlock_DmOrderSubmitBlock"]/div[2]/div/div[2]/div[3]/div[2]/span') == False:
                        return
                    time.sleep(0.2)
            except:
                # 有任何问题直接返回
                # time.sleep(0.2)
                pass
                # 滑块处理
                # if self.isElementExist('//*[@id="nc_1_n1z"]'):
                # /html/body/div[6]/iframe
                # btn = self.web.find_element(
                #     By.XPATH, '//*[@id="nc_1_n1z"]')
                # area = self.web.find_element(
                #     By.XPATH, '//*[@id="nc_1__scale_text"]/span')
                # ActionChains(self.web).drag_and_drop_by_offset(
                #     btn, area.size['width'], area.size["height"]).perform()


if __name__ == "__main__":
    ticket = damai()
    # 创建文件夹, 文件是否存在
    if not os.path.exists(f'./file/damai{account}.pkl'):
        ticket.get_cookie()             # 没有文件的情况下, 登录一
    ticket.login()
    # while datetime.now().strftime("%H:%M:%S") < starttime:
    ticket.rob_ticket()
