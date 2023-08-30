import requests
import execjs
import json
import time
import pickle
import os
from bs4 import BeautifulSoup
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
# 想看的演出序号与时间
expectedtime = [0]
expectedticket = [0, 5]
account = '13816140582'
pwd = 'hzh475601'
login_url = 'https://passport.damai.cn/login?ru=https%3A%2F%2Fwww.damai.cn%2F'
# 请求到选择页面，无cookie
# projectid自己手动添加
projectid = '733071713999'


class Damai:
    def __init__(self):
        self.cookies = {
            'PPA_CI': '2acb5d83e3cc0f10245d82b86266034c',
            '_samesite_flag_': "true",
            'x5sec': "7b22617365727665723b32223a22393130623032316366663965323234653761333766356536643732653639346543506d4876616347454c4c55324d622f2f2f2f2f2f7745776735435530774e4141773d3d222c22733b32223a2239633063383137306136303937623261227d",
        }

    def login(self):
        if not os.path.exists(f'damai{account}.pkl'):
            options = Options()
            options.add_experimental_option(
                "excludeSwitches", ["enable-automation"])
            options.add_experimental_option(
                'useAutomationExtension', False)
            options.add_argument("--no-sandbox")
            options.add_argument("--disable-dev-shm-usage")
            options.add_argument("--disable-gpu")
            options.add_argument("--disable-extensions")
            options.add_argument(
                "--disable-blink-features=AutomationControlled")
            options.add_argument(
                "--disable-blink-features=AutomationControlledInHeadlessMode")
            options.add_argument("--disable-logging")
            options.add_argument("--disable-infobars")
            options.add_argument("--disable-notifications")
            options.add_argument("--disable-popup-blocking")
            options.add_argument("--disable-web-security")
            options.add_argument(
                "--disable-features=CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process,NetworkService,VizDisplayCompositor")
            web = Chrome(options=options)
            web.set_window_size(720, 1920)
            web.get(login_url)
            time.sleep(1)
            # 恶心的iframe
            iframe = web.find_element(
                By.XPATH, '//*[@id="alibaba-login-box"]')
            web.switch_to.frame(iframe)
            phonenum = web.find_element(
                By.XPATH, '//*[@id="fm-login-id"]')
            phonenum.clear()
            phonenum.send_keys(account)
            password = web.find_element(
                By.XPATH, '//*[@id="fm-login-password"]')
            password.clear()
            password.send_keys(pwd)
            login = web.find_element(
                By.XPATH, '//*[@id="login-form"]/div[4]/button')
            login.click()
            time.sleep(2)
            cookies = web.execute_script("return document.cookie;")
            # Remove any whitespace characters
            string = cookies.replace(" ", "")
            # Split the string into key-value pairs
            pairs = string.split(";")
            # Iterate over the key-value pairs and add them to the dictionary
            for pair in pairs:
                key, value = pair.split("=", 1)
                self.cookies[key] = value
            self.cookies.pop('destCity')
            pickle.dump(self.cookies, open(f'damai{account}.pkl', "wb"))
        # selenium获取的有session的cookie,添加进cookie
        self.cookies = pickle.load(open(f'damai{account}.pkl', 'rb'))

    def getparam(self):
        # 第一种方法通过电脑版获取skuId，但有可能直接显示不全，好在实在不行可以手动获取
        headers = {
            'authority': 'detail.damai.cn',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'cache-control': 'max-age=0',
            'referer': 'https://detail.damai.cn/item.htm?id=729389580105',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        }

        params = {
            'id': projectid,
        }
        # get response
        while True:
            response = requests.get('https://detail.damai.cn/item.htm',
                                    params=params, headers=headers)
            page = BeautifulSoup(response.text, "lxml")
            result = json.loads(
                page.find('div', attrs={'id': 'dataDefault'}).text)

            # performbases是时间，performs是场次
            for performbase in expectedtime:
                for perform in expectedticket:
                    expected = result['performBases'][performbase]['performs'][0]["skuList"][perform]
                    print(expected)
                    # 有票
                    if(expected['skuEnable']):
                        buy_param = projectid+'_1_'+str(expected['skuId'])
                        print(expected['skuName']+' has tickets')
                        # return buy_param
                    else:
                        # 不可售
                        continue
            time.sleep(1)
        # 第二种方法手机端，隐藏在js中，需要逆向


