import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { nameReducer } from './store/reducers/name.reducer';
import { Provider } from 'react-redux';
import { bookmarksReducer } from './store/reducers/bookmarks.reducer';

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
  nameState: nameReducer,
  bmksState: bookmarksReducer,
});

const store = createStore(rootReducer, composeEnhancers());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
