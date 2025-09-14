import React, { useState } from "react";
import { Box, IconButton, Paper, Button, useTheme } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { historyButtonStyles } from "./styles";
import type { HistoryButtonProps } from "../../types";

const HistoryButton: React.FC<HistoryButtonProps> = ({ history, onSelect }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box sx={historyButtonStyles.wrapper}>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={historyButtonStyles.iconButton}
      >
        <AccessTimeIcon />
      </IconButton>

      {open && history.length > 0 && (
        <Paper sx={historyButtonStyles.paper(theme)}>
          {history.map((item, index) => (
            <Button
              key={index}
              fullWidth
              variant="text"
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
              sx={historyButtonStyles.button(theme)}
            >
              {item}
            </Button>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default HistoryButton;
