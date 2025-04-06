const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: process.env.NODE_ENV === 'production'
  ? false                  // no source maps in prod
  : 'cheap-module-source-map',
  entry: {
    views: './src/views/popup.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'popup.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // for static assets like manifest.json, icons, popup.html will be copied to 'dist' directory
        { from: 'manifest.json', to: '.' }, 
        { from: 'popup.html', to: '.' },
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
              loader: "css-loader",
              options: {
                  minimize: true,
                  sourceMap: true
              }
          },
          'postcss-loader', // post process the compiled CSS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }

};
/*
  entry	- Defines input files Webpack will bundle
  output- Where the bundles go and what they're named
  mode- Affects how Webpack optimizes your build
  plugins-	Used to copy files or perform extra tasks
  module.rules- Defines how to process different file type
*/