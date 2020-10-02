import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import Layout from './Containers/Layout/Layout';
import fetchingMenuReducer from './store/reducers/fetchingMenu'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(fetchingMenuReducer, composeEnhancers(applyMiddleware(thunk)))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
