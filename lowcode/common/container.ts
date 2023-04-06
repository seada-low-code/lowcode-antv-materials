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
        label: '自适应宽高',
        tip: '自适应容器宽高|autoFit',
      },
      setter: {
        componentName: 'BoolSetter',
        initialValue: true,
      },
    },
    {
      name: 'width',
      title: {
        label: '图表宽度',
        tip: '图表宽度|width',
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
        label: '图表高度',
        tip: '图表高度|height',
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
        label: '间距',
        tip: '间距|padding',
      },
      setter: [
        {
          componentName: 'NumberSetter',
        },
      ],
      defaultValue: 'auto',
    },
    // {
    //   name: 'appendPadding',
    //   title: {
    //     label: 'appendPadding',
    //     tip: '在padding的基础上，设置额外的padding数值',
    //   },
    //   setter: {
    //     componentName: 'NumberSetter',
    //   },
    // },
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
