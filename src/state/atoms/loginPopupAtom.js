import { atom } from "recoil";

const loginPopupAtom = atom({
  key: "loginPopupAtom",
  default: false,
});

export { loginPopupAtom };
