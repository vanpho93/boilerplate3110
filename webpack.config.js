var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({"$":"jquery"})
  ],
  resolve:{
    root: __dirname,
    alias: {
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Examples: 'app/components/Examples.js',
      About: 'app/components/About.js',
      Weather: 'app/components/Weather.js',
      WeatherForm: 'app/components/WeatherForm.js',
      WeatherMessage: 'app/components/WeatherMessage.js',
      AddBox: 'app/components/AddBox.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
