export interface SearchWeatherInterface {
weatherData: CurrentWeatherInterface | null;
}

export interface CurrentWeatherInterface {
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