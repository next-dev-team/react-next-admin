import { defineConfig } from '@umijs/max'

// console.log('config.prod is working')

// all UMI Dev config here
export default defineConfig({
  // deadCode: {},

  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
})
