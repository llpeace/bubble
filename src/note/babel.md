##### babel之介是嘛玩意儿



##### babel之我不理解

##### babel-plugin-import

按需加载插件，只需要引入模块即可，无需单独引入样式。

「配置方式」在.babelrc文件的plungins中加上

```js
'plugins': [
   [
    "import",
    {
      "libraryName": "@myfe/catd-pro",
      "style": true
    },
    "catd-pro"
  ],
]
```

