import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CityDetail = () => {
  const { cityName } = useParams();
  const [cityInfo, setCityInfo] = useState(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await axios.get(`https://wayfarer-backend-1342.onrender.com/cities/${cityName}`);
        setCityInfo(response.data);
      } catch (error) {
        console.error("Error fetching city data", error);
      }
    };

    fetchCityData();
  }, [cityName]);

  if (!cityInfo) return <div>Loading...</div>;

  return (
    <div>
      <h1>{cityInfo.cityName}</h1>
      <h2>Recommended Places</h2>
      <ul>
        {cityInfo.recommendedPlaces.map((place) => (
          <li key={place.name}>{place.name}</li>
        ))}
      </ul>
      <h2>Visa & Immigration</h2>
      <p>{cityInfo.visaInfo}</p>
    </div>
  );
};

export default CityDetail;
