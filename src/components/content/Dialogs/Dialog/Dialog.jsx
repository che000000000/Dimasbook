import React from 'react'
import dialog from './dilaog.module.css'
import Chat from './Chat/Chat';
import DialogInfo from './DialogInfo/DialogInfo';

const Dialog = (props) => {
    return (
        <div className={dialog.container}>
            <Chat myId={props.myDialogs.my_id} messages={props.myDialogs.messages} />
            <div>
                <DialogInfo />
            </div>
        </div>
    )
}

export default Dialog;