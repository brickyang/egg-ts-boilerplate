[**English**](https://github.com/brickyang/egg-ts-boilerplate/blob/master/README.md)

这是一个在 Egg.js 中使用 TypeScript 的示例，演示了如何在 `controller`、`service`、配置、数据库、定时任务和扩展等概念中使用 TypeScript。

## 快速使用

```bash
$ npm install
$ npm run tsc
$ npm run dev

// 浏览器访问 http://127.0.0.1:7001 (如果 7001 被占用也可能会使用其他端口).
```

本示例中使用了 `egg-mong-native` 插件。这是一个实现了 MongoDB 官方 Driver 的插件，用来在 Egg.js 应用中使用 MongoDB。该插件默认是关闭的，因为它要求环境中有已启动的 MongoDB 实例。

Egg.js 本身不是用 TypeScript 写的，但是它提供了 `index.d.ts`，所以你可以自由地在自己的应用层面使用 TypeScript。其关键点就是如何写自己的 `index.d.ts` 来声明所有接口。

这个示例遵循微软官方建议，使用一个唯一的“大” `index.d.ts` 文件，而没有为每个模块使用单独的 `index.d.ts`。

扩展阅读: [如何在 Egg.js 中使用 TypeScript](https://brickyang.github.io/2017/12/21/%E5%A6%82%E4%BD%95%E5%9C%A8-Egg-js-%E4%B8%AD%E4%BD%BF%E7%94%A8-TypeScript/)
