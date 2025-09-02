import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

const GitHubUserSearch = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const results = await searchUsers(query);
    setUsers(results);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex mb-6">
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-md bg-white shadow hover:shadow-md transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto mb-2"
            />
            <h2 className="text-center font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-center block mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>

      {/* No Results */}
      {!loading && users.length === 0 && query && (
        <p className="text-center mt-4 text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default GitHubUserSearch;
