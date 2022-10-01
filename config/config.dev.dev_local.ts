import { defineConfig } from '@umijs/max';

export default defineConfig({
  devtool: "source-map",
  define: {
    "process.env.UMI_ENV": "dev_local",
    "process.env.sign_key": "zycfly",
    "process.env.api_url": "",
  },
  outputPath: "dist/dev",
  clickToComponent: {},

})
