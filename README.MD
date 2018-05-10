### 为什么用pwa

> 用户体验和用户留存枷锁

### pwa能解决什么

> 渐进式、可响应、可离线、实现类似 App 的交互、即时更新、安全、可以被搜索引擎检索、可推送、可安装、可链接

- 添加到桌面, 解决用户留存问题: App Manifest
- 离线访问: Service Worker
- 消息推送: Web Push

### Service Worker

![sw](assets/service_worker.png)

- 控制控制策略：
```
static file: cacheFirst => fastest => cacheOnly
data AJAX: networkFirst => networkOnly
```

### Web Push