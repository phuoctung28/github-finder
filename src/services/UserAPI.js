import axios from "axios";
export const baseURL = "https://api.github.com";
export const UserAPI = {
  fetchUser: () => {
    return axios.get(`${baseURL}/users`);
  },

  fetchUserInfo: (username) => {
    return axios.get(`${baseURL}/users/${username}`);
  },
  fetchUserRepos: (username) => {
    return axios.get(`${baseURL}/users/${username}/repos`);
  },
  searchUser: (keyword) => {
    return axios.get(`${baseURL}/search/users?q=${keyword}`);
  },
};
