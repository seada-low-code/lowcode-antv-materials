import { IPublicTypeSnippet } from '@alilc/lowcode-types';
import { commonPadding } from '../common';

export const snippets: IPublicTypeSnippet[] = [
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
        style: {
          ...commonPadding,
        },
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
        xAxis: false,
        style: {
          ...commonPadding,
        },
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
        style: {
          ...commonPadding,
        },
      },
    },
  },
];
