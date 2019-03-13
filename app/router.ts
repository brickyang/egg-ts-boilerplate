import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/compressed', controller.home.compressed);
};
