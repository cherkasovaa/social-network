import React from 'react';
import styles from './Post.module.css';
import userAva from '../../../../assets/images/default_avatar.jpg';

const Post = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src={userAva} alt="logo" />
      <div className={styles.item}>
        {props.message}
        <p className={styles.likesCounter}>{props.counter} likes</p>
      </div>
    </div>
  )
}

export default Post;
