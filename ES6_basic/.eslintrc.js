module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    extends: [
      'eslint:recommended'
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error'
    }
  };
  