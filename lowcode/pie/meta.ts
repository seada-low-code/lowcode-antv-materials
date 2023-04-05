import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import { containerMeta, dataSourceMeta, labelMeta, legendMeta } from '../common';
import { snippets } from './snippets';

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
        display: 'accordion',
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
      { ...labelMeta },
      { ...legendMeta },
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
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};

export default {
  ...PieMeta,
  snippets,
};
