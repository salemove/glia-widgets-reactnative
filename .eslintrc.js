/* eslint-disable regex/invalid */
module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'plugin:jest/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'header', 'jest', 'react-native', 'regex', 'simple-import-sort'],
  globals: {
    driver: 'readonly',
    device: 'readonly',
    element: 'readonly',
    by: 'readonly',
  },
  rules: {
    // Using ts instead: https://stackoverflow.com/questions/55807329/why-eslint-throws-no-unused-vars-for-typescript-interface
    '@typescript-eslint/no-unused-vars': 'off',
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'jest/no-standalone-expect': 'off',
    // no-undef rule does not depend on TS. TS has its own check.
    'no-undef': 'off',
    // no-shadow conflicts with enums
    'no-shadow': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'assert', 'debug'] }],
    'react-native/no-unused-styles': 'error',
    semi: ['error', 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: false,
        reservedFirst: false,
        shorthandFirst: true,
      },
    ],
    curly: 'error',
  },
}
