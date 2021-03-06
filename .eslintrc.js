module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['vue', 'prettier', 'gridsome'],
  extends: [
    'eslint:recommended',
    'google',
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'gridsome/format-query-block': 'warn',
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore',
        semi: true,
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 80
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
