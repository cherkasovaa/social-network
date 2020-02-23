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
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log('')
  },
  addPost () {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCounter: 0
    };
    this._state.profilePage.postData.push(newPost);
    this._callSubscriber(this._state);
  },
  updateNewPost (newPost) {
    this._state.profilePage.newPostText = newPost;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;
