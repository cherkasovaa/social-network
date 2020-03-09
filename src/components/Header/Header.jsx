import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'
        alt='logo'
      />
      <div className={style.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
