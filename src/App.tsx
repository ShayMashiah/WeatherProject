import { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
import axios from "axios";


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const handleClick = async (cityName: string = city) => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
      );
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    console.log("City name:", cityName);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
            );
            setWeatherData(response.data);
            console.log("Weather data:", response.data);
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
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(to right, #facc15, #f97316, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 4,
        }}
      >
        Weather App
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <TextField
          fullWidth
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          sx={{
            input: { color: "#fff" },
            bgcolor: "#374151",
            "& fieldset": {
              border: "none",
            },
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
          InputProps={{
            sx: {
              bgcolor: "#374151",
              color: "#fff",
            },
          }}
        />

        <Button
          onClick={() => handleClick()}
          sx={{
            bgcolor: "#374151",
            color: "#fff",
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            px: 3,
            "&:hover": {
              bgcolor: "#1f2937",
            },
          }}
        >
          <SearchIcon />
        </Button>
      </Box>
    </>
  );
}

export default App;
