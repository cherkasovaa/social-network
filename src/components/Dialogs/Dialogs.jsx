import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const state = props.messagesPage;

  let dialogsElements = state.dialogs.map( ({name, id}) => (<DialogItem name={name} id={id} key={id}/>));
  let messagesElements = state.messages.map( mes => (<Message message={mes.message} key={mes.id}/>));

  let currentText = React.createRef();

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = () => {
    let body = currentText.current.value;
    props.updateNewMessageBody(body);
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
                      placeholder='Enter your message'
                      value={props.newMessageText}>
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
