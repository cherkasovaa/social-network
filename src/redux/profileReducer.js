const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  newPostText: '',
  posts: [
    { id: 1, message: `I'm fine`, likesCounter: 4 },
    { id: 2, message: `Hello, it is my first post`, likesCounter: 13 }
  ],
  profile: null
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCounter: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPost
      };
      case SET_USER_PROFILE:
        return {
          ...state,
          profile: action.profile
        };
    default:
      return state;
  }
};

export const addNewPost = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, newPost: text });

export default profileReduser;
