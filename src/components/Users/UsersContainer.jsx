import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (user) => {
      dispatch(setUsersActionCreator(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
