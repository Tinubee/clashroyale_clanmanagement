import { useQuery } from "react-query";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { getPlayerData } from "../api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "./Home";
import MemberBadges from "./MemberScreens/MemberBadges";
import MemberChestCycle from "./MemberScreens/MemberChestCycle";
import MemberDetail from "./MemberScreens/MemberDetail";

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 12px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
function MemberInfo() {
  const { memberTag } = useParams();
  const memberInformationMatch = useRouteMatch(
    "/member/:memberTag/information"
  );
  const memberChestcycleMatch = useRouteMatch("/member/:memberTag/chestcycle");
  const memberBadgesMatch = useRouteMatch("/member/:memberTag/badges");

  const { isLoading, data } = useQuery(["member", memberTag], () =>
    getPlayerData(memberTag)
  );

  return isLoading ? (
    "Loading..."
  ) : (
    <>
      <Container>
        <Header
          name="memberInfo"
          member={data.data.name}
          clanTag={data.data.clan.tag}
        />
        <Tabs>
          <Tab isActive={memberInformationMatch !== null}>
            <Link to={`/member/${memberTag}/information`}>정보</Link>
          </Tab>
          <Tab isActive={memberChestcycleMatch !== null}>
            <Link to={`/member/${memberTag}/chestcycle`}>상자사이클</Link>
          </Tab>
          <Tab isActive={memberBadgesMatch !== null}>
            <Link to={`/member/${memberTag}/badges`}>뱃지</Link>
          </Tab>
        </Tabs>

        <Switch>
          <Route path={`/member/:memberTag/information`}>
            <MemberDetail data={data} />
          </Route>
          <Route path={`/member/:memberTag/chestcycle`}>
            <MemberChestCycle data={data.data.tag} />
          </Route>
          <Route path={`/member/:memberTag/badges`}>
            <MemberBadges badges={data.data.badges} />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default MemberInfo;
