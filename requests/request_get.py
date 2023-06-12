import requests
query=input("who do you like\n")
url = f"https://www.google.com/search?q={query}"
headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
}
response=requests.get(url,headers=headers)
content=response.text
with open('output.txt', 'w',encoding="utf-8") as f:
    print(content,file=f)   
response.close()
