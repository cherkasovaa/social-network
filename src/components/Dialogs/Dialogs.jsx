import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const {dialogsData, messagesData} = props.data;

  let dialogsElements = dialogsData.map( ({name, id}) => (<DialogItem name={name} id={id}/>));
  let messagesElements = messagesData.map( messages => (<Message message={messages.message}/>));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
