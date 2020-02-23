import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={style.dialogWrapper}>
      <NavLink className={style.dialog} activeClassName={style.active} to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;
