module.exports = {
  entry: './src/main.js',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // JS
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      // SASS
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      // Images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192&name=images/[name].[ext]'
        ]
      }
    ]
  }
};
