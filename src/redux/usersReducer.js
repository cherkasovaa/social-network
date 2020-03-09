const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_ON_CURRENT_PAGE = 'SET-USERS-ON-CURRENT-PAGE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_PAGES = 'SET-TOTAL-COUNT-PAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgressArray: []
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgressArray: action.followingInProgressArray
          ? [...state.followingInProgressArray, action.userId]
          : state.followingInProgressArray.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setUsersOnCurrentPage = users => ({ type: SET_USERS_ON_CURRENT_PAGE, users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountPages = totalPages => ({ type: SET_TOTAL_COUNT_PAGES, totalPages });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (followingInProgressArray, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgressArray,
  userId
});

export default usersReduser;
