module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    $: true,
    require: true,
    process: true
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off'
  }
}
