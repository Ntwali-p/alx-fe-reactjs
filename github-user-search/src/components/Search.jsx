import React, { useState } from "react";
import { searchUsers, getUserDetails } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await searchUsers(username, location, minRepos);
      if (data.items.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        // Fetch detailed info for each user
        const detailedUsers = await Promise.all(
          data.items.map(async (user) => {
            const details = await getUserDetails(user.login);
            return { ...user, ...details };
          })
        );
        setUsers(detailedUsers);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 px-4">
      {/* ... Search Form ... */}

      <div className="mt-6 w-full max-w-3xl">
        {loading && <p className="text-gray-500 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white border rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mb-2"
              />
              <h2 className="font-semibold">{user.name || user.login}</h2>
              <p className="text-sm text-gray-600">{user.location || "N/A"}</p>
              <p className="text-sm text-gray-500">Repos: {user.public_repos}</p>
              <p className="text-sm text-gray-500">Followers: {user.followers}</p>
              {user.bio && (
                <p className="text-xs text-gray-400 mt-1">{user.bio}</p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm mt-2"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
