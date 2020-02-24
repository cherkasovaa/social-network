import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';

const Dialogs = (props) => {
  const state = props.store.getState().messagesPage;

  let dialogsElements = state.dialogsData.map( ({name, id}) => (<DialogItem name={name} id={id}/>));
  let messagesElements = state.messagesData.map( messages => (<Message message={messages.message}/>));

  let currentText = React.createRef();

  const onSendMessageClick = () => {
    currentText.current.value = '';
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = () => {
    let body = currentText.current.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea className={style.newMessageArea}
                      ref={currentText}
                      onChange={onNewMessageChange}
                      placeholder='Enter your message'>
            </textarea>
          </div>
          <div>
            <button className={style.addButton} onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
