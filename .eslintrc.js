module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/no-unused-prop-types': 0,
    'react/self-closing-comp': 0,
  },
};
