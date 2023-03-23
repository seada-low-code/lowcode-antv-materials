import { useEffect, useState } from 'react';
import { IApiConfig, IDataSource, IStaticConfig } from '@/types';

export const useData = ({ config, type }: IDataSource) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (type === 'static') {
      const cfg = config as IStaticConfig;
      setData(cfg.list);
    } else if (type === 'api') {
      const cfg = config as IApiConfig;
      const { url, method, headers, body } = cfg;
      // TODO: 判断url是否合法
      if (url) {
        fetch(url, {
          body: body as BodyInit,
          headers,
          method,
        })
          .then((resp) => resp.json())
          .then((json) => setData(json))
          .catch((e) => {
            console.log('fetch data failed:', e);
          });
      }
    }
  }, [config, type]);

  return data;
};
