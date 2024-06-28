import React from 'react';
import profile from './profile.module.css';
import Avatar from './components/Avatar/Avatar';
import Subscribe from './components/Subscribe/Subscribe';
import Refactor from './components/Refactor/Refactor';
import Friends from './components/Friends/Friends';
import UserName from './components/UserName/Username';
import Posts from './components/Posts/Posts'
import AboutUser from './components/AboutUser/AboutUser';

const Profile = (props) => {
  return (
    <div className={profile.profile}>
      <div className={profile.leftside}>
        <div className={`${profile.container} ${profile.container1}`}>
          <Avatar userAvatar={props.profile.user_avatar}/>
          <Refactor />
        </div>
        <div className={`${profile.container} ${profile.container3}`}>
          <Friends userFriends={props.profile.user_friends}/>
        </div>
      </div>
      <div className={profile.rightside}>
        <div className={`${profile.container} ${profile.container2}`}>
          <UserName userName={props.profile.user_name} />
          <AboutUser aboutUser={props.profile.about_user}/>
        </div>
        <div className={`${profile.container} ${profile.container4}`}>
          <Posts profile={props.profile} userPosts={props.profile.user_posts} addPost={props.addPost}/>
        </div>
      </div>
    </div>
  )
}

export default Profile;