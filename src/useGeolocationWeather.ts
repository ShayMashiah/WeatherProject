import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeatherData } from "./weatherApi";
import type { CurrentWeatherInterface } from "./types";

export const useGeolocationWeather = (API_KEY: string) => {
  return useQuery<CurrentWeatherInterface>({
    queryKey: ["geolocationWeather"],
    queryFn: async () => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation is not supported"));
          return;
        }
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetchCurrentWeatherData(latitude, longitude, API_KEY);
              resolve(response);
            } catch (err) {
              reject(err);
            }
          },
          (error) => {
            reject(error);
          }
        );
      });
    },
    enabled: !!API_KEY,
    retry: false,
    staleTime: 1000 * 60 * 10, 
  });
};
