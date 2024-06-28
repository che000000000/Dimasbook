import React from 'react'
import message from './message.module.css'
import User from './User/User';

const Message = (props) => {
    return (
        <div className={message.container}>
            <div className={message.message}>
                <User userId={props.userId} userName={props.userName} userAvatar={props.userAvatar} />
                <div className={message.text_message}>{props.message}</div>
                <div className={message.date}>{props.date}</div>
            </div>
        </div>
    )
}

export default Message;