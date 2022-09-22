export default {
  devtool: 'source-map',
  define: {
    'process.env.UMI_ENV': 'build_dev',
    'process.env.sign_key': 'zycfly',
    'process.env.api_url': 'http://www.adminapi.com',
  },
  outputPath: 'dist/dev',
};
