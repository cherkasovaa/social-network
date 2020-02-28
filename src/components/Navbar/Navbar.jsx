import React from 'react';
import style from './Navbar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import StoreContext from '../StoreContext';

const Navbar = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().sidebar;
                let navlinks = state.navigation.map((link) => <NavigationItem info={link}/>);
                return (
                    <aside className={style.nav}>
                        {navlinks}
                    </aside>
                );
            }
        }
        </StoreContext.Consumer>
    )
}

export default Navbar;
