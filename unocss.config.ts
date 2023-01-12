import { defineConfig, presetIcons, presetUno } from 'unocss'
import { antdUnoColor } from './src/constants/colors'

export function createConfig({ dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    presets: [
      presetUno(),
      presetIcons({
        prefix: '',
      }),
    ],
    theme: {
      colors: {
        // veryCool: '#0000ff', // class="text-very-cool",
        ...(antdUnoColor() || {}),
      },
    },
  })
}

export default createConfig()
