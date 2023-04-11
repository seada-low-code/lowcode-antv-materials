import { IPublicTypeFieldConfig } from '@alilc/lowcode-types';

export const labelMeta: IPublicTypeFieldConfig = {
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
      defaultValue: false,
    },
    {
      name: 'label.type',
      title: {
        label: '标签类型',
      },
      setter: {
        componentName: 'SelectSetter',
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
        },
        initialValue: (target) =>
          target.componentMeta?.componentName === 'Pie' ? 'inner' : undefined,
      },
      condition: (target) => {
        return (
          target.getProps().getPropValue('showLabel') === true &&
          target.componentMeta?.componentName === 'Pie'
        );
      },
    },
  ],
};
