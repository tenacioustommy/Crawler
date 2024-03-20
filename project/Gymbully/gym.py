import requests
import execjs
import os
from datetime import date,datetime,timedelta
import time
import ddddocr
import re
from bs4 import BeautifulSoup
from PIL import Image
import io
import json
from urllib.parse import urlparse, parse_qs
# 默认不筛选具体场地

# time从几点开始填几点，例如8点到9点，填8,24小时制from bs4 import BeautifulSoup
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
    def __init__(self,config, username, password):
        self.username = username
        self.password = password
        # 获取当前Python文件的目录
        self.current_dir = os.path.dirname(os.path.abspath(__file__))
        self.cookies = {
            # '_ga': 'GA1.3.1315508667.1697032069',
            # '_gid': 'GA1.3.1996120587.1710685337',
            # '_ga_QP6YR9D8CK': 'GS1.3.1710730533.15.0.1710730533.0.0.0',
            'NSC_tqpsut.tkuv.fev.do': '',
            'JSESSIONID': '',
        }
        self.login_cookies = {}
        self.path=os.path.join(self.current_dir,"cookies", self.username+".cookie")
        self.config=config
          
    def login(self):
        if os.path.exists(self.path):
            with open(self.path, "r") as f:
                self.cookies = json.load(f)
            return True
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://sports.sjtu.edu.cn/',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        response = requests.get('https://sports.sjtu.edu.cn/pc/', headers=headers)
        self.cookies['NSC_tqpsut.tkuv.fev.do']=response.cookies.get_dict()["NSC_tqpsut.tkuv.fev.do"]
      
        cookies = {
            'NSC_tqpsut.tkuv.fev.do': self.cookies['NSC_tqpsut.tkuv.fev.do'],
        }

        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Origin': 'https://sports.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        response = requests.post('https://sports.sjtu.edu.cn/system/operation/selectSystemOne', cookies=cookies, headers=headers)
        self.cookies['JSESSIONID']=response.cookies.get_dict()["JSESSIONID"]
        # oauth2#########################################################################
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Referer': 'https://sports.sjtu.edu.cn/',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        response = requests.get(
            'https://jaccount.sjtu.edu.cn/oauth2/authorize?response_type=code&scope=profile&client_id=mB5nKHqC00MusWAgnqSF&redirect_uri=https://sports.sjtu.edu.cn/oauth2Login',
            headers=headers
        )
        if response.history:
            history_response= response.history[0]
            response_headers =dict( history_response.headers)
        else:
            raise Exception("登录失败")
        
        location=response_headers["Location"]
        self.referer=location
        self.login_cookies['jsessionid_oath']=history_response.cookies.get_dict()["JSESSIONID"]
        self.login_cookies['jaoauth2021']=history_response.cookies.get_dict()["jaoauth2021"]
 
       # 第二个请求#########################################################################
        cookies = {
            'jaoauth2021': self.login_cookies['jaoauth2021'],
        }
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Referer': 'https://sports.sjtu.edu.cn/',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        response = requests.get(location, cookies=cookies, headers=headers)
        
        self.login_cookies['jsessionid_jaccount']=response.cookies.get_dict()["JSESSIONID"]
        self.login_cookies['jajaccount2021']=response.cookies.get_dict()["jajaccount2021"]
        html=response.text
        # 创建一个BeautifulSoup对象
        soup = BeautifulSoup(html, 'html.parser')

        # 找到id为"form-input"的元素
        form_input = soup.find(id="form-input")
        inputs=form_input.find_all("input")[:6]
        self.data = {input_element.get('name'): input_element.get('value') for input_element in inputs}
        assert len(self.data)==6
        
        
        
        self.critical_login()
        
    def critical_login(self):
        ##test代码
        # self.login_cookies = {
        #     'jsessionid_oath' : 'C935C6483A1D57AA2FCA99388ACC4FBC.oauth36',
        #     'jajaccount2021': 'ffffffff09701c7b45525d5f4f58455e445a4a4229a0',
        #     'jaoauth2021': 'ffffffff0973163545525d5f4f58455e445a4a4229a0',
        #     'jsessionid_jaccount': '5256088A91D43E34466F9C2E7357C5D7.jaccount106',
        # }
        
        # self.data = {
        #     'sid': 'jaoauth220160718',
        #     'client': 'CEgL9iBQkHbDMUrNeIDvX5iToOtrkOVtapb/KZ9PGUB3',
        #     'returl': 'COGz8R6mn2cMDSiEJZT4jL7m16SVmUDfmjcM8loKoS0bdgc0mlrSvF1bqKvlyuEnWS2gMS/dJwxx2eh8NHdEW8ugiCp5QGXgv1jT7boOdVpcWr+SgZUBsccXfNbYTQPNfA==',
        #     'se': 'CERT337VYibTWXFCH5q4CCnmV1FKUQy+XzoUtdn0NC0sBlRyWoBHELwnO9UvS+GUgpGXNwoVBHsO',
        #     'v': '',
        #     'uuid': '1806e0b2-4bec-41f3-b691-235eebb4fa96',
        # }
        # self.referer='https://jaccount.sjtu.edu.cn/jaccount/jalogin?sid=jaoauth220160718&client=CEgL9iBQkHbDMUrNeIDvX5iToOtrkOVtapb%2FKZ9PGUB3&returl=COGz8R6mn2cMDSiEJZT4jL7m16SVmUDfmjcM8loKoS0bdgc0mlrSvF1bqKvlyuEnWS2gMS%2FdJwxx2eh8NHdEW8ugiCp5QGXgv1jT7boOdVpcWr%2BSgZUBsccXfNbYTQPNfA%3D%3D&se=CERT337VYibTWXFCH5q4CCnmV1FKUQy%2BXzoUtdn0NC0sBlRyWoBHELwnO9UvS%2BGUgpGXNwoVBHsO' 
        # code='xxczn'
        ##获取验证码 #########################################################################
        cookies = {
            'JSESSIONID': self.login_cookies['jsessionid_jaccount'],
            'jaoauth2021': self.login_cookies['jaoauth2021'],
            'jajaccount2021': self.login_cookies['jajaccount2021'],
        }
        
        headers = {
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer':self.referer,
            'Sec-Fetch-Dest': 'image',
            'Sec-Fetch-Mode': 'no-cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        params = {
            'uuid': self.data['uuid'],
            't': int(datetime.now().timestamp()*1000),
        }   
        
        response = requests.get(f'https://jaccount.sjtu.edu.cn/jaccount/captcha',params=params, cookies=cookies, headers=headers)
        ocr=ddddocr.DdddOcr()
        code=ocr.classification(response.content)
        # image_data = io.BytesIO(response.content)
        # image = Image.open(image_data)
        # image.show()
        # 最终登录请求 #########################################################################
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://jaccount.sjtu.edu.cn',
            'Referer': self.referer,
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        data = {
            'sid': self.data['sid'],
            'returl': self.data['returl'],
            'se': self.data['se'],
            'v': self.data['v'],
            'uuid': self.data['uuid'],
            'client': self.data['client'],    
            'user': self.username,
            'pass': self.password,
            'captcha': code,
            # TODO
            # 'g-recaptcha-response': '',
        }
        
        time.sleep(1)
        response = requests.post('https://jaccount.sjtu.edu.cn/jaccount/ulogin', cookies=cookies, headers=headers, data=data)
        if response.history:
            # 如果已经自动登录了
            try:
                history_response= response.history[-2]
                response_headers =dict( history_response.headers)
                {'Set-Cookie': '=34afff3b-76d5-4f6b-8f37-37553c98bea0; Path=/; HttpOnly; SameSite=lax, rememberMe=deleteMe; Path=/; Max-Age=0; Expires=Tue, 19-Mar-2024 07:01:30 GMT; Secure; SameSite=lax, NSC_tqpsut.tkuv.fev.do=ffffffff097f1ced45525d5f4f58455e445a4a4229a0;path=/;secure', 'Location': 'https://sports.sjtu.edu.cn/pc?school=1', 'Content-Language': 'zh-CN', 'Content-Length': '0', 'Date': 'Wed, 20 Mar 2024 07:01:30 GMT', 'Keep-Alive': 'timeout=20', 'Connection': 'keep-alive'}
                self.cookies['NSC_tqpsut.tkuv.fev.do']=history_response.cookies.get_dict()["NSC_tqpsut.tkuv.fev.do"]
                self.cookies['JSESSIONID']=history_response.cookies.get_dict()["JSESSIONID"]
                # TODO dump打印文件
                return True
            except:
                history_response= response.history[0]
                response_headers =dict( history_response.headers)
        else:
            raise Exception("登录失败")
        # location=res["Location"]
        # referer='https://jaccount.sjtu.edu.cn'+location
           
        # 获取Set-Cookie头的值
        try:
            self.login_cookies['javisited']=history_response.cookies.get_dict()["JAVisitedSites"]
            self.login_cookies['jauthcookie']=history_response.cookies.get_dict()["JAAuthCookie"]
        except KeyError:
            soup = BeautifulSoup(response.text, 'html.parser')
            div_warn = soup.find(id='div_warn')
            raise Exception(div_warn.text)
        
        ##########################################################
        cookies = {
            'JSESSIONID': self.login_cookies['jsessionid_jaccount'],
            'JAVisitedSites': self.login_cookies['javisited'],
            'jaoauth2021': self.login_cookies['jaoauth2021'],
            'jajaccount2021': self.login_cookies['jajaccount2021'],
            # '_ga': 'GA1.3.453519692.1710831308',
            # '_gid': 'GA1.3.1175386541.1710831308',
            # '_gat': '1',
            # '_ga_QP6YR9D8CK': 'GS1.3.1710831308.1.0.1710831308.0.0.0',
            'JAAuthCookie': self.login_cookies['jauthcookie'],
            }

        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            # 'Cookie': 'JSESSIONID=F405A9ED685D7946C77985A9AEED531B.jaccount105; JAVisitedSites=CMNGzKEUglapORVevnH2LBYVq8Y/K6hZHWmHTnm+2x5xgbgBgf1nWL99WHfL6buPyRyaauNtM36e; jaoauth2021=ffffffff09701c6045525d5f4f58455e445a4a4229a0; jajaccount2021=ffffffff09701c7845525d5f4f58455e445a4a4229a0; _ga=GA1.3.453519692.1710831308; _gid=GA1.3.1175386541.1710831308; _gat=1; _ga_QP6YR9D8CK=GS1.3.1710831308.1.0.1710831308.0.0.0; JAAuthCookie=CHt/S2VX1MTnEH128yEP7g5OJYuhmImo7EGyYB84NiTPY9/do+hMZwUJOP3XVwQ5IybU16ympo2LsSNZfXxv3nk6fBQAQo5YaMwI9vxW/zP0w+I7bQXMxZLWcrRkMEvWoT/UK50fdKiix8TBB4/tMIOM+8gWuznX3VgV5pMIE2Axf1mH1ASFxBQDtO+sTlumLPZ3YLuCcYejbcE0ZaK0xrZE81MieHovfZ/cnR+gYqae9w1LxTI8bcC39g+h/PytEsEDIUL78rRA8ratdq3ibbmESyoo1W5EtEZX/OZiXKKwR9TKLhLqi0xv6oTbfYCTog6jUSltI5hN5xGBwxoAlkhtarA5UDATF/ABeKAeKk6QHRiI75rXi5cS3u/sdT88qnoDaiW4os3mhbfYxDV5kiuFFKvEfh++pcJpd1taLLBNyfY8ATQa/nBFNegsGpTQ1u9/aMaPz55XSCd8/zOOtFhPTwN+33efZOC0aUU7rWOlopU8TZ8jzTjOG7aGi6FPFvMY9NPyLFgDYAYx7i/B22n8Y3PUd5EvfBrQ02O9EZTPt4uy8hUDj0hFVFeRwzwhRrCKa8QrHKVVKU0bDgf4meGZqMCU/tIAqggiYOK3xO02Fmc6Gpd72fN6NxigTUWc7Zzch0ZZbntdbjOZUDnbM7g=',
            'Pragma': 'no-cache',
            'Referer': self.referer,
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        
        response = requests.get( self.referer, cookies=cookies, headers=headers)
        if response.history:
            history_response= response.history[0]
            response_headers =dict( history_response.headers)
        else:
            raise Exception("登录失败")
        location=response_headers["Location"]
        self.login_cookies['jauthcookie']=history_response.cookies.get_dict()["JAAuthCookie"]
        
        #################################################
        cookies = {
            'JSESSIONID': self.login_cookies['jsessionid_oath'],
            'jaoauth2021': self.login_cookies['jaoauth2021'],
            'jajaccount2021': self.login_cookies['jajaccount2021'],
            'JAAuthCookie': self.login_cookies['jauthcookie'],
            }

        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            # 'Cookie': 'JSESSIONID=AAB614FCFB7F51CC0A40F8B2FFC72812.oauth113; jaoauth2021=ffffffff09701c6045525d5f4f58455e445a4a4229a0; jajaccount2021=ffffffff09701c7845525d5f4f58455e445a4a4229a0; _ga=GA1.3.453519692.1710831308; _gid=GA1.3.1175386541.1710831308; _gat=1; _ga_QP6YR9D8CK=GS1.3.1710831308.1.0.1710831308.0.0.0; JAAuthCookie=CJtQA56zheefVLLBc/0ZeUGAMn6ELN1NKZIT0EDkQF5fm5z56qrO+2uBqz4+BH08e7whRlJ/3JWD62qEPGCyjOfHz2fvxNVQtE+upERzcMdqQ11BmKpQBo8gNYrQteRsJYvka9x8lMYejzsPyRPxvIgICgNYrgBQR7EKKtL586bhgHbDarfmiVY+iYcrVG3OgKvLUW2WJmwWk/KtfF1Z9838KAhE4yM/R5wAbHy4PKFwOYEdE37CYDIStG8GWnX0CCalHY6u8Y+tzYuY6M02rnSjlRPMVYE4RoHtUuAVboQh8sEt4Ela2EtratVaKTva8wrplFtDoZc5KxEe4eYg2zANsKRzuT9tjgybQEcSvWKuxzEwkPLEh41zSNBjGf3W9oBmHxJ1LsyAK460+gO2K7+4aBUKY892uuaDUE+gUB1TrTE9h27Zqk61cRRU0ux+JDatdLzT0aaruJ6Aup63MFjJsbpkRrjpBPxYydfwEp549IpGHWB+FyOYAVnD1PiqEBjA9/bJQ1CrSl821qp4mEwQeG2o5X9n8tjMsMwonbOsKkpMb6QN0hK8lqGKwhu6t2VZTDNtdjy7cJ0PamQ86tumJAzAstagAo4UTfZQLV3VdwIRi/Fw+7aE9m9uzYLfLFiALydCNntHX10E1daclHEzKv6edxJyCQ==',
            'Pragma': 'no-cache',
            'Referer': self.referer,
            # 'Referer':"https://sports.sjtu.edu.cn/",
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        
        response = requests.get(location, cookies=cookies, headers=headers)
        if response.history:
            history_response= response.history[0]
            response_headers =dict( history_response.headers)
            location=response_headers["Location"]
        else:
            print(response.text)
            raise Exception("登录失败")
        #本质上是把self.cookie合法化################################################
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            # 'Cookie': 'NSC_tqpsut.tkuv.fev.do=ffffffff097f1ced45525d5f4f58455e445a4a4229a0; JSESSIONID=527e4435-38e6-4e62-9523-9ee593152f69; _ga=GA1.3.453519692.1710831308; _gid=GA1.3.1175386541.1710831308; _gat=1; _ga_QP6YR9D8CK=GS1.3.1710831308.1.0.1710831308.0.0.0',
            'Pragma': 'no-cache',
            'Referer': 'https://jaccount.sjtu.edu.cn/',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        response = requests.get(location, cookies=self.cookies, headers=headers)

        with open(self.path, 'w') as f:
            # 写入数据
            json.dump(self.cookies, f) 
        return True
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
    g = gym(conf1,"tommyhuang","hzh475601!")
    # g.critical_login()
    g.login()
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
                    
            
    
    
            
        