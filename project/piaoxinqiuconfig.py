class Show:
    chengyixun = '64ecb6f83399ba000182403d'
    eratour = '62bd459099012d090948b51f'
    testhotshow='64d466eb7131660001a03ec2'
    liangyongqi='64eff97b700e36000179d3ef'


class User:
    # 配置文件
    def __init__(self,account,showid,alltime,times,price,num,access_token=''):
        self.showid = showid
        # 一共有几个时间段
        self.alltime = alltime
        # 你想抢那几个时间段按优先级排序,填写0-based index,为一个数组
        self.times = times
        # 目前只能抢一个票价，index是多少
        self.price = price
        # 多票价待维护
        # prices = [0, 1]
        # 一共需要几张
        self.num = num
        self.account = account
        self.access_token = access_token
        