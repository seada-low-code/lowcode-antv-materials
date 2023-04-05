import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const snippets: IPublicTypeSnippet[] = [
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
