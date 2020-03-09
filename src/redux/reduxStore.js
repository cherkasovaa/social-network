import { createStore, combineReducers } from 'redux';
import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import sidebarReduser from './sidebarReducer';
import usersReduser from './usersReducer';
import authReduser from './authReducer';

let reducers = combineReducers({
  profilePage: profileReduser,
  messagesPage: dialogsReduser,
  sidebar: sidebarReduser,
  usersPage: usersReduser,
  auth: authReduser
});

let store = createStore(reducers);

export default store;
window.store = store;
