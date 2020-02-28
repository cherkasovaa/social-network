const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  newPostText: '',
      postData: [
        {id: 1, message: 'I"m fine', likesCounter: 4},
        {id: 2, message: 'Hello, it is my first post', likesCounter: 13}
      ]
}
const profileReduser = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCounter: 0
      };
      state.newPostText = '';
      state.postData.push(newPost);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPost;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newPost: text });

export default profileReduser;
