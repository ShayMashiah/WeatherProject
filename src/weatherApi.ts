// src/api.ts
import axios from "axios";

export const fetchWeather = async (cityName: string, API_KEY: string) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
  );
  return response.data;
};
