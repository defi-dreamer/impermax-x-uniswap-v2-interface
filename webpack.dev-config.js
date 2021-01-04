const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = function(env, argv) {
  return {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'eval',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'www/dist/build'),
      publicPath: 'build/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader"
                },
            ]
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.MODE": '"development"',
      })
    ]
  };
};