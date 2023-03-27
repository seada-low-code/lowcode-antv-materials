import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { containerMeta, dataSourceMeta } from '../common';

const BarMeta: IPublicTypeComponentMetadata = {
  componentName: 'Bar',
  title: 'Bar',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '条形图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Bar',
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
              tip: '拆分字段，在分组条形图下同 groupField、colorField，在堆积条形图下同 stackField、colorField',
            },
            setter: 'StringSetter',
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
    title: '基础条形图',
    screenshot:
      'https://gw.alipayobjects.com/zos/antfincdn/rWp4Sq5ofk/10256978-7f35-4a4c-b67c-39aaad269bc2.png',
    schema: {
      componentName: 'Bar',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                year: '1951 年',
                value: 38,
              },
              {
                year: '1952 年',
                value: 52,
              },
              {
                year: '1956 年',
                value: 61,
              },
              {
                year: '1957 年',
                value: 145,
              },
              {
                year: '1958 年',
                value: 48,
              },
            ],
          },
        },
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
      },
    },
  },
  {
    title: '堆叠条形图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*BHyQS6T_qucAAAAAAAAAAAAAARQnAQ',
    schema: {
      componentName: 'Bar',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                year: '1991',
                value: 3,
                type: 'Lon',
              },
              {
                year: '1992',
                value: 4,
                type: 'Lon',
              },
              {
                year: '1993',
                value: 3.5,
                type: 'Lon',
              },
              {
                year: '1994',
                value: 5,
                type: 'Lon',
              },
              {
                year: '1995',
                value: 4.9,
                type: 'Lon',
              },
              {
                year: '1996',
                value: 6,
                type: 'Lon',
              },
              {
                year: '1997',
                value: 7,
                type: 'Lon',
              },
              {
                year: '1998',
                value: 9,
                type: 'Lon',
              },
              {
                year: '1999',
                value: 13,
                type: 'Lon',
              },
              {
                year: '1991',
                value: 3,
                type: 'Bor',
              },
              {
                year: '1992',
                value: 4,
                type: 'Bor',
              },
              {
                year: '1993',
                value: 3.5,
                type: 'Bor',
              },
              {
                year: '1994',
                value: 5,
                type: 'Bor',
              },
              {
                year: '1995',
                value: 4.9,
                type: 'Bor',
              },
              {
                year: '1996',
                value: 6,
                type: 'Bor',
              },
              {
                year: '1997',
                value: 7,
                type: 'Bor',
              },
              {
                year: '1998',
                value: 9,
                type: 'Bor',
              },
              {
                year: '1999',
                value: 13,
                type: 'Bor',
              },
            ].reverse(),
          },
        },
        xField: 'value',
        yField: 'year',
        seriesField: 'type',
        isStack: true,
      },
    },
  },
];

export default {
  ...BarMeta,
  snippets,
};
