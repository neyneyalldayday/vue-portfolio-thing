const { defineConfig } = require('@vue/cli-service');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    before: function (app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://www.googleapis.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/youtube/v3',
          },
        })
      );
    },
  },
};
module.exports = defineConfig({
  transpileDependencies: true
})
