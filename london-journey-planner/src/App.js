// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [journey, setJourney] = useState(null);

  const fetchJourney = async () => {
    const result = await axios.get(`/api/route?start=${start}&end=${end}`);
    setJourney(result.data);
  };

  return (
    <div className="App">
      <input value={start} onChange={e => setStart(e.target.value)} placeholder="Start Location" />
      <input value={end} onChange={e => setEnd(e.target.value)} placeholder="End Location" />
      <button onClick={fetchJourney}>Get Route</button>
      {journey && (
        <div>
          <h2>Route Details:</h2>
          <pre>{JSON.stringify(journey, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

