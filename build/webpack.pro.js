const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify("pro"),
    })
  ]
});
