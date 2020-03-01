import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userAva from '../../assets/images/default_avatar.jpg';

const Users = props => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items);
      });
    }
  }
  return (
    <div className={style.usersPage}>
      <button onClick={getUsers}>Get Users</button>
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
