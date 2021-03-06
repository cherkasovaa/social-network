import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = props => {
  return (
    <div className='content'>
      <ProfileInfo profile={props.profile} />
      <MyPostContainer />
    </div>
  );
};

export default Profile;
