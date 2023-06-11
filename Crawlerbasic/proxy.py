import requests
# 163.177.106.4:8001
proxies={
  "https":"163.177.106.4:8001"
}
resp=requests.get("http://www.baidu.com",proxies=proxies)
resp.encoding="utf-8"
print(resp.text)