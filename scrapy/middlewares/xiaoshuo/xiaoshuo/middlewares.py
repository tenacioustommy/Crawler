# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html

from scrapy import signals
from xiaoshuo.settings import USER_AGENTLIST,IP_LIST
from random import choice
# useful for handling different item types with a single interface
from itemadapter import is_item, ItemAdapter
from  xiaoshuo.request import SeleniunRequest
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from scrapy.http.response.html import HtmlResponse
# spider和engine之间
class XiaoshuoSpiderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the spider middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        # Called for each response that goes through the spider
        # middleware and into the spider.

        # Should return None or raise an exception.
        return None

    def process_spider_output(self, response, result, spider):
        # Called with the results returned from the Spider, after
        # it has processed the response.

        # Must return an iterable of Request, or item objects.
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        # Called when a spider or process_spider_input() method
        # (from other spider middleware) raises an exception.

        # Should return either None or an iterable of Request or item objects.
        pass

    def process_start_requests(self, start_requests, spider):
        # Called with the start requests of the spider, and works
        # similarly to the process_spider_output() method, except
        # that it doesn’t have a response associated.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        spider.logger.info("Spider opened: %s" % spider.name)

# 下载器和引擎之间
class XiaoshuoDownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.
    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        # 在什么时间执行什么功能
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        crawler.signals.connect(s.spider_closed,signal=signals.spider_closed)
        return s
    def process_request(self, request, spider):
        # 需要判断是否需要selenium
        if isinstance(request,SeleniunRequest ):
            #用selenium，然后直接返回engin
            self.web.get(request.url)
            page_source=self.web.page_source
            return HtmlResponse(
                url=request.url,
                status=200,
                body=page_source,
                request=request,
                encoding='utf-8'
            )
        else:
            return None
        # Called for each request that goes through the downloader
        # middleware.
        # Must either:
        # - return None: continue processing this request
        # - or return a Response object,后续中间件不执行，直接给引擎
        # - or return a Request object,直接给spider数据处理
        # - or raise IgnoreRequest: process_exception() methods of
        #   installed downloader middleware will be called
        # ua=choice(USER_AGENTLIST)
        # request.headers["User-Agent"] = ua
        # return None
# 代理到clash
# class ProxyDownloadMiddleware:
#     def process_request(self, request,spider):
#         ip=choice(IP_LIST)
#         request.meta['proxy']='https://'+'127.0.0.1:7890'
#         return None
    def spider_opened(self, spider):
        self.web=Chrome()
    def spider_closed(self, spider):
        self.web.close()