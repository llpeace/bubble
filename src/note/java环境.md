###### 1.开发步骤

- 参考效能研发提升的布局，制定大致的方案

- 梳理页面和代码，明确需要开发的工作量
- 开始开发，学习

###### 2.媒体查询

```css
@media screen and (max-width: 767px) {
  div.date-pick-div {
    margin: 0 5px 15px 5px;
  }
// span.period__to {
  //   box-sizing: border-box;
  //   display: inline-block;
  //   height: 36px;
  //   margin: 0 5px 15px 5px;
  // }
}
```

###### 3.bootstrap栅格布局



###### 4.页面打不开

需要java环境

```html
安装jdk
brew tap AdoptOpenJDK/openjdk
brew cask install homebrew/cask-versions/adoptopenjdk8
安装成功之后

查看jdk安装地址
/usr/libexec/java_home -V

我的安装路径
/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home

配置JAVA_HOME
vim ~/.zshrc
加上下面几行：
JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
PATH=$JAVA_HOME/bin:$PATH:.
CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:.
export JAVA_HOME
export PATH
export CLASSPATH

source ~/.zshrc

```



```html
<div className="col-sm-3">
  <label></label>
</div>
      <div className="col-sm-3">
        <label></label>
      </div>

padding: 0 15 0 15
margin: 10 0 10 0

row: margin: 0 -15 0 -15

margin: 10 -15 10 -15
padding: 0 15 0 15

1.模版引擎生成的页面
// /bd/data_board/core  核心报表
// /bd/apply/cinema_activity 活动
2.样式统一生成的页面
// bd/beyond/list  
// bd/media
// bd/apply/banner
// bd/data_board/sell_deals
// bd/data_board/arrange_movies
// bd/task/materials_list


@media screen and (max-width: 767px) {
  div.date-pick-div {
    margin: 0 5px 15px 5px;
  }
// span.period__to {
  //   box-sizing: border-box;
  //   display: inline-block;
  //   height: 36px;
  //   margin: 0 5px 15px 5px;
  // }
}

body-robot
content-robot
page-no
  
```

