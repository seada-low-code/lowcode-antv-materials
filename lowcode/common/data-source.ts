import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const dataSourceMeta: IPublicTypeFieldConfig = {
  title: {
    label: {
      type: 'i18n',
      'en-US': 'data',
      'zh-CN': '数据源',
    },
  },
  display: 'accordion',
  type: 'group',
  items: [
    {
      name: 'dataSource.type',
      title: {
        label: '数据源类型',
      },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '静态数据',
              value: 'static',
            },
            {
              title: 'API',
              value: 'api',
            },
          ],
        },
        initialValue: 'static',
      },
    },
    {
      // 静态数据才会出现
      name: 'dataSource.config.list',
      title: {
        label: '数据源',
      },
      setter: [
        // {
        //   componentName: 'ArraySetter',
        //   props: {
        //     itemSetter: {
        //       componentName: 'ObjectSetter',
        //       props: {},
        //     },
        //   },
        // },
        {
          componentName: 'JsonSetter',
        },
      ],
      defaultValue: [],
      condition: (target) => target.getProps().getPropValue('dataSource.type') === 'static',
    },
    {
      // api才会出现
      name: 'dataSource.config.method',
      title: {
        label: '请求方式',
      },
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'GET',
                value: 'GET',
              },
              {
                title: 'POST',
                value: 'POST',
              },
            ],
          },
          // initialValue: 'GET',
        },
      ],
      defaultValue: 'GET',
      condition: (target) => target.getProps().getPropValue('dataSource.type') === 'api',
    },
    {
      // api才会出现
      name: 'dataSource.config.url',
      title: {
        label: 'URL',
      },
      setter: [
        {
          componentName: 'StringSetter',
        },
      ],
      condition: (target) => target.getProps().getPropValue('dataSource.type') === 'api',
    },
    {
      // api才会出现
      name: 'dataSource.config.headers',
      title: {
        label: 'Headers',
      },
      setter: [
        {
          componentName: 'JsonSetter',
        },
      ],
      condition: (target) => target.getProps().getPropValue('dataSource.type') === 'api',
    },
  ],
};
