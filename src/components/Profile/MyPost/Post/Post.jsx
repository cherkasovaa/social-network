import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.avatar} src = "https://image.freepik.com/free-vector/_8169-228.jpg" alt="logo" />
      <div className={styles.item}>
        {props.message}
        <p className={styles.likesCounter}>{props.counter} likes</p>
      </div>
    </div>
  )
}

export default Post;
