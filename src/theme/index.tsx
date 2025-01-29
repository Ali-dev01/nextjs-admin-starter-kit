import { createTheme, ThemeOptions } from "@mui/material/styles";
import typography from "./typography";
import palette from "./palette";
import components from "./overrides";

const themeOptions: ThemeOptions = {
  palette,
  typography,
  components,
};

const theme = createTheme(themeOptions);

export default theme;
