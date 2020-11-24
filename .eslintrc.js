module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    './node_modules/gts',
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:gridsome/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    node: {
      resolvePaths: [__dirname],
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
