from selenium.webdriver import Chrome
from selenium.webdriver.common.keys import Keys
import time

# 浏览器对象
web=Chrome()
web.get("http://www.lagou.com")
# find element and click it
element=web.find_element_by_xpath("//*[@id=\"changeCityBox\"]/p[1]/a")
element.click()
time.sleep(1)
web.find_element_by_xpath('//*[@id="search_input"]').send_keys("python",Keys.ENTER)
# 提取数据
time.sleep(1)
list=web.find_elements_by_xpath('//*[@id="jobList"]/div[1]/div')
for li in list:
    li.find_element_by_xpath('.//*[@id="openWinPostion"]').click()
    # 最后一个窗口
    web.switch_to_window(web.window_handles[-1])
    job_detail=web.find_element_by_xpath('//*[@id="job_detail"]/dd[2]/div').text
    print(job_detail)
    web.close()
    web.switch_to_window(web.window_handles[0])
    time.sleep(1)