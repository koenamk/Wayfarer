import React, { useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [industry, setIndustry] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { industry, interests });
      alert("Profile updated!");
    } catch (error) {
      console.error("Error saving profile", error);
    }
  };

  return (
    <div>
      <h1>Update Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Industry:
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
        </label>
        <br />
        <label>
          Interests:
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
