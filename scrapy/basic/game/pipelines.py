# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import scrapy
# 名字任意

# 可以写很多pipeline，有不同优先级


class GamePipeline:
    # 传给数据到这
    def process_item(self, item, spider: scrapy.Spider):
        # print(item)
        # return 到下一个管道
        return item
