module.exports = {
  entry: {
    timeline: './js/timeline.js',
    index: './js/index.js'
  },
  output: {
    path: './',
    filename: './[name].bundle.js'
  },
  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: {
      index: '/index'
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
