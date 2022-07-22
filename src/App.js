import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { modeDarkAtom } from "./atoms";
import routes from "./routes";
import Home from "./screens/Home";
import { GlobalStyle } from "./styles";
import { darkMode, lightMode } from "./theme";

function App() {
  const modeDark = useRecoilValue(modeDarkAtom);
  return (
    <>
      <ThemeProvider theme={modeDark ? darkMode : lightMode}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
