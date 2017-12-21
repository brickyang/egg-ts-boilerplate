const BAR = Symbol('Application#bar');

module.exports = {
  get bar(): string {
    if (!this[BAR]) {
      this[BAR] = 'foo';
    }
    return this[BAR];
  },
};
