import React from 'react';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

class Profile extends React.Component {
  render() {
    return (
      <div className='content'>
        <ProfileInfo />
        <MyPostContainer />
      </div>
      )
  }
}

export default Profile;
