import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CardList from './CardList'
import 'tachyons'
import * as serviceWorker from './serviceWorker';
//import {robots} from './robots'
import App from './containers/App.js'

ReactDOM.render(
  <div>
  <App />
  </div>
  , document.getElementById('root')
);
serviceWorker.unregister();
