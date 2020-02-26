import React from 'react';
import './Profile.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
    <div className='content'>
      <ProfileInfo />
      <MyPost postData={props.profilePage.postData} dispatch={props.dispatch}/>
    </div>
    )
}

export default Profile;
