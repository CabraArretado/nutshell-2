import React from 'react';
import ReactDOM from 'react-dom';
import Nutshell from './Nutshell';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <Nutshell />
  </Router>,
  document.getElementById('root')
);