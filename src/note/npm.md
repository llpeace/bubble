##### npm init

设置一个新的package或者已经存在的package，执行主bin文件



##### npm exec

从本地或远程npm 包运行命令

##### yarn和npm的区别

Yarn 速度快

1.并行加载：npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。

2.离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。

3.安装版本统一；更简洁的输出；多注册来源处理；更好的语义化；

