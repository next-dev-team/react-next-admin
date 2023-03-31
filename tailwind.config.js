/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}
const antdToken = require('./tailwind-color_seed');
const { theme } = require('tailwindcss/defaultConfig');
const colors = require('tailwindcss/colors');
console.log('theme tw', theme);
const pick = (
  obj,
  keys,
) => {
  if (!obj) return {};
  return keys.reduce((acc, key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) acc[key] = obj[key];
    return acc;
  }, {});
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  plugins: [],
  corePlugins: { preflight: false },
  theme: {
    // eg. lg:text-primary
    screens: {
      ...(antdToken.screen || {}),
    },
    colors: {
      // eg. text-primary
      ...(antdToken.colors || {}),
      ...pick(colors, ['white', 'black']),
    },
    fontSize: {
      // eg. text-heading4
      ...(antdToken.fontSize || {}),
    },
    borderRadius: {
      // eg. text-sm
      ...(antdToken.borderRadius || {}),
      ...pick(theme.borderRadius, ['full']),
    },
    boxShadow: {
      ...(antdToken.boxShadow || {}),
    },

    extend: {
      fontWeight: {
        ...(antdToken.fontWeight || {}),
      },
      space: {
        // eg. text-sm
        ...(antdToken.space || {}),
      },
      margin: {
        ...(antdToken.space || {}),
      },
      padding: {
        // eg. text-sm
        ...(antdToken.space || {}),
      },
    }
  },
};
