'use strict';

const PLUGIN_NAME = 'Plugin';

class Plugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
      PLUGIN_NAME,
      (compilation, { normalModuleFactory }) => {
        normalModuleFactory.hooks.beforeResolve.tap(
          'Plugin',
          resolveData => {
            console.log(resolveData.request);
          }
        );
      }
    );
  }
}

module.exports = Plugin;
