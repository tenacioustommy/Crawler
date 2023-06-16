# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from scrapy.pipelines.images import ImagesPipeline
from pic.items import PicItem
import scrapy
from pic.settings import MYSQL
import pymysql

class PicPipeline:
    def open_spider(self, spider):
        self.conn= pymysql.connect(
            user=MYSQL['user'], host=MYSQL['host'], port=MYSQL['port'], password=MYSQL['password'], database=MYSQL['database'])
    def close_spider(self, spider):
        if self.conn:
            self.conn.close()
    def process_item(self, item, spider):
        try:
            c = self.conn.cursor()
            sql="INSERT INTO meinv (name,src,local_path) VALUES (%s,%s,%s)"
            c.execute(sql,(item['name'],item['img_src'],item['local_path']))
            self.conn.commit()
        except:
            self.conn.rollback()
    
class MeinvPipeline(ImagesPipeline):
    # 负责下载
    def get_media_requests(self, item:PicItem, info):
        yield scrapy.Request(item['img_src'])
    def file_path(self, request, response=None, info=None, *, item=None):
        # request 可以获得url
        file_name=item['name']+'/'+item['img_src'].split("/")[-1]
        return f'img/{file_name}'
    def item_completed(self, results, item, info):
        ok,info=results[0]
        print(info)
        item['local_path']=info['path']
        return item