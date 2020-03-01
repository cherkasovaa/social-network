import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userAva from '../../assets/images/default_avatar.jpg';

class Users extends React.Component {
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      console.log(response.data);
      this.props.setUsers(response.data.items);
      this.props.setTotalCountPages(response.data.totalCount);
    });
  }

  onChangedpage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className={style.usersPage}>
        <div>
    {  pages.map(page => <span className={this.props.currentPage === page && style.selectedPage || style.pagginator}
    onClick={(e) => {this.onChangedpage(page)}}>{page}</span>)}
        </div>
        {this.props.users.map(user => {
          return (
            <div key={user.id} className={style.userWrapper}>
              <div className={style.avatarWrapper}>
                <img
                  className={style.avatar}
                  src={user.photos.small != null ? user.photos.small : userAva}
                  alt='avatar'
                />
                {user.followed ? (
                  <button
                    className={style.btnUnfollow}
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={style.btnFollow}
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
              <div className={style.userInfo}>
                <div>
                  <p className={`${style.text} ${style.fullname}`}>{user.name}</p>
                  <p className={`${style.text} ${style.status}`}>{user.status}</p>
                </div>
                <div>
                  <p className={`${style.text} ${style.location}`}>{'user.location.city'}</p>
                  <p className={`${style.text} ${style.location}`}>{'user.location.country'}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
