import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { dataSourceMeta } from '../common';

const ColumnMeta: IPublicTypeComponentMetadata = {
  componentName: 'Column',
  title: 'Column',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '柱状图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Column',
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
            setter: 'StringSetter',
            defaultValue: 'x',
          },
          {
            name: 'yField',
            title: {
              label: 'yField',
              tip: 'y方向对应的字段名',
            },
            setter: 'StringSetter',
            defaultValue: 'y',
          },
          {
            name: 'seriesField',
            title: {
              label: 'seriesField',
              tip: '拆分字段，在分组柱状图下同 groupField、colorField，在堆积柱状图下同 stackField、colorField',
            },
            setter: 'StringSetter',
          },
          {
            name: 'groupField',
            title: {
              label: 'groupField',
              tip: '拆分字段，用于堆叠分组柱状图，拆分优先级高于 seriesField，isGroup: true 时会根据 groupField 进行分组',
            },
            setter: 'StringSetter',
          },
          {
            name: 'isGroup',
            title: {
              label: 'isGroup',
              tip: '是否分组柱状图',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'isStack',
            title: {
              label: 'isStack',
              tip: '是否堆积柱状图',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'isPercent',
            title: {
              label: 'isPercent',
              tip: '是否区间柱状图',
            },
            setter: 'BoolSetter',
          },
        ],
      },
      {
        title: {
          label: '图表容器',
        },
        display: 'accordion',
        type: 'group',
        items: [
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
          },
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
        ],
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: '基础柱状图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*KAg2TY-oYRUAAAAAAAAAAAAAARQnAQ',
    schema: {
      componentName: 'Column',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                type: '家具家电',
                sales: 38,
              },
              {
                type: '粮油副食',
                sales: 52,
              },
              {
                type: '生鲜水果',
                sales: 61,
              },
              {
                type: '美容洗护',
                sales: 145,
              },
              {
                type: '母婴用品',
                sales: 48,
              },
              {
                type: '进口食品',
                sales: 38,
              },
              {
                type: '食品饮料',
                sales: 38,
              },
              {
                type: '家庭清洁',
                sales: 38,
              },
            ],
          },
        },
        xField: 'type',
        yField: 'sales',
      },
    },
  },
  {
    title: '堆叠柱状图',
    screenshot:
      'https://gw.alipayobjects.com/zos/antfincdn/KLJB0t7S9W/93ca0482-9d1d-42e9-b99c-c70d87517888.png',
    schema: {
      componentName: 'Column',
      props: {
        dataSource: {
          type: 'api',
          config: {
            url: 'https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json',
          },
        },
        xField: 'year',
        yField: 'value',
        seriesField: 'type',
        isStack: true,
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'bottom', 'middle'
          // 可配置附加的布局方法
          layout: [
            // 柱形图数据标签位置自动调整
            {
              type: 'interval-adjust-position',
            }, // 数据标签防遮挡
            {
              type: 'interval-hide-overlap',
            }, // 数据标签文颜色自动调整
            {
              type: 'adjust-color',
            },
          ],
        },
      },
    },
  },
  {
    title: '分组柱状图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*cE7xSYYgqCcAAAAAAAAAAAAAARQnAQ',
    schema: {
      componentName: 'Column',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                name: 'London',
                月份: 'Jan.',
                月均降雨量: 18.9,
              },
              {
                name: 'London',
                月份: 'Feb.',
                月均降雨量: 28.8,
              },
              {
                name: 'London',
                月份: 'Mar.',
                月均降雨量: 39.3,
              },
              {
                name: 'London',
                月份: 'Apr.',
                月均降雨量: 81.4,
              },
              {
                name: 'London',
                月份: 'May',
                月均降雨量: 47,
              },
              {
                name: 'London',
                月份: 'Jun.',
                月均降雨量: 20.3,
              },
              {
                name: 'London',
                月份: 'Jul.',
                月均降雨量: 24,
              },
              {
                name: 'London',
                月份: 'Aug.',
                月均降雨量: 35.6,
              },
              {
                name: 'Berlin',
                月份: 'Jan.',
                月均降雨量: 12.4,
              },
              {
                name: 'Berlin',
                月份: 'Feb.',
                月均降雨量: 23.2,
              },
              {
                name: 'Berlin',
                月份: 'Mar.',
                月均降雨量: 34.5,
              },
              {
                name: 'Berlin',
                月份: 'Apr.',
                月均降雨量: 99.7,
              },
              {
                name: 'Berlin',
                月份: 'May',
                月均降雨量: 52.6,
              },
              {
                name: 'Berlin',
                月份: 'Jun.',
                月均降雨量: 35.5,
              },
              {
                name: 'Berlin',
                月份: 'Jul.',
                月均降雨量: 37.4,
              },
              {
                name: 'Berlin',
                月份: 'Aug.',
                月均降雨量: 42.4,
              },
            ],
          },
        },
        isGroup: true,
        xField: '月份',
        yField: '月均降雨量',
        seriesField: 'name',
        /** 设置颜色 */
        // color: ['#1ca9e6', '#f88c24'],

        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle',
          // 'top', 'middle', 'bottom'
          // 可配置附加的布局方法
          layout: [
            // 柱形图数据标签位置自动调整
            {
              type: 'interval-adjust-position',
            }, // 数据标签防遮挡
            {
              type: 'interval-hide-overlap',
            }, // 数据标签文颜色自动调整
            {
              type: 'adjust-color',
            },
          ],
        },
      },
    },
  },
];

export default {
  ...ColumnMeta,
  snippets,
};
