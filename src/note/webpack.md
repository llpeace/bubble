##### Module,bundle,chunk

Module: esModule,CommonJS modoule AMD/CMD等 区别可以移步【模块加载】

Bundle: webpack打包后的结果。

Chunk:	webpack运行时的产物。

![image-20210909175325717](/Users/limengyun/sty/bubble/src/note/image-20210909175325717.png)

##### loader和plugin的区别

1.loader用于对模块的源代码进行转换。可以在加载文件时，预处理文件。主要是对文件转化压缩翻译等文件处理。

2.plugin的目的在于解决loader无法解决的事。是一个具有apply方法的js对象，apply方法会被webpack的compiler调用

3.运行的时机不同： loader在打包之前运行；plugin在webpack整个生命周期都可以运行。

##### Webpack如何查找模块

- 解析相对路径
- 解析绝对路径
- 解析模块名

##### webpack自动编译代码的可选方式

1. webpack watch mode(webpack 观察模式)

   使用--watch命令，当文件修改webpack会自动编译代码，但是需要手动重新刷新浏览器

2. webpack-dev-server

3. webpack-dev-middleware

##### sourcemap

配置devtool: 'sourcemap'

可以对源代码定位

##### splitChunks

![image-20210909173131266](/Users/limengyun/sty/bubble/src/note/image-20210909173131266.png)

##### Compiler和Compilation

