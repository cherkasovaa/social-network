import React from 'react';
import style from './Users.module.css';

const Users = props => {
  if(props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        photoUrl: 'https://image.freepik.com/free-vector/_8169-228.jpg',
        fullname: 'Dmitryj',
        status: `I'm a boss`,
        location: { country: 'Belarys', city: 'Minsk' }
      },
      {
        id: 2,
        followed: true,
        photoUrl: 'https://image.freepik.com/free-vector/_8169-228.jpg',
        fullname: 'Vitaliy',
        status: `I'm glad to see you all`,
        location: { country: 'Ukraine', city: 'Dnipro' }
      },
      {
        id: 3,
        followed: true,
        photoUrl: 'https://image.freepik.com/free-vector/_8169-228.jpg',
        fullname: 'Kostya',
        status: `nice day`,
        location: { country: 'Russia', city: 'Moskow' }
      }]
    )
  }
  return (
    <div className={style.usersPage}>
      {props.users.map(user => {
        return (
          <div key={user.id} className={style.userWrapper}>
            <div className={style.avatarWrapper}>
              <img className={style.avatar} src={user.photoUrl} alt='avatar' />
              {user.followed ? (
                <button className={style.btnUnfollow} onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
              ) : (
                <button className={style.btnFollow} onClick={() => {props.follow(user.id)}}>Follow</button>
              )}
            </div>
            <div className={style.userInfo}>
              <div>
                <p className={`${style.text} ${style.fullname}`}>{user.fullname}</p>
                <p className={`${style.text} ${style.status}`}>{user.status}</p>
              </div>
              <div>
                <p className={`${style.text} ${style.location}`}>{user.location.city}</p>
                <p className={`${style.text} ${style.location}`}>{user.location.country}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
