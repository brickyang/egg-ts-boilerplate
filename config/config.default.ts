export class DefaultConfig {
  readonly keys = '1234';

  // learn how to use MongoDB in Egg.js
  // visit https://github.com/brickyang/egg-mongo-native
  readonly mongo = {
    client: {
      host: 'localhost',
      port: '27017',
      name: 'test',
      user: 'user',
      password: 'password',
    },
  };
}

export default new DefaultConfig();
