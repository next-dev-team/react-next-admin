// process.env.UMI_ENV === 'pro'
export default {
  devtool: false,
  define: {
    'process.env.UMI_ENV': 'build_pro',
    'process.env.sign_key': 'zycfly',
    'process.env.api_url': 'http://www.adminapi.com',
  },
  outputPath: 'dist/pro',
};
