import React from 'react';
import style from './Navbar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navbar = (props) => {
    let navlinks = props.data.navigationData.map((link) => <NavigationItem info={link}/>);

    return (
        <aside className={style.nav}>
            {navlinks}
        </aside>
    )
}

export default Navbar;
