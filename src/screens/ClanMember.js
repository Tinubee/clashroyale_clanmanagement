import { Link } from "react-router-dom";
import styled from "styled-components";

const GridBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const MemberList = styled.ul``;

export const Member = styled.li`
  a {
    margin-left: 10px;
    transition: all 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const Info = styled.span``;

function ClanMember(clansMember) {
  return (
    <MemberList>
      {clansMember.clanMembers.map((member, index) => {
        return (
          <GridBox key={index}>
            <Member>
              <Info>
                {member.name} : {member.arena.name} [{member.trophies}🏆]
              </Info>
              <Link
                to={{
                  pathname: `/member/${member.tag}`,
                  state: member.tag,
                }}
              >
                {member.name}님의 상세정보 &rarr;
              </Link>
            </Member>
          </GridBox>
        );
      })}
    </MemberList>
  );
}

export default ClanMember;
