import requests
from bs4 import BeautifulSoup
headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
}
with open('output.txt', 'w',encoding="utf-8") as f:
    for start_num in range(0,250,25):
        response=requests.get(f"http://movie.douban.com/top250?start={start_num}",headers=headers)
        if not response.ok:
            print('fail')
        soup=BeautifulSoup(response.text,"html.parser")
        all_titles=soup.findAll("span",attrs={"class":"title"})
        for title in all_titles:
            str=title.string
            if '/' not in str:
                print(str, file=f)