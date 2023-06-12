from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
option=Options()
option.add_argument('--disable-blink-features=AutomationControlled')
web=Chrome(options=option)
web.get('https://kyfw.12306.cn/otn/resources/login.html')

