##### this指向

```
函数
普通函数的this:指向它的调用者,如果没有调用者则默认指向window.
箭头函数
箭头函数的this: 指向箭头函数定义时所处的对象,而不是箭头函数使用时所在的对象,默认使用父级的this. 
```

##### call/apply

```
共同点：改变this指向

不同点：apply(this, [argsArray]); call(this, args1, args2...)
```

##### bind

```
绑定this，bind()方法返回一个新函数，新函数的this被绑定在第一个参数上
```

##### XSS攻击

```
httpOnly防止js脚本获取cookie


```

##### CSRF攻击

```

```

##### 模块化

```
CommonJS：同步加载，运行时加载
exports = module.export = {}
es6：编译时加载，异步加载

AMD/CMD：异步加载

UMD：
```



