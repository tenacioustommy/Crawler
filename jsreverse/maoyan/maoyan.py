import requests

cookies = {
    '_lxsdk_cuid': '18a20068d42c8-0955b54201a85a-26031f51-384000-18a20068d42c8',
    'ci': '10%2C%E4%B8%8A%E6%B5%B7',
    'WEBDFPID': '12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1-2008114503676-1692754502388GIEMYWCfd79fef3d01d5e9aadc18ccd4d0c95078529',
    'com.sankuai.show.mmh5.static_random': '',
    'PPA_CI': '70c4aad3328b73375b7b33b3b7b67047',
    'Hm_lvt_703e94591e87be68cc8da0da7cbd0be2': '1692754789,1693718039',
    'token': 'AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt',
    '_lxsdk': 'F1A45B50415511EEBEEAEB169714707D0E6F1A520DEE488CA57709B5FD55ADC2',
    '_lx_utm': '',
    'com.sankuai.show.mmh5.static_strategy': '',
    '_lxsdk_s': '18a5a631ce1-412-7ab-fdb%7C%7C421',
}
cookies = {
    '_lxsdk_cuid': '18a20068d42c8-0955b54201a85a-26031f51-384000-18a20068d42c8',
    'ci': '10%2C%E4%B8%8A%E6%B5%B7',
    'WEBDFPID': '12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1-2008114503676-1692754502388GIEMYWCfd79fef3d01d5e9aadc18ccd4d0c95078529',
    'com.sankuai.show.mmh5.static_random': '',
    'PPA_CI': '70c4aad3328b73375b7b33b3b7b67047',
    'Hm_lvt_703e94591e87be68cc8da0da7cbd0be2': '1692754789,1693718039',
    'token': 'AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt',
    '_lxsdk': 'F1A45B50415511EEBEEAEB169714707D0E6F1A520DEE488CA57709B5FD55ADC2',
    '_lx_utm': '',
    'com.sankuai.show.mmh5.static_strategy': '',
    '_lxsdk_s': '18a5a631ce1-412-7ab-fdb%7C%7C426',
}
cookies = {
    '_lxsdk_cuid': '18a20068d42c8-0955b54201a85a-26031f51-384000-18a20068d42c8',
    'ci': '10%2C%E4%B8%8A%E6%B5%B7',
    'WEBDFPID': '12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1-2008114503676-1692754502388GIEMYWCfd79fef3d01d5e9aadc18ccd4d0c95078529',
    'com.sankuai.show.mmh5.static_random': '',
    'PPA_CI': '70c4aad3328b73375b7b33b3b7b67047',
    'Hm_lvt_703e94591e87be68cc8da0da7cbd0be2': '1692754789,1693718039',
    'token': 'AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt',
    '_lxsdk': 'F1A45B50415511EEBEEAEB169714707D0E6F1A520DEE488CA57709B5FD55ADC2',
    '_lx_utm': '',
    'com.sankuai.show.mmh5.static_strategy': '',
    '_lxsdk_s': '18a5a631ce1-412-7ab-fdb%7C%7C459',
}
headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    # 'Cookie': '_lxsdk_cuid=18a20068d42c8-0955b54201a85a-26031f51-384000-18a20068d42c8; ci=10%2C%E4%B8%8A%E6%B5%B7; WEBDFPID=12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1-2008114503676-1692754502388GIEMYWCfd79fef3d01d5e9aadc18ccd4d0c95078529; com.sankuai.show.mmh5.static_random=; PPA_CI=70c4aad3328b73375b7b33b3b7b67047; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1692754789,1693718039; token=AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt; _lxsdk=F1A45B50415511EEBEEAEB169714707D0E6F1A520DEE488CA57709B5FD55ADC2; _lx_utm=; com.sankuai.show.mmh5.static_strategy=; _lxsdk_s=18a5a631ce1-412-7ab-fdb%7C%7C421',
    'Origin': 'https://show.maoyan.com',
    'Pragma': 'no-cache',
    'Referer': 'https://show.maoyan.com/qqw/confirm?',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'mtgsig': '{"a1":"1.1","a2":1693735565698,"a3":"12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1","a5":"I3FB/gYd/YHQK1Bg2XxgXzkA3E04UWfiIc==","a6":"h1.50Uj4tr3ZvhXyqj9nLSSgspbn9Ndtw71tfqXpVsCYygn5tM3yuhGnlLw1x+H5Hvvjco+AYr2JJq8170jHhTIt2R7axS6lc1rQ5oLBezohAlEoogooHl+ZrwN/QW+ebMuBvy9Ep4ZK3CGnYIZYubOpzayl0xBnQAJV4SDf2musAgKx5B3srg5T/FegnVi1MKVFhGnsc6H16TiEytq18eFu2xRBzAHXumXLfwbPwu/VLDT5wEZvvrmXPabUfylhSk9FIMzzVrlRWf9KoXqJiNciUextq6oDyixwLERtG+MADgmuzZ9yVdMUuXENTij4/Aw9PtoT8o2+I2c6WxaTXVUF8aD3QXOhnubqw1h+SWQOg3wB3ibK8mLCYM/koVFZonHP9NNrzxwgnNmox8PsUbpvQR/rSSITMO+4QyYi5k1WwGU=","x0":4,"d1":"46dc4bf151ff362e5faa115317237dfe"}',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    # 'Cookie': '_lxsdk_cuid=18a20068d42c8-0955b54201a85a-26031f51-384000-18a20068d42c8; ci=10%2C%E4%B8%8A%E6%B5%B7; WEBDFPID=12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1-2008114503676-1692754502388GIEMYWCfd79fef3d01d5e9aadc18ccd4d0c95078529; com.sankuai.show.mmh5.static_random=; PPA_CI=70c4aad3328b73375b7b33b3b7b67047; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1692754789,1693718039; token=AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt; _lxsdk=F1A45B50415511EEBEEAEB169714707D0E6F1A520DEE488CA57709B5FD55ADC2; _lx_utm=; com.sankuai.show.mmh5.static_strategy=; _lxsdk_s=18a5a631ce1-412-7ab-fdb%7C%7C426',
    'Origin': 'https://show.maoyan.com',
    'Pragma': 'no-cache',
    'Referer': 'https://show.maoyan.com/qqw/confirm?',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'mtgsig': '{"a1":"1.1","a2":1693735739956,"a3":"12yxxx64u5945vx6y6y7uwz2636x167081z7992v0769795837793xu1","a5":"lHE+tURZRNnxz59Uwy852pUuT4fC1aGCBI==","a6":"h1.5xeF5YTf+8cOoz28T4xzpAuubRl7fjt1f8/UD8DKWvxhqptmqrE89K0ejkuqONPCRwnLXkI6ptd80tj/LG/CnoEKgxlGBXJK1uP5wxsn5I9pLZElU+ZtxVuMqTSRfKBYTzF2Ktl5y95hx/X9YisRXWUUituZp+TS1W79qP7SO9wfFzBe5vWTFOWiE8He4nY7L/zj9M6uFqSmSyPK7dSsJE4Es3pXsl21Zx4wIXE9lbDrBCYWCWksJqrdMCuiWg2k4p1eCmkBcJ39QkNpxKHMDp0ffm/jMq0yutWKiQCWP6uxo6EKUou22RrHut1KX30p5znLerfuPuwp1+fFWKF7eRgPSFmjJbewrHnXmsY/ceheZbcYxNCwnTxvVJUr60qVEYPz8mDMmeI4uVUFuWtGoCbTmZpjv18ABG8mIu5R2SO4=","x0":4,"d1":"95cd0f02525790796c920a67c79a9f51"}',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'sellChannel': '13',
    'cityId': '10',
    'token': 'AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt',
    'optimus_risk_level': '71',
    'optimus_code': '10',
    'uuid': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    'yodaReady': 'h5',
    'csecplatform': '4',
    'csecversion': '2.1.2',
}
params = {
    'sellChannel': '13',
    'cityId': '10',
    'token': 'AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt',
    'optimus_risk_level': '71',
    'optimus_code': '10',
    'uuid': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    'yodaReady': 'h5',
    'csecplatform': '4',
    'csecversion': '2.1.2',
}
params = {
    'sellChannel': '13',
    'cityId': '10',
    'token': 'AgFpIcR7T87URiwmodxKt1EJS_2-bxDc98FjPsVRGQ_-a9uEnfHbRdBQNPEPVLzdRVkSJ1KQBQFHcQAAAACPGgAAhWdJertDGYOnwZAXYuRt_IxlaOUcYTWgX0AG7ASr4P8U6eF7WmeG29E3yRj40Zdt',
    'optimus_risk_level': '71',
    'optimus_code': '10',
    'uuid': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    'yodaReady': 'h5',
    'csecplatform': '4',
    'csecversion': '2.1.2',
}


