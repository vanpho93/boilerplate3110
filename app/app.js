var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var Main = require('Main');

var {Router, Route, hashHistory, IndexRoute} = require('react-router');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
