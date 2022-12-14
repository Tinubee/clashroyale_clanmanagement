import { atom } from "recoil";

export const modeDarkAtom = atom({
  key: "Dark",
  default: localStorage.getItem("mode") === "true" ? true : false,
});

export const serachIdAtom = atom({
  key: "SearchID",
  default: "",
});
