var path = require('path');
var webpack = require('webpack');
var moment = require('moment');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  publicPath: '/sutra/',
  outputDir: './dist',
  runtimeCompiler: true,
  filenameHashing: false,
  productionSourceMap: false,
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./')
      },
      // modules: [resolve('../../node_modules')]
    },
    output: {
      globalObject: 'self',
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                "presets": ["@babel/preset-env", "@vue/cli-plugin-babel/preset"],
                "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
              }
            },
          ],
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        WALLE_BOT_TIMESTAMP: moment().format('YYYYMMDDHHmmss'),
        WALLE_BOT_MODE: `'${ process.env.NODE_ENV !== 'production' ? 'dev': 'production'}'` || `'dev'`,
      }),
    ],
    devServer: {
      hot: true,
      inline: true,

      // https: true,
      host: '0.0.0.0',
      port: 8080,
      useLocalIp: true,

      // proxy: {
      //   '/sina': {
      //     target: 'https://w.sinajs.cn/',
      //     ws: true,
      //     changeOrigin: true,
      //     secure: true,
      //     pathRewrite: { '^/sina': '' },
      //     onProxyReq(proxyReq, req, res) {
      //       proxyReq.setHeader('Referer', 'https://sina.cn')
      //     },
      //     onProxyReqWs(proxyReq, req, res) {
      //       proxyReq.setHeader('Referer', 'https://sina.cn')
      //     },
      //   },
      //   '/binance': {
      //     target: 'https://www.bnappzh.co/',
      //     ws: true,
      //     changeOrigin: true,
      //     secure: true,
      //     pathRewrite: { '^/binance': '' },
      //     onProxyReq(proxyReq, req, res) {
      //       proxyReq.setHeader('Referer', 'https://www.bnappzh.co')
      //       proxyReq.setHeader('Origin', 'https://www.bnappzh.co')
      //     },
      //     onProxyReqWs(proxyReq, req, res) {
      //       proxyReq.setHeader('Referer', 'https://www.bnappzh.co')
      //       proxyReq.setHeader('Origin', 'https://www.bnappzh.co')
      //     },
      //   },
      // }
    }
  }
}