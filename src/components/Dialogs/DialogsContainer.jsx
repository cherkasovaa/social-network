import { updateNewMessageBody, sendMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    newMessageText: state.messagesPage.newMessageText
  }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody, sendMessage})(Dialogs)
export default DialogsContainer;
