import scrapy
from scrapy.http import  Response
from pic.items import PicItem
class MeinvSpider(scrapy.Spider):
    name = "meinv"
    allowed_domains = ["umei.cc"]
    start_urls = ["https://www.umei.cc/meinvtupian"]

    def parse(self, response:Response):
        li_list=response.xpath("//div[@class='taotu-main']/ul/li")
        for li in li_list:
            href=li.xpath('./a/@href').extract_first()
            # 封装成请求给引擎
            yield scrapy.Request(
                url=response.urljoin(href),
                method='get',
                # 返回的如何解析
                callback=self.parse_meinv,
            )
            break
        
    def parse_meinv(self,response:Response):
        img_name=response.xpath('//*[@id="photos"]/h1/text()').extract_first()    
        img_src=response.xpath("//div[@class='big-pic']/a/img/@src").extract_first()    
        item=PicItem()
        # 注意存的是键值对
        item['name']=img_name
        item['img_src']=img_src   
        yield item
        next_href=response.xpath('//div[@class="pages"]/ul/li/a[contains(text(),"下一页")]/@href').extract_first() 
        if next_href:
            yield scrapy.Request(
                url=response.urljoin(next_href),
                callback=self.parse_meinv,
            )