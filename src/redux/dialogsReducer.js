const UPDATE_NEW_MESSAGE_TEXT = 'UPADE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    {name: 'Dima', id: 1},
    {name: 'Viktor', id: 2},
    {name: 'Sergey', id: 3},
  ],
  messagesData: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi, how are YOU?'},
    {id: 3, message: 'Welcome!'}],
  newMessageText: ''
};

const dialogsReduser = (state = initialState, action) => {
  switch(action.type){
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = '';
      state.messagesData.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReduser;
