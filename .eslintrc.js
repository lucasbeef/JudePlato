module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0,
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'linebreak-style': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    indent: ['error', 2, { MemberExpression: 0 }],
    'global-require': ['off'],
    'react/jsx-one-expression-per-line': 'off',
  },
};
