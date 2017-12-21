This is an example about how to use TypeScript in Egg.js. It shows how to use `controller`, `service`, config, database, schedule task and extention with TypeScript in Egg.js.

## Usage

```bash
$ npm install
$ npm run tsc
$ npm run dev

// visit http://127.0.0.1:7001 (might be another port if 7001 is not available).
```

This exmple imports `egg-mongo-native` plugin to use MongoDB but default to `enable: false` in case no MongoDB client is running in your environment. Feel free to enable and try it.

Egg.js is not written by TypeScript, but it provides `index.d.ts` so you are free to use TypyScript in your Egg.js apps. The key point is to `declare` your own interface in `index.d.ts`.

This example follows the suggestion from Microsoft to use a "large" one `index.d.ts` file instead of seperate files.

[MIT](https://github.com/brickyang/egg-ts-boilerplate/blob/master/LICENSE)
