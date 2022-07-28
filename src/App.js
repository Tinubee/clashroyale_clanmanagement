import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { modeDarkAtom } from "./atoms";
import Router from "./routes";
import { GlobalStyle } from "./styles";
import { darkMode, lightMode } from "./theme";

function App() {
  const modeDark = useRecoilValue(modeDarkAtom);
  return (
    <>
      <ThemeProvider theme={modeDark ? darkMode : lightMode}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
