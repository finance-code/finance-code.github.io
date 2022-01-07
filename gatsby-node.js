'use strict';

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (getConfig().mode === 'production') {
      actions.setWebpackConfig({
        devtool: false
      });
    }
    if (stage === 'build-javascript' || stage === 'develop') {
      const config = getConfig()
      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      )
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true
      }
      actions.replaceWebpackConfig(config)
    }
  };