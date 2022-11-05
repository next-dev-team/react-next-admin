module.exports = {
  extends: [require.resolve('umi/eslint'), 'plugin:valtio/recommended'],
  rules: {
    // '@typescript-eslint/no-unused-vars': 0,
    'react/jsx-no-undef': [0, { allowGlobals: true }],
  },
}
