import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const getAxisMetaData = (axis: 'xAxis' | 'yAxis'): IPublicTypeFieldConfig => {
  const axisName = axis === 'xAxis' ? 'X轴' : 'Y轴';
  const extraName = `${axis}Extra`;
  return {
    title: {
      label: axisName,
    },
    display: 'accordion',
    defaultCollapsed: true,
    type: 'group',
    items: [
      {
        name: `${extraName}.showAxis`,
        title: {
          label: `显示${axisName}`,
        },
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: true,
      },
      // {
      //   name: `${axis}.top`,
      //   title: {
      //     label: 'top',
      //     tip: '是否渲染在画布顶层',
      //   },
      //   setter: {
      //     componentName: 'BoolSetter',
      //   },
      //   condition: (target) => target.getProps().getPropValue(`${extraName}.showAxis`) === true,
      // },
      {
        name: `${axis}.position`,
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
        condition: (target) => target.getProps().getPropValue(`${extraName}.showAxis`) === true,
      },
      {
        name: `${extraName}.showTitle`,
        title: {
          label: '标题显示',
        },
        setter: {
          componentName: 'BoolSetter',
        },
        defaultValue: false,
        condition: (target) => target.getProps().getPropValue(`${extraName}.showAxis`) === true,
      },
      {
        name: `${axis}.title.text`,
        title: {
          label: '标题文本',
        },
        setter: {
          componentName: 'StringSetter',
        },
        defaultValue: axisName,
        condition: (target) => target.getProps().getPropValue(`${extraName}.showTitle`) === true,
      },
      {
        name: `${axis}.tickCount`,
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
        condition: (target) => target.getProps().getPropValue(`${extraName}.showAxis`) === true,
      },
    ],
  };
};

export const axisMeta: IPublicTypeFieldConfig = {
  title: {
    label: '坐标',
  },
  display: 'accordion',
  type: 'group',
  items: [{ ...getAxisMetaData('xAxis') }, { ...getAxisMetaData('yAxis') }],
};
