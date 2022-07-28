import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clan from "./screens/Clan";
import Home from "./screens/Home";
import MemberInfo from "./screens/MemberInfo";

function Router() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/member/:memberTag">
          <MemberInfo />
        </Route>
        <Route path="/:clanTag">
          <Clan />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
