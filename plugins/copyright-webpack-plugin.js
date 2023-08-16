class CopyrightWebpackPlugin {
  constructor(options) {
    console.log(options.name + ': Plugin has been used!');
  }
  apply(compiler) {
    // compiler hooks - 编译阶段的钩子函数，tapAsync 时有 cb，需要在最后调用；tap 则没有 cb。

    // compile 阶段：before a new compilation is created. This hook is not copied to child compilers.
    // tap 同步写法
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log('=========== compile hook ===========');
    });

    // emit 阶段：Executed right before emitting assets to output dir. This hook is not copied to child compilers.
    // 异步写法
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        console.log('=========== emit hook ===========');
        // debugger;
        compilation.assets['copyright.txt'] = {
          source: function () {
            return 'copyright by eric';
          },
          size: function () {
            return this.source().length;
          },
        };
        console.log('emit hook assets: ', compilation.assets);
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
