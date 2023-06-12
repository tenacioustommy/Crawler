import re

lst=re.findall("\d+","wodedianhuashi:10086,pengyoudianhua:10085")
print(lst)
iter=re.finditer("\d+","wodedianhuashi:10086,pengyoudianhua:10085")
for it in iter:
    print(it)
s=re.search("\d+","wodedianhuashi:10086,pengyoudianhua:10085")
print(s.group())

# (?P<name>regex) 从正则匹配进一步匹配
s = 'This is a sample string.'
pattern = r'This (?P<ans>.*?) string'

result = re.search(pattern, s)
if result:
    print(result.group("ans"))
