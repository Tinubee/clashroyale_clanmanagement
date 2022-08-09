import axios from "axios";

const BASE_UTL = "https://proxy.royaleapi.dev/v1";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

export async function getPlayerData(playerTag) {
  const tag = playerTag.replace("#", "");
  return await axios.get(BASE_UTL + `/players/%23${tag}`, {
    headers,
  });
}

export async function getClanData(clanTag) {
  return await axios.get(BASE_UTL + `/clans/%23${clanTag}`, {
    headers,
  });
}

export async function getClanWarData(clanTag) {
  return await axios.get(BASE_UTL + `/clans/%23${clanTag}/currentriverrace`, {
    headers,
  });
}

export async function getUpcomingChests(playerTag) {
  const tag = playerTag.replace("#", "");
  return await axios.get(BASE_UTL + `/players/%23${tag}/upcomingchests`, {
    headers,
  });
}

export async function getAllCards() {
  return await axios.get(BASE_UTL + `/cards`, {
    headers,
  });
}
