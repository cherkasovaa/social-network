import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().messagesPage;

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };

        return (
          <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state}/>)
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;
