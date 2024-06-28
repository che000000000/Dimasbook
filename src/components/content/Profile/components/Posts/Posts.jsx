import React from 'react';
import posts from './posts.module.css'
import Post from './Post/Post'
import AddPost from './AddPost/AddPost';

const Posts = (props) => {
  const PostsComponents = props.userPosts.map( // Преобразователь в компоненты
    post => <Post
      userId={post.user_id}
      userAvatar={post.user_avatar}
      userName={post.user_name}
      date={post.date}
      message={post.message}
      likesCount={post.likes_count}
    />
)

  return (
    <div className={posts.container}>
      <AddPost profile={props.profile} addPost={props.addPost} />
      <div className={posts.posts}>
        <div className={posts.text}>Записи</div>
        {PostsComponents}
      </div>
    </div>
  )
}

export default Posts;