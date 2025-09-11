import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';

export default function SearchBox({ updateResult }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_url = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "e8d73115085887bbef642b4890c62872";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_url}?q=${city}&appid=${API_key}&units=metric`);
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {  // invalid city
        throw new Error("City not found");
      }

      let result = {
        City: jsonResponse.name,
        Temp: jsonResponse.main.temp,
        TempMin: jsonResponse.main.temp_min,
        TempMax: jsonResponse.main.temp_max,
        Humidity: jsonResponse.main.humidity,
        FeelsLike: jsonResponse.main.feels_like,
        Weather: jsonResponse.weather[0].description
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateResult(newInfo);
      setCity(""); // clear input
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='searchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br /><br />

        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{ color: "red" }}>No such place exists...</p>}
      </form>
    </div>
  );
}
