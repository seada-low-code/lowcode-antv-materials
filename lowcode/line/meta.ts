import { IPublicTypeComponentMetadata, IPublicTypeFieldConfig } from '@alilc/lowcode-types';
import { snippets } from './snippets';
import { containerMeta, dataSourceMeta } from '../common';

const getAxisMetaData = (axisName: string): IPublicTypeFieldConfig => {
  return {
    title: {
      label: axisName,
    },
    display: 'accordion',
    type: 'group',
    items: [
      {
        name: `${axisName}.top`,
        title: {
          label: 'top',
          tip: '是否渲染在画布顶层',
        },
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: `${axisName}.position`,
        title: {
          label: 'position',
          tip: '坐标轴的位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: 'top',
                value: 'top',
              },
              {
                label: 'bottom',
                value: 'bottom',
              },
              {
                label: 'left',
                value: 'left',
              },
              {
                label: 'right',
                value: 'right',
              },
            ],
          },
        },
      },
      {
        name: `${axisName}.min`,
        title: {
          label: 'min',
          tip: '坐标轴最小值',
        },
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
          },
          initialValue: 0,
        },
      },
      {
        name: `${axisName}.max`,
        title: {
          label: 'max',
          tip: '坐标轴最大值',
        },
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
          },
        },
      },
      {
        name: `${axisName}.tickCount`,
        title: {
          label: 'tickCount',
          tip: '期望的坐标轴刻度数量',
        },
        setter: {
          componentName: 'NumberSetter',
          props: {
            min: 0,
          },
        },
      },
    ],
  };
};

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
      {
        title: {
          label: '图例',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'showLegend',
            title: {
              label: '图例开关',
            },
            setter: {
              componentName: 'BoolSetter',
            },
            defaultValue: true,
          },
          {
            name: 'legend.layout',
            title: {
              label: '布局方式',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    label: '横向',
                    value: 'horizontal',
                  },
                  {
                    label: '纵向',
                    value: 'vertical',
                  },
                ],
              },
              initialValue: 'horizontal',
            },
            condition: (target) => target.getProps().getPropValue('showLegend') === true,
          },
          {
            name: 'legend.position',
            title: {
              label: '图例位置',
            },
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    label: '顶部居左',
                    value: 'top-left',
                  },
                  {
                    label: '顶部居中',
                    value: 'top',
                  },
                  {
                    label: '顶部居右',
                    value: 'top-right',
                  },
                  {
                    label: '底部居左',
                    value: 'bottom-left',
                  },
                  {
                    label: '底部居中',
                    value: 'bottom',
                  },
                  {
                    label: '底部居右',
                    value: 'bottom-right',
                  },
                  {
                    label: '左侧居顶',
                    value: 'left-top',
                  },
                  {
                    label: '左侧居中',
                    value: 'left',
                  },
                  {
                    label: '左侧居底',
                    value: 'left-bottom',
                  },
                  {
                    label: '右侧居顶',
                    value: 'right-top',
                  },
                  {
                    label: '右侧居中',
                    value: 'right',
                  },
                  {
                    label: '右侧居底',
                    value: 'right-bottom',
                  },
                ],
              },
              initialValue: 'top-left',
            },
            condition: (target) => target.getProps().getPropValue('showLegend') === true,
          },
        ],
      },
      {
        title: {
          label: '标签',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'showLabel',
            title: {
              label: '标签开关',
            },
            setter: {
              componentName: 'BoolSetter',
            },
          },
        ],
      },
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
