import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPlayerData } from "../api";
import Header from "../components/Header";
import { Container } from "./Home";

const MemberName = styled.div``;

function MemberInfo() {
  const { memberTag } = useParams();
  const { isLoading, data } = useQuery(["member", memberTag], () =>
    getPlayerData(memberTag)
  );

  return (
    <Container>
      <Header />
      <MemberName>
        {isLoading ? "Loading..." : data.data.name + " Information"}
      </MemberName>
    </Container>
  );
}

export default MemberInfo;
