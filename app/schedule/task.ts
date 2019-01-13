import { Context } from 'egg';

module.exports = () => {
  return {
    schedule: {
      interval: '1m',
      type: 'worker',
    },
    async task(ctx: Context): Promise<void> {
      ctx.service.home.index(); // you can access the service via ctx
      console.log(`[schedule] Schduled task running.`);
    },
  };
};
