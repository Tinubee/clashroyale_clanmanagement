import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.accentColor};
`;

const ClanList = styled.ul``;

const ClanName = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function Home() {
  const clanName = [
    "ALONE 본기",
    "ALONE 2기",
    "ALONE 3기",
    "ALONE Z",
    "Faded Plus",
  ];

  const clanTag = ["YJQRVLGY", "YJY8VJJQ", "YVQ0L9RC", "LPLLYQQU", "PQGQPCC9"];
  return (
    <Container>
      <Header>
        <Title>ALONE 클랜 관리 시스템</Title>
      </Header>
      <ClanList>
        {clanName.map((name, index) => {
          return (
            <ClanName key={index}>
              <Link
                to={{
                  pathname: `/${clanTag[index]}`,
                  state: clanName[index],
                }}
              >
                <span>{name} &rarr;</span>
              </Link>
            </ClanName>
          );
        })}
      </ClanList>
    </Container>
  );
}

export default Home;
