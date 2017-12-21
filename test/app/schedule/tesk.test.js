'use strict';
const mm = require('egg-mock');

describe('test/app/schedule/task.test.js', () => {
  let app;
  before(async () => {
    app = mm.app();
    await app.ready();
  });

  afterEach(mm.restore);
  after(() => app.close());

  it('should refresh token', async () => {
    await app.runSchedule('task');
  });
});
