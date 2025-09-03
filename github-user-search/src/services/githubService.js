import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search for multiple users
export const searchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
};

// Fetch detailed info for a single user
export const getUserDetails = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

