import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
import {
  titleStyle,
  boxWrapperStyle,
  inputStyle,
  inputPropsStyle,
  buttonStyle,
} from "./sytles";
import { inputCityPlaceholder } from "./consts";

function App() {
  const [city, setCity] = useState("");

  const handleClick = async () => {};

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom sx={titleStyle}>
        Weather App
      </Typography>

      <Box sx={boxWrapperStyle}>
        <TextField
          fullWidth
          placeholder={inputCityPlaceholder}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
          sx={inputStyle}
          InputProps={{ sx: inputPropsStyle }}
        />

        <Button onClick={handleClick} sx={buttonStyle}>
          <SearchIcon />
        </Button>
      </Box>
    </>
  );
}

export default App;
