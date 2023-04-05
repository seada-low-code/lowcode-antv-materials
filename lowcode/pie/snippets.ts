import { IPublicTypeSnippet } from '@alilc/lowcode-types';

export const snippets: IPublicTypeSnippet[] = [
  {
    title: '饼图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*wmldRZZj9lIAAAAAAAAAAABkARQnAQ',
    schema: {
      componentName: 'Pie',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                type: '分类一',
                value: 27,
              },
              {
                type: '分类二',
                value: 25,
              },
              {
                type: '分类三',
                value: 18,
              },
              {
                type: '分类四',
                value: 15,
              },
              {
                type: '分类五',
                value: 10,
              },
              {
                type: '其他',
                value: 5,
              },
            ],
          },
        },
        colorField: 'type',
        angleField: 'value',
      },
    },
  },
  {
    title: '环图',
    screenshot:
      'https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*65WIQK5T4c8AAAAAAAAAAAAAARQnAQ',
    schema: {
      componentName: 'Pie',
      props: {
        dataSource: {
          type: 'static',
          config: {
            list: [
              {
                type: '分类一',
                value: 27,
              },
              {
                type: '分类二',
                value: 25,
              },
              {
                type: '分类三',
                value: 18,
              },
              {
                type: '分类四',
                value: 15,
              },
              {
                type: '分类五',
                value: 10,
              },
              {
                type: '其他',
                value: 5,
              },
            ],
          },
        },
        appendPadding: 10,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.5,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: 'AntV\nG2Plot',
          },
        },
      },
    },
  },
];
