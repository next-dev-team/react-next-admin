import { defineConfig } from '@umijs/max'

// console.log('config.prod is working')

// all UMI Dev config here
export default defineConfig({
  // deadCode: {
  //   // failOnHint: true, // will force a error message and exit immediately
  //   // exclude some folder or directory
  //   // exclude: ['pages/unused/**'],
  // },

  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
})
