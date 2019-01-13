import { Application, IBoot } from 'egg';

export default class AppBootHook implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  async didReady() {
    console.log((this.app as any).bar);
  }
}
