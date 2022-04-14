import axiosInstance from "../configs/axios";
export const baseURL = "https://api.github.com";
export const UserAPI = {
  fetchUser: () => {
    return axiosInstance.get(`/users`);
  },
  fetchUserInfo: (username) => {
    return axiosInstance.get(`/users/${username}`);
  },
  fetchUserRepos: (username) => {
    return axiosInstance.get(`/users/${username}/repos`);
  },
  searchUser: (keyword) => {
    return axiosInstance.get(`/search/users?q=${keyword}`);
  },
};
