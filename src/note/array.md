#### 数组的方法

```js
// 改变原数组
var arr = []
arr.splice() 
/*改变数组，返回删除的内容
	args(index,howmany,item1,.....,itemX)
	index：必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
	howmany:必需。要删除的项目数量。如果设置为 0，则不会删除项目。
	item1 可选。向数组添加的新项目。
*/

arr.reverse()
arr.fill()
arr.copyWithin()
arr.sort()
arr.push()
arr.pop()
arr.unshift()
arr.shift()
// 不改变原数组
var arr = []
arr.slice()
/* 
args(start, end) 获取数组从start到end的值，
*/
arr.map()
arr.forEach()
arr.every()
arr.some()
arr.filter()
arr.reduce()
arr.entries()
arr.find()

```

##### 

* `**Object.entries()**`方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 [`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

  

