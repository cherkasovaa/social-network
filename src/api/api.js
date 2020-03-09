import * as axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'f7d7fd39-4401-4e92-a354-8b2d258a6041'
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
