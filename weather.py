from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
import time
import requests
url='https://www.meteoblue.com/en/weather/14-days'
opt=Options()
opt.add_argument("--headless")
opt.add_argument('--disable-gpu')
web=Chrome(options=opt)
web.get(url)
# click accept cookie
web.find_element_by_xpath('//*[@id="gdpr_form"]/div/input').click()
# input the mountain you want to search
name=input("input the mountain in pingyin,except shan character\n")
# name='zhagana'
province=input('input the region of the place in pingyin\n')
# province='gansu'
ismountain=input("is it a mountain(1 or 0)?\n")
web.find_element_by_xpath('//*[@id="gls"]').send_keys(name)
web.find_element_by_xpath('//*[@id="gls"]').click()
time.sleep(1)
# get total page
pagelist=web.find_elements_by_xpath('//*[@id="locationform"]/div/div[1]/span/span')
if(len(pagelist)==0):
    num=1   
else:
    num=pagelist[-2].text
# click how many nexts,at most read 4 pages and don't consider mountain with repeated name
steps=min(int(num),4)
for i in range(steps):
    # get all things on this page
    mountainlist=web.find_elements_by_xpath('//*[@id="locationform"]/div/div[1]/table/tr')
    flag=False
    # remove header
    mountainlist=mountainlist[1:]
    for mountain in mountainlist:
        element=mountain.find_element_by_xpath('./td[2]/div/div[1]')  
        extratext=mountain.find_element_by_xpath('./td[2]/div/div[2]/span').get_attribute("class")   
        region=mountain.find_element_by_xpath('./td[3]').text.lower()
        if (extratext=="mountain" or int(ismountain)==0 )and (region=='' or region==province.lower()):
            # target found
            flag=True
            element.click()
            time.sleep(2)
            imgele=web.find_element_by_xpath('//*[@id="chart_download"]')
            imgsrc=imgele.get_attribute('href')
            imgresp=requests.get(imgsrc)
            with open(name+'.jpg','wb') as f:
                f.write(imgresp.content)
            print("success!")
            break
    # not found, go to next page
    if(flag):
        break
    if(i!=steps-1):
        pagelist[-1].click()
        time.sleep(2)
        pagelist=web.find_elements_by_xpath('//*[@id="locationform"]/div/div[1]/span/span')
