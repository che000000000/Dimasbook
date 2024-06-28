import React from 'react';
import addpost from './addpost.module.css'

const NewPost = (props) => {
  
  let NewPostElement = React.createRef();

  const addPost = () => { 
    let textPost = NewPostElement.current.value;
    props.addPost(textPost, props.profile.id, props.profile.user_name, props.profile.user_avatar)
  }
  
  return (
    <div className={addpost.container}>
      <input className={addpost.input} ref={NewPostElement} type='text' placeholder='Что у вас нового?'></input>
      <button onClick={addPost} className={addpost.btn}>
        Создать запись
      </button>
    </div>
  )
}

export default NewPost;