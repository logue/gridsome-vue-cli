const gridsome = require('./node_modules/gridsome/lib/explore');

/**
 * Gridsome for VueCLI Plugin.
 */
class GridsomePlugin {
  /**
   * Wait Gridsome function.
   * @param {*} params
   * @param {*} callback
   */
  async waitForGridsome(params, callback) {
    await gridsome(process.cwd());
    callback();
  }
  /**
   * Hook vue-cli compiler
   * @param {*} compiler
   */
  apply(compiler) {
    compiler.hooks.beforeRun.tapAsync(
      'Gridsome Plugin Build',
      this.waitForGridsome
    );
    compiler.hooks.watchRun.tapAsync(
      'Gridsome Plugin Serve',
      this.waitForGridsome
    );
  }
}

module.exports = (api) => {
  api.chainWebpack((webpackConfig) => {
    webpackConfig.plugin('gridsome').use(GridsomePlugin);
  });
};