data = {
    'sellChannel': '1',
    'dpCityId': '10',
    'salesPlanId': '19232717',
    'showId': '1475517',
    'performanceId': '274070',
    'tpId': '7217',
    'salesPlanSupplyPrice': '827.2',
    'salesPlanSellPrice': '880',
    'salesPlanCount': '1',
    'totalPrice': '880',
    'fetchTicketWayId': '5354032',
    'userMobileNo': '13816140582',
    'recipientMobileAreaCode': '86',
    'clientPlatform': '3',
    'clientVersion': '1.0.0',
    'needRealName': 'true',
    'realNameUserVOList': '[{"id":27912579,"idType":1,"idNumber":"310115200404182912","userName":"黄子瀚","idTypeName":"身份证","status":1,"regionName":"","regionShow":false,"regionTitle":null,"faceCheckOrderNo":null,"unUsableReason":0,"faceCheckStatus":1,"lastFaceCheckTime":null,"prefill":false,"default":true,"originStatus":1,"isSelected":true}]',
    'recipientName': '黄子瀚',
    'recipientMobile': '13816140582',
    'dpId': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    'uuid': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    '_token': 'eJx9kltv2kAQhf/LvmaFZy/etZGqCuMECDg3jKFEeXAMwTTFYIy4Vf3vnV3Vbp8qWfLnmbNnzo78k+wHC9JmwAGAkuNyT9qEtaClCCWHCjvKF1pIpQEEpyT7W3Nd5SpfU/K+T0LSfvU0o0yAejOVFyy8clcBZVLCG60ZkLnEx6gGKCL54bCr2o5T5dtTa5NuL2nRyrYbpyxPTrYtPtb7zVfM8h8ZQa9NbLw85lPNPZR7zEXyLTGqBRgCvyGJxCwBEkfSeBUthCVRk2dOSEvoJ1xLvCbtISlLpqstmWkmgVZeQ2aabwm70iTQLnYls+Q2hM7SZpE4V9oEUjWEqaTNIllNwrjYLMK42CzCuNgs3LjYBFw3hFmkb1b2aVaG79SuTmkchEHDQYIyxvC+jCtOg0kcPz5gyQWc6tUCDRr7eKbpe5xT6Wk6iHpGzZTZ/x+18n1Ue/+4cUB/wEo/jkb4DRSsFvMc6lwR/orYqtarAml5f344X6vp6tJ57kRdPb0Lwks3SpK0zE7Vohgn85thqYY7cIZxuAxPijvHIM3YrAjjHgOWPTkJP5/jURDCygl6ZQzOfT7+yKfj27Q/C78X6cuATYTid6d9P58vpJh0ddqB3VKPPm83k+gYrKvFt9kw/qEfn67ptZjNi7x7sy6j9+cv5Ndv9M3NQQ==',
}
data = {
    'sellChannel': '1',
    'dpCityId': '10',
    'salesPlanId': '19232717',
    'showId': '1475517',
    'performanceId': '274070',
    'tpId': '7217',
    'salesPlanSupplyPrice': '827.2',
    'salesPlanSellPrice': '880',
    'salesPlanCount': '1',
    'totalPrice': '880',
    'fetchTicketWayId': '5354032',
    'userMobileNo': '13816140582',
    'recipientMobileAreaCode': '86',
    'clientPlatform': '3',
    'clientVersion': '1.0.0',
    'needRealName': 'true',
    'realNameUserVOList': '[{"id":27912579,"idType":1,"idNumber":"310115200404182912","userName":"黄子瀚","idTypeName":"身份证","status":1,"regionName":"","regionShow":false,"regionTitle":null,"faceCheckOrderNo":null,"unUsableReason":0,"faceCheckStatus":1,"lastFaceCheckTime":null,"prefill":false,"default":true,"originStatus":1,"isSelected":true}]',
    'recipientName': '黄子瀚',
    'recipientMobile': '13816140582',
    'dpId': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    'uuid': 'ci0iblusu6yvbben0isizag2e6ckbwenmqbxqf3mfynaiouwfjcjd3pdksarx46a',
    '_token': 'eJx9kltv4jAQhf+LX2uR8SV2grRaEdIChfRGCJSqD2mghO0SCEHcVvvfd2yW0qdKkfgYH51zPMkfsu5MSJ0BBwBKttM1qRNWg5oilGwqPFG+0EIqDSA4Jdll5mrh+66i5G2dhKT+4mlGmQD1aiZPOHjhrgLKpIRXemZA5hIfo+qgiOSbzaqqO06VL3e1Rbo8pEUtWy6cstw52bJ4n68XP7HLNzKCXovYeDGuPao9F/WIgCgsKobILboCkVmUBsGikFRrzyJXn8gMaougEc1OGPMxQtsI5vmI8oSYpm0awz1obdOY4og2jbkmwqYxib7KtygM2jTG0VfpE6KZOqUxdFCnNDBo08CXn+gZBxsM5vKKn9A42GAwHZQNBtPhP0qXatd2AIF3c20wcN8iLvTDLBR/U7tYfPumMg07yfm2uGBOg0Ec39/hSGlTQ14ELgrUF4EL5h2cBRr3iQbqcu5xTqWnaSdqGbVZPT/nKd9HtffFjQP6A07acdTD/0DBarHw5lw8wi8Zj6r5rECa3u7v9sdqODs0HhtRUw9vgvDQjJIkLbNdNSn6yfiqW6ruCpxuHE7DneLONkgzNirCuMWAZQ9Owvf7uBeEMHOCVhmDc5v33/Nh/zptj8JfRfrUYQOh+M1u3c7HEykGTZ02YDXVvY/rxSDaBvNq8jzqxr/1/cMxPRajcZE3r+Zl9Pb4g/z9B6By2bM=',
}

response = requests.post(
    'https://show.maoyan.com/maoyansh/myshow/ajax/order',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)


response = requests.post(
    'https://show.maoyan.com/maoyansh/myshow/ajax/order',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)
print(response.json())
