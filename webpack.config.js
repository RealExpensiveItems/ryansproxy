const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/index.jsx'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        　test: /\.(png)$/,
      　　loader: 'url-loader?limit=8192&name=assets/[hash:8].[name].[ext]'
      },
      {
        　test: /\.(jpg)$/,
      　　loader: 'url-loader?limit=8192&name=asset/images/[hash:8].[name].[ext]' //file naming
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};