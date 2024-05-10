import { createTheme, responsiveFontSizes } from "@mui/material";
import { typographyValue } from "./constants/typography";

const theme = createTheme({
  typography: typographyValue,
  palette: {
    primary: {
      main: "#009ADE",
    },
    secondary: {
      main: "#FF8080",
    },
    BGcolor: {
      main: "#FFF3DF",
    },
    text: {
      primary: "#000000",
    },
  },
});

export default responsiveFontSizes(theme);
