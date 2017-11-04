module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './rules/base',
    './rules/imports',
  ].map(require.resolve),
  rules: {},
}
