import { atom } from "recoil";
import { getAuthTokens } from "../../axios/tokens";

var authToken = getAuthTokens();

const authAtom = atom({
  key: "authAtom",
  default: authToken,
});

export { authAtom };
