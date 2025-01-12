"use client";

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lightest?: string;
  }

  interface SimplePaletteColorOptions {
    lightest?: string;
  }
}

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#0c8060",
      dark: "#0a7356",
      light: "#3c997f",
      lightest: "#b6d8cf",
    },
    secondary: {
      main: "#ebc707",
      dark: "#d3b306",
      light: "#f1d751",
      lightest: "#f9eeb4",
    },
    grey: {
      "100": "#f7f7f5",
      "200": "#f5f5f3",
      "300": "#f1f1ee",
      "400": "#edede9",
      "500": "#ebebe7",
      "600": "#d3d3cf",
      "700": "#757573",
      "800": "#5e5e5c",
      "900": "#464645",
    },
    background: {
      default: "#f7fafc",
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "65px",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "55px",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "45px",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "35px",
      lineHeight: "normal",
    },
    h5: {
      fontSize: "25px",
      lineHeight: "normal",
    },
    body1: {
      fontSize: "14px",
      lineHeight: "normal",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "normal",
    },
    caption: {
      fontSize: "10px",
      lineHeight: "normal",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 24px",
          border: "none",
          fontWeight: 600,
          borderRadius: "5px",
          textTransform: "capitalize",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: ({ theme }) => ({
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
        }),
        outlined: ({ theme }) => ({
          transition: ".6s",
          background: "transparent",
          border: `1px solid ${theme.palette.primary.main}`,
          "&:hover": {
            background: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        }),
        text: ({ theme }) => ({
          background: theme.palette.primary.lightest,
          color: theme.palette.primary.main,
          "&:hover": {
            background: theme.palette.primary.lightest,
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "0",
        },
        root: {
          padding: "10px",
          borderRadius: "5px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        },
      },
    },
  },
});

export default theme;
