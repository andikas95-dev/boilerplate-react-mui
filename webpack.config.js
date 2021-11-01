const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    // roots: path.resolve('./src'),
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // alias: {
    //   components: path.resolve(__dirname, 'src/components/'),
    //   routers: path.resolve(__dirname, 'src/routers/'),
    // },
  },
  devServer: {
    // contentBase: path.join(__dirname, 'src'),
    static: path.join(__dirname, 'src'),
    open: false,
    port: 7000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json',
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'static', // can modify `static` to another name or get it from `process`
    }),
  ],
};
