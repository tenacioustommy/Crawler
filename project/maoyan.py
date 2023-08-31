from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
import time
import pickle
import os

clickinternal = 0.2
account = '13816140582'
login_url = 'https://passport.maoyan.com/login?pagesource=show'
ID = "273034"
target_url = f"https://show.maoyan.com/qqw#/ticket-level?id={ID}&modelStyle=0&_blank=true"
# ！！从头开始的0-based格子数
expected_time = [0, 1]
available_time = 1
# maoyan这个是反过来的，可以提前在大麦看好然后再反过来
expected_ticket = [7, 6]
# 0：盯着一个抢，1：不停刷多种票类型
mode = 1
# mode=1时，每个事件抢几秒？
grabsec = 3
# num,需要提前填写观演人在猫眼上
num = 1


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
        self.web.set_window_size(720, 1920)

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
        pickle.dump(cookies, open(
            f'D:/Computer Science/Python3/Crawler/file/maoyan13816140582.pkl/maoyan{account}.pkl', "wb"))

    def login(self):
        self.web.get(target_url)
        cookies = pickle.load(open(
            f'D:/Computer Science/Python3/Crawler/file/maoyan13816140582.pkl/maoyan{account}.pkl', 'rb'))
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
        wait = WebDriverWait(self.web, 2, 0.1)
        all_tags = wait.until(EC.visibility_of_any_elements_located(
            (By.CLASS_NAME, 'show-item')))
        for eachtime in expected_time:
            expected = all_tags[eachtime]
            # 没合适时间了
            # try:
            #     # 找得到showtag说明没合适时间直接下一个
            #     expected.find_element(By.CLASS_NAME, 'show-tag')
            #     continue
            # except:
            # 猫眼有bug，所以直接点击日期
            if available_time > 1:
                expected.click()
                time.sleep(0.2)
                all_tags = wait.until(EC.visibility_of_all_elements_located(
                    (By.CLASS_NAME, 'show-item')))
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
                    if num > 1:
                        plusbtn = self.web.find_element(
                            By.XPATH, '//*[@id="app"]/div/div/div[3]/div[1]/div[2]/div/div[3]')
                        for _ in range(num-1):
                            plusbtn.click()
                    return True
        return False

    def rob_ticket(self):
        while True:
            try:
                self.web.get(target_url)
                # 选位置
                if self.choose_ticket():
                    # 选到了点击确认按钮,只要确认存在就一直点
                    while(self.isElementExist('//*[@id="app"]/div/div/div[3]/div[2]/div[2]')):
                        self.web.find_element(
                            By.XPATH, '//*[@id="app"]/div/div/div[3]/div[2]/div[2]').click()
                        time.sleep(0.3)
                else:
                    continue
                # 选观演人
                if num > 1:
                    wait = WebDriverWait(self.web, 2)
                    wait.until(EC.element_to_be_clickable(
                        (By.CLASS_NAME, 'wrapper__item__circle')))
                    elements = self.web.find_elements(
                        By.CLASS_NAME, 'wrapper__item__circle')
                    for ele in elements[1:]:
                        ele.click()
                # 拼命点击

                wait = WebDriverWait(self.web, 4)
                confirmbtn = wait.until(EC.visibility_of_element_located((
                    By.XPATH, '//*[@id="loading"]/div[1]/div[2]/div[2]/button')))
                if mode == 0:
                    # 拼命抢
                    while True:
                        # 代替了click，就不会因为跳出的东西影响，真的妙
                        confirmbtn.send_keys(Keys.ENTER)
                        # 点击成功
                        if self.isElementExist('//*[@id="CYRA_index0"]/div[3]/p/button/span'):
                            print('success,please pay immediately!!!')
                            return
                        time.sleep(0.2)
                elif mode == 1:
                    start = time.time()
                    while time.time() - start < grabsec:
                        confirmbtn.send_keys(Keys.ENTER)
                        if self.isElementExist('//*[@id="CYRA_index0"]/div[3]/p/button/span'):
                            print('success,please pay immediately!!!')
                            return
                        time.sleep(0.1)
            except:
                # 有任何问题直接返回
                pass


if __name__ == "__main__":
    ticket = maoyan()
    # 创建文件夹, 文件是否存在
    if not os.path.exists(f'D:/Computer Science/Python3/Crawler/file/maoyan13816140582.pkl/maoyan{account}.pkl'):
        ticket.get_cookie()             # 没有文件的情况下, 登录一
    ticket.login()
    ticket.rob_ticket()
