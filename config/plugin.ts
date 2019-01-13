import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  mongo: {
    enable: false,
    package: 'egg-mongo-native',
  },
};

export default plugin;
