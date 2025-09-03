import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 15px" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="100"
              style={{ borderRadius: "50%" }}
            />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
