# mitmdump -s httpproxy.py -p 9090
# -*- encoding: utf-8 -*-
import re
INJECT_TEXT = 'Object.defineProperties(navigator,{webdriver:{get:() => false}});Object.defineProperty(navigator, "plugins", {get: () => new Array(Math.floor(Math.random() * 6) + 1),});Object.defineProperty(navigator, "languages", {get: function() {return ["en", "es"];}});'


def response(flow):
    match = re.search(r'\.js$', flow.request.url)
    if match:
        # 屏蔽selenium检测
        flow.response.text = INJECT_TEXT + flow.response.text
        print('注入成功')
        #flow.response.text = flow.response.text + INJECT_TEXT
