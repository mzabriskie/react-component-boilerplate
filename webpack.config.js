module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/example.js',
    sourceMapFilename: './dist/example.map',
    library: 'Example',
    libraryTarget: 'umd'
  },
  externals: {
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
