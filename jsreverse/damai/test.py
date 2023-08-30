import requests

cookies = {
    'cna': 'yF1sHS7qaQ0CAbfACXjQiqQt',
    'xlly_s': '1',
    '_samesite_flag_': 'true',
    'cookie2': '178c2ac868598da6debb7f39413579b8',
    't': '13381f7cd2ceef756c90243b9a5e51c7',
    '_tb_token_': 'efee06646eb3b',
    'PPA_CI': '2acb5d83e3cc0f10245d82b86266034c',
    '_hvn_login': '18',
    'munb': '2212772851997',
    'csg': 'ed84fe60',
    'damai.cn_nickName': '%E9%BA%A6%E5%AD%902lM35',
    'damai.cn_user': 'y7c3TkBPISEAUxnGUM/xCQ8VpIpBYBbBpa0DGjeHXK2aUoWdw6hsGJryQ/n66wXfGxb2+Rjuqig=',
    'damai.cn_user_new': 'y7c3TkBPISEAUxnGUM%2FxCQ8VpIpBYBbBpa0DGjeHXK2aUoWdw6hsGJryQ%2Fn66wXfGxb2%2BRjuqig%3D',
    'h5token': '1ffbd7c5a9654109974a695c778dd4f3_1_1',
    'damai_cn_user': 'y7c3TkBPISEAUxnGUM%2FxCQ8VpIpBYBbBpa0DGjeHXK2aUoWdw6hsGJryQ%2Fn66wXfGxb2%2BRjuqig%3D',
    'loginkey': '1ffbd7c5a9654109974a695c778dd4f3_1_1',
    'user_id': '177594401',
    '_m_h5_tk': '05590ea9c2dcf74fbfb6aa448196edea_1693406475577',
    '_m_h5_tk_enc': '1d19d0e2169b3175db2dceb04d586c18',
    'x5sec': '7b22617365727665723b32223a2236623339303863303435323835353466623663613763663834646664383738384349575776616347454f57427159722f2f2f2f2f2f7745776735435530774e4141773d3d222c22733b32223a2263336431336564333839353561363166227d',
    'l': 'fBO5bZgHN5cp6FpdBO5BFurza77OZIRb8PVzaNbMiIEGa1-RTFNlENC6xgCW7dtj_TCXEetyVhmX9dIiX34KNxDDBebn3KIonxvtaQtJe',
    'tfstk': 'd09vzAZqB40DgH19Ciho_7olsjio-KK24E-QINb01ULJrH_cShgNBdLMk19DjtT8XMbPiRXcIQI6XFpMih6c1GLHj1iNmImOXaLbGZ_6f3TJNQuqux7MBGB2EI2GoqW9feXt-2DnKn-V_Ogn-OY1qJXMIJf7nvx20OrY5DASKGKvhts6ByNrUy2MIIIj_F2d4uLwBiCAW-b8BT97Ks_BcaesWLBacpvLzEUhJGVx20Fa_ssrJZiNG',
    'isg': 'BPj4F7Wc6LQlygQ6jZEHusLpyaaKYVzrJss-xDJpRDPmTZg32nEsew6sBU19GBTD',
}

headers = {
    'authority': 'mtop.damai.cn',
    'accept': 'application/json',
    'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    # 'cookie': 'cna=yF1sHS7qaQ0CAbfACXjQiqQt; xlly_s=1; _samesite_flag_=true; cookie2=178c2ac868598da6debb7f39413579b8; t=13381f7cd2ceef756c90243b9a5e51c7; _tb_token_=efee06646eb3b; PPA_CI=2acb5d83e3cc0f10245d82b86266034c; _hvn_login=18; munb=2212772851997; csg=ed84fe60; damai.cn_nickName=%E9%BA%A6%E5%AD%902lM35; damai.cn_user=y7c3TkBPISEAUxnGUM/xCQ8VpIpBYBbBpa0DGjeHXK2aUoWdw6hsGJryQ/n66wXfGxb2+Rjuqig=; damai.cn_user_new=y7c3TkBPISEAUxnGUM%2FxCQ8VpIpBYBbBpa0DGjeHXK2aUoWdw6hsGJryQ%2Fn66wXfGxb2%2BRjuqig%3D; h5token=1ffbd7c5a9654109974a695c778dd4f3_1_1; damai_cn_user=y7c3TkBPISEAUxnGUM%2FxCQ8VpIpBYBbBpa0DGjeHXK2aUoWdw6hsGJryQ%2Fn66wXfGxb2%2BRjuqig%3D; loginkey=1ffbd7c5a9654109974a695c778dd4f3_1_1; user_id=177594401; _m_h5_tk=05590ea9c2dcf74fbfb6aa448196edea_1693406475577; _m_h5_tk_enc=1d19d0e2169b3175db2dceb04d586c18; x5sec=7b22617365727665723b32223a22393130623032316366663965323234653761333766356536643732653639346543506d4876616347454c4c55324d622f2f2f2f2f2f7745776735435530774e4141773d3d222c22733b32223a2239633063383137306136303937623261227d; l=fBO5bZgHN5cp6MU_BO5Iourza77TfIRb8PVzaNbMiIEGa6_VOFaMmNC6xGt25dtj_T5DLetyVhmX9dEB8qUT5OkDBeYQJpMrWX968eM3N7AN.; tfstk=d7SJfPMzvSVuO5p3-pU08qPWu8w0jgBPH_WsxBAoRsCA_1n3UafhkpChM8Wld77dM_X1rUXCxpsp4iboxQVyv91Mv5VgjlXPUe-Qs52QVeArWhHT6soRUT-eAxcQSZ6ypjsMZGFmucFjTcIOyLaFt2J3vss6eUdKqInpNiiMPCapGDnpGLBZTGjtg_hM6p07H-3E8U946QweP; isg=BJmZtNdTGeevwMV5RDZ2afumqIVzJo3Y7xS_x7tOFUA_wrlUA3adqAcTxI60_yUQ',
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
    't': '1693404032159',
    'sign': 'f23d2b31898a92e05c1c5fe4c844880b',
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
    'requestStart': '1693404032158',
}


