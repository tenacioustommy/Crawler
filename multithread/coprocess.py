import time
import asyncio
def test():
    # 这3秒啥也没干，线程处于阻塞状态，cpu不为我工作，还有input，requests.get
    time.sleep(3)
    # 协程：当程序遇见io，可以选择性切换到其他任务
    # 宏观上多个任务一起执行，多任务testtest

async def func1():
    print('nihao1')
    # 当程序出现同步操作，异步终止了
    # time.sleep(3)
    await asyncio.sleep(3)
    print('nihao2')
async def func2():
    print('nihao3')
    await asyncio.sleep(2)
    # time.sleep(2)
    print('nihao4')
async def func3():
    print('nihao5')
    await asyncio.sleep(4)
    # time.sleep(4)
    print('nihao6')
async def main():
    task=[
        asyncio.create_task(func1()),
        asyncio.create_task(func2()),
        asyncio.create_task(func3()),

    ]
    await asyncio.wait(task)


if __name__=='__main__':
    
    asyncio.run(main())
    # 协程对象
    # f1=func1()
    # f2=func2()
    # f3=func3()
    # task={
    #     f1,f2,f3
    # }
    # t1=time.time()
    # asyncio.run(asyncio.wait(task))
    # t2=time.time()
    # print(t2-t1)