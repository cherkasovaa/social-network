import React from 'react';
import style from './Navbar.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state.getState().sidebar;
    this.navlinks = this.state.navigation.map(link => (
      <NavigationItem path={link.path} item={link.item} key={link.item} />
    ));
  }
  render() {
    return <aside className={style.nav}>{this.navlinks}</aside>;
  }
}

export default Navbar;
