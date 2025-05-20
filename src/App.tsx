import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./weatherApi";
import { useGeolocationWeather } from "./useGeolocationWeather";
import { titleStyle } from "./styles";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [city, setCity] = useState<string>("");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const { data: locationWeather, isSuccess: isLocationSuccess } =
    useGeolocationWeather(API_KEY);

  console.log(locationWeather);
  console.log(isLocationSuccess);

  const { data: weatherData, refetch } = useQuery({
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
    if (isLocationSuccess && locationWeather?.location.name) {
      setCity(locationWeather.location.name);
      setTimeout(() => {refetch()}, 100);
    }
  }, [isLocationSuccess, locationWeather]);

  return (
    <>
      <Typography variant="h3" align="center" sx={titleStyle}>
        Weather App
      </Typography>

      <SearchBar
        city={city}
        onCityChange={setCity}
        onSearchClick={handleClick}
      ></SearchBar>

      <WeatherDisplay weatherData={weatherData} />
    </>
  );
}

export default App;
