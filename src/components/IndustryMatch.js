import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IndustryMatch = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/industry-matches');
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Connect with Industry Peers</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <p>{match.name}</p>
            <button>Connect</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndustryMatch;
