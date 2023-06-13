import json
import seaborn as sns
from matplotlib import pyplot as plt

plt.rc('font', family='NanumBarunGothic')

js_path = '자바스크립트.json'
py_path = '파이썬.json'
c_path = 'c++.json'
HTML_path = 'HTML.json'
CSS_path = '/content/CSS.json'
PHP_path = '/content/PHP.json'
R_path = '/content/R.json'
SQL_path = '/content/SQL.json'
CC_path = '/content/C.json'
visual_path = '/content/비주얼 베이식.json'
as_path = '/content/어셈블리.json'
oc_path = '/content/오브젝티브-C.json'
java_path = '/content/자바스크립트.json'
ts_path = '/content/타입스크립트.json'
cs_path = '/content/C#.json'
Ruby_path = 'content/Ruby.json'

js_str = json.load(open(js_path, encoding='utf-8'))
py_str = json.load(open(py_path, encoding='utf-8'))
c_str = json.load(open(c_path, encoding='utf-8'))
HTML_str = json.load(open(HTML_path, encoding='utf-8'))
CSS_str = json.load(open(CSS_path, encoding='utf-8'))
PHP_str = json.load(open(PHP_path, encoding='utf-8'))
R_str = json.load(open(R_path, encoding='utf-8'))
SQL_str = json.load(open(SQL_path, encoding='utf-8'))
CC_str = json.load(open(CC_path, encoding='utf-8'))
visual_str = json.load(open(visual_path, encoding='utf-8'))
as_str = json.load(open(as_path, encoding='utf-8'))
oc_str = json.load(open(oc_path, encoding='utf-8'))
java_str = json.load(open(java_path, encoding='utf-8'))
ts_str = json.load(open(ts_path, encoding='utf-8'))
cs_str = json.load(open(cs_path, encoding='utf-8'))
Ruby_str = json.load(open(Ruby_path, encoding='utf-8'))


ratio = [len(js_str), len(py_str), len(c_str), len(HTML_str),len(CSS_str),len(PHP_str),len(R_str),len(SQL_str),len(CC_str),len(visual_str),len(as_str),len(oc_str),len(java_str),len(ts_str), len(cs_str), len(Ruby_str)]
labels = ['js', 'python', 'c++', 'HTML', 'CSS', 'PHP', 'R', 'SQL', 'C', 'visual basic', 'Assembly', 'Object-C', 'Java', 'TypeScript', 'C#', 'Ruby']
explode = [0.1] * 16

plt.title('인프런 언어별 학습자료 비율')
plt.pie(ratio, labels=labels, autopct='%.1f%%', startangle = 90, counterclock = False, explode=explode)
plt.show()