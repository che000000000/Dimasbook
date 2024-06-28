import React from 'react'
import header from './header.module.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={header.container}>
            <Link to={`/dialogs/${props.myId}`} className={header.back_link}>{"<- Вернуться"}</Link>
        </div>
    )
}

export default Header;