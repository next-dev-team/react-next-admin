module.exports = {
  extends: [require.resolve('umi/eslint'), './.eslintrc-auto-import.json'],
  rules: {
    // '@typescript-eslint/no-unused-vars': 0,
    'react/jsx-no-undef': [0, { allowGlobals: true }],
  },
};
