import React from 'react';
import user from './user.module.css'
import { NavLink } from 'react-router-dom';

const User = (props) => {
  return (
    <NavLink className={user.user} to={`/profile/${props.userId}`}>
       <img className={user.avatar} src={props.userAvatar}></img>
       <div className={user.username}>{props.userName}</div>
    </NavLink>
  )
}

export default User;