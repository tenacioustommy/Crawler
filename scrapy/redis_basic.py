from redis import Redis

r = Redis(host='localhost', port=6379, db=0,
          password='', decode_responses=True)
# r.zadd('yans', {'asd': 10, 'sdf': 20})
