import { createTheme } from "@mui/material/styles";

export const colors = {
  brown: "#846f64",
  green: "#8bbd44",
  red: "#c81246",
};
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: colors.brown,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Asap", "Helvetica", "Arial", "Lucida", "sans-serif"].join(
      ","
    ),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "6px 20px",
          backgroundColor: colors.red,
          color: "white",
          fontSize: 20,
          "&:hover": {
            backgroundColor: colors.red,
            color: "white",
          },

          "&.Mui-disabled": {
            color: "rgba(255,255,255,0.5)",
            opacity: 0.6,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "&:not(.Mui-error)::before": {
            borderBottom: "none !important",
          },
          "&:not(.Mui-error)::after": {
            borderBottom: "none !important",
          },
        },
        input: {
          padding: 18,
          color: colors.brown,

          "&::-webkit-input-placeholder": {
            color: colors.brown,
            opacity: 0.8,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.brown,
          marginBottom: "0.25rem",
          fontSize: 16,
          fontWeight: 500,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          outline: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          padding: 18,
          color: colors.brown,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.brown,
        },
        h2: {
          fontSize: 28,
        },
      },
    },
  },
});

export default theme;
