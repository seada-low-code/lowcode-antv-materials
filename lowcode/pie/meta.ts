import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';
import { containerMeta, dataSourceMeta } from '../common';

const PieMeta: IPublicTypeComponentMetadata = {
  componentName: 'Pie',
  title: 'Pie',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '饼图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Pie',
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
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'angleField',
            title: {
              label: 'angleField',
            },
            setter: 'StringSetter',
          },
          {
            name: 'colorField',
            title: {
              label: 'colorField',
            },
            setter: 'StringSetter',
          },
        ],
      },
      { ...containerMeta },
      {
        title: {
          label: '图形样式',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'radius',
            title: {
              label: 'radius',
              tip: '饼图半径',
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 1,
                step: 0.1,
              },
            },
          },
          {
            name: 'innerRadius',
            title: {
              label: 'innerRadius',
              tip: '饼图的内半径',
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 1,
                step: 0.1,
              },
            },
          },
          {
            name: 'startAngle',
            title: {
              label: 'startAngle',
              tip: '坐标系起始角度',
            },
            setter: {
              componentName: 'NumberSetter',
            },
          },
          {
            name: 'endAngle',
            title: {
              label: 'endAngle',
              tip: '坐标系结束角度',
            },
            setter: {
              componentName: 'NumberSetter',
            },
          },
        ],
      },
      {
        title: {
          label: '图表组件',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            title: {
              label: '文本标签',
            },
            display: 'popup',
            type: 'group',
            items: [
              {
                name: 'label.type',
                title: {
                  label: 'type',
                },
                setter: {
                  componentName: 'RadioGroupSetter',
                  props: {
                    options: [
                      {
                        label: 'inner',
                        value: 'inner',
                      },
                      {
                        label: 'outer',
                        value: 'outer',
                      },
                      {
                        label: 'spider',
                        value: 'spider',
                      },
                    ],
                    defaultValue: 'inner',
                  },
                },
              },
              {
                name: 'label.content',
                title: {
                  label: 'content',
                },
                setter: {
                  componentName: 'StringSetter',
                },
              },
              {
                name: 'label.rotate',
                title: {
                  label: 'rotate',
                  tip: '文本旋转角度',
                },
                setter: {
                  componentName: 'NumberSetter',
                },
              },
            ],
          },
        ],
      },
    ],
    supports: {},
    component: {},
  },
};

const snippets: IPublicTypeSnippet[] = [
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

export default {
  ...PieMeta,
  snippets,
};
