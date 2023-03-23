const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
        // setterMap: {
        //   DataSourceSetter: '../src/setters/DataSourceSetter/index',
        // },
      },
    ],
  ],
};
