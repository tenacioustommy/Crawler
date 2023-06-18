import scrapy
from xiaoshuo.request import SeleniunRequest

class ZhipinSpider(scrapy.Spider):
    name = "zhipin"
    allowed_domains = ["zhipin.com"]
    start_urls = ["https://zhipin.com"]
    def start_requests(self):
        yield SeleniunRequest(
            url=self.start_urls[0],
            callback=self.parse
        )
    def parse(self, response):
        print(response.text)
