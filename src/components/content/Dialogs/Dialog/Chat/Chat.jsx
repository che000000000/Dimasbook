import React from 'react'
import chat from './chat.module.css'
import YourMessage from './YourMessage/YourMessage';
import Message from './Message/Message'
import SendMessage from './SendMessage/SendMessage';
import Header from './Header/Header';

const Chat = (props) => {

    let MessagesElements = props.messages.map(
        message => {
            if (props.myId == message.user_id)
                return <YourMessage userId={message.user_id} userAvatar={message.user_avatar} message={message.message} date={message.date} />
            else
                return <Message userId={message.user_id} userName={message.user_name} userAvatar={message.user_avatar} message={message.message} date={message.date} />
        }
    )

    return (
        <div className={chat.container}>
            <Header myId={props.myId} />
            <div className={chat.messages_wrapper}>
                {MessagesElements}
            </div>
            <SendMessage />
        </div>
    )
}

export default Chat;