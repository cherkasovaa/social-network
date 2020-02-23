import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="logo"/>
        </header>
    )
}

export default Header;
