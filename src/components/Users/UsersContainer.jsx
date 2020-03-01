import { connect } from 'react-redux';
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalCountPagesActionCreator } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pagenumber) => {
      dispatch(setCurrentPageActionCreator(pagenumber));
    },
    setTotalCountPages: (totalCount) => {
      dispatch(setTotalCountPagesActionCreator(totalCount));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
