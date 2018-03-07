import * as path from 'path';
import * as webpack from 'webpack';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';

const SRC_PATH = path.resolve(__dirname, './src');
const DIST_PATH = path.resolve(__dirname, './dist');

const config: webpack.Configuration = {
  context: SRC_PATH,
  mode: 'development',
  entry: {
    background: './background',
    content: './content',
    inject: './inject',
  },
  output: {
    path: DIST_PATH,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'awesome-typescript-loader',
      },
    ],
  },
  plugins: [new CopyWebpackPlugin([{ from: './assets/' }])],
};

export default config;
