## 升级步骤

#### 升级webpack和loader,plugin版本

` yarn add webpack@5.11.1` 

![image-20210107212312633](/Users/limengyun/md/image-20210107212312633.png)


#### 运行yarn run build

`yarn run build`

#### 解决报错信息

##### CleanWebpackPlugin

![image-20210107104522389](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107104522389.png)

![image-20210107104558137](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107104558137.png)

##### TerserPlugin

![image-20210107104649663](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107104649663.png)

文档中写道：![image-20210107104733177](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107104733177.png)

所以可以删除 terser-webpack-plugin包；由于webpack升级到5以上有了很多优化， terser-webpack-plugin的配置也修改了很多。

![image-20210107212121361](/Users/limengyun/md/image-20210107212121361.png)

##### LessLoader

![image-20210107105017966](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107105017966.png)

升级之后配置规则改变。

![image-20210107105954113](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107105954113.png)

##### MiniCssExtractPlugin

![image-20210107110216234](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107110216234.png)

warnning的意思是同样的文件，在不同文件的加载顺序不一致。新增ignoreOrder属性；

![image-20210107110409476](/Users/limengyun/Library/Application Support/typora-user-images/image-20210107110409476.png)

解决之后重新build

![image-20210107212442603](/Users/limengyun/md/image-20210107212442603.png)

可能是版本不对吧

`yarn add mini-css-extract-plugin@1.0.0 -D`

`yarn run build`

![image-20210107212546811](/Users/limengyun/md/image-20210107212546811.png)

明明解决过这个问题了。。。。shit

解决办法好像是：

![image-20210108152027859](/Users/limengyun/md/image-20210108152027859.png)

![image-20210108152131535](/Users/limengyun/md/image-20210108152131535.png)



#### 升级配置



#### 优化配置



## 问题

##### chunk和bundle

<img src="/Users/limengyun/Library/Application Support/typora-user-images/image-20210106164717605.png" alt="image-20210106164717605" style="zoom:50%;" />

##### Css-loader和style-loader的区别



