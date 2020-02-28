import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPost';
import StoreContext from '../../StoreContext';

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const addNewPost = () => {
          store.dispatch(addPostActionCreator());
        }

        const onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
        return (
          <MyPost updateNewPostText={onPostChange}
                addNewPostText={state.profilePage.newPostText}
                addNewPost={addNewPost}
                posts={state.profilePage.posts}/>)
      }
    }
      </StoreContext.Consumer>
  )
}

export default MyPostContainer;
