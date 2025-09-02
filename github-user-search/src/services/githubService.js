// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`, // Optional: use if you have a personal access token
  },
});

// Fetch GitHub users by search query
export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users`, {
      params: { q: query },
    });
    return response.data.items; // Returns array of users
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
