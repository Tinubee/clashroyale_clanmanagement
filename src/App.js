import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Router from "./routes";
import { GlobalStyle } from "./styles";
import { darkMode } from "./theme";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <ThemeProvider theme={darkMode}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
