import { atom } from "recoil";

const lectureDetailParamAtom = atom({
  key: "lectureDetailParamAtom",
  default: {
    course_id: "",
    coursesection_id: "",
    lecture_id: "",
  },
});

export { lectureDetailParamAtom };
