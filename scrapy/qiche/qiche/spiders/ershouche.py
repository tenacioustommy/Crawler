import scrapy


class ErshoucheSpider(scrapy.Spider):
    name = "ershouche"
    allowed_domains = ["che168.com"]
    start_urls = ["https://che168.com"]

    def parse(self, response):
        pass
