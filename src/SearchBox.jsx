import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';  // Import SendIcon
import { Box } from '@mui/material'; // Optional, if you want to style the layout
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7b3ecdf6c1966b169678e77c63dd78c4";

  // Fetching weather information from OpenWeather API
  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      // Structuring weather info to return
      const result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  // Handling input change
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  // Handling form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setCity(""); // Clear input field after submission
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo); // Update weather info in the parent component
    } catch (err) {
      setErr(true); // Show error if fetch fails (e.g., city not found)
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit" // Attach the SendIcon here
        >
          Send
        </Button>
        {/* Error message when no such city is found */}
        {err && <p style={{ color: "red" }}>No such place</p>}
      </form>
    </div>
  );
}
