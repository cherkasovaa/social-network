import React from 'react';
import style from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

class NavigationItem extends React.Component {
  render() {
    return (
    <div className={style.item}>
            <NavLink to={this.props.path} className={style.link} activeClassName={style.active}>{this.props.item}</NavLink>
        </div>
    )
  }
}

export default NavigationItem;
