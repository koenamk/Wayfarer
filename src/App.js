import React, { useState } from "react";
import "./App.css";

import istanbulImage from "./assets/istanbul.jpg"; 
import dubaiImage from "./assets/dubai.jpg";
import hongKongImage from "./assets/hongkong.jpg";
import { Link } from "react-router";


function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    {
      name: "Istanbul",
      description: "Rich history, vibrant culture, and seamless connections for digital nomads.",
      image: istanbulImage, // Local image
    },
    {
      name: "Dubai",
      description: "A futuristic city offering endless opportunities.",
      image: dubaiImage, // Local image
      link: "/dubai.html"
    },
    {
      name: "Hong Kong",
      description: "A perfect blend of dazzling skylines, connectivity, and cultural richness.",
      image: hongKongImage, // Local image
    },
  ]; 

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleLogin = () => {
    alert("Login functionality coming soon!");
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">Wayfarer</h1>
        <p className="hero-subtitle">A community to meet other digital nomads like yourself.</p>
      </header>

      {/* What You Can Use Section */}
      <section className="info">
        <h2>What can you use Wayfarer for?</h2>
        <ul>
          <li>🌍 Connect with your new community...</li>
          <li>🏙️ Find out more about the city...</li>
        </ul>
        <p className="tagline">
          Find people from your industry, share hobbies, and connect to explore the city!
        </p>
      </section>

      {/* Dropdown Section */}
      <section className="city-selector">
        <label htmlFor="city-select" className="dropdown-label">
          Select your dream city:
        </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={handleCityChange}
          className="dropdown"
        >
          <option value="">Select your dream city</option>
          {cities.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </section>

      {/* City Cards Section */}
      <section className="city-grid">
        {cities.map((city, index) => (
          <Link to={city.link}>
            <div
              key={index}
              className={`city-card ${selectedCity === city.name ? "active" : ""}`}
              // onClick={router.push("/hi")}
            >
              <img src={city.image} alt={city.name} />
              <div className="card-content">
                <h3>{city.name}</h3>
                <p>{city.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>

        
      {/* Login Button */}
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default App;