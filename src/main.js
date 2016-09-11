import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { setEntries } from './actions/entries';
import App from './App';
import idbKeyval from 'idb-keyval';
import reducer from './reducers';
import './main.css';

/* eslint-disable no-console */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(registration => {
      console.log('[SW] Service worker successfully registered on: ',
        registration.scope);
    })
    .catch(err => {
      console.log('[SW] Service worker registration failed: ', err);
    });
}
/* eslint-enable no-console */

const reduxDevTools = process.env.NODE_ENV !== 'production'
  && typeof window !== 'undefined' && window.devToolsExtension
  && window.devToolsExtension();
const composeEnhancers = () => {
  if (reduxDevTools) {
    return compose(applyMiddleware(thunk), reduxDevTools);
  }
  return applyMiddleware(thunk);
};
const store = createStore(reducer, composeEnhancers());

store.subscribe(() => {
  const entryList = store.getState().entryList;
  if (entryList.dirty) {
    const cleanEntries = entryList.entries.map(e => ({
      ...e,
      dirty: false
    }));
    idbKeyval.set('entries', JSON.stringify(cleanEntries))
      .then(() => store.dispatch(setEntries(cleanEntries)));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
