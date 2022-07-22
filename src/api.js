const BASE_UTL = "https://api.clashroyale.com/v1/clans/%23YJY8VJJQ";

export async function fethClan() {
  return await fetch(BASE_UTL).then((response) => response.json());
}
