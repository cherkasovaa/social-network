import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPost';

const MyPostContainer = (props) => {
  let state = props.store.getState();

  const addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPost updateNewPostText={onPostChange}
            addNewPostText={state.profilePage.newPostText}
            addNewPost={addNewPost}
            posts={state.profilePage.posts}/>
  )
}

export default MyPostContainer;
