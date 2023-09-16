import { atom } from "recoil";

const selectedSectionAtom = atom({
  key: "selectedSectionAtom",
  default: {
    name: "",
    data: [],
  },
});

export { selectedSectionAtom };
