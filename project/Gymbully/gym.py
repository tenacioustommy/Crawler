import requests
import execjs
import os
class gym:
    def __init__(self, username=0, password=0):
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
          
    def login(self):
        pass
    def getinfo(self):
        pass
    def getOrderid(self):
        # 加载依赖的JavaScript文件
        with open(os.path.join(self.current_dir,"manifest.js"), "r",encoding="utf-8") as f:
            dependency_js_code = f.read()
        f.close()
        # 加载主JavaScript文件
        with open(os.path.join(self.current_dir,"gym.js")) as f:
            main_js_code = f.read()
        f.close()
        # 创建一个JavaScript运行环境，并加载JavaScript代码
        js_code = execjs.compile(dependency_js_code + "\n" + main_js_code)

        # 调用JavaScript函数，并传递参数
        
        res=js_code.call("getres")
        
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json;charset=UTF-8',
            # 'Cookie': '_ga=GA1.3.1315508667.1697032069; _gid=GA1.3.1996120587.1710685337; _ga_QP6YR9D8CK=GS1.3.1710730533.15.0.1710730533.0.0.0; NSC_tqpsut.tkuv.fev.do=ffffffff097f1ced45525d5f4f58455e445a4a4229a0; JSESSIONID=ed5aa51a-1d56-41e5-9351-9638a26574dd',
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
            return -1
        
        
    def confirmOrder(self,orderid):
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            # 'Cookie': '_ga=GA1.3.1315508667.1697032069; _gid=GA1.3.1996120587.1710685337; _ga_QP6YR9D8CK=GS1.3.1710730533.15.0.1710730533.0.0.0; NSC_tqpsut.tkuv.fev.do=ffffffff097f1ced45525d5f4f58455e445a4a4229a0; JSESSIONID=ed5aa51a-1d56-41e5-9351-9638a26574dd',
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
        
if __name__ == "__main__":
    g = gym()
    orderid= g.getOrderid()
    if(orderid!=-1):
        if g.confirmOrder(orderid):
            print("预约成功")
        else:    
            print("预约失败")
    else:
        print("预约失败")
            
        