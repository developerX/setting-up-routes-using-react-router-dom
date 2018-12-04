import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import Orders from './Orders';
import Navbar from './common/Navbar.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/dashboard/:color?" component={Dashboard}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/" component={App}></Route>
      </Switch>
    </div>
  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
