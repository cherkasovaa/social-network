const SET_USET_DATA = 'SET-USET-DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USET_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const setAuthUserData = ({ id, email, login }) => ({
  type: SET_USET_DATA,
  data: { id, email, login }
});

export default authReduser;
