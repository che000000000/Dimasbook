import React from 'react';
import nav from './navbar.module.css'
import Item from './Item/Item';

const Navbar = (props) => {
  return (
    <nav className={nav.navbar}>
      <div className={nav.listMain}>
        <Item link={`/profile/${props.userId}`} name="Профиль" />
        <Item link={`/dialogs/${props.userId}`} name="Сообщения" />
        <Item link="/news" name="Новости" />
        <Item link="/music" name="Музыка" />
        <Item link="/community" name="Сообщества" />
      </div>
      <div className={nav.line}></div>
      <div className={nav.listAdditional}>
        <Item name="Настройки" />
        <Item name="Поддержка" />
        <Item name="О нас" />
      </div>
    </nav >
  )
}

export default Navbar;