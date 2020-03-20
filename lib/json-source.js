
Object.defineProperty(exports, '__esModule', { value: true });
// eslint-disable-next-line no-unused-vars
class JsonSource {
  constructor(map) {
    this.map = map || new Map();
  }

  setConfig(env, value) {
    this.map.set(env, value);
    return this;
  }

  removeConfig(env, value) {
    this.map.set(env, value);
    return this;
  }

  async build() {
    return this.map;
  }
}
exports.default = JsonSource;
