##### 防抖和节流

```javascript

```

##### 闭包

```javascript

```

##### 事件循环

```javascript
js任务分为同步和异步两种，同步任务直接放在主线程上排队依次执行，异步任务放在任务队列(Event Queue)中。主线程内的任务执行完毕，会去任务队列读取任务，推入主线程执行。这个过程不断重复就是事件循环；

异步队列分为两种：宏任务和微任务；
常见的宏任务：setTimeout,setInterVal,script(整体代码),I/O操作,UI渲染等
常见的微任务：Promise,MutationObserver
macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
micro-task(微任务)：Promise，process.nextTick

async/await

async中的第一个await后面的代码的执行顺序和Promise的then调用顺序一致
```

##### 函数柯里化

```javascript
```

##### 浏览器解析网页的过程

```javascript

```
