## 1. 产生闭包的条件与什么是闭包
## 2. 编写程序演示闭包    
## 3. 对象创建模式(4种)
## 4. 编码实现组合继承模式	
## 5. 下面代码的输出
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
        console.log(i);
    }

    for (var i = 0; i < 5; i++) { 
        (function(i){
            setTimeout(function (){
                console.log(i);  
             },1000);  
        })(i);  
    }