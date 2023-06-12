from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select
import time
opt=Options()
opt.add_argument("--headless")
opt.add_argument('--disable-gpu')
# https="163.177.106.4:8001"
# opt.add_argument(f'--proxy-server=https://{https}')
web=Chrome(options=opt)
web.get('https://www.endata.com.cn/BoxOffice/BO/Year/index.html')
# locate 下拉列表
selel=web.find_element_by_xpath('//*[@id="OptionDate"]')
sel=Select(selel)
for i in range(len(sel.options)):
    # 按索引切换 
    sel.select_by_index(i)
    time.sleep(1)
    table=web.find_element_by_xpath('//*[@id="TableList"]/table')
    print(table.text)
