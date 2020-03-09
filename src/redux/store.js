import profileReduser from './profileReducer';
import dialogsReduser from './dialogsReducer';
import sidebarReduser from './sidebarReducer';

let store = {
  _state: {
    sidebar: {
      navigationData: [
        { path: '/profile', item: 'Profile' },
        { path: '/dialogs', item: 'Messages' },
        { path: '/news', item: 'News' },
        { path: '/music', item: 'Music' },
        { path: '/settings', item: 'Settings' }
      ]
    },
    profilePage: {
      newPostText: '',
      posts: [
        { id: 1, message: 'I"m fine', likesCounter: 4 },
        { id: 2, message: 'Hello, it is my first post', likesCounter: 13 }
      ],
      profile: null
    },
    messagesPage: {
      dialogsData: [
        { name: 'Dima', id: 1 },
        { name: 'Viktor', id: 2 },
        { name: 'Sergey', id: 3 }
      ],
      messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hi, how are YOU?' },
        { id: 3, message: 'Welcome!' }
      ],
      newMessageText: ''
    }
  },
  _callSubscriber() {
    console.log('');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = dialogsReduser(this._state.messagesPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

export default store;
