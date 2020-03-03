import React from 'react';
import style from './Users.module.css';
import userAva from '../../assets/images/default_avatar.jpg';

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
              <img
                className={style.avatar}
                src={user.photos.small != null ? user.photos.small : userAva}
                alt='avatar'
              />
              {user.followed ? (
                <button
                  className={style.btnUnfollow}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={style.btnFollow}
                  onClick={() => {
                    props.follow(user.id);
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
