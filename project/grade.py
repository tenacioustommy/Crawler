from selenium.webdriver import Chrome
import requests
who=input("search whose score?\n")
# who='hzh'
semester=input("which semester,all then input 0\n")
# semester='2'
stunum=input('input your student num\n')
# stunum='522031910416'

url=f"https://i.sjtu.edu.cn/cjcx/cjcx_cxXsgrcj.html?doType=query&gnmkdm=N305005&su={stunum}"
cookie={
    'zzk':'_ga=GA1.3.1486342746.1672542996; Qs_lvt_374225=1685606315; Qs_pv_374225=1431285753950116400%2C1991039987302059800%2C706556902655630500%2C3205909282122147000; JSESSIONID=97C7A52DE1D625BDC724E38D9358CE6F; kc@i.sjtu.edu.cn=ffffffff097f1c2845525d5f4f58455e445a4a423660',
    'hzh':'_ga=GA1.3.714695658.1676795832; kc@i.sjtu.edu.cn=ffffffff097f1c5045525d5f4f58455e445a4a423660; PPA_CI=0bfd4bcf9797c66ea21b11cf0beaab14; JSESSIONID=4297EE0C1E99C76538B450EE42176B3D'
}

headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Cookie": cookie[who]
}
semes={
    '0':'',
    '1':'3',
    '2':'12',
    '3':'16',
}
data={
    'xnm': '2022',
    'xqm': semes[semester],
    'kcbj': '',
    '_search': 'false',
    'nd': '1686483506848',
    'queryModel.showCount': '15',
    'queryModel.currentPage': '1',
    'queryModel.sortName': '',
    'queryModel.sortOrder': 'asc',
    'time': '0',
}
resp=requests.post(url,headers=headers,data=data)
print(resp.text)
courselist=resp.json()['items']
for course in courselist:
    name=course['kcmc']
    score=course['bfzcj']
    print(name,':',score)