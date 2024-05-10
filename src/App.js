import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Router>
            <Landing />
          </Router>
        </ThemeProvider>
      </CssBaseline>
    </div>
  );
}

export default App;
