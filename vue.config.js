module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy: {
      "api": {
        target: 'localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  productionSourceMap: false
}