import { Application } from 'egg';

export default (app: Application) => {
  app.beforeStart(async () => {
    console.log(app.bar);
  });
};
