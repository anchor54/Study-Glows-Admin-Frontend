import { atom } from "recoil";

const initialCourseCategory = {
  id: "",
  name: "",
  type: "",
};

const selectedCourseCategoryAtom = atom({
  key: "selectedCourseCategory",
  default: initialCourseCategory,
});

export { selectedCourseCategoryAtom, initialCourseCategory };
