import styled from "styled-components";

const BadgeContainer = styled.div``;

const BadgeImage = styled.img`
  width: 100px;
  height: 100px;
`;

function BadgeList({ badges }) {
  const nonBadgeImg = "CollectionLevel" || "ClanDonations" || "EasterEgg";
  return (
    <BadgeContainer>
      {badges.map((badge, index) => {
        if (badge.level > 6 && badge.name !== nonBadgeImg) {
          return (
            <BadgeImage
              key={index}
              src={badge.iconUrls.large}
              alt={badge.name}
            />
          );
        }
        return null;
      })}
    </BadgeContainer>
  );
}

export default BadgeList;
