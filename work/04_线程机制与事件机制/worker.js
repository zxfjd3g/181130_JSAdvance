/*
在分线程执行
 */
var fibonacci =function(n) {
  return n <2 ? n : fibonacci(n -1) + fibonacci(n -2);
};

var onmessage = function(event) {
  // 分线程接收到主线程发送的消息
  var number = event.data
  console.log('分线程接收到主线程发送的消息', number)
  console.log('分线程', this)
  alert(number)
  // 处理数据
  var result = fibonacci(number)


  
  // 分线程向主线程发送消息数据
  postMessage(result);
  console.log('分线程向主线程发送消息数据', result)
};