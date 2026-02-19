import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  height: 100vh;
  margin-bottom: 100px;
`;

const ClanList = styled(motion.ul)``;

const ClanName = styled(motion.li)`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  margin-top: 15px;
  border-radius: 15px;
  a {
    padding: 10px;
    transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  box-shadow: 0px 0px 20px rgba(130, 106, 204, 0.5);
`;

const ClanImage = styled.img`
  width: 50px;
  height: 50px;
`;

const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.2,
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

export const clanName = [
  "ALONE",
  "ALONE 2기",
  "ALONE 3기",
  "ALONE Z기",
  "Faded플러스",
];

// export const clanImage = [
//   "https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png",
//   "https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png",
//   "https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png",
//   "https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png",
//   "https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png",
// ];

export const clanImage =
  "https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png";

function Home() {
  const clanTag = ["YJQRVLGY", "YJY8VJJQ", "YVQ0L9RC", "LPLLYQQU", "PQGQPCC9"];

  return (
    <Container>
      <Header name="Home" />
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
                <ClanImage
                  src="https://res.cloudinary.com/dmvu7wol7/image/upload/v1770887127/ClanManagement/Diamond_Star_03.png"
                  alt={name}
                />
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
