import requests
class gym:
    def __init__(self, username=0, password=0):
        self.username = username
        self.password = password
        self.cookies  = {
        '_ga': 'GA1.3.1315508667.1697032069',
        '_gid': 'GA1.3.1996120587.1710685337',
        '_ga_QP6YR9D8CK': 'GS1.3.1710730533.15.0.1710730533.0.0.0',
        'NSC_tqpsut.tkuv.fev.do': 'ffffffff097f1ced45525d5f4f58455e445a4a4229a0',
        'JSESSIONID': 'ed5aa51a-1d56-41e5-9351-9638a26574dd',
    }
        
    def login(self):
        pass
    def getOrderid(self):
        headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json;charset=UTF-8',
            # 'Cookie': '_ga=GA1.3.1315508667.1697032069; _gid=GA1.3.1996120587.1710685337; _ga_QP6YR9D8CK=GS1.3.1710730533.15.0.1710730533.0.0.0; NSC_tqpsut.tkuv.fev.do=ffffffff097f1ced45525d5f4f58455e445a4a4229a0; JSESSIONID=ed5aa51a-1d56-41e5-9351-9638a26574dd',
            'Origin': 'https://sports.sjtu.edu.cn',
            'Referer': 'https://sports.sjtu.edu.cn/pc/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sid': 'IQuABDNM/i5xmZ9Lf9z7Kn54UflIz1RjeqVQ6ZXVGGUSmsoyFpdMRuXuYOXvnp82c5Kv+k+1F+caFCxsHCtVaR4v6jixLR1vsJN7YIaXaXq2s7ccVO82rb7gjMpK5fgGkJPU1CESDaFLPEGMnjXQugx/t8WQkDNnPJSIPJQjfwHsnT2lN/bmobRmyaWN6JOBuhCA42D4vasoUtjyoUOxNn6rMivLiQD8h8Qz4YiKZGMh/zTXDKYVXzmW0FELMLOPPBNVa9fYAJgPcM6E75IhybQunrYc3CMPC18WP92bT962mat+No8UOdejk+GopoyRL706ax+NKqLJH9hFoyjEvw==',
            'tim': 'DTdeEvOjGcJDNx0zXtoOyOM/c/ASD2vo/MsUNYNA69y/E87UZP+p88CDpQGFPQYjoQxOeOzApMxid2qZQdAkn9gfecbhMojWDo+DKcs+MDY3sfpzEHaHY4+nFMulPPakBpWRCh+rvaKGgTuDX8BIs7bY7jW/v/m3V+8qwfMfhv1eazkKwvO6ncxHRM/q1eh+KZ0u0sVZLvECLUDJ4/s6BTz/hfNbFa5qlDf7H9h8Ilx5u/nBliRUUjRp6K8FVtTDK6KcFcd79KbxA2o0D1oJcbYX1JjMrgiC4dbnWXRmI7s5vS5OzJuEvXkT46E4zOjwiXRSklZpVsMI2OCEgLYtnQ==',
        }

        data = 'Bfo1gSBpwR8E42jfOU1dk0Eog+F6xG+tKIEeWPewctau3a0Z4pHgdgwcjAHfUYwHVqZtTqqAGTmJclr6fWYU2QcVtc3vjXrvI2ZgRirjj2UD4kkrQH0dwuDuYwtUG4S8lG2L0Td6097K3o10clcCdvqNTiet876tVi84tobpW+1fng4qByb5XAFjiMXNDVuDULMdQhtPSSkqn70WtwMKjyH421RILOyDtdUrd0LugndPAF3GfURN94A6UNXC0ml2u3F+hh7X1iYb2t7wSrcdo/wVAtvqYtQfeRI5Kvn2mNiBHMCmIl9SvT3mEP+sj0Srf1ZWbgBdSPX4lucuhTLmFhb7q8yECEkQmSUAED50GunJVh4Cz2j231R41nVmj8/opiZ2SNSHvizcd+XILXvBHZ0zFa29oAzVIjmZzuWIk0ho0MC4jigRSYn2NYYn0fw/CY72kh3EqEhYEF2XKMMYuWslpGin35rBMZ8O1VHNU4OQC8hbiQAil4RIvbE4Maq95rMCPtJtty9jsgv8QBoP9XdVWdzjWZT27dsj3eMG8xniYd00JLT0z9hhz/l/NdwD'

        response = requests.post('https://sports.sjtu.edu.cn/venue/personal/ConfirmOrder', cookies=self.cookies, headers=headers, data=data)

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Connection': 'keep-alive',
    # 'Cookie': '_ga=GA1.3.1315508667.1697032069; _gid=GA1.3.1996120587.1710685337; _ga_QP6YR9D8CK=GS1.3.1710730533.15.0.1710730533.0.0.0; NSC_tqpsut.tkuv.fev.do=ffffffff097f1ced45525d5f4f58455e445a4a4229a0; JSESSIONID=ed5aa51a-1d56-41e5-9351-9638a26574dd',
    'Referer': 'https://sports.sjtu.edu.cn/pc/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'orderId': '755490559430496256',
}

response = requests.get('https://sports.sjtu.edu.cn/venue/personal/queryOrder', params=params, cookies=cookies, headers=headers)