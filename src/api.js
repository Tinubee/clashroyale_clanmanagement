import axios from "axios";
import { Token } from "./token";

const BASE_UTL = "https://proxy.royaleapi.dev/v1";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Token}`,
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
