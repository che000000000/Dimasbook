import React from 'react';
import post from './post.module.css'
import User from './User/User'

const Post = (props) => {
  return (
    <div className={post.container}>
      <div className={post.userWrap}>
        <div className={post.user}><User userId={props.userId} userName={props.userName} userAvatar={props.userAvatar}/></div>
        <div className={post.date}>{props.date}</div>
      </div>
      <div className={post.text}>{props.message}</div>
      <div className={post.likes}>
        <div className={post.likeCount}>{props.likesCount}</div>
        <div className={post.like}>likes</div>
      </div>
    </div>
  )
}

export default Post;