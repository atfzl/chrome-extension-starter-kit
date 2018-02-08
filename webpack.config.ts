import * as webpack from 'webpack';
import * as path from 'path';

const SRC_PATH = path.resolve(__dirname, './src');
const DIST_PATH = path.resolve(__dirname, './dist');

const config: webpack.Configuration = {
  context: SRC_PATH,
  entry: './index.ts',
  output: {
    path: DIST_PATH,
    filename: 'bundle.js',
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
};

export default config;
