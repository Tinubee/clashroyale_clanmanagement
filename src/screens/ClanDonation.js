import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { Info, Member, MemberList } from "./ClanMember";
import { CopyBtn, CopyContainer, CopyText, GridBox, Text } from "./ClanWar";

function ClanDonation(clanData) {
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
        <Text>지원률 100 이하 목록</Text>
        <br />
        <MemberList>
          {clanData.clanMembers.map((member, index) => {
            return (
              <Member key={index}>
                <Info>
                  {member.donations < 100
                    ? `${member.name} - ${member.donations}`
                    : null}
                </Info>
              </Member>
            );
          })}
        </MemberList>
      </GridBox>
    </>
  );
}

export default ClanDonation;
