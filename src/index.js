import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider as RedxProvider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';
import configureStore from './redux/configureStore';

const store = configureStore();
render(
  <RedxProvider store={store}>  
    <Router>
      <App/>
    </Router>
  </RedxProvider>, document.getElementById('app'));
  
  