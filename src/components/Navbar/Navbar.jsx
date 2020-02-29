import React from 'react';
import style from './Navbar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navbar = (props) => {
    let state = props.state.getState().sidebar;
    let navlinks = state.navigation.map((link) => <NavigationItem path={link.path} item={link.item} key={link.item}/>);

    return (
        <aside className={style.nav}>
            {navlinks}
        </aside>
    );
}

export default Navbar;
