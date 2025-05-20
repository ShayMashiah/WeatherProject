import type { SxProps, Theme } from "@mui/material";


export const boxWrapperStyle: SxProps<Theme> = {
          display: "flex",
          justifyContent: "center",
          maxWidth: 390,
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