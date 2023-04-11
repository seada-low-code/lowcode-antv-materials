import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const legendMeta: IPublicTypeFieldConfig = {
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
};
