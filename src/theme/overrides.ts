import { Components } from "@mui/material/styles/components";

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "6px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: "6px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: "15px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: "0",
        "&::placeholder": {
          fontSize: "14px",
        },
      },
      root: {
        padding: "8px",
        borderRadius: "6px",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1.5px",
        },
      },
    },
  },
};

export default components;
