// https://prettier.io/docs/en/options.html#parser
module.exports = {
  './src/**/*.{ts,tsx}': [
    'eslint --ext .ts,.tsx --fix',
    'prettier --parser=typescript --write',
  ],
  './src/**/*.{js,jsx}': ['eslint --ext .js,.jsx --fix', 'prettier --write'],
  './src/**/*.{scss,sass,css,less}': ['stylelint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
};
