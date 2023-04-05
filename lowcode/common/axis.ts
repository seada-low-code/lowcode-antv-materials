import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const getAxisMetaData = (axisName: string): IPublicTypeFieldConfig => {
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
