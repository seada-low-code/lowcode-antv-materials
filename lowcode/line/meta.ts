import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { containerMeta, dataSourceMeta } from '../common';

const LineMeta: IPublicTypeComponentMetadata = {
  componentName: 'Line',
  title: 'Line',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '折线图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Line',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      { ...dataSourceMeta },
      {
        title: {
          label: '数据映射',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'xField',
            title: {
              label: 'xField',
              tip: 'x方向对应的字段名',
            },
            setter: {
              componentName: 'StringSetter',
            },
            defaultValue: 'x',
          },
          {
            name: 'yField',
            title: {
              label: 'yField',
              tip: 'y方向对应的字段名',
            },
            setter: {
              componentName: 'StringSetter',
            },
            defaultValue: 'y',
          },
          {
            name: 'seriesField',
            title: {
              label: 'seriesField',
              tip: '分组字段，用于同时看一个维度中不同情况的指标需求',
            },
            setter: {
              componentName: 'StringSetter',
            },
          },
        ],
      },
      {
        title: {
          label: '图形样式',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'displayType',
            title: {
              label: '展示形式',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: '折线',
                    value: 'line',
                  },
                  {
                    label: '曲线',
                    value: 'curve',
                  },
                  {
                    label: '阶梯',
                    value: 'step',
                  },
                ],
              },
              initialValue: 'line',
            },
          },
          {
            name: 'stepType',
            title: {
              label: 'stepType',
              tip: '阶梯折线图类型',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: 'hv',
                    value: 'hv',
                  },
                  {
                    label: 'vh',
                    value: 'vh',
                  },
                  {
                    label: 'hvh',
                    value: 'hvh',
                  },
                  {
                    label: 'vhv',
                    value: 'vhv',
                  },
                ],
              },
              initialValue: 'hv',
            },
            condition: (target) => target.getProps().getPropValue('displayType') === 'step',
          },
          {
            name: 'connectNulls',
            title: {
              label: 'connectNulls',
              tip: '对于折线图中缺失的值，是否连接空数据为一条线',
            },
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'isStack',
            title: {
              label: 'isStack',
              tip: '存在seriesField分组字段，是否让折线堆叠累加起来',
            },
            setter: {
              componentName: 'BoolSetter',
            },
          },
        ],
      },
      { ...containerMeta },
    ],
    supports: {},
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '基础折线图',
    screenshot:
      'https://gw.alipayobjects.com/zos/antfincdn/aiERL4ey%24U/08d95f7b-46cb-4bfd-89b2-be36343d44a1.png',
    schema: {
      componentName: 'Line',
      props: {
        dataSource: {
          type: 'api',
          config: {
            url: 'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
          },
        },
        xField: 'Date',
        yField: 'scales',
        padding: 'auto',
      },
    },
  },
  {
    title: '阶梯折线图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*lOdVRrYL7UIAAAAAAAAAAAAAARQnAQ',
    schema: {
      componentName: 'Line',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                year: '1991',
                value: 3,
              },
              {
                year: '1992',
                value: 4,
              },
              {
                year: '1993',
                value: 3.5,
              },
              {
                year: '1994',
                value: 5,
              },
              {
                year: '1995',
                value: 4.9,
              },
              {
                year: '1996',
                value: 6,
              },
              {
                year: '1997',
                value: 7,
              },
              {
                year: '1998',
                value: 9,
              },
              {
                year: '1999',
                value: 13,
              },
              {
                year: '1999',
                value: 8,
              },
            ],
          },
        },
        xField: 'year',
        yField: 'value',
        stepType: 'vh',
      },
    },
  },
  {
    title: '多折线图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*IZ9nRq-a6fIAAAAAAAAAAABkARQnAQ',
    schema: {
      componentName: 'Line',
      props: {
        dataSource: {
          type: 'api',
          config: {
            url: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
          },
        },
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
      },
    },
  },
];

export default {
  ...LineMeta,
  snippets,
};
