import React from 'react';
import friends from './friends.module.css'
import User from './User/User'

const Friends = (props) => {

  let UserFriendsElements = props.userFriends.map( 
    user => <User userId={user.id} userName={user.user_name} userAvatar={user.user_avatar} />
  )

  return (
    <div className='Friends'>
      <div className={friends.title}>Друзья</div>
      {UserFriendsElements} 
    </div>
  )
}

export default Friends;