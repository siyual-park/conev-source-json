
Object.defineProperty(exports, '__esModule', { value: true });
// eslint-disable-next-line no-unused-vars
class JsonSource {
  constructor(map) {
    this.map = map || new Map();
  }

  setConfig(env, ...value) {
    this.map.set(env, value);
    return this;
  }

  addConfig(env, ...value) {
    if (!this.map.has(env)) this.map.set(env, []);
    this.map.get(env).push(...value);
    return this;
  }

  removeConfig(env) {
    this.map.delete(env);
    return this;
  }

  async export() {
    const config = new Map();
    Array.from(this.map.entries()).forEach(([key, value]) => {
      config.set(key, value.reduceRight((pre, cur) => Object.assign(cur, pre), {}));
    });
    return config;
  }
}
exports.default = JsonSource;
