import axios from "axios";

// Function with the expected name
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search (new function)
export const searchUsers = async (username, location, minRepos) => {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};
