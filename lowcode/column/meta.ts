import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import { snippets } from './snippets';
import { axisMeta, containerMeta, dataSourceMeta, labelMeta, legendMeta } from '../common';

const ColumnMeta: IPublicTypeComponentMetadata = {
  componentName: 'Column',
  title: 'Column',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '柱状图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Column',
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
            setter: 'StringSetter',
            defaultValue: 'x',
          },
          {
            name: 'yField',
            title: {
              label: 'yField',
              tip: 'y方向对应的字段名',
            },
            setter: 'StringSetter',
            defaultValue: 'y',
          },
          {
            name: 'seriesField',
            title: {
              label: 'seriesField',
              tip: '拆分字段，在分组柱状图下同 groupField、colorField，在堆积柱状图下同 stackField、colorField',
            },
            setter: 'StringSetter',
          },
          {
            name: 'groupField',
            title: {
              label: 'groupField',
              tip: '拆分字段，用于堆叠分组柱状图，拆分优先级高于 seriesField，isGroup: true 时会根据 groupField 进行分组',
            },
            setter: 'StringSetter',
          },
          {
            name: 'isGroup',
            title: {
              label: 'isGroup',
              tip: '是否分组柱状图',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'isStack',
            title: {
              label: 'isStack',
              tip: '是否堆积柱状图',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'isPercent',
            title: {
              label: 'isPercent',
              tip: '是否区间柱状图',
            },
            setter: 'BoolSetter',
          },
        ],
      },
      { ...containerMeta },
      { ...axisMeta },
      {
        ...labelMeta,
      },
      {
        ...legendMeta,
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};

export default {
  ...ColumnMeta,
  snippets,
};
