import scrapy

class XsSpider(scrapy.Spider):
    name = "xs"
    allowed_domains = ["douban.com"]
    start_urls = ["https://movie.douban.com/typerank?type_name=%E5%89%A7%E6%83%85&type=11&interval_id=100:90&action="]
    # 重写这个函数,
    # def start_requests(self):
        # # 直接从浏览器复制
        # cookie='''
        # GUID=7423f5d9-3860-49d3-b6c2-a16341a24b26; PPA_CI=e75d4593cd87c1846942ac679a6c9756; Hm_lvt_9793f42b498361373512340937deb2a0=1687053085; accessToken=avatarUrl%3Dhttps%253A%252F%252Fcdn.static.17k.com%252Fuser%252Favatar%252F05%252F45%252F78%252F100287845.jpg-88x88%253Fv%253D1687053143076%26id%3D100287845%26nickname%3D%25E4%25B9%25A6%25E5%258F%258Bi81321GNq%26e%3D1702605143%26s%3D0b7be5b04725d322; c_channel=0; c_csc=web; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22100287845%22%2C%22%24device_id%22%3A%22188a53bc66986c-0d3da13097e974-26031d51-1821369-188a53bc66a170a%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%227423f5d9-3860-49d3-b6c2-a16341a24b26%22%7D; Hm_lpvt_9793f42b498361373512340937deb2a0=1687053187
        # '''
        # list=cookie.split(";")
        # dic={}
        # for it in list:
        #     key,val=it.split("=")
        #     dic[key.strip()] = val.strip()
        # yield scrapy.FormRequest(
        #     url=self.start_urls[0],
        #     cookies=dic,
        #     callback=self.parse,
        # )
        #  走登录流程post第一个方案
        # url='https://user.17k.com/www/bookshelf/'
        # username='13816140582'
        # password="hzh475601"
        # yield scrapy.Request(
        #     url, 
        #     method='post',
        #     body=f'loginName={username}&password={password}',
        # )
        
    def parse(self, response):
        print(response.text)
