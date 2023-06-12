# 进程是资源单位
# 每个进程至少有一个线程
from threading import Thread

def func(name):
    for i in range(1000):
        print(name,i)
# differentiate between when the script is being run as the 
# main program and when it is being imported as a module.
if __name__=='__main__':
#   给线程安排任务
# 给传参必须是元组
    t1=Thread(target=func,args=('asd',))
    t1.start()
    t2=Thread(target=func,args=('fgh',))
#   让进程可以运行了,什么时候执行由cpu决定
    t2.start()
    # for i in range(1000):
    #    print('main',i) 
    #    second method
class Mythread(Thread):
    def run(self):
        for i in range(1000):
            print('zixiancheng',i)
if __name__=='__main__':
#   给线程安排任务
    t=Mythread()
#   注意run就是单线程了，一定是start
    t.start()
    for i in range(1000):
       print('main',i)    

