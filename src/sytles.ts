import type { SxProps, Theme } from "@mui/material";

export const titleStyle: SxProps<Theme> = {
          fontWeight: "bold",
          background: "linear-gradient(to right, #facc15, #f97316, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 4,
    };

export const boxWrapperStyle: SxProps<Theme> = {
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          maxWidth: 600,
          mx: "auto",
    };

export const inputStyle: SxProps<Theme> = {
            input: { color: "#fff" },
            bgcolor: "#374151",
            "& fieldset": {
              border: "none",
            },
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
    };

export const inputPropsStyle: SxProps<Theme> = {
              bgcolor: "#374151",
              color: "#fff",
    };

export const buttonStyle: SxProps<Theme> = {
            bgcolor: "#374151",
            color: "#fff",
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            px: 3,
            "&:hover": {
              bgcolor: "#1f2937",
    },
};
