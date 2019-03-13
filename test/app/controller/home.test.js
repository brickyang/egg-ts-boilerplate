"use strict";
const mm = require('egg-mock');

describe('test/app/controller/home.test.js', () => {
  let app;
  let ctx;
  before(async () => {
    mm.consoleLevel('NONE');
    app = mm.app();
    await app.ready();
    ctx = app.mockContext();
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should GET /', async () => {
    return app
      .httpRequest()
      .get("/")
      .expect('I love Egg.js and TypeScript.')
      .expect(200);
  });

  it('should GET /compressed', async () => {
    let data = new Array(128);
    data.fill('I love Egg.js and TypeScript.');

    return app
      .httpRequest()
      .get('/compressed')
      .expect(data.join(''))
      .expect(200);
  });
});
