from lxml import etree,html

tree=html.fromstring("demo.html")
tree=etree.parse(tree)
result=tree.xpath("/html/body/div/h1/text()")
print(result)