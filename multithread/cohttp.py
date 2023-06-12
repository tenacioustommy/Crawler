import aiohttp
import asyncio
import aiofiles
import time
urls={
    'https://kr.shanghai-jiuxin.com/file/mmvv/20230316/0viqpart15l.jpg',
    'https://kr.shanghai-jiuxin.com/file/mmvv/20230316/10tdynxcxb4.jpg',
    'https://kr.shanghai-jiuxin.com/file/mmvv/20230316/qat4dnr3d2x.jpg'
    
}
async def aiodownload(url :str):
    name=url.rsplit('/',1)[1]
    #  有with，他帮你自动关闭
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            async with aiofiles.open(name,mode='wb' ) as f:
               await f.write(await resp.content.read()) 
    
async def main():
    tasks=[]
    for url in urls:
        tasks.append(asyncio.create_task(aiodownload(url)))
    
    await asyncio.wait(tasks)

if __name__=="__main__":
    t1=time.time()   
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(main())
    t2=time.time()
    print(t2-t1)