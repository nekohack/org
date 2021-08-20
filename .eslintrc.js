module.exports = {
  extends: ['@nekohack/eslint-config-react'],
  plugins: ['@typescript-eslint'],
  root: true,
  env: { node: true, es6: true },
  parser: '@typescript-eslint/parser',
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
