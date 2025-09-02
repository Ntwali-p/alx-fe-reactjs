import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{
      border: '1px solid gray',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{name}</h2>
      <p style={{ fontSize: '16px' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{age}</span>
      </p>
      <p style={{ color: '#555', fontStyle: 'italic' }}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;


