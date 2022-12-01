module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: process.cwd(),
    project: ['./tsconfig.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // for TS,JS不需要
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // 'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 2,
    'eol-last': [2, 'always'],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2, { args: 'none', ignoreRestSiblings: true }],
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 1,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-return': 1,
    '@typescript-eslint/no-unsafe-argument': 1,
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: false,
      },
    ],
    'no-console': 1,
    'prefer-destructuring': [
      'error',
      {
        array: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react 检测 React 版本
    },
  },
};
