import React from 'react'
import avatar from './avatar.module.css'

const Avatar = (props) => {
  return (
    <img className={avatar.container} src={props.userAvatar}></img>
  )
}

export default Avatar;