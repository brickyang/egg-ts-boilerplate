import { Controller } from "egg";

export default class HomeController extends Controller {
  public index() {
    const data: string = this.service.home.index();

    this.ctx.body = data;
    this.ctx.status = 200;
  }

  public compressed() {
    let data: any[] = new Array(128);
    data.fill("I love Egg.js and TypeScript.");
    this.ctx.body = data.join("");
    this.ctx.status = 200;
  }
}
