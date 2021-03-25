module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true
      }
    }
  },
}
