import React from 'react'
import yourmessage from './yourmessage.module.css'
import User from './User/User';

const YourMessage = (props) => {
    return (
        <div className={yourmessage.container}>
            <div className={yourmessage.yourmessage}>
                <User userId={props.userId} userAvatar={props.userAvatar}/>
                <div className={yourmessage.text_message}>{props.message}</div>
                <div className={yourmessage.date}>{props.date}</div>
            </div>
        </div>
    )
}

export default YourMessage;