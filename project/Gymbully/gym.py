import requests
import execjs
import os
from datetime import date,datetime,timedelta
# 默认不筛选具体场地

# time从几点开始填几点，例如8点到9点，填8,24小时制
class config:
    def __init__(self,venue,name,date,time):
        self.fieldtype=0
        self.venueid=0
        self.venue=venue
        self.name=name
        self.date=date.strftime("%Y-%m-%d")
        self.week=date.weekday()+1
        # time=0表示不筛选时间
        self.time=time
        # 计算开始时间和结束时间
        start_time = datetime.strptime(f"{time}:00", "%H:%M")
        end_time = start_time + timedelta(hours=1)
        # 格式化时间
        start_time_str = start_time.strftime("%H:%M")
        end_time_str = end_time.strftime("%H:%M")
        self.schedule=f"{start_time_str}-{end_time_str}"
        self.price=0
        self.tensity=0
        self.fieldname=""
        self.fieldid=0
        self.tenSity=""
class gym:
    def __init__(self,config, username=0, password=0):
        self.username = username
        self.password = password
        # 获取当前Python文件的目录
        self.current_dir = os.path.dirname(os.path.abspath(__file__))
        self.cookies = {
            '_ga': 'GA1.3.1315508667.1697032069',
            '_gid': 'GA1.3.1996120587.1710685337',
            '_ga_QP6YR9D8CK': 'GS1.3.1710730533.15.0.1710730533.0.0.0',
            'NSC_tqpsut.tkuv.fev.do': 'ffffffff097f1cec45525d5f4f58455e445a4a4229a0',
            'JSESSIONID': '33f578d4-1d44-43c3-b9da-6971f7207fad',
        }
        self.config=config
          
    def login(self):
        pass
    def get_venue_id(self):
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://sports.sjtu.edu.cn',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        data = {
            'pageSize': '8',
            'pageNum': '1',
            'venueName': '',
            'flag': '0',
        }

        response = requests.post('https://sports.sjtu.edu.cn/manage/venue/list', cookies=self.cookies, headers=headers, data=data)
        if response.json()["code"] == 0:
            for item in response.json()["rows"]:
                if item["venueName"]==self.config.venue:
                    self.config.venueid=item["venueId"]
                    return True
            print("请检查输入的场馆是否正确")
        return False
    # 获取某场馆的id信息,一次运行一次就行
    def getinfo(self):
        self.get_venue_id()
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://sports.sjtu.edu.cn',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        # 场馆id
        data = {
            'id': self.config.venueid,
        }
        response = requests.post('https://sports.sjtu.edu.cn/manage/venue/queryVenueById', cookies=self.cookies, headers=headers, data=data)
        if response.json()["code"] == 0:
            for item in response.json()["data"]["motionTypes"]:
                if item["name"]==self.config.name:
                    self.config.fieldtype=item["id"]
                    return True
            if(self.config.fieldtype==0):
                print("请检查输入的名字是否正确")
                return False
        else:
            print(response.text)
            return False
        
    # 获得符合日期的所有信息
    # TODO,目前只能单日查询
    def get_certain_info(self):
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json;charset=UTF-8',
            'Origin': 'https://sports.sjtu.edu.cn',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        json_data = {
            'fieldType': self.config.fieldtype,
            'date': self.config.date,
            'venueId': self.config.venueid,
        }

        response = requests.post(
            'https://sports.sjtu.edu.cn/manage/fieldDetail/queryFieldSituation',
            cookies=self.cookies,
            headers=headers,
            json=json_data,
        )
        if response.json()["code"] == 0:
            return response.json()["data"]
        return False
    
    def getOrderid(self,venTypeId, venueId, fieldType, scheduleDate, week, venueprice, scheduleTime, subSitename, subSiteId, tensity, tenSity):
        # 加载依赖的JavaScript文件
        with open(os.path.join(self.current_dir,"manifest.js"), "r",encoding="utf-8") as f:
            dependency_js_code = f.read()
        f.close()
        # 加载主JavaScript文件
        with open(os.path.join(self.current_dir,"gym.js"), "r",encoding="utf-8") as f:
            main_js_code = f.read()
        f.close()
        # 创建一个JavaScript运行环境，并加载JavaScript代码
        js_code = execjs.compile(dependency_js_code + "\n" + main_js_code)

        # 调用JavaScript函数，并传递参数
        
        res=js_code.call("getres",venTypeId, venueId, fieldType, scheduleDate, week, venueprice, scheduleTime, subSitename, subSiteId, tensity, tenSity)
        
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json;charset=UTF-8',
            'Origin': 'https://sports.sjtu.edu.cn',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sid': res["sid"],
            'tim': res["tim"],
            }
        data=res['payload']
        response = requests.post('https://sports.sjtu.edu.cn/venue/personal/ConfirmOrder', cookies=self.cookies, headers=headers, data=data)
        print(response.text)
        if response.json()["code"] == 0:
            return response.json()["data"]
        else:
            return False
        
        
    def confirmOrder(self,orderid):
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        params = {
            'orderId': orderid,
        }

        response = requests.get('https://sports.sjtu.edu.cn/venue/personal/queryOrder', params=params, cookies=self.cookies, headers=headers)
        print(response.text)
        if response.json()["code"] == 0:
            return True
        else:
            return False
        
    def order(self,venTypeId, venueId, fieldType, scheduleDate, week, venueprice, scheduleTime, subSitename, subSiteId, tensity, tenSity):
        orderid= self.getOrderid(venTypeId, venueId, fieldType, scheduleDate, week, venueprice, scheduleTime, subSitename, subSiteId, tensity, tenSity)
        if(orderid!=False):
            if self.confirmOrder(orderid):
                print("预约成功")
            else:    
                print("预约失败")
        else:
            print("预约失败")
        
if __name__ == "__main__":
    conf1=config("子衿街学生活动中心","烘焙",date(2024,3,22),14)
    g = gym(conf1)
    assert(g.getinfo()!=False)
    info=g.get_certain_info()
    # 选某一个时间,不断抢
    if conf1.time!=0:
        if info:
            # 不同场地
            for item in info:
                conf1.tensity=item["fieldDetailStatus"]
                conf1.fieldname=item["fieldName"]
                conf1.fieldid=item["fieldId"]
                if conf1.tensity=='0':
                    conf1.tenSity="正常"
                elif conf1.tensity=='1':
                    conf1.tenSity="紧张"
                elif conf1.tensity=='2':
                    conf1.tenSity="很紧张"
                elif conf1.tensity=='3':
                    conf1.tenSity="非常紧张"
                # TODO先默认7点第一场
                if item["priceList"][conf1.time-7]["status"]=='0' and item["priceList"][conf1.time-7]["count"]>0:
                    conf1.price=item["priceList"][conf1.time-7]["price"]
                    g.order(conf1.fieldtype,conf1.venueid,conf1.name,conf1.date,conf1.week,conf1.price,conf1.schedule,conf1.fieldname,conf1.fieldid,conf1.tensity,conf1.tenSity)
                    break
                else:
                    pass
                    
            
    
    
            
        