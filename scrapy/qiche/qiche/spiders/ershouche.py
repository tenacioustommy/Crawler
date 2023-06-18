import scrapy
from scrapy.linkextractors import LinkExtractor


class ErshoucheSpider(scrapy.Spider):
    name = "ershouche"
    allowed_domains = ["che168.com"]
    start_urls = [
        "https://www.che168.com/beijing/a0_0msdgscncgpi1lto8cspexx0/#pvareaid=106289"]

    def parse(self, response):
        # hrefs = response.xpath(
        #     '//*[@id="tab2-2"]/div[1]/ul/li/a/@href').extract()
        # for href in hrefs:
        #     yield scrapy.Request(
        #         url=response.urljoin(href),
        #         callback=self.parse_hrefs,
        #     )
        le = LinkExtractor(
            restrict_xpaths='//*[@id="goodStartSolrQuotePriceCore0"]/ul/li/a')
        links = le.extract_links(response)
        for link in links:
            # print(link.text.replace(' ', ''), link.url)
            yield scrapy.Request(
                link.url,
                # dont_filter=True,不过滤-直接扔队列,false:去除重复
                callback=self.parse_hrefs,
            )
        page_le = LinkExtractor(
            restrict_xpaths='//*[@id="listpagination"]/a')
        page_links = page_le.extract_links(response)
        for page in page_links:
            yield scrapy.Request(
                url=page.url,
                callback=self.parse,
            )

    def parse_hrefs(self, response):
        print(response.url)
