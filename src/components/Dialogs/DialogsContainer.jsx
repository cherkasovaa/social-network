import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
              sendMessage={onSendMessageClick}
              messagesPage={state}/>
}

export default DialogsContainer;
