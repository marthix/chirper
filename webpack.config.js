module.exports = {
  entry: './js/index.js',
  output: {
    path: './',
    filename: './index.bundle.js'
  },
  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
