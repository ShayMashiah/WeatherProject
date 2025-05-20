export interface GeolocationWeather {
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