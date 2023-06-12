from selenium.webdriver import Chrome
from example.chaojiying import Chaojiying_Client
import time
web=Chrome()
web.get("https://www.chaojiying.com/user/login/")

img=web.find_element_by_xpath('/html/body/div[3]/div/div[3]/div[1]/form/div/img').screen_to_png
chaojiying = Chaojiying_Client('tenacious', 'hzh475601', '949729')
dic=chaojiying.PostPic(img, 1902)	
verify_code=dic["pic_str"]
web.find_element_by_xpath('/html/body/div[3]/div/div[3]/div[1]/form/p[1]/input').send_keys('tenacious')
web.find_element_by_xpath('/html/body/div[3]/div/div[3]/div[1]/form/p[2]/input').send_keys('hzh475601')
web.find_element_by_xpath('/html/body/div[3]/div/div[3]/div[1]/form/p[3]/input').send_keys(verify_code)
web.find_element_by_xpath('/html/body/div[3]/div/div[3]/div[1]/form/p[4]/input').click()
time.sleep(5)