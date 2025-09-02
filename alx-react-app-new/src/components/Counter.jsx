import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '2px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      width: '250px',
      textAlign: 'center',
      backgroundColor: '#fefefe',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '15px' }}>Counter App</h2>
      <p style={{ fontSize: '20px', marginBottom: '20px' }}>Current Count: {count}</p>
      <div>
        <button
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          style={{ margin: '5px', padding: '10px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
