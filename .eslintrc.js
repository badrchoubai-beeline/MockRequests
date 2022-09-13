module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/']
}
