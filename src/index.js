import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import Reducer from './reducers';
import App from './components/App';

const composeArray = [applyMiddleware(ReduxPromise)];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeArray.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

let store = createStore(Reducer, compose.apply(null, composeArray));

// let store = createStore(Reducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
	<Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
