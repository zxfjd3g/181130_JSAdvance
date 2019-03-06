## 1. git的6个基本操作
    1). 创建本地仓库
        创建.gitignore并配置忽略
        git init
        git add *
        git commit -m "xxx"
    2). 创建远程仓库
        New Repository
        指定名称
        创建
    3). 将本地仓库推送到远程仓库
        git remote add origin https://github.com/zxfjd3g/xxx.git 关联远程仓库
        git push origin master
    4). 如果本地有更新, 推送到远程
        git add *
        git commit -m "xxx"
        git push origin master
    5). 如果远程有更新, 拉取到本地
        git pull origin master
    6). 克隆远程仓库到本地
        git clone https://github.com/zxfjd3g/xxx.git
        
## 2. 说说原型与原型链
    1). 所有函数都有prototype属性(显式原型), 属性值指向原型对象
    2). 所有实例对象都有__proto__属性(隐式原型), 其值就就等于构造函数的prototytpe属性值, 也就是也指向原型对象
    3). 多个对象通过__proto__属性就形成了链就是原型链, 在查找对象的某个属性时: 先在对象自身上找, 如果找不到就会沿着原型链查找
    
## 3. 说说变量提升和函数提升
    1). 变量提升: 在用var声明变量的语句之前就可以访问到变量 ==> var声明变量部分被提前执行了
    2). 函数提升: 在function函数声明语句之前就可以调用函数 ==> 函数声明语句被提前执行了
    3). 原因: JS引擎在执行代码时做了预处理/解析的工作
    
## 4. 说说作用域与作用域链
    1). 作用域: 变量可见的一块特定代码区域, 包括全局作用域和函数作用域, 作用域在编写代码时就确定了
    2). 作用域链: 由内向外的多个嵌套作用域形成的链, 在查找变量时, 会沿着作用域链查找

## 5. 画内存详图
    function Foo () {}
    var f1 = new Foo()
    var f2 = new Foo()
    var o1 = {}
    var o2 = {}

var obj1 = {m: 1}
var obj2 = {n: 2}
obj1.xxx = obj2

var parent = {name: 'tom'}
var child = {name: 'jack'}
child.parent = parent
var child2 = {name: 'bob'}
child2.parent = parent
child2.parent.name
parent.children = []
parent.children.push(child)
parent.children.push(child2)

parent.children.forEach(function (child) {child.name})

a.b

