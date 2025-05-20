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

export interface HistoryButtonProps {
  history: string[];
  onSelect: (city: string) => void;
}

export interface SearchBarProps {
  city: string;
  onCityChange: (value: string) => void;
  onSearchClick: () => void;
}