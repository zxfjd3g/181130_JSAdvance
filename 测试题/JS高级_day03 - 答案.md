## 1. 产生闭包的条件与什么是闭包
    1). 产生闭包的条件
        * 函数嵌套
        * 内部函数引用了外部函数的数据(变量/函数)
        * 执行外部函数
    2). 什么是闭包
        闭包本质是内部函数中的一个容器, 这个容器中包含引用的变量
    
## 2. 编写程序演示闭包
    function fn1() {
      var a = 3
      function fn2() {
        a++
        console.log(a)
      }
      return fn2
    }
    var f = fn1()
    f() // 4
    f() // 5
    
## 3. 对象创建模式(4种)
    1). Object构造函数模式
    	var obj = {}
    	obj.name = 'Tom'
    	obj.setName = function(name){this.name=name}
    2). 对象字面量模式
    	var obj = {
    		name : 'Tom',
    		setName : function(name){this.name = name}
    	}
    3). 构造函数模式
    	function Person(name, age) {
    		this.name = name
    		this.age = age
    		this.setName = function(name){this.name=name}
    	}
    	new Person('tom', 12)
    4). 构造函数+原型的组合模式
    	function Person(name, age) {
    		this.name = name
    		this.age = age
    	}
    	Person.prototype.setName = function(name){this.name=name}
    	new Person('tom', 12)

## 4. 编码实现组合继承模式
    function Parent(xxx){this.xxx = xxx}
    Parent.prototype.test = function(){}
    function Child(xxx,yyy){
      Parent.call(this, xxx) //借用构造函数   this.Parent(xxx)
    }
    Child.prototype = new Parent() //得到test()
    Child.proptotype.constructor = Child
    Child.prototype.test2 = function (){}
    var child = new Child() //child.xxx为'a', 也有test()
    
## 5. 下面代码的输出
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
        console.log(i);
    } // 0 1 2 3 3 3

    for (var i = 0; i < 5; i++) { 
        (function(i){
            setTimeout(function (){
                console.log(i);  
             },1000);  
        })(i);  
    } // 0 1 2 3 4