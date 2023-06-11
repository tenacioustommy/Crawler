import requests
url="https://fanyi.baidu.com/sug"
query=input("what to search\n")
# 放在字典里传递data
data={
    "kw":query
}
response=requests.post(url,data=data)
print(response.json())
response.close()