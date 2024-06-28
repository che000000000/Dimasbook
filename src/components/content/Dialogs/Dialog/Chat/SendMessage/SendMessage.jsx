import React from 'react'
import sendmessage from './sendmessage.module.css'

const SendMessage = (props) => {

    let SendMessageElement = React.createRef();

    let sendMessage = () =>{
        let text = SendMessageElement.current.value;
        alert(text)
        SendMessageElement.current.value = ""
    }

    return (
        <div className={sendmessage.container}>
            <input className={sendmessage.input} ref={SendMessageElement} type='text' placeholder='Введите сообщение'></input>
            <button className={sendmessage.button} onClick={sendMessage} >Отправить</button>
        </div>
    )
}

export default SendMessage;