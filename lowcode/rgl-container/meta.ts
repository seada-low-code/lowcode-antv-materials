import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PieMeta: IPublicTypeComponentMetadata = {
  componentName: 'RGLContainer',
  title: 'RGLContainer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'AntV',
  category: '',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'RGLContainer',
    main: '',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [],
    supports: {},
    component: {
      isContainer: true,
    },
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: 'RGLContainer',
    screenshot: '',
    schema: {
      componentName: 'RGLContainer',
      props: {},
    },
  },
];

export default {
  ...PieMeta,
  snippets,
};
