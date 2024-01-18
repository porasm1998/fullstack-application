import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const data = { name: name }; // Use the state variable 'name'

    fetch('http://localhost:3001/addname', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="App">
      <h1>Enter your Details</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App
