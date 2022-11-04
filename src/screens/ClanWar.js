import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { boxVariants, MemberList } from "./ClanMember";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./Home";
import { faIdBadge, faTags } from "@fortawesome/free-solid-svg-icons";
import { MapMember, MapMemberContainer } from "./ClanDonation";

export const CopyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

export const ModeContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;
export const ModeId = styled(CopyBtn)``;
export const ModeTag = styled(CopyBtn)``;

function ClanWar(clanData) {
  const formRef = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const [modeId, setModeId] = useState(true);

  const handleBtn = () => {
    //get text in formRe
    const text = formRef.current.innerText;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  console.log(clanData);

  return (
    <Container>
      <CopyContainer>
        <CopyBtn
          onClick={handleBtn}
          variants={boxVariants}
          initial="start"
          animate="end"
        >
          복사하기
          <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
        </CopyBtn>
        <CopyText>{isCopied ? "복사완료 !" : ""}</CopyText>
      </CopyContainer>
      <ModeContainer variants={boxVariants} initial="start" animate="end">
        <ModeId onClick={() => setModeId(true)}>
          아이디로 보기 <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
        </ModeId>
        <ModeTag onClick={() => setModeId(false)}>
          태그로 보기 <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
        </ModeTag>
      </ModeContainer>
      <GridBox
        ref={formRef}
        variants={boxVariants}
        initial="start"
        animate="end"
      >
        {modeId ? (
          <>
            <Text>{`◈${clanData.clanWar.data.clan.name}◈`}</Text>
            <Text>
              전투일 {(clanData.clanWar.data.periodIndex % 7) - 2}일차 클랜전
              남은 전쟁덱
            </Text>
          </>
        ) : (
          ""
        )}
        <br />
        <MemberList>
          {clanData.clanMembers.map((member, index) => {
            return (
              <MapMemberContainer
                key={index}
                style={{ display: modeId ? "block" : "" }}
              >
                <MapMember>
                  {clanData.clanWar.data.clan.participants.map((par) => {
                    if (par.tag === member.tag && par.decksUsedToday !== 4) {
                      if (modeId) {
                        return `${member.name} - ${4 - par.decksUsedToday}회`;
                      } else {
                        return ` @${member.name}`;
                      }
                    }
                    return null;
                  })}
                </MapMember>
              </MapMemberContainer>
            );
          })}
        </MemberList>
        {/*         {clanData.clanWar.data.periodType === "warDay" ? (
          <>
            {modeId ? (
              <>
                <Text>{`◈${clanData.clanWar.data.clan.name}◈`}</Text>
                <Text>
                  전투일 {(clanData.clanWar.data.periodIndex % 7) - 2}일차
                  클랜전 남은 전쟁덱
                </Text>
              </>
            ) : (
              ""
            )}
            <br />
            <MemberList>
              {clanData.clanMembers.map((member, index) => {
                return (
                  <MapMemberContainer
                    key={index}
                    style={{ display: modeId ? "block" : "" }}
                  >
                    <MapMember>
                      {clanData.clanWar.data.clan.participants.map((par) => {
                        if (
                          par.tag === member.tag &&
                          par.decksUsedToday !== 4
                        ) {
                          if (modeId) {
                            return `${member.name} - ${
                              4 - par.decksUsedToday
                            }회`;
                          } else {
                            return ` @${member.name}`;
                          }
                        }
                        return null;
                      })}
                    </MapMember>
                  </MapMemberContainer>
                );
              })}
            </MemberList>
          </>
        ) : (
          "훈련일 입니다. 클랜전 시작시 알려드릴게요.😀"
        )} */}
      </GridBox>
    </Container>
  );
}

export default ClanWar;
