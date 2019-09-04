# Oneindex-extension

为Oneindex添加调用本地播放器播放视频的按钮

## 需要修改参数

- 匹配域名

```js
// @include      *you.host*
```

- 调用软件的url schema

```js
var url_schema = "potplayer://";
```

## 加载软件

- 桌面端
  - [油猴](http://www.tampermonkey.net/)
    - 全部复制
- 安卓端
  - [via](https://www.coolapk.com/apk/mark.via)
    - 将函数部分插入
