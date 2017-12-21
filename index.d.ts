import DefaultConfig from './config/config.default';
import { redis } from './config/plugin';
import HomeController from './app/controller/home';
import HomeService from './app/service/home';

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & DefaulConfig;
    bar: string;
  }

  export interface IController {
    home: HomeController;
  }

  export interface IService {
    home: HomeService;
  }
}
