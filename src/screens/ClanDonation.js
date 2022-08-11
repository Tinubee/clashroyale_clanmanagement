import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faIdBadge, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { boxVariants, Info, Member, MemberList } from "./ClanMember";
import {
  CopyBtn,
  CopyContainer,
  CopyText,
  GridBox,
  ModeContainer,
  ModeId,
  ModeTag,
  Text,
} from "./ClanWar";
import { Container } from "./Home";

function ClanDonation(clanData) {
  const formRef = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const [modeId, setModeId] = useState(true);
  const handleCopy = () => {
    //get text in formRef
    const text = formRef.current.innerText;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
  };
  return (
    <Container>
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
        <Text>{`◈${clanData.clanWar.data.clan.name}◈`}</Text>
        <Text>지원률 100 이하 목록</Text>
        <br />
        <MemberList>
          {clanData.clanMembers.map((member, index) => {
            return (
              <Member key={index}>
                <Info>
                  {member.donations < 100
                    ? modeId
                      ? `${member.name} - ${member.donations}`
                      : `@${member.name}`
                    : null}
                </Info>
              </Member>
            );
          })}
        </MemberList>
      </GridBox>
    </Container>
  );
}

export default ClanDonation;
