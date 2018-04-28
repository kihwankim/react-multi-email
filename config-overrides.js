const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const overrideTsLoader = require('./react-app-rewire-typescript-hmr');
const rewireCssModules = require('react-app-rewire-css-modules');

/* config-overrides.js */
module.exports = function override(config, env) {
  if (env === 'development') {
    // (config, env)
    config = rewireReactHotLoader(config, env);

    // (config, env, babelPlugins = [])
    config = overrideTsLoader(config, env);

    // babel-polyfill
    config.entry = ['babel-polyfill', ...config.entry];
  }

  // sass-loader
  config = rewireCssModules(config, env);

  return config;
};