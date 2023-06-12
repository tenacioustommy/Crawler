import requests
from lxml import etree
url="https://shanghai.zbj.com/search/service/?kw=saas&r=2"
resp=requests.get(url)
text=resp.text
if not resp.ok:
    print("text")
html=etree.HTML(resp.text)

divs=html.xpath("/html/body/div[2]/div/div/div[3]/div/div[4]/div/div[2]/div[1]/div")
for div in divs:
    price=div.xpath("./div/div[2]/div[1]/span/text()")
    print(price)