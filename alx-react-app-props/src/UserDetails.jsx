import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '15px', border: '1px solid gray', borderRadius: '8px', width: '300px', margin: '20px auto', textAlign: 'center' }}>
      <p style={{ fontWeight: 'bold' }}>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
