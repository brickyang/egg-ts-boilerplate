import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  config.keys = appInfo.name + "_1547377172976_3476";

  // 开启gzip
  config.middleware = ["compress"];

  config.compress = {
    threshold: 2048
  };

  config.mongo = {
    client: {
      host: "localhost",
      port: "27017",
      name: "test",
      user: "user",
      password: "password"
    }
  };

  return { ...config };
};
