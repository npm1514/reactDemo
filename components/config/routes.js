var React       = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
var Main  = require('../main');
var Home  = require('../home');
var About = require('../about');
var Animals = require('../animals');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}> 
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="animals" component={Animals}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>, 
	document.getElementById('app')
);



