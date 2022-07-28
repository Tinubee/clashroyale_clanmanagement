import styled from "styled-components";
import { Info, Member, MemberList } from "./ClanMember";

const GridBox = styled.div`
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Text = styled.div``;

function ClanWar(clanData) {
  console.log(clanData);
  return (
    <GridBox>
      <Text>{`◈${clanData.clanWar.data.clan.name}◈`}</Text>
      <Text>클랜전 남은 전쟁덱</Text>
      <br />
      <MemberList>
        {clanData.clanMembers.map((member, index) => {
          return (
            <Member key={index}>
              <Info>
                {clanData.clanWar.data.clan.participants.map((par) => {
                  if (par.tag === member.tag && par.decksUsedToday !== 4) {
                    return `${member.name} : ${4 - par.decksUsedToday}회`;
                  }
                  return null;
                })}
              </Info>
            </Member>
          );
        })}
      </MemberList>
    </GridBox>
  );
}

export default ClanWar;
