import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//import "./styles.css";
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const RootElm = () => {
  const [theme, setTheme] = useState(createTheme({
    palette: {
      //mode: 'dark'
    }
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App setTheme={setTheme} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RootElm />);
