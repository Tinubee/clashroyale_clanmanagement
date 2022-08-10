import { useQuery } from "react-query";
import { getUpcomingChests } from "../../api";
import Loading from "../../components/Loading";
import chestData from "../../chestData.json";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  border: 1px solid white;
  border-radius: 15px;
`;

const ChestImage = styled.img`
  width: 70px;
  height: 70px;
`;

const ChestInfo = styled.div`
  display: flex;
  margin: 20px;
`;

const CircularLabel = styled.span`
  position: absolute;
  margin-left: 50px;
  background-color: gray;
  width: 25px;
  height: 25px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 11px;
  font-weight: 600;
`;

function MemberChestCycle(playerTag) {
  const allChestList = chestData.chestData;
  const replayerTag = playerTag.data.replace("#", "");
  const { isLoading, data } = useQuery(["upcomingchests", replayerTag], () =>
    getUpcomingChests(replayerTag)
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ImageContainer>
          {data.data.items.map((item) => {
            return (
              <ChestInfo key={item.index}>
                {allChestList.map((data, index) => {
                  if (data.name === item.name) {
                    return (
                      <ChestImage
                        key={index}
                        src={data.imageUrl}
                        alt={item.name}
                      />
                    );
                  } else return null;
                })}
                <CircularLabel>+{item.index}</CircularLabel>
              </ChestInfo>
            );
          })}
        </ImageContainer>
      )}
    </>
  );
}

export default MemberChestCycle;
