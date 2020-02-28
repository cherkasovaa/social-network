import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './components/StoreContext';

let rendererEntireTree = (state) =>  {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rendererEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rendererEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
