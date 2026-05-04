import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const [currentTheme, setCurrenttheme] = useState(lightTheme);
  const toggleTheme = () => {
    setCurrenttheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };
  return (
    <div className="App">
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <Router>
          <Landing currentTheme={currentTheme} toggleTheme={toggleTheme} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
