import axios from "axios";

export const fetchWeather = async (cityName: string, API_KEY: string) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
  );
  return response.data;
};

 export const fetchCurrentWeatherData = async (latitude:number, longitude:number, API_KEY:string) => {
    if (!API_KEY) {
        console.error("Missing API_KEY");
        return;
    }
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
      );
      return response.data; 
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
