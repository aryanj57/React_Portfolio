import { createTheme, responsiveFontSizes } from "@mui/material";
import { typographyValue } from "./constants/typography";

const lightTheme = createTheme({
  typography: typographyValue,
  palette: {
    primary: {
      main: "#009ADE",
    },
    secondary: {
      main: "#54B1DA",
    },
    bgColor: {
      main: "#F7F7F7",
    },
    background: {
      paper: "#009ADE",
    },
    borderColor: "#FFFFFF",
    typoHeading: "#009ADE",
    typoSubheading: "#54B1DA",
    typoWhite: "#FFFFFF",
    typoBlack: "000000",
    typoGrey: "#333333",
    buttonColor: "#009ADE",
    highlightColor: "#009ADE",
  },
});

const darkTheme = createTheme({
  typography: typographyValue,
  palette: {
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#DCC3FA",
    },
    bgColor: {
      main: "#000000",
    },
    background: {
      paper: "#30E2D1",
    },
    borderColor: "#000000",
    typoHeading: "#BB86FC",
    typoSubheading: "#DCC3FA",
    typoWhite: "#000000",
    typoBlack: "#FFFFFF",
    typoGrey: "#30E2D1",
    buttonColor: "#30E2D1",
    highlightColor: "#30E2D1",
  },
});

const lightThemeResponsive = responsiveFontSizes(lightTheme);
const darkThemeResponsive = responsiveFontSizes(darkTheme);

export { lightThemeResponsive as lightTheme, darkThemeResponsive as darkTheme };
