import type { SxProps, Theme } from "@mui/material";

export const displayBoxStyle: SxProps<Theme> = {
        textAlign: "center",
        p: 4,
        maxWidth: 400,
        width: 300,
        borderRadius: 2,
        bgcolor: "#374151",
        backdropFilter: "blur(12px)",
        color: "#fff",
        mt: 0,
    };

export const iconBoxStyle: SxProps<Theme> = {
        mx: "auto" 
    };