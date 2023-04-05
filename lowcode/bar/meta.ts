import { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';
import { containerMeta, dataSourceMeta } from '../common';
import { snippets } from './snippets';

const BarMeta: IPublicTypeComponentMetadata = {
  componentName: 'Bar',
  title: 'Bar',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '条形图',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'Bar',
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
    ],
    supports: { style: true },
    component: {},
  },
};

export default {
  ...BarMeta,
  snippets,
};
