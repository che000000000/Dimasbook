import React from 'react';
import user from './user.module.css'
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
    <Link className={user.user} to={`/profile/${props.userId}`}>
       <img className={user.avatar} src={props.userAvatar}></img>
       <div className={user.username}>{props.userName}</div>
    </Link>
  )
}

export default User;