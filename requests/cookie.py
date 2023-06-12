import requests
# 会话,有上下文
session=requests.session()

url="https://www.pearvideo.com/video_1735633"
contId=url.split("_")[1]
videourl=f"https://www.pearvideo.com/videoStatus.jsp?contId={contId}&mrd=0.11676275263507696"
headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Referer":url
}
resp=requests.get(videourl,headers=headers)
dic=resp.json()

srcurl=dic['videoInfo']['videos']['srcUrl']
systemTime=dic['systemTime']
srcurl=srcurl.replace(systemTime,f"cont-{contId}")
with open("a.mp4","wb") as f:
    f.write(requests.get(srcurl).content)