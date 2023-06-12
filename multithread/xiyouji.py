import requests
import asyncio
import aiohttp
import json
import aiofiles
headers={
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
}
async def aiodownload(cid,b_id,title):
    data={
        "book_id":f"{b_id}",
        "cid":f"{b_id}|{cid}",
        "need_bookinfo":1
    }
    data=json.dumps(data)
    chapterurl=f'https://dushu.baidu.com/api/pc/getChapterContent?data={data}'
    async with aiohttp.ClientSession() as session:
        async with session.get(chapterurl) as resp:
            dic=await resp.json()
            async with aiofiles.open(title,'w',encoding='utf-8') as f:
                await f.write(dic['data']['novel']['content'])
            


async def geCatalog(url,b_id):
    resp=requests.get(url,headers=headers)
    tasks=[]
    dic=resp.json()
    for item in dic['data']['novel']['items']:
        title = item['title']
        cid=item['cid']
        tasks.append(aiodownload(cid,b_id,title))

    await asyncio.wait(tasks)
    
if __name__=="__main__":
    b_id="4306063500"
    url='https://dushu.baidu.com/api/pc/getCatalog?data={"book_id":"'+b_id+'"}'
    asyncio.run(geCatalog(url,b_id))