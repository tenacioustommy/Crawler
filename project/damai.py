from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time
import pickle
import os

clickinternal = 0.2
login_url = 'https://passport.damai.cn/login?ru=https%3A%2F%2Fwww.damai.cn%2F'
ID = "733071713999"
target_url = f"https://m.damai.cn/shows/item.html?itemId={ID}&from=def&sqm=dianying.h5.unknown.value&spm=a2o71.project.0.center"
# ！！下面两个都是从头开始的0-based格子数
expected_time = [0]
expected_ticket = [1, 2, 3]
account = '13816140582'
pwd = 'hzh475601'


class damai:
    def __init__(self):
        self.chrome_options = Options()
        # self.chrome_options.add_argument(
        #     "--headless")  # Run Chrome in headless mode
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
        self.web.set_window_size(960, 1920)

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
        pickle.dump(cookies, open(f'damai{account}.pkl', "wb"))

    def login(self):
        self.web.get(target_url)
        cookies = pickle.load(open(f'damai{account}.pkl', 'rb'))
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
        wait = WebDriverWait(self.web, 1)
        all_tags = wait.until(EC.visibility_of_any_elements_located(
            (By.CLASS_NAME, 'bui-dm-sku-card-item-box')))

        for eachtime in expected_time:
            expected = all_tags[eachtime]
            # 没合适时间了
            timeele = expected.find_element(
                By.CLASS_NAME, 'item-tag-outer')
            if timeele.text == '无票':
                continue
            else:
                wait = WebDriverWait(self.web, 2)
                wait.until(EC.element_to_be_clickable(timeele))
                timeele.click()
                for ticket in expected_ticket:
                    expected = all_tags[ticket]
                    try:
                        # 没合适票了,还在预约状态或缺货状态
                        expected.find_element(
                            By.CLASS_NAME, 'item-tag-outer')
                    except:
                        wait = WebDriverWait(self.web, 2)
                        wait.until(EC.element_to_be_clickable(expected))
                        # time.sleep(0.05)
                        expected.click()
                        return True
        return False

    def rob_ticket(self):
        while True:
            try:
                self.web.get(target_url)
                # 不管三七二十一直接点
                wait = WebDriverWait(self.web, 3)
                buybutton = wait.until(EC.element_to_be_clickable(
                    (By.CLASS_NAME, "buy__button__text")))
                # if buybutton.text != "立即预订":
                #     print(buybutton.text)
                #     continue
                time.sleep(0.15)
                print(buybutton.text)
                buybutton.click()
                # 选位置
                if self.choose_ticket():
                    # 选到了点击确认按钮
                    self.web.find_element(
                        By.XPATH, '/html/body/div[6]/div[2]/div/div/div/div/div[4]/div[2]/div[2]').click()
                else:
                    continue
            # 选观演人
                wait = WebDriverWait(self.web, 3)
                element = wait.until(EC.visibility_of_element_located(
                    (By.XPATH, '//*[@id="dmViewerBlock_DmViewerBlock"]/div[2]/div/div/div[2]/div[2]')))
                element.click()
            # 拼命点击
                wait = WebDriverWait(self.web, 3)
                confirmbtn = wait.until(EC.element_to_be_clickable((
                    By.XPATH, '//*[@id="dmOrderSubmitBlock_DmOrderSubmitBlock"]/div[2]/div/div[2]/div[3]/div[2]/span')))
                while 1:
                    confirmbtn.click()
                    if self.isElementExist('//*[@id="dmOrderSubmitBlock_DmOrderSubmitBlock"]/div[2]/div/div[2]/div[3]/div[2]/span') == False:
                        return
                    # time.sleep(0.1)
            except:
                # 滑块处理
                # if self.isElementExist('//*[@id="nc_1_n1z"]'):
                # /html/body/div[6]/iframe
                # btn = self.web.find_element(
                #     By.XPATH, '//*[@id="nc_1_n1z"]')
                # area = self.web.find_element(
                #     By.XPATH, '//*[@id="nc_1__scale_text"]/span')
                # ActionChains(self.web).drag_and_drop_by_offset(
                #     btn, area.size['width'], area.size["height"]).perform()
                # 有任何问题直接返回
                pass


if __name__ == "__main__":
    ticket = damai()
    # 创建文件夹, 文件是否存在
    if not os.path.exists(f'damai{account}.pkl'):
        ticket.get_cookie()             # 没有文件的情况下, 登录一
    ticket.login()
    ticket.rob_ticket()

    time.sleep(30)
