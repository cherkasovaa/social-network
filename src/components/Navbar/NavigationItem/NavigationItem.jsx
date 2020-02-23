import React from 'react';
import style from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  const {path, item} = props.info;

  return (
      <div className={style.item}>
          <NavLink to={path} className={style.link} activeClassName={style.active}>{item}</NavLink>
      </div>
  )
}

export default NavigationItem;