data = {
    'data': '{"buyNow":true,"exParams":"{\\"damai\\":\\"1\\",\\"channel\\":\\"damai_app\\",\\"umpChannel\\":\\"10002\\",\\"atomSplit\\":\\"1\\",\\"serviceVersion\\":\\"2.0.0\\",\\"signKey\\":\\"cEl4bXJdXglkRV51QEF1eXZTfGpxXlAIYEdfdFo3GBcTIgoSBzI6bBIgOB8=\\",\\"ua\\":\\"140#q1rDmj6LzzPs5zo23zSQ4pN8s9xbMxgM8U7NboxyLM61Ho+ArSZm5eQVrhHz31jo0VQ4b3hqzznJRUCHgg1zzRoM9jWqlbrz2DD3V3gqzZsi228+tCfxzDrb4bXTgHmijDapVrMDvf8f884EYz2lOXYYpCzbRZYm2+rr1sgSCo6cQmr+O779xqIT9EBzmtn2aaBny0viLPWZza7elv4JX4yte+JT8GtK8nYumKQPbBD8SuhhwZGcMn68r3NP+IKjaNe7skDiVUCjW9I+an/t68V/XiAZMetjLciVbYzG+4/bcMWX4mAW9reqRZGvo5ofGMPtz2BtxTeSN06DcNXp324UrZ2gDZgCALf5myFjDZNFgm8a//c6v9nN7GjKoLf3rsExQCz9p34GrA6nyXavHnwtUFyip9iMSqbZuvrhj3lpkpX5vqkg26conm33uBrVQ0ocS4A37OV8d+87yDOLTrrNerv7dxVwzzqIIZU4JehYgKlzjqcOEbTNdFJphRmpNTzEJ+NCQz9to4DiBlagFVT3fPdCNMAWAgThFCXp5ZqFdonVGKiEN/EcIAhdMlwjRtI3HjXBye5DTW4XvUZbsKG6qZQ16im4Okut2G1qVyfQYk2toIIdwp51lUh7APYDr70Jz9XhF8pOEcgq8rc6nUdc2dr60u2Ygm28399KmC1ecZBO81D8kU/PGjsTRYZWRy8pBIzOlt5oUWKjz3xk6OFWl7wz03z16ODsNYdCxNVbKzGRgMjuGKuSysUqx+gnAJ8U5Ar5XeDy+EnS8B7BlAUef5wY9SFx8qdPx7UjiVpgH8JoS4AfYzW5crtWn9MtJ8G6RWZ4Onjw2OnukfMLnN9nmeIB1UHlNLE4cwG0YjOwujlPSnAbfass6+ilZFqQX03fqUhWZiLzui62WOSw9Ovojmomt3ZVaokZIwexlQ6tFuBGXP1K8JqMq6czYmNUj6kv0qECLPwRAcuJHnNbjRlrNkBYMkhqnP77PpooBvK2WrABpAe6PNRjX7TA3PMDw3RkRLCULxmh5ZEUeybgZe15ucMj576+GiXUVu3oGKFHLw7AU0ygpql02B8E+gU38P9dElRWGtQ0rOkkad8zzcgZrjQO\\",\\"subChannel\\":\\"damai@damaih5_h5\\",\\"customerType\\":\\"default\\"}","buyParam":"733071713999_1_5246716671861","dmChannel":"damai@damaih5_h5"}',
}

response = requests.post(
    'https://mtop.damai.cn/h5/mtop.trade.order.build.h5/4.0/',
    params=params,
    cookies=cookies,
    headers=headers,
    data=data,
)
print(response.text)
