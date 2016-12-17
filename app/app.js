var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('Weather');
var {Router, Route, hashHistory, IndexRoute} = require('react-router');
ReactDOM.render(
  <Weather/>,
  document.getElementById('root')
)
