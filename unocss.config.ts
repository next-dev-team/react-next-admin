import { defineConfig, presetIcons, presetUno } from 'unocss'
import { antdUnoColor } from './config/defaultSettings/seedColors'

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
        // veryCool: '#0000ff', // class="text-very-cool bg-very-cool",
        ...(antdUnoColor() || {}),
      },
    },
    rules: [
      [
        /^text-(.*)$/,
        ([, c], { theme }: { theme: any }) => {
          if (theme.colors[c]) return { color: theme.colors[c] }
        },
      ],
    ],
  })
}

export default createConfig()
