import { defineConfig } from '@umijs/max'

console.log('config.prod is working')

// all UMI Dev config here
export default defineConfig({
  // deadCode: {
  // failOnHint: true, // will force a error message and exit immediately
  // exclude some folder or directory
  // exclude: ['pages/unused/**'],
  // },
  mfsu: {
    esbuild: true,
  },
  jsMinifier: 'esbuild',
  jsMinifierOptions: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    drop: ['console'],
  },

  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
  codeSplitting: {
    // granularChunks as testing in lighthouse it get 1% better performance
    jsStrategy: 'granularChunks',
    jsStrategyOptions: {},
    cssStrategyOptions: {},
  },
})
