import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>User Profiles</h2>
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography." />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and reading books." />
      <UserProfile name="Charlie" age={28} bio="Passionate about coding and music." />
    </main>
  );
}

export default MainContent;
