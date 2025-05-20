import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather, fetchCurrentWeatherData } from "./weatherApi";
import "./App.css";
import { fetchWeather } from "./weatherApi";
import { useQuery } from "@tanstack/react-query";
import {
  titleStyle,
  boxWrapperStyle,
  inputStyle,
  inputPropsStyle,
  buttonStyle,
} from "./sytles";
import { inputCityPlaceholder } from "./consts";

function App() {
  const [city, setCity] = useState<string>("");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const {
    data: weatherData,
    refetch,
  } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city, API_KEY),
    enabled: false,
  });

  const handleClick = () => {
    if (city) {
      refetch();
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetchCurrentWeatherData(
              latitude,
              longitude,
              API_KEY
            );
            if (response) {
              setCity(response.data.location.name);
            } 
          } catch (error) {
            console.error("Failed to fetch weather by location", error);
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [API_KEY]);

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom sx={titleStyle}>
        Weather App
      </Typography>

      <Box sx={boxWrapperStyle}>
        <TextField
          fullWidth
          placeholder={inputCityPlaceholder}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          sx={inputStyle}
          InputProps={{ sx: inputPropsStyle }}
        />
        <Button onClick={handleClick} sx={buttonStyle}>
          <SearchIcon />
        </Button>
      </Box>
    </>
  );
}

export default App;
