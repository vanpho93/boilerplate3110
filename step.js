I. Install packages
npm install style-loader css-loader script-loader --save-dev
npm install jquery@2.2.1 foundation-sites@6.2.0 --save-dev --save-exact

II. Adding this to the config file:

1. var webpack = require('webpack');

2. externals: {
  jquery: 'jQuery'
}

3. plugins: [
  new webpack.ProvidePlugin({"$": "jquery"})
]

4. entry: [
  'script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
  './app/app.js'
]

III. Adding this to app file:
1. require('!style!css!foundation-sites/dist/foundation.min.css');
2. $(document).foundation();
