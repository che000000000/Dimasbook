import React from 'react';
import username from './username.module.css'

const UserName = (props) => {
  return (
    <div className={username.username}>{props.userName}</div>
  )
}

export default UserName;