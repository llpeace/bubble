##### 生命周期

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

![image-20210525130643196](/Users/limengyun/md/md/image-20210525130643196.png)

![image-20210525130700496](/Users/limengyun/md/md/image-20210525130700496.png)

##### pureComponent和component的区别

```
react组件的props和state更新的时候,会根据shouldComponentUpdate的返回值来判断是否继续更新组件，默认行为是 state 每次发生变化组件都会重新渲染,默认返回true。
如果使用React.pureComponent的话，shouldComponentUpdate函数会对props和state进行浅比较，减少没必要的更新。而React.Component内部未实现shouldComponentUpdate()。

使用memoize
```

##### diff

![image-20210630163639661](/Users/limengyun/md/md/image-20210630163639661.png)

##### 虚拟dom

```
```

##### 受控组件和非受控组件

```
非受控组件：状态不受react控制
受控组件：状态有react控制
```

##### 高阶组件

```
参数是组件并返回新的组件的函数
```

##### 错误边界

```
```

##### 不使用JSX

```
每个 JSX 元素只是调用React.createElement(component, props, ...children). 
```

不使用ES6

```
可以使用createReactClass
通过getDefaultProps()函数设置default props
通过getInitialState()函数设置初始化state
```

