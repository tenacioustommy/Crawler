from multiprocessing import Process
# 多进程，更费资源
def func():
    for i in range(10000):
        print('zijincheng',i)

if __name__ =="__main__":
    p=Process(target=func)
    p.start()
    for i in range(10000):
        print('zhujincheng',i)