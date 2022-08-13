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
import ClanWar from "./ClanWar";
import { Container } from "./Home";
import ClanDonation from "./ClanDonation";
import Header from "../components/Header";
import { motion } from "framer-motion";
import ClashRoyaleNotice from "./ClashRoyaleNotice";
import Loading from "../components/Loading";
import ClanWarning from "./ClanWarning";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const OverviewItem = styled(motion.div)`
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
  margin: 15px 0px;
  gap: 10px;
`;

const Tab = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
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

function Clan() {
  const { clanTag } = useParams();

  const clanMemberMatch = useRouteMatch("/:clanTag/member");
  const clanWarMatch = useRouteMatch("/:clanTag/clanwar");
  const clanWarningMatch = useRouteMatch("/:clanTag/warning");
  const ClanDonationMatch = useRouteMatch("/:clanTag/donation");
  const clashNoticeMatch = useRouteMatch("/:clanTag/clashroyale");

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
      <Header name={clanData?.data?.name} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Overview>
            <OverviewItem>{clanData?.data?.description}</OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={clanMemberMatch !== null}>
              <Link to={`/${clanTag}/member`}>클랜원</Link>
            </Tab>
            <Tab isActive={ClanDonationMatch !== null}>
              <Link to={`/${clanTag}/donation`}>지원률</Link>
            </Tab>
            <Tab isActive={clanWarMatch !== null}>
              <Link to={`/${clanTag}/clanwar`}>클랜전</Link>
            </Tab>
            <Tab isActive={clanWarningMatch !== null}>
              <Link to={`/${clanTag}/warning`}>경고명단</Link>
            </Tab>
            <Tab isActive={clashNoticeMatch !== null}>
              <Link to={`/${clanTag}/clashroyale`}>미정</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:clanTag/member`}>
              <ClanMember clanMembers={clanData?.data?.memberList} />
            </Route>
            <Route path={`/:clanTag/donation`}>
              <ClanDonation
                clanWar={clanWar}
                clanMembers={clanData?.data?.memberList}
              />
            </Route>
            <Route path={`/:clanTag/clanwar`}>
              <ClanWar
                clanWar={clanWar}
                clanMembers={clanData?.data?.memberList}
              />
            </Route>
            <Route path={`/:clanTag/warning`}>
              <ClanWarning />
            </Route>
            <Route path={`/:clanTag/clashroyale`}>
              <ClashRoyaleNotice />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Clan;
