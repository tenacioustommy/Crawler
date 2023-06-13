# 用户上传-》转码，做处理-》切片处理
# 文件记录切片顺序 M3U8
# 抓视频
# 1.找m3u8
# 2.通过m3u8下载到ts
# 3.通过各种手段把ts文件合并为mp4
import requests
import re
import asyncio
import aiohttp
import aiofiles
from Crypto.Cipher import AES

url='https://91mjw.tv/vplay/MjM5ODM2Mi0xLTEw.html'
headurl='https://vod6.bdzybf7.com'
headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
}

async def download_ts(url,name,session :aiohttp.ClientSession):
    async with session.get(url) as resp:
        async with aiofiles.open('video/'+name,mode='wb') as f:
            await f.write(await resp.content.read())
    print(name+'done')   

async def aio_download():
    tasks=[]
    async with aiohttp.ClientSession() as session:
        async with aiofiles.open('video.m3u8',mode='r',encoding='utf-8') as f:            
            async for line in f:
                if line.startswith('#') or line=='\n':
                    continue
                name=line.rsplit('/')[-1].strip()
                ts_url=headurl+line.strip()
                task=asyncio.create_task(download_ts(ts_url,name,session))
                tasks.append(task)
            await asyncio.wait(tasks)

def get_key(url):
    resp=requests.get(url,headers=headers)
    return resp.text
async def dec_ts(name,key):
    aes = AES.new(key=key,IV=b'0000000000000000',mode=AES.MODE_CBC)
    async with aiofiles.open('video/'+name,mode='rb') as f1,\
                aiofiles.open('video/tmp_'+name,mode='wb') as f2:
        bs=await f1.read()
        await f2.write(aes.decrypt(bs))
    print(name+'tmpdone')

async def aio_dec(key):
    tasks=[]
    async with aiofiles.open('video.m3u8',mode='r',encoding='utf-8') as f:            
        async for line in f:
            if line.startswith('#') or line=='\n':
                continue
            name=line.rsplit('/')[-1].strip()
            task=asyncio.create_task(dec_ts(name,key))
            tasks.append(task)
        await asyncio.wait(tasks)
def merge_ts():
    with open('video.m3u8',mode='r',encoding='utf-8') as f1,\
            open('video.mp4',mode='ab')as f2:            
        for line in f1:
            if line.startswith('#') or line=='\n':
                continue
            name='video/tmp_'+line.rsplit('/')[-1].strip()
            with open(name,'rb') as f:   
                f2.write(f.read())
    print('done')
def main():
    # 1.获取第一层m3u8
    resp=requests.get(url,headers=headers)
    obj=re.compile(r'url=(?P<url>.*?)"')
    index_url=obj.search(resp.text).group('url')
    resp.close()
    # 2.获取第二层m3u8
    resp=requests.get(index_url,headers=headers)
    with open('index.m3u8',mode='wb') as f:
        f.write(resp.content)
    resp.close()
    with open('index.m3u8',mode='r',encoding='utf-8') as f:
        real_url=headurl+f.readlines()[-1].strip()
    real_resp=requests.get(real_url,headers=headers)
    with open('video.m3u8',mode='wb') as f:
        f.write(real_resp.content)
    real_resp.close()
    # 3.异步下载所有ts文件
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(aio_download())
    # 4.获取key
    key=get_key(headurl+"/20230609/j455MmLP/1500kb/hls/key.key")
    # 5.解密key,并写入tmpts
    asyncio.run(aio_dec(key))
    # 6.merge ts
    merge_ts()
    
if __name__=="__main__":
    main()
    