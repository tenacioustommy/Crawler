import requests
from lxml import etree
import re
# 目前只能用于选一个指定教学班，模式有1：直接抢，2：退同类型抢课


class Course:
    # 提供选课的类别，eg：板块课(体育（3）)
    # 提供教学班名字，eg:(2023-2024-1)-PE003C30-01
    def __init__(self, catagory, jxb_name) -> None:

        self.jxb_name = jxb_name
        pattern = re.compile(r'\(.*?\)-(?P<course_str>.*?)-.*?')
        res = re.search(pattern, jxb_name)
        self.course_str = res.group('course_str')
        self.catagory = catagory
        self.cookies = {
            'Qs_lvt_374225': '1694264203',
            '_ga': 'GA1.3.379699225.1694264220',
            '_gid': 'GA1.3.1482516633.1694476569',
            'Qs_pv_374225': '2438372775276204500%2C2039259406870655200%2C441375863758378500%2C1933007585373923300',
            'PPA_CI': 'ebf356b14b7cd4b5c1c5599c34e43075',
            # 很重要，也是会过期的
            'kc@i.sjtu.edu.cn': 'ffffffff097f1c2845525d5f4f58455e445a4a423660',
            # 获取sessionid即可
            'JSESSIONID': '7D3F311E581BCCDE4404C1CF37997C8B',
        }
        self.params = {
            'gnmkdm': 'N253512',
        }
        self.data = {}

    def get_basic_info(self):
        # 先获取xkkz_Id,也就是课程类别id
        headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xtgl/index_initMenu.html?jsdm=xs&_t=1659873335172',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-User': '?1',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }

        params = {
            'gnmkdm': self.params['gnmkdm'],
            'layout': 'default',
        }

        response = requests.get('https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html',
                                params=params, cookies=self.cookies, headers=headers)
        with open('response.txt', 'w', encoding='utf-8') as f:
            f.write(response.text)
        # 用etree和re提取xkkz_id
        pattern = re.compile(
            r"<li.*?><.*?,.*?,'(?P<xkkz_id>.*?)',.*?>"+self.catagory+r"</a></li>")
        result = re.search(pattern, response.text)
        self.data['xkkz_id'] = result.group("xkkz_id")
        tree = etree.HTML(response.text)
        self.data['zyh_id'] = tree.xpath('//*[@id="zyh_id"]/@value')[0]
        self.data['bh_id'] = tree.xpath('//*[@id="bh_id"]/@value')[0]
        headers = {
            'Accept': 'text/html, */*; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            # 'Cookie': 'Qs_lvt_374225=1694264203; _ga=GA1.3.379699225.1694264220; Qs_pv_374225=2438372775276204500%2C2039259406870655200%2C441375863758378500%2C1933007585373923300; kc@i.sjtu.edu.cn=ffffffff097f1c5045525d5f4f58455e445a4a423660; PPA_CI=ebf356b14b7cd4b5c1c5599c34e43075; JSESSIONID=A83B3E5A01134AC690D998A14B44815B',
            'Origin': 'https://i.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        data = {
            'xkkz_id': self.data['xkkz_id'],
            'xszxzt': '1',
            'kspage': '0',
            'jspage': '0',
        }

        response = requests.post(
            'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbDisplay.html',
            params=self.params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        if not response.ok:
            print('error')
            return -1
        tree = etree.HTML(response.text)
        self.data['bklx_id'] = tree.xpath('//*[@id="bklx_id"]/@value')[0]
        self.data['rwlx'] = tree.xpath('//*[@id="rwlx"]/@value')[0]
        self.data['tykczgxdcs'] = tree.xpath('//*[@id="tykczgxdcs"]/@value')[0]
        self.data['kkbk'] = tree.xpath('//*[@id="kkbk"]/@value')[0]
        self.data['kkbkdj'] = tree.xpath('//*[@id="kkbkdj"]/@value')[0]
        self.data['xkxskcgskg'] = tree.xpath('//*[@id="xkxskcgskg"]/@value')[0]

    def get_course_info(self):
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Origin': 'https://i.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        # 有讲究的，需要进一步检查
        data = {
            'filter_list[0]': self.course_str,
            'rwlx': self.data['rwlx'],
            'xkly': '0',
            'bklx_id': self.data['bklx_id'],
            'sfkkjyxdxnxq': '0',
            'xqh_id': '02',
            'jg_id': '03000',
            'njdm_id_1': '2022',
            'zyh_id_1': self.data['zyh_id'],
            'zyh_id': self.data['zyh_id'],
            'zyfx_id': 'wfx',
            'njdm_id': '2022',
            'bh_id': self.data['bh_id'],
            'bjgkczxbbjwcx': '0',
            'xbm': '1',
            'xslbdm': '111',
            'mzm': '01',
            'xz': '4',
            'ccdm': 'w',
            'xsbj': '65536',
            'sfkknj': '0',
            'sfkkzy': '0',
            'kzybkxy': '0',
            'sfznkx': '0',
            'zdkxms': '0',
            'sfkxq': '1',
            'sfkcfx': '0',
            'kkbk': self.data['kkbk'],
            'kkbkdj': self.data['kkbkdj'],
            'sfkgbcx': '1',
            'sfrxtgkcxd': '1',
            'tykczgxdcs': self.data['tykczgxdcs'],
            'xkxnm': '2023',
            'xkxqm': '3',
            'kklxdm': '10',
            'bbhzxjxb': '0',
            'rlkz': '0',
            'xkzgbj': '0',
            'kspage': '1',
            'jspage': '10',
        }

        response = requests.post(
            'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbPartDisplay.html',
            params=self.params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        tmplist = response.json()['tmpList']
        for item in tmplist:
            if item['jxbmc'] == self.jxb_name:
                self.data['kch_id'] = item['kch_id']
                self.data['jxb_id'] = item['jxb_id']
                # 已选择人数
                self.data['yxzrs'] = item['yxzrs']
                break

        # 根据前面的jxb_id获得jxb_ids
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            # 'Cookie': 'Qs_lvt_374225=1694264203; _ga=GA1.3.379699225.1694264220; Qs_pv_374225=2438372775276204500%2C2039259406870655200%2C441375863758378500%2C1933007585373923300; kc@i.sjtu.edu.cn=ffffffff097f1c5045525d5f4f58455e445a4a423660; PPA_CI=ebf356b14b7cd4b5c1c5599c34e43075; JSESSIONID=A83B3E5A01134AC690D998A14B44815B',
            'Origin': 'https://i.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        data = {
            'filter_list[0]': self.course_str,
            'rwlx': self.data['rwlx'],
            'xkly': '0',
            'bklx_id': self.data['bklx_id'],
            'sfkkjyxdxnxq': '0',
            'xqh_id': '02',
            'jg_id': '03000',
            'zyh_id': self.data['zyh_id'],
            'zyfx_id': 'wfx',
            'njdm_id': '2022',
            'bh_id': self.data['bh_id'],
            'xbm': '1',
            'xslbdm': '111',
            'mzm': '01',
            'xz': '4',
            'ccdm': 'w',
            'xsbj': '65536',
            'sfkknj': '0',
            'sfkkzy': '0',
            'kzybkxy': '0',
            'sfznkx': '0',
            'zdkxms': '0',
            'sfkxq': '1',
            'sfkcfx': '0',
            'bbhzxjxb': '0',
            'kkbk': self.data['kkbk'],
            'kkbkdj': self.data['kkbkdj'],
            'xkxnm': '2023',
            'xkxqm': '3',
            'xkxskcgskg': self.data['xkxskcgskg'],
            'rlkz': '0',
            'kklxdm': '10',
            'kch_id': self.data['kch_id'],
            'jxbzcxskg': '0',
            'xkkz_id': self.data['xkkz_id'],
            'cxbj': '0',
            'fxbj': '0',
        }

        response = requests.post(
            'https://i.sjtu.edu.cn/xsxk/zzxkyzbjk_cxJxbWithKchZzxkYzb.html',
            params=self.params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        list = response.json()
        for item in list:
            if item['jxb_id'] == self.data['jxb_id']:
                # 教学班总人数
                self.data['jxbrl'] = item['jxbrl']
                self.data['do_jxb_id'] = item['do_jxb_id']
                break

    def choose_certain_class(self):
        if self.data['yxzrs'] < self.data['jxbrl']:
            print('此教学班目前人数已满,为您持续刷新')
            return False
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            # 'Cookie': 'Qs_lvt_374225=1694264203; _ga=GA1.3.379699225.1694264220; Qs_pv_374225=2438372775276204500%2C2039259406870655200%2C441375863758378500%2C1933007585373923300; kc@i.sjtu.edu.cn=ffffffff097f1c5045525d5f4f58455e445a4a423660; PPA_CI=ebf356b14b7cd4b5c1c5599c34e43075; JSESSIONID=A086FA73DED6ED312DE2A226A55A4162',
            'Origin': 'https://i.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        data = {
            'jxb_ids': self.data['do_jxb_id'],
            'xkxnm': '2023',
            'xkxqm': '3',
            'bj': '7',
            'kch_id': self.data['kch_id'],
            'njdm_id': '2022',
            'zyh_id': self.data['zyh_id'],
            'kklxdm': '06',
        }
        # 这个请求不知道干啥的
        requests.post(
            'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxXkTitleMsg.html',
            params=self.params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            # 'Cookie': 'Qs_lvt_374225=1694264203; _ga=GA1.3.379699225.1694264220; Qs_pv_374225=2438372775276204500%2C2039259406870655200%2C441375863758378500%2C1933007585373923300; kc@i.sjtu.edu.cn=ffffffff097f1c5045525d5f4f58455e445a4a423660; PPA_CI=ebf356b14b7cd4b5c1c5599c34e43075; JSESSIONID=A086FA73DED6ED312DE2A226A55A4162',
            'Origin': 'https://i.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        data = {
            'jxb_ids': self.data['do_jxb_id'],
            'kch_id': self.data['kch_id'],
            'kcmc': self.course_str,
            # 'kcmc': (PE003C30)龙舟 - 1.0 学分,
            'rwlx': self.data['rwlx'],
            'rlkz': '0',
            'rlzlkz': '1',
            'sxbj': '1',
            'xxkbj': '0',
            'qz': '0',
            'cxbj': '0',
            'xkkz_id': self.data['xkkz_id'],
            'njdm_id': '2022',
            'zyh_id': self.data['zyh_id'],
            # 似乎没用
            'kklxdm': '06',
            'xklc': '5',
            'xkxnm': '2023',
            'xkxqm': '3',
        }
        response = requests.post(
            'https://i.sjtu.edu.cn/xsxk/zzxkyzbjk_xkBcZyZzxkYzb.html',
            params=self.params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        if response.json()['flag'] != '1':
            print(response.json()['msg']+'选课失败')
            return False
        else:
            print(self.jxb_name+'选课成功')
            return True

    def giveup_certain_class(self):
        headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Origin': 'https://i.sjtu.edu.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://i.sjtu.edu.cn/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        }
        data = {
            'kch_id': self.data['kch_id'],
            'jxb_ids': self.data['do_jxb_id'],
            'xkxnm': '2023',
            'xkxqm': '3',
            'txbsfrl': '1',
        }
        # 退没选的课也会显示成功
        response = requests.post(
            'https://i.sjtu.edu.cn/xsxk/zzxkyzb_tuikBcZzxkYzb.html',
            params=self.params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        print(self.jxb_name+'退课成功')


if __name__ == "__main__":
    course = Course('通识课', '(2023-2024-1)-MU904-02')
    # 有括号记得加转义字符
    course.get_basic_info()
    course.get_course_info()
    course.choose_certain_class()
    course.giveup_certain_class()
