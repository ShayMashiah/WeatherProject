import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
import { fetchWeather } from "./weatherApi";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [city, setCity] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const {
    data: 
    weatherData,
    isLoading,
    isError,
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
