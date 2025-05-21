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