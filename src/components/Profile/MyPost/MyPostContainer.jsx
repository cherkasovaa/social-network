import { addNewPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

let mapStateToProps = state => {
  return {
    addNewPostText: state.profilePage.addNewPostText,
    posts: state.profilePage.posts
  };
};

export default connect(mapStateToProps, { updateNewPostText, addNewPost })(MyPost);
