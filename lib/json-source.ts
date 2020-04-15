// eslint-disable-next-line no-unused-vars
export default class JsonSource {
  private readonly map: Map<string, object[]>;

  constructor(map?: Map<string, object[]>) {
    this.map = map || new Map<string, object[]>();
  }

  setConfig(env: string, ...value: object[]): JsonSource {
    this.map.set(env, value);

    return this;
  }

  addConfig(env: string, ...value: object[]): JsonSource {
    if (!this.map.has(env)) this.map.set(env, []);
    this.map.get(env).push(...value);

    return this;
  }

  removeConfig(env: string): JsonSource {
    this.map.delete(env);

    return this;
  }

  async export(): Promise<Map<string, object>> {
    const config = new Map<string, object>();

    Array.from(this.map.entries()).forEach(([key, value]) => {
      config.set(
        key,
        value.reduceRight((pre, cur) => Object.assign(cur, pre), {})
      )
    });

    return config;
  }
}
