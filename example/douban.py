import re
import requests
import csv
headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
}
for i in range(0,250,25):
    url=f"https://movie.douban.com/top250?start={i}"
    response=requests.get(url,headers=headers)
    content=response.text
    if not response.ok:
        print(content)
    obj=re.compile(r"<li>.*?<span class=\"title\">(?P<name>.*?)"
                r"</span>.*?<p class=\"\">.*?<br>(?P<year>.*?)&nbsp"
                r".*?<span class=\"rating_num\" property=\"v:average\">(?P<score>.*?)</span>"
                r".*?<span>(?P<num>.*?)人评价</span>",re.S)
    iter=obj.finditer(content)
    with open('douban.csv', 'a+',encoding="utf-8",newline="") as f:
        csvwriter=csv.writer(f)
        for it in iter:
            dic=it.groupdict()
            dic["year"]=dic["year"].strip()
            csvwriter.writerow(dic.values())
        f.close()
response.close()