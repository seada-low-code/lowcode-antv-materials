export interface IStaticConfig {
  list: Array<Record<string, number | string>>;
}

export interface IApiConfig {
  method: 'GET' | 'POST';
  url: string;
  headers?: Record<string, string>;
  body?: unknown;
}

export type Config = IStaticConfig | IApiConfig;

export interface IDataSource {
  type: 'static' | 'api';
  config: Config;
}
