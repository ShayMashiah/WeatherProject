import type { Theme } from "@mui/material/styles";
import type { SxProps } from "@mui/system";

export const historyButtonStyles = {
  wrapper: {
    position: "fixed",
    top: 16,
    left: 16,
    zIndex: 1000,
  } as SxProps<Theme>,

  iconButton: {
    bgcolor: "#374151",
    color: "white",
    px: 1,
    "&:hover": {
      bgcolor: "#1f293",
    },
  } as SxProps<Theme>,

  paper: (theme: Theme): SxProps<Theme> => ({
    marginTop: "8px",
    width: 200,
    bgcolor: "#374151",
    border: "1px solid",
    "&:hover": {
      bgcolor: "#1f293",
    },
    boxShadow: theme.shadows[4],
  }),

  button: (theme: Theme): SxProps<Theme> => ({
    justifyContent: "center",
    fontSize: "0.875rem",
    color: "white",
    py: 1,
    px: 2,
    "&:hover": {
      bgcolor: "#1f293"

    },
  }),
};
