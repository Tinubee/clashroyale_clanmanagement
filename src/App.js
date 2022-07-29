import { ThemeProvider } from "styled-components";
import Router from "./routes";
import { GlobalStyle } from "./styles";
import { darkMode } from "./theme";

function App() {
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
