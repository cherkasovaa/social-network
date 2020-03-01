import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    addNewPostText: state.profilePage.addNewPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addNewPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);
