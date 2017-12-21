/// <reference path='../index.d.ts' />
import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
