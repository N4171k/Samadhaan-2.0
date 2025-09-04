// src/App.jsx

import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // --- MODIFICATION: Use your key from WeatherAPI.com ---
  const API_KEY = 'fe077b3508074fac8b1111323250409'; // <-- IMPORTANT: PASTE YOUR WeatherAPI.com KEY HERE

  // useEffect to initialize the map only once when the component mounts
  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([20.5937, 78.9629], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      mapRef.current = map;
    }
  }, []);

  // useEffect to update the map when weatherData changes
  useEffect(() => {
    if (weatherData) {
      // --- MODIFICATION: Data path for coordinates is different ---
      const { lat, lon } = weatherData.location;
      const map = mapRef.current;
      const cityName = weatherData.location.name;

      map.setView([lat, lon], 12);
      
      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      const newMarker = L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${cityName}</b>`)
        .openPopup();
      markerRef.current = newMarker;
    }
  }, [weatherData]);

  const handleSearch = async () => {
    if (!city) return;
    
    // --- MODIFICATION: API URL for WeatherAPI.com ---
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    
    try {
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('City not found. Please check the spelling.');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <h1>Weather Forecast Map ⚛️</h1>
      <div className="input-section">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a city name..."
          className="cityInput"
        />
        <button onClick={handleSearch} className="searchButton">Search</button>
      </div>

      <div id="map" className="map-container"></div>
      
      <div className="weatherInfo">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {weatherData ? (
          <>
            {/* --- MODIFICATION: Data paths for weather info are different --- */}
            <h2>Weather in {weatherData.location.name}</h2>
            <p>
              <img 
                src={`https:${weatherData.current.condition.icon}`} 
                alt="Weather icon" 
                className="weather-icon"
              />
              <strong>{weatherData.current.condition.text}</strong>
            </p>
            <p><strong>Temperature:</strong> {weatherData.current.temp_c}°C</p>
            <p><strong>Feels Like:</strong> {weatherData.current.feelslike_c}°C</p>
            <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
          </>
        ) : (
          !error && <p>Enter a city to see the weather.</p>
        )}
      </div>
    </div>
  );
}

export default App;