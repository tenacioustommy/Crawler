# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from scrapy import Spider
import pymysql
# 存数据：
# 1.存csv
# 2.存mysql
# 3.存mongodb
# 4.文件的存储


class CpPipeline:
    def open_spider(self, spider):
        self.f = open('./cp.csv', "a", encoding='utf-8')

    def close_spider(self, spider):
        if self.f:
            self.f.close()

    def process_item(self, item, spider: Spider):
        self.f.write(
            f"{item['qihao']}, {'_'.join(item['red_ball'])}, {item['blue_ball']}\n")
        return item


class SQLPipeline:
    def open_spider(self, spider):
        self.conn = pymysql.connect(
            host="localhost", port=3306, password='hzh475601', database='spider')

    def close_spider(self, spider):
        if self.conn:
            self.conn.close()

    def process_item(self, item, spider: Spider):
        try:
            cursor = self.conn.cursor()
            sql = 'insert into caipiao (qihao,read_ball,blue_ball) values (%s,%s,%s)'
            cursor.execute(sql, (item['qihao'], '_'.join(item['red_ball']), item['blue_ball']))
            self.conn.commit()
        except:
            self.conn.rollback()
        finally:
            if cursor:
                cursor.close()
        return item
