module.exports = function (source) {
  // return source.replace('world', 'replace-loader');
  // return source.replace('world', this.query.name);

  const content = source.replace('world', this.query.name);
  // this.callback(
  //   err: Error | null,
  //   content: string | Buffer,
  //   sourceMap?: SourceMap,
  //   meta?: any
  // );
  return this.callback(null, content);
};
