module.exports = {
  rules: {
    // Require or disallow semicolons instead of ASI (semi).
    // https://eslint.org/docs/rules/semi
    semi: ['error', 'never'],

    // Require trailing commas in multiline object literals.
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],

    // Require parens in arrow function arguments.
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Suggest using arrow functions as callbacks.
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    }],
  },
}
