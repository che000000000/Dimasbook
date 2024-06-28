import React from 'react'
import item from './item.module.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <Link className={item.container} to={`dialog/${props.dialogId}`}>
            <div className={item.name_avatar}>
                <img className={item.avatar} src={props.dialogAvatar}></img>
                <div className={item.name}>{props.dialogName}</div>
            </div>
            <div className={item.last_message}>
                
            </div>
        </Link>
    )
}

export default Item;