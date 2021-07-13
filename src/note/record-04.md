##### proxy

```
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
const p = new Proxy(target, handler)

target: 要代理的目标对象
handler: 是一个通常以函数作为属性的对象，代理p的行为
```

##### Object.create

```js
Object.create(obj)
创建一个新的对象，对象的__proto__指向obj
```

##### Object.getPrototypeOf()

```js
方法返回指定对象的原型（__proto__）
```

##### Object.assign

```js
方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
Object.assign（target,...source）
```

##### propertyIsEnumerable

```js
方法返回一个布尔值，表示指定的属性是否可枚举。
```

##### Object.getOwnPropertyNames()/for...in循环/Object.keys()

```js
Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

for...in循环以任意顺序遍历一个对象的除Symbol以外的 可枚举属性。

Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致

获取对象所有的可枚举属性：
1.Object.keys()
2.for...in 加hasOwnProperty()判断是否是自身属性
3.Object.getOwnPropertyNames()加 obj1.propertyIsEnumerable(propertyName) === true来判断

```

##### Object.seal()/Object.freeze()

```js
Object.seal(obj)密封一个对象，阻止添加新属性，并将现有属性标记为不可配置。当前属性可写的话就可以改变


Object.freeze(obj)冻结一个对象，一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。

区别：
 用Object.seal()密封的对象可以改变它们现有的属性。使用Object.freeze() 冻结的对象中现有属性是不可变的。

```

##### Object.defineProperty

```
方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
```

![image-20210607195741972](/Users/limengyun/md/md/image-20210607195741972.png)

![image-20210607200054578](/Users/limengyun/md/md/image-20210607200054578.png)

![image-20210607200109110](/Users/limengyun/md/md/image-20210607200109110.png)

#### Object.getOwnPropertyDescriptors()

```js
方法用来获取一个对象的所有自身属性的描述符。
```

