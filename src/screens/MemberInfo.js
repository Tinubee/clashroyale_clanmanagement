import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPlayerData } from "../api";
import { Container, Header, Title } from "./Home";

function MemberInfo() {
  const { memberTag } = useParams();
  const { isLoading, data } = useQuery(["member", memberTag], () =>
    getPlayerData(memberTag)
  );

  return (
    <Container>
      <Header>
        <Title>
          {isLoading ? "Loading..." : data.data.name + " Information"}
        </Title>
      </Header>
      <div>추후 업데이트 예정</div>
    </Container>
  );
}

export default MemberInfo;
