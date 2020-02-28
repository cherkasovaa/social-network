import { createStore, combineReducers } from "redux";
import profileReduser from "./profileReducer";
import dialogsReduser from "./dialogsReducer";
import sidebarReduser from "./sidebarReducer";

let reducers = combineReducers({
  profilePage: profileReduser,
  messagesPage: dialogsReduser,
  sidebar: sidebarReduser
});

let store = createStore(reducers);

export default store;
window.store = store;
