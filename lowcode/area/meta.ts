import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import { axisMeta, containerMeta, dataSourceMeta, labelMeta, legendMeta } from '../common';
import { snippets } from './snippets';

const AreaMeta: IPublicTypeComponentMetadata = {
  componentName: 'Area',
  title: 'Area',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '面积图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Area',
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
              tip: '拆分字段，在分组条形图下同 groupField、colorField，在堆积条形图下同 stackField、colorField',
            },
            setter: 'StringSetter',
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
    supports: { style: true },
    component: {},
  },
};

export default {
  ...AreaMeta,
  snippets,
};
