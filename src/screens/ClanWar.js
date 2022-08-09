import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { boxVariants, Info, Member, MemberList } from "./ClanMember";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

export const CopyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

export const GridBox = styled(motion.div)`
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.div``;

export const CopyBtn = styled(motion.button)`
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  font-size: 14px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

export const CopyText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.accentColor};
`;

function ClanWar(clanData) {
  const formRef = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    //get text in formRef
    const text = formRef.current.innerText;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <>
      <CopyContainer>
        <CopyBtn
          onClick={handleCopy}
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          복사하기 <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
        </CopyBtn>
        <CopyText>{isCopied ? "복사완료 !" : ""}</CopyText>
      </CopyContainer>
      <GridBox
        ref={formRef}
        variants={boxVariants}
        initial="start"
        animate="end"
      >
        {clanData.clanWar.data.periodType === "warDay" ? (
          <>
            <Text>{`◈${clanData.clanWar.data.clan.name}◈`}</Text>
            <Text>
              전투일 {clanData.clanWar.data.periodIndex - 2}일차 클랜전 남은
              전쟁덱
            </Text>
            <br />
            <MemberList>
              {clanData.clanMembers.map((member, index) => {
                return (
                  <Member key={index}>
                    <Info>
                      {clanData.clanWar.data.clan.participants.map((par) => {
                        if (
                          par.tag === member.tag &&
                          par.decksUsedToday !== 4
                        ) {
                          return `${member.name} - ${4 - par.decksUsedToday}회`;
                        }
                        return null;
                      })}
                    </Info>
                  </Member>
                );
              })}
            </MemberList>
          </>
        ) : (
          "훈련일 입니다. 클랜전 시작시 알려드릴게요.😀"
        )}
      </GridBox>
    </>
  );
}

export default ClanWar;