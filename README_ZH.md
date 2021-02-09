# md-imgage-error-loader

处理`.md`文件中不存在的图片文件，将其替换掉

## 安装

```sh
npm i md-imgage-error-loader
```

## 用法

webpack

```js
// ... 省略部分配置
use: [
  {
    loader: 'md-imgage-error-loader',
    options: {
      //接受一个字符串或者函数
      src: 'http://xxxx.png',
      // or
      src: (x) => 'dir' + x,
    },
  },
];
```

## 协议

MIT License
