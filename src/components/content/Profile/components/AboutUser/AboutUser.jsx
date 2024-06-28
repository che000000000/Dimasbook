import React from 'react';
import aboutuser from './aboutuser.module.css'

const UserDescription = (props) => {
    return (
        <div className={aboutuser.aboutuser}>{props.aboutUser}</div>
    )
}

export default UserDescription;