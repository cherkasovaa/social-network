const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPADE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    sidebar: {
      navigationData: [
        { path: '/profile', item: 'Profile'},
        { path: '/dialogs', item: 'Messages'},
        { path: '/news', item: 'News'},
        { path: '/music', item: 'Music'},
        { path: '/settings', item: 'Settings'}
      ]
    },
    profilePage: {
      newPostText: '',
      postData: [
        {id: 1, message: 'I"m fine', likesCounter: 4},
        {id: 2, message: 'Hello, it is my first post', likesCounter: 13}
      ]
    },
    messagesPage: {
      dialogsData: [
        {name: 'Dima', id: 1},
        {name: 'Viktor', id: 2},
        {name: 'Sergey', id: 3},
      ],
      messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi, how are YOU?'},
        {id: 3, message: 'Welcome!'}],
      newMessageText: ''
    }
  },
  _callSubscriber () {
    console.log('')
  },
  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if(action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCounter: 0
      };
      this._state.profilePage.postData.push(newPost);
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPost;
      this._callSubscriber(this._state);
    } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if(action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageText;
      // this._state.messagesPage.newMessageText = '';
      this._state.messagesPage.messagesData.push({id: 6, message: body});
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newPost: text });

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default store;
window.store = store;
