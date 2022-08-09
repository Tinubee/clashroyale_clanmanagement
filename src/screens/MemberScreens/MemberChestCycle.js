import { useQuery } from "react-query";
import { getUpcomingChests } from "../../api";
import { Container } from "../Home";

function MemberChestCycle(playerTag) {
  const replayerTag = playerTag.data.replace("#", "");
  const { isLoading, data } = useQuery(["upcomingchests", replayerTag], () =>
    getUpcomingChests(replayerTag)
  );

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <Container>
          {data.data.items.map((item) => {
            return (
              <div>
                <span>{item.name}</span>
                <span>{item.index}</span>
              </div>
            );
          })}
        </Container>
      )}
    </>
  );
}

export default MemberChestCycle;
