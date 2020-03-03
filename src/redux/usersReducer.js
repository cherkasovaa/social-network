const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_ON_CURRENT_PAGE = 'SET-USERS-ON-CURRENT-PAGE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_PAGES = 'SET-TOTAL-COUNT-PAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS_ON_CURRENT_PAGE:
      return { ...state, users: [...state.users, ...action.users] };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT_PAGES:
      return { ...state, totalUsersCount: action.totalPages };
      case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const followActionCreator = userId => ({ type: FOLLOW, userId });
export const unfollowActionCreator = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = users => ({ type: SET_USERS, users });
export const setUsersOnCurrentPageActionCreator = users => ({ type: SET_USERS_ON_CURRENT_PAGE, users });
export const setCurrentPageActionCreator = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountPagesActionCreator = totalPages => ({ type: SET_TOTAL_COUNT_PAGES, totalPages });
export const toggleIsFetchingActionCreator = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReduser;
