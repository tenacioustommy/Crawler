import requests

data={
    'limit': '20',
    'current': '1',
    'pubDateStartTime': '',
    'pubDateEndTime': '',
    'prodPcatid': '',
    'prodCatid': '',
    'prodName': '',
}
def download_one_page(url):
    resp=requests.post(url,data=data)
    print(resp.text)
if __name__=="__main__":
    download_one_page('http://xinfadi.com.cn/priceDetail.html')
