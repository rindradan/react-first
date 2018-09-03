module.exports = {
  mode: 'development',
  entry: require.resolve('./index.less'),
  output: {
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      }]
    }]
  }
}