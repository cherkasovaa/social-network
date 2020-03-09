import * as axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'd661c397-75cb-491b-a30b-0ef0b9c45efe'
  }
});

export const UsersAPI = {
  getUsers: (pageNumber = 1, pageSize = 10) => {
    return instanceAxios
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => response.data);
  },
  getProfile: (userId = 1) => {
    return instanceAxios.get(`profile/${userId}`).then(response => response.data);
  },
  unfollowProfile: (id = 1) => {
    return instanceAxios.delete(`follow/${id}`).then(response => response.data);
  },
  followProfile: (id = 1) => {
    return instanceAxios.post(`follow/${id}`, null).then(response => response.data);
  },
  getAuth: () => {
    return instanceAxios.get(`auth/me`).then(response => response.data);
  }
};
