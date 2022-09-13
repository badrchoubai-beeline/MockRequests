module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['node_modules/', "dist"]
}
