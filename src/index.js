import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, {addPost, updateNewPost, subscribe} from './redux/state';

let rendererEntireTree = (state) =>  {
  ReactDOM.render(<App state={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)}/>, document.getElementById('root'));
}

rendererEntireTree(store._state);
store.subscribe(rendererEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
