let initialState = {
  navigation: [
    { path: '/profile', item: 'Profile'},
    { path: '/dialogs', item: 'Messages'},
    { path: '/users', item: 'Users'},
    { path: '/news', item: 'News'},
    { path: '/music', item: 'Music'},
    { path: '/settings', item: 'Settings'}
  ]
}

const sidebarReduser = (state = initialState, action) => {
  return state;
}

export default sidebarReduser;
