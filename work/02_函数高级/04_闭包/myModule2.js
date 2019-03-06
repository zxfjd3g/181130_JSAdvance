/*
使用IIFE使用
 */
(function () {
  // 1. 私有的数据: 变量
  var data = 'atguigu'
  // 2. 私有的操作数据的行为: 函数
  function foo() {
    console.log('foo()', data)
  }
  function bar() {
    console.log('bar()', data)
  }
  function fn() {
    console.log('fn()', data)
  }

  // 3. 向外暴露模块对象
  window.myModule2 = {
    foo: foo,
    bar: bar
  }
})()