# --------------------------------------

    def get_ticket(self):
        params = execjs.compile('./damai.js').call('getparam')
        # 请求购买页面
        # 两个人

        headers = {
            'authority': 'mtop.damai.cn',
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'content-type': 'application/x-www-form-urlencoded',
            'globalcode': 'ali.china.damai',
            'origin': 'https://m.damai.cn',
            'referer': 'https://m.damai.cn/',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        }

        params = {
            'jsv': '2.7.2',
            'appKey': '12574478',
            't': '1693208413079',
            'sign': 'dfd20e8e4a411c94e2feb88545ec4a9b',
            'v': '4.0',
            'post': '1',
            'type': 'originaljson',
            'timeout': '15000',
            'dataType': 'json',
            'isSec': '1',
            'ecode': '1',
            'AntiCreep': 'true',
            'ttid': '#t#ip##_h5_2014',
            'globalCode': 'ali.china.damai',
            'tb_eagleeyex_scm_project': '20190509-aone2-join-test',
            'H5Request': 'true',
            'api': 'mtop.trade.order.create.h5',

            # important
            'submitref': '8a0769b5ccfacb9a799368b28790c0630a7112b3d048624594d076a1e3081c5c',
        }

        # data ，两个人,h5/mtop.trade.order.create.h5/4.0/parsed-------------------------------------------------------------------------------------
        data = {"damai": "1", "channel": "damai_app", "umpChannel": "10002", "atomSplit": "1", "serviceVersion": "1.8.5", "signKey": "cEl4bXJdXglkRV51QEF1eXZTfG1xWFoKZEFbfFo3GBcTIgoSBzI6bBIgOB8=", "umidToken": "T2gAT3P45XLCdnFp24pZ93m_qCI0A42m0CVSEh2uuv0djwx8FRzLuI8Be-9Y99ihiGk=",
                }

        data = {"params": "{\"data\":\"{\\\"dmDeliveryAddress_208638\\\":{\\\"ref\\\":\\\"43624bf\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208638\\\",\\\"tag\\\":\\\"dmDeliveryAddress\\\",\\\"type\\\":\\\"dinamicx$3110$dmdeliveryaddress201904\\\",\\\"fields\\\":{\\\"phoneTitle\\\":\\\"电话\\\",\\\"address\\\":\\\"上海上海市浦东新区周家渡街道成山路475弄66号601\\\",\\\"consignee\\\":\\\"黄子瀚\\\",\\\"addressTitle\\\":\\\"收货地址\\\",\\\"phone\\\":\\\"13816140582\\\",\\\"consigneeTitle\\\":\\\"收件人\\\",\\\"addressStatus\\\":0,\\\"addressId\\\":142548589},\\\"events\\\":{\\\"addressClick\\\":[{\\\"tag\\\":\\\"openPopupWindow\\\",\\\"type\\\":\\\"openPopupWindow\\\",\\\"fields\\\":{\\\"css\\\":{\\\"height\\\":\\\"0.6\\\"},\\\"options\\\":{\\\"needCloseButton\\\":true},\\\"nextRenderRoot\\\":\\\"dmDeliveryAddressSelectPopupWindowBlock_208638_window_root\\\",\\\"params\\\":{}}}]}},\\\"item_c63f175840340ae9c8e5d843201bb0e7\\\":{\\\"ref\\\":\\\"360f46f\\\",\\\"submit\\\":true,\\\"hidden\\\":{\\\"extensionMap\\\":{\\\"valid\\\":true,\\\"itemId\\\":\\\"733071713999\\\",\\\"bizCode\\\":\\\"ali.china.damai\\\",\\\"cartId\\\":\\\"0\\\",\\\"shoppingOrderId\\\":\\\"0\\\",\\\"villagerId\\\":\\\"0\\\",\\\"skuId\\\":\\\"5246716671861\\\"}},\\\"id\\\":\\\"c63f175840340ae9c8e5d843201bb0e7\\\",\\\"tag\\\":\\\"item\\\",\\\"type\\\":\\\"block$null$emptyBlock\\\",\\\"fields\\\":{}},\\\"dmContactPhone_208648\\\":{\\\"ref\\\":\\\"1934a29\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208648\\\",\\\"tag\\\":\\\"dmContactPhone\\\",\\\"type\\\":\\\"dinamicx$3116$dmcontactsphone201904\\\",\\\"fields\\\":{\\\"placeholder\\\":\\\"请填写联系人手机号\\\",\\\"label\\\":\\\"手机号\\\",\\\"list\\\":[{\\\"area\\\":\\\"中国大陆\\\",\\\"code\\\":\\\"+86\\\"},{\\\"area\\\":\\\"中国香港\\\",\\\"code\\\":\\\"+852\\\"},{\\\"area\\\":\\\"中国澳门\\\",\\\"code\\\":\\\"+853\\\"},{\\\"area\\\":\\\"中国台湾\\\",\\\"code\\\":\\\"+886\\\"}],\\\"value\\\":\\\"13816140582\\\",\\\"selectedIndex\\\":0},\\\"events\\\":{\\\"itemClick\\\":[{\\\"tag\\\":\\\"openPopupWindow\\\",\\\"type\\\":\\\"openPopupWindow\\\",\\\"fields\\\":{\\\"css\\\":{\\\"height\\\":\\\"0.6\\\"},\\\"options\\\":{\\\"needCloseButton\\\":true},\\\"nextRenderRoot\\\":\\\"dmContactPhoneAreaCodeSelectPopupWindowBlock_dmContactPhoneAreaCodeSelectPopupWindowBlock__window_root\\\",\\\"params\\\":{\\\"phoneAreaCodeEntries\\\":\\\"[{\\\\\\\"area\\\\\\\":\\\\\\\"中国大陆\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"+86\\\\\\\"},{\\\\\\\"area\\\\\\\":\\\\\\\"中国香港\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"+852\\\\\\\"},{\\\\\\\"area\\\\\\\":\\\\\\\"中国澳门\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"+853\\\\\\\"},{\\\\\\\"area\\\\\\\":\\\\\\\"中国台湾\\\\\\\",\\\\\\\"code\\\\\\\":\\\\\\\"+886\\\\\\\"}]\\\"}}}],\\\"onFinish\\\":[{\\\"tag\\\":\\\"input\\\",\\\"type\\\":\\\"input\\\",\\\"fields\\\":{\\\"value\\\":\\\"13816140582\\\"}}]},\\\"validate\\\":{\\\"msg\\\":[\\\"请填写联系人手机号\\\"],\\\"regex\\\":[\\\"^[\\\\\\\\S]+$\\\"],\\\"fields\\\":[\\\"value\\\"]},\\\"status\\\":\\\"hidden\\\"},\\\"dmViewer_208634\\\":{\\\"ref\\\":\\\"cba4eb8\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208634\\\",\\\"tag\\\":\\\"dmViewer\\\",\\\"type\\\":\\\"native$null$dmviewer\\\",\\\"fields\\\":{\\\"omitDisplaySum\\\":20,\\\"buyerTotalNum\\\":2,\\\"idTypes\\\":\\\"1,4,7,5,6\\\",\\\"asyncTarget\\\":\\\"dmViewerTitle_208634\\\",\\\"expandTip\\\":\\\"全部观演人\\\",\\\"viewerList\\\":[{\\\"hashIdentityNo\\\":\\\"511************527\\\",\\\"idType\\\":1,\\\"idTypeDesc\\\":\\\"身份证\\\",\\\"identityNo\\\":\\\"\\\",\\\"isDisabled\\\":false,\\\"isUsed\\\":true,\\\"maskedIdentityNo\\\":\\\"511************527\\\",\\\"viewerId\\\":\\\"11000d669be2869259e595a4aa4f8801667ca5827c391\\\",\\\"viewerName\\\":\\\"李敏\\\"},{\\\"hashIdentityNo\\\":\\\"310************912\\\",\\\"idType\\\":1,\\\"idTypeDesc\\\":\\\"身份证\\\",\\\"identityNo\\\":\\\"\\\",\\\"isDisabled\\\":false,\\\"isUsed\\\":true,\\\"maskedIdentityNo\\\":\\\"310************912\\\",\\\"viewerId\\\":\\\"11000ca7e5e0254e88c653238009d7bd497ed2955cf5b\\\",\\\"viewerName\\\":\\\"黄子瀚\\\"}],\\\"selectedNum\\\":2},\\\"validate\\\":{\\\"msg\\\":[\\\"共需选择2位观演人\\\"],\\\"regex\\\":[\\\"2\\\"],\\\"fields\\\":[\\\"selectedNum\\\"]}},\\\"dmEttributesHiddenBlock_DmAttributesBlock\\\":{\\\"ref\\\":\\\"3dea421\\\",\\\"submit\\\":true,\\\"id\\\":\\\"DmAttributesBlock\\\",\\\"tag\\\":\\\"dmEttributesHiddenBlock\\\",\\\"type\\\":\\\"block$null$dmettributeshidden\\\",\\\"fields\\\":{\\\"extraAttributes\\\":\\\"{\\\\\\\"finalRenderTraceId\\\\\\\":\\\\\\\"2150416216932355706531653ec9fb\\\\\\\",\\\\\\\"renderTraceId\\\\\\\":\\\\\\\"2150416216932355706531653ec9fb\\\\\\\"}\\\"}},\\\"dmDeliverySelectCard_208636\\\":{\\\"ref\\\":\\\"954e85d\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208636\\\",\\\"tag\\\":\\\"dmDeliverySelectCard\\\",\\\"type\\\":\\\"dinamicx$3127$dmselectheader\\\",\\\"fields\\\":{\\\"tipInfo\\\":\\\"\\\",\\\"selectedId\\\":\\\"2\\\",\\\"extraLink\\\":false,\\\"title\\\":\\\"配送方式\\\",\\\"desc\\\":\\\"快递\\\"}},\\\"confirmOrder_1\\\":{\\\"ref\\\":\\\"8318d7a\\\",\\\"submit\\\":true,\\\"hidden\\\":{\\\"extensionMap\\\":{\\\"pageType\\\":\\\"DAMAI\\\",\\\"umid\\\":\\\"\\\",\\\"__ex_params__\\\":\\\"{\\\\\\\"channel\\\\\\\":\\\\\\\"damai_app\\\\\\\",\\\\\\\"ua\\\\\\\":\\\\\\\"140#27TDmA1WzzPVQzo23xoF4pN8s9xbhOne7t40UnqHmHqHptyCFmlA+bEuZr3bK3mIwVM426hqzznJqcSUPfbzzjD6IHoqlQzx2DD3VthqzFd12XU+llfzzPziVWFnlT8I1wba7X53xYYCTdkWsdWE5CTH83TmqZ5i6ePaeMrfG70DxqRs5E/zx8f/jWH8U87Q4239c4DA2tytZbaYOsNXZ9kgIqyN3T08jUAq6t0QBWvAZ5jYDcxBRR/RD7Uwt919hsNPyTf4+NqODnm1Ti/bdJ0znP4ECF6ypLHCRL0ZvqVC6zHl9cfMXyFFITqFlVbOAH1NU9+uxev3RYVjV13CzQoS6iOxuCqMrMZd3V2vlI35NCQzEQR1RjpZtrHg0VVf/khRiqpVqZsVbhlY+FJA/ibyef3CIaZZJ+6eq1YkE7PlJxzU0+JnUCojxg6WKFyvsaiMsbcjztnIuPiIzXs72FiUMyfxjEElIPxEirFHL+1K9ad9r1IDE9JIWCZsWzdRVDQuYfG9wo0XLxEJ0Xm492aAVGDJuUduW0K8+9aRzc2NtkX4kiWMIlXtZ9Bh1bp0Jy7KK3Nzm8ll5wD0qnfjhlEBuYAgQzpInAKnVimSow38FUqVSbhHhdFpdMSVl3YLpgni3mY/rTBc0QgqU9EHcP2wze+Qg48/X5ePx8YRF1geVrQGbEIv8ehAmzr+Ga51Q59i94pTV2RCX/t2rXBbNR5y8T5nYK1o034yWgCTcPbZ/tTsbVgZlGdGSc2i8t5OlB51mtCqGJZm7o8FGif3tfRuFM3cZD60kAWVx6MbJB+uwKfbwPIi/4njEr02xafhv9lj6bQr4xe3OQZLn1ck5pFIyU6Db5Po+6M/hH4M9UfoPx9VQIer0WeOiq3xEQVuhDViQDj+vG9jIR9WdjHntplGA8ayygSR03KrXBB5CMaA1dq7k6Lqx77xLSIN9cGz6IzpByNazKQQ+urCHcqDxhEVDS39jGhJlK4nnxfLqBItIoLSZGM2UWOBmwMX7LU55PnJv/LFLa32XWr2WVkzxfqFyNaSDryFphjRqRI/vXYVduRF45RZW0zpwgLEfNFB+Vk0+Tv6PVDdgZwhQJ/bmcjnW8cx\\\\\\\",\\\\\\\"promotionCompressInfo\\\\\\\":\\\\\\\"nEMPTY\\\\\\\",\\\\\\\"umpChannel\\\\\\\":\\\\\\\"100031004\\\\\\\",\\\\\\\"serviceVersion\\\\\\\":\\\\\\\"2.0.0\\\\\\\",\\\\\\\"multiItemsShoppingFlag\\\\\\\":true,\\\\\\\"customerType\\\\\\\":\\\\\\\"default\\\\\\\",\\\\\\\"EXCLUDE_BY_NEWTON_GRAY_KEY\\\\\\\":true,\\\\\\\"damai\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"subChannel\\\\\\\":\\\\\\\"damai@damaih5_h5\\\\\\\",\\\\\\\"atomSplit\\\\\\\":\\\\\\\"1\\\\\\\",\\\\\\\"signKey\\\\\\\":\\\\\\\"cEl4bXJdXglkRV51QEF1eXZTfGxyWFwOZkVafFo3GBcTIgoSBzI6bBIgOB8=\\\\\\\",\\\\\\\"promotionCompressInfoBeyondItem\\\\\\\":\\\\\\\"nEMPTY\\\\\\\"}\\\",\\\"joinId\\\":\\\"c63f175840340ae9c8e5d843201bb0e7\\\"}},\\\"id\\\":\\\"1\\\",\\\"tag\\\":\\\"confirmOrder\\\",\\\"type\\\":\\\"block$null$emptyBlock\\\",\\\"fields\\\":{}},\\\"dmPayType_208656\\\":{\\\"ref\\\":\\\"b7922c3\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208656\\\",\\\"tag\\\":\\\"dmPayType\\\",\\\"type\\\":\\\"native$null$dmpaytype\\\",\\\"fields\\\":{\\\"allTip\\\":\\\"其他支付方式\\\",\\\"paytypeList\\\":[{\\\"cashierOrderNo\\\":\\\"enableCashier\\\",\\\"code\\\":\\\"ALIPAY_WAP\\\",\\\"icon\\\":\\\"https://gw.alicdn.com/tfs/TB1oqi.owgP7K4jSZFqXXamhVXa-64-64.png\\\",\\\"isUsed\\\":true,\\\"name\\\":\\\"支付宝\\\",\\\"payPromotionAmount\\\":\\\"337800\\\",\\\"payTypeId\\\":1}]},\\\"events\\\":{\\\"itemClick\\\":[{\\\"tag\\\":\\\"select\\\",\\\"type\\\":\\\"select\\\",\\\"fields\\\":{}}]}},\\\"item_827bce4d9d76af44da2e71db5d6480d9\\\":{\\\"ref\\\":\\\"360f46f\\\",\\\"submit\\\":true,\\\"hidden\\\":{\\\"extensionMap\\\":{\\\"valid\\\":true,\\\"itemId\\\":\\\"733071713999\\\",\\\"bizCode\\\":\\\"ali.china.damai\\\",\\\"cartId\\\":\\\"0\\\",\\\"shoppingOrderId\\\":\\\"0\\\",\\\"villagerId\\\":\\\"0\\\",\\\"skuId\\\":\\\"5246716671861\\\"}},\\\"id\\\":\\\"827bce4d9d76af44da2e71db5d6480d9\\\",\\\"tag\\\":\\\"item\\\",\\\"type\\\":\\\"block$null$emptyBlock\\\",\\\"fields\\\":{}},\\\"dmContactName_208647\\\":{\\\"ref\\\":\\\"60f80d3\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208647\\\",\\\"tag\\\":\\\"dmContactName\\\",\\\"type\\\":\\\"dinamicx$3128$dminput\\\",\\\"fields\\\":{\\\"label\\\":\\\"姓名\\\",\\\"placeholder\\\":\\\"请填写联系人姓名\\\",\\\"value\\\":\\\"黄子瀚\\\"},\\\"events\\\":{\\\"onFinish\\\":[{\\\"tag\\\":\\\"input\\\",\\\"type\\\":\\\"input\\\",\\\"fields\\\":{\\\"value\\\":\\\"黄子瀚\\\"}}]},\\\"validate\\\":{\\\"msg\\\":[\\\"请填写联系人姓名\\\",\\\"联系人姓名不可长于10\\\"],\\\"regex\\\":[\\\"^[\\\\\\\\S]+$\\\",\\\"^[\\\\\\\\S]{1,10}$\\\"],\\\"fields\\\":[\\\"value\\\",\\\"value\\\"]},\\\"status\\\":\\\"hidden\\\"},\\\"dmContactEmail_208649\\\":{\\\"ref\\\":\\\"63ba2eb\\\",\\\"submit\\\":true,\\\"id\\\":\\\"208649\\\",\\\"tag\\\":\\\"dmContactEmail\\\",\\\"type\\\":\\\"dinamicx$3128$dminput\\\",\\\"fields\\\":{\\\"label\\\":\\\"邮箱\\\",\\\"placeholder\\\":\\\"请填写联系人邮箱\\\"},\\\"events\\\":{\\\"onFinish\\\":[{\\\"tag\\\":\\\"input\\\",\\\"type\\\":\\\"input\\\",\\\"fields\\\":{}}]},\\\"validate\\\":{\\\"msg\\\":[\\\"请填写联系人邮箱\\\"],\\\"regex\\\":[\\\"^[\\\\\\\\S]+$\\\"],\\\"fields\\\":[\\\"value\\\"]},\\\"status\\\":\\\"hidden\\\"}}\",\"linkage\":\"{\\\"common\\\":{\\\"compress\\\":true,\\\"submitParams\\\":\\\"^^$$Z5e31fdecdd22afe2cad294be7fb38fecb|!ali.china.damai|null|null|null{$_$}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\\\",\\\"validateParams\\\":\\\"^^$$6d00b1cc19d68866f5dd65438c6be261{$_$}H4sIAAAAAAAAAIVR22obMRT8Fz0bsTfvrv22u1rTPNQYmgT6FI6lY3uxdiUkmdYJ/oj8Q0j/odDPCaV/0bM1ISYQ+nZmOJqZM3pgGwc9fjNuvwKa/FVvNZs/MKshbIzrr48WRyw1eL+kVTZn0vQcdLeGNfDgQCGXusMh8N4o1Nybg5PIVxcKtwmbsOH8+tOUZuNUNwA5RacJs7DFj3wCmDUYTpbWDKOHOpJOJ3mPAS7ocUHjd17ffE346lXwrE2RFfTQka9CLwm+PP348/P5969HsJbYHtweA/FvKUX1ubq6DBonlFQbCXqs4H531ywZMQePrvK+2w7/b8nvwKHi1qGnSyB0ZuB2bJ0LCHBLlap/n3BuC1E1O5T7hkpl8w1ojxOGg3RHG74E1w1bytFWTSTSukzSMpsW06iu83YxmyWlqIu8SRaiSEUR51Ebi7qclYs0i8WizYs8y+IqS9MmzivRRlXWNMk0i9r3mJ1OfwG0N80HIwIAAA==\\\"},\\\"signature\\\":\\\"2ddc5bec1781be35dd6274495401b6a2\\\"}\",\"hierarchy\":\"{\\\"structure\\\":{\\\"dmViewerBlock_DmViewerBlock\\\":[\\\"dmViewerTitle_208634\\\",\\\"dmViewer_208634\\\"],\\\"dmContactBlock_DmContactBlock\\\":[\\\"dmContactTitle_208646\\\",\\\"dmContactName_208647\\\",\\\"dmContactEmail_208649\\\",\\\"dmContactPhone_208648\\\"],\\\"dmItemBlock_DmItemBlock\\\":[\\\"dmItemInfo_208631\\\",\\\"dmTicketsInfo_208632\\\"],\\\"order_d400c66e3d9cc6811551389a44b9a6bb\\\":[\\\"item_c63f175840340ae9c8e5d843201bb0e7\\\",\\\"item_827bce4d9d76af44da2e71db5d6480d9\\\"],\\\"dmPayDetailPopupWindowBlock_208664_window_root\\\":[\\\"dmPayDetailPopup_208659\\\"],\\\"deliveryMethodOptions_d400c66e3d9cc6811551389a44b9a6bb\\\":[\\\"deliveryMethodPopupTitle_d400c66e3d9cc6811551389a44b9a6bb\\\",\\\"deliveryMethodOption_d400c66e3d9cc6811551389a44b9a6bb_0|20\\\",\\\"deliveryMethodPopupConfirm_d400c66e3d9cc6811551389a44b9a6bb\\\"],\\\"dmDeliveryWayBlock_DmDeliveryWayBlock\\\":[\\\"dmDeliverySelectCard_208636\\\",\\\"dmDeliveryTip_208637\\\",\\\"dmDeliveryAddress_208638\\\",\\\"dmDeliveryFee_208640\\\",\\\"dmDeliveryMachineAddress_208642\\\",\\\"dmDeliveryTicketAddress_208643\\\"],\\\"confirmOrder_1\\\":[\\\"dmTopNotificationBlock_DmTopNotificationBlock\\\",\\\"dmItemBlock_DmItemBlock\\\",\\\"dmViewerBlock_DmViewerBlock\\\",\\\"dmDeliveryWayBlock_DmDeliveryWayBlock\\\",\\\"dmContactBlock_DmContactBlock\\\",\\\"order_d400c66e3d9cc6811551389a44b9a6bb\\\",\\\"dmInvoiceBlock_DmInvoiceBlock\\\",\\\"dmPromotionBlock_DmPromotionBlock\\\",\\\"dmPayTypeBlock_DmPayTypeBlock\\\",\\\"dmOrderSubmitBlock_DmOrderSubmitBlock\\\",\\\"dmEttributesHiddenBlock_DmAttributesBlock\\\"],\\\"dmOrderSubmitBlock_DmOrderSubmitBlock\\\":[\\\"dmNewProtocol_208663\\\",\\\"dmSubmit_208664\\\"],\\\"dmPayTypeBlock_DmPayTypeBlock\\\":[\\\"dmPayTypeTitle_208656\\\",\\\"dmPayType_208656\\\"],\\\"dmTopNotificationBlock_DmTopNotificationBlock\\\":[\\\"dmTopNotification_208629\\\"]}}\"}", "feature": "{\"subChannel\":\"damai@damaih5_h5\",\"returnUrl\":\"https://m.damai.cn/damai/pay-success/index.html?spm=a2o71.orderconfirm.bottom.dconfirm\",\"serviceVersion\":\"2.0.0\"}", "submitref": "c8321c0a4beab84fd30d697db618d4f9e11fa81eafda9b20c0173d5af35b13e7"}

        response = requests.post(
            'https://mtop.damai.cn/h5/mtop.trade.order.create.h5/4.0/',
            params=params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        with open("response2.txt", "w", encoding='utf-8') as f:
            f.write(response.text)

    def get_page2(self):
        data = {
            'data': '{"buyNow":true,"exParams":"{\\"damai\\":\\"1\\",\\"channel\\":\\"damai_app\\",\\"umpChannel\\":\\"10002\\",\\"atomSplit\\":\\"1\\",\\"serviceVersion\\":\\"2.0.0\\",\\"signKey\\":\\"cEl4bXJdXglkRV51QEF1eXZTfGpxXlAIYEdfdFo3GBcTIgoSBzI6bBIgOB8=\\",\\"ua\\":\\"140#q1rDmj6LzzPs5zo23zSQ4pN8s9xbMxgM8U7NboxyLM61Ho+ArSZm5eQVrhHz31jo0VQ4b3hqzznJRUCHgg1zzRoM9jWqlbrz2DD3V3gqzZsi228+tCfxzDrb4bXTgHmijDapVrMDvf8f884EYz2lOXYYpCzbRZYm2+rr1sgSCo6cQmr+O779xqIT9EBzmtn2aaBny0viLPWZza7elv4JX4yte+JT8GtK8nYumKQPbBD8SuhhwZGcMn68r3NP+IKjaNe7skDiVUCjW9I+an/t68V/XiAZMetjLciVbYzG+4/bcMWX4mAW9reqRZGvo5ofGMPtz2BtxTeSN06DcNXp324UrZ2gDZgCALf5myFjDZNFgm8a//c6v9nN7GjKoLf3rsExQCz9p34GrA6nyXavHnwtUFyip9iMSqbZuvrhj3lpkpX5vqkg26conm33uBrVQ0ocS4A37OV8d+87yDOLTrrNerv7dxVwzzqIIZU4JehYgKlzjqcOEbTNdFJphRmpNTzEJ+NCQz9to4DiBlagFVT3fPdCNMAWAgThFCXp5ZqFdonVGKiEN/EcIAhdMlwjRtI3HjXBye5DTW4XvUZbsKG6qZQ16im4Okut2G1qVyfQYk2toIIdwp51lUh7APYDr70Jz9XhF8pOEcgq8rc6nUdc2dr60u2Ygm28399KmC1ecZBO81D8kU/PGjsTRYZWRy8pBIzOlt5oUWKjz3xk6OFWl7wz03z16ODsNYdCxNVbKzGRgMjuGKuSysUqx+gnAJ8U5Ar5XeDy+EnS8B7BlAUef5wY9SFx8qdPx7UjiVpgH8JoS4AfYzW5crtWn9MtJ8G6RWZ4Onjw2OnukfMLnN9nmeIB1UHlNLE4cwG0YjOwujlPSnAbfass6+ilZFqQX03fqUhWZiLzui62WOSw9Ovojmomt3ZVaokZIwexlQ6tFuBGXP1K8JqMq6czYmNUj6kv0qECLPwRAcuJHnNbjRlrNkBYMkhqnP77PpooBvK2WrABpAe6PNRjX7TA3PMDw3RkRLCULxmh5ZEUeybgZe15ucMj576+GiXUVu3oGKFHLw7AU0ygpql02B8E+gU38P9dElRWGtQ0rOkkad8zzcgZrjQO\\",\\"subChannel\\":\\"damai@damaih5_h5\\",\\"customerType\\":\\"default\\"}","buyParam":"733071713999_1_5246716671861","dmChannel":"damai@damaih5_h5"}',
        }

        # data = {
        #     'data': '{"buynow":true,"exparams":"{\\"damai\\":\\"1\\",\\"channel\\":\\"damai_app\\",\\"umpchannel\\":\\"10002\\",\\"atomsplit\\":\\"1\\",\\"serviceversion\\":\\"2.0.0\\",\\"signkey\\":\\"cel4bxjdxglkrv51qef1exztfg14x10iakdyfvo3gbctigosbzi6bbigob8=\\",\\"subchannel\\":\\"damai@damaih5_h5\\",\\"customertype\\":\\"default\\"}","buyparam":"733071713999_1_5246716671861","dmchannel":"damai@damaih5_h5"}'}

        token = self.cookies['_m_h5_tk'].split('_')[0]
        with open('./jsreverse/damai/damai2.js', 'r', encoding="utf-8") as f:
            js_file = f.read()
        keyparam = execjs.compile(
            js_file).call('main', token, data['data'])
        headers = {
            'authority': 'mtop.damai.cn',
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'cache-control': 'no-cache',
            'content-type': 'application/x-www-form-urlencoded',
            'globalcode': 'ali.china.damai',
            'origin': 'https://m.damai.cn',
            'pragma': 'no-cache',
            'referer': 'https://m.damai.cn/',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
        }
        params = {
            'jsv': '2.7.2',
            'appKey': '12574478',
            'type': 'originaljson',
            'dataType': 'json',
            'v': '4.0',
            'H5Request': 'true',
            'AntiCreep': 'true',
            'AntiFlood': 'true',
            'api': 'mtop.trade.order.build.h5',
            'method': 'POST',
            'ttid': '#t#ip##_h5_2014',
            'globalCode': 'ali.china.damai',
            'tb_eagleeyex_scm_project': '20190509-aone2-join-test',
        }
        params.update(keyparam)

        response = requests.post(
            'https://mtop.damai.cn/h5/mtop.trade.order.build.h5/4.0/',
            params=params,
            cookies=self.cookies,
            headers=headers,
            data=data,
        )
        return response.text


if __name__ == "__main__":
    damai = Damai()
    damai.login()

    print(damai.get_page2())
    damai.getparam()

    damai.get_ticket()
