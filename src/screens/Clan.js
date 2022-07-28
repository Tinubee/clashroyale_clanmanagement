import { useQuery } from "react-query";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";
import { getClanData, getClanWarData } from "../api";
import ClanMember from "./ClanMember";
import ClanNotice from "./ClanNotice";
import ClanWar from "./ClanWar";
import { Container, Header, Title } from "./Home";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 18px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const HomeBtn = styled.div`
  display: flex;
  margin-top: 80px;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  border-radius: 15px;
  width: 15%;
  a {
    padding: 10px;
    transition: all 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Clan() {
  const { clanTag } = useParams();

  const clanMemberMatch = useRouteMatch("/:clanTag/member");
  const clanWarMatch = useRouteMatch("/:clanTag/clanwar");
  const clanNoticeMatch = useRouteMatch("/:clanTag/notice");

  const { isLoading: clanDataLoading, data: clanData } = useQuery(
    ["clans", clanTag],
    () => getClanData(clanTag)
  );

  const { isLoading: clanWarLoading, data: clanWar } = useQuery(
    ["clanwar", clanTag],
    () => getClanWarData(clanTag)
  );

  const loading = clanWarLoading || clanDataLoading;
  return (
    <Container>
      <HomeBtn>
        <Link to="/"> &larr; Go Home</Link>
      </HomeBtn>
      <Header>
        <Title>{loading ? "Loading..." : clanData?.data?.name}</Title>
      </Header>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Overview>
            <OverviewItem>{clanData?.data?.description}</OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={clanMemberMatch !== null}>
              <Link to={`/${clanTag}/member`}>클랜원</Link>
            </Tab>
            <Tab isActive={clanWarMatch !== null}>
              <Link to={`/${clanTag}/clanwar`}>클랜전</Link>
            </Tab>
            <Tab isActive={clanNoticeMatch !== null}>
              <Link to={`/${clanTag}/notice`}>공지사항</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:clanTag/member`}>
              <ClanMember clanMembers={clanData?.data?.memberList} />
            </Route>
            <Route path={`/:clanTag/clanwar`}>
              <ClanWar
                clanWar={clanWar}
                clanMembers={clanData?.data?.memberList}
              />
            </Route>
            <Route path={`/:clanTag/notice`}>
              <ClanNotice />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Clan;
