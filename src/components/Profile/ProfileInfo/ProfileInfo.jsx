import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = props => {
  if(!props.profile) {
    return (
      <Preloader/>
    )
  }
  return (
    <div>
      <div>
        <img
          className={style.image}
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
          alt='background'
        />
      </div>
      <div className={style.information}>
        <img src={props.profile.photos.large} className={style.image} alt='avatar' />
      </div>
    </div>
  );
};

export default ProfileInfo;
