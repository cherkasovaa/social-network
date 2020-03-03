import { connect } from 'react-redux';
import {
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setTotalCountPagesActionCreator
} from '../../redux/usersReducer';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        console.log(response.data);
        this.props.setUsers(response.data.items);
        this.props.setTotalCountPages(response.data.totalCount);
      });
  }

  onChangedpage = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onChangedpage={this.onChangedpage}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followActionCreator(userId));
    },
    unfollow: userId => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: user => {
      dispatch(setUsersActionCreator(user));
    },
    setCurrentPage: pagenumber => {
      dispatch(setCurrentPageActionCreator(pagenumber));
    },
    setTotalCountPages: totalCount => {
      dispatch(setTotalCountPagesActionCreator(totalCount));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
