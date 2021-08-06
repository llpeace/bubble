
import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';

import About from './gww';

function App(props) {
  return (
    <div>
      <h1>test</h1>
      <ul>
        <li><Link to="/test1">test-1</Link></li>
        <li><Link to="/test2">test-1</Link></li>
      </ul>
      {/* {props.children} */}
    </div>
  );
}

function RouterApp() {
  return (
    <BrowserRouter history={history}>
      <Route path="/home" component={App} />
      <Route path="/test1" component={About} />
      <Route path="/test2" component={About} />
    </BrowserRouter>
  );
}

export default RouterApp;
