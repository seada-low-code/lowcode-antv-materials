import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MagneticContainerMeta: IPublicTypeComponentMetadata = {
  componentName: 'MagneticContainer',
  title: 'MagneticContainer',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '磁贴容器',
  category: '',
  npm: {
    package: '@seada/antv-materials',
    version: '0.1.0',
    exportName: 'MagneticContainer',
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
    advanced: {
      isAbsoluteLayoutContainer: true,
    },
  },
};

const snippets: IPublicTypeSnippet[] = [
  {
    title: 'MagneticContainer',
    screenshot: '',
    schema: {
      componentName: 'MagneticContainer',
      props: {},
    },
  },
];

export default {
  ...MagneticContainerMeta,
  snippets,
};
