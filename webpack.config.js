const path = require('path');

const Plugin = require('./src/Plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  // devtool: false,
  devtool: 'source-map',
  entry: {
    bundle: {
      import: path.resolve(__dirname, 'src/index.js'),
      library: {
        name: 'App',
        type: 'umd'
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  },
  // TODO: remove this.
  plugins: [
    new Plugin()
  ],
  // optimization: {
  //   concatenateModules: true
  // }
};
