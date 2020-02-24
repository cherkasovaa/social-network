// let rendererEntireTree = () => {console.log('')}

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
        {id: 3, message: 'Welcome!'}]
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
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCounter: 0
      };
      this._state.profilePage.postData.push(newPost);
      this._callSubscriber(this._state);
    } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPost;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;
