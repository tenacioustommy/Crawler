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
login_url = 'https://passport.maoyan.com/login?pagesource=show'
ID = "272511"
target_url = f"https://show.maoyan.com/qqw#/ticket-level?id={ID}&modelStyle=0&_blank=true"
# ！！下面两个都是从头开始的0-based格子数
expected_time = [0]
# maoyan这个是反过来的，可以提前在大麦看好然后再反过来
expected_ticket = [1]
account = '13816140582'


class maoyan:
    def __init__(self):
        self.chrome_options = Options()

        # self.chrome_options.add_argument(
        #     "--headless")  # Run Chrome in headless mode
        self.chrome_options.accept_insecure_certs = True
        # self.chrome_options.add_argument(
        #     '--proxy-server=http://127.0.0.1:9090')
        self.chrome_options.add_experimental_option(
            "excludeSwitches", ["enable-automation"])
        self.chrome_options.add_experimental_option(
            'useAutomationExtension', False)
        self.chrome_options.add_argument(
            'user-agent="Mozilla/5.0 (iPod; U; CPU iPhone OS 2_1 like Mac OS X; ja-jp) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5F137 Safari/525.20"')
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
        # self.web.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
        #     "source": """
        #     Object.defineProperty(navigator, 'webdriver', {
        #     get: () => undefined
        #     })
        # """
        # })
        with open('D:\Computer Science\Python3\Crawler\project\stealth.min.js') as f:
            js = f.read()
        self.web.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
            "source": js
        })
        self.web.set_window_size(960, 1920)

    def get_cookie(self):
        self.web.get(login_url)
        # time.sleep(10)
        # print('10s内登陆完毕')
        time.sleep(1)
        phonenum = self.web.find_element(
            By.XPATH, '//*[@id="phoneNumInput"]')
        phonenum.clear()
        phonenum.send_keys(account)
        time.sleep(1)
        code = self.web.find_element(By.XPATH, '//*[@id="sendCodeBtnText"]')
        code.click()
        time.sleep(10)
        print('10s内登陆完毕')
        cookies = self.web.get_cookies()
        pickle.dump(cookies, open(f'maoyan{account}.pkl', "wb"))

    def login(self):
        self.web.get(target_url)
        cookies = pickle.load(open(f'maoyan{account}.pkl', 'rb'))
        for cookie in cookies:
            if cookie['domain'] != '.maoyan.com':
                continue
            cookie_dict = {
                'domain': cookie['domain'],  # 必须要有的, 否则就是假登录
                'name': cookie['name'],
                'path': '/',
                'value': cookie['value'],
                'expires': None
            }
            self.web.add_cookie(cookie_dict)
        self.web.refresh()

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
            (By.CLASS_NAME, 'show-item')))
        for eachtime in expected_time:
            expected = all_tags[eachtime]
            # 没合适时间了
            try:
                # 找得到showtag说明没合适时间直接下一个
                expected.find_element(By.CLASS_NAME, 'show-tag')
                continue
            except:
                for ticket in expected_ticket:
                    expected = all_tags[ticket]
                    try:
                        # 没合适票了,还在缺货状态,直接下一个
                        expected.find_element(
                            By.CLASS_NAME, 'show-tag')
                        continue
                    except:
                        # wait = WebDriverWait(self.web, 2)
                        # wait.until(EC.element_to_be_clickable(expected))
                        # time.sleep(0.05)
                        expected.click()
                        return True
        return False

    def rob_ticket(self):
        while True:
            try:
                self.web.get(target_url)
                # 选位置
                if self.choose_ticket():
                    # 选到了点击确认按钮
                    self.web.find_element(
                        By.XPATH, '//*[@id="app"]/div/div/div[3]/div[2]/div[2]').click()
                else:
                    continue
            # 选观演人
                # wait = WebDriverWait(self.web, 3)
                # element = wait.until(EC.visibility_of_element_located(
                #     (By.XPATH, '//*[@id="dmViewerBlock_DmViewerBlock"]/div[2]/div/div/div[2]/div[2]')))
                # element.click()
            # 拼命点击
                wait = WebDriverWait(self.web, 1)
                confirmbtn = wait.until(EC.element_to_be_clickable((
                    By.XPATH, '//*[@id="loading"]/div[1]/div[2]/div[2]/button')))
                confirmbtn.click()
                if self.isElementExist('//*[@id="CYRA_index0"]/div[3]/p/button/span'):
                    print('success,please pay immediately!!!')
                    return
            except:
                # 有任何问题直接返回
                pass


if __name__ == "__main__":
    ticket = maoyan()
    # 创建文件夹, 文件是否存在
    if not os.path.exists(f'maoyan{account}.pkl'):
        ticket.get_cookie()             # 没有文件的情况下, 登录一
    ticket.login()
    ticket.rob_ticket()

    time.sleep(30)
