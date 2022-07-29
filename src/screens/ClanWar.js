import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Info, Member, MemberList } from "./ClanMember";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const CopyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const GridBox = styled.form`
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Text = styled.div``;

const CopyBtn = styled.button`
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
`;

const CopyText = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.accentColor};
`;

function ClanWar(clanData) {
  console.log(clanData.clanWar);
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
        <CopyBtn onClick={handleCopy}>
          복사하기 <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
        </CopyBtn>
        <CopyText>{isCopied ? "복사완료 !" : ""}</CopyText>
      </CopyContainer>
      <GridBox ref={formRef}>
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
                      return `${member.name} - ${4 - par.decksUsedToday}회`;
                    }
                    return null;
                  })}
                </Info>
              </Member>
            );
          })}
        </MemberList>
      </GridBox>
    </>
  );
}

export default ClanWar;
