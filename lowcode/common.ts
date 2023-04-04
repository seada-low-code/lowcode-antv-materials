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

export const containerMeta: IPublicTypeFieldConfig = {
  title: {
    label: '图表容器',
  },
  display: 'accordion',
  type: 'group',
  items: [
    {
      name: 'autoFit',
      title: {
        label: 'autoFit',
        tip: '自适应容器宽高',
      },
      setter: {
        componentName: 'BoolSetter',
        initialValue: true,
      },
    },
    {
      name: 'width',
      title: {
        label: 'width',
        tip: '图表宽度',
      },
      setter: {
        componentName: 'NumberSetter',
        initialValue: 400,
      },
      condition: (target) => target.getProps().getPropValue('autoFit') === false,
    },
    {
      name: 'height',
      title: {
        label: 'height',
        tip: '图表高度',
      },
      setter: {
        componentName: 'NumberSetter',
        initialValue: 400,
      },
      condition: (target) => target.getProps().getPropValue('autoFit') === false,
    },
    {
      name: 'padding',
      title: {
        label: 'padding',
        tip: '间距',
      },
      setter: [
        {
          componentName: 'StringSetter',
        },
        {
          componentName: 'NumberSetter',
        },
      ],
      defaultValue: 'auto',
    },
    {
      name: 'appendPadding',
      title: {
        label: 'appendPadding',
        tip: '在padding的基础上，设置额外的padding数值',
      },
      setter: {
        componentName: 'NumberSetter',
      },
    },
    {
      name: 'limitInPlot',
      title: {
        label: 'limitInPlot',
        tip: '是否对超出坐标系范围的Geometry进行剪切',
      },
      setter: {
        componentName: 'BoolSetter',
      },
    },
  ],
};
