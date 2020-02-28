let initialState = {
  navigationData: [
    { path: '/profile', item: 'Profile'},
    { path: '/dialogs', item: 'Messages'},
    { path: '/news', item: 'News'},
    { path: '/music', item: 'Music'},
    { path: '/settings', item: 'Settings'}
  ]
}

const sidebarReduser = (state = initialState, action) => {
  return state;
}

export default sidebarReduser;
