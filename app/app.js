import React from 'react';
import ReactDOM from 'react-dom';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import Main from 'Main';
import AddBox from 'AddBox';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

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
