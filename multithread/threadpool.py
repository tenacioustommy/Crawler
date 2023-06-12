# 线程池，一次性开放一些线程，用户直接给线程池任务，调度交给线程池
from concurrent.futures import ThreadPoolExecutor,ProcessPoolExecutor

def fn(name):
    for i in range(1000):
        print(name,i)

if __name__=='__main__':
    # create thread pool with 50 threads
    with ThreadPoolExecutor(50) as t:
        # 你的任务,eg100个,51个时等前面有空闲了直接给哪个线程，一共只有50个线程
        for i in range(100):
            t.submit(fn,name=f"thread{i}")
    
    # with 外的守护线程等线程池结束后才运行
    print('123')