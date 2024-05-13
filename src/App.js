import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import { lightTheme, darkTheme } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrenttheme] = useState(lightTheme);
  const toggleTheme = () => {
    setCurrenttheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };
  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={currentTheme}>
          <Router>
            <Landing currentTheme={currentTheme} toggleTheme={toggleTheme} />
          </Router>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
