import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import { snippets } from './snippets';
import { containerMeta, dataSourceMeta, getAxisMetaData, labelMeta, legendMeta } from '../common';

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
      {
        title: {
          label: '坐标',
        },
        display: 'accordion',
        type: 'group',
        items: [{ ...getAxisMetaData('xAxis') }, { ...getAxisMetaData('yAxis') }],
      },
      { ...labelMeta },
      { ...legendMeta },
      {
        title: {
          label: '图形',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'showPoint',
            title: {
              label: '标记开关',
            },
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'point.shape',
            title: {
              label: '标记形状',
            },
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    label: '圆形',
                    value: 'circle',
                  },
                  {
                    label: '菱形',
                    value: 'diamond',
                  },
                  {
                    label: '方形',
                    value: 'square',
                  },
                  {
                    label: '三角形',
                    value: 'triangle',
                  },
                  {
                    label: '向下三角形',
                    value: 'triangle-down',
                  },
                ],
              },
              initialValue: 'circle',
            },
            condition: (target) => target.getProps().getPropValue('showPoint') === true,
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

export default {
  ...LineMeta,
  snippets,
};
