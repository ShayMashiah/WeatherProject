import  React  from "react";
import { Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  boxWrapperStyle,
  inputStyle,
  inputPropsStyle,
  buttonStyle,
} from "./styles";
import { inputCityPlaceholder } from "../../consts";

interface SearchBarProps {
  city: string;
  onCityChange: (value: string) => void;
  onSearchClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ city, onCityChange, onSearchClick }) => {
  return (
    <Box sx={boxWrapperStyle}>
      <TextField
        fullWidth
        placeholder={inputCityPlaceholder}
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        variant="outlined"
        sx={inputStyle}
        InputProps={{ sx: inputPropsStyle }}
      />

      <Button onClick={onSearchClick} sx={buttonStyle}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchBar;
