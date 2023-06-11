from bs4 import BeautifulSoup
import requests
import time
url="https://www.umei.cc/meinvtupian/waiguomeinv/oumeimeinv.htm"
response=requests.get(url)
response.encoding="utf-8"
content=response.text
if not response.ok:
    print(content)
page=BeautifulSoup(content,"html.parser")
# 第一次缩小范围
piclist=page.find("div",class_="pic-list").find_all("div",class_="picbox")
i=1
for pic in piclist:
    a=pic.find("a")

    # find标签，get里面的属性
    childurl="https://www.umei.cc"+a.get("href")
    chdresponse=requests.get(childurl)
    chdresponse.encoding="utf-8"
    chdtext=chdresponse.text
    chdpage=BeautifulSoup(chdtext,"html.parser")
    p=chdpage.find("div", class_="big-pic")
    img=p.find("img")
    src=img.get("src")
    img_response=requests.get(src)
    img_name=f"{i}"+".jpg"
    i+=1
    # 图片写入文件
    with open("img/"+img_name,mode="wb") as f:
        f.write(img_response.content)
    print("over!",img_name)
    # time.sleep(0.3)
    chdresponse.close()