module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-less',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-class-pattern': null,
    'color-no-invalid-hex': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
