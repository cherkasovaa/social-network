import React from 'react';
import Post from './Post/Post';
import style from './MyPost.module.css';

const MyPost = (props) => {
  let posts = props.postData.map( ({message, likesCounter}) => (<Post message={message} counter={likesCounter} />));

  let createNewPost = React.createRef();

  const addNewPost = () => {
    createNewPost.current.value = '';
    props.addPost();
  }

  const onPostChange = () => {
    let text = createNewPost.current.value;
    props.updateNewPost(text);
  }

  return (
    <div className={style.postsBlock}>
      <h3 className={style.postsBlockTitle}>My posts</h3>
      <div className={style.newPostBlock}>
        <textarea className={style.newPostArea}
                  onChange={onPostChange}
                  ref={createNewPost}/>
        <div>
          <button className={style.addButton}
                  onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <div>
        {posts}
      </div>
    </div>
  )
}

export default MyPost;
