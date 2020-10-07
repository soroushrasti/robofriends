import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CardList from './CardList'
import 'tachyons'
import * as serviceWorker from './serviceWorker';
//import {robots} from './robots'
import App from './containers/App.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import {searchRobots,requestRobots} from './reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const logger= createLogger();
const rootReducer=combineReducers({
  searchRobots,requestRobots
})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store} > 
    <App />
  </Provider>
  , document.getElementById('root')
);
serviceWorker.unregister();
