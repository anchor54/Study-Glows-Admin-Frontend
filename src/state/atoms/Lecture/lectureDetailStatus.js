import { atom } from "recoil";

const lectureDetailAtom = atom({
  key: "lectureDetailStatus",
  default: true,
});

export { lectureDetailAtom };
