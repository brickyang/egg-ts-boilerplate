This is an example about how to use TypeScript in Egg.js. It shows how to use `controller`, `service`, config, database, schedule task and extention with TypeScript in Egg.js.

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
