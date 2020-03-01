import React from 'react';
import styles from './Post.module.css';
import userAva from '../../../../assets/images/default_avatar.jpg';

class Post extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <img className={styles.avatar} src={userAva} alt="logo" />
        <div className={styles.item}>
          {this.props.message}
          <p className={styles.likesCounter}>{this.props.counter} likes</p>
        </div>
      </div>
    )
  }
}

export default Post;
