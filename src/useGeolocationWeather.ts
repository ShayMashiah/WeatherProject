import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeatherData } from "./weatherApi";

interface GeolocationWeather {
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
}

export const useGeolocationWeather = (API_KEY: string) => {
  return useQuery<GeolocationWeather>({
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
              const data = await fetchCurrentWeatherData(latitude, longitude, API_KEY);
              resolve(data);
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
