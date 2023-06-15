import scrapy
from scrapy.http import TextResponse
from cp.items import CpItem


class CaipiaoSpider(scrapy.Spider):
    name = "caipiao"
    allowed_domains = ["www.500.com"]
    start_urls = ["https://datachart.500.com/ssq/"]

    def parse(self, response: TextResponse):
        trs = response.xpath('//*[@id="tdata"]/tr')
        for tr in trs:
            if tr.xpath('./@class').extract_first() == 'tdbck':
                continue
            red_ball = tr.css('.chartBall01::text').extract()
            blue_ball = tr.css('.chartBall02::text').extract_first()
            qihao = tr.xpath("./td[1]/text()").extract_first().strip()
            cp = CpItem()
            cp['red_ball'] = red_ball
            cp['blue_ball'] = blue_ball
            cp['qihao'] = qihao
            yield cp
