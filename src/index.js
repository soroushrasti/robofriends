import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import CardList from './CardList'
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App.js'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import {searchRobots,requestRobots} from './reducer';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const logger= createLogger();
const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers,applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
  <Provider store={store} > 
    <App />
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();

