import React from 'react';
import item from'./item.module.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className={item.item}>
          <NavLink className={item.link} to={props.link}>{props.name}</NavLink>
    </div>
  )
}

export default Item;