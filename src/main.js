import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { setEntries } from './actions';
import App from './App';
import idbKeyval from 'idb-keyval';
import reducer from './reducers';
import './main.css';

const store = createStore(reducer, applyMiddleware(thunk));

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
