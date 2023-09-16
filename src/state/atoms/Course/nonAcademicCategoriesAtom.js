import { atom } from "recoil";

const nonAcademicCategoriesAtom = atom({
  key: "nonAcademicCategories",
  default: [],
});

export { nonAcademicCategoriesAtom };
