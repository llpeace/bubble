### HTTP请求



### 浏览器network面板

###### TYPE

- xhr
- document

###### Name

- Headers

  - Form Data : post请求当Content-Type为multipart/form-data或者application/x-www-form-urlencoded时
  - Query String: 当请求带有query时
  - Request Payload：请求的Content-Type为application/json时

- Preview

  

- Response 

### HTTP header - Content-Type

内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件。文件扩展名与content-type的关系 https://tool.oschina.net/commons

- 用于指示资源的MIME类型，在请求头中，客户端可以告诉服务端实际发送的数据类型
- 常用值
  - application/json
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/xml
- multipart/form-data和application/x-www-form-urlencoded的区别
  - 都是form元素的enctype属性的值，表明数据的提交格式，指定浏览器使用的编码类型。
  - application/x-www-form-urlencoded
    - 使用URLSearchParams对象模拟，new URLSearchParams(); URLSearchParams.append()
  - multipart/form-data
    - 使用FormData对象模拟，new FormData(); FormData.append();

### HTTP header - Content-Disposition

Content-Disposition 是 MIME 协议的扩展，MIME 协议指示 MIME 用户代理如何显示附加的文件。
当 IE 浏览器接收到头时，它会激活文件下载对话框，它的文件名框自动填充了头中指定的文件名。
Content-Disposition 就是当用户想把请求所得的内容存为一个文件的时候提供一个默认的文件名。

```
在常规的 HTTP 应答中，Content-Disposition 响应头指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。
在 multipart/form-data 类型的应答消息体中，Content-Disposition 消息头可以被用在 multipart 消息体的子部分中，用来给出其对应字段的相关信息。各个子部分由在Content-Type 中定义的分隔符分隔。用在消息体自身则无实际意义。


1.可以作为消息主体的消息头
Content-Disposition: inline
inline默认值,返回的内容以页面的形式展示
Content-Disposition: attachment
attachment意味着消息会被下载到本地， 以filename为文件名字
Content-Disposition: attachment; filename="filename.jpg"

2.可以作为multipart body中的消息头
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"

```



