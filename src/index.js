import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Service/reducers/index'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './sagas/saga';
import { incrementUp } from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
console.log("store data", store)
sagaMiddleware.run(incrementUp);  

ReactDOM.render(
  <Provider store={store} >
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
