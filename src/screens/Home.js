import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  height: 90vh;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const ClanList = styled(motion.ul)``;

const ClanName = styled(motion.li)`
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

const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const clanVariants = {
  start: { opacity: 0, y: 10 },
  end: {
    opacity: 1,
    y: 0,
  },
};

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
      <ClanList variants={boxVariants} initial="start" animate="end">
        {clanName.map((name, index) => {
          return (
            <ClanName key={index} variants={clanVariants}>
              <Link
                to={{
                  pathname: `/${clanTag[index]}/member`,
                  state: clanName[index],
                }}
              >
                <span>{name} &rarr;</span>
              </Link>
            </ClanName>
          );
        })}
      </ClanList>
      <Footer />
    </Container>
  );
}

export default Home;
