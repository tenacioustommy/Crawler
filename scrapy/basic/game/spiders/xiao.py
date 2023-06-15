import scrapy
from scrapy.http import TextResponse
from game.items import GameItem


class XiaoSpider(scrapy.Spider):
    name = "xiao"
    allowed_domains = ["8264.com"]
    start_urls = ["http://www.8264.com"]

    def parse(self, response: TextResponse):
        divs = response.xpath('//*[@id="portal_block_7173_content"]/div')
        for div in divs:
            hrefs = div.xpath('./div[2]/div[1]/h2/a[2]/@href').extract()
            for href in hrefs:
                # 数据传给engine,然后给pipeline
                yield scrapy.Request(
                    url=href,
                )

        