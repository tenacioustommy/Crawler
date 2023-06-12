from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import time

# 浏览器对象
web=Chrome()
web.get("http://www.lagou.com",)
# find element and click it
element=web.find_element_by_xpath("//*[@id=\"changeCityBox\"]/p[1]/a")
element.click()
time.sleep(1)
web.find_element_by_xpath('//*[@id="search_input"]').send_keys("python",Keys.ENTER)
# 提取数据
time.sleep(1)

list=web.find_elements_by_xpath('//*[@id="jobList"]/div[1]/div')
for li in list:
    # span/div/div[1]/a
    # job_name=li.find_element_by_xpath('.//div[1]/div[1]/span/div/div[1]/a').text       
    job_name=li.find_element_by_xpath('.//*[@id="openWinPostion"]').text
    job_price=li.find_element_by_xpath('.//*[@class="money__3Lkgq"]').text
    print(job_name, job_price)


