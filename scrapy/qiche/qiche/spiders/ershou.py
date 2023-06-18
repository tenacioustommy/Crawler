import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class ErshouSpider(CrawlSpider):
    name = "ershou"
    allowed_domains = ["che168.com"]
    start_urls = [
        "https://www.che168.com/beijing/a0_0msdgscncgpi1lto8cspexx0/#pvareaid=106289"]
    # rules规则，必须是元组
    rules = (
        Rule(LinkExtractor(restrict_xpaths='//*[@id="goodStartSolrQuotePriceCore0"]/ul/li/a'),
             callback="parse_item", follow=False),
        Rule(LinkExtractor(
            restrict_xpaths='//*[@id="listpagination"]/a'),
            callback="parse_item", follow=True)
    )

    def parse_item(self, response):
        title = response.xpath(
            '//div[@class="car-box"]/h3/text()').extract_first()
        price = response.xpath(
            '//*[@id="overlayPrice"]/text()').extract_first()
        print(title, price)
