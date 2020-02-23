import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={style.image} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='background'/>
      </div>
      <div className={style.information}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
