##### node如何开启多进程

```
node的Cluster模块可以创建共享服务器端口的子进程，并监听同一个端口。
工作原理：
工作子进程由 child_process.fork() 方法创建，因此它们可以使用 IPC（进程间通信） 和父进程通信，从而使各进程交替处理连接服务。
child_process.fork() 方法是 child_process.spawn() 的特例，专门用于衍生新的 Node.js 进程。 与 child_process.spawn() 一样，返回 ChildProcess 对象。 返回的 ChildProcess 将有额外的内置通信通道，允许消息在父进程和子进程之间来回传递。
默认情况下，child_process.fork() 将使用父进程的 process.execPath 衍生新的 Node.js 实例。 options 对象中的 execPath 属性允许使用替代的执行路径。


```

##### 这些工作进程为什么可以监听同一个端口？

https://cnodejs.org/topic/56e84480833b7c8a0492e20c

```
master进程fork出工作进程之后，worker在监听端口的时候，会执行listen方法，listen中会执行cluster._getServer方法，这个方法主要做了两件事
1.向master进程注册该worker，若master进程是第一次接收到监听此端口/描述符下的worker，则起一个内部TCP服务器，来承担监听该端口/描述符的职责，随后在master中记录下该worker。
2.Hack掉worker进程中的net.Server实例的listen方法里监听端口/描述符的部分，使其不再承担该职责。

因此：
1.端口仅由master进程中的内部TCP服务器监听了一次。
2.不会出现端口被重复监听报错，是由于，worker进程中，最后执行监听端口操作的方法，已被cluster模块主动hack。
```

