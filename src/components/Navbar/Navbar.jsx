import React from 'react';
import style from './Navbar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navbar = (props) => {
    let state = props.store.getState().sidebar;

    let navlinks = state.navigation.map((link) => <NavigationItem info={link}/>);

    return (
        <aside className={style.nav}>
            {navlinks}
        </aside>
    )
}

export default Navbar;
