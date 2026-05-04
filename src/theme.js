import { createTheme, responsiveFontSizes } from "@mui/material";
import { typographyValue } from "./constants/typography";

const lightTheme = createTheme({
  typography: typographyValue,
  palette: {
    primary: {
      main: "#00118e",
      contrastText: "#f9d97f",
    },
    secondary: {
      main: "#2c3b4d",
    },
    background: {
      default: "#EEE9DF",
      paper: "#084c7c",
    },
    text: {
      primary: "#040f2e",
      secondary: "#263442",
      disabled: "#2d2f34",
    },
    selectedState: "#f9d97f",
    error: { main: "#b93232" },
    info: { main: "#828586" },
    divider: "#f9d97f",
  },
});

const darkTheme = createTheme({
  typography: typographyValue,
  palette: {
    primary: {
      main: "#f59e0b",
      contrastText: "#2a2a2a",
    },
    secondary: {
      main: "#f59e0b",
    },
    background: {
      default: "#0f0f0f",
      paper: "#ffc041",
    },
    text: {
      primary: "#e1e1e1",
      secondary: "#a3a3a3",
      disabled: "#2d2f34",
    },
    selectedState: "#2a2a2a",
    error: { main: "#b93232" },
    info: { main: "#828586" },
    divider: "#2a2a2a",
  },
});

const lightThemeResponsive = responsiveFontSizes(lightTheme);
const darkThemeResponsive = responsiveFontSizes(darkTheme);

export { lightThemeResponsive as lightTheme, darkThemeResponsive as darkTheme };

// main - Navbar color, image border, timeline, textbox highlight color
// secondary - accent color
// background.default - Website Background color
// background.paper - Card bgcolor
// text.primary - default color ( page title, hero message)
// text.secondary - secondary color ( page desc, subheading)
// text.contrastText - text when not on white background
// primary.contrastText - lighter button color on dark background
// selected - custom for showing highlighted states in Navbar
// divider - for borders

// Page
//  background.default → main website background
// 🧭 Navbar
//  primary.main → navbar background
//  Button (isDark variant):
//    bgcolor: primary.contrastText
//    color: primary.main
//  🏠 Home / Hero Section
//  Typography:
//    text.primary → main heading / hero text
//   Resume Button:
//    bgcolor: primary.main
//    color: primary.contrastText
//   🧠 Skills Section
//     Cards:
//      background.paper
//     Buttons on cards:
//       bgcolor: primary.contrastText
//       color: primary.main
//    📁 Projects Section
//      Cards:
//        background.paper
//     Text on cards:
//        primary.contrastText
//     📩 Contact Section
//      Form container:
//        background.paper
//      Button:
//        bgcolor: primary.contrastText
//        color: primary.main
//  ✨ General Pattern Rules
//        Dark background → use primary.contrastText for text/buttons
//        Light background → use primary.main for actions
//        Cards always use background.paper
//        Page always uses background.default
