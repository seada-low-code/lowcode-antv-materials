import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const containerMeta: IPublicTypeFieldConfig = {
  title: {
    label: '图表容器',
  },
  display: 'accordion',
  type: 'group',
  items: [
    {
      name: 'autoFit',
      title: {
        label: 'autoFit',
        tip: '自适应容器宽高',
      },
      setter: {
        componentName: 'BoolSetter',
        initialValue: true,
      },
    },
    {
      name: 'width',
      title: {
        label: 'width',
        tip: '图表宽度',
      },
      setter: {
        componentName: 'NumberSetter',
        initialValue: 400,
      },
      condition: (target) => target.getProps().getPropValue('autoFit') === false,
    },
    {
      name: 'height',
      title: {
        label: 'height',
        tip: '图表高度',
      },
      setter: {
        componentName: 'NumberSetter',
        initialValue: 400,
      },
      condition: (target) => target.getProps().getPropValue('autoFit') === false,
    },
    {
      name: 'padding',
      title: {
        label: 'padding',
        tip: '间距',
      },
      setter: [
        {
          componentName: 'StringSetter',
        },
        {
          componentName: 'NumberSetter',
        },
      ],
      defaultValue: 'auto',
    },
    {
      name: 'appendPadding',
      title: {
        label: 'appendPadding',
        tip: '在padding的基础上，设置额外的padding数值',
      },
      setter: {
        componentName: 'NumberSetter',
      },
    },
    {
      name: 'limitInPlot',
      title: {
        label: 'limitInPlot',
        tip: '是否对超出坐标系范围的Geometry进行剪切',
      },
      setter: {
        componentName: 'BoolSetter',
      },
    },
  ],
};
