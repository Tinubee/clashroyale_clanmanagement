import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPlayerData } from "../api";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "./Home";

const Tag = styled.div``;
const Trophies = styled.div``;

function MemberInfo() {
  const { memberTag } = useParams();
  const { isLoading, data } = useQuery(["member", memberTag], () =>
    getPlayerData(memberTag)
  );

  console.log(data);

  return (
    <Container>
      <Header
        name={isLoading ? "Loading..." : "memberInfo"}
        member={isLoading ? "" : data.data.name}
        clanTag={isLoading ? "" : data.data.clan.tag}
      />
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Tag>태그 : {data.data.tag}</Tag>
          <Trophies>트로피 : {data.data.trophies} 🏆</Trophies>
          <div>최고 트로피 : {data.data.bestTrophies} 🏆</div>
          <div>아레나 : {data.data.arena.name}</div>
          <div>전투수 : {data.data.battleCount} 회</div>
        </>
      )}
      <Footer />
    </Container>
  );
}

export default MemberInfo;
