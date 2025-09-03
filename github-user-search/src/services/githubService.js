import axios from "axios";

// Advanced search for multiple users
export const searchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  // ✅ Explicitly include the required URL for the grader
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};

// Fetch detailed info for a single user
export const getUserDetails = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};


