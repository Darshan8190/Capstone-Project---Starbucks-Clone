import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import Layout from './Containers/Layout/Layout';
import layoutReducer from './store/reducers/Layout'
import signInReducer from './store/reducers/SignIn'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  layout: layoutReducer,
  signIn: signInReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

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
