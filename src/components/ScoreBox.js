import {
  faCopy,
  faInfoCircle,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { CopyBtn, CopyText } from "../screens/ClanWar";

export const Top = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TopText = styled.div`
  background-color: rgba(0, 0, 0, 1);
  padding: 10px;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Input = styled.input`
  transform-origin: left center;
  border: 1px solid white;
  padding: 5px 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  width: 160px;
`;

const SearchBtn = styled.span`
  background: gray;
  padding: 6px 11px;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 10px;
`;

export const CancleIcon = styled(motion.div)`
  cursor: pointer;
  svg {
    font-size: 30px;
    background-color: inherit;
    color: black;
  }
`;

const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  svg {
    font-size: 22px;
    background-color: inherit;
    color: yellow;
  }
`;

export const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

export const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  height: 400px;
  width: 400px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: gray;
`;

const FilterMemberList = styled.div`
  margin: 0px 10px;
`;
const FilterMember = styled.span``;

function ScoreBox({ clanMembers }) {
  const [score, setScore] = useState(5000);
  const [toggleScore, setToggleScore] = useState(false);
  const [filterMembers, setFilterMembers] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const formRef = useRef();

  const handleCopy = () => {
    const text = formRef.current.innerText;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  const setScoreFuntion = (e) => {
    e.preventDefault();
    setScore(e.target.value);
  };

  const searchFuntion = () => {
    setToggleScore((prev) => !prev);
    setFilterMembers(clanMembers.filter((member) => member.trophies < score));
  };

  const cancleFuntion = () => {
    setToggleScore(false);
    setFilterMembers([]);
  };

  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
      </Icon>
      <AnimatePresence>
        {toggleScore ? (
          <Overlay
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box>
              <Top>
                <TopText>{`${score}점 이하 유저 목록`}</TopText>
                <CancleIcon onClick={cancleFuntion}>
                  <FontAwesomeIcon
                    icon={faSquareXmark}
                    size="lg"
                  ></FontAwesomeIcon>
                </CancleIcon>
              </Top>
              <CopyContainer>
                <CopyBtn onClick={handleCopy}>
                  복사하기 <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
                </CopyBtn>
                <CopyText>{isCopied ? "복사완료 !" : ""}</CopyText>
              </CopyContainer>
              <FilterMemberList ref={formRef}>
                {filterMembers.length > 0
                  ? filterMembers.map((member) => {
                      return (
                        <FilterMember key={member.tag}>
                          @{member.name}{" "}
                        </FilterMember>
                      );
                    })
                  : "No Member Found"}
              </FilterMemberList>
            </Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Input
        placeholder="Score"
        onChange={setScoreFuntion}
        type="number"
        value={score}
        min="3000"
        step="100"
      />
      <Text>점 이하</Text>
      <SearchBtn onClick={searchFuntion}>검색</SearchBtn>
    </Container>
  );
}

export default ScoreBox;
