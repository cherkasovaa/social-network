const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  newMessageText: '',
  dialogs: [
    { name: 'Dima', id: 1 },
    { name: 'Viktor', id: 2 },
    { name: 'Sergey', id: 3 }
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi, how are YOU?' },
    { id: 3, message: 'Welcome!' }
  ]
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      };
    case SEND_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = text => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReduser;
