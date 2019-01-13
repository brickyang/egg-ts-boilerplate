[**中文版**](https://github.com/brickyang/egg-ts-boilerplate/blob/master/README.zh-CN.md)

This is an example about how to use TypeScript in Egg.js. It shows how to use `controller`, `service`, config, database, schedule task and extention with TypeScript in Egg.js.

## Usage

```bash
$ npm install
$ npm run dev

// visit http://127.0.0.1:7001 (might be another port if 7001 is not available).
```

This exmple imports `egg-mongo-native` plugin to use MongoDB but default to `enable: false` in case no MongoDB client is running in your environment. Feel free to enable and try it.

Egg.js is not written by TypeScript, but it provides `index.d.ts` so you are free to use TypyScript in your Egg.js apps. The key point is to `declare` your own interface in `index.d.ts`.

Read more: [如何在 Egg.js 中使用 TypeScript(Chinese)](https://brickyang.github.io/2017/12/21/%E5%A6%82%E4%BD%95%E5%9C%A8-Egg-js-%E4%B8%AD%E4%BD%BF%E7%94%A8-TypeScript/)

[MIT](https://github.com/brickyang/egg-ts-boilerplate/blob/master/LICENSE)
