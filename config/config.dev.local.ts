export default {
  devtool: "source-map",
  define: {
    "process.env.UMI_ENV": "local",
    "process.env.sign_key": "zycfly",
    "process.env.api_url": "",
  },
  outputPath: "dist/dev",
};
