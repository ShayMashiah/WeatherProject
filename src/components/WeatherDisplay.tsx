import React from "react";
import { Box, Paper, Typography } from "@mui/material";

interface WeatherDisplayProps {
  weatherData: any;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
          bgcolor: "#374151",
          backdropFilter: "blur(12px)",
          color: "#fff",
        }}
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
          sx={{ mx: "auto" }}
        />
      </Paper>
    </Box>
  );
};

export default WeatherDisplay;
