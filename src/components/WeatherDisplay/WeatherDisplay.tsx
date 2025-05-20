import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { displayBoxStyle, iconBoxStyle } from "./styles";

interface WeatherDisplayProps {
  weatherData: {
    location: {
      name: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  } | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <Paper
        elevation={3}
        sx={displayBoxStyle}
      >
        <Typography variant="h5" fontWeight="600" gutterBottom>
          {weatherData.location.name}, {weatherData.location.country}
        </Typography>

        <Typography variant="h3" gutterBottom>
          {weatherData.current.temp_c}°C
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          {weatherData.current.condition.text}
        </Typography>

        <Box
          component="img"
          src={`https:${weatherData.current.condition.icon}`}
          alt={weatherData.current.condition.text}
          sx={iconBoxStyle}
        />
      </Paper>
    </Box>
  );
};

export default WeatherDisplay;
