import React from 'react';
import style from './Users.module.css';
import userAva from '../../assets/images/default_avatar.jpg';
import { NavLink } from 'react-router-dom';
import { UsersAPI } from '../../api/api';

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={style.usersPage}>
      <div>
        {pages.map(page => (
          <span
            key={page.id}
            className={(props.currentPage === page && style.selectedPage) || style.pagginator}
            onClick={e => {
              props.onChangedpage(page);
            }}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map(user => {
        return (
          <div key={user.id} className={style.userWrapper}>
            <div className={style.avatarWrapper}>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={style.avatar}
                  src={user.photos.small != null ? user.photos.small : userAva}
                  alt='avatar'
                />
              </NavLink>
              {user.followed ? (
                <button
                  className={style.btnUnfollow}
                  onClick={() => {
                    UsersAPI.unfollowProfile(user.id)
                      .then(data => {
                        if (data.resultCode === 0) {
                          props.unfollow(user.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={style.btnFollow}
                  onClick={() => {
                    UsersAPI.followProfile(user.id)
                      .then(data => {
                        if (data.resultCode === 0) {
                          props.follow(user.id);
                        }
                      });
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
};

export default Users;
