##### MutationObserver

```
提供接口监听对DOM树所做的更改。
构造函数 MutationObserver()
方法
disconnect(); //停止观察
observe(); //开始观察。
observer.observe(targetNode, config);
/ 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');
// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true };

takeRecords(); // 检测未被回调函数处理的所有匹配DOM更改的列表，使变更队列保持为空。
```



