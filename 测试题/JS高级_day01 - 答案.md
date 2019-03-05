## 1. 内存,数据, 变量三者之间的关系
	内存是可以存储不同数据的容器
	变量与内存对应, 变量名是内存的标识名称, 变量值是内存中保存的数据

## 2. 关于引用变量赋值的2个问题
	2个引用变量指向同一个对象, 通过一个引用变量修改对象内部数据, 另一个引用变量也看得见
	2个引用变量指向同一个对象,让一个引用变量指向另一个对象, 另一个引用变量还是指向原来的对象

## 3. 如何判断函数是否是回调函数
	你定义的
    你没有直接调用
    但它最终执行了

## 4. 说说对象,数组, 函数的区别
	对象: 一个可以存储多个无序数据的容器
	数组: 一个特别的对象, 存储的数据是有序的
	函数: 一个特别的对象, 包含可执行的代码(可以执行) 

## 5. 如何判断函数中的this
	直接调用: xxx()  : window
	new调用: new xxx() : 新创建的对象
	对象调用: obj.xxx() : obj
	call/apply调用: xxx.call(obj) : obj

var p1 = {id: 1, name: 'Tom'}
var p2 = {id: 2, name: 'Tom2'}
var p3 = {id: 3, name: 'Tom'}

var obj = {}
obj[p1.id] = p1
obj[p2.id] = p2
obj[p3.id] = p3

var arr = []
arr.push(p1)
arr.push(p2)
arr.push(p3)

var id = 3
arr.forEach (function (p){if(p.id===id){}})
obj[id]