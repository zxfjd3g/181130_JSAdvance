/*
使用函数使用
 */
function myModule1() {
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
  // 3. 向外暴露一些想暴露的行为
  return {
    foo: foo,
    bar: bar
  }
}