import { faHome, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clanImage, clanName } from "../screens/Home";

const Headers = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const HomeBtn = styled.div`
  display: flex;
  margin-top: 80px;
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  justify-content: center;
  a {
    padding: 12px;
    transition: all 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const GoToClanMember = styled(HomeBtn)`
  margin-top: 15px;
`;

const ClanTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ClanImage = styled.img`
  width: 50px;
  height: 50px;
`;

const AloneClanImage = styled(motion.img)`
  width: 360px;
  height: 360px;
  border-radius: 20px;
  border: 5px solid rgb(130, 106, 204);
`;

export const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

function Header({ name, member, clanTag }) {
  return (
    <>
      <HomeBtn
        style={{
          border: name === "Home" ? "none" : "1px solid white",
        }}
      >
        {name === "Home" ? null : (
          <Link to="/">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home
          </Link>
        )}
      </HomeBtn>
      <GoToClanMember
        style={{
          border: name !== "memberInfo" ? "none" : "1px solid white",
        }}
      >
        {name !== "memberInfo" ? null : (
          <Link to={`/${clanTag.replace("#", "")}/member`}>
            <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon> Clan
            Members
          </Link>
        )}
      </GoToClanMember>
      <Headers
        style={{
          height: name === "Home" ? "360px" : "10vh",
        }}
      >
        <Title>
          {name === "Home" ? (
            <AloneClanImage
              src="https://res.cloudinary.com/dmvu7wol7/image/upload/v1659686487/ClanManagement/ALONE.jpg"
              alt="Home"
              variants={imageVariants}
              initial="initial"
              animate="visible"
            />
          ) : name === "Loading..." ? (
            "Loading..."
          ) : name === "memberInfo" ? (
            <span>{member} Information</span>
          ) : (
            <ClanTitleContainer>
              <ClanImage
                src={clanImage[clanName.findIndex((item) => item === name)]}
                alt={name}
              />
              {name}
            </ClanTitleContainer>
          )}
        </Title>
      </Headers>
    </>
  );
}

export default Header;
