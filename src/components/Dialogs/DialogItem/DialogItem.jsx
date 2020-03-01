import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

class DialogItem extends React.Component {
  constructor(props) {
    super(props);
    this.path = '/dialogs/' + this.props.id;
  }
  render() {
    return (
      <div className={style.dialogWrapper}>
        <NavLink className={style.dialog} activeClassName={style.active} to={this.path}>{this.props.name}</NavLink>
      </div>
    )
  }
}

export default DialogItem;
